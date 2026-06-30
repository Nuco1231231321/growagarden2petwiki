import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Gears } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Gears Guide: Prices, Effects & Best Gears",
  description: "Every GAG2 gear: Watering Cans, Sprinklers, Mushrooms, Gnome, Flashbang, Basic Pot, Wheelbarrow, Teleporter. Plus Robux-only gears: Rainbow Carpet, Freeze Ray, Vine Wrapper.",
  alternates: { canonical: "https://growagarden2pet.wiki/gears" },
};

const cats = [...new Set(gag2Gears.map((gear) => gear.category))];

const robuxGears = [
  { n: "Rainbow Carpet", c: "599 Robux", f: "Fast premium travel. Strong comfort pick, not a core farming upgrade." },
  { n: "Vine Wrapper", c: "499 Robux", f: "PvP control tool for players who actually use player-interference routes." },
  { n: "Freeze Ray", c: "749 Robux", f: "High-control PvP tool. Not part of the normal money route." },
  { n: "Power Hose", c: "299 Robux", f: "Niche player-control gear, not a first-buy economy tool." },
] as const;

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Items & Gear", href: "/gears" },
  { name: "Gears", href: "/gears" },
];

const firstBuys = [
  ["Buy first", "Common Sprinkler, Rare Sprinkler, Common Watering Can", "Growth tools improve every crop route and pay back faster than side utility."],
  ["Buy after that", "Gnome, Flashbang, Bee support", "Defense starts mattering once your garden finally holds crops worth stealing."],
  ["Buy later", "Wheelbarrow, Basic Pot, Teleporter", "Useful tools, but they should not delay crop income or early defense."],
  ["Buy for comfort, not urgency", "Rainbow Carpet and premium movement tools", "Movement comfort is nice, but it is not the same as fixing your real bottleneck."],
];

const decisionRows = [
  ["Your farm grows too slowly", "Sprinklers first", "Growth is the cleanest upgrade because it improves the whole field instead of one narrow gimmick."],
  ["You lose crops at night", "Gnome or defense tools next", "Defense becomes worth buying as soon as crop loss hurts more than the gear price."],
  ["You just want faster travel", "Speed Mushroom or Teleporter", "Use cheaper movement tools before expensive utility like Wheelbarrow."],
  ["You play with friends often", "Wheelbarrow later", "Great for team utility, but weak as a first economy purchase."],
];

const gearWarnings = [
  ["Do not buy utility before income", "If a gear does not improve growth, defense, or a clear route bottleneck, it is probably too early."],
  ["Do not let novelty delay Bee or Gnome timing", "Night losses erase gains fast, so defense gear beats side utility once your crops gain value."],
  ["Do not treat every expensive gear as top priority", "A high price does not automatically mean it should come before your core route pieces."],
];

const keyAnswers = [
  ["Megaphone", "Useful only if your current problem is sound playback. It is not part of the farm upgrade route."],
  ["Basic Pot", "Buy after the money loop is stable. It should never beat seeds, sprinklers, or first defense."],
  ["Gnome", "One of the cleanest defensive buys because it solves a real night problem before full late-game setups."],
  ["Wheelbarrow", "Strong team utility, but only after the account stops being starved for growth and defense."],
];

const faq = [
  ["What is the best gear in Grow a Garden 2?", "Sprinklers are the best general farming gear because they strengthen the whole crop route instead of a side activity."],
  ["What should beginners buy first?", "Beginners should buy growth tools first, then defense, and only then utility gear like Wheelbarrow or Basic Pot."],
  ["Is Basic Pot worth it?", "Yes later. No if it delays better crops, sprinklers, Bunny, Deer, or your first defense setup."],
  ["When is Wheelbarrow worth buying?", "When your account already earns enough that 500K no longer slows your crop route or defense route."],
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
      <p className="mt-2 text-sm text-[#777]">
        Use this page to decide which gear solves your next problem: crop growth, night defense, movement, or team utility.
      </p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Buy growth gear first, defense gear second, and utility gear third. If a gear does not improve crops, stop losses, or fix a real route bottleneck, it usually should not be the next purchase.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Best gears to buy first</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {firstBuys.map(([type, gear, body]) => (
            <div key={type} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{type}</p>
              <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{gear}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-extrabold text-[#2E3B2E]">What to buy based on your bottleneck</h2>
          <Link href="/tier-list" className="text-sm font-black text-[#4CAF50] underline decoration-2 underline-offset-4">
            Full Grow a Garden 2 tier list
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Problem</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best answer</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {gearWarnings.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Key gear answers</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyAnswers.map(([gear, body]) => (
            <section key={gear} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{gear}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
              {gear === "Megaphone" && (
                <Link href="/megaphone-sound-ids" className="mt-2 inline-block text-sm font-bold text-[#4CAF50] hover:underline">
                  Open Megaphone Sound IDs
                </Link>
              )}
              {gear === "Wheelbarrow" && (
                <Link href="/wheelbarrow" className="mt-2 inline-block text-sm font-bold text-[#4CAF50] hover:underline">
                  Open Wheelbarrow guide
                </Link>
              )}
            </section>
          ))}
        </div>
      </section>

      {cats.map((cat) => {
        const items = gag2Gears.filter((gear) => gear.category === cat);
        return (
          <section key={cat} className="mt-8">
            <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">{cat}</h2>
            <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                    <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Gear</th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Rarity</th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Price</th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((gear) => (
                    <tr key={gear.name} className="border-b border-[#3c3c3c]/10 last:border-0 hover:bg-[#C8E6C9]/5">
                      <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">
                        {gear.emoji} {gear.name}
                      </td>
                      <td className="px-3 py-2 text-xs text-[#777]">{gear.rarity}</td>
                      <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">
                        {gear.costSheckles}
                        {gear.costRobux ? ` / ${gear.costRobux}R` : ""}
                      </td>
                      <td className="px-3 py-2 text-xs text-[#777]">{gear.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Robux-only gears</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Gear</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Cost</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What it is really for</th>
              </tr>
            </thead>
            <tbody>
              {robuxGears.map((gear) => (
                <tr key={gear.n} className="border-b border-[#3c3c3c]/10 last:border-0">
                  <td className="px-3 py-2 font-semibold text-[#4b4b4b]">{gear.n}</td>
                  <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{gear.c}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{gear.f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Gear FAQ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {faq.map(([question, answer]) => (
            <section key={question} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{question}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{answer}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next gear routes</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/wheelbarrow" className="font-semibold text-[#4CAF50] hover:underline">
            Wheelbarrow Guide
          </Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">
            Night Defense
          </Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">
            Best Seeds
          </Link>
          <Link href="/tier-list" className="font-semibold text-[#4CAF50] hover:underline">
            Tier List
          </Link>
        </div>
      </section>
    </main>
  );
}
