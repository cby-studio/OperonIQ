import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NexIQ } from '@/components/NexIQ';
import { SiteFrame } from '@/components/home/SiteFrame';
import { pickMessages } from '@/i18n/pick';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.contact' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <SiteFrame>
      <NextIntlClientProvider messages={pickMessages(messages, ['Contact', 'NexIQSystem'])}>
        <NexIQ />
      </NextIntlClientProvider>
    </SiteFrame>
  );
}
