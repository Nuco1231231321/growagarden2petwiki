import type { Metadata } from 'next';

export const growAGarden2LastModified = '2026-06-15';
export const growAGarden2RobloxUrl = 'https://www.roblox.com/games/97598239454123/Grow-a-Garden-2';

export const gag2Images = {
 icon: '/grow-a-garden-2/icon.webp',
 pet: (name: string) => `/grow-a-garden-2/pets/gag2-${name}.webp`,
 gear: (name: string) => `/grow-a-garden-2/gears/${name}.webp`,
 seed: (name: string) => `/grow-a-garden-2/seeds/${name}.webp`,
 hero: (name: string) => `/grow-a-garden-2/hero/${name}.webp`,
};

export const gag2QuickFacts = [
 ['Release date', 'June 12, 2026'],
 ['Developer', 'Jandel (The Garden Game)'],
 ['Platform', 'Roblox (PC, Mobile, Xbox)'],
 ['Visits', '124 million+'],
 ['Genre', 'Farming Simulator, Idle Tycoon'],
 ['Currency', 'Sheckles (in-game) + Robux (premium)'],
];

export function createGAG2Metadata({
 title,
 description,
 canonical,
 image = gag2Images.icon,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: [
 'Grow a Garden 2',
 'GAG 2',
 'Grow a Garden 2 pets',
 'Grow a Garden 2 codes',
 'Grow a Garden 2 guide',
 'Grow a Garden 2 wiki',
 'Grow a Garden 2 seeds',
 'Roblox farming game',
 ],
 authors: [{ name: 'Enjoy4Game Guides' }],
 alternates: { canonical },
 openGraph: {
 title,
 description,
 url: canonical,
 images: [image],
 type: 'article',
 siteName: 'Enjoy4Game Guides',
 },
 twitter: { card: 'summary_large_image', title, description, images: [image] },
 };
}

// === PETS DATA ===
export interface GAG2Pet {
 name: string;
 emoji: string;
 rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythic' | 'Super';
 costSheckles: string;
 costRobux: string | null;
 ability: string;
 tier: 'S' | 'A' | 'B' | 'C';
 category: 'speed' | 'growth' | 'defense' | 'income' | 'utility';
 imageKey: string;
}

export const gag2Pets: GAG2Pet[] = [
 { name: 'Frog', emoji: '🐸', rarity: 'Common', costSheckles: '10,000', costRobux: null, ability: '+5 Jump Height', tier: 'B', category: 'utility', imageKey: 'frog' },
 { name: 'Bunny', emoji: '🐰', rarity: 'Common', costSheckles: '20,000', costRobux: null, ability: '+5 Walk Speed', tier: 'A', category: 'speed', imageKey: 'bunny' },
 { name: 'Owl', emoji: '🦉', rarity: 'Uncommon', costSheckles: '25,000', costRobux: null, ability: '+12.5% Night Vision. Hoots when rare pet spawns.', tier: 'C', category: 'utility', imageKey: 'owl' },
 { name: 'Deer', emoji: '🦌', rarity: 'Rare', costSheckles: '50,000', costRobux: null, ability: 'Plants grow 10% faster (stacks with multiple Deer)', tier: 'A', category: 'growth', imageKey: 'deer' },
 { name: 'Robin', emoji: '🐦', rarity: 'Legendary', costSheckles: '75,000', costRobux: null, ability: 'Eats ripe fruit, sometimes drops seeds', tier: 'B', category: 'income', imageKey: 'robin' },
 { name: 'Bee', emoji: '🐝', rarity: 'Legendary', costSheckles: '1,000,000', costRobux: null, ability: 'Swarms intruders to defend garden', tier: 'S', category: 'defense', imageKey: 'bee' },
 { name: 'Monkey', emoji: '🐒', rarity: 'Mythic', costSheckles: '1,000,000–3,000,000', costRobux: null, ability: 'Picks ripe fruit and brings it to you', tier: 'C', category: 'utility', imageKey: 'monkey' },
 { name: 'Golden Dragonfly', emoji: '🪲', rarity: 'Mythic', costSheckles: '3,000,000–9,000,000', costRobux: null, ability: '2× chance of Gold mutation', tier: 'A', category: 'income', imageKey: 'golden-dragonfly' },
 { name: 'Unicorn', emoji: '🦄', rarity: 'Mythic', costSheckles: '4,000,000–12,000,000', costRobux: null, ability: '2× chance of Rainbow mutation', tier: 'S', category: 'income', imageKey: 'unicorn' },
 { name: 'Raccoon', emoji: '🦝', rarity: 'Super', costSheckles: '5,000,000–15,000,000', costRobux: null, ability: 'Steals from empty gardens at night. +25 steal limit.', tier: 'S', category: 'income', imageKey: 'raccoon' },
 { name: 'Black Dragon', emoji: '🐉', rarity: 'Super', costSheckles: '~1,000,000', costRobux: null, ability: 'Breathes fire on intruders', tier: 'S', category: 'defense', imageKey: 'black-dragon' },
 { name: 'Ice Serpent', emoji: '🐍', rarity: 'Super', costSheckles: '20,000,000', costRobux: null, ability: 'Freezes intruders solid', tier: 'S', category: 'defense', imageKey: 'ice-serpent' },
];

