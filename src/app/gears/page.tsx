import Link from "next/link";
import { gag2Gears } from "@/lib/data";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Gears Guide: Prices, Effects & Best Gears",
  description: "Every GAG2 gear: Watering Cans, Sprinklers, Mushrooms, Gnome, Flashbang, Basic Pot, Wheelbarrow, Teleporter. Plus Robux-only gears: Rainbow Carpet, Freeze Ray, Vine Wrapper.",
  alternates: { canonical: "https://growagarden2pet.wiki/gears" },
};

const cats = [...new Set(gag2Gears.map((g) => g.category))];
const robuxGears = [
  { n: "Rainbow Carpet", e: "🪄", c: "599 Robux", f: "Fly anywhere on the map" },
  { n: "Vine Wrapper", e: "🌿", c: "499 Robux", f: "Wraps players in vines" },
  { n: "Freeze Ray", e: "❄️", c: "749 Robux", f: "Freezes a player into ice" },
  { n: "Power Hose", e: "🔫", c: "299 Robux", f: "Sprays and pushes players" },
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Items & Gear", href: "/gears" },
  { name: "Gears", href: "/gears" },
];

const firstBuys = [
  ["Watering/Sprinkler", "Common Sprinkler -> Rare Sprinkler", "Buy growth tools before novelty gear because they improve every crop route."],
  ["Defense", "Gnome / Flashbang", "Use defensive gear before holding expensive crops at night."],
  ["Movement", "Speed Mushroom / Teleporter", "Use movement tools when you are crossing the map or escaping night pressure."],
  ["Utility", "Wheelbarrow / Basic Pot", "Buy these after income and defense are stable."],
];

const gearTiers = [
  ["S", "Super Sprinkler, Gnome, Wheelbarrow", "High-value tools for growth, defense, or team utility."],
  ["A", "Rare Sprinkler, Legendary Sprinkler, Teleporter, Speed Mushroom", "Strong tools that solve common farming and movement problems."],
  ["B", "Common Sprinkler, Super Watering Can, Flashbang, Basic Pot", "Useful in the right situation, but not always first priority."],
  ["C", "Cosmetic or narrow-use tools", "Buy after your core farm upgrades are already handled."],
];

const goalPicks = [
  ["Faster growth", "Sprinklers and Watering Cans", "Stack crop growth tools before expensive utility purchases."],
  ["Night defense", "Gnome, Flashbang, Bee support", "Protect high-value crops before leaving them out overnight."],
  ["Movement", "Speed Mushroom and Teleporter", "Use these for shop routes, escape paths, and night movement."],
  ["Player carrying", "Wheelbarrow", "Best for group play and repositioning players, not for first-hour farming."],
];

const itemAnswers = [
  ["Basic Pot", "Basic Pot lets you plant a crop in a movable pot. Buy it only after your income loop is stable; it should not delay crops, pets, or defense."],
  ["Gnome", "Gnome is one of the first defensive gears to consider because it helps push away intruders during night stealing."],
  ["Super Watering Can", "Super Watering Can is a burst-growth tool. Use it when you want a short growth push on important crops."],
  ["Wheelbarrow", "Wheelbarrow lets you carry players and adds team utility. Read the full Wheelbarrow guide before spending 500,000 Sheckles."],
];

const faq = [
  ["What is the best gear in GAG2?", "Sprinklers are usually the best farming gear, while Gnome and Wheelbarrow are stronger for defense or team utility."],
  ["Is Basic Pot worth it?", "Basic Pot is worth it later, but it is not a first purchase. Buy income, pets, and basic defense first."],
  ["What does Gnome do?", "Gnome helps defend your garden by interfering with intruders at night."],
  ["Which sprinkler should you buy first?", "Start with affordable sprinklers, then upgrade as your farm income improves."],
];

export default function GearsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="gears"
        title="Grow a Garden 2 Gears Guide"
        description="Best gears, gear tier list, gear prices, effects, and buy order for Grow a Garden 2."
        path="/gears"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Gears Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Gears from <strong>George</strong> at the Gear Shop (rotates every 5 min). Some also purchasable with Robux. {gag2Gears.length} Sheckles gears + 4 Robux-only.</p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Gears to Buy First</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {firstBuys.map(([type, gear, body]) => (
            <div key={type} className="rounded-xl bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{type}</p>
              <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{gear}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Gear Tier List</h2>
      <div className="space-y-2">
        {gearTiers.map(([tier, gears, reason]) => (
          <div key={tier} className="flex gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8E1] text-sm font-black text-[#F57F17]">{tier}</span>
            <div>
              <p className="text-sm font-extrabold text-[#4b4b4b]">{gears}</p>
              <p className="mt-1 text-xs leading-5 text-[#777]">{reason}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Gears by Goal</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {goalPicks.map(([goal, pick, body]) => (
          <div key={goal} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{goal}</p>
            <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{pick}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Key Gear Answers</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {itemAnswers.map(([gear, body]) => (
          <section key={gear} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{gear}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            {gear === "Wheelbarrow" && <Link href="/wheelbarrow" className="mt-2 inline-block text-sm font-bold text-[#4CAF50] hover:underline">Open Wheelbarrow guide</Link>}
          </section>
        ))}
      </div>

      {cats.map((cat) => {
        const items = gag2Gears.filter((g) => g.category === cat);
        return (
          <section key={cat} className="mt-8">
            <h2 className="text-xl font-extrabold text-[#2E3B2E] mb-3">{cat}</h2>
            <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Gear</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Rarity</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Price</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Effect</th></tr></thead>
                <tbody>
                  {items.map((g) => {
                    return (
                      <tr key={g.name} className="border-b border-[#3c3c3c]/10 last:border-0 hover:bg-[#C8E6C9]/5">
                        <td className="px-3 py-2 font-semibold text-[#4b4b4b] text-xs">{g.emoji} {g.name}</td>
                        <td className="px-3 py-2 text-xs text-[#777]">{g.rarity}</td>
                        <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{g.costSheckles}{g.costRobux ? ` / ${g.costRobux}R` : ''}</td>
                        <td className="px-3 py-2 text-xs text-[#777]">{g.effect}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Robux-Only Gears</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Gear</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Cost</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Effect</th></tr></thead>
          <tbody>
            {robuxGears.map((g) => (
              <tr key={g.n} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-semibold text-[#4b4b4b]">{g.e} {g.n}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{g.c}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{g.f}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Gear FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {faq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Gear Routes</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/wheelbarrow" className="font-semibold text-[#4CAF50] hover:underline">Wheelbarrow Guide</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Best Seeds</Link>
        </div>
      </div>
    </main>
  );
}
