import Image from "next/image";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { SeedFilter } from "@/components/seed-filter";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "Grow a Garden 2 seed route with best early crops, mid-game upgrades, late-game crops, weather prep, and a searchable seed table.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Seeds", href: "/seeds" },
];

const firstBuys = [
  ["Starter", "Strawberry / Blueberry", "Move out of single-harvest starter crops and build repeat income."],
  ["Early income", "Corn / Apple", "Use cheap multi-harvest crops to fund pets and sprinklers."],
  ["Mid game", "Bamboo / Pineapple", "Push income before buying expensive utility gear."],
  ["Late game", "Pomegranate / Venus Fly Trap", "Start protecting crops and saving the best harvests for events."],
  ["Weather save", "Moon Bloom / Dragon's Breath", "Hold the highest-value crops for weather and mutation boosts."],
];

const plantTiers = [
  ["S", "Venus Fly Trap, Moon Bloom, Dragon's Breath", "Best late-game targets to protect, mutate, and save for weather."],
  ["A", "Bamboo, Pineapple, Pomegranate, Acorn", "Strong income path before the most expensive crops."],
  ["B", "Corn, Apple, Mushroom, Green Bean", "Good early and mid-game crops that keep the farm moving."],
  ["C", "Tulip, Cactus, single-harvest filler crops", "Use only when you are still building the first income loop."],
];

const stageSeeds = [
  ["Beginner", "Cheap multi-harvest crops", "Prioritize crops that keep producing while you save for Bunny and Deer."],
  ["Mid game", "Stable income crops", "Use Bamboo, Pineapple, and other reliable crops before novelty purchases."],
  ["Late game", "High-value crops", "Protect expensive crops with Bee, Gnome, fences, or traps."],
  ["Weather prep", "Crops worth saving", "Leave valuable crops unharvested during weather, then harvest after boosts land."],
];

const priceHighlights = [
  ["Acorn", "Late-game upgrade", "Worth considering after your farm can protect expensive crops."],
  ["Venus Fly Trap", "Late-game defensive crop", "Best when you also care about night defense and high-value harvests."],
  ["Green Bean", "Code reward crop", "Use active codes first so free seeds start earning immediately."],
  ["Bamboo", "Core income target", "A practical early-to-mid upgrade before expensive gear."],
];

const faq = [
  ["What is the best seed in Grow a Garden 2?", "For most players, the best seed is the strongest multi-harvest crop they can afford and protect. Bamboo is a practical early target; Venus Fly Trap and Moon Bloom are stronger late-game targets."],
  ["What should beginners plant first?", "Beginners should move into cheap multi-harvest crops, redeem codes, then use income to buy Bunny, Deer, and better seeds."],
  ["What is the Venus Fly Trap price in GAG2?", "Treat Venus Fly Trap as a late-game crop target. Check Sam's Seed Shop and prioritize it only after your income and defense are ready."],
  ["Is Acorn worth buying?", "Acorn is worth buying after your starter and mid-game income loop is stable. Do not delay core pets, sprinklers, or basic defense just to rush it."],
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
      <p className="mt-2 text-sm text-[#777]">Buy seeds from Sam, prioritize multi-harvest crops, and save your best plants for weather events.</p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Seeds to Buy First</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Stage</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed target</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why it matters</th></tr></thead>
            <tbody>
              {firstBuys.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-2 sm:grid-cols-3">
        {[
          { l: "Early: 0-10K", c: "Strawberry and Blueberry", t: "Move from Carrot into multi-harvest crops as fast as possible." },
          { l: "Mid: 10K-500K", c: "Tomato, Bamboo, Pineapple", t: "Bamboo is the main value target before expensive pets and gear." },
          { l: "Late: 500K+", c: "Acorn, Pomegranate, Venus Fly Trap", t: "Protect these crops at night and save them for weather boosts." },
        ].map((stage) => (
          <div key={stage.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
            <span className="text-[10px] font-black uppercase text-[#777]">{stage.l}</span>
            <p className="text-sm font-bold text-[#4b4b4b]">{stage.c}</p>
            <p className="mt-1 text-xs text-[#777]">{stage.t}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("seed-shop")} alt="Seed Shop" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Check Sam&apos;s Seed Shop often for upgrades.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("venus-fly-trap")} alt="Venus Fly Trap" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Venus Fly Trap is a late-game crop with defensive value.</p>
        </div>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Plants Tier List</h2>
      <div className="space-y-2">
        {plantTiers.map(([tier, crops, reason]) => (
          <div key={tier} className="flex gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8E1] text-sm font-black text-[#F57F17]">{tier}</span>
            <div>
              <p className="text-sm font-extrabold text-[#4b4b4b]">{crops}</p>
              <p className="mt-1 text-xs leading-5 text-[#777]">{reason}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Seeds by Stage</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stageSeeds.map(([stage, target, body]) => (
          <div key={stage} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{stage}</p>
            <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{target}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Seed Prices</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {priceHighlights.map(([seed, role, body]) => (
          <div key={seed} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{seed}</h3>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</p>
            <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">All Seeds</h2>
      <SeedFilter />

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Use Weather With Seeds</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Plant before events", "Keep your best crops planted when you expect weather."],
          ["Stop harvesting", "When weather begins, leave valuable crops on the plant."],
          ["Defend at night", "Use Bee, Gnome, traps, or fences if weather overlaps with night."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Bargain System</h2>
      <p className="text-sm leading-relaxed text-[#777]">
        Use Bargain only on valuable crops where the extra sell price matters. Skip it on normal early crops and reinvest your Sheckles into seeds, Deer, and basic defense.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[...faq, ["When should I buy Bamboo?", "Buy Bamboo once your starter loop is running. It is the main early-to-mid game upgrade."], ["Should I harvest during weather?", "Leave high-value crops unharvested while weather is active, then harvest after the event."]].map(([q, a]) => (
          <div key={q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{q}</h3>
            <p className="mt-1 text-sm text-[#777]">{a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/weather", title: "Weather Events", detail: "Save high-value crops for events", emoji: "Weather" },
        { href: "/mutations", title: "Mutations Guide", detail: "Use boosted crops for bigger payouts", emoji: "Mutations" },
        { href: "/pets", title: "All Pets", detail: "Deer helps your crop route", image: gag2Images.pet("deer") },
        { href: "/codes", title: "Active Codes", detail: "Redeem free seed rewards first", emoji: "Codes" },
        { href: "/night-stealing", title: "Night Defense", detail: "Protect your best crops", emoji: "Defense" },
      ]} />
    </main>
  );
}
