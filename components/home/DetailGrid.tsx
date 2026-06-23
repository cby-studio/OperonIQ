import { DetailCard } from './DetailCard';
import type { DetailPageItem } from './types';

type DetailGridProps = {
  items: DetailPageItem[];
};

export function DetailGrid({ items }: DetailGridProps) {
  return (
    <section className="px-5 pb-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {items.map((item) => (
          <DetailCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
