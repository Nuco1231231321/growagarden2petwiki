import Link from "next/link";
import Image from "next/image";

interface Guide {
  href: string;
  title: string;
  detail: string;
  image?: string;
  emoji?: string;
}

export function RelatedGuides({ guides }: { guides: Guide[] }) {
  return (
    <div className="mt-10 border-t-2 border-graphite pt-8">
      <h2 className="mb-2 text-xl font-extrabold text-soil">What to open next</h2>
      <p className="mb-4 max-w-2xl text-sm font-medium leading-6 text-ash">
        Pick the next page that helps you finish the route you are already on, instead of jumping into unrelated systems too early.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group flex items-start gap-3 rounded-xl border-2 border-graphite/20 bg-white p-4 transition-all hover:border-sprout hover:-translate-y-0.5"
          >
            {g.image && (
              <Image src={g.image} alt={g.title} width={48} height={48} className="rounded-lg shrink-0" />
            )}
            {g.emoji && <span className="text-2xl shrink-0">{g.emoji}</span>}
            <div>
              <p className="text-sm font-extrabold text-charcoal transition-colors group-hover:text-garden">{g.title}</p>
              <p className="mt-0.5 text-xs leading-5 text-ash">{g.detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
