import Image from "next/image";
import { gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { SeedFilter } from "@/components/seed-filter";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "All GAG2 seeds ranked: prices, harvest types, Acorn drop rate, Venus Fly Trap defense, Moon Bloom, and best crops for early, mid and late game.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

export default function SeedsPage() {
 return (
  <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
   <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">Seeds & Plants Guide</h1>
   <p className="mt-2 text-sm text-[#777]">From Sam's Seed Shop (rotates every 5 min). Multi-harvest = keeps producing.</p>

   <div className="mt-6 grid gap-2 sm:grid-cols-3">
    {[{ l: "Early (0-10K)", c: "Carrot (1¢) → Strawberry (5¢) → Blueberry (10¢)", t: "Multi-harvest first. Blueberry pays back in 1 harvest." },
      { l: "Mid (10K-500K)", c: "Tomato (40¢) → Bamboo (700¢) → Pineapple (10K¢)", t: "Bamboo at 700¢ is the single best value seed." },
      { l: "Late (500K+)", c: "Acorn → Venus Fly Trap (~7M) → Moon Bloom (~65M)", t: "Acorn 2.9% chance. Venus Fly Trap eats thieves." },
    ].map((s) => (
     <div key={s.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
      <span className="text-[10px] font-black text-[#777] uppercase">{s.l}</span>
      <p className="text-sm font-bold text-[#4b4b4b]">{s.c}</p>
      <p className="text-xs text-[#777] mt-1">{s.t}</p>
     </div>
    ))}
   </div>

   <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl border border-[#3c3c3c]/20 bg-white overflow-hidden">
     <Image src={gag2Images.seed("seed-shop")} alt="Seed Shop" width={600} height={338} className="w-full" />
     <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-xs text-[#777] text-center">Seed Shop rotates every 5 min</p>
    </div>
    <div className="rounded-xl border border-[#3c3c3c]/20 bg-white overflow-hidden">
     <Image src={gag2Images.seed("venus-fly-trap")} alt="Venus Fly Trap" width={600} height={338} className="w-full" />
     <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-xs text-[#777] text-center">Venus Fly Trap — eats thieves</p>
    </div>
   </div>

   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">All Seeds</h2>
   <SeedFilter />

   {/* Mutations */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Mutations</h2>
   <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
    <table className="w-full text-sm">
     <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Mutation</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Multiplier</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">How to Boost</th></tr></thead>
     <tbody>
      {[["Gold","15×","Golden Dragonfly pet"],["Rainbow","40×","Unicorn pet"],["Electric","~80×","Lightning weather"],["Frozen","5-40×","Snowfall weather"],["Shiny","Small","Random"]].map((m) => (
       <tr key={m[0]} className="border-b border-[#3c3c3c]/10 last:border-0"><td className="px-3 py-2 font-bold text-[#4b4b4b]">{m[0]}</td><td className="px-3 py-2 font-mono font-bold text-[#4CAF50]">{m[1]}</td><td className="px-3 py-2 text-xs text-[#777]">{m[2]}</td></tr>
      ))}
     </tbody>
    </table>
   </div>
   <p className="mt-2 text-xs text-[#777]">Example: Venus Fly Trap base ~3,840 → Electric = <strong>~159,000 Sheckles</strong>.</p>

   {/* Bargain */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Bargain System</h2>
   <p className="text-sm text-[#777] leading-relaxed">When selling, there's a <strong>Bargain button</strong>. Costs 3,000 Sheckles per attempt. Success = higher price. Fail = lose 3K, sell at base. <strong>Generally not recommended</strong> on normal crops — only consider on rare mutated fruit.</p>

   {/* FAQ */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">FAQ</h2>
   <div className="grid gap-3 sm:grid-cols-2">
    {[
     { q: "Which seed is best early game?", a: "<strong>Strawberry (5¢)</strong> and <strong>Blueberry (10¢)</strong>. Both Multi-harvest — they keep producing. Blueberry pays back in one harvest cycle." },
     { q: "Is Bamboo really the best value?", a: "Yes. At <strong>700 Sheckles</strong> with fast growth and strong returns, Bamboo is widely considered the best mid-game crop. Buy 5-10 and let them grow." },
     { q: "How do I get Acorn?", a: "Acorn appears in the Seed Shop with only a <strong>2.9% stock chance</strong>. Check every 5 minutes when the shop rotates. It's Legendary rarity, Multi-harvest." },
     { q: "Do mutations stack?", a: "No. Only <strong>one mutation per crop</strong> in GAG2. Focus on the highest single multiplier — Electric (80×) or Bloodlit (80×)." },
    ].map((faq) => (
     <div key={faq.q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
      <h3 className="text-sm font-extrabold text-[#4b4b4b]">{faq.q}</h3>
      <p className="mt-1 text-sm text-[#777]" dangerouslySetInnerHTML={{ __html: faq.a }} />
     </div>
    ))}
   </div>

   <RelatedGuides guides={[
    { href: "/pets", title: "All Pets", detail: "Deer + Unicorn boost mutations", image: gag2Images.pet("deer") },
    { href: "/mutations", title: "Mutations Guide", detail: "Full weather + multiplier table", emoji: "🧬" },
    { href: "/eggs", title: "Egg Hatching", detail: "Common + Epic egg odds", emoji: "🥚" },
   ]} />
  </main>
 );
}
