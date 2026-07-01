import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import {
  overallBestPicks,
  quickAnswers,
  rowsByCategory,
  rowsByTier,
  tierFaq,
  type CompetitorTierRow,
  type Tier,
} from "@/lib/tier-list-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Tier List: Best Pets, Seeds, Plants & Gears",
  description: "Grow a Garden 2 tier list for the best pets, seeds, plants, gears, beginner picks, F2P route, and what to buy first.",
  alternates: { canonical: "https://growagarden2pet.wiki/tier-list" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tier List", href: "/tier-list" },
];

const tierStyles: Record<Tier, string> = {
  S: "border-[#f4d77b] bg-[#fff8e1] text-[#9a6b00]",
  A: "border-[#b8dcc2] bg-[#eaf7ed] text-[#2d6a3f]",
  B: "border-[#bfdbfe] bg-[#eff6ff] text-[#1d4ed8]",
  C: "border-[#e5e7eb] bg-[#f9fafb] text-[#4b5563]",
  D: "border-[#fecaca] bg-[#fff1f2] text-[#be123c]",
};

const decisionRoutes = [
  {
    title: "I need a first pet route",
    href: "/pets",
    recommendation: "Open Pets if your next decision is Bunny, Deer, Bee, or a first defense pet.",
    avoid: "Do not use the overall ranking alone if you are still choosing the first few upgrades.",
  },
  {
    title: "I need a crop money route",
    href: "/seeds",
    recommendation: "Open Seeds if your question is what to plant next, what to skip, and when to stop chasing shiny restocks.",
    avoid: "Do not treat top-end plant ranks as automatic next buys.",
  },
  {
    title: "I need gear buy order",
    href: "/gears",
    recommendation: "Open Gears if you are choosing between sprinklers, defense tools, and utility upgrades.",
    avoid: "Do not use the tier page as a full shopping order for gear.",
  },
  {
    title: "I need a first-hour route",
    href: "/beginner-guide",
    recommendation: "Open Beginner Guide if you want step order, not just strength rankings.",
    avoid: "Do not read this page like a full walkthrough. It is a decision hub first.",
  },
] as const;

const tierWarnings = [
  "This page tells you what is strong overall, not what every account should buy next.",
  "If you are early game, open the linked route page instead of copying the top row blindly.",
  "The right move is usually to leave this page fast and open the system you are actually deciding on.",
] as const;

const categorySummaries = [
  {
    title: "Seeds and plants",
    intro: "Use this section to see which crops scale best overall, then leave for the Seeds page if you still need the actual buy order.",
    recommend: "Dragon's Breath, Moon Bloom, Venus Fly Trap, and Bamboo are the most useful anchor names to know here.",
    notRecommend: "Do not turn an overall rank into a blind next purchase.",
    href: "/seeds",
  },
  {
    title: "Pets",
    intro: "Pet ranking mixes beginner support, defense, mutation value, and night pressure, so use it to orient yourself, not to replace the pet guide.",
    recommend: "Bunny, Deer, Bee, Unicorn, and Raccoon are the names most players compare first.",
    notRecommend: "Do not skip straight to niche endgame pets when your route still lacks basics.",
    href: "/pets",
  },
  {
    title: "Gears",
    intro: "Gear ranks are most useful for spotting whether growth, defense, or utility is the stronger upgrade path.",
    recommend: "Super Sprinkler, Rare Sprinkler, Gnome, and Wheelbarrow are the main gear names worth checking first.",
    notRecommend: "Do not let high-rank utility distract you from the route you are actually missing.",
    href: "/gears",
  },
] as const;

