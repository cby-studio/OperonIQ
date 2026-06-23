import { ContactForm } from '@/components/home/ContactForm';
import { GradientSeparator } from '@/components/home/GradientSeparator';
import { PageIntro } from '@/components/home/PageIntro';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'Contact | OperonIQ',
  description:
    'Contact OperonIQ to discuss Agentic Enterprise strategy, trusted data, automation, digital workforces and governance.',
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Contact"
        title="Start the conversation."
        description="Tell us about the operating challenge, trusted data priority, platform opportunity or digital workforce question you are working through."
      />
      <GradientSeparator />
      <ContactForm />
    </SiteFrame>
  );
}
