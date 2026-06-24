import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type AnthropicMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type NexIQSummary = {
  trigger?: string;
  area?: string;
  size?: string;
  timeline?: string;
  outcome?: string;
  name?: string;
  email?: string;
};

type CloudflareNexIQEnv = CloudflareEnv & {
  ANTHROPIC_API_KEY?: string;
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL?: string;
  FROM_EMAIL?: string;
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function GET() {
  return new NextResponse('Method not allowed', {
    status: 405,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  let payload: {
    messages?: AnthropicMessage[];
    system?: string;
    sendSummary?: boolean;
    summary?: NexIQSummary;
  };

  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON payload' }, 400);
  }

  const env = await getEnv();
  const { messages, system, sendSummary, summary } = payload;

  if (sendSummary && summary) {
    if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL || !env.FROM_EMAIL) {
      return json({ error: 'Email configuration is missing' }, 500);
    }

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `NexIQ <${env.FROM_EMAIL}>`,
          to: env.NOTIFY_EMAIL,
          subject: `New NexIQ intake - ${new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}`,
          html: buildEmail(summary),
        }),
      });
    } catch (error) {
      console.error('Email failed:', error);
    }

    return json({ ok: true });
  }

  if (!env.ANTHROPIC_API_KEY) {
    return json({ error: 'Anthropic API key is missing' }, 500);
  }

  if (!Array.isArray(messages) || !system) {
    return json({ error: 'Messages and system prompt are required' }, 400);
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      system,
      messages,
    }),
  });

  const data = await response.json();
  return json(data, response.status);
}

async function getEnv(): Promise<CloudflareNexIQEnv> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const cfEnv = env as CloudflareNexIQEnv;

    return {
      ...cfEnv,
      ANTHROPIC_API_KEY:
        cfEnv.ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY,
      RESEND_API_KEY: cfEnv.RESEND_API_KEY ?? process.env.RESEND_API_KEY,
      NOTIFY_EMAIL: cfEnv.NOTIFY_EMAIL ?? process.env.NOTIFY_EMAIL,
      FROM_EMAIL: cfEnv.FROM_EMAIL ?? process.env.FROM_EMAIL,
    } as CloudflareNexIQEnv;
  } catch {
    return {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      NOTIFY_EMAIL: process.env.NOTIFY_EMAIL,
      FROM_EMAIL: process.env.FROM_EMAIL,
    };
  }
}

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: corsHeaders,
  });
}

function buildEmail(summary: NexIQSummary) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#0B1220;padding:24px 28px;border-radius:8px 8px 0 0">
        <span style="color:#4ECDA4;font-size:12px;letter-spacing:.1em;text-transform:uppercase">NexIQ · OperonIQ Intake</span>
        <h2 style="color:#ffffff;font-size:18px;font-weight:500;margin:8px 0 0">New conversation summary</h2>
      </div>
      <div style="background:#f9f9f9;padding:28px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px">
        ${row('What brought them here', summary.trigger)}
        ${row('Area of business affected', summary.area)}
        ${row('Organisation size', summary.size)}
        ${row('Timeline or trigger event', summary.timeline)}
        ${row('Success in 6-12 months', summary.outcome)}
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e0e0e0">
          ${row('Name', summary.name)}
          ${row('Email', emailLink(summary.email), true)}
        </div>
        <div style="margin-top:24px;font-size:11px;color:#999">
          Received ${new Date().toLocaleString('en-GB', {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </div>
      </div>
    </div>
  `;
}

function row(label: string, value?: string, valueIsHtml = false) {
  const content = valueIsHtml ? value : escapeHtml(value);

  return `
    <div style="margin-bottom:16px">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin-bottom:4px">${escapeHtml(label)}</div>
      <div style="font-size:14px;color:#1a1a1a;line-height:1.5">${content || '-'}</div>
    </div>
  `;
}

function emailLink(email?: string) {
  if (!email) {
    return undefined;
  }

  const escapedEmail = escapeHtml(email);
  const hrefEmail = encodeURIComponent(email);

  return `<a href="mailto:${hrefEmail}" style="color:#0B6FCB">${escapedEmail}</a>`;
}

function escapeHtml(value?: string) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
