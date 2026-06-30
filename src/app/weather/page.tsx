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
  ["Rain", "Keep the best crops planted", "Rain is a growth opportunity, not a panic harvest moment. Let good crops keep improving while the window is active."],
  ["Lightning", "Stop harvesting expensive plants", "Electric-style value is strongest when you leave the crop alone until the event is finished."],
  ["Snowfall", "Run growth tools and keep the field active", "Snowfall is better when more worthwhile crops are still growing instead of already sold."],
  ["Rainbow", "Hold your highest-value crops", "Rainbow is where expensive plants and mutation pets can actually pay off."],
  ["Starfall", "Check ripe crops after the event ends", "Leave the strong crop in place first, then confirm the result after the sky clears."],
  ["Blood Moon", "Defend before you greed", "Night overlap changes the decision. A stolen crop is worse than a smaller safe payout."],
  ["Midas Moon", "Save top-end crops for the gold-style boost", "Use high-value plants during Midas-style weather, not filler crops that barely move the result."],
];

const prep = [
  ["Before weather", "Plant strong crops, clear weak filler, and know which harvests are actually worth holding."],
  ["When the event starts", "Stop routine harvesting. Let the event touch the crops you actually care about."],
  ["If night overlap happens", "Switch to defense first, then come back for value after the risk drops."],
  ["After the event", "Check which crops improved, then sell the boosted ones before the next risk cycle starts."],
];

const cropDecisions = [
  ["Good weather targets", "Venus Fly Trap, Moon Bloom, Dragon's Breath, strong mid-to-late crops", "These are worth slowing down for because a boosted harvest changes your total meaningfully."],
  ["Situational weather targets", "Bamboo, Pineapple, Mango, Pomegranate", "Worth saving only when your income loop is already stable and the event value actually beats an immediate sale."],
  ["Bad weather targets", "Cheap filler crops", "Do not freeze your whole route for weak crops that are easy to replace."],
];

const boundaries = [
  ["Do not wait through every event", "If the crop is weak or the payout barely changes your route, harvesting and reinvesting is better than standing still."],
  ["Do not leave valuables out without defense", "Weather greed only works if you can still keep the crop."],
  ["Do not assume every event has equal value", "Rainbow, Midas-style, and strong late-game windows matter more than low-value event overlaps on weak plots."],
];

const faq = [
  ["What is the best weather event?", "Rainbow and Midas-style weather are strongest when you already have expensive crops worth holding through the event."],
  ["Should I harvest during weather?", "Usually no for your best crops. Leave valuable plants in place, then harvest after the event confirms the boost."],
  ["When should I ignore weather?", "Ignore it when the crop is cheap, the farm is unstable, or the event is not valuable enough to beat a normal safe sale."],
  ["Do I need defense during weather?", "Yes if the event overlaps with night or if the crop loss would hurt. Defense comes before greed."],
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
      <p className="mt-2 text-sm text-[#777]">Weather is not a random backdrop. It changes when you should hold, harvest, defend, and which crops are worth slowing down for.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          When weather starts, keep valuable crops planted, turn growth support toward the plants that matter, and only hold through the event if the crop is good enough and safe enough to justify the wait.
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Which crops are worth saving for weather</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {cropDecisions.map(([title, body, reason]) => (
            <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#4b4b4b]">{body}</p>
              <p className="mt-2 text-sm leading-6 text-[#777]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Boundaries that stop bad weather habits</h2>
        <div className="mt-3 grid gap-3">
          {boundaries.map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
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
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/mutations" className="font-semibold text-[#4CAF50] hover:underline">Mutations Strategy</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Best Crops</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Mutation Pets</Link>
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/mutations", title: "Mutations Strategy", detail: "Decide which crops are actually worth holding through the event window.", image: gag2Images.hero("mutations") },
          { href: "/seeds", title: "Best Crops", detail: "Use the right crop targets before you slow your whole farm for a weather hold.", image: gag2Images.hero("seeds_plants") },
          { href: "/night-stealing", title: "Night Defense", detail: "Defend expensive crops before you get greedy during Blood Moon or other risky overlap.", emoji: "Defense" },
          { href: "/pets", title: "Mutation Pets", detail: "See when Unicorn, Bee, and other pet picks actually change the weather plan.", image: gag2Images.pet("unicorn") },
        ]}
      />
    </main>
  );
}
