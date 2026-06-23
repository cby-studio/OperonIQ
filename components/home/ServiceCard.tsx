import type { Service } from './types';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-7 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-operon-cyan/35 hover:bg-white/[0.07]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-operon-green/55 to-transparent opacity-70" />
      <Icon className="h-8 w-8 text-operon-cyan" aria-hidden="true" />
      <h3 className="mt-10 text-xl font-semibold leading-7 text-white">
        {service.title}
      </h3>
    </article>
  );
}
