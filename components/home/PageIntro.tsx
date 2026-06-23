type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-cyan">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl sm:leading-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
