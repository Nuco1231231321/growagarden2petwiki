import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Weather Events: What to Do During Each Event",
  description: "Use Grow a Garden 2 weather events to boost crop value. Learn what to do during Lightning, Snowfall, Rainbow, Starfall, Blood Moon, and Midas Moon.",
  alternates: { canonical: "https://growagarden2pet.wiki/weather" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Weather", href: "/weather" },
];

const events = [
  ["Rain", "Keep the field moving", "Use Rain to keep growth rolling. Do not stop the whole farm unless you already have a specific crop worth protecting."],
  ["Lightning", "Pause big harvests until it ends", "If an expensive crop is already ready, leave it planted for the event window instead of cashing out too early."],
  ["Snowfall", "Run growth tools on active crops", "Snowfall is best treated as a growth window. Keep worthwhile crops alive and push the field, not the backpack."],
  ["Rainbow", "Check your best crop first", "Rainbow is the moment to protect your top crop, stop routine harvesting, and only sell after the event confirms the gain."],
  ["Starfall", "Leave ripe value in place, then review", "Do not panic-harvest during the animation. Let the event finish, then decide what actually improved."],
  ["Blood Moon", "Switch to defense first", "If the event creates stealing pressure, protecting the crop beats gambling for a perfect payout."],
  ["Midas Moon", "Use it on crops that already matter", "Gold-style windows are for expensive harvests, not filler plants that barely change your total."],
];

const prep = [
  ["Before weather", "Keep the field clean, know which crop you would protect first, and avoid filling the plot with harvests you plan to sell immediately."],
  ["When the event starts", "Stop your normal sell loop for a moment and look at the best crop on the plot before touching anything else."],
  ["If night overlap happens", "Move into defense, harvest only what is unsafe to hold, and come back for value after the risk drops."],
  ["After the event", "Review the crops that matter, harvest confirmed winners, and restart the normal farm loop instead of waiting forever."],
];

const skipRules = [
  ["Ignore weak weather opportunities", "If the crop is cheap or replaceable, harvest and keep your route moving."],
  ["Do not stand still after the event ends", "Once the window is over, cash out confirmed value and go back to normal farming."],
  ["Harvest unsafe value before a risky night", "If you cannot protect the crop, safe money is better than a stolen dream."],
];

const faq = [
  ["What should I do first when weather starts?", "Check the best crop on your plot first. Do not keep spam-harvesting until you know whether the event is worth pausing for."],
  ["Should I harvest during weather?", "Harvest weak crops normally. Pause only on the expensive crop or ripe harvest that could gain real value from the event."],
  ["When should I ignore weather?", "Ignore it when you are holding cheap crops, the event window is weak, or waiting would slow your route more than it helps."],
  ["Do I need defense during weather?", "Yes whenever the event overlaps with stealing risk. Weather never outranks keeping the crop safe."],
];

export default function WeatherPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="weather"
        title="Grow a Garden 2 Weather Events"
        description="Weather event guide for Rain, Lightning, Rainbow, Snowfall, Starfall, Blood Moon, Midas Moon, crop boosts, and what to do during each event."
        path="/weather"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Weather Events</h1>
      <p className="mt-2 text-sm text-[#777]">Use this page when weather is already happening and you need to know what to do right now. If you are deciding whether a crop is worth holding for mutation value at all, open the mutation guide next.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          When weather starts, stop routine harvesting for a moment, check the best crop on your plot, defend first if the event creates stealing risk, and only wait through the full window when the crop is already worth it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What to do during each event</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Event</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why that move wins</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{event[0]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{event[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{event[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather prep checklist</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {prep.map(([title, body]) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">When to ignore or cut short a weather hold</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {skipRules.map(([title, body]) => (
            <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather FAQ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {faq.map(([q, a]) => (
            <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Step</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/mutations" className="font-semibold text-[#4CAF50] hover:underline">Need to know whether the crop is worth holding at all?</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Losing crops during Blood Moon or risky nights?</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Still building toward crops that benefit from weather?</Link>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/mutations", title: "Mutations Strategy", detail: "Use this next if your real question is whether the crop deserves a full hold-and-defend plan.", image: gag2Images.hero("mutations") },
          { href: "/night-stealing", title: "Night Defense", detail: "Open this next when weather overlaps with stealing risk and you need to keep value alive.", emoji: "Defense" },
          { href: "/seeds", title: "Best Crops", detail: "Go here if weather feels weak because the crops on your plot are still too low value.", image: gag2Images.hero("seeds_plants") },
        ]}
      />
    </main>
  );
}
