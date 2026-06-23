'use client';

import { Bot, ChevronDown, Compass, Database, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type TagType = 'python' | 'ml';
type ServiceTag = { label: string; type: TagType };

type ServiceItem = {
  title: string;
  challenge: string;
  outcomes: string[];
  deliverables: string[];
  tags: ServiceTag[];
};

type PanelData = {
  id: string;
  number: string;
  icon: LucideIcon;
  label: string;
  description: string;
  techBadges: string[];
  specialBadges: ServiceTag[];
  services: ServiceItem[];
};

// ─── Content ──────────────────────────────────────────────────────────────────

const PANELS: PanelData[] = [
  {
    id: '01',
    number: '01',
    icon: Compass,
    label: 'Strategy & Transformation',
    description:
      'We help leadership teams understand where AI creates enterprise value, then build the plans and roadmaps to capture it — grounding ambition in operational reality.',
    techBadges: ['Microsoft Copilot', 'Microsoft 365', 'Fabric', 'Snowflake', 'Databricks', 'Azure AI'],
    specialBadges: [
      { label: '🐍 Python assessment tooling', type: 'python' },
      { label: '🧠 ML maturity modelling', type: 'ml' },
    ],
    services: [
      {
        title: 'Agentic Readiness Assessment',
        challenge:
          'Leaders lack a clear picture of where autonomous AI agents can safely and profitably operate inside their organisation.',
        outcomes: [
          'Ranked opportunity map across functions',
          'Risk and dependency inventory',
          'Executive-aligned agentic roadmap',
        ],
        deliverables: [
          'Readiness scorecard',
          '90-day quick-win plan',
          'Board-ready briefing deck',
        ],
        tags: [
          { label: 'Python survey analysis', type: 'python' },
          { label: 'ML opportunity scoring', type: 'ml' },
        ],
      },
      {
        title: 'Business Transformation Assessment',
        challenge:
          'Organisations face pressure to modernise but struggle to connect technology investments to measurable business outcomes.',
        outcomes: [
          'Operating model gap analysis',
          'Value-linked transformation priorities',
          'Change impact baseline',
        ],
        deliverables: [
          'Current-state process maps',
          'Business case with ROI model',
          'Transformation roadmap',
        ],
        tags: [{ label: 'ML-driven cost-benefit modelling', type: 'ml' }],
      },
      {
        title: 'AI Workforce Strategy',
        challenge:
          'Executives need a credible plan for integrating digital workers alongside their human workforce without disrupting culture or productivity.',
        outcomes: [
          'Human-to-agent task allocation model',
          'Upskilling and change programme design',
          'KPIs for digital workforce performance',
        ],
        deliverables: [
          'Role taxonomy and agent blueprint',
          'Adoption playbook',
          'Workforce transition plan',
        ],
        tags: [
          { label: 'ML workforce demand forecasting', type: 'ml' },
          { label: 'Python skills-gap analysis', type: 'python' },
        ],
      },
      {
        title: 'Executive Advisory',
        challenge:
          'C-suite leaders need trusted, vendor-neutral guidance to navigate rapidly evolving AI capabilities and competitive dynamics.',
        outcomes: [
          'Sharper AI investment decisions',
          'Reduced programme risk',
          'Board-level AI fluency',
        ],
        deliverables: [
          'Monthly advisory sessions',
          'Horizon scanning reports',
          'Decision frameworks and position papers',
        ],
        tags: [],
      },
    ],
  },
  {
    id: '02',
    number: '02',
    icon: Database,
    label: 'Data & Intelligence',
    description:
      'Trusted, well-governed data is the foundation of every AI initiative. We modernise platforms, embed ML, and ensure your data is ready to power the next generation of intelligent applications.',
    techBadges: ['Microsoft Fabric', 'Snowflake', 'Databricks', 'Power BI', 'Azure Data Services'],
    specialBadges: [
      { label: '🐍 Python data engineering', type: 'python' },
      { label: '🧠 ML model development', type: 'ml' },
    ],
    services: [
      {
        title: 'Data Platform Readiness',
        challenge:
          'Fragmented, legacy data platforms block AI adoption and create bottlenecks that slow decision-making across the enterprise.',
        outcomes: [
          'Unified, scalable data lakehouse architecture',
          'Reliable pipelines feeding AI workloads',
          'Reduced data engineering toil',
        ],
        deliverables: [
          'Platform architecture blueprint',
          'Python-based ETL pipeline library',
          'Migration runbook and cut-over plan',
        ],
        tags: [
          { label: 'Python / PySpark pipelines', type: 'python' },
          { label: 'ML-ready feature store design', type: 'ml' },
        ],
      },
      {
        title: 'Analytics Modernisation',
        challenge:
          'Dashboards report what happened — but executives need forward-looking intelligence to act ahead of the curve.',
        outcomes: [
          'Shift from descriptive to predictive analytics',
          'Self-service insight across business units',
          'Faster time-to-insight',
        ],
        deliverables: [
          'ML-powered forecasting models',
          'Semantic layer and report catalogue',
          'Analyst upskilling programme',
        ],
        tags: [
          { label: 'Python (scikit-learn, statsmodels)', type: 'python' },
          { label: 'Predictive & prescriptive ML', type: 'ml' },
        ],
      },
      {
        title: 'Data Governance',
        challenge:
          'Without clear data ownership and quality controls, AI systems inherit the errors and biases of their underlying data.',
        outcomes: [
          'Trustworthy data across the enterprise',
          'Regulatory compliance posture',
          'Reduced data incidents and rework',
        ],
        deliverables: [
          'Data catalogue and lineage mapping',
          'Automated quality checks (Python / Great Expectations)',
          'Governance operating model',
        ],
        tags: [
          { label: 'Python data quality automation', type: 'python' },
          { label: 'ML anomaly detection on data quality', type: 'ml' },
        ],
      },
      {
        title: 'AI Data Foundations',
        challenge:
          'Most enterprise data is not in the shape, quality, or location required to fuel production AI and large language model workloads.',
        outcomes: [
          'Curated datasets ready for LLM fine-tuning and RAG',
          'Vector store and embedding infrastructure',
          'Reproducible ML experiment environment',
        ],
        deliverables: [
          'Feature engineering pipelines',
          'Embedding and retrieval layer',
          'MLflow experiment tracking setup',
        ],
        tags: [
          { label: 'Python (LangChain, MLflow, HuggingFace)', type: 'python' },
          { label: 'Feature engineering & embeddings', type: 'ml' },
        ],
      },
    ],
  },
  {
    id: '03',
    number: '03',
    icon: Bot,
    label: 'Automation & Agentic AI',
    description:
      'We design, build, and operate AI agents and digital workforces — from single-purpose automation to complex multi-agent systems that span entire business processes.',
    techBadges: ['Copilot Studio', 'Azure OpenAI', 'Azure AI Foundry', 'Power Automate', 'Logic Apps', 'Semantic Kernel'],
    specialBadges: [
      { label: '🐍 Python agent frameworks', type: 'python' },
      { label: '🧠 LLM / ML-powered agents', type: 'ml' },
    ],
    services: [
      {
        title: 'Agent Factory',
        challenge:
          'Organisations want to deploy AI agents quickly but lack the reusable tooling, templates, and standards to do so at scale.',
        outcomes: [
          'Reusable agent component library',
          'Rapid agent provisioning (days, not months)',
          'Consistent quality and safety baseline',
        ],
        deliverables: [
          'Python agent SDK and template repository',
          'CI/CD pipeline for agent deployment',
          'Developer enablement programme',
        ],
        tags: [
          { label: 'Python (LangGraph, AutoGen, SK)', type: 'python' },
          { label: 'LLM orchestration & routing', type: 'ml' },
        ],
      },
      {
        title: 'AI Agent Design',
        challenge:
          'Without thoughtful design, AI agents fail to earn user trust, behave inconsistently, or optimise for the wrong outcomes.',
        outcomes: [
          'Agents that are intuitive, reliable, and safe',
          'Clear scope, persona, and escalation paths',
          'High user adoption rates',
        ],
        deliverables: [
          'Agent design specification',
          'Prompt library and evaluation harness',
          'UX prototype and pilot results',
        ],
        tags: [
          { label: 'Python eval frameworks (RAGAS, DeepEval)', type: 'python' },
          { label: 'Prompt optimisation & A/B testing', type: 'ml' },
        ],
      },
      {
        title: 'Digital Workforce Enablement',
        challenge:
          'Deploying agents in isolation creates point solutions; scaling to a true digital workforce requires shared infrastructure and governance.',
        outcomes: [
          'Coordinated fleet of agents operating end-to-end',
          'Measurable capacity gains in target functions',
          'Human-in-the-loop checkpoints enforced',
        ],
        deliverables: [
          'Digital workforce architecture',
          'Agent orchestration layer (Python)',
          'Operations runbook and SLAs',
        ],
        tags: [
          { label: 'Python orchestration layer', type: 'python' },
          { label: 'ML-based workload scheduling', type: 'ml' },
        ],
      },
      {
        title: 'Intelligent Automation Programmes',
        challenge:
          'Traditional RPA programmes plateau once simple rules run out; intelligent automation adds judgement to handle exception-heavy processes.',
        outcomes: [
          'Higher straight-through processing rates',
          'Reduced exception handling cost',
          'Automation that learns and adapts over time',
        ],
        deliverables: [
          'Process intelligence assessment',
          'ML-enhanced automation workflows',
          'Benefits realisation tracker',
        ],
        tags: [
          { label: 'Python ML pipeline integration', type: 'python' },
          { label: 'Classification & document understanding', type: 'ml' },
        ],
      },
      {
        title: 'Multi-Agent Architectures',
        challenge:
          "Complex enterprise workflows require networks of specialised agents that collaborate, delegate, and verify each other's outputs.",
        outcomes: [
          'End-to-end automation of multi-step workflows',
          'Robust error recovery and fault tolerance',
          'Transparent audit trails across agent hops',
        ],
        deliverables: [
          'Multi-agent topology design',
          'Python implementation (LangGraph / AutoGen)',
          'Integration test suite and observability stack',
        ],
        tags: [
          { label: 'Python (LangGraph, AutoGen)', type: 'python' },
          { label: 'Reinforcement learning for routing', type: 'ml' },
        ],
      },
    ],
  },
  {
    id: '04',
    number: '04',
    icon: ShieldCheck,
    label: 'Governance & Scale',
    description:
      'Scaling AI responsibly demands controls that evolve as fast as the technology. We embed governance into the delivery lifecycle — from responsible AI policy to ML model monitoring in production.',
    techBadges: ['Microsoft Purview', 'Compliance Manager', 'Microsoft Security', 'Power Platform Governance'],
    specialBadges: [
      { label: '🐍 Python monitoring tooling', type: 'python' },
      { label: '🧠 ML drift detection', type: 'ml' },
    ],
    services: [
      {
        title: 'Responsible AI Governance',
        challenge:
          'Boards and regulators are demanding evidence that AI systems are fair, transparent, and safe — but few organisations have the frameworks to prove it.',
        outcomes: [
          'Auditable AI risk register',
          'Bias detection and mitigation in place',
          'Regulatory compliance posture (EU AI Act, etc.)',
        ],
        deliverables: [
          'Responsible AI policy and playbook',
          'Python fairness evaluation toolkit',
          'Model cards for all production models',
        ],
        tags: [
          { label: 'Python (Fairlearn, InterpretML)', type: 'python' },
          { label: 'Bias auditing & explainability', type: 'ml' },
        ],
      },
      {
        title: 'Quality Engineering',
        challenge:
          'AI systems require testing approaches that go beyond traditional QA — covering model behaviour, prompt robustness, and integration reliability.',
        outcomes: [
          'Confident deployment of AI changes',
          'Reduced regression and hallucination rates',
          'Automated quality gates in CI/CD',
        ],
        deliverables: [
          'AI-specific test strategy',
          'Automated evaluation pipelines (pytest + LLM judges)',
          'Quality dashboard and alerting',
        ],
        tags: [
          { label: 'Python test automation (pytest, RAGAS)', type: 'python' },
          { label: 'LLM-as-judge evaluation', type: 'ml' },
        ],
      },
      {
        title: 'Platform Governance',
        challenge:
          'As AI platforms grow, ungoverned sprawl leads to cost overruns, security gaps, and inconsistent user experience across teams.',
        outcomes: [
          'Controlled, compliant platform usage',
          'Cost visibility and optimisation',
          'Consistent guardrails across all deployments',
        ],
        deliverables: [
          'Platform governance framework',
          'Policy-as-code implementation',
          'Usage reporting and cost dashboards',
        ],
        tags: [
          { label: 'Python policy-as-code scripts', type: 'python' },
          { label: 'ML anomaly detection on usage patterns', type: 'ml' },
        ],
      },
      {
        title: 'Transformation Advisory Retainers',
        challenge:
          'Sustaining transformation momentum after initial delivery requires ongoing expert capacity that most internal teams cannot maintain alone.',
        outcomes: [
          'Continuous improvement embedded in operations',
          'Rapid response to emerging AI developments',
          'Maintained alignment between AI and business strategy',
        ],
        deliverables: [
          'Monthly health checks and model performance reviews',
          'Quarterly strategic reviews',
          'On-demand expert access',
        ],
        tags: [
          { label: 'ML model drift monitoring', type: 'ml' },
          { label: 'Python monitoring dashboards', type: 'python' },
        ],
      },
    ],
  },
];

// ─── Tech badge styles ────────────────────────────────────────────────────────

type TechStyle = { emoji: string; bg: string; border: string; color: string; logo?: string };

const TECH_STYLES: Record<string, TechStyle> = {
  // Microsoft 365 / Productivity
  'Microsoft Copilot':          { emoji: '🤖', bg: '#F0EBFF', border: '#C0A0E8', color: '#3D1A78', logo: '/logos/microsoft-copilot.svg' },
  'Copilot Studio':             { emoji: '🤖', bg: '#F0EBFF', border: '#C0A0E8', color: '#3D1A78', logo: '/logos/microsoft-copilot.svg' },
  'Microsoft 365':              { emoji: '🏢', bg: '#EBF3FF', border: '#90BEF0', color: '#0A3070', logo: '/logos/microsoft-365.svg' },
  'Microsoft Teams':            { emoji: '💬', bg: '#EBF0FF', border: '#90A8E8', color: '#1A2878' },
  'SharePoint Online':          { emoji: '🗂️', bg: '#EBF8F0', border: '#80D0A0', color: '#0A4030' },
  'Microsoft Viva':             { emoji: '🌱', bg: '#EBFAF0', border: '#90D4A8', color: '#0A4020' },
  // Microsoft Fabric / Data
  'Microsoft Fabric':           { emoji: '🔷', bg: '#E8F6FF', border: '#80C8F0', color: '#0A4060', logo: '/logos/microsoft-fabric.svg' },
  'Fabric':                     { emoji: '🔷', bg: '#E8F6FF', border: '#80C8F0', color: '#0A4060', logo: '/logos/microsoft-fabric.svg' },
  'Power BI':                   { emoji: '📊', bg: '#FFFAEB', border: '#F0D070', color: '#785800', logo: '/logos/power-bi.svg' },
  // Cloud data platforms
  'Snowflake':                  { emoji: '❄️', bg: '#EBF8FF', border: '#80C8EE', color: '#0A3858' },
  'Databricks':                 { emoji: '⚡', bg: '#FFF4EB', border: '#F0B870', color: '#783000', logo: '/logos/databricks.svg' },
  // Azure services
  'Azure AI':                   { emoji: '☁️', bg: '#EBF4FF', border: '#70B8F0', color: '#0A2860', logo: '/logos/azure-ai.svg' },
  'Azure Data Services':        { emoji: '☁️', bg: '#EBF4FF', border: '#70B8F0', color: '#0A2860', logo: '/logos/azure-data-services.svg' },
  'Azure AI Foundry':           { emoji: '🏭', bg: '#EBF4FF', border: '#70B8F0', color: '#0A2860', logo: '/logos/azure-ai.svg' },
  'Azure OpenAI':               { emoji: '✨', bg: '#EBF8F0', border: '#80D0B0', color: '#0A3828', logo: '/logos/azure-openai.svg' },
  'Azure Integration Services': { emoji: '🔗', bg: '#EBF4FF', border: '#70B8F0', color: '#0A2860' },
  'Azure Policy':               { emoji: '📋', bg: '#EBF4FF', border: '#70B8F0', color: '#0A2860' },
  // Power Platform
  'Power Automate':             { emoji: '⚡', bg: '#EBF0FF', border: '#90A8E8', color: '#1A2878', logo: '/logos/power-automate.svg' },
  'Power Platform':             { emoji: '⚙️', bg: '#F0EBFF', border: '#B090D8', color: '#360A68' },
  'Power Platform Governance':  { emoji: '⚙️', bg: '#F0EBFF', border: '#B090D8', color: '#360A68' },
  'Logic Apps':                 { emoji: '🔄', bg: '#F0EBFF', border: '#B898E0', color: '#3A1068', logo: '/logos/logic-apps.svg' },
  'Semantic Kernel':            { emoji: '🧵', bg: '#EBF5FF', border: '#88B8E8', color: '#0A2050' },
  // Business apps
  'Dynamics 365':               { emoji: '🏢', bg: '#EBF3FF', border: '#90BEF0', color: '#0A3070' },
  'Business Central':           { emoji: '🏢', bg: '#EBF3FF', border: '#90BEF0', color: '#0A3070' },
  // Governance
  'Microsoft Purview':          { emoji: '🛡️', bg: '#EBF0FF', border: '#8890D8', color: '#0A1858' },
  'Compliance Manager':         { emoji: '✅', bg: '#EBFAF0', border: '#80C898', color: '#0A3820' },
  'Microsoft Security':         { emoji: '🔒', bg: '#EBEFF8', border: '#7888C8', color: '#0A1040' },
  // Other
  'Process Mining':             { emoji: '🔍', bg: '#F5F5EB', border: '#C8C880', color: '#404000' },
};

function TechBadge({ label }: { label: string }) {
  const s = TECH_STYLES[label];
  if (s) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-[0.68rem] font-medium"
        style={{ backgroundColor: s.bg, borderColor: s.border, color: s.color }}
      >
        {s.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={s.logo} alt="" aria-hidden="true" className="h-3.5 w-3.5 shrink-0 object-contain" />
        ) : (
          <span aria-hidden="true">{s.emoji}</span>
        )}
        {label}
      </span>
    );
  }
  return (
    <span className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400">
      {label}
    </span>
  );
}

