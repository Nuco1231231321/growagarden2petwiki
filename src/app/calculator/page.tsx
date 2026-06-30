import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { CropCalculator } from "@/components/crop-calculator";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { formatSheckles, gag2Crops } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Crop Value Calculator: Weight, Mutations & ROI",
  description: "Calculate Grow a Garden 2 crop sell value from weight, quantity, mutations, and bargain bonus. Compare profit, ROI, and the next action before selling.",
  alternates: { canonical: "https://growagarden2pet.wiki/calculator" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Crop Value Calculator", href: "/calculator" },
];

const decisionGuide = [
  ["Starter crop", "Usually sell now", "The route gains more from reinvesting fast than from waiting for a perfect boost window."],
  ["Strong mid-game crop", "Compare with current weather and risk", "Some crops are worth holding, but only if the delay beats the next safe sale."],
  ["Late-game expensive crop", "Check the calculator before every big sale", "Weight and mutation multipliers change the answer too much to guess."],
  ["Night risk overlap", "Defense before greed", "A crop with high calculated value is still bad if it gets stolen before you sell it."],
];

const faq = [
  ["What does the calculator do?", "It estimates crop sell value from crop type, harvest weight, quantity, mutations, and bargain bonus."],
  ["Which mutation is best?", "Rainbow and Electric are among the strongest value boosts here, especially on late-game crops that are already worth holding."],
  ["Should I sell immediately?", "Sell weak crops quickly. Use calculator checks for the crops that are expensive enough to justify waiting."],
  ["What should I compare next?", "Use the values page when you are still deciding which crop route to build, not just what one harvest is worth."],
];

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
      <GuideJsonLd
        id="calculator"
        title="Grow a Garden 2 Crop Value Calculator"
        description="Crop value calculator for weight, mutations, quantity, ROI, and sell planning in Grow a Garden 2."
        path="/calculator"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mb-6 min-w-0">
        <p className="text-sm font-black uppercase text-garden">Crop value tool</p>
        <h1 className="mt-2 max-w-4xl break-words text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
          Grow a Garden 2 Crop Value Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-charcoal text-pretty">
          Use this tool when the question is no longer &quot;what crop should I grow&quot; but &quot;should I sell this exact harvest now or wait longer&quot;.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">How to use the result</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          The number only matters if it changes your action. Use it to choose between selling now, holding for stronger boosts, or protecting the crop first.
        </p>
      </section>

      <CropCalculator />

      <section className="mt-8 min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 sm:p-5">
        <h2 className="text-2xl font-black text-soil">When the calculator changes the decision</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#f8fbf6] text-xs font-black uppercase text-ash">
              <tr>
                <th scope="col" className="px-3 py-3">Crop situation</th>
                <th scope="col" className="px-3 py-3">Typical action</th>
                <th scope="col" className="px-3 py-3">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {decisionGuide.map((row) => (
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
        <h2 className="text-2xl font-black text-soil">Popular crop values to test</h2>
        <div className="mt-4 max-w-full overflow-x-auto rounded-xl border border-[#e5e7eb]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#f8fbf6] text-xs font-black uppercase text-ash">
              <tr>
                <th scope="col" className="px-3 py-3">Crop</th>
                <th scope="col" className="px-3 py-3">Rarity</th>
                <th scope="col" className="px-3 py-3">Base value</th>
                <th scope="col" className="px-3 py-3">Average weight</th>
                <th scope="col" className="px-3 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {gag2Crops
                .filter((crop) => ["Green Bean", "Bamboo", "Venus Fly Trap", "Moon Bloom", "Dragon's Breath"].includes(crop.name))
                .map((crop) => (
                  <tr key={crop.slug}>
                    <td className="px-3 py-3 font-black text-soil">
                      {crop.emoji} {crop.name}
                    </td>
                    <td className="px-3 py-3 font-bold text-charcoal">{crop.rarity}</td>
                    <td className="px-3 py-3 font-mono font-black text-charcoal">{formatSheckles(crop.baseValue)}</td>
                    <td className="px-3 py-3 font-mono font-bold text-charcoal">{crop.averageWeight}kg</td>
                    <td className="px-3 py-3 text-ash">{crop.stage === "late" ? "Check before holding for boosts" : "Check before selling or reinvesting"}</td>
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
