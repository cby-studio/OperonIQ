# CLAUDE.md

Guidance for Claude Code when working in this repository. See [README.md](README.md) for the full project description, page-by-page content notes and the technology-logo table.

## What this is

Marketing + contact site for **OperonIQ** (agentic enterprise consultancy). Next.js 16 App Router + TypeScript, Tailwind CSS 3, next-intl (English + Romanian), deployed to **Cloudflare Workers** via OpenNext (`@opennextjs/cloudflare`). The `/contact` page hosts **NexIQ**, a Claude-powered intake chatbot that emails a summary through Resend.

## Commands

```bash
npm run dev              # Next dev server, http://localhost:3000
npm test                 # Vitest, single run (tests/**/*.test.{ts,tsx})
npm run test:watch       # Vitest in watch mode
npx vitest run tests/messages.test.ts  # Run one test file
npm run lint             # ESLint (eslint-config-next core-web-vitals)
npx tsc --noEmit --incremental false   # Type-check
npm run build            # Plain Next.js build
npm run build:worker     # OpenNext build -> .open-next/
npm run preview:worker   # Build worker + run locally with wrangler dev
npm run deploy           # Build worker + wrangler deploy (publishes to production — ask first)
```

Before finishing a change, run `npm test`, the type-check and lint, and check affected pages in both locales (`/…` and `/ro/…`).

## Tests

Vitest config is `vitest.config.mts` (`@/` alias, Node environment by default; component tests opt into jsdom with a `// @vitest-environment jsdom` header). No test makes real network calls: `fetch` is stubbed with `vi.stubGlobal`.

- `tests/messages.test.ts` — `en.json`/`ro.json` have identical keys, types and array lengths (except optional `sectionHeadings` overrides); all `t()` strings are valid ICU (`NexIQSystem` is exempt as it is read with `t.raw`); no cedilla `ş`/`ţ` in Romanian; the system prompt still requests `SUMMARY_JSON` with every field.
- `tests/nexiq-route.test.ts` — `/api/nexiq` route with `@opennextjs/cloudflare` mocked: Anthropic proxying (model, headers, body), validation errors, `process.env` fallback, Resend email, HTML escaping.
- `tests/nexiq.test.tsx` — the NexIQ client component via Testing Library: literal system prompt sent, quick replies, `SUMMARY_JSON` stripped and emailed, error states.
- `tests/techEcosystem.test.ts` — About tech ecosystem data: group titles in both locales, logo files exist, no reused logo files, mono SVGs are single-colour, text-only pills.
- `tests/pick.test.ts` — `pickMessages`.

When adding a message namespace, page section or API field, extend the matching test. If you add a new message read with `t.raw` that contains `{ }`, add its path to `RAW_MESSAGES` in `tests/messages.test.ts`.

## Architecture

- `app/[locale]/` — all pages live under the locale segment. `layout.tsx` owns `<html>/<body>`, validates the locale, sets metadata and loads Google Analytics. `services/page.tsx` just redirects to `/capabilities`.
- `app/api/nexiq/route.ts` — the only API route. `POST` with `{ messages, system }` proxies to the Anthropic Messages API (`claude-sonnet-4-6`, `max_tokens: 300`); `POST` with `{ sendSummary: true, summary }` sends the intake email via Resend. Env comes from `getCloudflareContext()` with `process.env` fallback (local `.env.local`).
- `components/NexIQ.tsx` — client chatbot. Reads the system prompt with `t.raw('NexIQSystem')`; parses the `SUMMARY_JSON:{...}` block Claude appends on the final turn, then POSTs it back to `/api/nexiq` for the email.
- `components/home/` — shared site chrome (`SiteFrame`, `Header`, `Footer`, `LanguageSwitcher`, `GradientButton`, `CtaBand`…) plus the home-page sections. `CtaBand` is the reusable full-width closing CTA above the footer; pages pass it translated `title`/`body`/`ctaLabel` (e.g. `About.cta.*`). `content.ts` holds only **locale-independent** data (hrefs, ids, icons, ordering) that pairs with translated strings at render time.
- `components/capabilities/CapabilitiesPageContent.tsx` — client component that builds capability cards from `Capabilities.pillars.<id>.services.<sid>` messages. Supports optional `sectionHeadings` and `showcase` objects per card; tag pill colours come from the positional `TAG_TYPES[sid]` map.
- `i18n/` — `routing.ts` (locales `en`, `ro`; `localePrefix: 'as-needed'`, so English is unprefixed and Romanian is under `/ro`), `navigation.ts` (locale-aware `Link`/`redirect`/`useRouter`), `request.ts` (loads `messages/<locale>.json`), `pick.ts` (`pickMessages` helper).
- `middleware.ts` — next-intl middleware. Excludes `/api`, `/_next`, `/_vercel` and dotted paths.
- `cloudflare/open-next.config.ts`, `wrangler.jsonc` — Workers config. `vars`: `NOTIFY_EMAIL`, `FROM_EMAIL`; required secrets: `ANTHROPIC_API_KEY`, `RESEND_API_KEY`.