// === GEARS DATA ===
export interface GAG2Gear {
 name: string;
 emoji: string;
 rarity: string;
 costSheckles: string;
 costRobux: string | null;
 effect: string;
 category: string;
}

export const gag2Gears: GAG2Gear[] = [
 { name: 'Common Watering Can', emoji: '💧', rarity: 'Common', costSheckles: '2,000', costRobux: null, effect: 'Waters crops → 3× growth for 10s. One-time use.', category: 'Watering' },
 { name: 'Super Watering Can', emoji: '💦', rarity: 'Super', costSheckles: '250,000', costRobux: null, effect: 'Waters crops → 300× growth for 10s. One-time use.', category: 'Watering' },
 { name: 'Common Sprinkler', emoji: '🌊', rarity: 'Common', costSheckles: '3,000', costRobux: null, effect: '20 studs, 1.5× growth, 7× size, 2 min', category: 'Sprinkler' },
 { name: 'Uncommon Sprinkler', emoji: '🌊', rarity: 'Uncommon', costSheckles: '10,000', costRobux: null, effect: '25 studs, 2× growth, 21× size, 2 min', category: 'Sprinkler' },
 { name: 'Rare Sprinkler', emoji: '🌊', rarity: 'Rare', costSheckles: '50,000', costRobux: null, effect: '30 studs, 3× growth, 40× size, 2 min', category: 'Sprinkler' },
 { name: 'Legendary Sprinkler', emoji: '🌊', rarity: 'Legendary', costSheckles: '100,000', costRobux: null, effect: '40 studs, 4× growth, 65× size, 2 min', category: 'Sprinkler' },
 { name: 'Super Sprinkler', emoji: '🌊', rarity: 'Super', costSheckles: '300,000', costRobux: null, effect: '55 studs, 5× growth, 100× size, 2 min', category: 'Sprinkler' },
 { name: 'Speed Mushroom', emoji: '🍄', rarity: 'Rare', costSheckles: '1,500', costRobux: null, effect: 'Increases walk speed for ~1 min', category: 'Mushroom' },
 { name: 'Jump Mushroom', emoji: '🍄', rarity: 'Rare', costSheckles: '1,800', costRobux: null, effect: 'Increases jump height for ~1 min', category: 'Mushroom' },
 { name: 'Shrink Mushroom', emoji: '🍄', rarity: 'Epic', costSheckles: '4,500', costRobux: null, effect: 'Shrinks your character for ~1 min', category: 'Mushroom' },
 { name: 'Supersize Mushroom', emoji: '🍄', rarity: 'Epic', costSheckles: '4,500', costRobux: null, effect: 'Increases size for ~1 min', category: 'Mushroom' },
 { name: 'Invisibility Mushroom', emoji: '🍄', rarity: 'Legendary', costSheckles: '18,000', costRobux: null, effect: 'Makes you invisible for ~1 min', category: 'Mushroom' },
 { name: 'Wheelbarrow', emoji: '🛒', rarity: 'Legendary', costSheckles: '500,000', costRobux: '129', effect: 'Pick up and carry other players. Slight speed boost.', category: 'Utility' },
 { name: 'Gnome', emoji: '🧙', rarity: 'Epic', costSheckles: '50,000', costRobux: null, effect: 'Blows away intruders who try to steal at night', category: 'Defense' },
 { name: 'Flashbang', emoji: '💥', rarity: 'Epic', costSheckles: '8,000', costRobux: null, effect: 'Blinds/stuns other players', category: 'Defense' },
 { name: 'Basic Pot', emoji: '🪴', rarity: 'Epic', costSheckles: '60,000', costRobux: null, effect: 'Plant crop in pot → can be moved (partially buggy)', category: 'Utility' },
 { name: 'Trowel', emoji: '🔧', rarity: 'Rare', costSheckles: '1,000', costRobux: null, effect: 'Move a planted crop to another spot', category: 'Utility' },
 { name: 'Lantern', emoji: '🏮', rarity: 'Common', costSheckles: '12,000', costRobux: null, effect: 'Provides light at night', category: 'Utility' },
 { name: 'Sign (Hello Sign)', emoji: '📝', rarity: 'Common', costSheckles: '4,000', costRobux: null, effect: 'Customizable sign for communication', category: 'Utility' },
 { name: 'Teleporter', emoji: '🌀', rarity: 'Legendary', costSheckles: '18,000', costRobux: null, effect: 'Teleports you forward a short distance', category: 'Utility' },
];

