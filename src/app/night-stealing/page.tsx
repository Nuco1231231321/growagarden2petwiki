import Image from "next/image";
import Link from "next/link";
import { gag2Images } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Night Stealing: How to Steal & Defend Your Garden",
  description: "GAG2 night stealing guide: day/night cycle, best stealing strategies, defense with Bee and Black Dragon pets, Gnome gear, and risk vs reward by garden type.",
  alternates: { canonical: "https://growagarden2pet.wiki/night-stealing" },
};

export default function NightStealingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.icon} alt="GAG2" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Night Stealing Guide</h1>
          <p className="text-sm text-[#777]">Night is when the real game begins — crops are vulnerable</p>
        </div>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-6 mb-3">Day/Night Cycle</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["☀️ Daytime","Safe. Plant and grow. No stealing."],
          ["🌅 Dusk (30s)","Countdown warning. Harvest valuables NOW."],
          ["🌙 Night (2 min)","Stealing active. Defenses engage."],
          ["🌄 Dawn","Night ends. Check what was stolen."],
        ].map(([p, r]) => (
          <div key={p} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
            <span className="text-xs font-extrabold text-[#4b4b4b]">{p}</span>
            <p className="mt-1 text-xs text-[#777]">{r}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">How to Steal</h2>
      <ol className="space-y-2">
        {["Wait for night. Equip Speed Mushroom (1,500¢) for 1-min speed boost.","Scout gardens with no defensive pets visible. Avoid Bee/Black Dragon/Ice Serpent gardens.","Grab high-value crops (Moon Bloom, Dragon's Breath). Run immediately.","Use Raccoon pet (5M+) for +25 steal limit."].map((s, i) => (
          <li key={i} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i+1}</span><span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{__html:s}} /></li>
        ))}
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Best Defenses</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Defense</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Type</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Cost</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">How It Works</th></tr></thead>
          <tbody>
            {[["Bee","Pet","1M","Swarms intruders automatically — best early defense. Buy one before you invest in expensive crops."],["Gnome","Gear","50K","Blows away thieves at night. Cheap, place near valuable crops. Buy from George."],["Venus Fly Trap","Crop","~7M","Eats thieves who try to steal it. Plant it next to your most valuable crops — it defends AND pays."],["Black Dragon","Pet","~1M","Breathes fire on intruders — lethal area defense. Best value Super-tier defense."],["Ice Serpent","Pet","20M","Freezes intruders solid — ultimate defense. Only worth it when you have endgame crops to protect."]].map((d) => (
              <tr key={d[0]} className="border-b border-[#3c3c3c]/10 last:border-0"><td className="px-3 py-2 font-bold text-[#4b4b4b]">{d[0]}</td><td className="px-3 py-2 text-xs text-[#777]">{d[1]}</td><td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{d[2]}</td><td className="px-3 py-2 text-xs text-[#777]">{d[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Night Defense Quick Setup (30 seconds)</h2>
      <ol className="space-y-2">
        {[
          "<strong>Buy a Gnome (50K)</strong> from George at the Gear Shop. Place it in the center of your garden.",
          "<strong>Harvest everything valuable</strong> before the dusk countdown ends.",
          "<strong>If you have 1M:</strong> Buy a Bee pet. Park it in your garden. It auto-defends.",
          "<strong>If someone is stealing right now:</strong> Equip your shovel. Run to the thief. Hit them.",
          "<strong>Future upgrade:</strong> Surround your garden with Fences (from Charlotte's Props Shop) and add an Owner Door.",
        ].map((s, i) => (
          <li key={i} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i+1}</span><span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{__html:s}} /></li>
        ))}
      </ol>
    </main>
  );
}
