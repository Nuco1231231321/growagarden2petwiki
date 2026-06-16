"use client";

import { useMemo, useState } from "react";

const wheelbarrowCost = 500000;

export function WheelbarrowWorth() {
  const [sheckles, setSheckles] = useState(250000);
  const [income, setIncome] = useState(50000);
  const [hasBunny, setHasBunny] = useState(true);
  const [hasDeer, setHasDeer] = useState(false);
  const [hasBee, setHasBee] = useState(false);
  const [hasGnome, setHasGnome] = useState(false);
  const [playsWithFriends, setPlaysWithFriends] = useState(false);

  const result = useMemo(() => {
    const missingCore = [!hasBunny, !hasDeer, !hasBee && !hasGnome].filter(Boolean).length;
    const recoveryMinutes = income > 0 ? Math.ceil(((wheelbarrowCost - sheckles) / income) * 10) : 999;
    if (sheckles >= wheelbarrowCost && missingCore === 0 && (playsWithFriends || income >= 150000)) {
      return {
        label: "Buy now",
        tone: "good",
        reason: "Your speed, growth, and defense are covered. Wheelbarrow is a utility upgrade now.",
        next: "Buy it when George stocks it, then use it for group routes and movement-heavy tasks.",
        recoveryMinutes: 0,
      };
    }
    if (sheckles >= wheelbarrowCost && playsWithFriends && missingCore <= 1) {
      return {
        label: "Optional",
        tone: "mid",
        reason: "It helps group play, but one core farm upgrade is still missing.",
        next: hasBee || hasGnome ? "Buy it if you play with friends often." : "Add Gnome or Bee before holding expensive crops overnight.",
        recoveryMinutes: 0,
      };
    }
    if (recoveryMinutes <= 30 && missingCore <= 1) {
      return {
        label: "Wait briefly",
        tone: "mid",
        reason: "You are close enough that the purchase will not freeze your farm for long.",
        next: "Save for the next Gear Shop stock, but do not skip Deer or basic defense.",
        recoveryMinutes,
      };
    }
    return {
      label: "Skip for now",
      tone: "bad",
      reason: "500K Sheckles is better spent on income, growth, or defense first.",
      next: !hasBunny ? "Buy Bunny first." : !hasDeer ? "Buy Deer next." : !hasBee && !hasGnome ? "Add Gnome or Bee before Wheelbarrow." : "Raise income before buying utility gear.",
      recoveryMinutes: Math.max(recoveryMinutes, 0),
    };
  }, [hasBee, hasBunny, hasDeer, hasGnome, income, playsWithFriends, sheckles]);

  const resultClass = result.tone === "good" ? "border-garden bg-[#eaf7ed] text-garden" : result.tone === "mid" ? "border-[#FFC107] bg-[#FFF8E1] text-[#B7791F]" : "border-[#E53935] bg-[#FFEBEE] text-[#E53935]";

  return (
    <section aria-labelledby="wheelbarrow-worth-title" className="rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-xs font-black uppercase text-garden">Worth calculator</p>
          <h2 id="wheelbarrow-worth-title" className="text-2xl font-black text-soil text-balance">Should you buy Wheelbarrow now?</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-ash text-pretty">
            Enter your current setup and get a direct buy, wait, or skip answer.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label>
              <span className="text-xs font-black uppercase text-ash">Current Sheckles</span>
              <input type="number" min="0" step="10000" value={sheckles} onChange={(event) => setSheckles(Number(event.target.value))} className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] px-3 font-mono text-sm font-bold" />
            </label>
            <label>
              <span className="text-xs font-black uppercase text-ash">Sheckles per 10 min</span>
              <input type="number" min="0" step="10000" value={income} onChange={(event) => setIncome(Number(event.target.value))} className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] px-3 font-mono text-sm font-bold" />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-xs font-black uppercase text-ash">Already owned</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {[
                ["Bunny", hasBunny, setHasBunny],
                ["Deer", hasDeer, setHasDeer],
                ["Bee", hasBee, setHasBee],
                ["Gnome", hasGnome, setHasGnome],
              ].map(([label, checked, setter]) => (
                <label key={label as string} className="flex min-h-11 items-center gap-3 rounded-xl border border-[#dce8d8] px-3 text-sm font-black text-charcoal">
                  <input type="checkbox" checked={checked as boolean} onChange={(event) => (setter as (value: boolean) => void)(event.target.checked)} />
                  {label as string}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-4 flex min-h-11 items-center gap-3 rounded-xl border border-[#dce8d8] px-3 text-sm font-black text-charcoal">
            <input type="checkbox" checked={playsWithFriends} onChange={(event) => setPlaysWithFriends(event.target.checked)} />
            I play with friends often
          </label>
        </div>

        <aside className={`rounded-2xl border-2 p-4 ${resultClass}`}>
          <p className="text-xs font-black uppercase">Decision</p>
          <p className="mt-2 text-4xl font-black">{result.label}</p>
          <p className="mt-3 text-sm font-bold leading-6">{result.reason}</p>
          <div className="mt-4 rounded-xl bg-white/70 p-3">
            <p className="text-xs font-black uppercase">Next action</p>
            <p className="mt-1 text-sm font-bold leading-6">{result.next}</p>
          </div>
          {result.recoveryMinutes > 0 && result.recoveryMinutes < 999 && (
            <p className="mt-3 font-mono text-sm font-black tabular-nums">About {result.recoveryMinutes} minutes from 500K at this income.</p>
          )}
        </aside>
      </div>
    </section>
  );
}