function TierRows({
  title,
  rows,
  tiers,
  links,
}: {
  title: string;
  rows: CompetitorTierRow[];
  tiers: readonly Tier[];
  links: { href: string; label: string }[];
}) {
  return (
    <section className="mt-10">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-black tracking-tight text-soil">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#d7e5d3] bg-white px-3 py-1 text-xs font-black text-garden hover:border-garden"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {rowsByTier(rows, tiers).map(({ tier, rows: tierRows }) => (
          <div key={tier} className="rounded-2xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xl font-black ${tierStyles[tier]}`}>{tier}</span>
              <div className="grid flex-1 gap-2">
                {tierRows.map((row) => (
                  <Link
                    key={`${row.category}-${row.item}`}
                    href={row.href}
                    className="grid gap-1 rounded-xl border border-[#edf2ea] bg-[#fbfdf9] p-3 transition hover:border-garden sm:grid-cols-[160px_160px_1fr] sm:items-start"
                  >
                    <p className="text-sm font-black text-soil">{row.item}</p>
                    <p className="text-xs font-black uppercase tracking-[0.08em] text-garden">{row.role}</p>
                    <p className="text-sm font-semibold leading-6 text-charcoal">{row.reason}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TierListPage() {
  const seedRows = rowsByCategory("Plant").concat(rowsByCategory("Seed"));
  const petRows = rowsByCategory("Pet");
  const gearRows = rowsByCategory("Gear");

  return (
    <main className="bg-gradient-to-b from-[#f6fbf4] via-white to-white">
      <GuideJsonLd
        id="tier-list"
        title="Grow a Garden 2 Tier List"
        description="Best pets, seeds, plants, gears, beginner picks, F2P route, and what to buy first in Grow a Garden 2."
        path="/tier-list"
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <section className="rounded-[28px] border border-[#dce8d8] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">GAG2 picks</p>
          <h1 className="mt-2 max-w-4xl text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
            Grow a Garden 2 Tier List
          </h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-charcoal">
            Use this page to decide which system you should open next: pets, seeds, gears, or the beginner route. This is a ranking hub, not a full walkthrough for every purchase path in the game.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {quickAnswers.map((answer) => (
              <Link
                key={answer.title}
                href={answer.href}
                className="rounded-2xl border border-[#d7e5d3] bg-[#f8fbf6] p-4 transition hover:-translate-y-0.5 hover:border-garden hover:bg-white"
              >
                <h2 className="text-base font-black text-soil">{answer.title}</h2>
                <p className="mt-2 text-sm font-black leading-6 text-garden">{answer.picks}</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-ash">{answer.detail}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          {decisionRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-garden"
            >
              <h2 className="text-xl font-black text-soil">{route.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-charcoal">{route.recommendation}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ash">{route.avoid}</p>
            </Link>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-[#dce8d8] bg-[#f8fbf6] p-5">
          <h2 className="text-2xl font-black tracking-tight text-soil">How to use this tier list without getting the wrong answer</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {tierWarnings.map((warning) => (
              <div key={warning} className="rounded-2xl border border-[#d7e5d3] bg-white p-4">
                <p className="text-sm font-semibold leading-6 text-charcoal">{warning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Overall Best Picks</h2>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-charcoal">
            These are the strongest overall names across the game. They are not automatically the right next purchase for your current account.
          </p>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Pick</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Best For</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Why</th>
                </tr>
              </thead>
              <tbody>
                {overallBestPicks.map(([rank, pick, category, bestFor, why]) => (
                  <tr key={rank} className="border-b border-[#edf2ea] last:border-0">
                    <td className="px-4 py-3 text-lg font-black text-garden">{rank}</td>
                    <td className="px-4 py-3 font-black text-soil">{pick}</td>
                    <td className="px-4 py-3 font-semibold text-charcoal">{category}</td>
                    <td className="px-4 py-3 font-semibold text-charcoal">{bestFor}</td>
                    <td className="px-4 py-3 text-sm font-medium leading-6 text-ash">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-3">
          {categorySummaries.map((summary) => (
            <Link
              key={summary.href}
              href={summary.href}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-garden"
            >
              <h2 className="text-xl font-black text-soil">{summary.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-charcoal">{summary.intro}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-garden">{summary.recommend}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ash">{summary.notRecommend}</p>
            </Link>
          ))}
        </section>

        <TierRows
          title="Seeds & Plants Tier List"
          rows={seedRows}
          tiers={["S", "A"]}
          links={[
            { href: "/seeds", label: "Seeds guide" },
            { href: "/values", label: "Crop values" },
            { href: "/calculator", label: "Calculator" },
          ]}
        />

        <TierRows title="Pets Tier List" rows={petRows} tiers={["S", "A"]} links={[{ href: "/pets", label: "Pets guide" }]} />

        <TierRows
          title="Gear Tier List"
          rows={gearRows}
          tiers={["S", "A"]}
          links={[
            { href: "/gears", label: "Gears guide" },
            { href: "/wheelbarrow", label: "Wheelbarrow" },
          ]}
        />

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Leave this page when your question becomes specific</h2>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-charcoal">
            The moment your question turns into a real route choice, open the matching guide below and stop using the hub as a substitute.
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {decisionRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-garden">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-garden">{route.title}</p>
                <h3 className="mt-2 text-base font-black text-soil">{route.recommendation}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ash">{route.avoid}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Tier List FAQ</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {tierFaq.map(([question, answer]) => (
              <section key={question} className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
                <h3 className="text-sm font-black text-soil">{question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ash">{answer}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
