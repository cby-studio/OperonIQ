import {
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  DatabaseZap,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CapabilityData = {
  number: string;
  shortTitle: string;
  icon: LucideIcon;
  title: string;
  challenge: string;
  outcome: string;
  howWeHelp: string;
  techEcosystem: string[];
};

const CAPABILITIES: CapabilityData[] = [
  {
    number: '01',
    shortTitle: 'Business Transformation',
    icon: BriefcaseBusiness,
    title: 'Business Transformation & Operating Model Design',
    challenge:
      'Organizations struggle with fragmented processes, unclear ownership and operational inefficiencies.',
    outcome:
      'A modern operating model aligned with business objectives and AI-driven transformation.',
    howWeHelp:
      'Process discovery, operating model design, transformation roadmaps and change enablement.',
    techEcosystem: ['Microsoft Visio', 'Power Platform', 'Process Mining', 'Microsoft 365'],
  },
  {
    number: '02',
    shortTitle: 'Modern Work',
    icon: Layers3,
    title: 'Modern Work & Intelligent Collaboration',
    challenge: 'Knowledge is fragmented and collaboration is inconsistent.',
    outcome: 'An AI-ready workplace where people and digital workers collaborate effectively.',
    howWeHelp:
      'Collaboration strategy, governance, knowledge management and Copilot readiness.',
    techEcosystem: [
      'Microsoft 365',
      'Microsoft Teams',
      'SharePoint Online',
      'Microsoft Viva',
      'Microsoft Copilot',
    ],
  },
  {
    number: '03',
    shortTitle: 'Data & Analytics',
    icon: DatabaseZap,
    title: 'Data, Analytics & AI Foundations',
    challenge: 'Data is fragmented, inconsistent and not ready for enterprise AI.',
    outcome: 'Trusted enterprise data that powers decisions, automation and AI.',
    howWeHelp: 'Modern data platforms, governance, analytics and AI foundations.',
    techEcosystem: [
      'Microsoft Fabric',
      'Snowflake',
      'Databricks',
      'Power BI',
      'Azure Data Services',
      'Python',
      'Machine Learning',
    ],
  },
  {
    number: '04',
    shortTitle: 'Business Applications',
    icon: Building2,
    title: 'Connected Business Applications',
    challenge: 'Business processes are disconnected across systems.',
    outcome: 'Connected operations and better business visibility.',
    howWeHelp: 'CRM, ERP and application modernization.',
    techEcosystem: [
      'Dynamics 365',
      'Business Central',
      'Power Platform',
      'Azure Integration Services',
    ],
  },
  {
    number: '05',
    shortTitle: 'Automation & AI',
    icon: BrainCircuit,
    title: 'Intelligent Automation & Agentic AI',
    challenge: 'Organizations cannot scale manual work.',
    outcome: 'AI-powered digital workforces and autonomous processes.',
    howWeHelp:
      'Agent design, automation strategy, multi-agent architectures and AI workforce enablement.',
    techEcosystem: [
      'Copilot Studio',
      'Azure AI Foundry',
      'Azure OpenAI',
      'Power Automate',
      'Logic Apps',
      'Semantic Kernel',
      'Python',
      'Machine Learning',
    ],
  },
  {
    number: '06',
    shortTitle: 'Governance',
    icon: ShieldCheck,
    title: 'Governance, Quality & Responsible AI',
    challenge: 'AI and transformation initiatives introduce operational and compliance risks.',
    outcome: 'Secure, governed and scalable transformation.',
    howWeHelp: 'Testing, governance frameworks, AI controls and quality engineering.',
    techEcosystem: [
      'Microsoft Purview',
      'Azure Policy',
      'Power Platform Governance',
      'Microsoft Security',
      'Compliance Manager',
    ],
  },
];

// ─── Single capability section ───────────────────────────────────────────────

function CapabilitySection({ cap }: { cap: CapabilityData }) {
  const Icon = cap.icon;

  return (
    <section id={`capability-${cap.number}`} className="relative scroll-mt-20 py-20 lg:py-24">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">

        {/* Left: chapter identity */}
        <div>
          {/* Decorative number */}
          <span
            className="select-none bg-gradient-to-br from-operon-blue/35 via-operon-cyan/20 to-transparent bg-clip-text text-[5.5rem] font-black leading-none tracking-tighter text-transparent lg:text-[7rem]"
            aria-hidden="true"
          >
            {cap.number}
          </span>

          {/* Icon */}
          <div className="-mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-operon-cyan/25 bg-operon-cyan/[0.08] shadow-[0_0_24px_rgba(32,197,232,0.10)]">
            <Icon className="h-5 w-5 text-operon-cyan" aria-hidden="true" />
          </div>

          {/* Title */}
          <h2 className="mt-2 text-xl font-semibold leading-snug text-white lg:text-2xl">
            {cap.title}
          </h2>

          {/* Accent rule */}
          <div className="mt-6 h-px w-12 bg-gradient-to-r from-operon-cyan via-operon-blue to-transparent" />
        </div>

        {/* Right: structured content */}
        <div className="flex flex-col gap-6">

          {/* Transformation outcome — elevated, this is the north-star result */}
          <div className="relative overflow-hidden rounded-xl border border-operon-green/22 bg-operon-green/[0.055] p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-green/55 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/3 rounded-full bg-operon-green/[0.07] blur-2xl" />
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-operon-green">
              Transformation Outcome
            </p>
            <p className="relative mt-3 text-[1.05rem] font-medium leading-7 text-white">
              {cap.outcome}
            </p>
          </div>

          {/* Challenge + How We Help — supporting context, side by side on sm+ */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-operon-cyan/35 pl-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-operon-cyan">
                Business Challenge
              </p>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">{cap.challenge}</p>
            </div>
            <div className="border-l-2 border-operon-blue/40 pl-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-operon-blue">
                How We Help
              </p>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">{cap.howWeHelp}</p>
            </div>
          </div>

          {/* Technology ecosystem */}
          <div>
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Technology Ecosystem
            </p>
            <div className="flex flex-wrap gap-2">
              {cap.techEcosystem.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400 transition duration-200 hover:border-white/[0.14] hover:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Full page content ────────────────────────────────────────────────────────

export function CapabilitiesPageContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-14 pt-24 lg:pb-20 lg:pt-36">
        {/* Atmospheric glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-operon-cyan/[0.055] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-operon-blue/[0.07] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-blue/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
            Capabilities
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            The Transformation Engine Behind the Agentic Enterprise
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
            OperonIQ combines business transformation, intelligent collaboration, trusted data,
            connected applications, AI-powered digital workforces and governance into one integrated
            operating model.
          </p>

          {/* Capability navigator */}
          <div className="mt-14 border-t border-white/[0.07] pt-10">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <a
                    key={cap.number}
                    href={`#capability-${cap.number}`}
                    className="group flex flex-col gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-4 transition duration-200 hover:border-operon-cyan/25 hover:bg-white/[0.055]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] bg-navy-950/60 transition duration-200 group-hover:border-operon-cyan/25 group-hover:bg-operon-cyan/[0.08]">
                      <Icon
                        className="h-4 w-4 text-slate-500 transition duration-200 group-hover:text-operon-cyan"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-slate-600">
                        {cap.number}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium leading-snug text-slate-400 transition duration-200 group-hover:text-white">
                        {cap.shortTitle}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability deep-dives ─────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-5 pb-28 sm:px-6 lg:px-8">
        {CAPABILITIES.map((cap) => (
          <CapabilitySection key={cap.number} cap={cap} />
        ))}
      </div>
    </>
  );
}
