import type { Capability } from './types';

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <article className="group relative min-h-[27rem] overflow-hidden rounded-lg bg-gradient-to-br from-white/12 via-white/5 to-white/10 p-px shadow-glass transition duration-300 hover:-translate-y-1.5 hover:from-operon-blue/70 hover:via-operon-cyan/60 hover:to-operon-green/65">
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-950/85 p-7 backdrop-blur-2xl transition duration-300 group-hover:border-transparent group-hover:bg-navy-950/76">
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-operon-blue via-operon-cyan to-operon-green opacity-45 transition duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-operon-blue/70 via-operon-cyan/60 to-operon-green/70 opacity-50 transition duration-300 group-hover:opacity-100" />
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-operon-cyan/0 blur-3xl transition duration-500 group-hover:bg-operon-cyan/10" />

        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="bg-gradient-to-r from-operon-blue via-operon-cyan to-operon-green bg-clip-text text-sm font-semibold tracking-[0.28em] text-transparent">
              {capability.number}
            </span>
            <p className="mt-4 max-w-56 text-xs font-semibold uppercase tracking-[0.2em] text-operon-green">
              {capability.title}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 group-hover:border-operon-cyan/35 group-hover:bg-operon-cyan/10">
            <Icon
              className="h-6 w-6 text-operon-cyan transition duration-300 group-hover:text-operon-green"
              aria-hidden="true"
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-semibold leading-8 text-white">
          {capability.headline}
        </h3>
        <p className="mt-5 text-sm leading-7 text-slate-400 transition duration-300 group-hover:text-slate-300">
          {capability.description}
        </p>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-operon-blue/45 via-operon-cyan/35 to-transparent" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 transition duration-300 group-hover:text-operon-cyan">
              Agentic Capability
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
