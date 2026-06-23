import { AgenticAiServicesSection } from '@/components/home/AgenticAiServicesSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { ControlTowerSection } from '@/components/home/ControlTowerSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { GradientSeparator } from '@/components/home/GradientSeparator';
import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SiteFrame } from '@/components/home/SiteFrame';
import { TargetAudienceSection } from '@/components/home/TargetAudienceSection';

export default function Home() {
  return (
    <SiteFrame>
      <HeroSection />
      <GradientSeparator />
      <ProblemSection />
      <GradientSeparator />
      <CapabilitiesSection />
      <GradientSeparator />
      <AgenticAiServicesSection />
      <GradientSeparator />
      <ControlTowerSection />
      <GradientSeparator />
      <ServicesSection />
      <GradientSeparator />
      <TargetAudienceSection />
      <GradientSeparator />
      <FinalCTA />
    </SiteFrame>
  );
}
