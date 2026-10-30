# OperonIQ

Marketing and contact website for **OperonIQ** — an agentic enterprise consultancy specialising in business transformation, data architecture, intelligent automation and AI.

Built with Next.js 16 (App Router), deployed to **Cloudflare Workers** via OpenNext.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS 3 with custom design tokens |
| i18n | next-intl (English + Romanian) |
| Deployment | Cloudflare Workers via `@opennextjs/cloudflare` |
| AI | Anthropic Claude (`claude-sonnet-4-6`) |
| Email | Resend |
| Icons | Lucide React |

---

## Project Structure

```
app/
  [locale]/                   # All pages live under the active locale segment
    page.tsx                  # Home page
    about/page.tsx            # About page
    capabilities/page.tsx     # Capabilities page
    services/page.tsx         # Redirects to /capabilities
    contact/page.tsx          # Contact page (NexIQ chatbot)
    layout.tsx                # Root <html>/<body>, locale validation, metadata, analytics
  api/nexiq/route.ts          # Cloudflare Worker API — Claude + Resend
  globals.css

i18n/
  routing.ts                  # Locales (en, ro), default locale, prefix strategy
  navigation.ts                # Locale-aware Link/redirect/usePathname/useRouter
  request.ts                  # Resolves the active locale + loads its messages
  pick.ts                     # Narrows messages passed to client components

messages/
  en.json                     # English copy
  ro.json                     # Romanian copy

middleware.ts                 # next-intl locale detection/routing (Edge runtime —
                               # kept as "middleware.ts" rather than Next 16's
                               # "proxy.ts", which is Node.js-only and unsupported
                               # by OpenNext on Cloudflare Workers)

components/
  NexIQ.tsx                   # AI intake chatbot (client component)
  capabilities/
    CapabilitiesPageContent.tsx
  services/
    ServicesPageContent.tsx
  home/
    AgenticOperatingModel.tsx  # SVG diagram — 7-node intelligence layer
    HeroSection.tsx
    ProblemSection.tsx
    CapabilitiesSection.tsx
    ServicesSection.tsx
    OperatingModelSection.tsx
    ControlTowerSection.tsx
    AgenticAiServicesSection.tsx
    FinalCTA.tsx
    Header.tsx
    Footer.tsx
    SiteFrame.tsx
    GradientButton.tsx
    GradientSeparator.tsx
    content.ts                 # Shared copy and data
    types.ts

public/
  logos/                      # Technology SVG logos (20+)
  operoniq-logo.png
  operoniq-logo-transparent.png
  operoniq-wordmark.png
  icon.svg

cloudflare/
  open-next.config.ts         # OpenNext Cloudflare adapter config

wrangler.jsonc                # Cloudflare Workers config
```

---

## Pages

### `/` — Home
Full-page marketing site with sections:
- **Hero** — headline, CTA buttons, animated Agentic Operating Model SVG diagram (desktop only)
- **The Challenge** — problem framing with pull-quote
- **Capabilities** — six capability cards
- **Services** — service offerings
- **Operating Model** — methodology overview
- **Control Tower** — governance and oversight section
- **Final CTA** — links to `/contact`

### `/contact`
Houses the **NexIQ** AI intake chatbot. NexIQ guides prospective clients through a structured 5-question intake flow powered by Claude, then emails a summary to the notify address via Resend.

### `/capabilities`
Six capability pillars with technology ecosystem chips (logo + label) sourced from `/public/logos/` and expandable service cards. The Romanian page is `/ro/capabilities`.

**Agent Factory** sits under **Automation & Agentic AI**. Its English and Romanian content lives at `Capabilities.pillars.05.services.s05-01` in the corresponding message file. The product name stays **Agent Factory** in both languages.

- Updated challenge, outcomes and deliverables cover production-ready agents, reusable components, business-system integrations, evaluation, guardrails and developer/business-user enablement.
- Four tags describe TypeScript/Python agents, Claude/OpenAI/Azure AI, MCP/tool integrations and evaluations/guardrails. Their existing blue/green pill styles alternate through the positional `TAG_TYPES['s05-01']` configuration in `components/capabilities/CapabilitiesPageContent.tsx`.
- The **Built with Agent Factory** section showcases **Sofia**, an AI quoting assistant that retrieves furniture products and photos by SKU and turns a chat into a client-ready offer. Its technology line is `Next.js · Supabase · LLM tool calling · Shopify`.
- A right-aligned **Request a walkthrough →** link (**Solicită o prezentare →** in Romanian) leads to the localized contact page, where NexIQ is available.

