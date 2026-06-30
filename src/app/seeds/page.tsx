import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { SeedFilter } from "@/components/seed-filter";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "Grow a Garden 2 seed route with best early crops, mid-game upgrades, late-game crops, price notes, weather prep, and a searchable seed table.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Seeds", href: "/seeds" },
];

const firstBuys = [
  ["Starter", "Strawberry / Blueberry", "Best first route", "These move you into repeat income fast instead of keeping you stuck on weak starter harvests."],
  ["Early income", "Tomato / Bamboo", "Best next step", "This is the stage where your farm starts paying for pets and sprinklers instead of only surviving."],
  ["Mid-game bridge", "Pineapple / Mushroom / Pomegranate", "Buy when your loop is stable", "Use these when you can afford a stronger crop route without delaying Bunny, Deer, or basic defense."],
  ["Late-game targets", "Venus Fly Trap / Moon Bloom / Dragon's Breath", "Only after defense is ready", "These are worth saving, protecting, and using for weather windows. Weak farms should not rush them."],
];

const decisionTable = [
  ["Strawberry / Blueberry", "Beginner", "Build repeat income", "Buy first", "They are worth more than trying to look advanced with weak single-harvest filler crops."],
  ["Tomato / Bamboo", "Early to mid", "Stabilize the farm", "High priority", "Bamboo is one of the cleanest bridges before expensive pets and late-game crop dreams."],
  ["Pineapple / Mushroom", "Mid-game", "Upgrade the money loop", "Buy when affordable", "Good if they push your route forward without slowing Bunny, Deer, or defense timings."],
  ["Pomegranate / Acorn", "Late-mid to late", "Move into stronger value", "After route stability", "These are better once your farm can afford to hold more value without falling apart."],
  ["Venus Fly Trap", "Late game", "Value plus defense angle", "After defense", "Good when you already protect expensive crops and want a top-end plant that fits that style."],
  ["Moon Bloom / Dragon's Breath", "Late game", "Weather and mutation targets", "Late-game only", "Only worth the wait if your plot can defend them and one boosted harvest is a real upgrade."],
  ["Venom Spitter", "Late game", "Specialized expensive choice", "Compare first", "Do not buy it just because it sounds mythic. Compare current shop cost and what it delays in your route."],
];

const routeAdjustments = [
  ["If you still feel poor", "Stay on repeat-income crops longer", "Do not chase legendary-looking plants if you still struggle to buy the next clean upgrade."],
  ["If you lose crops at night", "Delay late-game seeds and fix defense first", "A lost expensive plant is a worse route than a cheaper crop you can safely keep turning into money."],
  ["If weather is your plan", "Move into crops worth saving, not just crops worth planting", "Weather greed only pays when the crop is already valuable enough to justify the hold."],
  ["If a seed looks good but breaks your loop", "Skip it for now", "A slower but stable farm beats a flashy purchase that delays Bunny, Deer, watering, or defense."],
];

const stageSeeds = [
  ["Beginner route", "Cheap repeat-income crops", "Use them to turn the first Sheckles into a stable loop instead of random shop gambling."],
  ["Mid-game route", "Reliable income crops", "This is where Bamboo, Pineapple, Mushroom, and other stable earners matter most."],
  ["Late-game route", "High-value protected crops", "Only move here once your plot can defend value and survive event greed."],
  ["Weather route", "Crops worth holding through event windows", "These are the crops you save for mutations and boosted harvest timing."],
];

const priceHighlights = [
  ["Bamboo", "The practical route winner", "Bamboo is one of the strongest real upgrades because it improves a normal account before premium dreams take over."],
  ["Acorn", "Late-game bridge", "Acorn makes more sense after your farm already stops feeling fragile."],
  ["Venus Fly Trap", "Defensive late-game crop", "Strong when you already protect expensive crops and want a high-value plant that fits that style."],
  ["Moon Bloom", "Weather hold crop", "Treat it as a save-for-event target, not as a casual everyday plant."],
  ["Venom Spitter", "Expensive comparison buy", "Check the current shop and compare what else the same money would fix first."],
];

