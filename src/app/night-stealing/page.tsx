import Image from "next/image";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Images } from "@/lib/data";

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

const phasePlan = [
  ["Before dusk", "Decide whether the crop is worth defending or safer to sell now."],
  ["At dusk", "Place Gnome, prepare Bee, traps, or fences, and stop pretending you still have time."],
  ["During night", "Steal only weakly defended value, or stay home and defend if your own crops matter more."],
  ["At dawn", "Check losses, replant fast, and do not repeat a defense setup that already failed."],
];

const decisionRows = [
  ["Harvest now", "You do not have Bee, Gnome, traps, or expensive crops are fully exposed.", "Safe sale is better than losing the crop for no reason."],
  ["Defend and hold", "The crop is valuable and your defense is already online.", "Holding only makes sense when you can realistically keep the crop."],
  ["Go steal", "Your own plot is safe enough and you have movement tools for fast entry and exit.", "Night stealing is only worth it when the target is weaker than your route at home."],
  ["Skip stealing tonight", "Your own farm still needs attention or the target is heavily protected.", "A bad raid wastes the entire night window."],
];

const defenseSetup = [
  ["Starter defense", "Harvest valuable crops before night and use Gnome near your best plants."],
  ["First real pet defense", "Bee becomes worth it once losing one crop would hurt more than the pet cost."],
  ["Prop defense", "Add Bear Traps, fences, and Owner Door only when the crop value justifies that spend."],
  ["Endgame defense", "Use Black Dragon, Ice Serpent, and stronger layouts once thieves target you often."],
];

const stealingMistakes = [
  ["Stealing weak filler crops", "If the crop barely changes your route, the raid was not worth the risk."],
  ["Ignoring obvious defense", "Bee, Gnome, traps, and tight layouts are the reason many raids fail fast."],
  ["Overspending on defense too early", "Do not build a fortress around crops that are still easy to replace."],
  ["Leaving weather-boosted crops unprotected", "Night and weather together create the highest-value target on your plot."],
];

const compareTable = [
  ["Goal", "Take high-value crops from weak gardens", "Keep your own valuable crops safe until morning or harvest"],
  ["Best tools", "Speed Mushroom, Teleporter, Raccoon", "Bee, Gnome, Bear Traps, fences"],
  ["Main risk", "Wasting the night or getting blocked", "Spending too much on defense before the crop value supports it"],
  ["Best timing", "When the target is open and your own plot is already safe", "Before dusk and during high-value weather nights"],
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
          <p className="text-sm text-[#777]">Decide before dark whether to harvest, defend, or raid. Waiting too long is the usual mistake.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          If your best crops are exposed and defense is weak, harvest before dark. If your defense is ready, hold the crop. Only steal from other gardens when your own plot is already safe enough that you are not abandoning more value than you might gain.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Night plan by phase</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {phasePlan.map(([phase, action]) => (
            <div key={phase} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-4">
              <span className="text-xs font-extrabold text-[#4b4b4b]">{phase}</span>
              <p className="mt-1 text-sm leading-6 text-[#777]">{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What should you do tonight?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Decision</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Your situation</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Best defense setup</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {defenseSetup.map(([title, body]) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Stealing vs defending</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Playstyle", "Stealing", "Defending"],
                ...compareTable,
              ].map((row, index) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  {row.map((cell) =>
                    index === 0 ? (
                      <th key={cell} className="bg-[#F9FAFB] px-3 py-2 text-left text-xs font-bold text-[#777]">
                        {cell}
                      </th>
                    ) : (
                      <td key={cell} className="px-3 py-2 text-xs text-[#777] first:font-bold first:text-[#4b4b4b]">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Mistakes that ruin the night</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {stealingMistakes.map(([title, body]) => (
            <div key={title} className="rounded-xl border border-[#FFCDD2] bg-[#FFEBEE] p-4">
              <h3 className="text-sm font-extrabold text-[#E53935]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#E53935]/80">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">30-second defense setup</h2>
        <ol className="mt-3 space-y-2">
          {[
            "Harvest all valuable crops if the defense is not ready yet.",
            "Place Gnome near the center of the crops that matter most.",
            "Keep Bee active before dark if your plot is finally worth attacking.",
            "Drop traps near the obvious entry path, not in random filler spots.",
            "Fence and Owner Door only when the crop value supports that spend.",
          ].map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
              <span className="text-sm text-[#4b4b4b]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <RelatedGuides
        guides={[
          { href: "/pets", title: "Defense Pets", detail: "Use Bee, Black Dragon, and Ice Serpent only when your crop value really justifies them.", image: gag2Images.pet("bee") },
          { href: "/props", title: "Props & Crates", detail: "Add traps, fences, and Owner Door after the basic pet and gear route is ready.", emoji: "Props" },
          { href: "/weather", title: "Weather Events", detail: "Night risk matters more when weather makes the crop worth holding longer.", emoji: "Weather" },
          { href: "/seeds", title: "Best Crops", detail: "Know which crops are valuable enough to defend and which ones should just be sold.", image: gag2Images.seed("venus-fly-trap") },
        ]}
      />
    </main>
  );
}
