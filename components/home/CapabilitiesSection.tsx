import { CapabilityCard } from './CapabilityCard';
import { capabilities } from './content';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-green">
              Capabilities
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              Six Capabilities. One Agentic Transformation Engine.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            OperonIQ combines business transformation, modern work, data
            platforms, business applications, intelligent automation and
            governance to help organizations become AI-ready and agentic.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
