'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';

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
  'Azure AI':         '/logos/azure-ai.svg',
  'Azure AI Foundry': '/logos/azure-ai.svg',
  'Azure Data Services': '/logos/azure-data-services.svg',
  'Azure OpenAI':     '/logos/azure-openai.svg',
  'Databricks':       '/logos/databricks.svg',
  'Snowflake':        '/logos/snowflake.svg',
  'Logic Apps':       '/logos/logic-apps.svg',
  'Python':           '/logos/python.svg',
  'LangGraph':        '/logos/langchain.svg',
  'LangChain':        '/logos/langchain.svg',
  'MLflow':           '/logos/mlflow.svg',
};

// ─── Types ────────────────────────────────────────────────────────────────────

type ChipType = 'neutral' | 'python' | 'ml';

type EcosystemChip = {
  label: string;
  type: ChipType;
};

type Tag = {
  label: string;
  type: 'python' | 'ml';
};

type ServiceData = {
  id: string;
  name: string;
  challenge: string;
  outcomes: string[];
  deliverables: string[];
  tags?: Tag[];
};

type PillarData = {
  id: string;
  number: string;
  name: string;
  conviction: string;
  ecosystem: EcosystemChip[];
  services: ServiceData[];
};

// ─── Non-text configuration ───────────────────────────────────────────────────
// Ecosystem chips are technology/brand names — not translated. Copy for pillar
// names, convictions and services lives in messages/{locale}.json under "Capabilities".

const PILLAR_IDS = ['01', '02', '03', '04', '05', '06'] as const;

const PILLAR_SERVICE_IDS: Record<(typeof PILLAR_IDS)[number], string[]> = {
  '01': ['s01-01', 's01-02', 's01-03', 's01-04'],
  '02': ['s02-01', 's02-02', 's02-03', 's02-04'],
  '03': ['s03-01', 's03-02', 's03-03', 's03-04'],
  '04': ['s04-01', 's04-02', 's04-03'],
  '05': ['s05-01', 's05-02', 's05-03', 's05-04', 's05-05'],
  '06': ['s06-01', 's06-02', 's06-03', 's06-04'],
};

// Tag chip colour ('python' | 'ml'), positional — matches the order of the
// translated "tags" string array for that service.
const TAG_TYPES: Record<string, Array<'python' | 'ml'>> = {
  's01-01': ['python', 'ml'],
  's01-02': ['ml'],
  's01-03': ['ml', 'python'],
  's03-01': ['python', 'ml'],
  's03-02': ['python', 'ml'],
  's03-03': ['python', 'ml'],
  's03-04': ['python', 'ml'],
  's04-03': ['ml'],
  's05-01': ['python', 'ml'],
  's05-02': ['python', 'ml'],
  's05-03': ['python', 'ml'],
  's05-04': ['python', 'ml'],
  's05-05': ['python', 'ml'],
  's06-01': ['python', 'ml'],
  's06-02': ['python', 'ml'],
  's06-03': ['python', 'ml'],
  's06-04': ['ml', 'python'],
};

const PILLAR_ECOSYSTEM: Record<(typeof PILLAR_IDS)[number], EcosystemChip[]> = {
  '01': [
    { label: 'Microsoft 365', type: 'neutral' },
    { label: 'Power Platform', type: 'neutral' },
    { label: 'Azure AI', type: 'neutral' },
    { label: 'Snowflake', type: 'neutral' },
    { label: 'Databricks', type: 'neutral' },
  ],
  '02': [
    { label: 'Microsoft 365', type: 'neutral' },
    { label: 'Teams', type: 'neutral' },
    { label: 'SharePoint', type: 'neutral' },
    { label: 'Viva', type: 'neutral' },
    { label: 'Copilot', type: 'neutral' },
    { label: 'Power Platform', type: 'neutral' },
  ],
  '03': [
    { label: 'Microsoft Fabric', type: 'neutral' },
    { label: 'Snowflake', type: 'neutral' },
    { label: 'Databricks', type: 'neutral' },
    { label: 'Power BI', type: 'neutral' },
    { label: 'Azure Data Services', type: 'neutral' },
    { label: 'Python / PySpark', type: 'python' },
    { label: 'ML & MLflow', type: 'ml' },
  ],
  '04': [
    { label: 'Dynamics 365', type: 'neutral' },
    { label: 'Business Central', type: 'neutral' },
    { label: 'Power Platform', type: 'neutral' },
    { label: 'Power Automate', type: 'neutral' },
    { label: 'Copilot Studio', type: 'neutral' },
  ],
  '05': [
    { label: 'Copilot Studio', type: 'neutral' },
    { label: 'Azure OpenAI', type: 'neutral' },
    { label: 'Azure AI Foundry', type: 'neutral' },
    { label: 'Power Automate', type: 'neutral' },
    { label: 'Logic Apps', type: 'neutral' },
    { label: 'Semantic Kernel', type: 'neutral' },
    { label: 'Python / LangGraph', type: 'python' },
    { label: 'LLM orchestration', type: 'ml' },
  ],
  '06': [
    { label: 'Microsoft Purview', type: 'neutral' },
    { label: 'Compliance Manager', type: 'neutral' },
    { label: 'Microsoft Security', type: 'neutral' },
    { label: 'Power Platform Governance', type: 'neutral' },
    { label: 'Python monitoring', type: 'python' },
    { label: 'ML drift detection', type: 'ml' },
  ],
};

