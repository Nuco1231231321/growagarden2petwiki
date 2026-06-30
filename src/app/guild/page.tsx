import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Guilds: How to Create, Join & Earn Weekly Rewards",
  description: "GAG2 guilds guide: how to create (99 Robux), join via mailbox invite, guild roles (Owner/Elder/Member), weekly competitions and crop-based rewards.",
  alternates: { canonical: "https://growagarden2pet.wiki/guild" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pets & Eggs", href: "/eggs" },
  { name: "Guilds", href: "/guild" },
];

const quickAnswers = [
  ["Want eggs faster?", "Join an active guild before thinking about creating your own."],
  ["No public browser", "Guild joining is invite-based, so the mailbox matters more than the Guild Stand."],
  ["Main reward path", "Guilds matter because they turn crop progress into eggs and weekly rewards."],
];

const decisionRows = [
  ["Join a guild", "You mostly want eggs and weekly rewards quickly.", "Joining an active guild is the fastest route because you skip the setup burden."],
  ["Create a guild", "You already have reliable players and want control over invites and roles.", "Creating only makes sense if you can keep the guild active enough to earn rewards."],
  ["Do not create yet", "You are playing mostly solo or do not have active members lined up.", "A weak self-made guild usually slows reward progress instead of helping it."],
];

const rewardSteps = [
  ["Join an active guild", "An inactive guild gives you the badge of being in a guild without the actual reward flow."],
  ["Contribute your heaviest crop", "Weekly progress is built from strong crop contribution, not from simply logging in."],
  ["Use better crop routes over time", "Guild rewards improve as your crop quality improves, so good seed, pet, and mutation routes still matter."],
  ["Turn rewards into egg progress", "The guild route is most useful when it feeds straight back into pets and account growth."],
];

const boundaries = [
  ["Mailbox, not Guild Stand", "The most common mistake is looking for invites in the wrong place."],
  ["Do not pay 99 Robux just to test the system", "If your real need is eggs or rewards, joining first is usually the better route."],
  ["A dead guild is barely better than no guild", "Weekly rewards depend on active members actually contributing."],
];

const roles = [
  ["Owner", "Can create, invite, promote, and disband.", "Best only if you are running the group long term."],
  ["Elder", "Can invite and help recruit.", "Useful when you already trust the player and need support."],
  ["Member", "Standard contributor role.", "Enough for most players whose main goal is rewards."],
];

export default function GuildPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="guild"
        title="Grow a Garden 2 Guilds Guide"
        description="Guild guide for how to create, join, invite, earn weekly rewards, get eggs, and use guild roles in Grow a Garden 2."
        path="/guild"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="GAG2" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Guilds Guide</h1>
          <p className="text-sm text-[#777]">Use guilds for weekly rewards and eggs, not just for the label.</p>
        </div>
      </div>

      <section className="grid gap-3 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5 sm:grid-cols-3">
        {quickAnswers.map(([title, body]) => (
          <div key={title} className="rounded-xl bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{title}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#4b4b4b]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-xl border border-[#FFCDD2] bg-[#FFEBEE] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Most important guild mistake</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          There is no public guild browser. If someone invites you, check the garden mailbox. Do not waste time expecting the Guild Stand to show open guild listings.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Should you join or create a guild?</h2>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Decision</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Your situation</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Best move</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
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

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">How to get guild rewards that actually matter</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {rewardSteps.map(([title, body], index) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
              <h3 className="mt-3 text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {boundaries.map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#FFF0C2] bg-[#FFF8E1] p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-[#2E3B2E]">Roles and when they matter</h2>
        <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Role</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What it does</th>
                <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Who needs it</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((row) => (
                <tr key={row[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Guild reward route</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/eggs" className="font-semibold text-[#4CAF50] hover:underline">
            Egg Hatching
          </Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">
            Pets Tier List
          </Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">
            Best Seeds
          </Link>
          <Link href="/badges" className="font-semibold text-[#4CAF50] hover:underline">
            Badges
          </Link>
        </div>
      </section>
    </main>
  );
}
