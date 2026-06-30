import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Megaphone Sound IDs & How to Use Them",
  description: "Working Grow a Garden 2 Megaphone sound IDs, how to enter a Roblox Sound ID, and what to do when an audio code does not play.",
  alternates: { canonical: "https://growagarden2pet.wiki/megaphone-sound-ids" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Items & Gear", href: "/gears" },
  { name: "Megaphone Sound IDs", href: "/megaphone-sound-ids" },
];

const soundIds = [
  ["Raining Tacos", "142376088", "Music", "Easy test sound; short and recognizable."],
  ["Noisestorm - Crab Rave", "5410086218", "Music", "Good for checking whether longer music plays clearly."],
  ["Tokyo Drift", "1837015626", "Music", "Popular racing-style music ID."],
  ["Stadium Rave", "1846368080", "Music", "Loud server-style track; lower volume first."],
  ["Spooky Scary Skeletons", "515669032", "Meme", "Seasonal meme sound that is easy to recognize."],
  ["You Have Been Rick Rolled", "7363412529", "Meme", "Classic meme test ID; use politely."],
  ["Windows XP Theme", "1626996526", "Meme", "Short nostalgia sound for quick testing."],
  ["Whatcha Say", "168208965", "Meme", "Works well as a brief joke sound."],
  ["Better Call Saul Theme", "9106904975", "Music", "Good mid-length test track."],
  ["Elevator Music", "9119119619", "Music", "Lower-pressure background sound."],
  ["Nightmare Music", "6991661856", "Effect", "Use briefly; it can annoy nearby players."],
  ["Old Town Road OOFED", "18315940082", "Meme", "Novelty ID; may be more likely to change."],
];

const getSteps = [
  "Join Grow a Garden 2 and use the Seeds or Sell shortcut to reach the middle lobby.",
  "Walk to the Gears counter and talk to George.",
  "Find Megaphone in the gear list. It costs 8,000 Sheckles when available in the Gear Shop.",
  "Buy it once. The Megaphone is a permanent gear item, so it stays available after purchase.",
];

const useSteps = [
  "Equip the Megaphone from your hotbar or the Gear Shop equipment button.",
  "Open the Megaphone configuration button on screen.",
  "Paste only the numeric Roblox Sound ID into the song ID field.",
  "Press enter or confirm, then lower the volume if the sound is too loud.",
  "To change music, reopen the Megaphone menu and replace the old ID with a new one.",
];

const decisionRows = [
  ["I just want to test the Megaphone", "Use a short recognizable ID first.", "That tells you quickly whether the tool works before you try longer tracks."],
  ["The audio is silent", "Try another short ID and re-check equip state before assuming the Megaphone is broken.", "Many failures come from removed IDs or a simple setup miss."],
  ["I am still poor in the early route", "Skip Megaphone for now.", "Seeds, sprinklers, early pets, and defense help progression more than social audio."],
];

const fixes = [
  ["The ID was removed", "Roblox audio can be moderated or made unavailable. If one ID stays silent, test a safer track such as Raining Tacos or Stadium Rave."],
  ["The ID was typed wrong", "Use only the number. Remove spaces, labels, brackets, punctuation, and extra text before pressing enter."],
  ["The Megaphone is not equipped", "Hold the Megaphone first. If the configuration button does not appear, re-equip it from the hotbar or Gear Shop."],
  ["Volume is too low", "Check both the Megaphone volume and the main Roblox volume. Some players think an ID failed when the volume is muted."],
  ["The server is delayed", "Wait a few seconds, then switch IDs. Rejoining can also help if the Megaphone menu stops responding."],
  ["The sound is disruptive", "Lower the volume or stop the sound if other players ask. A loud server-wide track can make trading, farming, or defending harder."],
];

const faq = [
  ["What is the best Megaphone Sound ID to test first?", "Raining Tacos is a simple first test because most players recognize it quickly. If it does not play, try Stadium Rave or another short ID before assuming the Megaphone is broken."],
  ["Do Megaphone Sound IDs expire?", "The number itself does not expire on your page, but the Roblox audio asset can be removed, muted, or restricted. That is why a Sound ID can work one day and fail later."],
  ["Can I use any Roblox audio ID?", "You can try any numeric Roblox audio ID, but only IDs that are still available and allowed by Roblox will play correctly."],
  ["Is Megaphone worth 8,000 Sheckles?", "Yes if you want social or funny server audio. No if you are still struggling with farming, because seeds, sprinklers, Bunny, Deer, and defense help progression more."],
];

