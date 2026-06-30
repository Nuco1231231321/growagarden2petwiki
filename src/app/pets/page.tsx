import Image from "next/image";
import Link from "next/link";
import { gag2Images, gag2Pets } from "@/lib/data";
import type { Metadata } from "next";
import { PetFilter } from "@/components/pet-filter";
import { PetBuyOrder } from "@/components/pet-buy-order";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Pets: All 13 Prices, Abilities, Rarities & Tier List",
  description: "All 13 GAG2 pets with prices, abilities, rarities, tier rankings, first pet route, best pets by role, and pet slot priority.",
  alternates: { canonical: "https://growagarden2pet.wiki/pets" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pets & Eggs", href: "/pets" },
  { name: "Pets", href: "/pets" },
];

const tierBg: Record<string, string> = {
  S: "bg-[#FFF8E1] text-[#FFC107]",
  A: "bg-[#E8F5E9] text-[#4CAF50]",
  B: "bg-[#E3F2FD] text-[#2196F3]",
  C: "bg-[#F5F5F5] text-[#777]",
};

const route = [
  ["1", "Bunny", "20,000", "Buy first", "Bunny fixes the biggest beginner problem: wasted travel time."],
  ["2", "Deer", "50,000", "Buy second", "Deer speeds up crop growth, so your whole farm gets better instead of only one task."],
  ["3", "Bee", "1,000,000", "Buy when crops finally matter", "Bee is the first pet that changes how safe it feels to leave expensive plants out."],
  ["4", "Unicorn or Golden Dragonfly", "3M+", "Mutation route only", "These matter after your farm already makes money and survives nights reliably."],
  ["5", "Raccoon or Ice Serpent", "5M+", "Specialized late-game pick", "Raccoon is for active raiding, while Ice Serpent is for protecting high-value plots."],
];

const goalPicks = [
  ["Best first pet", "Bunny", "Pick Bunny if you still waste too much time running between plot, shop, and sell point."],
  ["Best early growth pet", "Deer", "Deer is the easiest pet to feel every few minutes because your farm just keeps moving faster."],
  ["Best first defense pet", "Bee", "Bee is the first pet that is actually worth buying before you start holding expensive crops overnight."],
  ["Best mutation pet", "Unicorn", "Only treat Unicorn as a priority after your crop route and defense are already stable."],
  ["Best stealing pet", "Raccoon", "Raccoon is strong only if you actively play night stealing, not if you are still in a starter income loop."],
  ["Best endgame defense pet", "Ice Serpent", "Ice Serpent belongs on gardens that already have crops worth protecting, not on weak early farms."],
];

const routeAdjustments = [
  ["If you still feel slow", "Do not skip Bunny", "Even if another pet looks stronger on paper, Bunny usually gives the cleanest early upgrade."],
  ["If crops grow too slowly", "Buy Deer before niche utility", "Deer helps every harvest cycle. Cute side options do not."],
  ["If you are losing crops at night", "Move Bee up", "Once a stolen crop would actually hurt, defense becomes more important than collecting fancy rare pets."],
  ["If you only farm and never raid", "Skip Raccoon longer", "Raccoon is excellent for active stealing, but it is not a must-buy for quiet farming accounts."],
];

const slotPlan = [
  ["3 starter slots", "Bunny, Deer, Bee", "This gives movement, growth, and the first real layer of protection."],
  ["4th slot", "Second Deer or your first mutation pet", "Take another Deer if your farm still needs growth, or step into Unicorn if your route already revolves around event harvests."],
  ["5th slot", "Unicorn, Golden Dragonfly, Raccoon, or Ice Serpent", "Choose the pet that matches your actual route instead of buying whatever looks rarest."],
];

const skipAdvice = [
  ["Do not rush rare pets before your money loop works", "A shiny hatch is not a beginner route. If you still struggle to afford seed upgrades, your next pet should solve a real route problem first."],
  ["Do not treat every S-tier pet as universal", "Some top pets are only top when you already have mutation farming, heavy defense, or active night stealing."],
];

