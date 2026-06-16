import Image from "next/image";
import Link from "next/link";
import { gag2Badges, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Badges & Achievements: All 23 & How to Unlock",
  description: "All 23 GAG2 badges and achievements with unlock requirements. Plant height, fruit weight, pet, mutation, and limited-time event badges — complete list with tips.",
  alternates: { canonical: "https://growagarden2pet.wiki/badges" },
};

const categories = [...new Set(gag2Badges.map((b) => b.category))];

export default function BadgesPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
   <div className="flex items-center gap-4 mb-6">
    <span className="text-5xl">🏆</span>
    <div>
     <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Badges & Achievements</h1>
     <p className="text-sm text-[#777]">23 badges · plant height, fruit weight, pets, mutations, limited events</p>
    </div>
   </div>

   <div className="grid gap-2 sm:grid-cols-3 mb-8">
    {[
     { l: "Easiest", b: "Carrot! + First Pet!", t: "Just play the tutorial" },
     { l: "Rarest", b: "1000ft Plant! + 100kg Fruit!", t: "Endgame grind" },
     { l: "Missable", b: "OG + We are so back!", t: "Launch week only" },
    ].map((q) => (
     <div key={q.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
      <span className="text-[10px] font-bold text-[#777] uppercase">{q.l}</span>
      <p className="text-sm font-bold text-[#4b4b4b]">{q.b}</p>
      <p className="text-xs text-[#777]">{q.t}</p>
     </div>
    ))}
   </div>

   {categories.map((cat) => {
    const badges = gag2Badges.filter((b) => b.category === cat);
    return (
     <section key={cat} className="mt-6">
      <h2 className="text-lg font-extrabold text-[#2E3B2E] mb-3">{cat}</h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
       {badges.map((b) => (
        <div key={b.name} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-3 transition hover:border-sprout">
         <p className="text-sm font-extrabold text-[#4b4b4b]">🏅 {b.name}</p>
         <p className="mt-1 text-xs text-[#777]">{b.desc}</p>
        </div>
       ))}
      </div>
     </section>
    )})}

   <RelatedGuides guides={[
    { href: "/pets", title: "All Pets", detail: "Egg hatching gives pets", image: gag2Images.pet("bunny") },
    { href: "/eggs", title: "Egg Guide", detail: "Hatch eggs for pet badges", emoji: "🥚" },
    { href: "/mutations", title: "Mutations", detail: "Get mutation badges", emoji: "🧬" },
   ]} />
  </main>
 );
}
