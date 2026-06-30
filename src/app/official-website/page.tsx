import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Official Website, Roblox Link & Safe Pages",
  description: "Find the Grow a Garden 2 Roblox play page, understand fan sites such as gag.gg, and avoid fake official website pages.",
  alternates: { canonical: "https://growagarden2pet.wiki/official-website" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Start Here", href: "/beginner-guide" },
  { name: "Official Website", href: "/official-website" },
];

const linkCards = [
  {
    label: "Play page",
    title: "Grow a Garden 2 on Roblox",
    href: "https://www.roblox.com/games/97598239454123/Grow-a-Garden-2",
    body: "Use this page to play the game, check servers, and confirm the public Roblox listing.",
  },
  {
    label: "Player tools",
    title: "gag.gg",
    href: "https://gag.gg/",
    body: "A fan-made toolkit with restock timers, vote, guilds, leaderboards, and guides.",
  },
];

const safetyRules = [
  ["Official play happens on Roblox", "If your goal is to join the game, use the Roblox game page or the Roblox app."],
  ["This site is a fan wiki", "growagarden2pet.wiki is not affiliated with Roblox or the game developer. It is a guide site."],
  ["Avoid fake login pages", "Do not enter your Roblox password into pages that are not Roblox."],
  ["Check announcements before spending", "Codes, vote rewards, admin events, and update times can change quickly."],
];

const decisionRows = [
  ["I want to play the game", "Open the Roblox game page first.", "That is the real play entry, not fan tools or guide pages."],
  ["I want helper tools", "Use gag.gg only as a player tool site.", "Useful for extras, but it is still separate from the official play page."],
  ["I am being asked to log in somewhere strange", "Stop and leave the page.", "A random site should not be the place where you hand over Roblox credentials."],
];

export default function OfficialWebsitePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="official-website"
        title="Grow a Garden 2 Official Website and Safe Links"
        description="Official Roblox play link, fan tool links, and safety checks for Grow a Garden 2."
        path="/official-website"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Official Website</h1>
      <p className="mt-2 text-sm leading-6 text-[#777]">
        The safest place to play Grow a Garden 2 is the Roblox game page. Other sites can be useful for tools and guides, but they are not the Roblox play page.
      </p>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        {linkCards.map((card) => (
          <a key={card.href} href={card.href} className="rounded-2xl border-2 border-[#C8E6C9] bg-white p-5 hover:border-[#4CAF50]">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{card.label}</p>
            <h2 className="mt-1 text-xl font-extrabold text-[#2E3B2E]">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#777]">{card.body}</p>
          </a>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Which link should you use?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Goal</th>
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

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Before You Click</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {safetyRules.map(([title, body]) => (
          <section key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">What Players Usually Need Next</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Search</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best page</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["codes", "Codes", "Redeem free rewards before farming."],
              ["megaphone sound id", "Megaphone Sound IDs", "Copy working Sound IDs and fix silent audio."],
              ["vote", "Vote Guide", "Check voting links without risking your account."],
              ["calculator", "Crop Calculator", "Estimate crop value before selling."],
            ].map(([search, page, why]) => (
              <tr key={search} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{search}</td>
                <td className="px-3 py-2 text-xs text-[#4CAF50]">{page}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RelatedGuides guides={[
        { href: "/codes", title: "Codes", detail: "Active redeem code and fixes", emoji: "Codes" },
        { href: "/megaphone-sound-ids", title: "Megaphone IDs", detail: "Sound IDs and setup steps", emoji: "Sound" },
        { href: "/vote", title: "Vote Guide", detail: "Vote links and safety checks", emoji: "Vote" },
        { href: "/calculator", title: "Calculator", detail: "Crop value and mutation math", emoji: "Calc" },
      ]} />
    </main>
  );
}
