import type { DetailPageItem } from './types';

type DetailCardProps = {
  item: DetailPageItem;
};

export function DetailCard({ item }: DetailCardProps) {
  const Icon = item.icon;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-operon-cyan/35 hover:bg-white/[0.07] sm:p-8">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-operon-blue/70 via-operon-cyan/70 to-operon-green/70 opacity-70 transition duration-300 group-hover:opacity-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-navy-950/55">
        <Icon className="h-6 w-6 text-operon-cyan" aria-hidden="true" />
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-operon-green">
        {item.eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">
        {item.description}
      </p>
      <ul className="mt-7 space-y-3">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-operon-cyan"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
