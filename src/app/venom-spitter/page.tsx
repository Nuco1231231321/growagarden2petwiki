import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venom Spitter Grow a Garden 2: Seed Price, Value & Buy Advice",
  description: "Venom Spitter guide for Grow a Garden 2 with seed source, reported price, value notes, mutation prep, and whether beginners should buy it.",
  alternates: { canonical: "https://growagarden2pet.wiki/venom-spitter" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Seeds", href: "/seeds" },
  { name: "Venom Spitter", href: "/venom-spitter" },
];

const facts = [
  ["Rarity", "Mythic"],
  ["Multi-harvest", "Yes"],
  ["Seed Shop price", "30,000,000 Sheckles"],
  ["Robux price", "1,195 Robux"],
  ["Restock chance", "0.475%"],
  ["Night trait", "Can spit venom at players at night"],
];

const buyDecisions = [
  ["Do not buy yet", "You are still fixing early pets, sprinklers, or first defense.", "Venom Spitter is too expensive to justify before the basic farm loop is already solved."],
  ["Maybe later", "Your farm is stable but 30M still feels like a major setback.", "Compare it against other late-game crops before locking money into one seed."],
  ["Good late-game buy", "You can recover 30M reliably and already defend valuable crops.", "Now it becomes a real late-game crop option instead of a fantasy purchase."],
];

const routeAdvice = [
  ["Before buying", "Confirm the shop restock and ask whether 30M would delay your real route upgrades."],
  ["After planting", "Treat it like a crop you must protect, not like a casual filler seed."],
  ["During strong weather or mutation windows", "Leave the best fruit in place and use calculator checks before selling."],
  ["During risky night windows", "Defense comes before greed. A stolen late-game crop ruins the whole point of buying it."],
];

const boundaries = [
  ["Not a beginner goal", "Do not chase Venom Spitter while Bunny, Deer, Bee, sprinklers, or stable crops are still missing."],
  ["Do not rely on the night trait alone", "Use real defense too. One crop effect is not enough protection for an expensive public-server plant."],
  ["Do not ignore alternatives", "Venus Fly Trap, Moon Bloom, Dragon's Breath, and other late-game crops can be better fits depending on your route."],
];

const comparisons = [
  ["Venus Fly Trap", "Safer late-game benchmark", "Useful when you want strong value plus a clearer established route."],
  ["Moon Bloom", "Weather-save target", "Better comparison when your route is built around saving crops for stronger boost windows."],
  ["Dragon's Breath", "Top-end value target", "Use this comparison if you are already deep into expensive endgame crops."],
  ["Pomegranate", "Lower late-game bridge", "A cleaner stepping stone if 30M still feels too heavy."],
];

const faq = [
  ["Should beginners buy Venom Spitter?", "No. Beginners get more progress from cheaper multi-harvest crops, early pets, sprinklers, and first defense."],
  ["When is Venom Spitter worth buying?", "When 30M no longer breaks your route and your garden can already protect expensive crops."],
  ["Should I save Venom Spitter for weather?", "Save the best harvests for strong value windows, but only if the crop is safe enough to hold."],
  ["Can Venom Spitter defend by itself?", "No. Treat the night effect as bonus value, not as a full defense plan."],
];

export default function VenomSpitterPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="venom-spitter"
        title="Venom Spitter Grow a Garden 2 Guide"
        description="Seed source, price notes, value checks, and buy advice for Venom Spitter in Grow a Garden 2."
        path="/venom-spitter"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Venom Spitter Grow a Garden 2 Guide</h1>
          <p className="mt-3 text-base font-semibold leading-7 text-[#4b4b4b]">
            Venom Spitter is a late-game Mythic seed. The real question is not whether it sounds strong. The real question is whether your farm can afford a 30M seed without delaying better route pieces or leaving the crop undefended.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Mythic", "Multi-harvest", "30M Sheckles", "Late-game buy"].map((item) => (
              <span key={item} className="rounded-full border border-[#C8E6C9] bg-[#F6FBF4] px-3 py-1.5 text-xs font-black text-[#2E3B2E]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
          <Image src={gag2Images.hero("seeds_plants")} alt="Grow a Garden 2 late-game seed plants" width={640} height={420} className="h-52 w-full object-cover" />
          <p className="border-t border-[#e5e7eb] px-4 py-3 text-xs font-semibold leading-5 text-[#777]">
            Buy this only when your route is already functioning as a late-game crop route.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Venom Spitter is worth considering only after your income, early pets, sprinklers, and basic night defense are stable. If 30M still feels painful, it is still too early.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Venom Spitter quick facts</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#777]">{label}</p>
              <p className="mt-1 text-sm font-black text-[#2E3B2E]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Should you buy Venom Spitter now?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Decision</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Your farm looks like this</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
              </tr>
            </thead>
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
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">How to use Venom Spitter well</h2>
        <ol className="mt-4 space-y-3">
          {routeAdvice.map((step, index) => (
            <li key={step[0]} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
              <div>
                <p className="text-sm font-extrabold text-[#4b4b4b]">{step[0]}</p>
                <p className="mt-1 text-sm leading-6 text-[#777]">{step[1]}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/calculator" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
            Open crop calculator
          </Link>
          <Link href="/values" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
            Compare crop values
          </Link>
          <Link href="/mutations" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
            Plan mutations
          </Link>
          <Link href="/night-stealing" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
            Set up night defense
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {boundaries.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What to compare before spending 30M</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {comparisons.map(([crop, role, note]) => (
            <section key={crop} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{crop}</h3>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</p>
              <p className="mt-2 text-sm leading-6 text-[#777]">{note}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Venom Spitter FAQ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {faq.map(([question, answer]) => (
            <section key={question} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{question}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{answer}</p>
            </section>
          ))}
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/seeds", title: "Seeds", detail: "See whether your current crop route should even move into this price tier yet.", emoji: "Seeds" },
          { href: "/values", title: "Crop Values", detail: "Compare Venom Spitter against the rest of the late-game field instead of judging it in isolation.", emoji: "Values" },
          { href: "/mutations", title: "Mutations", detail: "Use strong boost windows only when the crop is good enough and safe enough to hold.", emoji: "Mutations" },
          { href: "/night-stealing", title: "Night Defense", detail: "Protect expensive late-game crops before you try to squeeze extra value out of them.", emoji: "Defense" },
        ]}
      />
    </main>
  );
}
