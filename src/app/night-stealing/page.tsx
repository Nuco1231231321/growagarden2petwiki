import Image from "next/image";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Night Stealing: How to Steal & Defend Your Garden",
  description: "Grow a Garden 2 night stealing guide with day/night cycle, stealing steps, defense setup, Bee, Gnome, traps, fences, and recovery tips.",
  alternates: { canonical: "https://growagarden2pet.wiki/night-stealing" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "PvP & Defense", href: "/night-stealing" },
  { name: "Night Stealing", href: "/night-stealing" },
];

const defenseSetup = [
  ["Starter defense", "Harvest valuable crops before night and place Gnome near your best plants."],
  ["Pet defense", "Use Bee before your garden starts holding expensive crops overnight."],
  ["Prop defense", "Add Bear Traps, fences, and Owner Door when your crop value justifies the cost."],
  ["Endgame defense", "Use Black Dragon or Ice Serpent when thieves target your garden often."],
];

const stealingVsDefending = [
  ["Playstyle", "Stealing", "Defending"],
  ["Goal", "Take high-value crops from weak gardens", "Keep your own boosted crops safe"],
  ["Best tools", "Speed Mushroom, Teleporter, Raccoon", "Bee, Gnome, Bear Traps, fences"],
  ["Risk", "Getting trapped or wasting night time", "Overspending before crops are valuable enough"],
  ["Best timing", "When targets are open and owner is distracted", "Before dusk and during weather nights"],
];

export default function NightStealingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="night-stealing"
        title="Grow a Garden 2 Night Stealing Guide"
        description="Night stealing guide for day/night cycle, how to steal, best defense setup, Bee, Gnome, Bear Traps, fences, and defensive pets."
        path="/night-stealing"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Night Stealing Guide</h1>
          <p className="text-sm text-[#777]">Harvest valuable crops before dark unless your defense is ready.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          At dusk, harvest your best crops or defend them with Gnome, Bee, traps, fences, or defensive pets. Only leave expensive crops out overnight when the reward is worth the risk.
        </p>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Day/Night Cycle</h2>
      <p className="mb-3 text-sm leading-6 text-[#777]">
        Day is for farming and upgrades. Dusk is the warning window. Night is when stealing and defense matter, so the best players decide before dark whether to harvest, defend, or raid.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Daytime", "Plant, grow, sell, and upgrade. Stealing is not the focus."],
          ["Dusk", "Use the warning window to harvest valuable crops or place defense."],
          ["Night", "Stealing is active. Defenses and movement tools matter."],
          ["Dawn", "Check losses, replace defenses, and replant valuable crops."],
        ].map(([phase, action]) => (
          <div key={phase} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
            <span className="text-xs font-extrabold text-[#4b4b4b]">{phase}</span>
            <p className="mt-1 text-xs text-[#777]">{action}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Steal</h2>
      <ol className="space-y-2">
        {[
          "Wait until night starts.",
          "Use movement tools such as Speed Mushroom when you need fast entry and exit.",
          "Avoid gardens with visible Bee, Gnome, traps, fences, Black Dragon, or Ice Serpent.",
          "Take high-value crops first, then leave before the owner reacts.",
          "Use Raccoon when your playstyle is focused on night stealing.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Defenses</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Defense</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Type</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">When to Use</th></tr></thead>
          <tbody>
            {[
              ["Gnome", "Gear", "First cheap defense. Place it near valuable crops."],
              ["Bee", "Pet", "First serious pet defense before expensive crops."],
              ["Bear Trap", "Prop", "Place at common entry paths and around late-game crops."],
              ["Fence + Owner Door", "Props", "Use when your garden holds valuable crops overnight."],
              ["Black Dragon / Ice Serpent", "Pets", "Use for high-value or endgame gardens."],
              ["Venus Fly Trap", "Crop", "Plant near valuable crops so the garden can punish thieves."],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Defense Setup</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {defenseSetup.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Stealing vs Defending</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <tbody>
            {stealingVsDefending.map((row, index) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                {row.map((cell) => (
                  index === 0 ? (
                    <th key={cell} className="bg-[#F9FAFB] px-3 py-2 text-left text-xs font-bold text-[#777]">{cell}</th>
                  ) : (
                    <td key={cell} className="px-3 py-2 text-xs text-[#777] first:font-bold first:text-[#4b4b4b]">{cell}</td>
                  )
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">30-Second Defense Setup</h2>
      <ol className="space-y-2">
        {[
          "Harvest all valuable crops when dusk starts.",
          "Place Gnome near the center of your valuable crops.",
          "If you own Bee, keep it active in the garden before night.",
          "Put Bear Traps near obvious entry paths.",
          "For long-term defense, fence the garden and add an Owner Door.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <RelatedGuides guides={[
        { href: "/pets", title: "Defense Pets", detail: "Bee, Black Dragon, and Ice Serpent", image: gag2Images.pet("bee") },
        { href: "/props", title: "Props & Crates", detail: "Bear Traps, fences, and Owner Doors", emoji: "Props" },
        { href: "/weather", title: "Weather Events", detail: "Defend crops during night events", emoji: "Weather" },
        { href: "/seeds", title: "Best Crops", detail: "Know which crops are worth defending", image: gag2Images.seed("venus-fly-trap") },
      ]} />
    </main>
  );
}
