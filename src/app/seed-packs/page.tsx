import type { Metadata } from "next";
import { gag2SeedPacks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seed Packs: Ghost Pepper Odds & Is It Worth Buying?",
  description:
    "Ghost Pepper Seed Pack odds: Baby Cactus 50%, Ghost Pepper 1%. Robux costs per roll, all 5 exclusive seeds, and cost-benefit guidance.",
  alternates: { canonical: "https://growagarden2pet.wiki/seed-packs" },
};

export default function SeedPacksPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Seed Packs Guide</h1>
      <p className="mt-2 text-sm text-[#777]">
        Robux-only packs with exclusive seeds not available in the regular Seed Shop. Random rolls, no pity system.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-extrabold text-[#2E3B2E]">Cost</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Rolls</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Robux</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1 Roll", "99"],
              ["3 Rolls", "249"],
              ["10 Rolls", "799"],
              ["50 Rolls", "4,449"],
            ].map((r) => (
              <tr key={r[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{r[0]}</td>
                <td className="px-3 py-2 font-mono text-[#4b4b4b]">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {gag2SeedPacks.map((pack) => (
        <section key={pack.name} className="mt-8">
          <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">{pack.name}</h2>
          <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed</th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Rarity</th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Drop Rate</th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Harvest</th>
                </tr>
              </thead>
              <tbody>
                {pack.exclusiveSeeds.map((s) => (
                  <tr key={s.name} className={`border-b border-[#3c3c3c]/10 last:border-0 ${s.name === "Ghost Pepper" ? "bg-[#FFF8E1]" : ""}`}>
                    <td className="px-3 py-2 font-bold text-[#4b4b4b]">
                      {s.name} {s.name === "Ghost Pepper" ? "Fire" : ""}
                    </td>
                    <td className="px-3 py-2 text-xs text-[#777]">{s.rarity}</td>
                    <td className="px-3 py-2 font-mono text-xs font-extrabold text-[#4b4b4b]">{s.odds}</td>
                    <td className="px-3 py-2">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${s.harvestType === "Multi" ? "bg-[#E8F5E9] text-[#4CAF50]" : "bg-[#FFF8E1] text-[#FFC107]"}`}>
                        {s.harvestType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] p-4">
          <h3 className="text-sm font-extrabold text-[#E53935]">Skip If...</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#E53935]/80">
            <li>No Robux to spend</li>
            <li>Early game: stick to Seed Shop</li>
            <li>Want Ghost Pepper only, because 1% odds are expensive</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#4CAF50]/20 bg-[#E8F5E9] p-4">
          <h3 className="text-sm font-extrabold text-[#4CAF50]">Buy If...</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#4CAF50]/80">
            <li>Baby Cactus at 50% is useful for you</li>
            <li>You are collecting exclusive seeds</li>
            <li>You have spare Robux and want pack-only crops</li>
          </ul>
        </div>
      </div>

      <h2 className="mb-3 mt-8 text-xl font-extrabold text-[#2E3B2E]">Expected Cost to Get Ghost Pepper</h2>
      <p className="text-sm leading-relaxed text-[#777]">
        At a <strong>1% drop rate</strong>, the expected number of rolls to get one Ghost Pepper is <strong>100 rolls</strong>.
        The cheapest way to buy 100 rolls is two <strong>50-roll packs at 4,449 Robux each</strong>, totaling{" "}
        <strong>about 8,898 Robux</strong>. Treat Ghost Pepper as a bonus drop unless you are comfortable spending heavily.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-extrabold text-[#2E3B2E]">Strategy</h2>
      <ul className="space-y-2 text-sm text-[#777]">
        <li>
          <strong>Start with 10-pack if you buy at all.</strong> It gives a better shot at common pack seeds without chasing
          the 1% outcome.
        </li>
        <li>
          <strong>Do not chase Ghost Pepper early.</strong> Use normal Seed Shop upgrades first.
        </li>
        <li>
          <strong>These seeds are exclusive.</strong> If you want a complete seed collection, Seed Packs are the direct route.
        </li>
      </ul>
    </main>
  );
}
