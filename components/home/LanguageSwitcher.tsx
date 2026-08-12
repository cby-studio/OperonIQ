'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LABELS: Record<string, string> = {
  en: 'EN',
  ro: 'RO',
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations('LanguageSwitcher');

  return (
    <div
      className="flex items-center gap-1.5 text-xs font-semibold tracking-wide"
      aria-label={t('label')}
    >
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 && <span className="text-slate-700" aria-hidden="true">/</span>}
          <Link
            href={pathname}
            locale={locale}
            className={
              locale === activeLocale
                ? 'text-operon-cyan'
                : 'text-slate-500 transition duration-300 hover:text-slate-300'
            }
            aria-current={locale === activeLocale ? 'true' : undefined}
          >
            {LABELS[locale]}
          </Link>
        </span>
      ))}
    </div>
  );
}
