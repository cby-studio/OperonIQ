import { services } from './content';
import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-green">
              Services
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              Signature Advisory Services
            </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
