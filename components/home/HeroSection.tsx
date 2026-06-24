import { GradientButton } from './GradientButton';
import { AgenticOperatingModel } from './AgenticOperatingModel';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-6 lg:h-[calc(100vh-73px)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-8 lg:py-10">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-sm border border-white/10 bg-white/[0.045] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-operon-cyan shadow-glass backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-operon-green shadow-line-glow" />
            AGENTIC ENTERPRISE CONSULTING
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Building Agentic Enterprises
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            OperonIQ helps organizations connect people, data, applications,
            automation and AI into one intelligent operating model.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <GradientButton href="/contact">
              Start the Conversation
            </GradientButton>
            <GradientButton
              href="/capabilities"
              variant="secondary"
              icon="chevron"
            >
              Explore Capabilities
            </GradientButton>
          </div>
        </div>

        <div className="hidden lg:flex animate-slow-float justify-center lg:justify-end">
          <div className="w-full max-w-[400px] lg:max-w-[460px]">
            <AgenticOperatingModel />
          </div>
        </div>
      </div>
    </section>
  );
}
