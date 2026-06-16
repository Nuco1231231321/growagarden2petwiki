import Image from "next/image";
import Link from "next/link";
import { gag2Codes, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Codes (June 2026) — TEAMGREENBEAN & How to Redeem",
  description: "All active GAG2 codes for June 2026. Redeem TEAMGREENBEAN for 3× Green Bean Seeds. How to enter codes, where new codes drop, verified daily.",
  alternates: { canonical: "https://growagarden2pet.wiki/codes" },
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.icon} alt="GAG2" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Codes</h1>
          <p className="text-sm text-[#777]">Verified June 15, 2026 · Updated daily</p>
        </div>
      </div>

      {gag2Codes.filter(c => c.status === 'active').map((c) => (
        <div key={c.code} className="rounded-xl bg-[#1B5E20] p-6 mb-6">
          <p className="font-mono text-2xl font-bold text-white tracking-wider select-all">{c.code}</p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-sm text-[#81C784] font-semibold">✅ Verified: {c.verified}</span>
            <span className="text-sm text-white/80">🎁 {c.reward}</span>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">How to Redeem</h2>
      <ol className="space-y-3">
        {[
          "Launch <strong>Grow a Garden 2</strong> on Roblox.",
          "Click the <strong>Settings cog</strong> (top-left corner).",
          "Type or paste the code into the <strong>code box</strong>. Codes are case-sensitive.",
          "Click <strong>Claim!</strong>",
        ].map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{i + 1}</span>
            <span className="text-sm text-[#4b4b4b]" dangerouslySetInnerHTML={{ __html: step }} />
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Where New Codes Drop</h2>
      <ul className="space-y-1 text-sm text-[#777]">
        <li>• Official <strong>Discord Server</strong> (primary source)</li>
        <li>• X/Twitter: <strong>@GrowaGardenRblx</strong></li>
        <li>• YouTube: <strong>@GrowaGarden</strong></li>
      </ul>
      <p className="mt-3 text-xs text-[#777]">Codes can expire without notice. Bookmark this page and check back daily.</p>
      <p className="mt-6 text-xs text-[#777]">коды · โค้ด · códigos · codes · kody</p>
      <RelatedGuides guides={[
        { href: "/pets", title: "All Pets", detail: "12 pets with prices, abilities & tier list", image: gag2Images.pet("bunny") },
        { href: "/beginner-guide", title: "Beginner Guide", detail: "First hour — from 0 to thriving garden", emoji: "🎯" },
        { href: "/seeds", title: "Seeds & Plants", detail: "Best crops for every stage", emoji: "🌱" },
        { href: "/wheelbarrow", title: "Wheelbarrow", detail: "What it does & is it worth 500K?", emoji: "🛒" },
      ]} />
    </main>
  );
}
