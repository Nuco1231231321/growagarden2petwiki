import { gag2Gears } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Gears Guide: Prices, Effects & Best Gears",
  description: "Every GAG2 gear: Watering Cans, Sprinklers, Mushrooms, Gnome, Flashbang, Basic Pot, Wheelbarrow, Teleporter. Plus Robux-only gears: Rainbow Carpet, Freeze Ray, Vine Wrapper.",
  alternates: { canonical: "https://growagarden2pet.wiki/gears" },
};

const cats = [...new Set(gag2Gears.map((g) => g.category))];
const robuxGears = [
  { n: "Rainbow Carpet", e: "🪄", c: "599 Robux", f: "Fly anywhere on the map" },
  { n: "Vine Wrapper", e: "🌿", c: "499 Robux", f: "Wraps players in vines" },
  { n: "Freeze Ray", e: "❄️", c: "749 Robux", f: "Freezes a player into ice" },
  { n: "Power Hose", e: "🔫", c: "299 Robux", f: "Sprays and pushes players" },
];

export default function GearsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Gears Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Gears from <strong>George</strong> at the Gear Shop (rotates every 5 min). Some also purchasable with Robux. {gag2Gears.length} Sheckles gears + 4 Robux-only.</p>

      <div className="mt-4 p-4 rounded-xl border-2 border-[#42A5F5]/20 bg-[#E3F2FD]">
        <p className="text-sm font-bold text-[#42A5F5]">🔍 Search Note</p>
        <p className="mt-1 text-sm text-[#42A5F5]/80">Players searching for "Speed Hub" or "Magnet" — these items <strong>do not exist</strong> in GAG2. "Speed Hub" is likely the <strong>Speed Mushroom</strong>.</p>
      </div>

      {cats.map((cat) => {
        const items = gag2Gears.filter((g) => g.category === cat);
        return (
          <section key={cat} className="mt-8">
            <h2 className="text-xl font-extrabold text-[#2E3B2E] mb-3">{cat}</h2>
            <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Gear</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Rarity</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Price</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Effect</th></tr></thead>
                <tbody>
                  {items.map((g) => {
                    const imgKey = g.name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "").replace("sign-hello", "sign-full");
                    const mappedName = imgKey === "common-watering-can" ? "common-watering-can" : imgKey === "uncommon-sprinkler" ? "uncommon-sprinkler-gear-gag-2" : imgKey;
                    return (
                      <tr key={g.name} className="border-b border-[#3c3c3c]/10 last:border-0 hover:bg-[#C8E6C9]/5">
                        <td className="px-3 py-2 font-semibold text-[#4b4b4b] text-xs">{g.emoji} {g.name}</td>
                        <td className="px-3 py-2 text-xs text-[#777]">{g.rarity}</td>
                        <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{g.costSheckles}{g.costRobux ? ` / ${g.costRobux}R` : ''}</td>
                        <td className="px-3 py-2 text-xs text-[#777]">{g.effect}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Robux-Only Gears</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Gear</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Cost</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Effect</th></tr></thead>
          <tbody>
            {robuxGears.map((g) => (
              <tr key={g.n} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-semibold text-[#4b4b4b]">{g.e} {g.n}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{g.c}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{g.f}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
