import Image from "next/image";
import Link from "next/link";
import { gag2Images } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Wheelbarrow: What It Does, How to Get & Worth It?",
  description: "What does the Wheelbarrow do in GAG2? How to get it (500K Sheckles or 129 Robux), what it's used for, and whether it's worth buying compared to pets and other gears.",
  alternates: { canonical: "https://growagarden2pet.wiki/wheelbarrow" },
};

export default function WheelbarrowPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Wheelbarrow Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Legendary Gear · 500,000 Sheckles / 129 Robux</p>

      <div className="mt-4 p-4 rounded-xl border-2 border-[#FFC107]/40 bg-[#FFF8E1]">
        <p className="text-sm font-bold text-[#F57F17]">🔥 Trending</p>
        <p className="mt-1 text-sm text-[#F57F17]/80">This is the #1 most searched GAG2 topic — a Breakout trend on Google.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[#3c3c3c]/20 bg-white p-4 text-center">
          <Image src={gag2Images.gear("wheelbarrow-gag-2")} alt="Wheelbarrow icon" width={120} height={120} className="mx-auto rounded-xl" />
          <p className="mt-2 text-xs text-[#777]">Gear icon — 500K Sheckles / 129 Robux</p>
        </div>
        <div className="rounded-xl border border-[#3c3c3c]/20 bg-white overflow-hidden">
          <Image src={gag2Images.gear("wheelbarrow-scene")} alt="Wheelbarrow gameplay" width={600} height={338} className="w-full" />
          <p className="px-3 py-2 text-xs text-[#777] text-center border-t border-[#3c3c3c]/10">Carrying a player in the Wheelbarrow</p>
        </div>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">What It Does</h2>
      <ol className="space-y-2 text-sm text-[#4b4b4b] ml-4 list-decimal">
        <li><strong>Pick up other players</strong> — equip it and run into someone to scoop them into the barrow.</li>
        <li><strong>Ride as a vehicle</strong> — place it down and hop in for a small speed boost.</li>
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">How to Get It</h2>
      <ol className="space-y-2">
        {[
          "Go to the <strong>Gear Shop</strong> in the central hub (NPC: George).",
          "The shop rotates every <strong>5 minutes</strong> — the Wheelbarrow is not always in stock.",
          "Keep checking back until it appears.",
          "Buy for <strong>500,000 Sheckles</strong> or <strong>129 Robux</strong>.",
        ].map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i + 1}</span>
            <span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{ __html: s }} />
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Is It Worth Buying?</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] p-4">
          <h3 className="text-sm font-extrabold text-[#E53935]">Skip If...</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#E53935]/80">
            <li>• Still building farm income</li>
            <li>• No defensive pets yet (Bee = 1M)</li>
            <li>• 500K is a lot for you</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#4CAF50]/20 bg-[#E8F5E9] p-4">
          <h3 className="text-sm font-extrabold text-[#4CAF50]">Buy If...</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#4CAF50]/80">
            <li>• You play with friends</li>
            <li>• Want speed for night raids</li>
            <li>• 500K is pocket change</li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-[#777]"><strong>Verdict:</strong> Mostly a fun/novelty item. Invest in a Bee (1M) or Deer (50K) first.</p>

      <div className="mt-8 rounded-xl border border-[#3c3c3c]/20 bg-[#F9FAFB] p-5">
        <h3 className="text-sm font-extrabold text-[#4b4b4b] mb-2">More Guides</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/" className="text-[#4CAF50] font-semibold hover:underline">Home</Link>
          <Link href="/pets" className="text-[#4CAF50] font-semibold hover:underline">All Pets</Link>
          <Link href="/gears" className="text-[#4CAF50] font-semibold hover:underline">All Gears</Link>
        </div>
      </div>
    </main>
  );
}
