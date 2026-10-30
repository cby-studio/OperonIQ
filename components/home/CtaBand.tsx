import { GradientButton } from './GradientButton';

type CtaBandProps = {
  title: string;
  body: string;
  ctaLabel: string;
  href?: string;
};

// Full-width closing call to action, placed just above the footer.
// Callers pass already-translated strings, so it works with any namespace.
export function CtaBand({ title, body, ctaLabel, href = '/contact' }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-operon-blue/[0.06] via-operon-cyan/[0.03] to-transparent px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-operon-cyan/40 to-transparent" />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">{body}</p>
        <GradientButton href={href} variant="glass" className="mt-10">
          {ctaLabel}
        </GradientButton>
      </div>
    </section>
  );
}
