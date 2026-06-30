import Image from "next/image";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Badges, gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Badges & Achievements: All 23 & How to Unlock",
  description: "All 23 GAG2 badges and achievements with unlock requirements. Plant height, fruit weight, pet, mutation, and limited-time event badges with images.",
  alternates: { canonical: "https://growagarden2pet.wiki/badges" },
};

const badgeImage: Record<string, string> = {
  "Carrot!": "/grow-a-garden-2/badges/01_First_Seed.webp",
  "We are so back!": "/grow-a-garden-2/badges/02_We_are_so_back.webp",
  "Builder!": "/grow-a-garden-2/badges/03_Builder.webp",
  "First Pet!": "/grow-a-garden-2/badges/04_First_Pet.webp",
  "Egg Hatcher!": "/grow-a-garden-2/badges/05_Egg_Hatcher.webp",
  "OMG it's BIG!": "/grow-a-garden-2/badges/06_OMG_its_BIG.webp",
  "OMG it's HUGE!": "/grow-a-garden-2/badges/07_OMG_its_HUGE.webp",
  "First Mutation!": "/grow-a-garden-2/badges/08_First_Mutation.webp",
  "Golden!": "/grow-a-garden-2/badges/09_Golden.webp",
  "Rainbow!": "/grow-a-garden-2/badges/10_Rainbow.webp",
  "5kg Fruit!": "/grow-a-garden-2/badges/11_5kg_Fruit.webp",
  "10kg Fruit!": "/grow-a-garden-2/badges/12_10kg_Fruit.webp",
  "25kg Fruit!": "/grow-a-garden-2/badges/13_25kg_Fruit.webp",
  "50kg Fruit!": "/grow-a-garden-2/badges/14_50kg_Fruit.webp",
  "100kg Fruit!": "/grow-a-garden-2/badges/15_100kg_Fruit.webp",
  "10ft Plant!": "/grow-a-garden-2/badges/16_10ft_Plant.webp",
  "25ft Plant!": "/grow-a-garden-2/badges/17_25ft_Plant.webp",
  "50ft Plant!": "/grow-a-garden-2/badges/18_50ft_Plant.webp",
  "100ft Plant!": "/grow-a-garden-2/badges/19_100ft_Plant.webp",
  "500ft Plant!": "/grow-a-garden-2/badges/20_500ft_Plant.webp",
  "1000ft Plant!": "/grow-a-garden-2/badges/21_1000ft_Plant.webp",
  "Stole a Fruit!": "/grow-a-garden-2/badges/22_Stole_A_Fruit.webp",
  OG: "/grow-a-garden-2/badges/23_OG_Badge.webp",
};

const categories = [...new Set(gag2Badges.map((badge) => badge.category))];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pets & Eggs", href: "/pets" },
  { name: "Badges", href: "/badges" },
];

const badgeRoutes = [
  ["Start here", "Carrot!, First Pet!, Egg Hatcher!", "Easy early badges that follow your normal route instead of forcing special grinding."],
  ["Long-term grind", "1000ft Plant!, 100kg Fruit!", "These are late goals. Do not chase them before the account can support it."],
  ["Limited route", "OG, We are so back!", "Limited badges are timing-sensitive, so they matter only while the event still exists."],
];

export default function BadgesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="badges"
        title="Grow a Garden 2 Badges & Achievements"
        description="All Grow a Garden 2 badges and achievements with easiest badges, hardest badges, limited badges, unlock tasks, and badge categories."
        path="/badges"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <Image src="/grow-a-garden-2/badges/23_OG_Badge.webp" alt="Grow a Garden 2 badge icon" width={64} height={64} className="rounded-xl bg-[#f5f9f3] p-1" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Badges & Achievements</h1>
          <p className="text-sm text-[#777]">Use badges as route checkpoints, not as random side goals that break your main progress.</p>
        </div>
      </div>

      <section className="mb-8 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {badgeRoutes.map(([title, badges, tip]) => (
            <div key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm font-bold text-[#4b4b4b]">{badges}</p>
              <p className="mt-1 text-xs leading-5 text-[#777]">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {categories.map((category) => {
        const badges = gag2Badges.filter((badge) => badge.category === category);
        return (
          <section key={category} className="mt-6">
            <h2 className="mb-3 text-lg font-extrabold text-[#2E3B2E]">{category}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3 transition hover:-translate-y-0.5 hover:border-sprout hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={badgeImage[badge.name]}
                    alt={`${badge.name} badge`}
                    width={58}
                    height={58}
                    className="h-14 w-14 shrink-0 rounded-xl bg-[#f5f9f3] object-contain p-1"
                  />
                  <div>
                    <p className="text-sm font-extrabold text-[#4b4b4b]">{badge.name}</p>
                    <p className="mt-1 text-xs text-[#777]">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <RelatedGuides
        guides={[
          { href: "/pets", title: "All Pets", detail: "Use egg and pet progress to clear the easy pet-related badges naturally.", image: gag2Images.pet("bunny") },
          { href: "/eggs", title: "Egg Guide", detail: "Egg hatching badges make more sense when your guild and pet route are already working.", emoji: "Eggs" },
          { href: "/mutations", title: "Mutations", detail: "Mutation badges become easier once the crop route is strong enough to hold for boosts.", emoji: "Mutations" },
        ]}
      />
    </main>
  );
}
