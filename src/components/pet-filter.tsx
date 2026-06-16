"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { gag2Pets, gag2Images } from "@/lib/data";

const rarityBorder: Record<string, string> = { Common: "border-[#9E9E9E]", Uncommon: "border-[#4CAF50]", Rare: "border-[#2196F3]", Legendary: "border-[#FF9800]", Mythic: "border-[#E91E63]", Super: "border-[#FFC107]" };
const rarityBg: Record<string, string> = { Common: "bg-[#F5F5F5] text-[#9E9E9E]", Uncommon: "bg-[#E8F5E9] text-[#4CAF50]", Rare: "bg-[#E3F2FD] text-[#2196F3]", Legendary: "bg-[#FFF3E0] text-[#FF9800]", Mythic: "bg-[#FCE4EC] text-[#E91E63]", Super: "bg-[#FFF8E1] text-[#FFC107]" };
const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#9E9E9E]" };
const tierLabel: Record<string, string> = { S: "Top", A: "Great", B: "Good", C: "Skip" };

const ALL_RARITIES = ["All", "Common", "Uncommon", "Rare", "Legendary", "Mythic", "Super"];
const ALL_ROLES = ["All", "speed", "growth", "defense", "income", "utility"];
const ALL_TIERS = ["All", "S", "A", "B", "C"];
const SORT_OPTIONS = ["Default", "Price ↑", "Price ↓", "Name"] as const;

