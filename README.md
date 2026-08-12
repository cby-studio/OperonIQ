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
    layout.tsx                # Root <html>/<body>, locale validation, metadata
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

### `/capabilities`, `/services`, `/about`
Static marketing pages with technology ecosystem chips (logo + label) sourced from `/public/logos/`.

---

## Internationalization

The site is available in **English** (default, unprefixed) and **Romanian** (`/ro`), via [next-intl](https://next-intl.dev).

- `en` is served at the root (`/`, `/about`, `/capabilities`, `/contact`) — no prefix.
- `ro` is served under `/ro` (`/ro`, `/ro/about`, `/ro/capabilities`, `/ro/contact`).
- A language switcher (`components/home/LanguageSwitcher.tsx`) lives in the header on every page.
- All copy lives in `messages/en.json` / `messages/ro.json`, keyed by page/section. Technology and product names (Microsoft 365, Python, Snowflake, etc.) are intentionally left untranslated.
- The NexIQ chatbot's system prompt, quick-reply options and UI strings are localized too — the assistant is instructed to respond only in the active locale's language, regardless of what the visitor types. The email notification sent to the OperonIQ team stays in English regardless of locale, since it's internal/administrative.
- Client components (`NexIQ`, `CapabilitiesPageContent`) only receive the message namespaces they actually use (see `i18n/pick.ts`), so the rest of the site doesn't ship their translations in its page payload.

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
