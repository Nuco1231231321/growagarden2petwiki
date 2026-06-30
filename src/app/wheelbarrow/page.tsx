import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { WheelbarrowWorth } from "@/components/wheelbarrow-worth";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Wheelbarrow: What It Does, How to Get & Worth It",
  description: "Use this GAG2 Wheelbarrow guide to decide whether to buy it, where to get it, what it does, and what to buy first in Grow a Garden 2.",
  alternates: { canonical: "https://growagarden2pet.wiki/wheelbarrow" },
};

const beforeBuying = [
  ["1", "Stable multi-harvest crops", "Build income with Strawberry, Blueberry, Bamboo, or better crops."],
  ["2", "Bunny and Deer", "Speed and growth help every part of the game."],
  ["3", "Basic night defense", "Get Gnome or Bee before holding expensive crops overnight."],
  ["4", "Wheelbarrow", "Buy when 500K Sheckles no longer slows your farm upgrades."],
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Gears", href: "/gears" },
  { name: "Wheelbarrow", href: "/wheelbarrow" },
];

const quickFacts = [
  ["Cost", "500,000 Sheckles / 129 Robux"],
  ["Rarity", "Legendary Gear"],
  ["What it does", "Carries another player and helps with team movement"],
  ["Buy priority", "After income, pets, and basic defense"],
];

const buyDecisions = [
  ["Buy later", "You are still saving for Bunny, Deer, better seeds, or your first defense item.", "Spend on income first. Wheelbarrow is useful, but it does not grow crops faster."],
  ["Optional buy", "You have stable crops and play with friends, but 500K still feels expensive.", "Buy only if carrying players helps your group routes often."],
  ["Good buy", "Your farm earns 500K back quickly and night defense is already handled.", "Pick it up when George stocks it and use it for team movement."],
];

const buyBoundaries = [
  ["Not a first farming upgrade", "Wheelbarrow does not fix weak crop income, slow growth, or missing early pets."],
  ["Best in team play", "If you mostly play solo, the value drops because carrying players is the main reason to own it."],
  ["Skip it when 500K still hurts", "If buying Wheelbarrow delays Bee, Gnome, Deer, or better crops, the timing is still wrong."],
];

const useSteps = [
  ["Equip it", "Open your gear inventory and equip Wheelbarrow before moving near another player."],
  ["Move into position", "Use it around teammates or players you want to carry during routes or night chaos."],
  ["Carry and reposition", "Move the player where your group needs them: near a shop, garden path, or defensive setup."],
  ["Drop and swap tools", "After the carry is done, switch back to farming, defense, or movement gear."],
];

const faq = [
  ["Where do you get Wheelbarrow in Grow a Garden 2?", "Buy it from George at the Gear Shop when it appears in stock. It costs 500,000 Sheckles or 129 Robux."],
  ["What does the Wheelbarrow do in GAG2?", "Wheelbarrow lets you carry another player. It is mainly a team utility gear, not a crop income upgrade."],
  ["Is wheel barrow GAG2 the same item?", "Yes. Players often search wheel barrow, wheelbarrow, or Wheelbarrow GAG2 for the same Legendary Gear."],
  ["Is Wheelbarrow worth 500K?", "It is worth 500K after your crop income, Bunny, Deer, and basic night defense are stable. Skip it if the purchase delays those upgrades."],
  ["Does Wheelbarrow help farming?", "Only indirectly. It helps movement and group play, but crops, sprinklers, Bunny, Deer, and Bee usually improve your farm faster."],
  ["Is Wheelbarrow better than Speed Mushroom?", "No for pure movement. Speed Mushroom is cheaper for quick travel, while Wheelbarrow is mainly for carrying players and team utility."],
  ["Why does Wheelbarrow not work?", "Check that it is equipped, stand close enough to the player, and try again in an open area. If the server is lagging, re-equip the gear or rejoin."],
];

