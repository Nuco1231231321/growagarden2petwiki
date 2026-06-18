import type { MetadataRoute } from "next";

const BASE = "https://growagarden2pet.wiki";

const pages = [
  { path: "", priority: 1.0, freq: "daily" as const, modified: "2026-06-18" },
  { path: "/pets", priority: 0.9, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/calculator", priority: 0.9, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/values", priority: 0.86, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/codes", priority: 0.9, freq: "daily" as const, modified: "2026-06-15" },
  { path: "/wheelbarrow", priority: 0.85, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/beginner-guide", priority: 0.85, freq: "weekly" as const, modified: "2026-06-15" },
  { path: "/seeds", priority: 0.8, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/gears", priority: 0.8, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/mutations", priority: 0.78, freq: "weekly" as const, modified: "2026-06-15" },
  { path: "/night-stealing", priority: 0.78, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/props", priority: 0.75, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/guild", priority: 0.75, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/seed-packs", priority: 0.72, freq: "weekly" as const, modified: "2026-06-15" },
  { path: "/eggs", priority: 0.78, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/badges", priority: 0.75, freq: "weekly" as const, modified: "2026-06-18" },
  { path: "/privacy-policy", priority: 0.3, freq: "monthly" as const, modified: "2026-06-15" },
  { path: "/terms", priority: 0.3, freq: "monthly" as const, modified: "2026-06-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: new Date(p.modified),
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
