import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { gag2Images } from "@/lib/data";
import { SiteLookup } from "@/components/site-lookup";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Wiki: Pets, Codes, Seeds, Weather & Gear Guides",
  description: "Grow a Garden 2 wiki with pets, codes, best seeds, weather events, mutations, gears, night stealing, guilds, eggs, badges, and beginner route.",
  alternates: { canonical: "https://growagarden2pet.wiki" },
};

const quickPicks = [
  { label: "Plant", title: "Build income first", detail: "Use the seed route before spending Sheckles on novelty gear.", href: "/seeds", image: "/grow-a-garden-2/cards/plant-route-card.webp", accent: "bg-[#7fd9b0]" },
  { label: "Pet", title: "Buy useful pets", detail: "Start with Bunny and Deer, then add defense before night stealing matters.", href: "/pets", image: "/grow-a-garden-2/cards/pet-route-card.webp", accent: "bg-[#f2d2ab]" },
  { label: "Defend", title: "Protect the garden", detail: "Use night defense, traps, and defense pets before holding expensive crops.", href: "/night-stealing", image: "/grow-a-garden-2/cards/defend-route-card.webp", accent: "bg-[#f4d77b]" },
] as const;

const featuredGuides = [
  { title: "All Pets", href: "/pets", detail: "Prices, abilities, roles, tiers, and first pet route", hero: gag2Images.hero("all_pets"), label: "13 pets ranked by role", tags: ["Bunny first", "Deer growth", "Bee defense"] },
  { title: "Codes", href: "/codes", detail: "Active code, reward, redeem steps, and code fixes", hero: gag2Images.hero("codes"), label: "Start with TEAMGREENBEAN", tags: ["Free seeds", "Redeem steps", "Code fixes"] },
  { title: "Seeds & Plants", href: "/seeds", detail: "Best crops, seed route, weather prep, and harvest advice", hero: gag2Images.hero("seeds_plants"), label: "Early, mid, and late crops", tags: ["Bamboo", "Venus Fly Trap", "Moon Bloom"] },
] as const;

const smallGuides = [
  { title: "Crop Calculator", href: "/calculator", detail: "Calculate value from weight and mutations", image: gag2Images.seed("mushroom-farm") },
  { title: "Crop Values", href: "/values", detail: "Compare profit, ROI, rarity, and harvest type", image: gag2Images.seed("venus-fly-trap") },
  { title: "Weather Events", href: "/weather", detail: "What to do during each event", image: gag2Images.hero("mutations") },
  { title: "Mutations", href: "/mutations", detail: "Save valuable crops for boosted payouts", image: gag2Images.hero("mutations") },
  { title: "Night Stealing", href: "/night-stealing", detail: "Steal crops and defend your garden", image: gag2Images.hero("night_stealing") },
  { title: "Wheelbarrow", href: "/wheelbarrow", detail: "What it does and when to buy it", image: gag2Images.hero("wheelbarrow") },
  { title: "All Gears", href: "/gears", detail: "Watering, sprinklers, mushrooms, and utility gear", image: gag2Images.hero("all_gears") },
  { title: "Props & Crates", href: "/props", detail: "Bear Traps, fences, conveyors, and doors", image: gag2Images.hero("props_crates") },
  { title: "Guilds", href: "/guild", detail: "Create, join, and earn weekly rewards", image: gag2Images.hero("guilds") },
  { title: "Eggs", href: "/eggs", detail: "Hatch pets from Common and Epic eggs", image: gag2Images.pet("bunny") },
  { title: "Badges", href: "/badges", detail: "Achievement list and unlock tasks", image: gag2Images.pet("golden-dragonfly") },
] as const;

const popularSearches = [
  ["Wheelbarrow", "/wheelbarrow"],
  ["Codes", "/codes"],
  ["Eggs", "/eggs"],
  ["Pets Tier List", "/pets"],
  ["Best Seeds", "/seeds"],
  ["Weather Events", "/weather"],
  ["Crop Calculator", "/calculator"],
  ["Crop Values", "/values"],
] as const;

const guideGroups = [
  { group: "Start Here", links: [["Beginner Route", "/beginner-guide"], ["Codes", "/codes"], ["GAG2 Wiki", "/"]] },
  { group: "Items & Gear", links: [["Wheelbarrow", "/wheelbarrow"], ["All Gears", "/gears"], ["Props & Crates", "/props"]] },
  { group: "Pets & Eggs", links: [["Pets Tier List", "/pets"], ["Egg Hatching", "/eggs"], ["Badges", "/badges"]] },
  { group: "Farming & Weather", links: [["Best Seeds", "/seeds"], ["Crop Calculator", "/calculator"], ["Crop Values", "/values"], ["Weather Events", "/weather"], ["Mutations", "/mutations"]] },
  { group: "PvP & Defense", links: [["Night Stealing", "/night-stealing"], ["Guilds", "/guild"], ["Defense Pets", "/pets"]] },
] as const;

const latestGuides = [
  { title: "Wheelbarrow", href: "/wheelbarrow", detail: "What it does, how to get it, and whether it is worth 500K." },
  { title: "Codes", href: "/codes", detail: "Active code, redeem steps, and fixes when a code does not work." },
  { title: "Eggs", href: "/eggs", detail: "How to get eggs, Common Egg odds, and best egg rewards." },
  { title: "Seeds", href: "/seeds", detail: "Best seeds, plant tier list, and what to buy first." },
] as const;