export function PetFilter() {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [role, setRole] = useState("All");
  const [tier, setTier] = useState("All");
  const [sort, setSort] = useState<typeof SORT_OPTIONS[number]>("Default");
  const [compare, setCompare] = useState<Set<string>>(new Set());
  const [compact, setCompact] = useState(false);

  const filtered = useMemo(() => {
    let list = gag2Pets.filter((p) => {
      if (rarity !== "All" && p.rarity !== rarity) return false;
      if (role !== "All" && p.category !== role) return false;
      if (tier !== "All" && p.tier !== tier) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.ability.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === "Price ↑") list = [...list].sort((a, b) => parseInt(a.costSheckles.replace(/,/g, "")) - parseInt(b.costSheckles.replace(/,/g, "")));
    if (sort === "Price ↓") list = [...list].sort((a, b) => parseInt(b.costSheckles.replace(/,/g, "")) - parseInt(a.costSheckles.replace(/,/g, "")));
    if (sort === "Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, rarity, role, tier, sort]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    ALL_RARITIES.forEach((r) => { c[r] = gag2Pets.filter((p) => r === "All" ? true : p.rarity === r).length; });
    return c;
  }, []);

  const hasFilters = rarity !== "All" || role !== "All" || tier !== "All" || search !== "";
  const comparePets = gag2Pets.filter((p) => compare.has(p.name));

  return (
    <>
      {/* ── Filter Bar ── */}
      <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur rounded-xl border border-[#e5e7eb] p-3 mb-6 space-y-2.5 shadow-sm">
        <div className="flex gap-2">
          <input type="text" placeholder="🔍 Search pet or ability..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-medium text-[#4b4b4b] placeholder:text-[#aaa] focus:outline-none focus:border-garden" />
          <button onClick={() => setCompact(!compact)} title={compact ? "Card view" : "Compact view"}
            className="rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-bold text-[#777] hover:bg-[#f9fafb]">
            {compact ? "🟦 Cards" : "📋 Compact"}
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-bold text-[#aaa] uppercase mr-1">Rarity</span>
          {ALL_RARITIES.map((r) => (
            <button key={r} onClick={() => setRarity(r)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${rarity === r ? "bg-garden text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>
              {r}{r !== "All" ? ` ${counts[r]}` : ` ${counts["All"]}`}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-bold text-[#aaa] uppercase mr-1">Role</span>
          {ALL_ROLES.map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${role === r ? "bg-sky text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{r}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <span className="text-[10px] font-bold text-[#aaa] uppercase mr-1">Tier</span>
          {ALL_TIERS.map((t) => (
            <button key={t} onClick={() => setTier(t)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${tier === t ? "bg-[#FFC107] text-white shadow-sm" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{t}</button>
          ))}
          <span className="mx-1.5 text-[#ddd]">|</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORT_OPTIONS[number])}
            className="rounded-lg border border-[#e5e7eb] px-2 py-1 text-[11px] font-bold text-[#777] bg-white cursor-pointer">
            {SORT_OPTIONS.map((o) => (<option key={o} value={o}>Sort: {o}</option>))}
          </select>
          {hasFilters && (
            <button onClick={() => { setRarity("All"); setRole("All"); setTier("All"); setSearch(""); }}
              className="ml-auto rounded-full bg-[#FFEBEE] px-3 py-1 text-[11px] font-bold text-[#E53935] hover:bg-[#FFCDD2] transition">✕ Clear</button>
          )}
        </div>
      </div>

      {/* ── Compare bar ── */}
      {compare.size > 0 && (
        <div className="sticky top-[176px] z-30 bg-[#FFF8E1] rounded-xl border-2 border-[#FFC107] p-3 mb-4 flex items-center gap-3 flex-wrap">
          <span className="text-sm font-extrabold text-[#F57F17]">Comparing {compare.size}/3</span>
          {comparePets.map((p) => (
            <div key={p.name} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1 border border-[#FFC107]">
              <Image src={gag2Images.pet(p.imageKey)} alt={p.name} width={20} height={20} className="rounded" />
              <span className="text-xs font-bold text-[#4b4b4b]">{p.name}</span>
              <button onClick={() => { const s = new Set(compare); s.delete(p.name); setCompare(s); }} className="text-[10px] text-[#999]">✕</button>
            </div>
          ))}
          {compare.size >= 2 && (
            <div className="ml-auto text-xs font-bold text-[#F57F17]">
              {comparePets.length >= 2 && (() => {
                const [a, b] = comparePets;
                const priceA = parseInt(a.costSheckles.replace(/,/g, ""));
                const priceB = parseInt(b.costSheckles.replace(/,/g, ""));
                if (priceA < priceB) return <span>{a.name} is {priceB - priceA} Sheckles cheaper than {b.name}</span>;
                if (priceB < priceA) return <span>{b.name} is {priceA - priceB} Sheckles cheaper than {a.name}</span>;
                return <span>Same price range</span>;
              })()}
            </div>
          )}
          <button onClick={() => setCompare(new Set())} className="text-[10px] font-bold text-[#999] ml-auto">Clear</button>
        </div>
      )}

      {/* ── Results + Quick Picks ── */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-[#777]">{filtered.length} of {gag2Pets.length} pets</p>
        <div className="flex gap-1.5">
          {[{ l: "Top", p: "Bunny" }, { l: "Value", p: "Deer" }, { l: "Defend", p: "Bee" }].map((q) => (
            <button key={q.l} onClick={() => setSearch(q.p)}
              className="rounded-full bg-[#C8E6C9]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#4CAF50] hover:bg-[#C8E6C9] transition">{q.l}</button>
          ))}
        </div>
      </div>

      {/* ── Pet Cards ── */}
      {compact ? (
        <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
          {filtered.map((pet, i) => (
            <div key={pet.name} className={`flex items-center gap-3 border-b border-[#e5e7eb] p-3 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafbfa]"}`}>
              <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} width={36} height={36} className="rounded-lg shrink-0" />
              <span className="font-extrabold text-sm text-[#4b4b4b] w-28">{pet.emoji} {pet.name}</span>
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${rarityBg[pet.rarity]} shrink-0`}>{pet.rarity}</span>
              <span className="font-mono text-xs font-bold text-[#4b4b4b] w-20 text-right">💰 {pet.costSheckles}</span>
              <span className="text-xs text-[#777] hidden sm:block flex-1">{pet.ability}</span>
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${tierBg[pet.tier]} shrink-0`}>{pet.tier}</span>
              <button onClick={() => {
                const s = new Set(compare);
                if (s.has(pet.name)) s.delete(pet.name); else if (s.size < 3) s.add(pet.name);
                setCompare(s);
              }} className={`text-[10px] font-bold px-2 py-1 rounded-lg shrink-0 ${compare.has(pet.name) ? "bg-[#FFF8E1] text-[#FFC107]" : "text-[#ccc] hover:text-[#FFC107]"}`}>
                {compare.has(pet.name) ? "✓ Compare" : "+ Compare"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((pet) => (
            <div key={pet.name} className={`group rounded-2xl border-2 ${rarityBorder[pet.rarity]} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] overflow-hidden`}>
              <div className="relative h-40 bg-[#f5f9f3] flex items-center justify-center p-3">
                <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} fill className="object-contain p-4" sizes="25vw" />
                <button onClick={() => {
                  const s = new Set(compare);
                  if (s.has(pet.name)) s.delete(pet.name); else if (s.size < 3) s.add(pet.name);
                  setCompare(s);
                }} className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-bold z-10 ${compare.has(pet.name) ? "bg-[#FFF8E1] text-[#FFC107] border-2 border-[#FFC107]" : "bg-white/80 text-[#ccc] border border-[#e5e7eb] hover:text-[#FFC107]"}`}>
                  {compare.has(pet.name) ? "✓" : "+"}
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-extrabold text-[#4b4b4b]">{pet.emoji} {pet.name}</h3>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${tierBg[pet.tier]}`}>{pet.tier}</span>
                </div>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${rarityBg[pet.rarity]}`}>{pet.rarity}</span>
                <p className="mt-1.5 font-mono text-xs font-bold text-[#4b4b4b]">💰 {pet.costSheckles}</p>
                <p className="mt-1.5 text-[11px] text-[#777] leading-relaxed">{pet.ability}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-xl border border-[#e5e7eb] bg-white">
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-lg font-extrabold text-[#4b4b4b]">No pets match</p>
          <p className="text-sm text-[#777] mb-4">Try clearing some filters</p>
          <button onClick={() => { setRarity("All"); setRole("All"); setTier("All"); setSearch(""); }}
            className="rounded-full bg-garden px-5 py-2 text-sm font-bold text-white hover:bg-[#3d8b40] transition">Show all pets</button>
        </div>
      )}
    </>
  );
}
