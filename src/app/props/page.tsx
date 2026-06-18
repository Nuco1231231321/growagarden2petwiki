import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Props: 14 Crates, Bear Traps, Fences & Conveyors",
  description: "All 14 GAG2 crates with prices, contents and drop rates. Bear Traps, 14 fence types, Conveyors, Teleporter Pads, Owner Doors. Best crates for garden defense.",
  alternates: { canonical: "https://growagarden2pet.wiki/props" },
};

const crates = [
  ["Ladder","Common","30K / 19R","Ladder(40%), Dark Oak(30%), Gold(20%), Rainbow(10%)"],
  ["Bench","Uncommon","60K / 23R","Normal(25%), Corner(25%), White(20%), Dark(15%), Log(10%), Flower(5%)"],
  ["Light","Uncommon","90K / 39R","Moss(30%), Rope(26%), Small Hanging(22%), Bonfire(15%), Star(7%)"],
  ["Sign","Rare","150K / 49R","Sign(70%), Gold(25%), Rainbow(4%), Big(1%)"],
  ["Arch","Rare","200K / 59R","Wood(35%), White(30%), Small(25%), Circle(10%)"],
  ["Roleplay","Rare","300K / 63R","Beach Towel, Bookcase, Carpet, Clock, Wood Floor, Wood Wall, Fountain"],
  ["Bridge","Epic","700K / 89R","Big(70%), Red(25%), Small(4%), White(1%)"],
  ["Spring","Epic","~900K / 99R","Uncommon(68%), Rare(26%), Mythic(5%), Super(1%)"],
  ["Seesaw","Epic","1.5M / 149R","Wood(80%), Gold(15%), Rainbow(5%)"],
  ["Conveyor","Epic","700K / 79R","Common(43%), Uncommon(25%), Rare(20%), Epic(10%), Super(2%)"],
  ["Owner Door","Legendary","1.5M / 179R","Oak(75%), Dark Oak(20%), Gold(4%), Rainbow(1%)"],
  ["Bear Trap","Legendary","1.5M / 179R","Common(90%), Gold(8%), Rainbow(2%)"],
  ["Fence","Legendary","7-10M / 299R","14 fence types, Rainbow(0.86%)"],
  ["Teleporter Pad","Mythic","20-50M / 499R","Pad(80%), Big(15%), Huge(5%)"],
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Items & Gear", href: "/gears" },
  { name: "Props & Crates", href: "/props" },
];

const bestCrates = [
  ["1", "Bear Trap Crate", "Best first defensive crate because traps directly punish thieves."],
  ["2", "Fence Crate", "Use fences when your garden needs a real perimeter."],
  ["3", "Owner Door Crate", "Add after fences so the garden stays usable for you."],
  ["4", "Teleporter Pad Crate", "Expensive movement upgrade for large farms, not an early priority."],
];

const defensiveProps = [
  ["Bear Trap", "Stops or punishes thieves", "Place on common entry paths and near expensive crops."],
  ["Fence", "Blocks routes into your garden", "Use around the crop area before night."],
  ["Owner Door", "Restricts access through your fence", "Pair with fences once the perimeter is built."],
  ["Teleporter Pad", "Moves you around quickly", "Use for large gardens and defense response routes."],
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
      <p className="mt-2 text-sm text-[#777]">14 crate types from <strong>Charlotte</strong> at the Props Shop (rotates every 5 min). Sheckles or Robux.</p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Crates to Buy First</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {bestCrates.map(([rank, crate, body]) => (
            <div key={crate} className="rounded-xl bg-white p-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{rank}</span>
              <h3 className="mt-3 text-sm font-extrabold text-[#4b4b4b]">{crate}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-6 mb-3">All Crates</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Crate</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Rarity</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Price</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Contents (drop rates)</th></tr></thead>
          <tbody>
            {crates.map((c) => (
              <tr key={c[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{c[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{c[1]}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{c[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777] max-w-[300px]">{c[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">How Props Work</h2>
      <p className="text-sm text-[#777] leading-relaxed">
        Props are decorative and functional items placed in your garden. Each prop comes from a specific crate purchased from Charlotte. Crates contain random items with different drop rates — rarer items have lower odds. You can buy crates with either Sheckles or Robux. The Props Shop <strong>restocks every 5 minutes</strong> — if the crate you want is not available, wait and check back.
      </p>
      <p className="mt-3 text-sm text-[#777] leading-relaxed">
        Props serve three main purposes: <strong>Defense</strong> (Bear Traps stop thieves, Fences block entry, Owner Doors restrict access), <strong>Movement</strong> (Conveyors move items, Teleporter Pads teleport you, Ladders reach high areas), and <strong>Decoration</strong> (Benches, Lights, Signs, Arches, Bridges — purely cosmetic but fun for creative gardens).
      </p>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Defensive Crate Priority</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { priority: "1st", crate: "Bear Trap Crate", reason: "Traps stop thieves in their tracks. Most effective single defensive item." },
          { priority: "2nd", crate: "Fence Crate", reason: "Build walls around your garden. 14 fence types — Rainbow fence is 0.86% drop." },
          { priority: "3rd", crate: "Owner Door Crate", reason: "Once your perimeter is fenced, add a door only you can open. Rainbow door is 1%." },
        ].map((p) => (
          <div key={p.priority} className="rounded-xl border-2 border-[#FFC107]/20 bg-[#FFF8E1] p-4">
            <span className="text-xs font-black text-[#FFC107]">{p.priority}</span>
            <p className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{p.crate}</p>
            <p className="mt-1 text-xs text-[#777]">{p.reason}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Defensive Props Table</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Prop</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Use</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best placement</th></tr></thead>
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

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Pro Tips</h2>
      <ul className="space-y-2 text-sm text-[#777]">
        <li>• <strong>Stack Bear Traps</strong> — place multiple traps at common entry points. Thieves can avoid one trap but rarely dodge three.</li>
        <li>• <strong>Fence + Door combo</strong> — a fully fenced garden with an Owner Door makes your crops nearly untouchable at night.</li>
        <li>• <strong>Teleporter Pads</strong> are the most expensive crate (20-50M) but let you instantly teleport across your garden — great for large farms.</li>
        <li>• <strong>Conveyor belts</strong> automate crop movement between growing areas and storage. Super Conveyor is a 2% drop.</li>
        <li>• <strong>Save Sheckles first</strong> — focus on crops and pets before investing heavily in decorative crates like Seesaw, Arch, or Bridge.</li>
      </ul>

      <div className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Defense Guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Stealing Defense</Link>
          <Link href="/gears" className="font-semibold text-[#4CAF50] hover:underline">Best Gears</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Defense Pets</Link>
        </div>
      </div>
    </main>
  );
}