## Conventions and gotchas

- **All user-facing copy goes in `messages/en.json` and `messages/ro.json`** (top-level namespaces: `Metadata`, `Nav`, `Footer`, `LanguageSwitcher`, `Home`, `About`, `Capabilities`, `Contact`, `NexIQSystem`). Keep keys identical in both files. No hardcoded Romanian (or English) text in components. Product/technology names (Agent Factory, Microsoft 365, Snowflake…) stay untranslated.
- Romanian copy uses comma-below diacritics `ș`/`ț` (not cedilla `ş`/`ţ`). Use "companii", not "întreprinderi".
- **Client components get scoped messages only**: wrap them in `NextIntlClientProvider messages={pickMessages(messages, [...])}` on the page. The root layout only ships `LanguageSwitcher`. When adding a namespace a client component needs, add it to the relevant `pickMessages` call.
- Server pages call `setRequestLocale(locale)` and use `getTranslations` for metadata; params are `Promise<{ locale: string }>` (Next 16) and must be awaited.
- Use `Link`/`redirect` from `@/i18n/navigation`, not `next/link`, so internal links keep the active locale (`/contact` → `/ro/contact`).
- Use `t.raw(...)` for arrays/objects and for strings containing literal `{ }`. `NexIQSystem` must be read with `t.raw` — `t('NexIQSystem')` throws `INVALID_MESSAGE: MALFORMED_ARGUMENT` because of the JSON example braces.
- **Keep `middleware.ts`** — do not migrate to Next 16's `proxy.ts`; it is Node-only and unsupported by OpenNext on Workers.
- Keep Google Analytics as the two `next/script` tags (`afterInteractive`, ids `google-analytics-loader` / `google-analytics-init`). Raw `<script>` tags cause React errors and duplicate init on language switch.
- The NexIQ notification email stays in English regardless of locale; the chatbot itself must answer only in the active locale's language. User values in the email are HTML-escaped via `escapeHtml` — keep that when adding fields.
- Styling: Tailwind with custom tokens in `tailwind.config.ts` (`navy-950/900/850`, `operon-blue`, `operon-cyan`, `operon-green`; animations `slow-float`, `signal-pulse`, `gradient-shift`). Dark navy theme; icons from `lucide-react`. Use the `@/` path alias.
- Technology logos live in `public/logos/`; About-page ecosystem groups and the label → logo map are in `components/about/techEcosystem.ts` (items without a logo render as text-only pills; `mono: true` for `currentColor` SVGs). `scripts/fetch-logos.mjs` regenerates the simple-icons SVGs — never import `simple-icons` at runtime, and don't use its `githubcopilot`/`microsoftoffice` icons for Microsoft products. The root-level `langchain.svg`, `mlflow.svg`, `python.svg` are stray duplicates, and `workers/nexiq.js` is a legacy standalone worker superseded by `app/api/nexiq/route.ts` (not referenced by the build).
- Adding a locale: update `i18n/routing.ts`, add `messages/<locale>.json` with the same keys, add a label in `LanguageSwitcher.tsx`.
- When behaviour or content structure changes, update `README.md` accordingly.
