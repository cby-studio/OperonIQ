import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  DatabaseZap,
  Gauge,
  Layers3,
  Network,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type {
  AgenticAiService,
  Capability,
  DetailPageItem,
  NavItem,
  OperatingModelStep,
  Service,
} from './types';

export const navItems: NavItem[] = [
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const problemSignals: string[] = [
  'Fragmented processes',
  'Disconnected data',
  'Manual reporting',
  'Platform sprawl',
  'Weak governance',
];

export const capabilities: Capability[] = [
  {
    icon: BriefcaseBusiness,
    number: '01',
    title: 'Business Transformation & Operating Model Design',
    headline: 'Redesign how the business operates before introducing technology.',
    description:
      'We map processes, operating models and value opportunities to identify where automation and AI agents can create measurable impact.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Modern Work & Intelligent Collaboration',
    headline: 'Create an AI-ready workplace for people and digital workers.',
    description:
      'Create an AI-ready workplace where people, knowledge and digital workers collaborate effectively across Microsoft 365, Teams, SharePoint, Viva and Copilot-ready environments.',
  },
  {
    icon: DatabaseZap,
    number: '03',
    title: 'Data, Analytics & AI Foundations',
    headline: 'Build trusted data platforms that power decisions and agents.',
    description:
      'Build trusted data platforms that power decisions, automation and AI using Microsoft Fabric, Snowflake, Databricks, Power BI, Python, machine learning and data governance.',
  },
  {
    icon: Building2,
    number: '04',
    title: 'Connected Business Applications',
    headline: 'Connect CRM, ERP and operational workflows.',
    description:
      'Connect CRM, ERP and operational workflows across Dynamics 365, Business Central and business platforms so AI agents can interact with real systems of record.',
  },
  {
    icon: BrainCircuit,
    number: '05',
    title: 'Intelligent Automation & Agentic AI',
    headline: 'Design digital workforces that accelerate execution.',
    description:
      'Design, deploy and govern AI agents, multi-agent architectures, workflow automation and digital workforces using Python, machine learning and cloud AI services to reduce manual work and accelerate execution.',
  },
  {
    icon: ShieldCheck,
    number: '06',
    title: 'Governance, Quality & Responsible AI',
    headline: 'Keep agentic transformation secure, controlled and scalable.',
    description:
      'Embed QA, platform governance, testing, controls, adoption validation and responsible AI guardrails into every transformation initiative.',
  },
];

export const capabilityDetails: DetailPageItem[] = [
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Agentic operating model clarity',
    title: 'Business Transformation',
    description:
      'We connect business ambition to practical agentic change by mapping the processes, roles, decision points and capabilities that shape performance.',
    points: [
      'Current-state process and capability mapping',
      'Agentic enterprise roadmaps tied to measurable value',
      'Operating model recommendations for AI-powered work',
    ],
  },
  {
    icon: Layers3,
    eyebrow: 'Human and digital workforce alignment',
    title: 'Modern Work',
    description:
      'We help organizations create mature digital workplaces where collaboration, knowledge sharing and employee experience are ready for AI-powered execution.',
    points: [
      'Knowledge architecture and collaboration governance',
      'Decision and execution rhythms for hybrid human-agent work',
      'AI-ready workplace enablement patterns',
    ],
  },
  {
    icon: DatabaseZap,
    eyebrow: 'Trusted intelligence foundations',
    title: 'Data & Analytics',
    description:
      'We design data platforms and analytics experiences that leadership teams and AI-powered workflows can trust, with semantic consistency, governance and decision-ready insight.',
    points: [
      'Trusted data architecture and platform readiness',
      'Semantic model design for decisions, agents and analytics',
      'Modern data governance and quality controls',
    ],
  },
  {
    icon: Building2,
    eyebrow: 'Connected business systems',
    title: 'Business Applications',
    description:
      'We align CRM, ERP and operational workflows across the business platform landscape so applications support the way teams and digital workforces actually work.',
    points: [
      'Workflow, integration and data model alignment',
      'Business platform readiness for agentic execution',
      'Application modernization priorities and roadmaps',
    ],
  },
  {
    icon: BrainCircuit,
    eyebrow: 'Digital workforce execution',
    title: 'Automation & AI',
    description:
      'We identify and design automation patterns, AI agents and digital workforce models that remove repetitive work and improve operational performance.',
    points: [
      'Automation opportunity discovery and prioritization',
      'AI agent, orchestration and workflow design patterns',
      'Responsible AI controls for operational deployment',
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Control, quality and adoption',
    title: 'Governance & Quality',
    description:
      'We embed the governance, testing and validation practices needed to keep agentic transformation controlled, adopted and measurable.',
    points: [
      'Governance models and decision rights',
      'QA, testing and control frameworks',
      'Adoption validation and agentic operating metrics',
    ],
  },
];

export const agenticAiServices: AgenticAiService[] = [
  {
    icon: SearchCheck,
    number: '01',
    title: 'Agentic Readiness Assessment',
    description:
      'Assess organizational readiness for enterprise AI agents across data, applications, automation, governance and operating model maturity.',
  },
  {
    icon: Bot,
    number: '02',
    title: 'Agent Factory',
    description:
      'Design, build and deploy enterprise AI agents for functions such as HR, Finance, Sales, Customer Service, Operations and Knowledge Management.',
  },
  {
    icon: Network,
    number: '03',
    title: 'AI Workforce Strategy',
    description:
      'Define how humans, automations and AI agents collaborate across the organization to improve productivity and decision-making.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Agent Governance Framework',
    description:
      'Establish policies, controls, lifecycle management, monitoring and responsible AI guardrails for enterprise agents.',
  },
];

export const operatingModel: OperatingModelStep[] = [
  {
    title: 'Discover',
    text: 'Clarify strategic priorities, process friction, trusted data gaps and readiness for AI-powered digital workforces.',
  },
  {
    title: 'Design',
    text: 'Define the target operating model, platform architecture, governance and value cases for agentic operations.',
  },
  {
    title: 'Orchestrate',
    text: 'Coordinate data, applications, automation and AI agents into a connected execution model.',
  },
  {
    title: 'Govern',
    text: 'Establish decision rights, quality controls, platform standards and responsible agentic guardrails.',
  },
  {
    title: 'Scale',
    text: 'Scale digital workforce patterns through enablement, measurement and executive operating rhythms.',
  },
];

export const services: Service[] = [
  {
    icon: SearchCheck,
    title: 'Agentic Enterprise Readiness',
  },
  {
    icon: Workflow,
    title: 'Digital Workforce Opportunity Mapping',
  },
  {
    icon: DatabaseZap,
    title: 'Trusted Data Platform Readiness',
  },
  {
    icon: Bot,
    title: 'AI Workforce Enablement',
  },
  {
    icon: Gauge,
    title: 'Business Applications Assessment',
  },
  {
    icon: Network,
    title: 'Fractional Architecture Services',
  },
];

export const serviceDetails: DetailPageItem[] = [
  {
    icon: SearchCheck,
    eyebrow: 'From ambition to agentic readiness',
    title: 'Agentic Enterprise Readiness',
    description:
      'A senior-led review of your operating model, trusted data estate, platform maturity and governance posture to determine where AI-powered digital workforces can create responsible value.',
    points: [
      'Agentic readiness scorecard and executive findings',
      'Digital workforce opportunities mapped to business value',
      'Risk, governance and enablement recommendations',
    ],
  },
  {
    icon: Workflow,
    eyebrow: 'Find the work ready for digital labor',
    title: 'Digital Workforce Opportunity Mapping',
    description:
      'A focused discovery engagement that identifies repeatable, manual or fragmented workflows where digital workforces can improve cycle time, quality and employee capacity.',
    points: [
      'Workflow inventory and friction analysis',
      'Digital workforce opportunity backlog',
      'Delivery roadmap across automation, orchestration and AI patterns',
    ],
  },
  {
    icon: DatabaseZap,
    eyebrow: 'Prepare the data layer',
    title: 'Trusted Data Platform Readiness',
    description:
      'A practical assessment of your data architecture, reporting landscape and governance model for trusted analytics and agentic execution.',
    points: [
      'Data platform maturity review',
      'Semantic model, reporting and agent-readiness recommendations',
      'Trusted data roadmap and governance guardrails',
    ],
  },
  {
    icon: Bot,
    eyebrow: 'Make AI operationally useful',
    title: 'AI Workforce Enablement',
    description:
      'A structured enablement program that prepares teams, knowledge, permissions and adoption practices for AI-assisted work and digital workforce adoption.',
    points: [
      'AI workforce readiness and information architecture review',
      'Role-based enablement journeys',
      'Adoption, governance and value measurement framework',
    ],
  },
  {
    icon: Gauge,
    eyebrow: 'Assess the systems that run work',
    title: 'Business Applications Assessment',
    description:
      'A senior architecture review of business applications and related workflows to identify simplification, integration and modernization opportunities.',
    points: [
      'Application and workflow health assessment',
      'Integration, data and process recommendations',
      'Modernization roadmap for agentic-ready operating systems',
    ],
  },
  {
    icon: Network,
    eyebrow: 'Senior architecture without the overhead',
    title: 'Fractional Architecture Services',
    description:
      'Ongoing senior guidance for organizations that need experienced agentic enterprise, data, automation and governance leadership without a full-time executive hire.',
    points: [
      'Architecture direction and decision support',
      'Roadmap governance and delivery oversight',
      'Executive advisory across agentic transformation programs',
    ],
  },
];
