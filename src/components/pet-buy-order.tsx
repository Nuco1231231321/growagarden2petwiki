"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gag2Images, gag2Pets } from "@/lib/data";

const goals = ["speed", "growth", "defense", "mutation", "stealing"] as const;
type Goal = (typeof goals)[number];

function priceNumber(value: string) {
  return Number.parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
}

const goalLabels: Record<Goal, string> = {
  speed: "Move faster",
  growth: "Grow crops faster",
  defense: "Protect crops",
  mutation: "Get mutations",
  stealing: "Steal at night",
};

const goalPetNames: Record<Goal, string[]> = {
  speed: ["Bunny", "Frog"],
  growth: ["Deer", "Robin", "Monkey"],
  defense: ["Bee", "Black Dragon", "Ice Serpent"],
  mutation: ["Golden Dragonfly", "Unicorn"],
  stealing: ["Raccoon", "Owl", "Big Owl"],
};

export function PetBuyOrder() {
  const [budget, setBudget] = useState(50000);
  const [goal, setGoal] = useState<Goal>("growth");
  const [owned, setOwned] = useState<string[]>(["Bunny"]);

  const recommendation = useMemo(() => {
    const coreOrder = ["Bunny", "Deer", "Bee"];
    const goalPets = goalPetNames[goal].map((name) => gag2Pets.find((pet) => pet.name === name)).filter(Boolean) as typeof gag2Pets;
    const candidates = [...coreOrder.map((name) => gag2Pets.find((pet) => pet.name === name)).filter(Boolean), ...goalPets] as typeof gag2Pets;
    const next = candidates.find((pet) => pet && !owned.includes(pet.name) && priceNumber(pet.costSheckles) <= Math.max(budget, 0));
    const stretch = candidates.find((pet) => pet && !owned.includes(pet.name));
    return next ?? stretch ?? gag2Pets.find((pet) => !owned.includes(pet.name)) ?? gag2Pets[0];
  }, [budget, goal, owned]);

  const price = priceNumber(recommendation.costSheckles);
  const canBuy = price <= budget;

  function toggleOwned(name: string) {
    setOwned((current) => (current.includes(name) ? current.filter((item) => item !== name) : [...current, name]));
  }

  return (
    <section aria-labelledby="pet-buy-title" className="min-w-0 rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-sm sm:p-5">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase text-garden">Pet planner</p>
          <h2 id="pet-buy-title" className="text-2xl font-black text-soil text-balance">Which pet should you buy next?</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-ash text-pretty">Set your budget and goal, then get the next practical pet to buy.</p>

          <label className="mt-5 block">
            <span className="text-xs font-black uppercase text-ash">Budget</span>
            <input type="number" min="0" step="10000" value={budget} onChange={(event) => setBudget(Number(event.target.value))} className="mt-1 min-h-11 w-full rounded-xl border border-[#dce8d8] px-3 font-mono text-sm font-bold" />
          </label>

          <fieldset className="mt-5">
            <legend className="text-xs font-black uppercase text-ash">Goal</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {goals.map((item) => (
                <label key={item} className={`cursor-pointer rounded-full border px-3 py-2 text-xs font-black ${goal === item ? "border-garden bg-[#eaf7ed] text-garden" : "border-[#dce8d8] text-charcoal"}`}>
                  <input type="radio" name="pet-goal" checked={goal === item} onChange={() => setGoal(item)} className="sr-only" />
                  {goalLabels[item]}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-xs font-black uppercase text-ash">Owned pets</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {gag2Pets.slice(0, 8).map((pet) => (
                <label key={pet.name} className="flex min-h-11 items-center gap-3 rounded-xl border border-[#dce8d8] px-3 text-sm font-black text-charcoal">
                  <input type="checkbox" checked={owned.includes(pet.name)} onChange={() => toggleOwned(pet.name)} />
                  {pet.name}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="min-w-0 rounded-2xl border-2 border-garden bg-[#eaf7ed] p-4 text-garden">
          <p className="text-xs font-black uppercase">Next pet</p>
          <div className="mt-3 flex items-center gap-3">
            <Image src={gag2Images.pet(recommendation.imageKey)} alt={recommendation.name} width={72} height={72} className="rounded-xl bg-white p-1" />
            <div>
              <p className="break-words text-3xl font-black text-soil">{recommendation.name}</p>
              <p className="text-sm font-black text-charcoal">{recommendation.rarity} · Tier {recommendation.tier}</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-bold leading-6 text-charcoal">{recommendation.ability}</p>
          <div className="mt-4 rounded-xl bg-white/80 p-3">
            <p className="text-xs font-black uppercase text-garden">Action</p>
            <p className="mt-1 text-sm font-bold leading-6 text-charcoal">
              {canBuy ? `Buy ${recommendation.name} now if it appears.` : `Save ${Math.max(price - budget, 0).toLocaleString("en-US")} more Sheckles before buying ${recommendation.name}.`}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
