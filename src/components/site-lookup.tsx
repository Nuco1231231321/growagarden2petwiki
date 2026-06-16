"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { gag2LookupIndex } from "@/lib/data";

const RECENT_KEY = "gag2:recent-searches:v1";
const quickTerms = ["pets", "wheelbarrow", "green bean", "gold mutation", "badge"];

function getRecentSearches() {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(RECENT_KEY);
    return stored ? (JSON.parse(stored) as string[]).slice(0, 5) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(term: string) {
  if (typeof window === "undefined" || !term.trim()) return;
  const next = [term.trim(), ...getRecentSearches().filter((item) => item !== term.trim())].slice(0, 5);
  window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}

export function SiteLookup() {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return gag2LookupIndex.slice(0, 6);
    return gag2LookupIndex
      .map((item) => {
        const haystack = [item.title, item.type, item.summary, ...item.keywords].join(" ").toLowerCase();
        const exact = item.title.toLowerCase() === normalized ? 4 : 0;
        const starts = item.title.toLowerCase().startsWith(normalized) ? 3 : 0;
        const includes = haystack.includes(normalized) ? 2 : 0;
        const word = normalized.split(/\s+/).filter((part) => haystack.includes(part)).length;
        return { item, score: exact + starts + includes + word };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item)
      .slice(0, 8);
  }, [query]);

  function pickTerm(term: string) {
    setQuery(term);
    saveRecentSearch(term);
    setRecent(getRecentSearches());
  }

  return (
    <section aria-labelledby="quick-lookup-title" className="mt-8 rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase text-garden">Quick lookup</p>
          <h2 id="quick-lookup-title" className="text-2xl font-black text-soil text-balance">Find pets, crops, gear, codes, and badges</h2>
        </div>
        <Link href="/calculator" className="text-sm font-black text-garden underline decoration-2 underline-offset-4">
          Open crop calculator
        </Link>
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Search Grow a Garden 2 data</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setRecent(getRecentSearches())}
          placeholder="Search wheelbarrow, Bunny, Green Bean, Gold mutation..."
          className="min-h-12 w-full rounded-xl border border-[#cfe0c9] bg-[#f8fbf6] px-4 text-base font-bold text-charcoal outline-none focus:border-garden"
        />
      </label>

      <div className="mt-3 flex flex-wrap gap-2">
        {quickTerms.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => pickTerm(term)}
            className="rounded-full border border-[#dce8d8] bg-white px-3 py-1.5 text-xs font-black text-charcoal hover:border-garden hover:text-garden"
          >
            {term}
          </button>
        ))}
      </div>

      {recent.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-ash">
          <span>Recent:</span>
          {recent.map((term) => (
            <button key={term} type="button" onClick={() => pickTerm(term)} className="text-garden underline underline-offset-2">
              {term}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 grid gap-2 md:grid-cols-2">
        {results.map((result) => (
          <Link
            key={`${result.type}-${result.title}`}
            href={result.href}
            onClick={() => saveRecentSearch(query || result.title)}
            className="rounded-xl border border-[#e5e7eb] bg-white p-3 hover:border-garden"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-black text-soil">{result.title}</h3>
              <span className="shrink-0 rounded-full bg-[#eaf7ed] px-2 py-0.5 text-[10px] font-black uppercase text-garden">{result.type}</span>
            </div>
            <p className="mt-1 line-clamp-2 text-xs font-semibold leading-5 text-ash">{result.summary}</p>
          </Link>
        ))}
      </div>

      {query && results.length === 0 && (
        <div className="mt-4 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
          <p className="text-sm font-black text-soil">No result found</p>
          <p className="mt-1 text-sm text-ash">Try a pet name, crop name, gear, mutation, code, or badge.</p>
        </div>
      )}
    </section>
  );
}
