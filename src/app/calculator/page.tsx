import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { CropCalculator } from "@/components/crop-calculator";
import { formatSheckles, gag2Crops } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Crop Value Calculator: Weight, Mutations & ROI",
  description: "Calculate Grow a Garden 2 crop sell value from weight, quantity, mutations, and bargain bonus. Compare profit, ROI, and the next action before selling.",
  alternates: { canonical: "https://growagarden2pet.wiki/calculator" },
};

const faq = [
  ["What does the calculator do?", "It estimates crop sell value from crop type, harvest weight, quantity, active mutations, and bargain bonus."],
  ["Which mutation is best?", "Rainbow and Electric are the strongest value boosts in this calculator, especially on late-game crops."],
  ["Should I sell immediately?", "Sell starter crops quickly, but save expensive crops for mutation or weather windows when your garden is defended."],
  ["What should I compare next?", "Use the values page to compare base value, profit, ROI, rarity, and harvest type before choosing your next seed route."],
] as const;

export default function CalculatorPage() {
  return (
    <main className="mx-auto w-full max-w-6xl min-w-0 overflow-hidden px-4 py-8 sm:px-6">
      <Script id="calculator-faq-jsonld" type="application/ld+json">
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
      <Script id="calculator-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://growagarden2pet.wiki" },
            { "@type": "ListItem", position: 2, name: "Crop Value Calculator", item: "https://growagarden2pet.wiki/calculator" },
          ],
        })}
      </Script>

      <nav aria-label="Breadcrumb" className="mb-4 text-sm font-bold text-ash">
        <Link href="/" className="text-garden hover:underline">Home</Link> / Calculator
      </nav>

      <section className="mb-6 min-w-0">
        <p className="text-sm font-black uppercase text-garden">Crop value tool</p>
        <h1 className="mt-2 max-w-4xl break-words text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
          Grow a Garden 2 Crop Value Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-charcoal text-pretty">
          Calculate crop sell value from weight, quantity, mutations, and bargain bonus. Use the result to sell now, wait for weather, or protect high-value crops overnight.
        </p>
      </section>

      <CropCalculator />

      <section className="mt-8 min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 sm:p-5">
        <h2 className="text-2xl font-black text-soil">Popular crop values</h2>
        <div className="mt-4 max-w-full overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#f8fbf6] text-xs font-black uppercase text-ash">
              <tr>
                <th scope="col" className="px-3 py-3">Crop</th>
                <th scope="col" className="px-3 py-3">Rarity</th>
                <th scope="col" className="px-3 py-3">Base value</th>
                <th scope="col" className="px-3 py-3">Average weight</th>
                <th scope="col" className="px-3 py-3">Best use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {gag2Crops.filter((crop) => ["Green Bean", "Bamboo", "Venus Fly Trap", "Moon Bloom", "Dragon's Breath"].includes(crop.name)).map((crop) => (
                <tr key={crop.slug}>
                  <td className="px-3 py-3 font-black text-soil">{crop.emoji} {crop.name}</td>
                  <td className="px-3 py-3 font-bold text-charcoal">{crop.rarity}</td>
                  <td className="px-3 py-3 font-mono font-black tabular-nums text-charcoal">{formatSheckles(crop.baseValue)}</td>
                  <td className="px-3 py-3 font-mono font-bold tabular-nums text-charcoal">{crop.averageWeight}kg</td>
                  <td className="px-3 py-3 text-ash">{crop.stage === "late" ? "Save for strong boosts" : "Reinvest for growth"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/values" className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-garden px-4 text-sm font-black text-white">
          Compare all values
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
