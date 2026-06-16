"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { gag2TopSeeds, gag2Images } from "@/lib/data";

const SORT_OPTIONS = ["Default", "Price ↑", "Price ↓", "Name"] as const;

export function SeedFilter() {
  const [search, setSearch] = useState("");
  const [harvest, setHarvest] = useState("All");
  const [sort, setSort] = useState<typeof SORT_OPTIONS[number]>("Default");

  const filtered = useMemo(() => {
    let list = gag2TopSeeds.filter((s) => {
      if (harvest !== "All" && s.harvestType !== harvest) return false;
      if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.notes.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === "Price ↑") list = [...list].sort((a, b) => parseInt(a.costSheckles.replace(/[,~]/g, "")) - parseInt(b.costSheckles.replace(/[,~]/g, "")));
    if (sort === "Price ↓") list = [...list].sort((a, b) => parseInt(b.costSheckles.replace(/[,~]/g, "")) - parseInt(a.costSheckles.replace(/[,~]/g, "")));
    if (sort === "Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, harvest, sort]);

  const hasFilters = harvest !== "All" || search !== "";

  return (
    <>
      <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur rounded-xl border border-[#e5e7eb] p-3 mb-6 space-y-2.5 shadow-sm">
        <input type="text" placeholder="🔍 Search seed name..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-medium text-[#4b4b4b] placeholder:text-[#aaa] focus:outline-none focus:border-garden" />
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-bold text-[#aaa] uppercase mr-1">Harvest</span>
          {["All","Single","Multi"].map((h) => (
            <button key={h} onClick={() => setHarvest(h)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${harvest === h ? "bg-garden text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{h}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORT_OPTIONS[number])}
            className="rounded-lg border border-[#e5e7eb] px-2 py-1 text-[11px] font-bold text-[#777] bg-white cursor-pointer">
            {SORT_OPTIONS.map((o) => (<option key={o} value={o}>Sort: {o}</option>))}
          </select>
          {hasFilters && (
            <button onClick={() => { setHarvest("All"); setSearch(""); }}
              className="ml-auto rounded-full bg-[#FFEBEE] px-3 py-1 text-[11px] font-bold text-[#E53935] hover:bg-[#FFCDD2] transition">✕ Clear</button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-[#777]">{filtered.length} of {gag2TopSeeds.length} seeds</p>
        <div className="flex gap-1.5">
          {[{ l: "Best", p: "Bamboo" }, { l: "Tier", p: "Venus" }, { l: "Endgame", p: "Moon" }].map((q) => (
            <button key={q.l} onClick={() => setSearch(q.p)}
              className="rounded-full bg-[#C8E6C9]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#4CAF50] hover:bg-[#C8E6C9] transition">{q.l}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((seed) => (
          <div key={seed.name} className="group rounded-2xl border-2 border-[#e5e7eb] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="relative h-36 bg-[#f5f9f3] flex items-center justify-center">
              <span className="text-6xl">{seed.emoji}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-base font-extrabold text-[#4b4b4b]">{seed.name}</h3>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${seed.harvestType === 'Multi' ? 'bg-[#E8F5E9] text-[#4CAF50]' : 'bg-[#FFF8E1] text-[#FFC107]'}`}>{seed.harvestType}</span>
              </div>
              <p className="text-xs text-[#777] mb-1.5">{seed.rarity}</p>
              <p className="font-mono text-sm font-bold text-[#4b4b4b]">💰 {seed.costSheckles}</p>
              <p className="mt-1.5 text-[11px] text-[#777] leading-relaxed">{seed.notes}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-xl border border-[#e5e7eb] bg-white">
          <p className="text-4xl mb-2">🔍</p><p className="text-lg font-extrabold text-[#4b4b4b]">No seeds match</p>
          <button onClick={() => { setHarvest("All"); setSearch(""); }} className="mt-3 rounded-full bg-garden px-5 py-2 text-sm font-bold text-white hover:bg-[#3d8b40]">Show all</button>
        </div>
      )}
    </>
  );
}
