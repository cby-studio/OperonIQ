'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LOGO_MAP: Record<string, string> = {
  'Microsoft 365': '/logos/microsoft-365.svg',
  'Azure AI': '/logos/azure-ai.svg',
  'Azure AI Foundry': '/logos/azure-ai.svg',
  'Azure Data Services': '/logos/azure-data-services.svg',
  'Azure OpenAI': '/logos/azure-openai.svg',
  'Databricks': '/logos/databricks.svg',
  'Logic Apps': '/logos/logic-apps.svg',
  'Copilot': '/logos/microsoft-copilot.svg',
  'Copilot Studio': '/logos/microsoft-copilot.svg',
  'Microsoft Fabric': '/logos/microsoft-fabric.svg',
  'Power Automate': '/logos/power-automate.svg',
  'Power BI': '/logos/power-bi.svg',
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

type EngageCard = {
  title: string;
  meta: string;
  description: string;
};

// ─── Pillar data ──────────────────────────────────────────────────────────────

const PILLARS: PillarData[] = [
  {
    id: '01',
    number: '01',
    name: 'Business Transformation',
    conviction: 'Redesign how the business operates before introducing technology.',
    ecosystem: [
      { label: 'Microsoft 365', type: 'neutral' },
      { label: 'Power Platform', type: 'neutral' },
      { label: 'Azure AI', type: 'neutral' },
      { label: 'Snowflake', type: 'neutral' },
      { label: 'Databricks', type: 'neutral' },
    ],
    services: [
      {
        id: 's01-01',
        name: 'Agentic Readiness Assessment',
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
        id: 's01-02',
        name: 'Business Transformation Assessment',
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
        id: 's01-03',
        name: 'AI Workforce Strategy',
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
        id: 's01-04',
        name: 'Executive Advisory',
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
      },
    ],
  },
  {
    id: '02',
    number: '02',
    name: 'Modern Work',
    conviction: 'Enable people to collaborate, decide and execute faster.',
    ecosystem: [
      { label: 'Microsoft 365', type: 'neutral' },
      { label: 'Teams', type: 'neutral' },
      { label: 'SharePoint', type: 'neutral' },
      { label: 'Viva', type: 'neutral' },
      { label: 'Copilot', type: 'neutral' },
      { label: 'Power Platform', type: 'neutral' },
    ],
    services: [
      {
        id: 's02-01',
        name: 'Microsoft 365 Strategy',
        challenge:
          'Organisations have invested in Microsoft 365 but struggle to realise value beyond email and basic file storage.',
        outcomes: [
          'Unified adoption strategy across M365 workloads',
          'Measurable productivity improvements',
          'AI-ready workplace foundation',
        ],
        deliverables: [
          'M365 maturity assessment',
          'Adoption roadmap',
          'Governance and licensing review',
        ],
      },
      {
        id: 's02-02',
        name: 'Copilot Readiness Programme',
        challenge:
          'Deploying Microsoft Copilot without preparing people, processes, content and governance leads to low adoption and wasted investment.',
        outcomes: [
          'High Copilot adoption from day one',
          'Governed use across functions',
          'Measurable productivity lift',
        ],
        deliverables: [
          'Copilot readiness scorecard',
          'Content and data preparation plan',
          'Adoption and change programme',
        ],
      },
      {
        id: 's02-03',
        name: 'Teams & SharePoint Governance',
        challenge:
          'Ungoverned Teams and SharePoint environments create sprawl, duplication and security risk as organisations scale.',
        outcomes: [
          'Controlled, compliant collaboration environment',
          'Findable, trusted knowledge',
          'Reduced duplication and cost',
        ],
        deliverables: [
          'Governance framework and policies',
          'Site and team lifecycle management',
          'Training and adoption programme',
        ],
      },
      {
        id: 's02-04',
        name: 'Knowledge Management',
        challenge:
          "Critical organisational knowledge is locked in email, in people's heads, or in unstructured content that AI cannot reliably use.",
        outcomes: [
          'Structured, findable knowledge base',
          'AI-ready content architecture',
          'Reduced onboarding and support time',
        ],
        deliverables: [
          'Knowledge architecture design',
          'Viva Topics or SharePoint implementation',
          'Content curation playbook',
        ],
      },
    ],
  },
  {
    id: '03',
    number: '03',
    name: 'Data & Analytics',
    conviction: 'Turn fragmented data into trusted intelligence.',
    ecosystem: [
      { label: 'Microsoft Fabric', type: 'neutral' },
      { label: 'Snowflake', type: 'neutral' },
      { label: 'Databricks', type: 'neutral' },
      { label: 'Power BI', type: 'neutral' },
      { label: 'Azure Data Services', type: 'neutral' },
      { label: 'Python / PySpark', type: 'python' },
      { label: 'ML & MLflow', type: 'ml' },
    ],
    services: [
      {
        id: 's03-01',
        name: 'Data Platform Readiness',
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
          'Migration runbook',
        ],
        tags: [
          { label: 'Python / PySpark pipelines', type: 'python' },
          { label: 'ML-ready feature store', type: 'ml' },
        ],
      },
      {
        id: 's03-02',
        name: 'Analytics Modernisation',
        challenge:
          'Dashboards report what happened — executives need forward-looking intelligence to act ahead of the curve.',
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
        id: 's03-03',
        name: 'Data Governance',
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
        id: 's03-04',
        name: 'AI Data Foundations',
        challenge:
          'Most enterprise data is not in the shape or quality required to fuel production AI and LLM workloads.',
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
    id: '04',
    number: '04',
    name: 'Business Applications',
    conviction: 'Connect CRM, ERP and operational workflows.',
    ecosystem: [
      { label: 'Dynamics 365', type: 'neutral' },
      { label: 'Business Central', type: 'neutral' },
      { label: 'Power Platform', type: 'neutral' },
      { label: 'Power Automate', type: 'neutral' },
      { label: 'Copilot Studio', type: 'neutral' },
    ],
    services: [
      {
        id: 's04-01',
        name: 'Dynamics 365 CRM Advisory',
        challenge:
          'CRM implementations often fail to reflect how the business actually sells, services or retains customers.',
        outcomes: [
          'CRM aligned to customer journey reality',
          'Higher adoption across sales and service teams',
          'Cleaner data feeding AI and reporting',
        ],
        deliverables: [
          'Process and requirements review',
          'Configured and tested CRM environment',
          'Adoption and training programme',
        ],
      },
      {
        id: 's04-02',
        name: 'Business Central Optimisation',
        challenge:
          'Finance and operations teams work around Business Central rather than through it, creating manual workarounds and data gaps.',
        outcomes: [
          'Reduced manual workarounds',
          'Reliable financial and operational data',
          'ERP positioned to support AI agents',
        ],
        deliverables: [
          'Process alignment review',
          'Configuration and integration fixes',
          'Reporting and automation improvements',
        ],
      },
      {
        id: 's04-03',
        name: 'Customer Journey Transformation',
        challenge:
          'Disconnected systems create fragmented customer experiences that damage retention and make AI-assisted service impossible.',
        outcomes: [
          'End-to-end customer journey visibility',
          'Consistent experience across touchpoints',
          'AI-ready customer data model',
        ],
        deliverables: [
          'Journey mapping and gap analysis',
          'Unified customer data architecture',
          'Automation and agent integration plan',
        ],
        tags: [{ label: 'ML churn prediction', type: 'ml' }],
      },
    ],
  },
  {
    id: '05',
    number: '05',
    name: 'Automation & Agentic AI',
    conviction: 'Design digital workforces that accelerate execution.',
    ecosystem: [
      { label: 'Copilot Studio', type: 'neutral' },
      { label: 'Azure OpenAI', type: 'neutral' },
      { label: 'Azure AI Foundry', type: 'neutral' },
      { label: 'Power Automate', type: 'neutral' },
      { label: 'Logic Apps', type: 'neutral' },
      { label: 'Semantic Kernel', type: 'neutral' },
      { label: 'Python / LangGraph', type: 'python' },
      { label: 'LLM orchestration', type: 'ml' },
    ],
    services: [
      {
        id: 's05-01',
        name: 'Agent Factory',
        challenge:
          'Organisations want to deploy AI agents quickly but lack the reusable tooling and standards to do so at scale.',
        outcomes: [
          'Reusable agent component library',
          'Rapid agent provisioning in days not months',
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
        id: 's05-02',
        name: 'Multi-Agent Architectures',
        challenge:
          "Complex workflows require networks of specialised agents that collaborate, delegate and verify each other's outputs.",
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
      {
        id: 's05-03',
        name: 'Intelligent Automation Programmes',
        challenge:
          'Traditional RPA programmes plateau once simple rules run out — intelligent automation adds judgement to exception-heavy processes.',
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
        id: 's05-04',
        name: 'Digital Workforce Enablement',
        challenge:
          'Deploying agents in isolation creates point solutions — scaling to a true digital workforce requires shared infrastructure and governance.',
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
        id: 's05-05',
        name: 'AI Agent Design',
        challenge:
          'Without thoughtful design, AI agents fail to earn user trust, behave inconsistently, or optimise for the wrong outcomes.',
        outcomes: [
          'Agents that are intuitive, reliable and safe',
          'Clear scope, persona and escalation paths',
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
    ],
  },
  {
    id: '06',
    number: '06',
    name: 'Governance & Quality',
    conviction: 'Keep transformation secure, controlled and scalable.',
    ecosystem: [
      { label: 'Microsoft Purview', type: 'neutral' },
      { label: 'Compliance Manager', type: 'neutral' },
      { label: 'Microsoft Security', type: 'neutral' },
      { label: 'Power Platform Governance', type: 'neutral' },
      { label: 'Python monitoring', type: 'python' },
      { label: 'ML drift detection', type: 'ml' },
    ],
    services: [
      {
        id: 's06-01',
        name: 'Responsible AI Governance',
        challenge:
          'Boards and regulators demand evidence that AI systems are fair, transparent and safe — few organisations have the frameworks to prove it.',
        outcomes: [
          'Auditable AI risk register',
          'Bias detection and mitigation in place',
          'Regulatory compliance posture (EU AI Act)',
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
        id: 's06-02',
        name: 'Quality Engineering',
        challenge:
          'AI systems require testing approaches beyond traditional QA — covering model behaviour, prompt robustness and integration reliability.',
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
        id: 's06-03',
        name: 'Platform Governance',
        challenge:
          'As AI platforms grow, ungoverned sprawl leads to cost overruns, security gaps and inconsistent user experience.',
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
        id: 's06-04',
        name: 'Transformation Advisory Retainer',
        challenge:
          'Sustaining transformation momentum requires ongoing expert capacity that most internal teams cannot maintain alone.',
        outcomes: [
          'Continuous improvement embedded in operations',
          'Rapid response to emerging AI developments',
          'Alignment between AI and business strategy maintained',
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

// ─── How to Engage data ───────────────────────────────────────────────────────

const ENGAGE_CARDS: EngageCard[] = [
  {
    title: 'AI Readiness Assessment',
    meta: '2–4 weeks · Fixed fee',
    description:
      'Assess AI maturity, data exposure, governance gaps and build an executive roadmap.',
  },
  {
    title: 'Business Transformation Assessment',
    meta: '4–6 weeks · Fixed fee',
    description:
      'Map process friction and design the target operating model with a value-linked roadmap.',
  },
  {
    title: 'Data Platform Readiness',
    meta: '2–4 weeks · Fixed fee',
    description:
      'Evaluate Fabric, Snowflake, Databricks, analytics maturity and data governance posture.',
  },
  {
    title: 'Copilot Enablement Programme',
    meta: '1–3 months · Fixed scope',
    description:
      'Prepare people, processes, content and governance for Microsoft Copilot at scale.',
  },
  {
    title: 'Automation Discovery',
    meta: '2–3 weeks · Fixed fee',
    description:
      'Identify high-value automation opportunities and quantify the business case for action.',
  },
  {
    title: 'Fractional Architecture Services',
    meta: 'Ongoing · Monthly retainer',
    description: 'Strategic advisory across business, data, applications, automation and AI.',
  },
];

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
  const [hovered, setHovered] = useState(false);
  const borderColor =
    isOpen || hovered ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.07)';

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
          className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200"
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
              className="mb-1.5 text-slate-500"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Business Challenge
            </p>
            <p className="text-slate-400" style={{ fontSize: 12, lineHeight: 1.65 }}>
              {service.challenge}
            </p>
          </div>

          {/* Expected Outcomes */}
          <div className="mb-4">
            <p
              className="mb-1.5 text-slate-500"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Expected Outcomes
            </p>
            <ul className="space-y-1.5">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-slate-400" style={{ fontSize: 12, lineHeight: 1.6 }}>
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className={service.tags && service.tags.length > 0 ? 'mb-4' : ''}>
            <p
              className="mb-1.5 text-slate-500"
              style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Deliverables
            </p>
            <ul className="space-y-1.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-slate-400" style={{ fontSize: 12, lineHeight: 1.6 }}>
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-600" />
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
      <div className="relative flex items-start justify-between" style={{ padding: '2rem 2rem 1.25rem' }}>
        <div style={{ maxWidth: 520 }}>
          <h2 className="text-white" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
            {pillar.name}
          </h2>
          <p className="mt-2 text-slate-400" style={{ fontSize: 13, lineHeight: 1.65, maxWidth: 480 }}>
            {pillar.conviction}
          </p>
        </div>
      </div>

      {/* Part 2 — Ecosystem strip */}
      <div className="bg-navy-900" style={{ padding: '0.9rem 2rem' }}>
        <p
          className="mb-2.5 text-slate-500"
          style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}
        >
          Ecosystem
        </p>
        <div className="flex flex-wrap gap-2">
          {pillar.ecosystem.map((chip) => (
            <EcoChip key={chip.label} chip={chip} />
          ))}
        </div>
      </div>

      {/* Part 3 — Service cards grid */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          alignItems: 'start',
          padding: '1.5rem 2rem 2.5rem',
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
  const [activeTab, setActiveTab] = useState('01');

  const activePillar = PILLARS.find((p) => p.id === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-20 lg:pt-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-operon-cyan/[0.055] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-operon-blue/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-white/20" />
            <p
              className="text-slate-400"
              style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Capabilities
            </p>
          </div>

          <h1
            className="mt-5 text-white"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, lineHeight: 1.15 }}
          >
            Six capabilities. One transformation engine.
          </h1>
          <p className="mt-4 text-slate-400" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
            Each pillar addresses a distinct layer of the operating model. Together they form the
            integrated capability that makes agentic transformation possible.
          </p>
        </div>
      </section>

      {/* Sticky pillar nav */}
      <div
        className="sticky z-20 border-b border-white/[0.08] bg-navy-950/95 backdrop-blur-xl"
        style={{ top: 96 }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex">
            {PILLARS.map((p) => {
              const isActive = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className="flex flex-1 flex-col items-center gap-0.5 px-1 py-3 text-center transition-colors duration-150"
                  style={{
                    borderBottom: isActive ? '2px solid #fff' : '2px solid transparent',
                  }}
                >
                  <span
                    style={{ fontSize: 9, fontWeight: 500 }}
                    className={isActive ? 'text-slate-400' : 'text-slate-600'}
                  >
                    {p.number}
                  </span>
                  <span
                    style={{ fontSize: 11, fontWeight: 500, lineHeight: 1.3 }}
                    className={isActive ? 'text-white' : 'text-slate-500'}
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
            <div className="h-px w-6 bg-white/20" />
            <p
              className="text-slate-400"
              style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              How to Engage
            </p>
          </div>

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGE_CARDS.map((card) => (
              <div
                key={card.title}
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
            Every assessment is designed to reveal a larger transformation roadmap.{' '}
            <Link
              href="/contact"
              className="text-slate-300 underline-offset-2 transition-colors duration-150 hover:text-white"
            >
              Start the Conversation →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
