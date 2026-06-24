import { NexIQ } from '@/components/NexIQ';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'Contact | OperonIQ',
  description:
    'Contact OperonIQ to discuss Agentic Enterprise strategy, trusted data, automation, digital workforces and governance.',
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <NexIQ />
    </SiteFrame>
  );
}
