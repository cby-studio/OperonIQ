import { operatingModel } from './content';

const STEP_COLORS = ['#1495FF', '#18B4F0', '#20C5E8', '#2EC87A', '#44D062'];

export function OperatingModelSection() {
  return (
    <section id="operating-model" className="relative overflow-hidden py-28">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-operon-blue/[0.055] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-blue/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
              How We Work
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              How Agentic Enterprise Work Takes Shape
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300 lg:text-right">
            From initial discovery to a governed, scaling agentic operation.
          </p>
        </div>

        {/* Step cards */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
          {operatingModel.map((step, i) => {
            const color = STEP_COLORS[i];
            return (
              <div
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-xl p-5 transition duration-300 hover:bg-white/[0.045]"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  borderTop: `2px solid ${color}`,
                }}
              >
                {/* Ghost number watermark */}
                <span
                  className="pointer-events-none absolute -right-1 -top-2 select-none text-[6rem] font-black leading-none"
                  style={{ color, opacity: 0.055 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Step number pill */}
                <span
                  className="mb-6 self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest"
                  style={{
                    color,
                    background: `${color}16`,
                    border: `0.5px solid ${color}45`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-[15px] font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.65] text-slate-400 transition duration-300 group-hover:text-slate-300">
                  {step.text}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}55, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Flow indicator */}
        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex">
          {operatingModel.map((step, i) => {
            const color = STEP_COLORS[i];
            const isLast = i === operatingModel.length - 1;
            return (
              <div key={step.title} className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-wider" style={{ color, opacity: 0.7 }}>
                  {step.title}
                </span>
                {!isLast && (
                  <span className="text-slate-700">›</span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
