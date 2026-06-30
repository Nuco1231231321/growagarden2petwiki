import Image from "next/image";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Beginner Guide: First Hour Route & Fast Sheckles",
  description: "Start Grow a Garden 2 with a clear first-hour route: redeem codes, buy the right seeds, get Bunny and Deer, defend at night, and avoid costly mistakes.",
  alternates: { canonical: "https://growagarden2pet.wiki/beginner-guide" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Beginner Guide", href: "/beginner-guide" },
];

const route = [
  ["0-10 minutes", "Redeem TEAMGREENBEAN, plant every free seed, and stop buying single-harvest filler crops as soon as Sam offers a repeat-income option."],
  ["10-30 minutes", "Turn every sale back into Strawberry, Blueberry, Tomato, or Bamboo, then grab a Common Watering Can once it no longer slows seed buying."],
  ["30-60 minutes", "Buy Bunny first, Deer second, and only start thinking about defense once your garden is finally worth stealing from."],
];

const checklist = [
  ["Redeem the active code immediately", "Free seeds are your fastest early acceleration. Waiting even one shop cycle makes the first route slower."],
  ["Stand close to your plot", "Early progress is mostly movement efficiency. Losing time on long walks hurts more than tiny crop upgrades."],
  ["Buy repeat-income seeds before fun purchases", "Strawberry, Blueberry, Tomato, and Bamboo give you a money loop. Wheelbarrow, props, and novelty items do not."],
  ["Use water on the crop that earns the most", "Do not spread early gear everywhere. Put early watering on the crop that actually moves your Sheckles total."],
  ["Sell, then reinvest right away", "Early money should go back into more seed production, then Bunny, Deer, and only then extra utility."],
  ["Prepare for the first dangerous night", "If you are holding crops that would hurt to lose, harvest them before dark unless you already have Bee, Gnome, or other defense."],
];

const spending = [
  ["1", "Strawberry / Blueberry", "Keep the first loop alive", "Move out of starter filler crops and into repeat income immediately."],
  ["2", "Common Watering Can", "Speed up your best crop", "Only buy it once it no longer delays your next useful seed purchase."],
  ["3", "Bamboo", "Main early-to-mid income bridge", "This is where the route starts feeling stable instead of hand-to-mouth."],
  ["4", "Bunny", "Movement efficiency", "Bunny improves every future shop run, sell run, and escape."],
  ["5", "Deer", "Growth acceleration", "Deer is the easiest way to make the whole farm feel faster."],
  ["6", "Gnome or Bee", "First real defense", "Only move here once the crops on your plot are finally worth protecting."],
];

const mistakes = [
  ["Buying Wheelbarrow too early", "Wheelbarrow is useful later, but it should never come before a stable seed loop, Bunny, and Deer."],
  ["Leaving valuables out before you can defend them", "If losing the crop would slow your route, sell it before dark instead of gambling on a lucky night."],
  ["Spending on every shop refresh", "Not every restock is a must-buy. Skip weak crops and keep cash ready for a real upgrade."],
  ["Treating every crop the same", "Watering and defense should go to the crop that matters most, not to random low-value filler."],
];

const routeChoices = [
  ["If you still feel poor", "Stay on repeat-income seeds longer", "Keep looping Strawberry, Blueberry, Tomato, or Bamboo until the next upgrade no longer feels risky."],
  ["If you move too slowly", "Buy Bunny before more crop variety", "Movement fixes wasted time faster than adding a crop that barely changes income."],
  ["If your crop growth feels slow", "Buy Deer before novelty utility", "Deer helps the whole route. Decorative utility does not."],
  ["If night losses start happening", "Harvest before dark or buy defense", "Do not pretend your garden is ready for overnight value unless you can actually protect it."],
];

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="beginner-guide"
        title="Grow a Garden 2 Beginner Guide"
        description="Beginner route for the first hour, early spending order, and which mistakes to avoid in Grow a Garden 2."
        path="/beginner-guide"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Beginner Guide</h1>
          <p className="text-sm text-[#777]">Follow this route to reach a stable first-hour farm without wasting Sheckles on the wrong upgrades.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          The safest beginner route is: redeem the code, move into repeat-income seeds fast, buy Bunny before slow utility, buy Deer before late-game dreams, and harvest valuable crops before night unless you already have defense.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">First-Hour Route</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {route.map(([time, action]) => (
            <div key={time} className="rounded-xl border border-[#dfead8] bg-[#fbfdf9] p-4">
              <p className="text-sm font-black text-[#4CAF50]">{time}</p>
              <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What to Do First</h2>
        <div className="space-y-3">
          {checklist.map(([title, body], index) => (
            <div key={title} className="flex gap-3 rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
              <div>
                <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Spending Priority</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Order</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Buy</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">When it matters</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why it beats the alternatives</th>
              </tr>
            </thead>
            <tbody>
              {spending.map((row) => (
                <tr key={row[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                  <td className="px-3 py-2 font-extrabold text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#4b4b4b]">{row[2]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">When to Change the Route</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {routeChoices.map(([caseTitle, answer, reason]) => (
            <div key={caseTitle} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{caseTitle}</p>
              <h3 className="mt-2 text-sm font-extrabold text-[#2E3B2E]">{answer}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Beginner Mistakes That Actually Slow the Route</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {mistakes.map(([bad, fix]) => (
            <div key={bad} className="rounded-xl border border-[#E53935]/20 bg-[#FFEBEE] p-3">
              <p className="text-xs font-extrabold text-[#E53935]">{bad}</p>
              <p className="mt-1 text-xs leading-5 text-[#E53935]/80">{fix}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">What not to copy blindly</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Do not rush late-game crops</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">
              If your garden still struggles to afford Bunny, Deer, or basic watering, late-game crop talk is not your route yet. Stay on stable income longer.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">Do not leave expensive crops out as a beginner</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">
              Night defense only matters after your plot is actually worth attacking. Before that, selling safely is better than pretending you are already in the late game.
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/codes", title: "Codes", detail: "Claim free seed rewards before spending your first Sheckles.", image: gag2Images.hero("codes") },
          { href: "/seeds", title: "Seeds & Plants", detail: "Move from the first crop loop into Bamboo, Pineapple, and late-game upgrades.", image: gag2Images.seed("seed-shop") },
          { href: "/pets", title: "Pets", detail: "See why Bunny and Deer come before most other pet buys.", image: gag2Images.pet("bunny") },
          { href: "/weather", title: "Weather Events", detail: "Learn when to stop harvesting and when to leave crops planted.", image: gag2Images.hero("mutations") },
          { href: "/night-stealing", title: "Night Defense", detail: "Protect the first crops that would actually hurt to lose.", emoji: "Defense" },
          { href: "/tier-list", title: "Tier List", detail: "Compare the best beginner buys without guessing.", image: gag2Images.hero("all_pets") },
        ]}
      />
    </main>
  );
}
