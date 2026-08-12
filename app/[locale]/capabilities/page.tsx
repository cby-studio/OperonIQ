import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { CapabilitiesPageContent } from '@/components/capabilities/CapabilitiesPageContent';
import { SiteFrame } from '@/components/home/SiteFrame';
import { pickMessages } from '@/i18n/pick';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.capabilities' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CapabilitiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <SiteFrame>
      <NextIntlClientProvider messages={pickMessages(messages, ['Capabilities'])}>
        <CapabilitiesPageContent />
      </NextIntlClientProvider>
    </SiteFrame>
  );
}
