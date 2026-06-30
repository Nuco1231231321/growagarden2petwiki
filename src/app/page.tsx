import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteLookup } from "@/components/site-lookup";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Wiki: Pets, Codes, Seeds, Eggs, Weather & Gear Guides",
  description: "Grow a Garden 2 wiki with pets, codes, best seeds, weather events, mutations, gears, night stealing, guilds, eggs, badges, and beginner route.",
  alternates: { canonical: "https://growagarden2pet.wiki" },
};

const topTasks = [
  {
    eyebrow: "Start route",
    title: "I just started and do not want to waste Sheckles",
    body: "Open the first-hour route before buying random pets, side gear, or late-game crops.",
    href: "/beginner-guide",
  },
  {
    eyebrow: "Codes",
    title: "I need free rewards first",
    body: "Claim the active code route before spending on seeds or pets.",
    href: "/codes",
  },
  {
    eyebrow: "Buy order",
    title: "I need to know what is worth buying next",
    body: "Use the tier hub if your real question is pets, seeds, plants, or gear priority.",
    href: "/tier-list",
  },
  {
    eyebrow: "Profit route",
    title: "I want a stronger crop money loop",
    body: "Open Seeds if you are deciding which crops to plant now and which ones to skip.",
    href: "/seeds",
  },
] as const;

const routeCards = [
  {
    step: "1",
    label: "Claim free value",
    title: "Redeem codes before any paid route",
    detail: "Free seeds and rewards lower the cost of your first upgrades.",
    href: "/codes",
    image: gag2Images.hero("codes"),
  },
  {
    step: "2",
    label: "Fix movement and growth",
    title: "Buy Bunny, Deer, then move into better crops",
    detail: "That route improves every action instead of locking money into weak filler picks.",
    href: "/beginner-guide",
    image: "/grow-a-garden-2/cards/pet-route-card.webp",
  },
  {
    step: "3",
    label: "Protect value",
    title: "Add defense before holding expensive crops",
    detail: "Bee, Gnome, and night defense matter once your garden becomes worth stealing.",
    href: "/night-stealing",
    image: "/grow-a-garden-2/cards/defend-route-card.webp",
  },
] as const;

const decisionHubs = [
  {
    title: "Pets",
    body: "Use this when you need a first pet, a defense pet, or a mutation pet instead of a generic ranking.",
    href: "/pets",
    tags: ["Bunny first", "Bee timing", "Night pets"],
  },
  {
    title: "Seeds and plants",
    body: "Use this when you are deciding what to plant next, what to save for weather, and what to stop buying.",
    href: "/seeds",
    tags: ["Early crops", "Late-game plants", "Skip filler"],
  },
  {
    title: "Weather events",
    body: "Use this during active events when you need to know what to harvest, save, or protect right now.",
    href: "/weather",
    tags: ["Event actions", "Save or sell", "Quick windows"],
  },
  {
    title: "Mutations",
    body: "Use this when you are deciding whether a crop is worth holding for a better payout.",
    href: "/mutations",
    tags: ["Keep or sell", "Best mutation targets", "Late-game value"],
  },
  {
    title: "Gears",
    body: "Use this when growth, movement, or defense is the bottleneck and you need a buy order.",
    href: "/gears",
    tags: ["Sprinklers", "Wheelbarrow", "Defense gear"],
  },
  {
    title: "Eggs and guilds",
    body: "Use these pages when your route has already moved past the first-hour economy and into team systems.",
    href: "/eggs",
    tags: ["Guild Egg", "Hatching", "Weekly systems"],
  },
] as const;

const highDemandGuides = [
  {
    title: "Megaphone sound IDs",
    detail: "Copy Sound IDs and fix silent Megaphone audio fast.",
    href: "/megaphone-sound-ids",
  },
  {
    title: "Vote guide",
    detail: "Check voting links safely and avoid fake reward pages.",
    href: "/vote",
  },
  {
    title: "Official website",
    detail: "Open the Roblox play page and understand which links are official.",
    href: "/official-website",
  },
  {
    title: "Venom Spitter",
    detail: "See the price route before spending late-game Sheckles.",
    href: "/venom-spitter",
  },
] as const;

const roleFacts = [
  ["Game", "Grow a Garden 2"],
  ["Platform", "Roblox"],
  ["Main loop", "Plant, protect, upgrade"],
  ["Best first move", "Codes, Bunny, Deer, better crops"],
] as const;

