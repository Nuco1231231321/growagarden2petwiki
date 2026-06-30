import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Props: 14 Crates, Bear Traps, Fences & Conveyors",
  description: "All 14 GAG2 crates with prices, contents and drop rates. Bear Traps, 14 fence types, Conveyors, Teleporter Pads, Owner Doors. Best crates for garden defense.",
  alternates: { canonical: "https://growagarden2pet.wiki/props" },
};

const crates = [
  ["Ladder", "Common", "30K / 19R", "Ladder(40%), Dark Oak(30%), Gold(20%), Rainbow(10%)"],
  ["Bench", "Uncommon", "60K / 23R", "Normal(25%), Corner(25%), White(20%), Dark(15%), Log(10%), Flower(5%)"],
  ["Light", "Uncommon", "90K / 39R", "Moss(30%), Rope(26%), Small Hanging(22%), Bonfire(15%), Star(7%)"],
  ["Sign", "Rare", "150K / 49R", "Sign(70%), Gold(25%), Rainbow(4%), Big(1%)"],
  ["Arch", "Rare", "200K / 59R", "Wood(35%), White(30%), Small(25%), Circle(10%)"],
  ["Roleplay", "Rare", "300K / 63R", "Beach Towel, Bookcase, Carpet, Clock, Wood Floor, Wood Wall, Fountain"],
  ["Bridge", "Epic", "700K / 89R", "Big(70%), Red(25%), Small(4%), White(1%)"],
  ["Spring", "Epic", "~900K / 99R", "Uncommon(68%), Rare(26%), Mythic(5%), Super(1%)"],
  ["Seesaw", "Epic", "1.5M / 149R", "Wood(80%), Gold(15%), Rainbow(5%)"],
  ["Conveyor", "Epic", "700K / 79R", "Common(43%), Uncommon(25%), Rare(20%), Epic(10%), Super(2%)"],
  ["Owner Door", "Legendary", "1.5M / 179R", "Oak(75%), Dark Oak(20%), Gold(4%), Rainbow(1%)"],
  ["Bear Trap", "Legendary", "1.5M / 179R", "Common(90%), Gold(8%), Rainbow(2%)"],
  ["Fence", "Legendary", "7-10M / 299R", "14 fence types, Rainbow(0.86%)"],
  ["Teleporter Pad", "Mythic", "20-50M / 499R", "Pad(80%), Big(15%), Huge(5%)"],
] as const;

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Items & Gear", href: "/gears" },
  { name: "Props & Crates", href: "/props" },
];

const firstBuys = [
  ["Buy first", "Bear Trap Crate", "Best first prop route when night defense is already becoming a real problem."],
  ["Buy after that", "Fence Crate and Owner Door", "Use these when crop value is high enough that a real perimeter finally pays back."],
  ["Buy later", "Teleporter Pad and decorative crates", "These are comfort or style upgrades, not route-saving tools."],
];

const warnings = [
  ["Do not build defense too early", "Props are weak buys if your crops are still cheap and easy to replace."],
  ["Do not buy decorative crates before real upgrades", "Seeds, pets, sprinklers, and basic defense should come first."],
  ["Do not overbuild around weak crops", "A giant fence around low-value filler crops is usually wasted money."],
];

const defensiveProps = [
  ["Bear Trap", "Punish thieves directly", "Best on obvious entry paths and near the crops that matter most."],
  ["Fence", "Block easy access", "Use only when your plot finally has enough value to protect with a perimeter."],
  ["Owner Door", "Keep your layout usable while limiting others", "Best after the fence route is already in place."],
  ["Teleporter Pad", "Move fast in large layouts", "Late convenience tool, not an early defense answer."],
];

export default function PropsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="props"
        title="Grow a Garden 2 Props & Crates Guide"
        description="All props and crates in Grow a Garden 2 with prices, drop rates, defensive crate priority, Bear Traps, fences, Owner Doors, and Teleporter Pads."
        path="/props"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Props & Crates Guide</h1>
      <p className="mt-2 text-sm text-[#777]">
        Use props when the problem is night defense or layout control. Do not treat them as early progression items.
      </p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Bear Trap is the first prop route that usually matters. Fences and Owner Door become worth it later. Decorative crates and premium layout tools should wait until the crop route and defense route are already stable.
        </p>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {firstBuys.map(([label, title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{label}</p>
            <h2 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {warnings.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-4">
            <h2 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Defensive props that actually matter</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Prop</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best use</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">When to use it</th>
              </tr>
            </thead>
            <tbody>
              {defensiveProps.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">All crates</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Crate</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Rarity</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Price</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Contents</th>
              </tr>
            </thead>
            <tbody>
              {crates.map((crate) => (
                <tr key={crate[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{crate[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{crate[1]}</td>
                  <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{crate[2]}</td>
                  <td className="max-w-[300px] px-3 py-2 text-xs text-[#777]">{crate[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next defense guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">
            Night Stealing Defense
          </Link>
          <Link href="/gears" className="font-semibold text-[#4CAF50] hover:underline">
            Best Gears
          </Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">
            Defense Pets
          </Link>
        </div>
      </section>
    </main>
  );
}