// ─── Tag pill ─────────────────────────────────────────────────────────────────

function TagPill({ tag }: { tag: ServiceTag }) {
  if (tag.type === 'python') {
    return (
      <span className="inline-flex items-center rounded border border-[#B0D4EE] bg-[#E8F4FD] px-2.5 py-1 text-[0.68rem] font-medium text-[#1A5276]">
        {tag.label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded border border-[#A9D4A4] bg-[#EAF4E8] px-2.5 py-1 text-[0.68rem] font-medium text-[#1E6A1A]">
      {tag.label}
    </span>
  );
}

// ─── Service card (expandable) ────────────────────────────────────────────────

function ServiceCard({
  service,
  isOpen,
  onToggle,
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`rounded-lg border transition-colors duration-200 ${
        isOpen
          ? 'border-operon-cyan/30 bg-navy-950/60'
          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.16] hover:bg-white/[0.04]'
      }`}
    >
      {/* Toggle header */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <h3 className="text-base font-semibold leading-snug text-white">{service.title}</h3>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-operon-cyan' : 'text-slate-500'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Expanded body */}
      {isOpen && (
        <div className="space-y-5 border-t border-white/[0.07] px-5 pb-5 pt-4">

          {/* Challenge */}
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Business Challenge
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{service.challenge}</p>
          </div>

          {/* Outcomes */}
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-operon-cyan">
              Expected Outcomes
            </p>
            <ul className="mt-2.5 space-y-2">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-operon-cyan" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-operon-green">
              Deliverables
            </p>
            <ul className="mt-2.5 space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-operon-green" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          {service.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {service.tags.map((tag) => (
                <TagPill key={tag.label} tag={tag} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

// ─── Main page content ────────────────────────────────────────────────────────

export function ServicesPageContent() {
  const [activeTab, setActiveTab] = useState('01');
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const switchTab = (id: string) => {
    setActiveTab(id);
    setOpenCards(new Set());
  };

  const toggleCard = (id: string) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const panel = PANELS.find((p) => p.id === activeTab)!;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-14 pt-24 lg:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] -translate-y-1/4 rounded-full bg-operon-cyan/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-operon-blue/[0.07] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-blue/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Eyebrow with leading rule */}
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-operon-cyan" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
              Services
            </p>
          </div>

          {/* Headline */}
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Transformation Services for the Agentic Enterprise
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
            From strategy to execution, we help organizations redesign operations, unlock trusted
            data, and deploy AI-powered digital workforces.
          </p>

          {/* Hero pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {['Strategy', 'Data & Intelligence', 'Agentic AI', 'Governance'].map((label) => (
              <span
                key={label}
                className="rounded-sm border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-slate-300"
              >
                {label}
              </span>
            ))}
            <TagPill tag={{ label: 'Python-native delivery', type: 'python' }} />
            <TagPill tag={{ label: 'ML-augmented outcomes', type: 'ml' }} />
          </div>
        </div>
      </section>

      {/* ── Tab navigation + panels ───────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-6 lg:px-8">

        {/* Tabs */}
        <div className="border-b border-white/[0.08]">
          <div className="flex">
            {PANELS.map((p) => {
              const Icon = p.icon;
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => switchTab(p.id)}
                  className={`group -mb-px flex flex-1 flex-col items-center gap-1.5 border-b-2 px-2 pb-4 pt-3 text-center transition duration-200 sm:flex-row sm:justify-center sm:gap-2.5 sm:px-4 ${
                    isActive
                      ? 'border-operon-cyan text-white'
                      : 'border-transparent text-slate-500 hover:border-white/[0.15] hover:text-slate-300'
                  }`}
                >
                  <span
                    className={`hidden text-[0.55rem] font-semibold tracking-[0.2em] sm:block ${
                      isActive ? 'text-operon-cyan/70' : 'text-slate-600'
                    }`}
                  >
                    {p.number}
                  </span>
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-[0.7rem] font-medium sm:text-sm">{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active panel — key forces re-mount on tab switch (natural fade) */}
        <div key={activeTab} className="pt-10">

          {/* Panel header: description + tech badges */}
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">{panel.description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {panel.techBadges.map((badge) => (
              <TechBadge key={badge} label={badge} />
            ))}
            {panel.specialBadges.map((badge) => (
              <TagPill key={badge.label} tag={badge} />
            ))}
          </div>

          {/* Services grid */}
          <div className="mt-8 grid items-start gap-3 md:grid-cols-2">
            {panel.services.map((svc, i) => {
              const cardId = `${panel.id}-${i}`;
              return (
                <ServiceCard
                  key={cardId}
                  service={svc}
                  isOpen={openCards.has(cardId)}
                  onToggle={() => toggleCard(cardId)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
