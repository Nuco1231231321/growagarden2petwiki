import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Vote Guide: gag.gg Vote, Rewards & Safety",
  description: "How Grow a Garden 2 voting works, where to check vote links, what gag.gg vote means, and how to avoid fake reward pages.",
  alternates: { canonical: "https://growagarden2pet.wiki/vote" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Start Here", href: "/beginner-guide" },
  { name: "Vote", href: "/vote" },
];

const checks = [
  ["Use the Roblox play page first", "If a vote is tied to the game, the safest path is to start from Roblox, the in-game prompt, or a link posted by the game team."],
  ["Do not enter your password", "A vote page should not need your Roblox password. If login is required, use Roblox's own sign-in flow only."],
  ["Check the exact domain", "Look for lookalike domains, extra words, or misspellings before you click."],
  ["Treat rewards as unconfirmed until shown", "Vote rewards can change. Do not spend Robux or trade items based only on a rumor."],
];

const decisionRows = [
  ["I only want to play", "Ignore voting and open the Roblox game page.", "Voting is not required to enter the game."],
  ["I want to check a voting link", "Verify the domain and start from Roblox or a trusted in-game path if possible.", "That cuts down the risk of fake reward pages."],
  ["A page asks for unusual login details", "Stop immediately.", "That is the kind of step that turns a vote check into an account risk."],
];

const voteFaq = [
  ["What is gag.gg vote?", "gag.gg has a Vote link and Grow a Garden 2 tools. Use it as a player tool, but still verify links and avoid entering passwords outside Roblox."],
  ["Do I need to vote to play?", "No. You can play Grow a Garden 2 from the Roblox game page without using a voting page."],
  ["Are vote rewards guaranteed?", "Only count a reward as confirmed when it appears in the game, on the Roblox page, or in a trusted announcement from the game team."],
  ["What should I do after voting?", "Go back to the game, redeem any active codes, check shop restocks, then keep farming."],
];

export default function VotePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="vote"
        title="Grow a Garden 2 Vote Guide"
        description="Voting links, reward checks, and safety steps for Grow a Garden 2 players."
        path="/vote"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Vote Guide</h1>
      <p className="mt-2 text-sm leading-6 text-[#777]">
        If you searched for Grow a Garden 2 vote or gag.gg vote, start with safety: play from Roblox, verify the exact link, and do not enter your Roblox password on random pages.
      </p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Safe Voting Checklist</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {checks.map(([title, body]) => (
            <section key={title} className="rounded-xl bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What should you do?</h2>
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

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Where to Go</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <a href="https://www.roblox.com/games/97598239454123/Grow-a-Garden-2" className="rounded-xl border border-[#e5e7eb] bg-white p-4 hover:border-[#4CAF50]">
          <p className="text-sm font-black text-[#2E3B2E]">Play on Roblox</p>
          <p className="mt-1 text-sm leading-6 text-[#777]">Use the Roblox game page when you want to play, join servers, or check the official game listing.</p>
        </a>
        <a href="https://gag.gg/" className="rounded-xl border border-[#e5e7eb] bg-white p-4 hover:border-[#4CAF50]">
          <p className="text-sm font-black text-[#2E3B2E]">gag.gg tools</p>
          <p className="mt-1 text-sm leading-6 text-[#777]">Use for player tools such as Vote, restock timers, guilds, and leaderboards. Verify any reward prompt before acting.</p>
        </a>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Vote FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {voteFaq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/official-website", title: "Official Website", detail: "Safe play link and fan-site notes", emoji: "Links" },
        { href: "/codes", title: "Codes", detail: "Redeem active rewards", emoji: "Codes" },
        { href: "/beginner-guide", title: "Beginner Route", detail: "What to do after joining", emoji: "Start" },
        { href: "/guild", title: "Guilds", detail: "Weekly rewards and group play", emoji: "Guild" },
      ]} />
    </main>
  );
}
