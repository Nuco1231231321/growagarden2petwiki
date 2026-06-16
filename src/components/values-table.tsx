"use client";

import { useMemo, useState } from "react";
import { formatSheckles, gag2Crops } from "@/lib/data";

const sortOptions = ["value", "profit", "roi", "name"] as const;
type SortOption = (typeof sortOptions)[number];

function profitFor(crop: (typeof gag2Crops)[number]) {
  return crop.seedCost === null ? crop.baseValue : crop.baseValue - crop.seedCost;
}

function roiFor(crop: (typeof gag2Crops)[number]) {
  return crop.seedCost ? (profitFor(crop) / crop.seedCost) * 100 : null;
}

export function ValuesTable() {
  const [sort, setSort] = useState<SortOption>("value");
  const [rarity, setRarity] = useState("All");
  const [harvest, setHarvest] = useState("All");

  const rarities = useMemo(() => ["All", ...Array.from(new Set(gag2Crops.map((crop) => crop.rarity)))], []);
  const rows = useMemo(() => {
    const filtered = gag2Crops.filter((crop) => {
      if (rarity !== "All" && crop.rarity !== rarity) return false;
      if (harvest !== "All" && crop.harvestType !== harvest) return false;
      return true;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "profit") return profitFor(b) - profitFor(a);
      if (sort === "roi") return (roiFor(b) ?? -1) - (roiFor(a) ?? -1);
      return b.baseValue - a.baseValue;
    });
  }, [harvest, rarity, sort]);

  return (
    <section aria-labelledby="values-table-title" className="min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-sm sm:p-5">
      <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase text-garden">Crop data</p>
          <h2 id="values-table-title" className="text-2xl font-black text-soil text-balance">Crop values and ROI</h2>
          <p className="mt-1 text-sm font-semibold text-ash">Sort crops by sell value, profit, or seed return.</p>
        </div>
        <div className="grid min-w-0 gap-2 sm:grid-cols-3">
          <label className="block">
            <span className="text-xs font-black uppercase text-ash">Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="mt-1 min-h-10 w-full rounded-xl border border-[#dce8d8] px-3 text-sm font-bold">
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option.toUpperCase()}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-black uppercase text-ash">Rarity</span>
            <select value={rarity} onChange={(event) => setRarity(event.target.value)} className="mt-1 min-h-10 w-full rounded-xl border border-[#dce8d8] px-3 text-sm font-bold">
              {rarities.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-black uppercase text-ash">Harvest</span>
            <select value={harvest} onChange={(event) => setHarvest(event.target.value)} className="mt-1 min-h-10 w-full rounded-xl border border-[#dce8d8] px-3 text-sm font-bold">
              {["All", "Single", "Multi"].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-5 max-w-full overflow-x-auto rounded-xl border border-[#e5e7eb]">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-[#f8fbf6] text-xs font-black uppercase text-ash">
            <tr>
              <th scope="col" className="px-3 py-3">Rank</th>
              <th scope="col" className="px-3 py-3">Crop</th>
              <th scope="col" className="px-3 py-3">Rarity</th>
              <th scope="col" className="px-3 py-3">Base value</th>
              <th scope="col" className="px-3 py-3">Seed cost</th>
              <th scope="col" className="px-3 py-3">Profit</th>
              <th scope="col" className="px-3 py-3">ROI</th>
              <th scope="col" className="px-3 py-3">Harvest</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e7eb]">
            {rows.map((crop, index) => {
              const roi = roiFor(crop);
              return (
                <tr key={crop.slug} className="hover:bg-[#f8fbf6]">
                  <td className="px-3 py-3 font-mono font-black text-garden tabular-nums">{index + 1}</td>
                  <td className="px-3 py-3">
                    <span className="font-black text-soil">{crop.emoji} {crop.name}</span>
                  </td>
                  <td className="px-3 py-3 font-bold text-charcoal">{crop.rarity}</td>
                  <td className="px-3 py-3 font-mono font-black tabular-nums text-charcoal">{formatSheckles(crop.baseValue)}</td>
                  <td className="px-3 py-3 font-mono font-bold tabular-nums text-ash">{crop.seedCost === null ? "Pack" : formatSheckles(crop.seedCost)}</td>
                  <td className="px-3 py-3 font-mono font-black tabular-nums text-charcoal">{formatSheckles(profitFor(crop))}</td>
                  <td className="px-3 py-3 font-mono font-black tabular-nums text-charcoal">{roi === null ? "Pack" : `${Math.round(roi).toLocaleString("en-US")}%`}</td>
                  <td className="px-3 py-3 font-bold text-charcoal">{crop.harvestType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
