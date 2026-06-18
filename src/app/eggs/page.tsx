import Image from "next/image";
import { gag2Eggs, gag2Pets, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

const petImageKey: Record<string, string> = {};
gag2Pets.forEach((p) => { petImageKey[p.name] = p.imageKey; });
petImageKey["Big Bee"] = "bee";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Eggs Guide: Common & Epic Egg Hatch Odds",
  description: "Complete GAG2 egg hatching guide: Common and Epic egg pet odds, how to get eggs from Guild rewards, hatch times, and which pets you can get from each egg type.",
  alternates: { canonical: "https://growagarden2pet.wiki/eggs" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pets & Eggs", href: "/pets" },
  { name: "Eggs", href: "/eggs" },
];

const eggQuickAnswers = [
  ["How to get eggs", "Join or create a guild, help the guild earn weekly reward points, then claim eggs from guild rewards."],
  ["Where eggs come from", "Eggs come from guild rewards, then you place them in your garden and wait for the hatch."],
  ["Which egg is best", "Epic Egg is the stronger target when available; Common Egg is the early guild reward path."],
];

const eggSteps = [
  ["Join or create a guild", "Use an invite or create your own guild, then start contributing crops."],
  ["Earn guild reward progress", "Guild progress comes from crop weight, so heavier crops help your team earn better rewards."],
  ["Claim and place the egg", "Put the egg in your garden after you receive it from rewards."],
  ["Wait for it to hatch", "Check the egg after the hatch timer finishes and plan your next pet slot around the result."],
];

const eggSummary = [
  ["Common Egg", "Deer, Bee, Unicorn, Raccoon", "Early pet collection and first guild rewards", "New players and guild starters"],
  ["Epic Egg", "Deer, Unicorn, Bee, Big Bee", "Higher-value pet odds when available", "Players targeting stronger pets"],
];

const faq = [
  ["Can you buy eggs in Grow a Garden 2?", "No. Eggs are earned from guild rewards, then placed in your garden to hatch."],
  ["What pets come from Common Egg?", "Common Egg can hatch Frog, Bunny, Deer, Robin, Bee, Golden Dragonfly, Unicorn, or Raccoon."],
  ["What is the best egg reward?", "Unicorn, Raccoon, Bee, and Golden Dragonfly are the main high-value Common Egg outcomes."],
  ["Do eggs come from guild rewards?", "Yes. Guild rewards are the egg path, so joining an active guild matters if you want more hatches."],
];

export default function EggsPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
   <GuideJsonLd
    id="eggs"
    title="Grow a Garden 2 Egg Hatching Guide"
    description="Egg guide for how to get eggs, Common Egg odds, Epic Egg pets, and which egg rewards matter in Grow a Garden 2."
    path="/eggs"
    breadcrumbs={breadcrumbs}
   />
   <Breadcrumbs items={breadcrumbs} />
   <div className="flex items-center gap-4 mb-6">
    <span className="text-5xl">🥚</span>
    <div>
     <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Egg Hatching Guide</h1>
     <p className="text-sm text-[#777]">Get eggs from Guild rewards · Place in garden · Wait to hatch</p>
    </div>
   </div>

   <section className="grid gap-3 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5 sm:grid-cols-3">
    {eggQuickAnswers.map(([title, body]) => (
     <div key={title} className="rounded-xl bg-white p-3">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{title}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-[#4b4b4b]">{body}</p>
     </div>
    ))}
   </section>

   <div className="p-4 rounded-xl bg-[#C8E6C9]/50 mb-6">
    <p className="text-sm font-bold text-[#4b4b4b]">How to Get Eggs</p>
    <p className="mt-1 text-sm text-[#777]">
     In GAG2, eggs are obtained exclusively from <strong>Guild rewards</strong>. When your guild earns enough points from
     harvest weight (1 point per gram), you receive eggs. Place them in your garden and wait for them to hatch. There is
     no egg shop like in the original Grow a Garden.
    </p>
   </div>

   <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Get Eggs in GAG2</h2>
   <ol className="grid gap-3 sm:grid-cols-2">
    {eggSteps.map(([title, body], index) => (
     <li key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
      <h3 className="mt-3 text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
     </li>
    ))}
   </ol>

   <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Egg Rewards</h2>
   <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
    <table className="w-full text-sm">
     <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Egg</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best result</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why it matters</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Who should hatch it</th></tr></thead>
     <tbody>
      {eggSummary.map((row) => (
       <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
        <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
        <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
        <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
        <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   {gag2Eggs.map((egg) => (
    <section key={egg.name} className="mt-8">
     <div className="flex items-center gap-3 mb-3">
      <span className="text-3xl">{egg.emoji}</span>
      <div>
       <h2 className="text-xl font-extrabold text-[#2E3B2E]">{egg.name}</h2>
       <p className="text-sm text-[#777]">Source: {egg.source} · Rarity: {egg.rarity}</p>
      </div>
     </div>
     <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
      <table className="w-full text-sm">
       <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Pet</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Drop Rate</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Visual</th></tr></thead>
       <tbody>
        {egg.pets.map((p) => (
         <tr key={p.name} className="border-b border-[#3c3c3c]/10 last:border-0">
          <td className="px-3 py-2 flex items-center gap-2">
           {petImageKey[p.name] && <Image src={gag2Images.pet(petImageKey[p.name])} alt={p.name} width={28} height={28} className="rounded-lg" />}
           <span className="font-bold text-[#4b4b4b]">{p.name}</span>
          </td>
          <td className="px-3 py-2 font-mono text-sm font-extrabold text-[#4CAF50]">{p.odds}</td>
          <td className="px-3 py-2">
           <div className="h-2 rounded-full bg-[#e5e7eb] w-32">
            <div className="h-2 rounded-full bg-garden" style={{ width: p.odds }} />
           </div>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </section>
   ))}

   <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Common Egg Odds</h2>
   <p className="text-sm leading-6 text-[#777]">
    Common Egg is the first egg most players should understand because it connects directly to early guild rewards and can hatch useful starter pets, growth pets, defense pets, and rare high-value pets.
   </p>

   <div className="mt-6 p-4 rounded-xl bg-[#FFF8E1] border-2 border-[#FFC107]/40">
    <p className="text-sm font-extrabold text-[#F57F17]">💡 Pro Tip</p>
    <p className="mt-1 text-sm text-[#F57F17]/80">
      Epic Egg is not yet released. Save your Guild points. When it launches, the 30% Unicorn and 60% Deer odds make it
      significantly better than Common Egg for building your pet collection. Common Egg&apos;s best realistic value is Deer (20%)
      and the tiny chance of Unicorn (0.3%) or Raccoon (0.2%).
    </p>
   </div>

   <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Egg FAQ</h2>
   <div className="grid gap-3">
    {faq.map(([q, a]) => (
     <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
      <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
     </section>
    ))}
   </div>

   <RelatedGuides guides={[
    { href: "/pets", title: "All Pets", detail: "Prices, abilities, rarities & tier list", image: gag2Images.pet("bunny") },
    { href: "/guild", title: "Guilds Guide", detail: "How to earn egg rewards", emoji: "🏛️" },
    { href: "/badges", title: "Badges & Achievements", detail: "23 badges to unlock", emoji: "🏆" },
   ]} />
  </main>
 );
}
