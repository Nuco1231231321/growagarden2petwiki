import Image from "next/image";
import Script from "next/script";
import { gag2Images, gag2Pets } from "@/lib/data";
import type { Metadata } from "next";
import { PetFilter } from "@/components/pet-filter";
import { PetBuyOrder } from "@/components/pet-buy-order";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Pets: All 13 Prices, Abilities, Rarities & Tier List",
  description: "All 13 GAG2 pets with prices, abilities, rarities, tier rankings, first pet route, best pets by role, and pet slot priority.",
  alternates: { canonical: "https://growagarden2pet.wiki/pets" },
};

const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#777]" };

const route = [
  ["1", "Bunny", "20,000", "Buy first for speed. Faster movement makes planting, selling, and escaping easier."],
  ["2", "Deer", "50,000", "Buy next for crop growth. Stack Deer when you want faster income."],
  ["3", "Bee", "1,000,000", "Buy before expensive crops. It defends your garden at night."],
  ["4", "Unicorn or Golden Dragonfly", "3M+", "Buy after your farm can support mutation-focused crops."],
  ["5", "Raccoon or Ice Serpent", "5M+", "Pick Raccoon for night stealing or Ice Serpent for endgame defense."],
];

const rolePicks = [
  ["Speed", "Bunny", "Cheap first pet. Helps every early route."],
  ["Growth", "Deer", "Best value for farming because growth stacks."],
  ["Defense", "Bee", "First serious night defense pet."],
  ["Mutation income", "Unicorn", "Best pick when you are saving crops for Rainbow weather."],
  ["Night raiding", "Raccoon", "Best pet when you actively steal at night."],
  ["Endgame defense", "Ice Serpent", "Buy when your garden has crops worth protecting."],
];

const faq = [
  ["What pet should I buy first?", "Buy Bunny first because speed helps every early route."],
  ["What pet should I buy after Bunny?", "Buy Deer after Bunny because crop growth improves your income loop."],
  ["When should I buy Bee?", "Buy Bee before keeping expensive crops overnight because it is the first serious defense pet."],
  ["Which pet is best for mutation value?", "Unicorn and Golden Dragonfly are the main mutation-income pets."],
] as const;

export default function PetsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl min-w-0 overflow-hidden px-4 py-8 sm:px-6">
      <Script id="pets-faq-jsonld" type="application/ld+json">
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
      <Script id="pets-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://growagarden2pet.wiki" },
            { "@type": "ListItem", position: 2, name: "Pets", item: "https://growagarden2pet.wiki/pets" },
          ],
        })}
      </Script>
      <div className="mb-6 flex min-w-0 items-center gap-4">
        <Image src={gag2Images.pet("bunny")} alt="Bunny pet" width={64} height={64} className="rounded-xl" />
        <div className="min-w-0">
          <h1 className="break-words text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Pets Guide</h1>
          <p className="text-sm text-[#777]">All {gag2Pets.length} pets, prices, roles, tiers, and buy order.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best First Pets</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Buy Bunny first, Deer second, and Bee before you start holding expensive crops overnight. Save mutation and night-raiding pets until your income loop is stable.
        </p>
        <div className="mt-4 max-w-full overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Order</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Pet</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Cost</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th></tr></thead>
            <tbody>
              {route.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{row[2]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Pet by Role</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rolePicks.map(([role, pet, reason]) => (
            <div key={role} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</span>
              <p className="mt-1 text-base font-extrabold text-[#2E3B2E]">{pet}</p>
              <p className="mt-1 text-sm text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <PetBuyOrder />
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Pet Database</h2>
        <PetFilter />
      </section>

      <h2 className="mt-10 mb-3 text-xl font-extrabold text-[#2E3B2E]">Tier List</h2>
      <div className="space-y-2">
        {(["S", "A", "B", "C"] as const).map((tier) => {
          const pets = gag2Pets.filter((pet) => pet.tier === tier);
          return (
            <div key={tier} className="flex items-start gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${tierBg[tier]}`}>{tier}</span>
              <div className="flex flex-wrap gap-2">{pets.map((pet) => (<span key={pet.name} className="text-sm font-semibold text-[#4b4b4b]">{pet.name}</span>))}</div>
            </div>
          );
        })}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Pet Slot Priority</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["3 starter slots", "Use Bunny, Deer, and Bee."],
          ["4th slot", "Add a second Deer for faster crop growth."],
          ["5th slot", "Add Unicorn, Golden Dragonfly, Raccoon, or Ice Serpent based on your playstyle."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/eggs", title: "Egg Hatching", detail: "Common and Epic egg odds", emoji: "Eggs" },
        { href: "/beginner-guide", title: "Beginner Guide", detail: "First hour route and spending order", emoji: "Start" },
        { href: "/seeds", title: "Seeds & Plants", detail: "Best crops before expensive pets", image: gag2Images.seed("seed-shop") },
        { href: "/night-stealing", title: "Night Stealing", detail: "Use defense pets to protect crops", emoji: "Defense" },
        { href: "/weather", title: "Weather Events", detail: "Use mutation pets during weather", emoji: "Weather" },
      ]} />

      <section className="mt-10">
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
