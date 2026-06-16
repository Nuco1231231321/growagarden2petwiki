"use client";

import { useMemo, useState } from "react";
import { gag2Images, gag2TopSeeds } from "@/lib/data";

const SORT_OPTIONS = ["Default", "Price Low", "Price High", "Name"] as const;

const seedVisuals: Record<string, { image?: string; emoji: string }> = {
  Tulip: { emoji: "🌷" },
  Apple: { emoji: "🍎" },
  Corn: { emoji: "🌽" },
  Cactus: { emoji: "🌵" },
  Mushroom: { image: gag2Images.seed("mushroom-farm"), emoji: "🍄" },
  "Green Bean": { emoji: "🫘" },
  Banana: { emoji: "🍌" },
  Grape: { emoji: "🍇" },
  Coconut: { emoji: "🥥" },
  "Dragon Fruit": { emoji: "🐉" },
  Sunflower: { emoji: "🌻" },
  "Poison Apple": { emoji: "🍏" },
  Carrot: { emoji: "🥕" },
  Strawberry: { emoji: "🍓" },
  Blueberry: { emoji: "🫐" },
  Tomato: { emoji: "🍅" },
  Bamboo: { emoji: "🎋" },
  Pineapple: { image: gag2Images.seed("pineapple-plant"), emoji: "🍍" },
  Mango: { emoji: "🥭" },
  Cherry: { emoji: "🍒" },
  Acorn: { emoji: "🌰" },
  Pomegranate: { emoji: "🍎" },
  "Venus Fly Trap": { image: gag2Images.seed("venus-fly-trap"), emoji: "🪴" },
  "Moon Bloom": { emoji: "🌙" },
  "Dragon's Breath": { emoji: "🔥" },
};

function priceNumber(value: string) {
  return Number.parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
}

export function SeedFilter() {
  const [search, setSearch] = useState("");
  const [harvest, setHarvest] = useState("All");
  const [sort, setSort] = useState<typeof SORT_OPTIONS[number]>("Default");

  const filtered = useMemo(() => {
    let list = gag2TopSeeds.filter((seed) => {
      if (harvest !== "All" && seed.harvestType !== harvest) return false;
      if (search && !`${seed.name} ${seed.notes}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === "Price Low") list = [...list].sort((a, b) => priceNumber(a.costSheckles) - priceNumber(b.costSheckles));
    if (sort === "Price High") list = [...list].sort((a, b) => priceNumber(b.costSheckles) - priceNumber(a.costSheckles));
    if (sort === "Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, harvest, sort]);

  const hasFilters = harvest !== "All" || search !== "";

  return (
    <>
      <div className="sticky top-[64px] z-40 mb-6 space-y-2.5 rounded-xl border border-[#e5e7eb] bg-white/95 p-3 shadow-sm backdrop-blur">
        <input
          type="text"
          placeholder="Search seed name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-medium text-[#4b4b4b] placeholder:text-[#aaa] focus:border-garden focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[10px] font-bold uppercase text-[#aaa]">Harvest</span>
          {["All", "Single", "Multi"].map((h) => (
            <button key={h} onClick={() => setHarvest(h)} className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${harvest === h ? "bg-garden text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{h}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORT_OPTIONS[number])} className="cursor-pointer rounded-lg border border-[#e5e7eb] bg-white px-2 py-1 text-[11px] font-bold text-[#777]">
            {SORT_OPTIONS.map((option) => (<option key={option} value={option}>Sort: {option}</option>))}
          </select>
          {hasFilters && (
            <button onClick={() => { setHarvest("All"); setSearch(""); }} className="ml-auto rounded-full bg-[#FFEBEE] px-3 py-1 text-[11px] font-bold text-[#E53935] transition hover:bg-[#FFCDD2]">Clear</button>
          )}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-bold text-[#777]">{filtered.length} of {gag2TopSeeds.length} seeds</p>
        <div className="flex gap-1.5">
          {[{ l: "Value", p: "Bamboo" }, { l: "Defense", p: "Venus" }, { l: "Endgame", p: "Moon" }].map((quick) => (
            <button key={quick.l} onClick={() => setSearch(quick.p)} className="rounded-full bg-[#C8E6C9]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#4CAF50] transition hover:bg-[#C8E6C9]">{quick.l}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((seed) => {
          const visual = seedVisuals[seed.name] ?? { emoji: seed.emoji };
          return (
            <div key={seed.name} className="group overflow-hidden rounded-2xl border-2 border-[#e5e7eb] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
              <div className="relative flex h-36 items-center justify-center bg-[#f5f9f3] px-4 text-center">
                  <span className="text-6xl leading-none">{visual.emoji}</span>
              </div>
              <div className="p-4">
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <h3 className="text-base font-extrabold text-[#2E3B2E]">{seed.name}</h3>
                  <span className="shrink-0 text-xs font-bold text-[#777]">{seed.rarity}</span>
                </div>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${seed.harvestType === "Multi" ? "bg-[#E8F5E9] text-[#4CAF50]" : "bg-[#FFF8E1] text-[#FFC107]"}`}>{seed.harvestType}</span>
                <p className="mt-3 font-mono text-sm font-bold text-[#4b4b4b]">{seed.costSheckles} Sheckles</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#777]">{seed.notes}</p>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-[#e5e7eb] bg-white py-16 text-center">
          <p className="text-lg font-extrabold text-[#4b4b4b]">No seeds match</p>
          <button onClick={() => { setHarvest("All"); setSearch(""); }} className="mt-3 rounded-full bg-garden px-5 py-2 text-sm font-bold text-white hover:bg-[#3d8b40]">Show all</button>
        </div>
      )}
    </>
  );
}