// === SEEDS DATA ===
export interface GAG2Seed {
 name: string;
 emoji: string;
 rarity: string;
 costSheckles: string;
 harvestType: 'Single' | 'Multi';
 notes: string;
}

export const gag2TopSeeds: GAG2Seed[] = [
 { name: 'Carrot', emoji: '🥕', rarity: 'Common', costSheckles: '1', harvestType: 'Single', notes: 'Starter crop. Cheapest seed.' },
 { name: 'Strawberry', emoji: '🍓', rarity: 'Common', costSheckles: '5', harvestType: 'Multi', notes: 'Best early multi-harvest. Keeps producing.' },
 { name: 'Blueberry', emoji: '🫐', rarity: 'Common', costSheckles: '10', harvestType: 'Multi', notes: 'Good early game value.' },
 { name: 'Tomato', emoji: '🍅', rarity: 'Uncommon', costSheckles: '40', harvestType: 'Multi', notes: 'Solid mid-game multi-harvest.' },
 { name: 'Bamboo', emoji: '🎋', rarity: 'Rare', costSheckles: '700', harvestType: 'Multi', notes: 'Best early-to-mid game value.' },
 { name: 'Pineapple', emoji: '🍍', rarity: 'Rare', costSheckles: '10,000', harvestType: 'Multi', notes: 'Good mid-game income.' },
 { name: 'Mango', emoji: '🥭', rarity: 'Epic', costSheckles: '70,000', harvestType: 'Multi', notes: 'Strong mid-to-late game.' },
 { name: 'Cherry', emoji: '🍒', rarity: 'Legendary', costSheckles: '120,000–1,200,000', harvestType: 'Multi', notes: 'Price varies across sources. Multi-harvest.' },
 { name: 'Acorn', emoji: '🌰', rarity: 'Legendary', costSheckles: '200,000–700,000', harvestType: 'Multi', notes: '2.9% stock chance. Multi-harvest.' },
 { name: 'Pomegranate', emoji: '🍑', rarity: 'Mythic', costSheckles: '2,000,000', harvestType: 'Multi', notes: 'S-Tier income. ~900 base sell per fruit. Multi-harvest.' },
 { name: 'Venus Fly Trap', emoji: '🪴', rarity: 'Mythic', costSheckles: '~7,000,000', harvestType: 'Single', notes: 'S-Tier. Eats thieves who try to steal.' },
 { name: 'Moon Bloom', emoji: '🌸', rarity: 'Super', costSheckles: '~65,000,000', harvestType: 'Multi', notes: 'S-Tier. Anti-gravity on harvest.' },
 { name: 'Dragon\'s Breath', emoji: '🔥', rarity: 'Super', costSheckles: '~90,000,000', harvestType: 'Multi', notes: 'S-Tier. Fires lasers at intruders.' },
];

// === CODES DATA ===
export const gag2Codes = [
 { code: 'TEAMGREENBEAN', reward: '3× Green Bean Seeds', status: 'active' as const, verified: '2026-06-15' },
];

// === SEED PACKS DATA ===
export const gag2SeedPacks = [
 { name: 'Ghost Pepper Pack', rolls: '1/3/10/50', costRobux: '99/249/799/4,449', exclusiveSeeds: [
 { name: 'Baby Cactus', rarity: 'Rare', odds: '50%', harvestType: 'Multi' },
 { name: 'Horned Melon', rarity: 'Rare', odds: '30%', harvestType: 'Single' },
 { name: 'Glow Mushroom', rarity: 'Epic', odds: '15%', harvestType: 'Single' },
 { name: 'Poison Ivy', rarity: 'Legendary', odds: '4%', harvestType: 'Single' },
 { name: 'Ghost Pepper', rarity: 'Mythic', odds: '1%', harvestType: 'Multi' },
 ]},
];
