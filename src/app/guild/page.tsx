import Image from "next/image";
import Link from "next/link";
import { gag2Images } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Guilds: How to Create, Join & Earn Weekly Rewards",
  description: "GAG2 guilds guide: how to create (99 Robux), join via mailbox invite, guild roles (Owner/Elder/Member), weekly competitions and crop-based rewards.",
  alternates: { canonical: "https://growagarden2pet.wiki/guild" },
};

export default function GuildPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.icon} alt="GAG2" width={56} height={56} className="rounded-xl" />
        <div><h1 className="text-3xl font-extrabold text-[#2E3B2E]">Guilds Guide</h1><p className="text-sm text-[#777]">Teams of up to 50 players — compete for weekly rewards</p></div>
      </div>

      <div className="p-4 rounded-xl border-2 border-[#E53935]/20 bg-[#FFEBEE] mb-6">
        <p className="text-sm font-extrabold text-[#E53935]">⚠️ Common Confusion</p>
        <p className="mt-1 text-sm text-[#E53935]/80">There is <strong>no public guild browser</strong>. Joining is <strong>invite-only</strong>. Invites go to your <strong>garden mailbox</strong>, NOT to Gilbert at the Guild Stand.</p>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mb-3">How to Join</h2>
      <ol className="space-y-2">
        {["Get invited by a guild <strong>Owner</strong> or <strong>Elder</strong>.","Go to the <strong>mailbox in front of your garden</strong> (NOT the Guild Stand).","Open Mail tab → click <strong>Join</strong>."].map((s,i) => (
          <li key={i} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i+1}</span><span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{__html:s}} /></li>
        ))}
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Roles & Limits</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Role</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Permissions</th><th className="px-3 py-2 text-left font-bold text-[#777] text-xs">Limit</th></tr></thead>
          <tbody>
            {[["Owner","Founder — invite, promote, disband","1"],["Elder","Officer — can invite","Max 5"],["Member","Standard — cannot invite","Up to 50"]].map((r) => (
              <tr key={r[0]} className="border-b border-[#3c3c3c]/10 last:border-0"><td className="px-3 py-2 font-bold text-[#4b4b4b]">{r[0]}</td><td className="px-3 py-2 text-xs text-[#777]">{r[1]}</td><td className="px-3 py-2 text-xs text-[#4b4b4b]">{r[2]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">How to Create a Guild</h2>
      <ol className="space-y-2">
        {["Go to the central hub and speak to <strong>Gilbert</strong> at the Guild Stand.","Choose a <strong>Guild Name</strong>, <strong>Tag</strong> (abbreviation), and <strong>Description</strong>.","Customize colors for your guild name and tag.","Pay <strong>99 Robux</strong> to create. Default member limit is 20, expandable to 50."].map((s, i) => (
          <li key={i} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i+1}</span><span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{__html:s}} /></li>
        ))}
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Weekly Rewards</h2>
      <p className="text-sm text-[#777] leading-relaxed">Guilds compete based on the <strong>combined weight of every member's heaviest single crop</strong>. Each member contributes 1 point per gram of their heaviest crop. Higher-ranked guilds earn exclusive rewards at the end of each week.</p>
      <p className="mt-3 text-sm text-[#777]"><strong>Joining is free</strong> — you don't need to create a guild to participate. Find an active guild and contribute your heaviest crops to help the team rank higher. Guilds with active farmers consistently out-earn solo players.</p>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Pro Tips</h2>
      <ul className="space-y-2 text-sm text-[#777]">
        <li>• <strong>Accept invites at your garden mailbox</strong> — NOT at Gilbert's stand. This is the #1 confusion point.</li>
        <li>• <strong>Elders can invite but cannot disband</strong> — assign Elder to trusted members for recruiting.</li>
        <li>• <strong>Only Owners can disband</strong> — if you create a guild, you cannot leave without disbanding it first.</li>
        <li>• <strong>Grow the heaviest crop possible</strong> — use Super Sprinklers, Deer pets, and mutations to maximize crop weight for guild ranking.</li>
      </ul>
    </main>
  );
}
