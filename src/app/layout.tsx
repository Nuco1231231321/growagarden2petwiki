import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { JetBrains_Mono, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growagarden2pet.wiki"),
  title: {
    default: "Grow a Garden 2 Guide: Pets, Codes, Seeds, Gears & Wiki",
    template: "%s | GAG2 Pet Wiki",
  },
  description:
    "Complete Grow a Garden 2 wiki with all pets, active codes, best seeds, gears, mutations, night stealing, guilds and beginner tips.",
  keywords: [
    "Grow a Garden 2",
    "GAG2 pets",
    "GAG2 codes",
    "grow a garden 2 guide",
    "grow a garden 2 wiki",
    "grow a garden 2 pets",
    "grow a garden 2 seeds",
    "grow a garden 2 gears",
    "grow a garden 2 wheelbarrow",
  ],
  authors: [{ name: "GAG2 Pet Wiki" }],
  openGraph: {
    title: "Grow a Garden 2 Guide: Pets, Codes, Seeds, Gears & Wiki",
    description: "Complete GAG2 wiki with pets, codes, seeds, gears, and guides.",
    locale: "en_US",
    type: "website",
    siteName: "GAG2 Pet Wiki",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAG2 Pet Wiki",
    description: "Complete Grow a Garden 2 guide.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://growagarden2pet.wiki" },
  verification: { google: "enAqcZP9jZTfS7WgZx6qSmxpJuCsQquPbRKN5JTGh8Y" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

const navItems = [
  ["Pets", "/pets"],
  ["Wheelbarrow", "/wheelbarrow"],
  ["Codes", "/codes"],
  ["Seeds", "/seeds"],
  ["Gears", "/gears"],
  ["Beginner", "/beginner-guide"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${jetBrainsMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-paper font-sans text-charcoal selection:bg-seedling selection:text-forest">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J8QVNGLN2X" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J8QVNGLN2X');`}
        </Script>
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Grow a Garden 2 Pet Wiki",
            url: "https://growagarden2pet.wiki",
            description: "Complete GAG2 guide with all 13 pets, active codes, seeds, gears, mutations, and beginner walkthrough.",
          })}
        </Script>
        <header className="sticky top-0 z-50 border-b-2 border-graphite bg-paper/95 backdrop-blur">
          <div className="mx-auto flex h-16 w-[calc(100%-24px)] max-w-[1600px] items-center justify-between gap-3 sm:w-[calc(100%-40px)]">
            <Link
              href="/"
              className="text-lg font-black tracking-tight text-forest transition-colors hover:text-garden sm:text-xl"
            >
              GAG2 Pet Wiki
            </Link>

            <nav className="hidden items-center gap-2 text-sm font-extrabold text-charcoal md:flex">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border-2 border-transparent px-3 py-2 transition-colors hover:border-sprout hover:text-garden"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link
              href="/pets"
              className="hidden min-h-0 items-center justify-center rounded-xl border-2 border-b-[5px] border-sprout bg-white px-4 py-2 text-sm font-black tracking-wide text-forest transition hover:translate-y-px hover:border-garden md:inline-flex"
            >
              Guides
            </Link>

            <details className="relative md:hidden">
              <summary className="list-none rounded-xl border-2 border-b-[5px] border-sprout bg-white px-4 py-2 text-sm font-black tracking-wide text-forest shadow-[0_4px_0_#d9ead5] transition hover:translate-y-px hover:border-garden">
                Menu
              </summary>
              <div className="absolute right-0 top-[calc(100%+10px)] w-48 rounded-2xl border-2 border-graphite bg-white p-2 shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                {navItems.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-xl px-3 py-2 text-sm font-bold text-charcoal transition hover:bg-[#f1f8ee] hover:text-garden"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </header>

        {children}

        <footer className="mt-auto border-t-2 border-graphite bg-paper py-8">
          <div className="mx-auto w-[calc(100%-24px)] max-w-[1600px] sm:w-[calc(100%-40px)]">
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-ash">
              <Link href="/privacy-policy" className="hover:text-garden">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-garden">
                Terms of Use
              </Link>
              <span>Data verified June 15, 2026</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