export default function WheelbarrowPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="wheelbarrow"
        title="Grow a Garden 2 Wheelbarrow Guide"
        description="Wheelbarrow guide for what it does, how to get it, how to use it, and whether it is worth buying in Grow a Garden 2."
        path="/wheelbarrow"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Wheelbarrow Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Legendary Gear. Costs 500,000 Sheckles or 129 Robux when it appears in the Gear Shop.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Wheelbarrow Quick Answer</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            ["What does it do?", "Wheelbarrow lets you carry another player and move them during team routes or night chaos."],
            ["How do you get it?", "Check George at the Gear Shop and buy it when the Legendary gear appears in stock."],
            ["Is it worth 500K?", "Yes for team play after your crops, Bunny, Deer, and basic defense are already stable."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white/80 p-3">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#F57F17]">{title}</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#4b4b4b]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-5 overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <tbody>
            {quickFacts.map(([label, value]) => (
              <tr key={label} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#777]">{label}</td>
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[#3c3c3c]/20 bg-white p-4 text-center">
          <Image src={gag2Images.gear("wheelbarrow-gag-2")} alt="Wheelbarrow gear icon" width={120} height={120} className="mx-auto rounded-xl" />
          <p className="mt-2 text-xs text-[#777]">Wheelbarrow gear icon</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.gear("wheelbarrow-scene")} alt="Wheelbarrow gameplay scene" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Use it with friends or during movement-heavy routes.</p>
        </div>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">What Does Wheelbarrow Do in GAG2?</h2>
      <p className="mb-3 text-sm leading-6 text-[#777]">
        Wheelbarrow is a player-carrying utility gear. Equip it near another player to carry and reposition them. It is best when you play with friends, move through crowded routes, or need a tool that helps your group coordinate around shops, gardens, and night defense.
      </p>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Use</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best For</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Action</th></tr></thead>
          <tbody>
            {[
              ["Carry players", "Playing with friends", "Equip it and use it around another player."],
              ["Move faster", "Crossing the map", "Use it when moving between shops, gardens, and raids."],
              ["Night coordination", "Group stealing or defense", "Pair it with Speed Mushroom, Bee, or Gnome routes."],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Get Wheelbarrow</h2>
      <ol className="space-y-2">
        {[
          "Go to George at the Gear Shop in the central hub.",
          "Check the shop when it restocks.",
          "Buy Wheelbarrow for 500,000 Sheckles or 129 Robux when it appears.",
          "Equip it from your gear inventory before using it around players.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Use Wheelbarrow</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {useSteps.map(([title, body], index) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
            <h3 className="mt-3 text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Buy These First</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <tbody>
            {beforeBuying.map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Should You Buy Wheelbarrow Now?</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Decision</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Your farm looks like this</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What to do</th></tr></thead>
          <tbody>
            {buyDecisions.map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8 rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">When Wheelbarrow is the wrong buy</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {buyBoundaries.map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Is Wheelbarrow Worth It?</h2>
      <div className="mb-6">
        <WheelbarrowWorth />
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] p-4">
          <h3 className="text-sm font-extrabold text-[#E53935]">Skip It For Now</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#E53935]/80">
            <li>Your best crops are still cheap.</li>
            <li>You do not have Bee, Gnome, or basic defense.</li>
            <li>500K would delay Deer stacks or better seeds.</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#4CAF50]/20 bg-[#E8F5E9] p-4">
          <h3 className="text-sm font-extrabold text-[#4CAF50]">Buy It Now</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#4CAF50]/80">
            <li>You play with friends often.</li>
            <li>Your farm recovers 500K quickly.</li>
            <li>You already have speed, growth, and night defense covered.</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Wheelbarrow FAQ</h2>
      <div className="grid gap-3">
        {faq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#3c3c3c]/20 bg-[#F9FAFB] p-5">
        <h3 className="mb-2 text-sm font-extrabold text-[#4b4b4b]">Next Guides</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/gears" className="font-semibold text-[#4CAF50] hover:underline">All Gears</Link>
          <Link href="/codes" className="font-semibold text-[#4CAF50] hover:underline">Active Codes</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Pet Buy Order</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/beginner-guide" className="font-semibold text-[#4CAF50] hover:underline">Beginner Route</Link>
        </div>
      </div>
    </main>
  );
}
