import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Mutations: Crop Value Strategy & Weather Actions",
  description: "Use Grow a Garden 2 mutations to increase crop value. Learn which crops to save, how to use weather, and when to harvest or defend.",
  alternates: { canonical: "https://growagarden2pet.wiki/mutations" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Mutations", href: "/mutations" },
];

const mutationPlan = [
  ["Aurora", "Hold your best crops", "Aurora is a save-and-check event. Stop routine harvesting and wait to see which valuable plants actually improve."],
  ["Gold / Midas-style", "Prioritize your highest-value harvests only", "Do not waste the event on filler crops if you already have late-game plants growing."],
  ["Rainbow", "Save the crop, not just the harvest timer", "Rainbow is where Unicorn-style mutation routes matter. Keep the expensive crop alive long enough to benefit."],
  ["Electric", "Leave the crop planted", "Electric-style value spikes are strongest when you resist the urge to harvest too early."],
  ["Frozen / Snowfall", "Use growth gear while the event lasts", "Snowfall-style value is better when more good crops are still growing during the window."],
  ["Bloodlit", "Defend first, then greed second", "If the mutation window overlaps with stealing risk, your first job is protecting the crop before dreaming about max value."],
  ["Starstruck", "Check expensive crops after the sky clears", "Starfall-style value is strongest when you leave the best ripe crops untouched until the event is done."],
];

const routine = [
  ["Plant before weather, not during panic", "Your best mutation crops should already be in the ground before the event arrives."],
  ["Use growth tools on crops worth saving", "Sprinklers and growth support belong on the crop you plan to hold, not on filler plants."],
  ["Stop harvesting when the event starts", "The fastest way to throw away mutation value is harvesting too early just because the crop looks ready."],
  ["Defend night overlap before chasing max value", "If an expensive crop can get stolen, a safe smaller payout beats a perfect mutation dream that disappears overnight."],
  ["Harvest after the boost lands", "Sell only after you have confirmed the event result, especially on your best crops."],
];

const cropChoices = [
  ["Worth saving early", "Bamboo and Pineapple", "Save them only when your route is already stable. Do not freeze your whole farm for small gains."],
  ["Worth saving mid-game", "Mango and Pomegranate", "These start making sense when a boosted harvest is large enough to matter more than one extra normal cycle."],
  ["Worth saving late-game", "Venus Fly Trap, Moon Bloom, Dragon's Breath", "These are the crops mutation greed is actually built around."],
  ["Usually not worth overplaying", "Cheap starter filler crops", "If the crop is easy to replace, just keep the farm moving instead of roleplaying a late-game mutation route too early."],
];

const boundaries = [
  ["Do not hold crops you cannot protect", "A mutated crop that gets stolen is worse than a safe sale."],
  ["Do not force mutation greed on a weak farm", "If your income loop still breaks easily, keep selling and reinvesting instead of sitting on crops for low-value event chances."],
  ["Do not treat every weather event the same", "Some events are worth waiting through. Others are only worth minor adjustments unless your crop value is already high."],
];

export default function MutationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="mutations"
        title="Grow a Garden 2 Mutations Guide"
        description="Mutation strategy for crop value, weather timing, and when to hold or harvest crops in Grow a Garden 2."
        path="/mutations"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Mutations Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Mutations matter most when you already have crops worth saving, a reason to wait, and enough defense to stop that value from disappearing overnight.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Use mutations as a value multiplier, not as your basic money plan. Save your best crops for the right weather window, defend them first, then harvest only after the boost lands.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">When a mutation route is actually worth it</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Do it</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">You already have late-game crops, your farm can defend itself, and one boosted harvest is worth more than another normal cycle.</p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Wait</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">You are still building income with mid-tier crops and every ordinary sale still matters more than event gambling.</p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Avoid it</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">You cannot defend the crop or the event is not strong enough to justify locking up your best plant.</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Mutation Action Table</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Mutation / event type</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why this route works</th>
              </tr>
            </thead>
            <tbody>
              {mutationPlan.map(([name, action, reason]) => (
                <tr key={name} className="border-b border-[#3c3c3c]/10 last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{name}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{action}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Mutation Routine</h2>
        <ol className="space-y-3">
          {routine.map((step, index) => (
            <li key={step[0]} className="flex gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
              <div>
                <h3 className="text-sm font-extrabold text-[#2E3B2E]">{step[0]}</h3>
                <p className="mt-1 text-sm leading-6 text-[#777]">{step[1]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Which crops are worth saving</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {cropChoices.map(([title, crops, body]) => (
            <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#4b4b4b]">{crops}</p>
              <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Boundaries that stop bad mutation habits</h2>
        <div className="mt-3 grid gap-3">
          {boundaries.map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/weather" className="font-semibold text-[#4CAF50] hover:underline">Weather Events</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Best Crops</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Mutation Pets</Link>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/weather", title: "Weather Events", detail: "Use the right event timing instead of treating every mutation window the same.", image: gag2Images.hero("mutations") },
          { href: "/seeds", title: "Seeds & Plants", detail: "Check which crops are strong enough to justify a hold-and-defend mutation plan.", image: gag2Images.seed("venus-fly-trap") },
          { href: "/pets", title: "Pets", detail: "See when Unicorn or Golden Dragonfly is actually worth the slot.", image: gag2Images.pet("unicorn") },
          { href: "/night-stealing", title: "Night Defense", detail: "Protect the crop before you chase the perfect boosted sale.", emoji: "Defense" },
        ]}
      />
    </main>
  );
}
