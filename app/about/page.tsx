import { GradientSeparator } from '@/components/home/GradientSeparator';
import { PageIntro } from '@/components/home/PageIntro';
import { SiteFrame } from '@/components/home/SiteFrame';

export const metadata = {
  title: 'About | OperonIQ',
  description:
    'OperonIQ is a senior-led boutique consultancy helping organizations build Agentic Enterprises through trusted data, automation, governance and modern business platforms.',
};

const principles = [
  'Senior-led from discovery through delivery direction',
  'Agentic operating models grounded in business reality',
  'Trusted data, workflow and platform architecture designed for digital workforces',
  'Governance, quality and adoption built into agentic transformation from the start',
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="About OperonIQ"
        title="Senior-led advisory for organizations building Agentic Enterprises."
        description="OperonIQ is a boutique consultancy helping leadership teams redesign operations, unlock trusted data and deploy AI-powered digital workforces through modern business platforms, automation and governance."
      />
      <GradientSeparator />

      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-green">
              Positioning
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              Boutique by design. Agentic by perspective.
            </h2>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
            <p className="text-lg leading-9 text-slate-300">
              We work where business architecture, trusted data, platform
              strategy and operational execution meet. Our role is to help
              organizations understand what should change, why it matters, how
              AI-powered digital workforces should be governed and where modern
              platforms can create durable enterprise value.
            </p>
            <div className="mt-8 grid gap-3">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-sm border border-white/10 bg-navy-950/50 px-4 py-3 text-sm font-medium text-slate-300"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
