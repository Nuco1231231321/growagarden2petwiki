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
  ["Top-end crop + safe plot", "Hold it", "If one boosted harvest changes your route and the crop can survive the night, the wait can be worth it."],
  ["Good crop but weak defense", "Harvest unless the event is immediate", "The value is real, but not real enough to lose the crop before cashing out."],
  ["Mid-tier crop on a stable farm", "Situational hold", "This works only when the event is strong and delaying one normal sale does not slow your route."],
  ["Cheap or replaceable crop", "Sell normally", "Do not turn filler crops into a mutation fantasy. Keep the money loop moving."],
];

const routine = [
  ["Start with the crop, not the event", "Ask whether the crop is expensive enough to justify waiting before you care which event is active."],
  ["Check defense before greed", "If the crop can be stolen or the plot is unstable, a safe harvest usually beats a perfect mutation dream."],
  ["Use weather as a multiplier, not a reason", "A strong event helps, but it does not magically make weak crops worth holding."],
  ["Harvest after the result is clear", "Once the value lands, take the win and restart the normal route instead of waiting for one more miracle."],
];

const cropChoices = [
  ["Recommended hold targets", "Venus Fly Trap, Moon Bloom, Dragon's Breath", "These are the crops that can justify a full hold-and-defend mutation plan."],
  ["Situational hold targets", "Pomegranate, Mango, Pineapple, Bamboo", "Only hold these when the farm is stable and the event is close enough to matter."],
  ["Usually bad hold targets", "Cheap starter filler crops", "If replacing the crop is easy, the mutation route is almost always overkill."],
];

const boundaries = [
  ["Do not hold crops you cannot protect", "A stolen crop is the clearest failure case for this whole route."],
  ["Do not force mutation greed on a weak farm", "If the next seed, pet, or defense buy still feels difficult, keep selling and reinvesting instead of waiting."],
  ["Do not keep waiting after you already won", "Once the mutation value lands, harvest it. Repeated waiting usually turns a good call into an unnecessary risk."],
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
      <p className="mt-2 text-sm text-[#777]">Use this page when your question is whether a crop is worth holding for extra value. If weather is already active and you only need event-by-event actions, open the weather page instead.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Use mutations as a value multiplier, not as your default money plan. Hold only when the crop is already expensive, the plot can protect it, and one boosted harvest matters more than another normal sale.
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Hold or sell framework</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Situation</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why this call wins</th>
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">How to make the call without overholding</h2>
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Which crops are actually worth holding for mutation value</h2>
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
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Step</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/weather" className="font-semibold text-[#4CAF50] hover:underline">Need the event-by-event action once weather starts?</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Holding crops but losing them at night?</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Still deciding which crops are worth buying in the first place?</Link>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/weather", title: "Weather Events", detail: "Open this next when the crop already passes the hold test and you need the live event move.", image: gag2Images.hero("mutations") },
          { href: "/night-stealing", title: "Night Defense", detail: "Use this next if mutation value keeps disappearing before you can cash out.", emoji: "Defense" },
          { href: "/seeds", title: "Seeds & Plants", detail: "Go here if the bigger question is still what to plant or skip before thinking about mutations.", image: gag2Images.seed("venus-fly-trap") },
        ]}
      />
    </main>
  );
}
