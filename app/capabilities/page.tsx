import { CapabilitiesPageContent } from '@/components/capabilities/CapabilitiesPageContent';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'Capabilities | OperonIQ',
  description:
    'Explore the six capabilities behind the OperonIQ Transformation Engine — from operating model design and trusted data to intelligent automation, agentic AI and responsible governance.',
};

export default function CapabilitiesPage() {
  return (
    <SiteFrame>
      <CapabilitiesPageContent />
    </SiteFrame>
  );
}
