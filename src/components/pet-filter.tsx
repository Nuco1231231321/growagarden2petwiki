"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gag2Images, gag2Pets } from "@/lib/data";

const rarityBorder: Record<string, string> = { Common: "border-[#9E9E9E]", Uncommon: "border-[#4CAF50]", Rare: "border-[#2196F3]", Legendary: "border-[#FF9800]", Mythic: "border-[#E91E63]", Super: "border-[#FFC107]" };
const rarityBg: Record<string, string> = { Common: "bg-[#F5F5F5] text-[#777]", Uncommon: "bg-[#E8F5E9] text-[#4CAF50]", Rare: "bg-[#E3F2FD] text-[#2196F3]", Legendary: "bg-[#FFF3E0] text-[#FF9800]", Mythic: "bg-[#FCE4EC] text-[#E91E63]", Super: "bg-[#FFF8E1] text-[#FFC107]" };
const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#777]" };

const ALL_RARITIES = ["All", "Common", "Uncommon", "Rare", "Legendary", "Mythic", "Super"];
const ALL_ROLES = ["All", "speed", "growth", "defense", "income", "utility"];
const ALL_TIERS = ["All", "S", "A", "B", "C"];
const SORT_OPTIONS = ["Default", "Price Low", "Price High", "Name"] as const;

function priceNumber(value: string) {
  return Number.parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
}

