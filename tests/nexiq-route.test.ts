import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GET, OPTIONS, POST } from '@/app/api/nexiq/route';

const cloudflareEnv: Record<string, string | undefined> = {};

vi.mock('@opennextjs/cloudflare', () => ({
  getCloudflareContext: vi.fn(async () => ({ env: cloudflareEnv })),
}));

function post(body: unknown) {
  return POST(
    new Request('http://localhost/api/nexiq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
  );
}

const fetchMock = vi.fn();

beforeEach(() => {
  for (const key of Object.keys(cloudflareEnv)) delete cloudflareEnv[key];
  Object.assign(cloudflareEnv, {
    ANTHROPIC_API_KEY: 'sk-ant-test',
    RESEND_API_KEY: 're_test',
    NOTIFY_EMAIL: 'notify@example.com',
    FROM_EMAIL: 'from@example.com',
  });
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

describe('/api/nexiq', () => {
  it('answers CORS preflight and rejects GET', async () => {
    const preflight = await OPTIONS();
    expect(preflight.headers.get('Access-Control-Allow-Methods')).toBe('POST, OPTIONS');

    const get = await GET();
    expect(get.status).toBe(405);
  });

  it('returns 400 for an invalid JSON body', async () => {
    const res = await post('{not json');
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  describe('chat mode', () => {
    it('proxies messages and system prompt to the Anthropic Messages API', async () => {
      const claudeReply = { content: [{ type: 'text', text: 'Hello' }] };
      fetchMock.mockResolvedValue(Response.json(claudeReply));

      const messages = [{ role: 'user', content: 'Hi' }];
      const res = await post({ messages, system: 'You are NexIQ' });

      expect(res.status).toBe(200);
      expect(await res.json()).toEqual(claudeReply);
      expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*');

      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe('https://api.anthropic.com/v1/messages');
      expect(init.headers).toMatchObject({
        'x-api-key': 'sk-ant-test',
        'anthropic-version': '2023-06-01',
      });
      expect(JSON.parse(init.body)).toEqual({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        system: 'You are NexIQ',
        messages,
      });
    });

    it('passes upstream error status through', async () => {
      fetchMock.mockResolvedValue(Response.json({ error: { type: 'overloaded' } }, { status: 529 }));

      const res = await post({ messages: [], system: 'x' });
      expect(res.status).toBe(529);
    });

    it('returns 500 when the Anthropic key is missing', async () => {
      delete cloudflareEnv.ANTHROPIC_API_KEY;
      vi.stubEnv('ANTHROPIC_API_KEY', '');

      const res = await post({ messages: [], system: 'x' });
      expect(res.status).toBe(500);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it('falls back to process.env when the Cloudflare env lacks a value', async () => {
      delete cloudflareEnv.ANTHROPIC_API_KEY;
      vi.stubEnv('ANTHROPIC_API_KEY', 'sk-ant-from-env');
      fetchMock.mockResolvedValue(Response.json({ content: [] }));

      await post({ messages: [], system: 'x' });
      expect(fetchMock.mock.calls[0][1].headers['x-api-key']).toBe('sk-ant-from-env');
    });

    it.each([
      ['messages missing', { system: 'x' }],
      ['messages not an array', { messages: 'hi', system: 'x' }],
      ['system missing', { messages: [] }],
    ])('returns 400 when %s', async (_, body) => {
      const res = await post(body);
      expect(res.status).toBe(400);
      expect(fetchMock).not.toHaveBeenCalled();
    });
  });

  describe('summary email mode', () => {
    const summary = {
      trigger: 'Board pressure',
      area: 'Data & AI readiness',
      size: '500-2,000',
      timeline: 'Q1',
      outcome: 'Agents in production',
      name: 'Ana <script>alert(1)</script>',
      email: 'ana@example.com',
    };

    it('sends the intake summary through Resend', async () => {
      fetchMock.mockResolvedValue(Response.json({ id: 'email_1' }));

      const res = await post({ sendSummary: true, summary });

      expect(res.status).toBe(200);
      expect(await res.json()).toEqual({ ok: true });

      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe('https://api.resend.com/emails');
      expect(init.headers.Authorization).toBe('Bearer re_test');

      const body = JSON.parse(init.body);
      expect(body.from).toBe('NexIQ <from@example.com>');
      expect(body.to).toBe('notify@example.com');
      expect(body.subject).toMatch(/^New NexIQ intake - /);
      expect(body.html).toContain('Data &amp; AI readiness');
      expect(body.html).toContain('mailto:ana%40example.com');
    });

    it('HTML-escapes visitor-provided values', async () => {
      fetchMock.mockResolvedValue(Response.json({}));

      await post({ sendSummary: true, summary });
      const { html } = JSON.parse(fetchMock.mock.calls[0][1].body);

      expect(html).not.toContain('<script>');
      expect(html).toContain('Ana &lt;script&gt;alert(1)&lt;/script&gt;');
    });

    it('escapes a malicious email address in the mailto link', async () => {
      fetchMock.mockResolvedValue(Response.json({}));

      await post({ sendSummary: true, summary: { ...summary, email: '"><img src=x onerror=alert(1)>' } });
      const { html } = JSON.parse(fetchMock.mock.calls[0][1].body);

      expect(html).not.toContain('<img');
    });

    it('returns 500 when email configuration is missing', async () => {
      delete cloudflareEnv.RESEND_API_KEY;
      vi.stubEnv('RESEND_API_KEY', '');

      const res = await post({ sendSummary: true, summary });
      expect(res.status).toBe(500);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it('still returns ok when Resend is unreachable', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      fetchMock.mockRejectedValue(new Error('network down'));

      const res = await post({ sendSummary: true, summary });
      expect(res.status).toBe(200);
    });
  });
});
