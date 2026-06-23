import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  DatabaseZap,
  GitBranch,
  ShieldCheck,
  Users,
} from 'lucide-react';

const modelNodes = [
  {
    label: 'People',
    index: '01',
    icon: Users,
    className: 'left-1/2 top-[7%] -translate-x-1/2',
  },
  {
    label: 'Process',
    index: '02',
    icon: GitBranch,
    className: 'left-[4%] top-[22%]',
  },
  {
    label: 'Data',
    index: '03',
    icon: DatabaseZap,
    className: 'right-[4%] top-[22%]',
  },
  {
    label: 'Applications',
    index: '04',
    icon: Building2,
    className: 'left-[2%] top-[53%]',
  },
  {
    label: 'Automation',
    index: '05',
    icon: BriefcaseBusiness,
    className: 'right-[2%] top-[53%]',
  },
  {
    label: 'AI Agents',
    index: '06',
    icon: Bot,
    className: 'left-[22%] bottom-[7%]',
  },
  {
    label: 'Governance',
    index: '07',
    icon: ShieldCheck,
    className: 'right-[22%] bottom-[7%]',
  },
];

export function AgenticOperatingModel() {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-glass-sheen p-5 shadow-glass backdrop-blur-2xl transition duration-500 hover:border-operon-cyan/35 sm:p-6">
      <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_47%,rgba(32,197,232,0.14),transparent_36%)]" />
      <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-operon-cyan/45 to-operon-green/20" />
      <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-operon-blue/20 via-operon-green/35 to-transparent" />

      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-operon-cyan">
            Agentic Operating Model
          </p>
          <p className="mt-2 text-sm text-slate-500">
            People, platforms and digital workforces connected by governance.
          </p>
        </div>
        <div className="hidden rounded-sm border border-operon-cyan/25 bg-navy-950/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:block">
          Enterprise Layer
        </div>
      </div>

      <div className="relative hidden min-h-[540px] sm:block">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 640 540"
          role="img"
          aria-label="Agentic Operating Model connected to the OperonIQ Intelligence Layer"
        >
          <defs>
            <linearGradient id="agentic-line" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#1495FF" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#20C5E8" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#44D062" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="agentic-ring" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#1495FF" stopOpacity="0.35" />
              <stop offset="52%" stopColor="#20C5E8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#44D062" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g fill="none">
            <ellipse
              className="animate-signal-pulse"
              cx="320"
              cy="278"
              rx="172"
              ry="132"
              stroke="url(#agentic-ring)"
              strokeWidth="1"
              strokeDasharray="7 11"
            />
            <path d="M320 278 L320 78" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L126 152" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L514 152" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L112 315" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L528 315" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L230 444" stroke="url(#agentic-line)" strokeWidth="1.4" />
            <path d="M320 278 L410 444" stroke="url(#agentic-line)" strokeWidth="1.4" />
          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 w-60 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-operon-cyan/30 bg-navy-950/82 p-5 text-center shadow-line-glow backdrop-blur-2xl transition duration-300 group-hover:border-operon-green/35">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
            <BrainCircuit className="h-6 w-6 text-operon-cyan" aria-hidden="true" />
          </div>
          <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-operon-green">
            OperonIQ
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
            Intelligence Layer
          </h3>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            Trusted data, governed automation and AI-powered digital workforces.
          </p>
        </div>

        {modelNodes.map((node) => {
          const Icon = node.icon;

          return (
            <div
              key={node.label}
              className={`${node.className} absolute w-40 rounded-lg border border-white/10 bg-navy-950/72 p-4 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-operon-cyan/40 hover:bg-white/[0.07]`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className="h-5 w-5 text-operon-cyan" aria-hidden="true" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {node.index}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold leading-5 text-white">
                {node.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative grid gap-3 sm:hidden">
        <div className="rounded-lg border border-operon-cyan/30 bg-navy-950/75 p-5 text-center shadow-line-glow backdrop-blur-xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-operon-green">
            OperonIQ
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Intelligence Layer
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {modelNodes.map((node) => {
            const Icon = node.icon;

            return (
              <div
                key={node.label}
                className="rounded-lg border border-white/10 bg-navy-950/70 p-4 backdrop-blur-xl"
              >
                <Icon className="h-5 w-5 text-operon-cyan" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold leading-5 text-white">
                  {node.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