const supportLinks = [
  ["Crop values", "/values"],
  ["Crop calculator", "/calculator"],
  ["Wheelbarrow", "/wheelbarrow"],
  ["Guilds", "/guild"],
  ["Props and crates", "/props"],
  ["Badges", "/badges"],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#f6fbf4] via-white to-white">
      <section className="relative mx-auto w-[calc(100%-32px)] max-w-[1120px] py-14 sm:w-[calc(100%-48px)] lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-12vw] top-0 -z-0 hidden h-[640px] overflow-hidden lg:block">
          <div
            className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, #4CAF50 2px, transparent 2px)", backgroundSize: "24px 24px" }}
          />
          <div className="gag2-ambient-drift absolute left-[7%] top-24 h-40 w-40 rounded-full bg-[#f4d77b]/20 blur-2xl" />
          <div className="gag2-ambient-drift absolute right-[9%] top-36 h-48 w-48 rounded-full bg-[#7fd9b0]/18 blur-2xl [animation-delay:-5s]" />
          <div className="absolute left-[3%] top-60 h-px w-52 rotate-[-12deg] bg-gradient-to-r from-transparent via-[#81C784]/35 to-transparent" />
          <div className="absolute right-[2%] top-72 h-px w-56 rotate-[10deg] bg-gradient-to-r from-transparent via-[#f4d77b]/35 to-transparent" />
          <div className="gag2-ambient-float absolute left-[10%] top-28 grid h-14 w-14 place-items-center rounded-2xl border border-[#d7e5d3] bg-white/55 shadow-sm [--ambient-duration:10s] [--ambient-rotate:-8deg]">
            <Image src={gag2Images.pet("bunny")} alt="" width={52} height={52} className="h-10 w-10 object-contain opacity-70" />
          </div>
          <div className="gag2-ambient-float absolute right-[13%] top-24 grid h-16 w-16 place-items-center rounded-2xl border border-[#d7e5d3] bg-white/55 shadow-sm [--ambient-duration:12s] [--ambient-rotate:7deg] [animation-delay:-3s]">
            <Image src={gag2Images.gear("wheelbarrow-gag-2")} alt="" width={56} height={56} className="h-11 w-11 object-contain opacity-70" />
          </div>
          <div className="gag2-ambient-float absolute left-[16%] top-[430px] grid h-16 w-16 place-items-center rounded-2xl border border-[#d7e5d3] bg-white/50 shadow-sm [--ambient-duration:11s] [--ambient-rotate:9deg] [animation-delay:-6s]">
            <Image src={gag2Images.seed("venus-fly-trap")} alt="" width={56} height={56} className="h-11 w-11 object-contain opacity-65" />
          </div>
          <div className="gag2-ambient-float absolute right-[17%] top-[440px] grid h-14 w-14 place-items-center rounded-2xl border border-[#d7e5d3] bg-white/50 shadow-sm [--ambient-duration:9s] [--ambient-rotate:-6deg] [animation-delay:-2s]">
            <Image src={gag2Images.pet("bee")} alt="" width={52} height={52} className="h-10 w-10 object-contain opacity-65" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8dcc2] bg-[#eaf7ed] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#2d6a3f] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-garden" />
            Updated Jun 16, 2026
          </div>

          <h1 className="mx-auto max-w-4xl text-[clamp(2.45rem,5.4vw,4.6rem)] font-black leading-[0.98] text-[#071b10]">
            Grow a Garden 2 Wiki: <span className="text-garden">Pets, Codes, Seeds, Eggs &amp; Weather Guides</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-[#4a6654] sm:text-lg sm:leading-8">
            Open the page that matches your problem right now: start route, crop income, pet buy order, weather timing, or defense before night stealing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/beginner-guide"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-b-[4px] border-garden bg-garden px-7 text-center font-black tracking-wide text-white shadow-[0_4px_0_#3d8b40] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#3d8b40]"
            >
              Beginner route
            </Link>
            <Link
              href="/tier-list"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-b-[4px] border-garden bg-garden px-7 text-center font-black tracking-wide text-white shadow-[0_4px_0_#3d8b40] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#3d8b40]"
            >
              Buy order hub
            </Link>
            <Link
              href="/weather"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sprout bg-white px-7 text-center font-black tracking-wide text-forest shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Weather actions
            </Link>
          </div>

          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 overflow-hidden rounded-xl border border-[#e0e8dc] bg-white/80 text-left md:grid-cols-4">
            {roleFacts.map(([label, value]) => (
              <div key={label} className="border-b border-r border-[#e8efe4] p-4 last:border-r-0 md:border-b-0">
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-ash">{label}</p>
                <p className="mt-1 text-sm font-black text-[#1f3027]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-4xl">
          <SiteLookup />
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Open the right page first</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Choose the answer you need now</h2>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-charcoal">
            This homepage is a route selector, not a full guide. Pick the page that matches your next decision.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topTasks.map((task) => (
            <Link
              key={task.href}
              href={task.href}
              className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-garden">{task.eyebrow}</p>
              <h2 className="mt-2 text-base font-black text-soil">{task.title}</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-charcoal">{task.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-12 sm:w-[calc(100%-48px)]">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">First-hour route</p>
            <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Play in the right order</h2>
          </div>
          <Link href="/beginner-guide" className="font-black text-garden underline decoration-2 underline-offset-4">
            Full beginner route
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {routeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-[24px] border border-[#e4e8df] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 grid h-48 place-items-center overflow-hidden rounded-[20px] border border-[#e8efe4] bg-[#f5f9f3] p-3">
                <Image src={card.image} alt={card.title} width={1200} height={800} className="h-full w-full object-contain" />
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-garden text-base font-black text-white shadow-[0_3px_0_#3d8b40]">
                  {card.step}
                </span>
                <span className="rounded-full bg-[#f5f9f3] px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-ash">{card.label}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight text-[#102118]">{card.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#3f5b4b]">{card.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Decision hubs</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Pick the system you are solving</h2>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-charcoal">
            Each page below handles one player decision. Open the one that matches your current bottleneck.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {decisionHubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-garden hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-xl font-black text-soil">{hub.title}</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-charcoal">{hub.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {hub.tags.map((tag) => (
                  <span key={tag} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] px-2 py-1 text-[11px] font-bold text-ash">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">High-demand tasks</p>
          <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Fast answers players search for</h2>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-charcoal">
            These pages solve narrow problems that do not need a full route page.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {highDemandGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-lg font-black text-soil">{guide.title}</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-charcoal">{guide.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-8 sm:w-[calc(100%-48px)]">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">Support pages</p>
            <h2 className="text-3xl font-black tracking-tight text-soil sm:text-4xl">Use these after the core route pages</h2>
          </div>
          <Link href="/tier-list" className="font-black text-garden underline decoration-2 underline-offset-4">
            Open buy order hub
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {supportLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-base font-extrabold text-soil shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:border-garden hover:text-garden"
            >
              {label}
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
