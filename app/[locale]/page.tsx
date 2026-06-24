import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { GradientSeparator } from '@/components/home/GradientSeparator';
import { HeroSection } from '@/components/home/HeroSection';
import { OperatingModelSection } from '@/components/home/OperatingModelSection';
import { ProblemSection } from '@/components/home/ProblemSection';
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
      <OperatingModelSection />
      <GradientSeparator />
      <TargetAudienceSection />
      <GradientSeparator />
      <FinalCTA />
    </SiteFrame>
  );
}
