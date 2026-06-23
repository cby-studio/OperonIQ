import {
  Bot,
  BrainCircuit,
  Building2,
  DatabaseZap,
  GitBranch,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NodeDef = {
  label: string;
  icon: LucideIcon;
  // Coordinates in SVG user space (viewBox 0 0 960 560, centre 480 280)
  svgX: number;
  svgY: number;
};

// 7 capability nodes placed on an ellipse (rx 244, ry 187) centred at (480, 280).
// Angles are evenly spaced (360°/7 ≈ 51.4°) starting from top (–90°), clockwise.
const NODES: NodeDef[] = [
  { label: 'People',       icon: Users,       svgX: 480, svgY: 95  }, //   0° — top
  { label: 'Data',         icon: DatabaseZap, svgX: 668, svgY: 165 }, //  51° — top-right
  { label: 'Applications', icon: Building2,   svgX: 714, svgY: 321 }, // 103° — right
  { label: 'AI Agents',    icon: Bot,         svgX: 584, svgY: 447 }, // 154° — bottom-right
  { label: 'Governance',   icon: ShieldCheck, svgX: 376, svgY: 447 }, // 206° — bottom-left
  { label: 'Automation',   icon: Workflow,    svgX: 246, svgY: 321 }, // 257° — left
  { label: 'Process',      icon: GitBranch,   svgX: 292, svgY: 165 }, // 309° — top-left
];

const CX = 480;
const CY = 280;

// Peripheral mesh connections between neighbouring satellite nodes
const MESH: Array<[number, number]> = [
  [0, 1], // People   ↔ Data
  [0, 6], // People   ↔ Process
  [1, 2], // Data     ↔ Applications
  [2, 3], // Applications ↔ AI Agents
  [3, 4], // AI Agents ↔ Governance
  [4, 5], // Governance ↔ Automation
  [5, 6], // Automation ↔ Process
];

// ─── Shared centre-node card ─────────────────────────────────────────────────
function CenterNode() {
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-operon-blue/55 via-operon-cyan/30 to-operon-green/45 p-px transition duration-500 hover:shadow-[0_0_48px_rgba(32,197,232,0.22)]">
      <div className="relative overflow-hidden rounded-xl bg-navy-950/92 px-6 py-6 text-center backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(32,197,232,0.12),transparent_62%)]" />
        <div className="relative">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-operon-cyan/35 bg-operon-cyan/[0.12]">
            <BrainCircuit className="h-6 w-6 text-operon-cyan" aria-hidden="true" />
          </div>
          <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-operon-green">
            OperonIQ
          </p>
          <p className="mt-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white">
            Intelligence Layer
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function ControlTowerSection() {
  return (
    <section id="operating-model" className="relative overflow-hidden py-28">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-radial-grid bg-[length:30px_30px] opacity-[0.04]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-blue/25 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-operon-cyan/[0.055] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
            How We Work
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            The OperonIQ Control Tower
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Orchestrating the transition from fragmented operations to an
            Agentic&nbsp;Enterprise.
          </p>
        </div>

        {/* ── Outcome indicator (above the framework) ── */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-sm border border-operon-green/35 bg-operon-green/[0.07] px-5 py-2.5 shadow-glass backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-signal-pulse rounded-full bg-operon-green" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-operon-green">
              Agentic Enterprise
            </span>
          </div>
          <p className="max-w-sm text-center text-sm leading-6 text-slate-400">
            An organization where people and AI-powered digital workers operate
            as one intelligent system.
          </p>
          {/* Connector into visualization */}
          <div className="h-7 w-px bg-gradient-to-b from-operon-green/45 via-operon-cyan/20 to-transparent" />
        </div>

        {/* ══════════════════════════════════════════════════════════
            DESKTOP — full orbital diagram  (lg+)
        ══════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="relative mx-auto aspect-[960/560] w-full max-w-[960px]">

            {/* SVG mesh layer — sits behind all node cards */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 960 560"
              aria-hidden="true"
              fill="none"
            >
              <defs>
                <linearGradient id="ct-ring" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%"   stopColor="#1495FF" stopOpacity="0.45" />
                  <stop offset="50%"  stopColor="#20C5E8" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#44D062" stopOpacity="0.38" />
                </linearGradient>

                <linearGradient id="ct-inner-ring" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%"   stopColor="#20C5E8" stopOpacity="0.22" />
                  <stop offset="50%"  stopColor="#1495FF" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#44D062" stopOpacity="0.22" />
                </linearGradient>

                {/* Radial gradient centred at (480,280) — spokes fade outward */}
                <radialGradient
                  id="ct-spoke"
                  cx="480" cy="280" r="265"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%"   stopColor="#20C5E8" stopOpacity="0.7" />
                  <stop offset="52%"  stopColor="#1495FF" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#20C5E8" stopOpacity="0.08" />
                </radialGradient>

                <radialGradient
                  id="ct-atm"
                  cx="480" cy="280" r="155"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%"   stopColor="#20C5E8" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#20C5E8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Centre atmospheric glow */}
              <circle cx="480" cy="280" r="155" fill="url(#ct-atm)" />

              {/* Inner indicator ring — subtly frames the centre node */}
              <ellipse
                cx="480" cy="280" rx="115" ry="88"
                stroke="url(#ct-inner-ring)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Outer orbital ring — animated pulse */}
              <ellipse
                cx="480" cy="280" rx="244" ry="187"
                stroke="url(#ct-ring)"
                strokeWidth="1"
                strokeDasharray="6 10"
                className="animate-signal-pulse"
              />

              {/* Peripheral mesh connections between satellite nodes */}
              {MESH.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].svgX} y1={NODES[a].svgY}
                  x2={NODES[b].svgX} y2={NODES[b].svgY}
                  stroke="#1495FF"
                  strokeOpacity="0.13"
                  strokeWidth="0.9"
                />
              ))}

              {/* Spokes from centre to each capability node */}
              {NODES.map((node, i) => (
                <line
                  key={i}
                  x1={CX} y1={CY}
                  x2={node.svgX} y2={node.svgY}
                  stroke="url(#ct-spoke)"
                  strokeWidth="1.3"
                />
              ))}
            </svg>

            {/* Centre node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Outer glow ring */}
              <div className="pointer-events-none absolute -inset-3 animate-signal-pulse rounded-2xl border border-operon-cyan/18" />
              <div className="w-52">
                <CenterNode />
              </div>
            </div>

            {/* Satellite capability nodes */}
            {NODES.map((node) => {
              const Icon = node.icon;
              const left = `${(node.svgX / 960) * 100}%`;
              const top  = `${(node.svgY / 560) * 100}%`;

              return (
                <div
                  key={node.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left, top }}
                >
                  <div className="group w-[7.5rem] rounded-lg border border-white/10 bg-navy-950/84 px-3 py-3.5 text-center shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-operon-cyan/40 hover:bg-white/[0.07]">
                    <Icon
                      className="mx-auto h-5 w-5 text-operon-cyan transition duration-300 group-hover:text-operon-green"
                      aria-hidden="true"
                    />
                    <p className="mt-2.5 text-xs font-semibold leading-4 text-white">
                      {node.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            TABLET / MOBILE — stacked grid layout  (below lg)
        ══════════════════════════════════════════════════════════ */}
        <div className="mt-8 block lg:hidden">
          {/* Centre node */}
          <div className="flex justify-center">
            <div className="w-56">
              <CenterNode />
            </div>
          </div>

          {/* Connector into grid */}
          <div className="mx-auto mt-3 h-6 w-px bg-gradient-to-b from-operon-cyan/40 to-transparent" />

          {/* Capability cards */}
          <div className="mt-1 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className="group rounded-lg border border-white/10 bg-navy-950/80 px-4 py-4 text-center shadow-glass backdrop-blur-xl transition duration-300 hover:border-operon-cyan/35 hover:bg-white/[0.06]"
                >
                  <Icon
                    className="mx-auto h-5 w-5 text-operon-cyan transition duration-300 group-hover:text-operon-green"
                    aria-hidden="true"
                  />
                  <p className="mt-2.5 text-xs font-semibold text-white">
                    {node.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom explanation ── */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-7 text-slate-400 lg:mt-10">
          The intelligence layer that orchestrates people, process, data,
          applications, automation and AI into one operating model.
        </p>

      </div>
    </section>
  );
}
