'use client';

import { useEffect, useRef, useState } from 'react';

type ChatMessage = {
  role: 'bot' | 'user';
  text: string;
};

type AnthropicMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type Summary = {
  trigger: string;
  area: string;
  size: string;
  timeline: string;
  outcome: string;
  name: string;
  email: string;
};

const OPENING =
  "Thanks for reaching out. I'm NexIQ, OperonIQ's intake assistant - I'll ask you a few quick questions so the right person on our team is fully prepared when they follow up. To start: what brought you to OperonIQ today?";

const SYSTEM = `You are NexIQ, the intake assistant for OperonIQ - a senior-led boutique consultancy specialising in business transformation, data, automation and agentic AI. Your only job is to gather initial context from a prospective client so that when a senior OperonIQ practitioner follows up, they are fully prepared.

Tone: direct, warm, professional. No filler. No corporate speak. No emojis. Sound like a senior consultant, not a chatbot. Never say "Great!" or "Absolutely!" or "Of course!". No hollow affirmations.

You have already introduced yourself and asked what brought them to OperonIQ. Now ask these questions one at a time in order:
1. Which area of the business is most affected - process, data, technology, people, or a combination?
2. Roughly how large is the organisation?
3. Is there a specific timeline or trigger driving this?
4. What does a successful outcome look like in the next 6-12 months?

After the fourth answer: thank them briefly, confirm a senior OperonIQ team member will follow up within one business day, and ask for their name and email so we can route the conversation to the right person. Then close warmly and concisely - no more questions after that.

Hard rules:
- One question per message only
- Keep each message under 3 sentences
- Acknowledge their answer briefly before asking the next - never repeat verbatim
- Never offer advice, analysis or service descriptions
- Extract the following from the conversation and include them as a JSON block at the very end of your final message (after you have collected name and email), on its own line, with no other text after it:
  SUMMARY_JSON:{"trigger":"...","area":"...","size":"...","timeline":"...","outcome":"...","name":"...","email":"..."}`;

const QUICK_OPTS: Record<number, string[]> = {
  1: [
    'Process inefficiency',
    'Data & AI readiness',
    'Platform consolidation',
    'Automation opportunity',
    'A combination',
  ],
  2: ['Under 500', '500-2,000', '2,000-5,000', 'Over 5,000'],
  3: [
    'Board AI agenda',
    'Failed implementation',
    'Digital transformation push',
    'No specific trigger yet',
  ],
};

function HubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="15" cy="15" r="4" fill="#4ECDA4" />
      <line
        x1="15"
        y1="11"
        x2="15"
        y2="4"
        stroke="#4ECDA4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="19"
        x2="15"
        y2="26"
        stroke="#4ECDA4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="11"
        y1="15"
        x2="4"
        y2="15"
        stroke="#4ECDA4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="19"
        y1="15"
        x2="26"
        y2="15"
        stroke="#4ECDA4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="12.2"
        y1="12.2"
        x2="7"
        y2="7"
        stroke="#4ECDA4"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <line
        x1="17.8"
        y1="17.8"
        x2="23"
        y2="23"
        stroke="#4ECDA4"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="15" cy="4" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
      <circle cx="15" cy="26" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
      <circle cx="4" cy="15" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
      <circle cx="26" cy="15" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
      <circle cx="7" cy="7" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
      <circle cx="23" cy="23" r="2" fill="none" stroke="#4ECDA4" strokeWidth="1" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="#6B9BC8" strokeWidth="1.5" />
      <path
        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
        stroke="#6B9BC8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="#0B1220"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NexIQ() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: OPENING },
  ]);
  const [history, setHistory] = useState<AnthropicMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [opts, setOpts] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const trimmedText = text.trim();

    if (!trimmedText || loading || done) {
      return;
    }

    setInput('');
    setOpts([]);
    setMessages((prev) => [...prev, { role: 'user', text: trimmedText }]);

    const newHistory: AnthropicMessage[] = [
      ...history,
      { role: 'user', content: trimmedText },
    ];

    setHistory(newHistory);
    setLoading(true);

    try {
      const res = await fetch('/api/nexiq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory, system: SYSTEM }),
      });
      const data = await res.json();
      const raw =
        data.content?.[0]?.text ||
        'Something went wrong - please try again.';

      let displayText = raw;
      const summaryPattern = /SUMMARY_JSON:(\{[\s\S]*?\})/;
      const summaryMatch = raw.match(summaryPattern);

      if (summaryMatch) {
        displayText = raw.replace(summaryPattern, '').trim();

        try {
          const summary = JSON.parse(summaryMatch[1]) as Summary;
          await sendEmail(summary);
        } catch (error) {
          console.error('Summary parse failed:', error);
        }

        setDone(true);
      }

      const nextStep = step + 1;

      setStep(nextStep);
      setHistory((prev) => [...prev, { role: 'assistant', content: raw }]);
      setMessages((prev) => [...prev, { role: 'bot', text: displayText }]);

      if (!summaryMatch) {
        setOpts(QUICK_OPTS[nextStep] || []);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Something went wrong on my end - please try again or email us directly at hello@operoniq.com.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function sendEmail(summary: Summary) {
    try {
      await fetch('/api/nexiq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sendSummary: true, summary }),
      });
    } catch (error) {
      console.error('Email dispatch failed:', error);
    }
  }

  return (
    <section className="px-5 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-navy-900/80 shadow-glass backdrop-blur-2xl lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center gap-5 border-b border-white/10 bg-navy-950/70 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-operon-green">
            <span className="h-px w-6 bg-operon-green" />
            Contact
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Start the conversation.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Tell us what is on your mind. We will match you with the right
              person from our team and respond within one business day.
            </p>
          </div>

          <div className="grid gap-4 pt-2">
            {[
              {
                title: 'Response time',
                desc: 'Within one business day',
              },
              {
                title: "Who you'll speak with",
                desc: 'A senior practitioner, not a sales team',
              },
              {
                title: 'No commitment required',
                desc: 'An initial conversation costs nothing',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-operon-cyan/20 bg-navy-850">
                  <HubIcon size={16} />
                </div>
                <div className="text-sm leading-6 text-slate-400">
                  <strong className="block font-medium text-slate-200">
                    {title}
                  </strong>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-[620px] flex-col bg-[#0D1929]">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-operon-cyan/25 bg-[#132238]">
              <HubIcon />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-200">NexIQ</div>
              <div className="mt-1 flex items-center gap-2 text-xs text-operon-green">
                <span className="h-1.5 w-1.5 rounded-full bg-operon-green" />
                Active now
              </div>
            </div>
          </div>

          <div
            ref={messagesRef}
            className="flex min-h-[360px] flex-1 flex-col gap-3 overflow-y-auto px-5 py-5 sm:px-6"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-start gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
                    message.role === 'user'
                      ? 'border-operon-cyan/20 bg-[#1A3A5C]'
                      : 'border-operon-cyan/25 bg-[#132238]'
                  }`}
                >
                  {message.role === 'user' ? <UserIcon /> : <HubIcon size={14} />}
                </div>
                <div
                  className={`max-w-[82%] rounded-lg border px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'border-operon-cyan/20 bg-[#132E50] text-slate-100'
                      : 'border-white/10 bg-[#0F1C33] text-slate-300'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-operon-cyan/25 bg-[#132238]">
                  <HubIcon size={14} />
                </div>
                <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#0F1C33] px-3.5 py-3">
                  {[0, 200, 400].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-nexiq-blink rounded-full bg-operon-green"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {opts.length > 0 ? (
            <div className="flex flex-wrap gap-2 px-5 pb-4 sm:px-6">
              {opts.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setInput(option);
                    void sendMessage(option);
                  }}
                  className="rounded-full border border-operon-cyan/20 bg-[#0F1C33] px-3 py-1.5 text-xs font-medium text-[#6B9BC8] transition hover:border-operon-green/45 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={loading || done}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}

          <div className="flex items-center gap-2 border-t border-white/10 px-5 py-4 sm:px-6">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  void sendMessage(input);
                }
              }}
              placeholder={done ? 'Conversation complete.' : 'Type your answer...'}
              disabled={loading || done}
              className="min-w-0 flex-1 rounded-md border border-white/10 bg-[#0F1C33] px-3.5 py-2.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-operon-cyan/60 focus:ring-2 focus:ring-operon-cyan/15 disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => void sendMessage(input)}
              disabled={loading || done || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#4ECDA4] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
