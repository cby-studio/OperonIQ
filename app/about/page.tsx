import { GradientSeparator } from '@/components/home/GradientSeparator';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'About | OperonIQ',
  description:
    'OperonIQ was created by senior transformation, architecture, data, business applications, automation and AI specialists who believe organizations need more than technology projects.',
};

const beliefs = [
  'Better Operations',
  'Trusted Data',
  'Intelligent Automation',
  'Responsible AI',
  'Measurable Outcomes',
];

const silos = [
  'Business Consulting',
  'Data Consulting',
  'Microsoft Consulting',
  'AI Consulting',
];

const expertise = [
  'Business Transformation',
  'Modern Work',
  'Data & Analytics',
  'Business Applications',
  'Intelligent Automation & Agentic AI',
  'Governance, Quality & Responsible AI',
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
    label: 'Data & Analytics',
    items: ['Snowflake', 'Databricks'],
  },
  {
    label: 'AI & Automation',
    items: ['Azure AI', 'Azure OpenAI', 'Semantic Kernel', 'AI Agents'],
  },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
              <span className="h-px w-5 shrink-0 bg-slate-600" aria-hidden="true" />
              About OperonIQ
            </p>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Built by Practitioners.
              <br />
              Focused on Outcomes.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl sm:leading-10">
              OperonIQ was created by senior transformation, architecture, data,
              business applications, automation and AI specialists who believe
              organizations need more than technology projects.
            </p>
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Our Belief ───────────────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Our Belief
          </p>
          <p className="mt-8 text-xl text-slate-400">
            Companies do not need more platforms.
          </p>
          <p className="mt-1 text-xl text-slate-400">They need:</p>
          <div className="mt-12 flex flex-col gap-7">
            {beliefs.map((item) => (
              <div key={item} className="border-l-2 border-operon-cyan pl-8">
                <span className="text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.5rem]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Why OperonIQ Exists ───────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Why OperonIQ Exists
          </p>
          <p className="mt-8 text-xl text-slate-400">
            Most consulting firms specialise in one area.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {silos.map((silo) => (
              <div
                key={silo}
                className="rounded border border-dashed border-white/[0.14] px-5 py-5 text-center text-sm font-medium text-slate-600"
              >
                {silo}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-white/[0.1] bg-white/[0.04] px-8 py-9 shadow-glass sm:px-10">
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              OperonIQ combines all of them into one integrated transformation
              model.
            </p>
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Our Expertise ────────────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Our Expertise
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((area) => (
              <div
                key={area}
                className="rounded border border-white/[0.1] bg-white/[0.025] px-6 py-6 text-base font-medium text-slate-200 transition-colors duration-150 hover:border-white/[0.2] hover:bg-white/[0.05]"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientSeparator />

      {/* ── Technology Ecosystem ─────────────────────────────── */}
      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Technology Ecosystem
          </p>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
            We are technology-agnostic in approach and opinionated in execution.
            The platforms below are tools we use to deliver transformation — not
            products we sell.
          </p>
          <div className="mt-14 flex flex-col gap-12">
            {techGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-600">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400"
                    >
                      {tech}
                    </span>
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
