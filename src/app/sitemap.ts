import type { MetadataRoute } from "next";

const BASE = "https://growagarden2pet.wiki";

const pages = [
  { path: "", priority: 1.0, freq: "daily" as const },
  { path: "/pets", priority: 0.9, freq: "weekly" as const },
  { path: "/calculator", priority: 0.9, freq: "weekly" as const },
  { path: "/values", priority: 0.86, freq: "weekly" as const },
  { path: "/codes", priority: 0.9, freq: "daily" as const },
  { path: "/wheelbarrow", priority: 0.85, freq: "weekly" as const },
  { path: "/beginner-guide", priority: 0.85, freq: "weekly" as const },
  { path: "/seeds", priority: 0.8, freq: "weekly" as const },
  { path: "/gears", priority: 0.8, freq: "weekly" as const },
  { path: "/mutations", priority: 0.78, freq: "weekly" as const },
  { path: "/night-stealing", priority: 0.78, freq: "weekly" as const },
  { path: "/props", priority: 0.75, freq: "weekly" as const },
  { path: "/guild", priority: 0.75, freq: "weekly" as const },
  { path: "/seed-packs", priority: 0.72, freq: "weekly" as const },
  { path: "/eggs", priority: 0.78, freq: "weekly" as const },
  { path: "/badges", priority: 0.75, freq: "weekly" as const },
  { path: "/privacy-policy", priority: 0.3, freq: "monthly" as const },
  { path: "/terms", priority: 0.3, freq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
