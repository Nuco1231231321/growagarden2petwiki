import Image from "next/image";
import { gag2Pets, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { PetFilter } from "@/components/pet-filter";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Pets: All 12 Prices, Abilities, Rarities & Tier List",
  description: "All 12 GAG2 pets with Sheckle prices, abilities, rarities, tier rankings, and best picks by role. Find which pet to buy first with our progression guide.",
  alternates: { canonical: "https://growagarden2pet.wiki/pets" },
};

const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#9E9E9E]" };

export default function PetsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.pet("bunny")} alt="Bunny" width={64} height={64} className="rounded-xl" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Pets Guide</h1>
          <p className="text-sm text-[#777]">13 pets · filter by rarity, role, tier · sort by price</p>
        </div>
      </div>

      <p className="text-base text-[#4b4b4b] leading-relaxed mb-4">
        Pets spawn in the lobby with countdown timers. Buy before they despawn. Escort to your garden.
        Start with <strong>3 slots</strong> (4th = 200K, 5th = 1M Sheckles).
      </p>

      <PetFilter />

      {/* Tier List */}
      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-10 mb-3">Tier List</h2>
      <div className="space-y-2">
        {(["S","A","B","C"] as const).map((t) => {
          const pets = gag2Pets.filter((p) => p.tier === t);
          return (
            <div key={t} className="flex items-start gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${tierBg[t]}`}>{t}</span>
              <div className="flex flex-wrap gap-2">{pets.map((p) => (<span key={p.name} className="text-sm font-semibold text-[#4b4b4b]">{p.emoji} {p.name}</span>))}</div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { q: "What does the Deer do?", a: "Deer (50K, Rare) makes crops grow <strong>10% faster</strong>. Stacks — buy 2-3 Deer for 20-30% boost." },
          { q: "Which pet first?", a: "<strong>Bunny (20K)</strong> for speed → <strong>Deer (50K)</strong> for growth → <strong>Bee (1M)</strong> for defense." },
          { q: "Do pets stack?", a: "Yes. Multiple Deer stack growth. Multiple Bunnies stack speed. <strong>Deer is the most important pet to stack.</strong>" },
          { q: "Best money pet?", a: "<strong>Unicorn (4M+)</strong> doubles Rainbow mutations (40×). <strong>Raccoon (5M+)</strong> steals at night." },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{faq.q}</h3>
            <p className="mt-1 text-sm text-[#777]" dangerouslySetInnerHTML={{ __html: faq.a }} />
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/eggs", title: "Egg Hatching", detail: "Common + Epic egg odds", emoji: "🥚" },
        { href: "/beginner-guide", title: "Beginner Guide", detail: "First hour walkthrough", emoji: "🎯" },
        { href: "/seeds", title: "Seeds & Plants", detail: "Best crops + mutation values", image: gag2Images.seed("seed-shop") },
        { href: "/night-stealing", title: "Night Stealing", detail: "Steal & defend your garden", emoji: "🌙" },
      ]} />
    </main>
  );
}
