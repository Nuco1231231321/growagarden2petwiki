import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Mutations: Gold, Rainbow, Electric & Weather",
  description: "All 8 GAG2 crop mutations with multipliers: Gold (15×), Rainbow (40×), Electric (80×), Bloodlit. Weather event triggers and how to maximize profits from mutated crops.",
  alternates: { canonical: "https://growagarden2pet.wiki/mutations" },
};

const mutations = [
  ["Gold","10-15×","Random; higher during Midas Event","Golden Dragonfly pet"],
  ["Rainbow","30-40×","Rainbow weather event","Unicorn pet"],
  ["Electric","70-80×","Lightning weather event","—"],
  ["Bloodlit","~80×","Blood Moon (night only)","—"],
  ["Starstruck","25-50×","Starfall weather event","—"],
  ["Frozen","5-40×","Snowfall weather event","—"],
  ["Green Apple","0× (cosmetic)","Rarely from apple trees","—"],
];

const weather = [
  ["Lightning","Electric (70-80×)","Lightning strikes"],
  ["Snowfall","Frozen (5-40×)","Snow falls, crops freeze"],
  ["Rainbow","Rainbow (30-40×)","Rainbow in sky, get Rainbow Carpet"],
  ["Starfall","Starstruck (25-50×)","Falling stars"],
  ["Blood Moon","Bloodlit (~80×)","Red moon, night only"],
  ["Midas Moon","Gold (10-15×)","Gold seeds spawn, night only"],
];

export default function MutationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Mutations Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Mutations multiply crop sell value. Only <strong>one mutation per crop</strong> in GAG2 (unlike GAG1). Mutations apply randomly while crops are growing — leave ripe crops unharvested to catch them.</p>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">All Mutations</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Mutation</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Multiplier</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">How to Get</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Boost</th></tr></thead>
          <tbody>
            {mutations.map((m) => (
              <tr key={m[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{m[0]}</td>
                <td className="px-3 py-2 font-mono font-extrabold text-[#4CAF50]">{m[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{m[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{m[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Weather Events</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Weather</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Grants</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Visual</th></tr></thead>
          <tbody>
            {weather.map((w) => (
              <tr key={w[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{w[0]}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{w[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{w[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">What to Do When You See Weather</h2>
      <div className="space-y-3">
        {[
          { weather: "Lightning in the sky", action: "Stop harvesting immediately. Leave all ripe crops on the plant. Go check every crop after the storm — Electric mutation = 70-80× value." },
          { weather: "Snow falling", action: "Same — leave crops unharvested. Frozen mutation gives 5-40× multiplier. Keep your Sprinklers running for faster growth cycles during the event." },
          { weather: "Rainbow in the sky", action: "You'll also get a free Rainbow Carpet gear. Leave crops for Rainbow mutation (30-40×). If you have a Unicorn pet, it doubles the chance." },
          { weather: "Blood Moon (night only, red sky)", action: "This is the highest-value event — Bloodlit = ~80×. But it's also when thieves are most active. Have your defenses ready. Harvest nothing until after." },
        ].map((w) => (
          <div key={w.weather} className="rounded-xl border-2 border-[#FFC107]/20 bg-white p-4">
            <p className="text-sm font-extrabold text-[#4b4b4b]">🌩️ {w.weather}</p>
            <p className="mt-1 text-sm text-[#777]">{w.action}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 p-4 rounded-xl bg-[#C8E6C9]/50 text-sm text-[#4b4b4b]">
        <strong>Core rule:</strong> Stay online during weather events. Never harvest during a weather event. Use Sprinklers to speed growth. <strong>Example:</strong> Venus Fly Trap sells for ~3,840 Sheckles base → Electric mutation = <strong>~159,000 Sheckles</strong> (40×).
      </p>
    </main>
  );
}