const faq = [
  ["What pet should beginners buy first?", "Buy Bunny first for movement, then Deer for growth. That route helps more accounts than rushing a rare hatch or a niche late-game pet."],
  ["Is Bee worth buying?", "Yes, but only once your garden is finally worth defending. Bee matters when losing a crop would actually cost you progress."],
  ["Is Unicorn good in Grow a Garden 2?", "Yes, but Unicorn is stronger as a mutation route upgrade than as a first progression pet."],
  ["What if I never do night stealing?", "You can push Raccoon later. Stay on Bunny, Deer, Bee, and your crop route until you actually care about raiding value."],
];

export default function PetsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="pets"
        title="Grow a Garden 2 Pets Guide"
        description="All Grow a Garden 2 pets with tier list, best first pets, prices, abilities, roles, and pet buying order."
        path="/pets"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.pet("bunny")} alt="Bunny pet" width={64} height={64} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Pets Guide</h1>
          <p className="text-sm text-[#777]">All {gag2Pets.length} pets, plus the buying order that helps the most before you waste money on flashy but badly timed picks.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          The safest pet route is Bunny first, Deer second, and Bee when your crops finally become worth defending. Rare mutation or raiding pets should come later unless your whole route already revolves around that playstyle.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Pet Buying Order</h2>
          <Link href="/tier-list" className="text-sm font-black text-[#4CAF50] underline decoration-2 underline-offset-4">
            Full Grow a Garden 2 tier list
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-[#fbfdf9]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Order</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Pet</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Cost</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">When to buy</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why this route works</th>
              </tr>
            </thead>
            <tbody>
              {route.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{row[2]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[3]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-extrabold text-[#2E3B2E]">Pet Tier List Snapshot</h2>
          <Link href="/tier-list" className="text-sm font-black text-[#4CAF50] underline decoration-2 underline-offset-4">
            Full Grow a Garden 2 tier list
          </Link>
        </div>
        <div className="space-y-2">
          {(["S", "A", "B", "C"] as const).map((tier) => {
            const pets = gag2Pets.filter((pet) => pet.tier === tier);
            return (
              <div key={tier} className="flex items-start gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${tierBg[tier]}`}>{tier}</span>
                <div className="flex flex-wrap gap-2">
                  {pets.map((pet) => (
                    <span key={pet.name} className="text-sm font-semibold text-[#4b4b4b]">
                      {pet.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Pets by Goal</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {goalPicks.map(([goal, pet, reason]) => (
            <div key={goal} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#4CAF50]">{goal}</span>
              <p className="mt-1 text-base font-extrabold text-[#2E3B2E]">{pet}</p>
              <p className="mt-1 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">When to Change the Pet Route</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {routeAdjustments.map(([caseTitle, answer, reason]) => (
            <div key={caseTitle} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{caseTitle}</p>
              <h3 className="mt-2 text-sm font-extrabold text-[#2E3B2E]">{answer}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Pet Slot Priority</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {slotPlan.map(([title, body, reason]) => (
            <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#4b4b4b]">{body}</p>
              <p className="mt-2 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">What not to copy blindly</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {skipAdvice.map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Pet Database</h2>
        <p className="mb-3 text-sm leading-6 text-[#777]">
          Use the database when you already know which role you are filling. If you are still deciding what to buy next, use the route sections above first.
        </p>
        <PetFilter />
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Pet FAQ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {faq.map(([q, a]) => (
            <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
            </section>
          ))}
        </div>
      </section>

      <PetBuyOrder />

      <RelatedGuides
        guides={[
          { href: "/eggs", title: "Egg Hatching", detail: "See which hatch outcomes are actually useful instead of only chasing rare pets.", emoji: "Eggs" },
          { href: "/beginner-guide", title: "Beginner Guide", detail: "Match Bunny and Deer timing to your first-hour spending route.", emoji: "Start" },
          { href: "/seeds", title: "Seeds & Plants", detail: "Use better crop income before forcing expensive late-game pet buys.", image: gag2Images.seed("seed-shop") },
          { href: "/night-stealing", title: "Night Stealing", detail: "Know when Bee, Raccoon, and defense pets really start to matter.", emoji: "Defense" },
          { href: "/weather", title: "Weather Events", detail: "See when Unicorn or Golden Dragonfly actually changes your harvest route.", emoji: "Weather" },
        ]}
      />
    </main>
  );
}
