import { BrainCircuit } from 'lucide-react';
import { GradientButton } from './GradientButton';

export function FinalCTA() {
  return (
    <section id="contact" className="px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-operon-cyan/25 bg-glass-sheen p-8 shadow-glass backdrop-blur-2xl sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
              Ready to build an Agentic Enterprise?
            </h2>
            <GradientButton
              href="mailto:hello@operoniq.com"
              variant="light"
              className="mt-10"
            >
              Start the Conversation
            </GradientButton>
          </div>
          <div className="hidden justify-end lg:flex">
            <BrainCircuit
              className="h-28 w-28 text-operon-cyan/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
