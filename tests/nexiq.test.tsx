// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NexIQ } from '@/components/NexIQ';
import en from '@/messages/en.json';
import ro from '@/messages/ro.json';

const fetchMock = vi.fn();

function claudeReply(text: string) {
  return Response.json({ content: [{ type: 'text', text }] });
}

function renderNexIQ(locale: 'en' | 'ro' = 'en') {
  const messages = locale === 'en' ? en : ro;
  return render(
    <NextIntlClientProvider locale={locale} messages={{ Contact: messages.Contact, NexIQSystem: messages.NexIQSystem }}>
      <NexIQ />
    </NextIntlClientProvider>,
  );
}

function requestBody(call: number) {
  return JSON.parse(fetchMock.mock.calls[call][1].body);
}

async function typeAndSend(text: string, locale: 'en' | 'ro' = 'en') {
  const chat = (locale === 'en' ? en : ro).Contact.chat;
  fireEvent.change(screen.getByPlaceholderText(chat.placeholder), { target: { value: text } });
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: chat.sendAria }));
  });
}

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(cleanup);

describe('NexIQ', () => {
  it('shows the localized opening message', () => {
    renderNexIQ('ro');
    expect(screen.getByText(ro.Contact.chat.opening)).toBeTruthy();
  });

  it('sends the literal system prompt (braces intact) with the conversation history', async () => {
    fetchMock.mockResolvedValue(claudeReply('Thanks! Which area is most affected?'));
    renderNexIQ();

    await typeAndSend('We need help with AI');

    expect(fetchMock.mock.calls[0][0]).toBe('/api/nexiq');
    const body = requestBody(0);
    expect(body.system).toBe(en.NexIQSystem);
    expect(body.system).toContain('SUMMARY_JSON:{"trigger"');
    expect(body.messages).toEqual([{ role: 'user', content: 'We need help with AI' }]);
    expect(await screen.findByText('Thanks! Which area is most affected?')).toBeTruthy();
  });

  it('offers quick-reply options after the first answer and sends the chosen one', async () => {
    fetchMock.mockResolvedValue(claudeReply('Which area?'));
    renderNexIQ();

    await typeAndSend('Hello');

    const option = await screen.findByRole('button', { name: en.Contact.chat.quickOpts.area[1] });
    fetchMock.mockResolvedValue(claudeReply('How large is your organisation?'));
    await act(async () => {
      fireEvent.click(option);
    });

    const body = requestBody(1);
    expect(body.messages).toEqual([
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'Which area?' },
      { role: 'user', content: en.Contact.chat.quickOpts.area[1] },
    ]);
    expect(await screen.findByRole('button', { name: en.Contact.chat.quickOpts.size[0] })).toBeTruthy();
  });

  it('strips SUMMARY_JSON from the reply, emails the summary and ends the conversation', async () => {
    const summary = {
      trigger: 'AI agenda',
      area: 'Automation opportunity',
      size: 'Over 5,000',
      timeline: 'Q2',
      outcome: 'Fewer manual steps',
      name: 'Ana',
      email: 'ana@example.com',
    };
    fetchMock
      .mockResolvedValueOnce(claudeReply(`Thanks Ana, we'll be in touch.\nSUMMARY_JSON:${JSON.stringify(summary)}`))
      .mockResolvedValueOnce(Response.json({ ok: true }));
    renderNexIQ();

    await typeAndSend('ana@example.com');

    expect(await screen.findByText("Thanks Ana, we'll be in touch.")).toBeTruthy();
    expect(screen.queryByText(/SUMMARY_JSON/)).toBeNull();
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(requestBody(1)).toEqual({ sendSummary: true, summary });

    const input = screen.getByPlaceholderText(en.Contact.chat.placeholderDone) as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('shows the network error message when the request fails', async () => {
    fetchMock.mockRejectedValue(new Error('offline'));
    renderNexIQ();

    await typeAndSend('Hello');

    expect(await screen.findByText(en.Contact.chat.networkError)).toBeTruthy();
  });

  it('shows the generic error when the API returns no content', async () => {
    fetchMock.mockResolvedValue(Response.json({ error: 'Anthropic API key is missing' }, { status: 500 }));
    renderNexIQ();

    await typeAndSend('Hello');

    expect(await screen.findByText(en.Contact.chat.genericError)).toBeTruthy();
  });

  it('does not send empty or whitespace-only input', async () => {
    renderNexIQ();

    await typeAndSend('   ');

    expect(fetchMock).not.toHaveBeenCalled();
  });
});