export function PetFilter() {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [role, setRole] = useState("All");
  const [tier, setTier] = useState("All");
  const [sort, setSort] = useState<typeof SORT_OPTIONS[number]>("Default");
  const [compare, setCompare] = useState<Set<string>>(new Set());
  const [compact, setCompact] = useState(false);

  const filtered = useMemo(() => {
    let list = gag2Pets.filter((pet) => {
      if (rarity !== "All" && pet.rarity !== rarity) return false;
      if (role !== "All" && pet.category !== role) return false;
      if (tier !== "All" && pet.tier !== tier) return false;
      if (search && !`${pet.name} ${pet.ability}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === "Price Low") list = [...list].sort((a, b) => priceNumber(a.costSheckles) - priceNumber(b.costSheckles));
    if (sort === "Price High") list = [...list].sort((a, b) => priceNumber(b.costSheckles) - priceNumber(a.costSheckles));
    if (sort === "Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, rarity, role, tier, sort]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    ALL_RARITIES.forEach((r) => { c[r] = gag2Pets.filter((pet) => r === "All" || pet.rarity === r).length; });
    return c;
  }, []);

  const hasFilters = rarity !== "All" || role !== "All" || tier !== "All" || search !== "";
  const comparePets = gag2Pets.filter((pet) => compare.has(pet.name));
  const bestComparePet = [...comparePets].sort((a, b) => {
    const tierOrder = { S: 4, A: 3, B: 2, C: 1 };
    return tierOrder[b.tier] - tierOrder[a.tier] || priceNumber(a.costSheckles) - priceNumber(b.costSheckles);
  })[0];

  function toggleCompare(name: string) {
    const next = new Set(compare);
    if (next.has(name)) next.delete(name);
    else if (next.size < 3) next.add(name);
    setCompare(next);
  }

  return (
    <>
      <div className="sticky top-[64px] z-40 mb-6 min-w-0 space-y-2.5 rounded-xl border border-[#e5e7eb] bg-white/95 p-3 shadow-sm backdrop-blur">
        <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
          <input
            type="text"
            placeholder="Search pet or ability..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-w-0 flex-1 rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-medium text-[#4b4b4b] placeholder:text-[#aaa] focus:border-garden focus:outline-none"
          />
          <button
            onClick={() => setCompact(!compact)}
            title={compact ? "Card view" : "Compact view"}
            className="rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-bold text-[#777] hover:bg-[#f9fafb]"
          >
            {compact ? "Cards" : "Compact"}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[10px] font-bold uppercase text-[#aaa]">Rarity</span>
          {ALL_RARITIES.map((r) => (
            <button key={r} onClick={() => setRarity(r)} className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${rarity === r ? "bg-garden text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>
              {r} {counts[r]}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[10px] font-bold uppercase text-[#aaa]">Role</span>
          {ALL_ROLES.map((r) => (
            <button key={r} onClick={() => setRole(r)} className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${role === r ? "bg-sky text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{r}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <span className="mr-1 text-[10px] font-bold uppercase text-[#aaa]">Tier</span>
          {ALL_TIERS.map((t) => (
            <button key={t} onClick={() => setTier(t)} className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${tier === t ? "bg-[#FFC107] text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{t}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORT_OPTIONS[number])} className="cursor-pointer rounded-lg border border-[#e5e7eb] bg-white px-2 py-1 text-[11px] font-bold text-[#777]">
            {SORT_OPTIONS.map((option) => (<option key={option} value={option}>Sort: {option}</option>))}
          </select>
          {hasFilters && (
            <button onClick={() => { setRarity("All"); setRole("All"); setTier("All"); setSearch(""); }} className="ml-auto rounded-full bg-[#FFEBEE] px-3 py-1 text-[11px] font-bold text-[#E53935] transition hover:bg-[#FFCDD2]">
              Clear
            </button>
          )}
        </div>
      </div>

      {compare.size > 0 && (
        <div className="sticky top-[176px] z-30 mb-4 rounded-xl border-2 border-[#FFC107] bg-[#FFF8E1] p-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-extrabold text-[#F57F17]">Comparing {compare.size}/3</span>
            {comparePets.map((pet) => (
              <div key={pet.name} className="flex items-center gap-1.5 rounded-lg border border-[#FFC107] bg-white px-2 py-1">
                <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} width={20} height={20} className="rounded" />
                <span className="text-xs font-bold text-[#4b4b4b]">{pet.name}</span>
                <button onClick={() => toggleCompare(pet.name)} className="text-[10px] text-[#999]">Remove</button>
              </div>
            ))}
            <button onClick={() => setCompare(new Set())} className="ml-auto text-[10px] font-bold text-[#999]">Clear</button>
          </div>
          {bestComparePet && (
            <div className="mt-3 rounded-lg bg-white p-3">
              <p className="text-xs font-black uppercase text-[#F57F17]">Best pick in this compare</p>
              <p className="mt-1 text-sm font-bold text-[#4b4b4b]">
                {bestComparePet.name} is the strongest selected option for {bestComparePet.category}. Tier {bestComparePet.tier}, price {bestComparePet.costSheckles}, ability: {bestComparePet.ability}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-[#777]">{filtered.length} of {gag2Pets.length} pets</p>
        <div className="flex gap-1.5">
          {[{ l: "First", p: "Bunny" }, { l: "Growth", p: "Deer" }, { l: "Defend", p: "Bee" }].map((quick) => (
            <button key={quick.l} onClick={() => setSearch(quick.p)} className="rounded-full bg-[#C8E6C9]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#4CAF50] transition hover:bg-[#C8E6C9]">{quick.l}</button>
          ))}
        </div>
      </div>

      {compact ? (
        <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
          {filtered.map((pet, index) => (
            <div key={pet.name} className={`flex items-center gap-3 border-b border-[#e5e7eb] p-3 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#fafbfa]"}`}>
              <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} width={36} height={36} className="shrink-0 rounded-lg" />
              <span className="w-28 text-sm font-extrabold text-[#4b4b4b]">{pet.name}</span>
              <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${rarityBg[pet.rarity]}`}>{pet.rarity}</span>
              <span className="w-24 text-right font-mono text-xs font-bold text-[#4b4b4b]">{pet.costSheckles}</span>
              <span className="hidden flex-1 text-xs text-[#777] sm:block">{pet.ability}</span>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${tierBg[pet.tier]}`}>{pet.tier}</span>
              <button onClick={() => toggleCompare(pet.name)} className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-bold ${compare.has(pet.name) ? "bg-[#FFF8E1] text-[#FFC107]" : "text-[#aaa] hover:text-[#FFC107]"}`}>
                {compare.has(pet.name) ? "Added" : "+ Compare"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((pet) => (
            <div key={pet.name} className={`group overflow-hidden rounded-2xl border-2 ${rarityBorder[pet.rarity]} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]`}>
              <div className="relative flex h-40 items-center justify-center bg-[#f5f9f3] p-3">
                <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} fill className="object-contain p-4" sizes="25vw" />
                <button onClick={() => toggleCompare(pet.name)} className={`absolute right-2 top-2 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold ${compare.has(pet.name) ? "border-2 border-[#FFC107] bg-[#FFF8E1] text-[#FFC107]" : "border border-[#e5e7eb] bg-white/80 text-[#aaa] hover:text-[#FFC107]"}`}>
                  {compare.has(pet.name) ? "Added" : "+"}
                </button>
              </div>
              <div className="p-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#4b4b4b]">{pet.name}</h3>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${tierBg[pet.tier]}`}>{pet.tier}</span>
                </div>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${rarityBg[pet.rarity]}`}>{pet.rarity}</span>
                <p className="mt-1.5 font-mono text-xs font-bold text-[#4b4b4b]">{pet.costSheckles}</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#777]">{pet.ability}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-[#e5e7eb] bg-white py-16 text-center">
          <p className="text-lg font-extrabold text-[#4b4b4b]">No pets match</p>
          <p className="mb-4 text-sm text-[#777]">Clear filters or search another pet name.</p>
          <button onClick={() => { setRarity("All"); setRole("All"); setTier("All"); setSearch(""); }} className="rounded-full bg-garden px-5 py-2 text-sm font-bold text-white transition hover:bg-[#3d8b40]">Show all pets</button>
        </div>
      )}
    </>
  );
}
