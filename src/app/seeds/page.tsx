import Image from "next/image";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { SeedFilter } from "@/components/seed-filter";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "Grow a Garden 2 seed route with best early crops, mid-game upgrades, late-game crops, weather prep, and a searchable seed table.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

export default function SeedsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Seeds & Plants Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Buy seeds from Sam, prioritize multi-harvest crops, and save your best plants for weather events.</p>

      <section className="mt-6 grid gap-2 sm:grid-cols-3">
        {[
          { l: "Early: 0-10K", c: "Strawberry and Blueberry", t: "Move from Carrot into multi-harvest crops as fast as possible." },
          { l: "Mid: 10K-500K", c: "Tomato, Bamboo, Pineapple", t: "Bamboo is the main value target before expensive pets and gear." },
          { l: "Late: 500K+", c: "Acorn, Pomegranate, Venus Fly Trap", t: "Protect these crops at night and save them for weather boosts." },
        ].map((stage) => (
          <div key={stage.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
            <span className="text-[10px] font-black uppercase text-[#777]">{stage.l}</span>
            <p className="text-sm font-bold text-[#4b4b4b]">{stage.c}</p>
            <p className="mt-1 text-xs text-[#777]">{stage.t}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("seed-shop")} alt="Seed Shop" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Check the Seed Shop often for upgrades.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("venus-fly-trap")} alt="Venus Fly Trap" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Venus Fly Trap is a late-game crop with defensive value.</p>
        </div>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">All Seeds</h2>
      <SeedFilter />

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Use Weather With Seeds</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Plant before events", "Keep your best crops planted when you expect weather."],
          ["Stop harvesting", "When weather begins, leave valuable crops on the plant."],
          ["Defend at night", "Use Bee, Gnome, traps, or fences if weather overlaps with night."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Bargain System</h2>
      <p className="text-sm leading-relaxed text-[#777]">
        Use Bargain only on valuable crops where the extra sell price matters. Skip it on normal early crops and reinvest your Sheckles into seeds, Deer, and basic defense.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Which seed is best early game?", "Strawberry and Blueberry are the first targets because they keep producing."],
          ["When should I buy Bamboo?", "Buy Bamboo once your starter loop is running. It is the main early-to-mid game upgrade."],
          ["What should I protect at night?", "Protect Pomegranate, Venus Fly Trap, Moon Bloom, Dragon Breath, and any boosted crops."],
          ["Should I harvest during weather?", "Leave high-value crops unharvested while weather is active, then harvest after the event."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{q}</h3>
            <p className="mt-1 text-sm text-[#777]">{a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/weather", title: "Weather Events", detail: "Save high-value crops for events", emoji: "Weather" },
        { href: "/mutations", title: "Mutations Guide", detail: "Use boosted crops for bigger payouts", emoji: "Mutations" },
        { href: "/pets", title: "All Pets", detail: "Deer helps your crop route", image: gag2Images.pet("deer") },
        { href: "/night-stealing", title: "Night Defense", detail: "Protect your best crops", emoji: "Defense" },
      ]} />
    </main>
  );
}
