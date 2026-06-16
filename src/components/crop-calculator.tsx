"use client";

import { useMemo, useState } from "react";
import { calculateCropValue, formatSheckles, gag2Crops, gag2Mutations } from "@/lib/data";

const HISTORY_KEY = "gag2:calculator-history:v1";
const primaryMutations = gag2Mutations.filter((mutation) => mutation.category === "primary");
const weatherMutations = gag2Mutations.filter((mutation) => mutation.category === "weather");

interface HistoryItem {
  crop: string;
  value: string;
  detail: string;
}

function getHistory() {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(HISTORY_KEY);
    return stored ? (JSON.parse(stored) as HistoryItem[]).slice(0, 10) : [];
  } catch {
    return [];
  }
}

function saveHistory(item: HistoryItem) {
  if (typeof window === "undefined") return;
  const next = [item, ...getHistory().filter((entry) => entry.detail !== item.detail)].slice(0, 10);
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
}

export function CropCalculator() {
  const [cropSlug, setCropSlug] = useState("green-bean");
  const [weight, setWeight] = useState(2.4);
  const [quantity, setQuantity] = useState(1);
  const [primarySlug, setPrimarySlug] = useState("none");
  const [weatherSlugs, setWeatherSlugs] = useState<string[]>([]);
  const [bargainBonus, setBargainBonus] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>(() => getHistory());

  const crop = gag2Crops.find((item) => item.slug === cropSlug) ?? gag2Crops[0];
  const primary = primaryMutations.find((mutation) => mutation.slug === primarySlug) ?? primaryMutations[0];
  const selectedWeather = weatherMutations.filter((mutation) => weatherSlugs.includes(mutation.slug));
  const weatherMultiplier = selectedWeather.reduce((total, mutation) => total * mutation.multiplier, 1);

  const result = useMemo(
    () =>
      calculateCropValue({
        crop,
        weight,
        quantity,
        primaryMultiplier: primary.multiplier,
        weatherMultiplier,
        bargainBonus,
      }),
    [bargainBonus, crop, primary.multiplier, quantity, weatherMultiplier, weight],
  );

  const recommendation = useMemo(() => {
    if (result.totalValue >= 1_000_000 && selectedWeather.length === 0 && primary.slug === "none") {
      return "Try a mutation plan before selling this crop.";
    }
    if (result.roi !== null && result.roi < 100) {
      return "Use this crop for progression, then move value into higher ROI crops.";
    }
    if (selectedWeather.length > 0 || primary.slug !== "none") {
      return "Sell after the boost if your garden is defended.";
    }
    return "Sell starter crops fast and reinvest into multi-harvest crops.";
  }, [primary.slug, result.roi, result.totalValue, selectedWeather.length]);

  function toggleWeather(slug: string) {
    setWeatherSlugs((current) => (current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]));
  }

  function storeCurrentResult() {
    const item = {
      crop: crop.name,
      value: `${formatSheckles(result.totalValue)} Sheckles`,
      detail: `${crop.name} · ${weight}kg · x${result.mutationMultiplier}`,
    };
    saveHistory(item);
    setHistory(getHistory());
  }

  return (
    <section id="calculator" aria-labelledby="calculator-title" className="min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-sm sm:p-5">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
        <div className="min-w-0">
          <h2 id="calculator-title" className="text-2xl font-black text-soil text-balance">Crop value calculator</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-ash text-pretty">
            Pick a crop, enter weight and mutations, then use the result to sell, wait, or protect the crop.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-black uppercase text-ash">Crop</span>
              <select value={cropSlug} onChange={(event) => setCropSlug(event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] bg-white px-3 text-sm font-bold text-charcoal">
                {gag2Crops.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name} · {item.rarity}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ash">Weight (kg)</span>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={weight}
                onChange={(event) => setWeight(Number(event.target.value))}
                className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] bg-white px-3 font-mono text-sm font-bold text-charcoal"
              />
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ash">Quantity</span>
              <input
                type="number"
                min="1"
                step="1"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] bg-white px-3 font-mono text-sm font-bold text-charcoal"
              />
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ash">Bargain bonus (%)</span>
              <input
                type="number"
                min="0"
                max="300"
                step="1"
                value={bargainBonus}
                onChange={(event) => setBargainBonus(Number(event.target.value))}
                className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] bg-white px-3 font-mono text-sm font-bold text-charcoal"
              />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-xs font-black uppercase text-ash">Primary mutation</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {primaryMutations.map((mutation) => (
                <label key={mutation.slug} className={`cursor-pointer rounded-full border px-3 py-2 text-xs font-black ${primarySlug === mutation.slug ? "border-garden bg-[#eaf7ed] text-garden" : "border-[#dce8d8] text-charcoal"}`}>
                  <input type="radio" name="primary-mutation" value={mutation.slug} checked={primarySlug === mutation.slug} onChange={() => setPrimarySlug(mutation.slug)} className="sr-only" />
                  {mutation.name} x{mutation.multiplier}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-xs font-black uppercase text-ash">Weather mutations</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {weatherMutations.map((mutation) => (
                <label key={mutation.slug} className={`cursor-pointer rounded-full border px-3 py-2 text-xs font-black ${weatherSlugs.includes(mutation.slug) ? "border-garden bg-[#eaf7ed] text-garden" : "border-[#dce8d8] text-charcoal"}`}>
                  <input type="checkbox" checked={weatherSlugs.includes(mutation.slug)} onChange={() => toggleWeather(mutation.slug)} className="sr-only" />
                  {mutation.name} x{mutation.multiplier}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="rounded-2xl border border-[#cfe0c9] bg-[#f8fbf6] p-4">
          <p className="text-xs font-black uppercase text-garden">Result</p>
          <p className="mt-2 break-words font-mono text-3xl font-black tabular-nums text-soil sm:text-4xl">{formatSheckles(result.totalValue)}</p>
          <p className="text-sm font-black text-charcoal">Projected sell value</p>

          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white p-3">
              <dt className="text-xs font-black uppercase text-ash">Net profit</dt>
              <dd className="mt-1 font-mono font-black tabular-nums text-charcoal">{formatSheckles(result.netProfit)}</dd>
            </div>
            <div className="rounded-xl bg-white p-3">
              <dt className="text-xs font-black uppercase text-ash">ROI</dt>
              <dd className="mt-1 font-mono font-black tabular-nums text-charcoal">{result.roi === null ? "Pack" : `${Math.round(result.roi).toLocaleString("en-US")}%`}</dd>
            </div>
            <div className="rounded-xl bg-white p-3">
              <dt className="text-xs font-black uppercase text-ash">Weight factor</dt>
              <dd className="mt-1 font-mono font-black tabular-nums text-charcoal">x{result.weightFactor.toFixed(2)}</dd>
            </div>
            <div className="rounded-xl bg-white p-3">
              <dt className="text-xs font-black uppercase text-ash">Mutation</dt>
              <dd className="mt-1 font-mono font-black tabular-nums text-charcoal">x{result.mutationMultiplier}</dd>
            </div>
          </dl>

          <div className="mt-4 rounded-xl border border-[#dce8d8] bg-white p-3">
            <p className="text-xs font-black uppercase text-garden">Next action</p>
            <p className="mt-1 text-sm font-bold leading-6 text-charcoal">{recommendation}</p>
          </div>

          <button type="button" onClick={storeCurrentResult} className="mt-4 min-h-11 w-full rounded-xl bg-garden px-4 text-sm font-black text-white">
            Save this calculation
          </button>
        </aside>
      </div>

      {history.length > 0 && (
        <div className="mt-6 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
          <h3 className="text-sm font-black text-soil">Recent calculations</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {history.slice(0, 10).map((item) => (
              <div key={item.detail} className="rounded-xl bg-white p-3">
                <p className="text-sm font-black text-charcoal">{item.crop}</p>
                <p className="font-mono text-sm font-black text-garden tabular-nums">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-ash">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
