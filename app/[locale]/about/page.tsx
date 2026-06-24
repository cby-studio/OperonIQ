import Image from 'next/image';
import { GradientSeparator } from '@/components/home/GradientSeparator';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'About | OperonIQ',
  description:
    'OperonIQ brings together senior practitioners across business transformation, process design, data architecture, enterprise platforms and AI into a single integrated delivery model.',
};

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

// ─── Data ────────────────────────────────────────────────────────────────────

const beliefs = [
  {
    label: 'Process Before Platform',
    note: 'Operating model clarity precedes any technology selection.',
  },
  {
    label: 'Trusted Data',
    note: 'Governed, quality-assured intelligence at the foundation of every decision.',
  },
  {
    label: 'Intelligent Automation',
    note: 'Automation that reasons, adapts and escalates — not just executes rules.',
  },
  {
    label: 'Responsible AI',
    note: 'Deployed with explainability, fairness and human oversight built in.',
  },
  {
    label: 'Measurable Outcomes',
    note: 'Value validated at every stage, not just at programme close.',
  },
];

const expertise = [
  {
    number: '01',
    title: 'Business Transformation',
    description:
      'Operating model redesign, process mapping, value-linked transformation roadmaps and structured change enablement. The foundation before any platform or agent is introduced.',
  },
  {
    number: '02',
    title: 'Modern Work',
    description:
      'Microsoft 365 strategy, Copilot readiness, knowledge architecture and collaboration governance to build AI-ready workplaces where people and digital workers operate effectively.',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    description:
      'Data platform modernisation, semantic layer design, analytics strategy, governance frameworks and AI-ready data foundations using Fabric, Snowflake, Databricks and Power BI.',
  },
  {
    number: '04',
    title: 'Business Applications',
    description:
      'Dynamics 365, Business Central and Power Platform advisory to connect CRM, ERP and operational workflows — creating the system-of-record layer that AI agents can act on.',
  },
  {
    number: '05',
    title: 'Automation & Agentic AI',
    description:
      'Agent design and deployment, multi-agent architectures, digital workforce strategy and intelligent automation programmes that reduce manual effort and accelerate execution.',
  },
  {
    number: '06',
    title: 'Governance & Quality',
    description:
      'Responsible AI frameworks, quality engineering, platform governance and automated testing practices that keep transformation controlled, auditable and scalable.',
  },
];

const techGroups = [
  {
    label: 'Microsoft Ecosystem',
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
    label: 'Data & Cloud',
    items: ['Snowflake', 'Databricks', 'Azure AI', 'Azure OpenAI', 'Azure AI Foundry', 'Logic Apps'],
  },
  {
    label: 'Engineering & AI',
    items: ['Python', 'Semantic Kernel', 'LangGraph', 'AutoGen', 'MLflow'],
  },
];

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

export default function AboutPage() {
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
              About OperonIQ
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl">
            Built on Deep Expertise.
            <br />
            Delivered as Integrated Transformation.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl sm:leading-10">
            OperonIQ brings together senior practitioners across business transformation,
            process redesign, data architecture, enterprise platforms, intelligent automation
            and AI — unified into a single delivery model that connects strategic intent
            to measurable operational change.
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
              Our Conviction
            </p>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Real transformation starts before the technology.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-300">
                Before any platform is selected or AI agent deployed, the business process must
                be understood, redesigned and owned by the people who run it. Technology layered
                onto poorly defined or fragmented processes does not create capability — it
                creates complexity at scale.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                OperonIQ treats{' '}
                <span className="font-semibold text-white">
                  business process redesign as the foundation of every engagement
                </span>
                . We map how work actually flows, identify where it breaks down, and design
                the target operating model before recommending a single tool or platform. This
                is not a discovery phase — it is the work.
              </p>

              {/* Process redesign callout */}
              <div className="mt-8 relative overflow-hidden rounded-xl border border-operon-cyan/20 bg-operon-cyan/[0.04] p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/40 to-transparent" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-operon-cyan mb-3" style={{ opacity: 0.7 }}>
                  Our Approach to Process Redesign
                </p>
                <ul className="space-y-2 text-sm leading-6 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-operon-cyan/60" />
                    Map current-state processes, decision points and friction across functions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-operon-cyan/60" />
                    Design the target operating model with clear ownership and value linkage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-operon-cyan/60" />
                    Identify where automation, AI agents and data can enhance redesigned processes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-operon-cyan/60" />
                    Validate change impact and align leadership before deployment begins
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Belief statements */}
          <div className="mt-20 flex flex-col gap-5">
            {beliefs.map((item) => (
              <div key={item.label} className="border-l-2 border-operon-cyan/45 pl-8">
                <span className="text-[1.85rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.3rem]">
                  {item.label}
                </span>
                <p className="mt-1 text-sm text-slate-500">{item.note}</p>
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
              Why OperonIQ
            </p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                The market fragments what organisations need whole.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                Most advisory firms are organised around a single discipline — business consulting,
                data engineering, Microsoft platforms, or AI strategy. Clients are left to
                coordinate between providers, reconcile competing recommendations, and absorb
                the gaps that form between specialisms.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                OperonIQ was created to close those gaps. Our practitioners hold depth across
                business, data, platform and AI — and our delivery model is designed so those
                disciplines reinforce each other rather than operating in sequence.
              </p>
            </div>

            <div className="relative rounded-xl border border-white/[0.1] bg-white/[0.03] p-8 shadow-glass">
              <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-operon-blue/30 to-transparent" />
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                What the market offers separately
              </p>
              <div className="mb-8 grid grid-cols-2 gap-3">
                {['Business Consulting', 'Data Consulting', 'Microsoft Advisory', 'AI Consulting'].map((s) => (
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
                OperonIQ unifies all of them into one integrated transformation model.
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
              Our Expertise
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
            Six integrated capability areas, each underpinned by senior practitioners with
            deep domain knowledge and hands-on delivery experience.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((area) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-operon-cyan/20 hover:bg-white/[0.042]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="mb-4 block text-[11px] font-semibold tracking-[0.22em] text-slate-600">
                  {area.number}
                </span>
                <h3 className="text-operon-green text-[13px] font-semibold uppercase tracking-[0.15em]">
                  {area.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-slate-500 transition duration-300 group-hover:text-slate-400">
                  {area.description}
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
              Technology Ecosystem
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
            We are technology-agnostic in approach and opinionated in execution. The platforms
            below are the tools we use to deliver transformation — not products we sell.
          </p>

          <div className="mt-14 flex flex-col gap-12">
            {techGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  {group.label}
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
