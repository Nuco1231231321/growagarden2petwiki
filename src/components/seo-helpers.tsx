import Link from "next/link";

const BASE_URL = "https://growagarden2pet.wiki";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-bold text-ash" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          {index > 0 && <span className="text-[#c7d2c1]">/</span>}
          {index === items.length - 1 ? (
            <span className="text-charcoal">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-garden">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function GuideJsonLd({
  id,
  title,
  description,
  path,
  breadcrumbs,
}: {
  id: string;
  title: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  const url = `${BASE_URL}${path}`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${BASE_URL}#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: { "@type": "Organization", name: "GAG2 Pet Wiki" },
      publisher: { "@type": "Organization", name: "GAG2 Pet Wiki" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
    },
  ];

  return <script id={`${id}-json-ld`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