const ENGAGE_CARD_IDS = [
  'aiReadiness',
  'businessTransformation',
  'dataPlatform',
  'copilotEnablement',
  'automationDiscovery',
  'fractionalArchitecture',
] as const;

// ─── Chip components ──────────────────────────────────────────────────────────

function EcoChip({ chip }: { chip: EcosystemChip }) {
  const logo = LOGO_MAP[chip.label];

  const base: React.CSSProperties = {
    fontSize: 11,
    padding: '3px 10px',
    borderRadius: 100,
    lineHeight: 1.5,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
  };

  if (chip.type === 'python') {
    return (
      <span style={{ ...base, border: '0.5px solid #B0D4EE', background: '#E8F4FD', color: '#1A5276' }}>
        {chip.label}
      </span>
    );
  }
  if (chip.type === 'ml') {
    return (
      <span style={{ ...base, border: '0.5px solid #A9D4A4', background: '#EAF4E8', color: '#1E6A1A' }}>
        {chip.label}
      </span>
    );
  }
  return (
    <span style={{ ...base, border: '0.5px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)', color: '#94a3b8' }}>
      {logo && (
        <Image src={logo} alt="" width={14} height={14} style={{ display: 'block', flexShrink: 0 }} />
      )}
      {chip.label}
    </span>
  );
}