const sourceLinks = [
  ["Beebom Megaphone guide", "https://beebom.com/grow-a-garden-2-megaphone-guide/"],
  ["Times of India Sound ID steps", "https://timesofindia.indiatimes.com/sports/esports/news/how-to-use-roblox-sound-ids-with-the-megaphone-in-grow-a-garden-2/articleshow/131873753.cms"],
  ["Radio Times Sound ID list", "https://www.radiotimes.com/technology/gaming/roblox-grow-a-garden-2-sound-ids-megaphone-codes/"],
];

export default function MegaphoneSoundIdsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="megaphone-sound-ids"
        title="Grow a Garden 2 Megaphone Sound IDs"
        description="Sound IDs, setup steps, and fixes for the Megaphone in Grow a Garden 2."
        path="/megaphone-sound-ids"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Megaphone Sound IDs</h1>
          <p className="mt-3 text-base font-semibold leading-7 text-[#4b4b4b]">
            The Megaphone is a Gear Shop item that costs 8,000 Sheckles and lets you play Roblox audio by entering a numeric Sound ID. Buy it from George, equip it, paste a valid Sound ID, and adjust the volume before playing it across the server.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["8,000 Sheckles", "Gear Shop", "Uses Roblox Sound IDs", "Volume control"].map((item) => (
              <span key={item} className="rounded-full border border-[#C8E6C9] bg-[#F6FBF4] px-3 py-1.5 text-xs font-black text-[#2E3B2E]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
          <Image src={gag2Images.hero("all_gears")} alt="Grow a Garden 2 gear shop items" width={640} height={420} className="h-52 w-full object-cover" />
          <p className="border-t border-[#e5e7eb] px-4 py-3 text-xs font-semibold leading-5 text-[#777]">
            Use the gear route first, then come back here to copy a Sound ID.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Sound IDs to Try First</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Start with recognizable sounds so you can tell immediately whether the Megaphone is working. Roblox audio availability can change, so keep more than one ID ready.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Sound name</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Sound ID</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Type</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Notes</th>
              </tr>
            </thead>
            <tbody>
              {soundIds.map(([name, id, type, notes]) => (
                <tr key={id} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{name}</td>
                  <td className="select-all px-3 py-2 font-mono text-xs font-black text-[#2E3B2E]">{id}</td>
                  <td className="px-3 py-2 text-xs font-bold text-[#4CAF50]">{type}</td>
                  <td className="px-3 py-2 text-xs leading-5 text-[#777]">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What should you do first?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Situation</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#4CAF50]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5">
          <h2 className="text-xl font-extrabold text-[#2E3B2E]">How to Get Megaphone</h2>
          <ol className="mt-4 space-y-3">
            {getSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
                <span className="text-sm font-semibold leading-6 text-[#4b4b4b]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5">
          <h2 className="text-xl font-extrabold text-[#2E3B2E]">How to Use Sound IDs</h2>
          <ol className="mt-4 space-y-3">
            {useSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
                <span className="text-sm font-semibold leading-6 text-[#4b4b4b]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Why a Megaphone ID Does Not Work</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fixes.map(([title, body]) => (
          <section key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Safe and Polite Use</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          The Megaphone plays audio for more than just you, so treat it like a server-wide tool. Test a sound at low volume first, avoid looping loud meme sounds while players are trading or defending, and switch tracks quickly if someone asks you to stop. The best Megaphone setup is one you can change fast without disrupting your own farming route.
        </p>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Megaphone FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {faq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Data Notes</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          The Megaphone price and setup steps are based on current public guides. Sound IDs can stop working if Roblox removes or restricts an audio asset, so use the table as a practical test list rather than a permanent guarantee.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {sourceLinks.map(([label, href]) => (
            <a key={href} href={href} className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
              {label}
            </a>
          ))}
        </div>
      </section>

      <RelatedGuides guides={[
        { href: "/gears", title: "All Gears", detail: "Prices, effects, and buy order", emoji: "Gear" },
        { href: "/official-website", title: "Official Website", detail: "Play link and safe links", emoji: "Links" },
        { href: "/vote", title: "Vote Guide", detail: "Voting links and safety checks", emoji: "Vote" },
        { href: "/codes", title: "Codes", detail: "Redeem free seed rewards", emoji: "Codes" },
      ]} />
    </main>
  );
}
