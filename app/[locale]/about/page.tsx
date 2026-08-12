import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { GradientSeparator } from '@/components/home/GradientSeparator';
import { SiteFrame } from '@/components/home/SiteFrame';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

// ─── Logo map (matches /public/logos/) ───────────────────────────────────────

const LOGO_MAP: Record<string, string> = {
  'Microsoft 365':    '/logos/microsoft-365.svg',
  'Teams':            '/logos/teams.svg',
  'SharePoint':       '/logos/sharepoint.svg',
  'Viva':             '/logos/viva.svg',
  'Copilot':          '/logos/microsoft-copilot.svg',
  'Copilot Studio':   '/logos/microsoft-copilot.svg',
  'Power Platform':   '/logos/power-platform.svg',
  'Power Automate':   '/logos/power-automate.svg',
  'Dynamics 365':     '/logos/dynamics-365.svg',
  'Business Central': '/logos/business-central.svg',
  'Microsoft Fabric': '/logos/microsoft-fabric.svg',
  'Power BI':         '/logos/power-bi.svg',
  'Snowflake':        '/logos/snowflake.svg',
  'Databricks':       '/logos/databricks.svg',
  'Azure AI':         '/logos/azure-ai.svg',
  'Azure OpenAI':     '/logos/azure-openai.svg',
  'Azure AI Foundry': '/logos/azure-ai.svg',
  'Logic Apps':       '/logos/logic-apps.svg',
  'Python':           '/logos/python.svg',
  'LangGraph':        '/logos/langchain.svg',
  'MLflow':           '/logos/mlflow.svg',
};

// ─── Non-text data (technology names are proper nouns — not translated) ──────

const beliefIds = [
  'processBeforePlatform',
  'trustedData',
  'intelligentAutomation',
  'responsibleAi',
  'measurableOutcomes',
] as const;

const expertiseIds = ['01', '02', '03', '04', '05', '06'] as const;

const techGroups = [
  {
    key: 'microsoft',
    items: [
      'Microsoft 365',
      'Teams',
      'SharePoint',
      'Viva',
      'Copilot',
      'Power Platform',
      'Power Automate',
      'Copilot Studio',
      'Dynamics 365',
      'Business Central',
      'Microsoft Fabric',
      'Power BI',
    ],
  },
  {
    key: 'dataCloud',
    items: ['Snowflake', 'Databricks', 'Azure AI', 'Azure OpenAI', 'Azure AI Foundry', 'Logic Apps'],
  },
  {
    key: 'engineeringAi',
    items: ['Python', 'Semantic Kernel', 'LangGraph', 'AutoGen', 'MLflow'],
  },
] as const;

// ─── TechChip ─────────────────────────────────────────────────────────────────

function TechChip({ label }: { label: string }) {
  const logo = LOGO_MAP[label];
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-150 hover:border-white/[0.18] hover:text-slate-300">
      {logo && <Image src={logo} alt="" width={13} height={13} className="shrink-0" />}
      {label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations('About');
  const marketItems = t.raw('why.marketItems') as string[];
  const calloutItems = t.raw('conviction.calloutItems') as string[];

  return (
    <SiteFrame>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[480px] w-[480px] rounded-full bg-operon-cyan/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-operon-blue/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-operon-cyan">
              {t('hero.eyebrow')}
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl">
            {t('hero.titleLine1')}
            <br />
            {t('hero.titleLine2')}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl sm:leading-10">
            {t('hero.body')}
          </p>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Our Conviction ───────────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-operon-cyan">
              {t('conviction.eyebrow')}
            </p>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {t('conviction.title')}
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-300">
                {t('conviction.p1')}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                {t('conviction.p2Prefix')}{' '}
                <span className="font-semibold text-white">
                  {t('conviction.p2Bold')}
                </span>
                {t('conviction.p2Suffix')}
              </p>

              {/* Process redesign callout */}
              <div className="mt-8 relative overflow-hidden rounded-xl border border-operon-cyan/20 bg-operon-cyan/[0.04] p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/40 to-transparent" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-operon-cyan mb-3" style={{ opacity: 0.7 }}>
                  {t('conviction.calloutLabel')}
                </p>
                <ul className="space-y-2 text-sm leading-6 text-slate-300">
                  {calloutItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-operon-cyan/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Belief statements */}
          <div className="mt-20 flex flex-col gap-5">
            {beliefIds.map((id) => (
              <div key={id} className="border-l-2 border-operon-cyan/45 pl-8">
                <span className="text-[1.85rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.3rem]">
                  {t(`conviction.beliefs.${id}.label`)}
                </span>
                <p className="mt-1 text-sm text-slate-500">
                  {t(`conviction.beliefs.${id}.note`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Why OperonIQ ─────────────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-operon-cyan">
              {t('why.eyebrow')}
            </p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {t('why.title')}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                {t('why.p1')}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                {t('why.p2')}
              </p>
            </div>

            <div className="relative rounded-xl border border-white/[0.1] bg-white/[0.03] p-8 shadow-glass">
              <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-operon-blue/30 to-transparent" />
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {t('why.marketLabel')}
              </p>
              <div className="mb-8 grid grid-cols-2 gap-3">
                {marketItems.map((s) => (
                  <div
                    key={s}
                    className="rounded-lg border border-dashed border-white/[0.11] px-4 py-3 text-center text-sm font-medium text-slate-600"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="mb-6 h-px bg-gradient-to-r from-operon-blue/40 via-operon-cyan/35 to-operon-green/40" />
              <p className="text-xl font-semibold leading-snug text-white">
                {t('why.unify')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Our Expertise ────────────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-operon-cyan">
              {t('expertise.eyebrow')}
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
            {t('expertise.description')}
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseIds.map((id) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-operon-cyan/20 hover:bg-white/[0.042]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="mb-4 block text-[11px] font-semibold tracking-[0.22em] text-slate-600">
                  {id}
                </span>
                <h3 className="text-operon-green text-[13px] font-semibold uppercase tracking-[0.15em]">
                  {t(`expertise.items.${id}.title`)}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-slate-500 transition duration-300 group-hover:text-slate-400">
                  {t(`expertise.items.${id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Technology Ecosystem ─────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-operon-cyan">
              {t('techEcosystem.eyebrow')}
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
            {t('techEcosystem.description')}
          </p>

          <div className="mt-14 flex flex-col gap-12">
            {techGroups.map((group) => (
              <div key={group.key}>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  {t(`techEcosystem.groups.${group.key}`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </SiteFrame>
  );
}
