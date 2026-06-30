import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { ValuesTable } from "@/components/values-table";
import { formatSheckles, gag2Crops } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Values & ROI: Best Crops Ranked by Profit",
  description: "Compare Grow a Garden 2 crop values, seed costs, profit, ROI, rarity, and harvest type. Find the best early, mid, and late-game crops.",
  alternates: { canonical: "https://growagarden2pet.wiki/values" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Values", href: "/values" },
];

const picks = [
  { label: "Early", crops: ["Strawberry", "Blueberry", "Tomato"], action: "Use ROI first. Fast repeat-income matters more than headline base value." },
  { label: "Mid", crops: ["Bamboo", "Green Bean", "Mango"], action: "Use profit and stability to bridge toward later crop tiers." },
  { label: "Late", crops: ["Venus Fly Trap", "Moon Bloom", "Dragon's Breath"], action: "Use base value only after you can defend and hold strong crops." },
] as const;

const howToRead = [
  ["Use ROI for progression", "ROI is the cleaner view when the main question is what grows the account fastest from the current seed budget."],
  ["Use base value for endgame holds", "High base value matters more once the route is already planning around weather, mutations, and defense."],
  ["Do not compare all crops as if they serve the same job", "Early multi-harvest crops and late-game premium crops solve different problems."],
];

const decisionRows = [
  ["You are still in the first route", "Sort by ROI and favor repeat-income crops.", "The next useful upgrade matters more than one huge late-game number."],
  ["You already have a stable farm", "Sort by profit or value and compare late-game targets.", "Now expensive crops become realistic decisions instead of fantasy picks."],
  ["You are deciding whether to hold for boosts", "Check value here, then use the calculator for the exact crop result.", "Table data gives the ranking, calculator data gives the sell call."],
];

const faq = [
  ["What is the best crop by value?", "Dragon's Breath and Moon Bloom sit at the top of the current base-value table, but that does not make them the best next buy for every account."],
  ["What is the best early crop?", "Strawberry, Blueberry, and Tomato are strong early because they keep paying back without forcing a huge seed cost."],
  ["Should I sort by ROI or value?", "Use ROI for route building and use value when your farm is already stable enough to consider high-end late-game crops."],
  ["When should I use the calculator instead?", "Use the calculator when you already know the crop, weight, quantity, and mutations and need a sell-now or hold decision."],
];

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
      <GuideJsonLd
        id="values"
        title="Grow a Garden 2 Values & ROI"
        description="Crop values, ROI, and profit comparisons for Grow a Garden 2."
        path="/values"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mb-6 min-w-0">
        <p className="text-sm font-black uppercase text-garden">Crop rankings</p>
        <h1 className="mt-2 max-w-4xl break-words text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
          Grow a Garden 2 Values &amp; ROI
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-charcoal text-pretty">
          Use this page to answer one question: which crop gives the better next decision for your current route?
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

      <section className="mb-8 grid gap-3 md:grid-cols-3">
        {howToRead.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-4">
            <h2 className="text-sm font-extrabold text-soil">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-ash">{body}</p>
          </div>
        ))}
      </section>

      <ValuesTable />

      <section className="mt-8 rounded-2xl border border-[#dce8d8] bg-white p-4 sm:p-5">
        <h2 className="text-2xl font-black text-soil">How to turn the table into a decision</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#f8fbf6] text-xs font-black uppercase text-ash">
              <tr>
                <th scope="col" className="px-3 py-3">Situation</th>
                <th scope="col" className="px-3 py-3">Best filter</th>
                <th scope="col" className="px-3 py-3">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {decisionRows.map((row) => (
                <tr key={row[0]}>
                  <td className="px-3 py-3 font-black text-soil">{row[0]}</td>
                  <td className="px-3 py-3 font-bold text-charcoal">{row[1]}</td>
                  <td className="px-3 py-3 text-ash">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 sm:p-5">
        <h2 className="text-2xl font-black text-soil">Top base values</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[...gag2Crops]
            .sort((a, b) => b.baseValue - a.baseValue)
            .slice(0, 8)
            .map((crop) => (
              <div key={crop.slug} className="rounded-xl bg-[#f8fbf6] p-3">
                <p className="text-sm font-black text-soil">
                  {crop.emoji} {crop.name}
                </p>
                <p className="font-mono text-lg font-black text-garden">{formatSheckles(crop.baseValue)}</p>
                <p className="text-xs font-bold text-ash">
                  {crop.rarity} | {crop.harvestType}
                </p>
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
