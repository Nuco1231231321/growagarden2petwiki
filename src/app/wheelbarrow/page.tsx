import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { WheelbarrowWorth } from "@/components/wheelbarrow-worth";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Wheelbarrow: What It Does, How to Get & Worth It",
  description: "Use this Wheelbarrow guide to decide whether to buy it, where to get it, what it does, and what to buy first in Grow a Garden 2.",
  alternates: { canonical: "https://growagarden2pet.wiki/wheelbarrow" },
};

const beforeBuying = [
  ["1", "Stable multi-harvest crops", "Build income with Strawberry, Blueberry, Bamboo, or better crops."],
  ["2", "Bunny and Deer", "Speed and growth help every part of the game."],
  ["3", "Basic night defense", "Get Gnome or Bee before holding expensive crops overnight."],
  ["4", "Wheelbarrow", "Buy when 500K Sheckles no longer slows your farm upgrades."],
];

const faq = [
  ["What does Wheelbarrow do in Grow a Garden 2?", "Wheelbarrow lets you carry players and move faster during group routes, shop runs, or night coordination."],
  ["Is Wheelbarrow worth 500K Sheckles?", "Wheelbarrow is worth it after Bunny, Deer, and basic defense are covered. It is usually not the first 500K upgrade."],
  ["Should I buy Wheelbarrow before Bee?", "Buy Bee or Gnome first if your garden holds expensive crops overnight."],
  ["Who should buy Wheelbarrow early?", "Players who often play with friends and can recover 500K quickly can buy it earlier."],
] as const;

export default function WheelbarrowPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Script id="wheelbarrow-faq-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        })}
      </Script>
      <Script id="wheelbarrow-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://growagarden2pet.wiki" },
            { "@type": "ListItem", position: 2, name: "Wheelbarrow", item: "https://growagarden2pet.wiki/wheelbarrow" },
          ],
        })}
      </Script>
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Wheelbarrow Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Legendary Gear. Costs 500,000 Sheckles or 129 Robux when it appears in the Gear Shop.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Buy Wheelbarrow after your income, pets, and night defense are stable. It is useful for group play and movement tricks, but Bunny, Deer, Bee, and better crops usually help your account more first.
        </p>
      </section>

      <div className="mt-6">
        <WheelbarrowWorth />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[#3c3c3c]/20 bg-white p-4 text-center">
          <Image src={gag2Images.gear("wheelbarrow-gag-2")} alt="Wheelbarrow gear icon" width={120} height={120} className="mx-auto rounded-xl" />
          <p className="mt-2 text-xs text-[#777]">Wheelbarrow gear icon</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.gear("wheelbarrow-scene")} alt="Wheelbarrow gameplay scene" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Use it with friends or during movement-heavy routes.</p>
        </div>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">What It Does</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Use</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best For</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Action</th></tr></thead>
          <tbody>
            {[
              ["Carry players", "Playing with friends", "Equip it and use it around another player."],
              ["Move faster", "Crossing the map", "Use it when moving between shops, gardens, and raids."],
              ["Night coordination", "Group stealing or defense", "Pair it with Speed Mushroom, Bee, or Gnome routes."],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Get It</h2>
      <ol className="space-y-2">
        {[
          "Go to George at the Gear Shop in the central hub.",
          "Check the shop when it restocks.",
          "Buy Wheelbarrow for 500,000 Sheckles or 129 Robux when it appears.",
          "Equip it from your gear inventory before using it around players.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Buy These First</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <tbody>
            {beforeBuying.map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] p-4">
          <h3 className="text-sm font-extrabold text-[#E53935]">Skip It For Now</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#E53935]/80">
            <li>Your best crops are still cheap.</li>
            <li>You do not have Bee, Gnome, or basic defense.</li>
            <li>500K would delay Deer stacks or better seeds.</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#4CAF50]/20 bg-[#E8F5E9] p-4">
          <h3 className="text-sm font-extrabold text-[#4CAF50]">Buy It Now</h3>
          <ul className="mt-2 space-y-1 text-xs text-[#4CAF50]/80">
            <li>You play with friends often.</li>
            <li>Your farm recovers 500K quickly.</li>
            <li>You already have speed, growth, and night defense covered.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-[#3c3c3c]/20 bg-[#F9FAFB] p-5">
        <h3 className="mb-2 text-sm font-extrabold text-[#4b4b4b]">Next Guides</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/gears" className="font-semibold text-[#4CAF50] hover:underline">All Gears</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Pet Buy Order</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/beginner-guide" className="font-semibold text-[#4CAF50] hover:underline">Beginner Route</Link>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">FAQ</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {faq.map(([question, answer]) => (
            <div key={question} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{question}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
