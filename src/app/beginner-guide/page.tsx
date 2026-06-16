import Image from "next/image";
import Link from "next/link";
import { gag2Images } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Beginner Guide: First Hour Walkthrough & Fast Sheckles",
  description: "New to GAG2? Step-by-step first hour walkthrough: best seeds, spending priority, how to earn Sheckles fast, which pets to buy, and common beginner mistakes to avoid.",
  alternates: { canonical: "https://growagarden2pet.wiki/beginner-guide" },
};

const steps = [
  { t: "1. Claim Your Garden Plot", b: "When you first spawn, walk to the open plot area. Your garden is marked — this is where you'll plant, harvest, and defend." },
  { t: "2. Redeem Code: TEAMGREENBEAN", b: "Click the <strong>gear icon</strong> (top-left corner of the screen). Type <strong>TEAMGREENBEAN</strong> into the code box (all caps, case-sensitive). Click <strong>Claim!</strong> You get 3 free Green Bean seeds — plant these immediately." },
  { t: "3. Buy First Seeds from Sam", b: "Walk to the central hub and find <strong>Sam's Seed Shop</strong>. Buy <strong>Strawberry (5 Sheckles)</strong> or <strong>Blueberry (10 Sheckles)</strong>. Both are Multi-harvest — they keep producing after first harvest. The shop changes stock every 5 minutes." },
  { t: "4. Plant & Water", b: "Place seeds in your garden plot. Walk to <strong>George's Gear Shop</strong> in the hub and buy a <strong>Common Watering Can (2,000 Sheckles)</strong>. Hold it and click on crops — they grow 3× faster for 10 seconds." },
  { t: "5. Harvest & Sell to Steven", b: "When crops are ready (you'll see them change visually), click to harvest. Go to <strong>Steven's Sell Shop</strong> to sell for Sheckles. Use profits to buy more Multi-harvest seeds. Don't buy Single-harvest seeds early." },
  { t: "6. Buy Bunny (20,000 Sheckles)", b: "Pets spawn randomly in the lobby — look for a <strong>Bunny</strong> icon with a countdown timer on the ground. Walk up and buy it for 20K. Bunny gives you <strong>+5 walk speed</strong> which makes everything faster: moving between shops, escaping thieves, escorting pets." },
  { t: "7. Prepare for Night Defense", b: "When dusk hits (the screen darkens and a warning appears), harvest everything valuable NOW. Buy a <strong>Gnome (50K Sheckles)</strong> from George — it automatically blows away thieves at night. Place it near your most valuable crops." },
];

const priority = [
  ["1", "Strawberry / Blueberry Seeds", "5-10", "Multi-harvest ROI"],
  ["2", "Common Watering Can", "2,000", "3× growth speed"],
  ["3", "Bamboo Seeds", "700 ea", "Best mid-game crop"],
  ["4", "Bunny Pet", "20,000", "+5 speed"],
  ["5", "Deer Pet", "50,000", "+10% growth"],
  ["6", "Gnome Gear", "50,000", "Auto night defense"],
  ["7", "Bee Pet", "1,000,000", "Best affordable defense"],
];

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.icon} alt="GAG2" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Beginner Guide</h1>
          <p className="text-sm text-[#777]">Your first hour: from 0 Sheckles to a thriving garden</p>
        </div>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-6 mb-3">Step-by-Step First Hour</h2>
      <div className="space-y-3">
        {steps.map((s) => (
          <div key={s.t} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{s.t}</h3>
            <p className="mt-1 text-sm text-[#777]" dangerouslySetInnerHTML={{ __html: s.b }} />
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Spending Priority</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">#</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Buy</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Cost</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Why</th></tr></thead>
          <tbody>
            {priority.map((r) => (
              <tr key={r[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-extrabold text-[#4b4b4b]">{r[0]}</td>
                <td className="px-3 py-2 font-semibold text-[#4b4b4b] text-xs">{r[1]}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{r[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Where to Find NPCs</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          { npc: "Sam", location: "Seed Shop — central hub", sells: "Seeds (changes every 5 min)" },
          { npc: "George", location: "Gear Shop — central hub", sells: "Watering cans, sprinklers, gnomes, mushrooms, wheelbarrow" },
          { npc: "Steven", location: "Sell Shop — central hub", sells: "Buy your harvested crops for Sheckles" },
          { npc: "Charlotte", location: "Props Shop — central hub", sells: "Crates (Bear Traps, Fences, Conveyors)" },
          { npc: "Gilbert", location: "Guild Stand — central hub", sells: "Create or manage guilds" },
        ].map((n) => (
          <div key={n.npc} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
            <span className="text-sm font-extrabold text-[#4CAF50]">{n.npc}</span>
            <p className="text-xs text-[#777]">{n.location}</p>
            <p className="text-xs text-[#777]">{n.sells}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Common Beginner Mistakes</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          ["Buying Single-harvest first", "Always start with Multi-harvest seeds"],
          ["Ignoring night countdown", "Harvest everything before dark"],
          ["Skipping pets", "Bunny (20K) pays for itself in speed"],
          ["Buying expensive gears early", "Common Watering Can (2K) + Gnome (50K) is all you need"],
        ].map(([m, f]) => (
          <div key={m} className="rounded-xl border border-[#E53935]/20 bg-[#FFEBEE] p-3">
            <p className="text-xs font-extrabold text-[#E53935]">❌ {m}</p>
            <p className="mt-1 text-xs text-[#E53935]/80">✅ {f}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
