import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Weather Events: What to Do During Each Event",
  description: "Use Grow a Garden 2 weather events to boost crop value. Learn what to do during Lightning, Snowfall, Rainbow, Starfall, Blood Moon, and Midas Moon.",
  alternates: { canonical: "https://growagarden2pet.wiki/weather" },
};

const events = [
  ["Rain", "Wet-style crop boost", "Keep valuable crops planted and use the event window to grow more fruit."],
  ["Lightning", "Electric-style crop boost", "Stop harvesting. Keep your highest-value crops on the plant until the event ends."],
  ["Snowfall", "Frozen-style crop boost", "Keep crops growing and run sprinklers so more plants can catch the event."],
  ["Rainbow", "Rainbow-style crop boost", "Save your best multi-harvest crops and use Unicorn if you own one."],
  ["Starfall", "Starstruck-style crop boost", "Leave ripe crops in place and check every expensive crop after the sky clears."],
  ["Blood Moon", "Night crop boost plus stealing risk", "Defend first. Use Gnome, Bee, fences, or traps before leaving valuable crops out."],
  ["Midas Moon", "Gold-style crop boost", "Keep high-value crops planted and use Golden Dragonfly if it is part of your pet setup."],
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Weather", href: "/weather" },
];

const eventDetails = [
  ["Rain", "Short event window", "Extra crop value chance", "Keep crops planted and continue growth setup."],
  ["Lightning", "Short event window", "Electric-style crop boost", "Do not harvest your best crops until the event ends."],
  ["Rainbow", "Short event window", "Rainbow-style high-value boost", "Save top crops and use Unicorn if it fits your pet setup."],
  ["Snowfall", "Short event window", "Frozen-style crop boost", "Run growth tools so more crops can catch the event."],
  ["Starfall", "Short event window", "Starstruck-style boost", "Leave ripe expensive crops in place until the sky clears."],
  ["Blood Moon", "Night event", "Boosted crops plus stealing risk", "Defend first, then harvest after the danger passes."],
  ["Midas Moon", "Night event", "Gold-style crop boost", "Use Golden Dragonfly plans and protect high-value crops."],
];

const faq = [
  ["Is there a weather tracker for Grow a Garden 2?", "Use this page as a planning checklist and check in-game weather before harvesting valuable crops."],
  ["Can you manually trigger weather events?", "Weather events are not part of a normal manual farming action. Plan around them when they appear."],
  ["What is the best weather event?", "Rainbow and Midas-style events are the most valuable when you have expensive crops ready."],
  ["Do weather events affect mutations?", "Weather is useful because it can add stronger value boosts to crops, especially when paired with the right pets and harvest timing."],
];

const prep = [
  ["Before weather", "Plant your best crops, place sprinklers, and keep defense ready."],
  ["During weather", "Do not harvest your best crops. Let the event hit as many plants as possible."],
  ["After weather", "Check crops, harvest boosted fruit, then sell or bargain only on very valuable fruit."],
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
      <p className="mt-2 text-sm text-[#777]">Weather is when you stop routine harvesting and give your best crops a chance to gain stronger value boosts.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          When weather starts, leave valuable crops unharvested, turn on growth gear, and protect the garden. Harvest after the event so boosted crops can pay out.
        </p>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather Event Actions</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Event</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Crop Result</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What to Do</th></tr></thead>
          <tbody>
            {events.map((event) => (
              <tr key={event[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{event[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{event[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{event[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather Event Table</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Event</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Duration</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Effect</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What to do</th></tr></thead>
          <tbody>
            {eventDetails.map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather Prep Checklist</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {prep.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Crops to Save for Weather</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Mid game", "Bamboo, Pineapple, Mango, and Pomegranate"],
          ["Late game", "Venus Fly Trap, Moon Bloom, and Dragon's Breath"],
          ["With pets", "Use Deer for growth, Unicorn for Rainbow plans, and Golden Dragonfly for Gold plans."],
          ["At night", "Add Bee, Gnome, Bear Traps, or fences before leaving high-value crops out."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Weather FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {faq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/mutations" className="font-semibold text-[#4CAF50] hover:underline">Mutations Strategy</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Best Crops</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Mutation Pets</Link>
        </div>
      </div>
    </main>
  );
}
