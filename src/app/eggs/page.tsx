import Image from "next/image";
import Link from "next/link";
import { gag2Eggs, gag2Pets, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

const petImageKey: Record<string, string> = {};
gag2Pets.forEach((p) => { petImageKey[p.name] = p.imageKey; });
petImageKey["Big Bee"] = "bee";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Eggs Guide: Common & Epic Egg Hatch Odds",
  description: "Complete GAG2 egg hatching guide: Common and Epic egg pet odds, how to get eggs from Guild rewards, hatch times, and which pets you can get from each egg type.",
  alternates: { canonical: "https://growagarden2pet.wiki/eggs" },
};

export default function EggsPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
   <div className="flex items-center gap-4 mb-6">
    <span className="text-5xl">🥚</span>
    <div>
     <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">Egg Hatching Guide</h1>
     <p className="text-sm text-[#777]">Get eggs from Guild rewards · Place in garden · Wait to hatch</p>
    </div>
   </div>

   <div className="p-4 rounded-xl bg-[#C8E6C9]/50 mb-6">
    <p className="text-sm font-bold text-[#4b4b4b]">How to Get Eggs</p>
    <p className="mt-1 text-sm text-[#777]">
     In GAG2, eggs are obtained exclusively from <strong>Guild rewards</strong>. When your guild earns enough points from
     harvest weight (1 point per gram), you receive eggs. Place them in your garden and wait for them to hatch. There is
     no egg shop like in the original Grow a Garden.
    </p>
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

   <div className="mt-6 p-4 rounded-xl bg-[#FFF8E1] border-2 border-[#FFC107]/40">
    <p className="text-sm font-extrabold text-[#F57F17]">💡 Pro Tip</p>
    <p className="mt-1 text-sm text-[#F57F17]/80">
      Epic Egg is not yet released. Save your Guild points. When it launches, the 30% Unicorn and 60% Deer odds make it
      significantly better than Common Egg for building your pet collection. Common Egg's best realistic value is Deer (20%)
      and the tiny chance of Unicorn (0.3%) or Raccoon (0.2%).
    </p>
   </div>

   <RelatedGuides guides={[
    { href: "/pets", title: "All Pets", detail: "Prices, abilities, rarities & tier list", image: gag2Images.pet("bunny") },
    { href: "/guild", title: "Guilds Guide", detail: "How to earn egg rewards", emoji: "🏛️" },
    { href: "/badges", title: "Badges & Achievements", detail: "23 badges to unlock", emoji: "🏆" },
   ]} />
  </main>
 );
}