const facts = [
  ["Game", "Grow a Garden 2"],
  ["Platform", "Roblox"],
  ["Core loop", "Plant, earn, upgrade"],
  ["Best start", "Codes, seeds, Bunny"],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#f6fbf4] via-white to-white">
      <section className="relative mx-auto w-[calc(100%-32px)] max-w-[1120px] py-14 sm:w-[calc(100%-48px)] lg:py-20">
        <div className="absolute left-1/2 top-0 hidden h-72 w-72 -translate-x-1/2 opacity-[0.05] lg:block" style={{ backgroundImage: "radial-gradient(circle, #4CAF50 2px, transparent 2px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8dcc2] bg-[#eaf7ed] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#2d6a3f] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-garden" />
            Updated Jun 16, 2026
          </div>

          <h1 className="mx-auto max-w-4xl text-[clamp(2.45rem,5.4vw,4.6rem)] font-black leading-[0.98] text-[#071b10]">
            Grow a Garden 2 Wiki: <span className="text-garden">Pets, Codes, Seeds &amp; Weather Guides</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-[#4a6654] sm:text-lg sm:leading-8">
            GAG2 Wiki hub for codes, pets tier list, eggs, wheelbarrow, best seeds, weather events, night defense, and every route you need before spending Sheckles.
          </p>

          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
            {popularSearches.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-[#d7e5d3] bg-white px-3 py-1.5 text-xs font-black text-[#2d6a3f] shadow-sm transition hover:-translate-y-0.5 hover:border-garden">
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/calculator" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-b-[4px] border-garden bg-garden px-7 text-center font-black tracking-wide text-white shadow-[0_4px_0_#3d8b40] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#3d8b40]">
              Crop calculator
            </Link>
            <Link href="/beginner-guide" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-b-[4px] border-garden bg-garden px-7 text-center font-black tracking-wide text-white shadow-[0_4px_0_#3d8b40] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#3d8b40]">
              Beginner route
            </Link>
            <Link href="/weather" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sprout bg-white px-7 text-center font-black tracking-wide text-forest shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Weather events
            </Link>
          </div>

          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 overflow-hidden rounded-xl border border-[#e0e8dc] bg-white/80 text-left md:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label} className="border-b border-r border-[#e8efe4] p-4 last:border-r-0 md:border-b-0">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-ash">{label}</p>
                <p className="mt-1 text-sm font-black text-[#1f3027]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <SiteLookup />
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-12 sm:w-[calc(100%-48px)]">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Farm route</p>
            <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Play in the right order</h2>
          </div>
          <Link href="/beginner-guide" className="font-black text-garden underline decoration-2 underline-offset-4">Full beginner route</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {quickPicks.map((pick, index) => (
            <Link key={pick.href} href={pick.href} className="group rounded-[24px] border border-[#e4e8df] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className={`mb-4 grid h-48 place-items-center overflow-hidden rounded-[20px] border border-[#e8efe4] p-3 ${pick.accent}`}>
                <Image src={pick.image} alt={pick.title} width={1200} height={800} className="h-full w-full object-contain" />
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-garden text-base font-black text-white shadow-[0_3px_0_#3d8b40]">{index + 1}</span>
                <span className="rounded-full bg-[#f5f9f3] px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-ash">{pick.label}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight text-[#102118]">{pick.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#3f5b4b]">{pick.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Guide library</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Pick a system</h2>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-charcoal">Choose the task you need now: redeem a code, buy a pet, upgrade crops, defend at night, or use weather events.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]">
              <div className="relative h-44 bg-[#f5f9f3] sm:h-52">
                <Image src={guide.hero} alt={guide.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-black text-soil">{guide.title}</h3>
                <p className="mb-3 mt-2 text-sm font-medium leading-relaxed text-charcoal">{guide.detail}</p>
                <p className="mb-3 text-xs font-bold text-ash">{guide.label}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] px-2 py-1 text-[11px] font-bold text-ash">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smallGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f5f9f3]">
                <Image src={guide.image} alt={guide.title} fill className="object-cover" sizes="56px" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-extrabold text-soil">{guide.title}</h3>
                <p className="mt-0.5 truncate text-xs font-medium leading-relaxed text-ash">{guide.detail}</p>
              </div>
              <span className="shrink-0 text-sm font-black text-garden opacity-0 transition group-hover:opacity-100">Open</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Wiki directory</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Browse by player goal</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {guideGroups.map((group) => (
            <div key={group.group} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#4CAF50]">{group.group}</h3>
              <div className="mt-3 grid gap-2">
                {group.links.map(([label, href]) => (
                  <Link key={`${group.group}-${href}-${label}`} href={href} className="text-sm font-extrabold text-[#2E3B2E] hover:text-garden hover:underline">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Latest GAG2 guides</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Start with the pages players search most</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {latestGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-black text-soil">{guide.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-charcoal">{guide.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto w-[calc(100%-32px)] max-w-[1200px] border-t border-[#e5e7eb] py-8 text-center text-xs font-bold text-ash sm:w-[calc(100%-48px)]">
        Not affiliated with Roblox or The Garden Game. Game assets belong to their owners.
      </footer>
    </main>
  );
}