function TagChip({ tag }: { tag: Tag }) {
  const base: React.CSSProperties = {
    fontSize: 11,
    padding: '2px 9px',
    borderRadius: 100,
    lineHeight: 1.5,
    display: 'inline-block',
  };

  if (tag.type === 'python') {
    return (
      <span style={{ ...base, border: '0.5px solid #B0D4EE', background: '#E8F4FD', color: '#1A5276' }}>
        {tag.label}
      </span>
    );
  }
  return (
    <span style={{ ...base, border: '0.5px solid #A9D4A4', background: '#EAF4E8', color: '#1E6A1A' }}>
      {tag.label}
    </span>
  );
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  isOpen,
  onToggle,
}: {
  service: ServiceData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations('Capabilities.serviceCard');
  const [hovered, setHovered] = useState(false);
  const borderColor = isOpen
    ? 'rgba(32,197,232,0.38)'
    : hovered
      ? 'rgba(32,197,232,0.18)'
      : 'rgba(255,255,255,0.07)';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `0.5px solid ${borderColor}`,
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 150ms',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
        style={{ padding: '1.1rem 1.25rem' }}
      >
        <span style={{ fontSize: 13, fontWeight: 500 }} className="text-white">
          {service.name}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'text-operon-cyan' : 'text-slate-500'}`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Expanded body */}
      {isOpen && (
        <div
          className="border-t border-white/[0.07]"
          style={{ padding: '1rem 1.25rem 1.25rem' }}
        >
          {/* Business Challenge */}
          <div className="mb-4">
            <p
              className="mb-1.5 text-operon-cyan"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.75 }}
            >
              {t('challenge')}
            </p>
            <p className="text-slate-300" style={{ fontSize: 12, lineHeight: 1.65 }}>
              {service.challenge}
            </p>
          </div>

          {/* Expected Outcomes */}
          <div className="mb-4">
            <p
              className="mb-1.5 text-operon-blue"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}
            >
              {t('outcomes')}
            </p>
            <ul className="space-y-1.5">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-slate-300" style={{ fontSize: 12, lineHeight: 1.6 }}>
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-operon-blue/50" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className={service.tags && service.tags.length > 0 ? 'mb-4' : ''}>
            <p
              className="mb-1.5 text-operon-green"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}
            >
              {t('deliverables')}
            </p>
            <ul className="space-y-1.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-slate-300" style={{ fontSize: 12, lineHeight: 1.6 }}>
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-operon-green/50" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          {service.tags && service.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <TagChip key={tag.label} tag={tag} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── PillarSection ────────────────────────────────────────────────────────────

function PillarSection({ pillar }: { pillar: PillarData }) {
  const t = useTranslations('Capabilities');
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenCards((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div>
      {/* Part 1 — Pillar header */}
      <div className="relative flex items-start justify-between px-4 pb-5 pt-6 sm:px-8 sm:pt-8">
        <div style={{ maxWidth: 520 }}>
          <h2 className="text-operon-green" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1.3 }}>
            {pillar.name}
          </h2>
          <p className="mt-2 text-slate-300" style={{ fontSize: 13, lineHeight: 1.65, maxWidth: 480 }}>
            {pillar.conviction}
          </p>
        </div>
      </div>

      {/* Part 2 — Ecosystem strip */}
      <div className="bg-navy-900 px-4 py-3 sm:px-8">
        <p
          className="mb-2.5 text-operon-cyan"
          style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.7 }}
        >
          {t('ecosystemLabel')}
        </p>
        <div className="flex flex-wrap gap-2">
          {pillar.ecosystem.map((chip) => (
            <EcoChip key={chip.label} chip={chip} />
          ))}
        </div>
      </div>

      {/* Part 3 — Service cards grid */}
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        style={{
          alignItems: 'start',
          padding: '1.25rem 1rem 2.5rem',
        }}
      >
        {pillar.services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isOpen={openCards.has(service.id)}
            onToggle={() => toggle(service.id)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function CapabilitiesPageContent() {
  const t = useTranslations('Capabilities');
  const [activeTab, setActiveTab] = useState<(typeof PILLAR_IDS)[number]>('01');

  const pillars: PillarData[] = PILLAR_IDS.map((id) => ({
    id,
    number: id,
    name: t(`pillars.${id}.name`),
    conviction: t(`pillars.${id}.conviction`),
    ecosystem: PILLAR_ECOSYSTEM[id],
    services: PILLAR_SERVICE_IDS[id].map((sid) => {
      const hasTags = t.has(`pillars.${id}.services.${sid}.tags`);
      const tagLabels = hasTags ? (t.raw(`pillars.${id}.services.${sid}.tags`) as string[]) : [];
      const tagTypes = TAG_TYPES[sid] ?? [];

      return {
        id: sid,
        name: t(`pillars.${id}.services.${sid}.name`),
        challenge: t(`pillars.${id}.services.${sid}.challenge`),
        outcomes: t.raw(`pillars.${id}.services.${sid}.outcomes`) as string[],
        deliverables: t.raw(`pillars.${id}.services.${sid}.deliverables`) as string[],
        tags: hasTags
          ? tagLabels.map((label, i) => ({ label, type: tagTypes[i] ?? 'python' }))
          : undefined,
      };
    }),
  }));

  const activePillar = pillars.find((p) => p.id === activeTab)!;
  const engageCards = ENGAGE_CARD_IDS.map((id) => ({
    id,
    title: t(`engage.cards.${id}.title`),
    meta: t(`engage.cards.${id}.meta`),
    description: t(`engage.cards.${id}.description`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-20 lg:pt-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-operon-cyan/[0.055] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-operon-blue/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p
              className="text-operon-cyan"
              style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              {t('hero.eyebrow')}
            </p>
          </div>

          <h1
            className="mt-5 text-white"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, lineHeight: 1.15 }}
          >
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-slate-400" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Sticky pillar nav */}
      <div
        className="sticky z-20 border-b border-white/[0.08] bg-navy-950/95 backdrop-blur-xl"
        style={{ top: 96 }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {pillars.map((p) => {
              const isActive = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id as (typeof PILLAR_IDS)[number])}
                  className="flex shrink-0 flex-col items-center gap-0.5 px-3 py-3 text-center transition-colors duration-150 sm:flex-1 sm:px-1"
                  style={{
                    minWidth: 80,
                    borderBottom: isActive ? '2px solid #20C5E8' : '2px solid transparent',
                  }}
                >
                  <span
                    style={{ fontSize: 9, fontWeight: 500 }}
                    className={isActive ? 'text-operon-cyan/70' : 'text-slate-600'}
                  >
                    {p.number}
                  </span>
                  <span
                    style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}
                    className={isActive ? 'text-operon-green' : 'text-slate-500'}
                  >
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active pillar content */}
      <div className="mx-auto max-w-7xl">
        <PillarSection key={activePillar.id} pillar={activePillar} />
      </div>

      {/* How to Engage */}
      <section className="bg-navy-900" style={{ padding: '2.5rem 0' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan/40" />
            <p
              className="text-operon-cyan"
              style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              {t('engage.eyebrow')}
            </p>
          </div>

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
            {engageCards.map((card) => (
              <div
                key={card.id}
                className="bg-navy-950"
                style={{
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  borderRadius: 12,
                  padding: '1rem 1.1rem',
                }}
              >
                <p className="text-white" style={{ fontSize: 13, fontWeight: 500 }}>
                  {card.title}
                </p>
                <p className="mt-1 text-slate-500" style={{ fontSize: 11 }}>
                  {card.meta}
                </p>
                <p className="mt-2 text-slate-400" style={{ fontSize: 12, lineHeight: 1.55 }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA line */}
          <p className="mt-6 text-center text-slate-400" style={{ fontSize: 13 }}>
            {t('engage.ctaLine')}{' '}
            <Link
              href="/contact"
              className="text-operon-cyan underline-offset-2 transition-colors duration-150 hover:text-white"
            >
              {t('engage.ctaLink')}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