Capability items support an optional, localized `showcase` object with `heading`, `title`, `label`, `description`, `stack` and an optional `link: { label, href }`. It renders between Deliverables and the tags as a padded inset panel with a violet section heading. Cards without a showcase retain their existing rendering.

An optional `sectionHeadings` object (`challenge`, `outcomes`, `deliverables`) overrides the shared section labels for an individual card. Agent Factory uses this for the exact Romanian labels without changing other cards. All card and showcase copy belongs in the locale message files; components contain no hardcoded Romanian text.

### `/services`
Redirects to the localized Capabilities page (`/capabilities` or `/ro/capabilities`).

### `/about`
Static marketing page with technology ecosystem chips sourced from `/public/logos/`.

---

## Internationalization

The site is available in **English** (default, unprefixed) and **Romanian** (`/ro`), via [next-intl](https://next-intl.dev).

- `en` is served at the root (`/`, `/about`, `/capabilities`, `/contact`) — no prefix.
- `ro` is served under `/ro` (`/ro`, `/ro/about`, `/ro/capabilities`, `/ro/contact`).
- A language switcher (`components/home/LanguageSwitcher.tsx`) lives in the header on every page.
- All copy lives in `messages/en.json` / `messages/ro.json`, keyed by page/section. Technology and product names (Microsoft 365, Python, Snowflake, etc.) are intentionally left untranslated.
- The NexIQ chatbot's system prompt, quick-reply options and UI strings are localized too — the assistant is instructed to respond only in the active locale's language, regardless of what the visitor types. The email notification sent to the OperonIQ team stays in English regardless of locale, since it's internal/administrative.
- Client components (`NexIQ`, `CapabilitiesPageContent`) only receive the message namespaces they actually use (see `i18n/pick.ts`), so the rest of the site doesn't ship their translations in its page payload.
- Showcase content and per-card section headings use the same locale message source as other capability fields. Use the locale-aware `Link` from `i18n/navigation.ts` for showcase links: a configured `/contact` destination resolves to `/ro/contact` in Romanian.

To add a locale: add it to `i18n/routing.ts`, add a `messages/<locale>.json` file with the same keys as `en.json`, and add a label to `LanguageSwitcher.tsx`.

---

## NexIQ — AI Intake Chatbot

NexIQ is a guided conversational intake assistant embedded on the `/contact` page.

**Flow:**
1. Greets the visitor and asks what brought them to OperonIQ
2. Asks which area of the business is most affected (quick-select options)
3. Asks organisation size (quick-select)
4. Asks if there is a specific timeline or trigger (quick-select)
5. Asks what success looks like in 6–12 months
6. Collects visitor name and email
7. On the final message, Claude appends a `SUMMARY_JSON:{...}` block — the client parses this and POSTs to `/api/nexiq` to trigger the Resend notification email

**API route:** `POST /api/nexiq`

Two modes controlled by the request body:

| Mode | Body | Action |
|---|---|---|
| Chat | `{ messages, system }` | Proxies to Anthropic Claude API |
| Email | `{ sendSummary: true, summary }` | Sends intake summary via Resend |

The localized system prompt is read with `t.raw('NexIQSystem')` in `components/NexIQ.tsx`. Its `SUMMARY_JSON:{...}` example contains literal braces, which must not be parsed as ICU translation arguments; using `t('NexIQSystem')` causes the `INVALID_MESSAGE: MALFORMED_ARGUMENT` error on the contact page.

---

## Analytics

Google Analytics is configured in `app/[locale]/layout.tsx` using `next/script` with the `afterInteractive` strategy and stable IDs (`google-analytics-loader` and `google-analytics-init`). The measurement ID is `G-QQ209BH5KK`.

Keep these scripts managed by `next/script`. This prevents React's “Encountered a script tag while rendering React component” error during client-side language switching and avoids duplicate loading or initialization.

---

## Design Tokens (Tailwind)

```
Colors:
  navy-950   #071426   (page background)
  navy-900   #0E1D33
  navy-850   #10243F
  operon-blue   #1495FF
  operon-cyan   #20C5E8   (primary accent)
  operon-green  #44D062   (active / success states)

Animations:
  slow-float      7s ease-in-out infinite — hero diagram float
  signal-pulse    3.8s ease-in-out infinite — status indicators
  gradient-shift  18s ease-in-out infinite — background gradients
```

---

## Environment Variables

### Cloudflare `vars` (non-secret, in `wrangler.jsonc`)

| Variable | Value | Purpose |
|---|---|---|
| `NOTIFY_EMAIL` | `chubby07@gmail.com` | Recipient of NexIQ intake summaries |
| `FROM_EMAIL` | `onboarding@resend.dev` | Resend sender address |

> When you verify a custom domain in Resend, update `FROM_EMAIL` to e.g. `nexiq@operoniq.com`.

### Cloudflare Secrets (encrypted, set via Wrangler CLI)

| Secret | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Authenticates requests to the Anthropic Claude API |
| `RESEND_API_KEY` | Authenticates requests to the Resend email API |

Set secrets with:

```bash
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put RESEND_API_KEY
```

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

The `/api/nexiq` route reads `ANTHROPIC_API_KEY` and `RESEND_API_KEY` from `process.env` as a fallback when not running in Cloudflare — create a `.env.local` file:

```env
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
NOTIFY_EMAIL=chubby07@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

### Latest verification — 30 October 2026

- Checked Agent Factory in English and Romanian at **375px, 768px and 1440px**: tags wrap with consistent **8px gaps**, with no card or page overflow. Sofia's panel keeps its inset spacing and **14px vertical / 16px horizontal padding**.
- Checked Romanian diacritics (`ă`, `â`, `î`, `ș`, `ț`), including comma-below `ș`/`ț`, in the rendered site font.
- Measured English Sofia showcase text contrast at **5.19:1 or higher** during the layout review, above the WCAG AA normal-text threshold of **4.5:1**.
- Checked repeated mouse and keyboard accordion toggles, including the existing **200ms chevron transition**, without clipping the taller content.
- Checked **EN → RO → EN** navigation on Capabilities and Contact without browser console errors. Analytics initialized once, with no duplicate script elements; external analytics requests were mocked.
- Checked contact-page rendering and chat submission in both languages with mocked API responses, confirming the complete literal system prompt is preserved. These checks did not send live chat requests or notification emails.
- TypeScript (`npx tsc --noEmit --incremental false`), ESLint on the changed components/layout, and `git diff --check` passed for the implementation changes.

---

## Deployment

### Build and deploy to Cloudflare Workers

```bash
npm run deploy
```

This runs `opennextjs-cloudflare build` then `wrangler deploy`.

The worker is published to:
```
https://operoniq.chubby07.workers.dev
```

### Preview locally with Wrangler

```bash
npm run preview:worker
```

Builds the worker bundle and runs it locally via `wrangler dev`.

### Build only (no deploy)

```bash
npm run build:worker
```

Output goes to `.open-next/`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server (local only) |
| `npm run build` | Standard Next.js production build |
| `npm run build:worker` | Build for Cloudflare Workers via OpenNext |
| `npm run preview:worker` | Build worker + run locally with Wrangler |
| `npm run deploy` | Build worker + deploy to Cloudflare |
| `npm run start` | Start Next.js production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest test suite once |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Testing

Automated tests use [Vitest](https://vitest.dev) and Testing Library and live in `tests/`:

- `messages.test.ts` — EN/RO message parity, valid ICU syntax, Romanian comma-below diacritics, NexIQ `SUMMARY_JSON` prompt contract
- `nexiq-route.test.ts` — `/api/nexiq` chat proxy and Resend email modes (Cloudflare context and `fetch` mocked)
- `nexiq.test.tsx` — NexIQ chatbot flow in jsdom (quick replies, summary parsing and email, error states)
- `pick.test.ts` — `pickMessages` helper

No test calls Anthropic or Resend for real.

---

## Technology Logos

SVG logos in `/public/logos/` are used in capability/technology chip components across the Capabilities, About, and Services pages.

| File | Technology |
|---|---|
| `microsoft-365.svg` | Microsoft 365 |
| `teams.svg` | Microsoft Teams |
| `sharepoint.svg` | SharePoint |
| `viva.svg` | Microsoft Viva |
| `microsoft-copilot.svg` | Copilot / Copilot Studio |
| `power-platform.svg` | Power Platform |
| `power-automate.svg` | Power Automate |
| `power-bi.svg` | Power BI |
| `dynamics-365.svg` | Dynamics 365 |
| `business-central.svg` | Business Central |
| `microsoft-fabric.svg` | Microsoft Fabric |
| `azure-ai.svg` | Azure AI / Azure AI Foundry |
| `azure-openai.svg` | Azure OpenAI |
| `azure-data-services.svg` | Azure Data Services |
| `databricks.svg` | Databricks |
| `snowflake.svg` | Snowflake |
| `logic-apps.svg` | Logic Apps |
| `python.svg` | Python |
| `langchain.svg` | LangChain / LangGraph |
| `mlflow.svg` | MLflow |
