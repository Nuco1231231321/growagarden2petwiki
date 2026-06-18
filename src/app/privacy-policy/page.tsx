import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy Policy for GAG2 Pet Wiki." };
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 prose prose-sm">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Privacy Policy</h1>
      <p className="text-sm text-[#777] mt-2">Last updated: June 15, 2026</p>
      <p className="mt-4 text-sm text-[#4b4b4b]">GAG2 Pet Wiki (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a fan-made guide website for the Roblox game Grow a Garden 2. We are not affiliated with Roblox Corporation or The Garden Game.</p>
      <h2 className="text-lg font-extrabold text-[#2E3B2E] mt-6">Information We Collect</h2>
      <p className="text-sm text-[#4b4b4b]">We use Plausible Analytics (privacy-focused, cookie-free) to collect anonymous page view data. We do not collect personal information, use cookies for tracking, or share data with third parties.</p>
      <h2 className="text-lg font-extrabold text-[#2E3B2E] mt-6">Advertising</h2>
      <p className="text-sm text-[#4b4b4b]">We may display advertisements through Google AdSense. Google may use cookies to serve ads based on prior visits. Users can opt out at <a href="https://adssettings.google.com" className="text-[#4CAF50]">Google Ad Settings</a>.</p>
      <h2 className="text-lg font-extrabold text-[#2E3B2E] mt-6">Contact</h2>
      <p className="text-sm text-[#4b4b4b]">For questions, contact us at admin@growagarden2pet.wiki.</p>
    </main>
  );
}
