import type { ReactNode } from 'react';
import { hasLocale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { pickMessages } from '@/i18n/pick';
import { routing } from '@/i18n/routing';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/icon.svg',
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Only ship the messages that client components actually need globally
  // (the language switcher in the header) — page-level client components
  // (NexIQ, CapabilitiesPageContent) bring their own scoped provider.
  const messages = await getMessages();
  const globalMessages = pickMessages(messages, ['LanguageSwitcher']);

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="m-0 min-h-screen bg-navy-950 font-sans text-slate-100 antialiased selection:bg-operon-cyan/30 selection:text-white">
        <NextIntlClientProvider messages={globalMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
