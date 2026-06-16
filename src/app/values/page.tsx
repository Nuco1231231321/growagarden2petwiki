import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ValuesTable } from "@/components/values-table";
import { formatSheckles, gag2Crops } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Values & ROI: Best Crops Ranked by Profit",
  description: "Compare Grow a Garden 2 crop values, seed costs, profit, ROI, rarity, and harvest type. Find the best early, mid, and late-game crops.",
  alternates: { canonical: "https://growagarden2pet.wiki/values" },
};

const picks = [
  { label: "Early", crops: ["Strawberry", "Blueberry", "Tomato"], action: "Use multi-harvest crops and reinvest fast." },
  { label: "Mid", crops: ["Bamboo", "Green Bean", "Mango"], action: "Build stable income before utility gear." },
  { label: "Late", crops: ["Venus Fly Trap", "Moon Bloom", "Dragon's Breath"], action: "Save for weather, mutations, and defense." },
] as const;

const faq = [
  ["What is the best crop by value?", "Dragon's Breath and Moon Bloom are the highest-value crops in the current table."],
  ["What is the best early crop?", "Strawberry, Blueberry, and Tomato are useful early because they keep producing."],
  ["Should I sort by ROI or value?", "Sort by ROI for progression and by value when you already have late-game crops."],
  ["Where should I calculate a specific crop?", "Use the crop value calculator when you know the crop weight and mutations."],
] as const;

export default function ValuesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl min-w-0 overflow-hidden px-4 py-8 sm:px-6">
      <Script id="values-faq-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        })}
      </Script>
      <Script id="values-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://growagarden2pet.wiki" },
            { "@type": "ListItem", position: 2, name: "Values", item: "https://growagarden2pet.wiki/values" },
          ],
        })}
      </Script>

      <nav aria-label="Breadcrumb" className="mb-4 text-sm font-bold text-ash">
        <Link href="/" className="text-garden hover:underline">Home</Link> / Values
      </nav>

      <section className="mb-6 min-w-0">
        <p className="text-sm font-black uppercase text-garden">Crop rankings</p>
        <h1 className="mt-2 max-w-4xl break-words text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
          Grow a Garden 2 Values &amp; ROI
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-charcoal text-pretty">
          Compare crop base value, seed cost, profit, ROI, rarity, and harvest type before choosing what to plant or protect.
        </p>
      </section>

      <section className="mb-8 grid min-w-0 gap-4 md:grid-cols-3">
        {picks.map((pick) => (
          <div key={pick.label} className="rounded-2xl border border-[#dce8d8] bg-white p-4">
            <p className="text-xs font-black uppercase text-garden">{pick.label} picks</p>
            <h2 className="mt-1 text-xl font-black text-soil">{pick.crops.join(", ")}</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-ash">{pick.action}</p>
          </div>
        ))}
      </section>

      <ValuesTable />

      <section className="mt-8 min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 sm:p-5">
        <h2 className="text-2xl font-black text-soil">Top base values</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[...gag2Crops].sort((a, b) => b.baseValue - a.baseValue).slice(0, 8).map((crop) => (
            <div key={crop.slug} className="rounded-xl bg-[#f8fbf6] p-3">
              <p className="text-sm font-black text-soil">{crop.emoji} {crop.name}</p>
              <p className="font-mono text-lg font-black text-garden tabular-nums">{formatSheckles(crop.baseValue)}</p>
              <p className="text-xs font-bold text-ash">{crop.rarity} · {crop.harvestType}</p>
            </div>
          ))}
        </div>
        <Link href="/calculator" className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-garden px-4 text-sm font-black text-white">
          Calculate a crop
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black text-soil">FAQ</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {faq.map(([question, answer]) => (
            <div key={question} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-black text-soil">{question}</h3>
              <p className="mt-1 text-sm font-semibold leading-6 text-ash">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
