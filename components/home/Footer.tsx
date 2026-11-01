import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

const COMPANY = { name: 'BNET SYSTEMS EU SRL', cui: '24407916' };

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <p>{t('tagline', { year: new Date().getFullYear() })}</p>
      </div>
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/5 px-5 pt-6 text-xs text-slate-600 sm:px-6 lg:px-8">
        <p>{t('legal', { company: COMPANY.name, cui: COMPANY.cui })}</p>
      </div>
    </footer>
  );
}
