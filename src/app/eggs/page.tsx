import Image from "next/image";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Eggs, gag2Images, gag2Pets } from "@/lib/data";

const petImageKey: Record<string, string> = {};
gag2Pets.forEach((pet) => {
  petImageKey[pet.name] = pet.imageKey;
});
petImageKey["Big Bee"] = "bee";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Eggs Guide: Common & Epic Egg Hatch Odds",
  description: "Complete GAG2 egg hatching guide: Common and Epic egg pet odds, how to get eggs from Guild rewards, hatch times, and which pets you can get from each egg type.",
  alternates: { canonical: "https://growagarden2pet.wiki/eggs" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pets & Eggs", href: "/pets" },
  { name: "Eggs", href: "/eggs" },
];

const quickAnswers = [
  ["How to get eggs", "Join an active guild, help push guild reward progress, then claim the egg from guild rewards."],
  ["Is Common Egg worth it?", "Yes for new players because Deer, Bee, Bunny, and other practical pets can change the first route."],
  ["Should you chase rare hatches?", "No. Treat Unicorn or Raccoon as bonus hits, not as your plan."],
];

const eggSteps = [
  ["Join a guild that actually progresses", "If the guild barely earns rewards, your egg route stays slow no matter how good the hatch table looks."],
  ["Contribute crop weight every cycle", "Egg progress comes from guild reward progress, so steady contribution matters more than checking the hatch table again."],
  ["Claim the egg and place it in your garden", "Do not leave the egg unplaced if your goal is to turn guild work into a usable pet quickly."],
  ["Build your pet route around practical hatches", "Use Deer, Bunny, Bee, and other useful outcomes first. Rare chase pets come second."],
];

const decisionRows = [
  ["Best practical hatch", "Deer", "Growth helps every crop route, so Deer is still the best realistic upgrade for many accounts."],
  ["Best early defense hatch", "Bee", "Bee matters once your crops finally become expensive enough to protect at night."],
  ["Good early utility hatch", "Bunny", "If you still lack movement support, Bunny is immediately useful."],
  ["Rare jackpot hatch", "Unicorn or Raccoon", "Strong outcomes, but not the reason to commit your whole route to Common Eggs."],
];

const buyOrSkip = [
  ["Keep hatching Common Egg", "You still need Deer, Bee, Bunny, or your pet slots are weak.", "Common Egg is still productive because even the realistic results help."],
  ["Slow down and focus on guild progress first", "You are checking odds constantly but barely earning new eggs.", "Your bottleneck is guild reward speed, not hatch theory."],
  ["Do not build around Epic Egg yet", "You are planning for an unreleased or unavailable reward path.", "Current progress should stay on what the live route actually gives you."],
];

const troubleshooting = [
  ["No egg yet", "Your guild may not be progressing enough. Active contribution matters more than just being in a guild."],
  ["Wrong pet result", "Eggs are chance-based. Judge Common Egg by the value of its practical hatches, not by one bad roll."],
  ["Egg not hatching", "Place it in your garden and wait for the timer to finish before expecting a result."],
  ["Guild route feels slow", "Fix the guild activity problem first. Better teammates often matter more than reading more hatch odds."],
];

const faq = [
  ["How do you get eggs in Grow a Garden 2?", "Join a guild, help push guild reward progress, claim the egg reward, place it in your garden, and wait for it to hatch."],
  ["What is the best Common Egg hatch?", "Deer is the best practical hatch for most players, while Bee is the best early defensive hatch."],
  ["Is Common Egg worth hatching?", "Yes if your pet route still needs practical upgrades. It is less about rare jackpots and more about getting useful support pets."],
  ["Can you buy eggs directly?", "This page treats guild rewards as the live egg route. If you want more eggs, improve guild reward progress first."],
  ["Should beginners care about Epic Egg?", "Not as a current route. Build around Common Egg and live guild rewards first."],
];

export default function EggsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="eggs"
        title="Grow a Garden 2 Egg Hatching Guide"
        description="Egg guide for how to get eggs, Common Egg odds, Epic Egg pets, and which egg rewards matter in Grow a Garden 2."
        path="/eggs"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <span className="text-5xl">Egg</span>
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Egg Hatching Guide</h1>
          <p className="text-sm text-[#777]">Use guild rewards to build a real pet route, not just to chase rare hatches.</p>
        </div>
      </div>

      <section className="grid gap-3 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5 sm:grid-cols-3">
        {quickAnswers.map(([title, body]) => (
          <div key={title} className="rounded-xl bg-white p-3">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{title}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#4b4b4b]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          Eggs matter most when they solve a real pet weakness. For most accounts, Common Egg is worth it because Deer, Bee, Bunny, and other practical hatches improve growth, defense, or movement. Do not judge the route only by Unicorn or Raccoon odds.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">How to get eggs without wasting time</h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {eggSteps.map(([title, body], index) => (
            <li key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
              <h3 className="mt-3 text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What Common Egg is actually good for</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Goal</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best hatch</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Should you keep pushing eggs now?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Decision</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Your situation</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What to do</th>
              </tr>
            </thead>
            <tbody>
              {buyOrSkip.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {gag2Eggs.map((egg) => (
        <section key={egg.name} className="mt-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">{egg.emoji}</span>
            <div>
              <h2 className="text-xl font-extrabold text-[#2E3B2E]">{egg.name}</h2>
              <p className="text-sm text-[#777]">
                Source: {egg.source} | Rarity: {egg.rarity}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Pet</th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Drop rate</th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Visual</th>
                </tr>
              </thead>
              <tbody>
                {egg.pets.map((pet) => (
                  <tr key={pet.name} className="border-b border-[#3c3c3c]/10 last:border-0">
                    <td className="flex items-center gap-2 px-3 py-2">
                      {petImageKey[pet.name] && (
                        <Image src={gag2Images.pet(petImageKey[pet.name])} alt={pet.name} width={28} height={28} className="rounded-lg" />
                      )}
                      <span className="font-bold text-[#4b4b4b]">{pet.name}</span>
                    </td>
                    <td className="px-3 py-2 font-mono text-sm font-extrabold text-[#4CAF50]">{pet.odds}</td>
                    <td className="px-3 py-2">
                      <div className="h-2 w-32 rounded-full bg-[#e5e7eb]">
                        <div className="h-2 rounded-full bg-garden" style={{ width: pet.odds }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">If your egg route feels stuck</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {troubleshooting.map(([title, body]) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Do not overplan around Epic Egg</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          Epic Egg only matters once it is part of your real reward route. Until then, Common Egg and guild activity are the decisions that actually change your account.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Egg FAQ</h2>
        <div className="grid gap-3">
          {faq.map(([question, answer]) => (
            <section key={question} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#2E3B2E]">{question}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{answer}</p>
            </section>
          ))}
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/pets", title: "All Pets", detail: "Turn useful hatches into a real pet buy order and slot priority.", image: gag2Images.pet("bunny") },
          { href: "/guild", title: "Guilds Guide", detail: "Fix the reward path first if eggs are arriving too slowly.", emoji: "Guild" },
          { href: "/badges", title: "Badges & Achievements", detail: "See which egg and pet goals connect to badge progress.", emoji: "Badge" },
        ]}
      />
    </main>
  );
}
