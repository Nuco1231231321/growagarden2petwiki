import Image from "next/image";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Codes, gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Codes (June 2026): TEAMGREENBEAN & Redeem Steps",
  description: "Use active Grow a Garden 2 codes for free rewards. Redeem TEAMGREENBEAN for Green Bean Seeds and follow the steps if a code does not work.",
  alternates: { canonical: "https://growagarden2pet.wiki/codes" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Codes", href: "/codes" },
];

const quickTips = [
  ["Use the code immediately", "Codes are highest value at the start because free seeds shorten the first money loop."],
  ["Plant the reward right away", "A redeemed code does nothing if the seed sits unused while the shop cycle keeps moving."],
  ["Do not stay stuck on one broken claim", "If a code fails, check the common fixes fast and move on."],
];

const redeemSteps = [
  ["Open Grow a Garden 2 on Roblox", "Launch the game before looking for the code box."],
  ["Open Settings from the gear icon", "The code field is inside Settings, not in the normal shop route."],
  ["Paste the code exactly", "Codes are easiest to redeem by pasting instead of typing by hand."],
  ["Claim and plant the reward seeds", "Turn the reward into farm progress immediately instead of waiting for a later run."],
];

const failedCodeFixes = [
  ["Paste instead of typing", "Capitalization or a tiny typo is the most common reason a code fails."],
  ["Remove extra spaces", "Leading or trailing spaces can break a working code."],
  ["Rejoin once", "A fresh server can fix a code claim that did not register the first time."],
  ["Stop retrying after the obvious fixes", "Do not burn time on one code while your farm route is sitting idle."],
];

const routeAdvice = [
  ["Best use for the reward", "Plant the code reward before making normal shop buys.", "That gives the free seed time to start paying back immediately."],
  ["Do not do this", "Do not save the reward seed for much later unless your plot is already full of better crops.", "Early code value comes from speeding up the current route."],
  ["Who benefits most", "New accounts and weak early routes.", "Free seed value matters most before the first stable crop loop is online."],
];

export default function CodesPage() {
  const activeCodes = gag2Codes.filter((code) => code.status === "active");

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="codes"
        title="Grow a Garden 2 Codes"
        description="Active code list, redeem steps, and what to do with code rewards in Grow a Garden 2."
        path="/codes"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Codes</h1>
          <p className="text-sm text-[#777]">Redeem the active reward first, then turn it into farm progress immediately.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#1B5E20] bg-[#1B5E20] p-5 text-white">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-[#A5D6A7]">Use this code first</p>
        {activeCodes.map((code) => (
          <div key={code.code} className="mt-3 rounded-xl bg-white/10 p-4">
            <p className="select-all font-mono text-2xl font-black tracking-wider">{code.code}</p>
            <p className="mt-2 text-sm font-semibold text-[#C8E6C9]">Reward: {code.reward}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-3">
        {quickTips.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{title}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#4b4b4b]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">How to redeem the code</h2>
        <ol className="mt-4 space-y-3">
          {redeemSteps.map(([title, body], index) => (
            <li key={title} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
              <div>
                <p className="text-sm font-extrabold text-[#4b4b4b]">{title}</p>
                <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">What to do with the reward</h2>
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
              {routeAdvice.map((row) => (
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
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">If the code does not work</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {failedCodeFixes.map(([title, body]) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedGuides
        guides={[
          { href: "/beginner-guide", title: "Beginner Route", detail: "Use the code reward inside the first-hour spending route instead of randomly planting it.", emoji: "Start" },
          { href: "/seeds", title: "Seeds & Plants", detail: "Move from the code reward into the next crop upgrade cleanly.", image: gag2Images.seed("seed-shop") },
          { href: "/pets", title: "All Pets", detail: "Use the extra early income to reach Bunny, Deer, and then defense pets faster.", image: gag2Images.pet("bunny") },
          { href: "/weather", title: "Weather Events", detail: "Save stronger crops for event boosts after the first route is stable.", emoji: "Weather" },
        ]}
      />
    </main>
  );
}
