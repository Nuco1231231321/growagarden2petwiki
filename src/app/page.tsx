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

const heroPets = [
  { name: "Bunny", src: gag2Images.pet("bunny"), label: "first speed pet" },
  { name: "Deer", src: gag2Images.pet("deer"), label: "growth pet" },
  { name: "Bee", src: gag2Images.pet("bee"), label: "first defense pet" },
] as const;

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

const facts = [
  ["Game", "Grow a Garden 2"],
  ["Platform", "Roblox"],
  ["Core loop", "Plant, earn, upgrade"],
  ["Best start", "Codes, seeds, Bunny"],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#f6fbf4] via-white to-white">
      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] w-[calc(100%-32px)] max-w-[1200px] items-center gap-12 py-8 sm:w-[calc(100%-48px)] lg:grid-cols-[1fr_1.08fr] lg:py-14">
        <div className="absolute -top-20 right-10 hidden h-64 w-64 opacity-[0.06] lg:block" style={{ backgroundImage: "radial-gradient(circle, #4CAF50 2px, transparent 2px)", backgroundSize: "24px 24px" }} />

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8dcc2] bg-[#eaf7ed] px-5 py-2 text-sm font-black uppercase tracking-[0.1em] text-[#2d6a3f]">
            <span className="h-2.5 w-2.5 rounded-full bg-garden" />
            Updated Jun 16, 2026
          </div>

          <h1 className="max-w-[760px] text-[clamp(2rem,7vw,4.5rem)] font-black leading-[0.96] text-[#071b10]">
            Grow a Garden 2 Wiki: <span className="text-garden">Pets, Codes, Seeds &amp; Weather Guides</span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#4a6654] sm:text-lg sm:leading-8">
            Start with codes, plant the right crops, buy Bunny and Deer, defend at night, and save valuable crops for weather events.
          </p>

          <SiteLookup />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-9 grid grid-cols-2 overflow-hidden rounded-xl border border-[#e0e8dc] bg-white/80 md:max-w-2xl md:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label} className="border-b border-r border-[#e8efe4] p-4 last:border-r-0 md:border-b-0">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-ash">{label}</p>
                <p className="mt-1 text-sm font-black text-[#1f3027]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[26px] border border-[#e0e8dc] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <div className="overflow-hidden rounded-[22px] border border-[#e8efe4]">
              <Image src={gag2Images.seed("mushroom-farm")} alt="Grow a Garden 2 farm scene" width={900} height={506} className="h-[260px] w-full bg-[#edf8ee] object-contain sm:h-[360px]" priority />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1.35fr]">
              <div className="rounded-[22px] border border-[#c8e0cc] bg-garden p-4 text-white shadow-[0_4px_0_#3d8b40]">
                <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={96} height={96} className="h-16 w-16 rounded-2xl border-2 border-white bg-white" />
                <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-seedling">Start here</p>
                <p className="text-xl font-black leading-tight">Action-first guides</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {heroPets.map((pet) => (
                  <div key={pet.name} className="rounded-[22px] border border-[#e0e8dc] bg-white p-3 text-center shadow-[0_4px_0_#e8efe4]">
                    <Image src={pet.src} alt={pet.name} width={96} height={96} className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20" />
                    <p className="mt-1 text-xs font-black text-[#20332a] sm:text-sm">{pet.name}</p>
                    <p className="hidden text-[11px] font-bold text-ash sm:block">{pet.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-[76px_1fr] items-center gap-4 rounded-[22px] border border-[#e0e8dc] bg-white p-3 shadow-[0_4px_0_#e8efe4] sm:grid-cols-[92px_1fr]">
              <Image src={gag2Images.gear("wheelbarrow-scene")} alt="Wheelbarrow gameplay" width={176} height={100} className="h-16 w-20 rounded-2xl bg-[#edf8ee] object-contain sm:h-20 sm:w-24" />
              <div>
                <p className="text-sm font-black text-[#1f3027]">Do this next</p>
                <p className="text-sm font-medium leading-6 text-[#3f5b4b]">Each guide starts with what to buy, skip, protect, or harvest.</p>
              </div>
            </div>
          </div>
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

        <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smallGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group flex min-w-0 items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f5f9f3]">
                <Image src={guide.image} alt={guide.title} fill className="object-cover" sizes="56px" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-extrabold text-soil">{guide.title}</h3>
                <p className="mt-0.5 truncate text-xs font-medium leading-relaxed text-ash">{guide.detail}</p>
              </div>
              <span className="hidden shrink-0 text-sm font-black text-garden opacity-0 transition group-hover:opacity-100 sm:inline">Open</span>
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
