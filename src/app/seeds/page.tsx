import Image from "next/image";
import { gag2TopSeeds, gag2Images } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "All GAG2 seeds ranked: prices, harvest types, Acorn drop rate, Venus Fly Trap defense, Moon Bloom, and best crops for early, mid and late game.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

export default function SeedsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Seeds & Plants Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Seeds from the Seed Shop (rotates every 5 min). Multi-harvest crops keep producing.</p>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {[{ l: "Early (0-10K)", c: "Carrot (1¢) → Strawberry (5¢) → Blueberry (10¢)", t: "Multi-harvest = keeps producing. Blueberry pays back in 1 harvest cycle." },
          { l: "Mid (10K-500K)", c: "Tomato (40¢) → Bamboo (700¢) → Pineapple (10K¢)", t: "Bamboo at 700¢ is the single best value seed. Fast growth, strong returns. Buy 5-10." },
          { l: "Late (500K+)", c: "Acorn → Venus Fly Trap (~7M) → Moon Bloom (~65M)", t: "Acorn has only 2.9% shop chance. Venus Fly Trap eats thieves — defense + income." },
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
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Seed</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Rarity</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Price</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Harvest</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Notes</th></tr></thead>
          <tbody>
            {gag2TopSeeds.map((s) => (
              <tr key={s.name} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{s.emoji} {s.name}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{s.rarity}</td>
                <td className="px-3 py-2 font-mono text-xs font-semibold text-[#4b4b4b]">{s.costSheckles}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${s.harvestType === 'Multi' ? 'bg-[#E8F5E9] text-[#4CAF50]' : 'bg-[#FFF8E1] text-[#FFC107]'}`}>
                    {s.harvestType}
                  </span>
                </td>
                <td className="px-3 py-2 text-xs text-[#777]">{s.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Mutations</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Mutation</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Multiplier</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">How to Boost</th></tr></thead>
          <tbody>
            {[["Gold","15×","Golden Dragonfly pet"],["Rainbow","40×","Unicorn pet"],["Electric","~40×","Weather events"],["Frozen","Moderate","Weather events"],["Shiny","Small","Random"]].map((m) => (
              <tr key={m[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{m[0]}</td>
                <td className="px-3 py-2 font-mono font-bold text-[#4b4b4b]">{m[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{m[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-[#777]">Example: Venus Fly Trap base ~3,840 → Electric = <strong>~159,000 Sheckles</strong>.</p>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Bargain System</h2>
      <p className="text-sm text-[#777] leading-relaxed">
        When selling crops, there is a <strong>Bargain button</strong> that lets you gamble for a higher sell price.
        Each attempt costs <strong>3,000 Sheckles</strong>. If it fails, you lose the 3,000 and sell at the base price.
        If it succeeds, you get an increased price — but the exact increase is random.
      </p>
      <div className="mt-3 rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] p-4">
        <p className="text-sm font-extrabold text-[#E53935]">⚠️ Generally not recommended</p>
        <p className="mt-1 text-sm text-[#E53935]/80">
          Sources consistently advise <strong>against using Bargain</strong> on normal or low-value crops. The 3,000 Sheckle fee often exceeds any gain. Only consider it on rare mutated crops (Electric/Rainbow/Bloodlit) if you can afford losing the fee.
        </p>
      </div>
    </main>
  );
}
