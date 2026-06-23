import { Rocket } from 'lucide-react';
import { operatingModel } from './content';

export function OperatingModelSection() {
  return (
    <section id="operating-model" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
              Operating model
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              How Agentic Enterprise Work Takes Shape
            </h2>
          </div>

          <div className="grid gap-4">
            {operatingModel.map((step, index) => (
              <div
                key={step.title}
                className="group grid gap-6 rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl transition duration-300 hover:border-operon-green/35 hover:bg-white/[0.07] sm:grid-cols-[4.5rem_1fr_auto] sm:items-center"
              >
                <div className="text-3xl font-semibold text-operon-blue">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </div>
                <Rocket
                  className="h-6 w-6 text-operon-green transition duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