const faq = [
  ["What should I buy first in Grow a Garden 2?", "Buy repeat-income crops first. A stable loop beats chasing late-game seeds before your farm is ready."],
  ["When should I buy Bamboo?", "Buy Bamboo when it improves your income without delaying Bunny, Deer, or your first useful watering and defense steps."],
  ["What is the best late-game crop?", "Moon Bloom, Dragon's Breath, and Venus Fly Trap are top-end choices, but they only make sense after your farm can defend them and use weather well."],
  ["Should I rush Venus Fly Trap?", "No. Rush it only if the rest of your farm is already stable. Otherwise it is just an expensive way to slow your route."],
];

export default function SeedsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="seeds"
        title="Grow a Garden 2 Seeds & Plants Guide"
        description="Best seeds, plant tier list, price route, weather prep, and seed buying order for Grow a Garden 2."
        path="/seeds"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Seeds & Plants Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Use this page to decide what to plant now, what to delay, and which expensive crops are only worth buying after your farm is already stable.</p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          The best seed route is: move into repeat-income crops immediately, use Bamboo and similar stable earners to build the farm, then buy late-game seeds only after you can defend them and actually benefit from weather windows.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Seeds to Buy First</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb] bg-[#fbfdf9]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Stage</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed target</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">When to buy</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why this route wins</th>
              </tr>
            </thead>
            <tbody>
              {firstBuys.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[2]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Seed Route</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          Start with repeat-income crops, move into Bamboo or another stable bridge, then compare late-game crops only after your garden can protect expensive plants. High-end seeds are strongest when they fit an already working farm, not when they replace one.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            ["Calculate crop value", "/calculator"],
            ["Compare crop values", "/values"],
            ["Use mutations", "/mutations"],
            ["Plan weather harvests", "/weather"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full border border-[#e5d08a] bg-white px-3 py-1.5 text-xs font-black text-[#8A5A00] transition hover:-translate-y-0.5">
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-2 sm:grid-cols-4">
        {stageSeeds.map(([stage, target, body]) => (
          <div key={stage} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{stage}</p>
            <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{target}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("seed-shop")} alt="Seed Shop" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Use Sam&apos;s Seed Shop to move the route forward, not to buy every shiny restock.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("venus-fly-trap")} alt="Venus Fly Trap" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Venus Fly Trap belongs on farms that can already defend expensive value, not on weak early routes.</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Which seed wins in each situation</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Stage</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best use</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Buy call</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th>
              </tr>
            </thead>
            <tbody>
              {decisionTable.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[3]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">When to change the seed route</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {routeAdjustments.map(([caseTitle, answer, reason]) => (
            <div key={caseTitle} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{caseTitle}</p>
              <h3 className="mt-2 text-sm font-extrabold text-[#2E3B2E]">{answer}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Seed price notes that actually matter</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {priceHighlights.map(([seed, role, body]) => (
            <div key={seed} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{seed}</h3>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</p>
              <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
              {seed === "Venom Spitter" && (
                <Link href="/venom-spitter" className="mt-2 inline-block text-sm font-bold text-[#4CAF50] hover:underline">
                  Open Venom Spitter guide
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">What not to copy blindly</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Do not rush late-game crops on a weak farm</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">
              If your route still breaks when you miss one sale, Moon Bloom and Dragon&apos;s Breath are not your problem yet.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Do not treat weather greed as basic income</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">
              Holding crops through weather is for good crops on stable farms. Weak crops on weak farms should usually just be sold and reinvested.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">All Seeds</h2>
        <p className="mb-3 text-sm leading-6 text-[#777]">
          Use the searchable table when you already know what stage of the route you are in. If you are still deciding what to buy next, use the decision sections above first.
        </p>
        <SeedFilter />
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">FAQ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {faq.map(([q, a]) => (
            <div key={q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{q}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/weather", title: "Weather Events", detail: "Use event timing only on crops worth slowing down for.", emoji: "Weather" },
          { href: "/mutations", title: "Mutations Guide", detail: "See when a crop is finally good enough to hold instead of sell immediately.", emoji: "Mutations" },
          { href: "/pets", title: "All Pets", detail: "Match seed upgrades to Bunny, Deer, Bee, and the pet route that actually supports them.", image: gag2Images.pet("deer") },
          { href: "/codes", title: "Active Codes", detail: "Use free seed rewards before spending Sheckles on the next crop upgrade.", emoji: "Codes" },
          { href: "/night-stealing", title: "Night Defense", detail: "Protect expensive crops before you pretend the farm is ready for late-game greed.", emoji: "Defense" },
        ]}
      />
    </main>
  );
}
