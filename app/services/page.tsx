import { ServicesPageContent } from '@/components/services/ServicesPageContent';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'Services | OperonIQ',
  description:
    'Transformation services for the Agentic Enterprise — from AI readiness strategy and data platform modernisation to multi-agent architecture and responsible AI governance.',
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <ServicesPageContent />
    </SiteFrame>
  );
}
