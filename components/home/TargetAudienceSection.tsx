import { useTranslations } from 'next-intl';

export function TargetAudienceSection() {
  const t = useTranslations('Home.Audience');

  return (
    <section id="who-we-help" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
            {t('eyebrow')}
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            {t('title')}
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-operon-blue via-operon-cyan to-operon-green" />
          <p className="text-xl leading-9 text-slate-200">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}
