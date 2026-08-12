import { useTranslations } from 'next-intl';
import { CapabilityCard } from './CapabilityCard';
import { capabilityIcons, capabilityIds } from './content';
import type { Capability } from './types';

export function CapabilitiesSection() {
  const t = useTranslations('Home.Capabilities');

  const capabilities: Capability[] = capabilityIds.map((id) => ({
    icon: capabilityIcons[id],
    number: id,
    title: t(`items.${id}.title`),
    headline: t(`items.${id}.headline`),
    description: t(`items.${id}.description`),
  }));

  return (
    <section id="capabilities" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-green">
              {t('eyebrow')}
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              {t('title')}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            {t('description')}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
