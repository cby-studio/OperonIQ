import { problemSignals } from './content';

export function ProblemSection() {
  return (
    <section id="problem" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
            The challenge
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            AI-powered workforces need more than disconnected tools.
          </h2>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-glass backdrop-blur-2xl sm:p-9">
          <p className="text-lg leading-9 text-slate-300">
            Many organizations are experimenting with AI while core operations
            still depend on fragmented processes, disconnected data, manual
            reporting, platform sprawl and weak governance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {problemSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-sm border border-white/10 bg-navy-950/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
