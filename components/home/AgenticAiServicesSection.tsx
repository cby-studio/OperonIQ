import { agenticAiServices } from './content';

export function AgenticAiServicesSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-radial-grid bg-[length:30px_30px] opacity-[0.045]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/40 to-transparent" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-operon-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
              Agentic AI
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              Agentic AI Services
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            From AI experimentation to governed digital workforces.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {agenticAiServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-br from-operon-blue/35 via-white/8 to-operon-green/25 p-px shadow-glass transition duration-300 hover:-translate-y-1.5 hover:from-operon-blue/70 hover:via-operon-cyan/55 hover:to-operon-green/65"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-950/82 p-6 backdrop-blur-2xl transition duration-300 group-hover:border-transparent group-hover:bg-navy-950/74">
                  <div className="absolute inset-0 bg-radial-grid bg-[length:24px_24px] opacity-[0.035]" />
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-operon-cyan/0 blur-3xl transition duration-500 group-hover:bg-operon-cyan/12" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 group-hover:border-operon-cyan/35 group-hover:bg-operon-cyan/10">
                      <Icon
                        className="h-5 w-5 text-operon-cyan transition duration-300 group-hover:text-operon-green"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="bg-gradient-to-r from-operon-blue via-operon-cyan to-operon-green bg-clip-text text-sm font-semibold tracking-[0.28em] text-transparent">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <h3 className="text-2xl font-semibold leading-8 text-white">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-slate-400 transition duration-300 group-hover:text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-operon-blue/40 via-operon-cyan/35 to-transparent" />
                    <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 transition duration-300 group-hover:text-operon-cyan">
                      Digital Workforce Service
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
