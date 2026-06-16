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
 { name: 'Big Owl', emoji: '🦉', rarity: 'Uncommon', costSheckles: '50,000', costRobux: null, ability: '+25% Night Vision (double the normal Owl).', tier: 'B', category: 'utility', imageKey: 'owl' },
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
  {
      "name": "Tulip",
      "emoji": "🌷",
      "rarity": "Uncommon",
      "costSheckles": "40",
      "harvestType": "Single",
      "notes": "Flower seed."
  },
  {
      "name": "Apple",
      "emoji": "🍎",
      "rarity": "Uncommon",
      "costSheckles": "400",
      "harvestType": "Multi",
      "notes": "Good mid-game income."
  },
  {
      "name": "Corn",
      "emoji": "🌽",
      "rarity": "Rare",
      "costSheckles": "2,500",
      "harvestType": "Multi",
      "notes": "Excellent early-game money maker."
  },
  {
      "name": "Cactus",
      "emoji": "🌵",
      "rarity": "Rare",
      "costSheckles": "5,000",
      "harvestType": "Single",
      "notes": "Mid-game crop."
  },
  {
      "name": "Mushroom",
      "emoji": "🍄",
      "rarity": "Epic",
      "costSheckles": "15,000",
      "harvestType": "Multi",
      "notes": "Good for mid-game."
  },
  {
      "name": "Green Bean",
      "emoji": "🫛",
      "rarity": "Epic",
      "costSheckles": "20,000",
      "harvestType": "Multi",
      "notes": "Money machine, obtainable via code."
  },
  {
      "name": "Banana",
      "emoji": "🍌",
      "rarity": "Epic",
      "costSheckles": "30,000",
      "harvestType": "Multi",
      "notes": "Solid epic tier income."
  },
  {
      "name": "Grape",
      "emoji": "🍇",
      "rarity": "Epic",
      "costSheckles": "50,000",
      "harvestType": "Multi",
      "notes": "Good epic tier income."
  },
  {
      "name": "Coconut",
      "emoji": "🥥",
      "rarity": "Epic",
      "costSheckles": "70,000",
      "harvestType": "Multi",
      "notes": "Strong epic tier income."
  },
  {
      "name": "Dragon Fruit",
      "emoji": "🐉",
      "rarity": "Legendary",
      "costSheckles": "120,000",
      "harvestType": "Multi",
      "notes": "High value legendary crop."
  },
  {
      "name": "Sunflower",
      "emoji": "🌻",
      "rarity": "Legendary",
      "costSheckles": "5,000,000",
      "harvestType": "Multi",
      "notes": "Very high value late-game crop."
  },
  {
      "name": "Poison Apple",
      "emoji": "🍏",
      "rarity": "Mythic",
      "costSheckles": "TBA",
      "harvestType": "Multi",
      "notes": "Price TBA."
  }
]


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

// === EGGS DATA ===
export interface GAG2Egg {
 name: string; emoji: string; rarity: string; source: string; pets: { name: string; odds: string }[];
}
export const gag2Eggs: GAG2Egg[] = [
 { name: 'Common Egg', emoji: '🥚', rarity: 'Common', source: 'Guild reward',
  pets: [
   { name: 'Frog', odds: '30%' }, { name: 'Bunny', odds: '30%' },
   { name: 'Deer', odds: '20%' }, { name: 'Robin', odds: '4.5%' },
   { name: 'Bee', odds: '4.5%' }, { name: 'Golden Dragonfly', odds: '0.3%' },
   { name: 'Unicorn', odds: '0.3%' }, { name: 'Raccoon', odds: '0.2%' },
  ]},
 { name: 'Epic Egg', emoji: '🥚', rarity: 'Epic', source: 'TBA (not yet released)',
  pets: [
   { name: 'Deer', odds: '60%' }, { name: 'Unicorn', odds: '30%' },
   { name: 'Bee', odds: '9%' }, { name: 'Big Bee', odds: '1%' },
  ]},
];

// === BADGES DATA ===
export const gag2Badges = [
 { name: 'Carrot!', desc: 'Harvest your first Carrot', category: 'Tutorial' },
 { name: 'First Pet!', desc: 'Obtain your first pet', category: 'Pet' },
 { name: 'Egg Hatcher!', desc: 'Hatch your first pet egg', category: 'Pet' },
 { name: "OMG it's BIG!", desc: 'Hatch a Big pet from an egg', category: 'Pet' },
 { name: "OMG it's HUGE!", desc: 'Hatch a Huge pet from an egg', category: 'Pet' },
 { name: 'First Mutation!', desc: 'Get your first mutated plant', category: 'Mutation' },
 { name: 'Golden!', desc: 'Harvest a Golden fruit', category: 'Mutation' },
 { name: 'Rainbow!', desc: 'Harvest a Rainbow fruit', category: 'Mutation' },
 { name: 'Builder!', desc: 'Buy and place any prop', category: 'Gameplay' },
 { name: 'Stole a Fruit!', desc: 'Steal from another garden at night', category: 'Gameplay' },
 { name: '10ft Plant!', desc: 'Grow a plant reaching 10 feet', category: 'Plant Height' },
 { name: '25ft Plant!', desc: 'Grow a plant reaching 25 feet', category: 'Plant Height' },
 { name: '50ft Plant!', desc: 'Grow a plant reaching 50 feet', category: 'Plant Height' },
 { name: '100ft Plant!', desc: 'Grow a plant reaching 100 feet', category: 'Plant Height' },
 { name: '500ft Plant!', desc: 'Grow a plant reaching 500 feet', category: 'Plant Height' },
 { name: '1000ft Plant!', desc: 'Grow a plant reaching 1000 feet', category: 'Plant Height' },
 { name: '5kg Fruit!', desc: 'Grow a fruit weighing 5kg', category: 'Fruit Weight' },
 { name: '10kg Fruit!', desc: 'Grow a fruit weighing 10kg', category: 'Fruit Weight' },
 { name: '25kg Fruit!', desc: 'Grow a fruit weighing 25kg', category: 'Fruit Weight' },
 { name: '50kg Fruit!', desc: 'Grow a fruit weighing 50kg', category: 'Fruit Weight' },
 { name: '100kg Fruit!', desc: 'Grow a fruit weighing 100kg', category: 'Fruit Weight' },
 { name: 'OG', desc: 'Play during launch week (Jun 12-19, 2026)', category: 'Limited' },
 { name: 'We are so back!', desc: 'Water a plant during launch week', category: 'Limited' },
];

// === CROP VALUE DATA ===
export type GAG2CropRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Super';
export type GAG2CropStage = 'early' | 'mid' | 'late';

export interface GAG2Crop {
 name: string;
 slug: string;
 emoji: string;
 rarity: GAG2CropRarity;
 seedCost: number | null;
 baseValue: number;
 averageWeight: number;
 harvestType: 'Single' | 'Multi';
 stage: GAG2CropStage;
 imageKey?: string;
}

export const gag2Crops: GAG2Crop[] = [
 { name: 'Carrot', slug: 'carrot', emoji: '🥕', rarity: 'Common', seedCost: 5, baseValue: 18, averageWeight: 0.35, harvestType: 'Single', stage: 'early' },
 { name: 'Strawberry', slug: 'strawberry', emoji: '🍓', rarity: 'Common', seedCost: 10, baseValue: 32, averageWeight: 0.45, harvestType: 'Multi', stage: 'early' },
 { name: 'Blueberry', slug: 'blueberry', emoji: '🫐', rarity: 'Common', seedCost: 15, baseValue: 45, averageWeight: 0.5, harvestType: 'Multi', stage: 'early' },
 { name: 'Tulip', slug: 'tulip', emoji: '🌷', rarity: 'Uncommon', seedCost: 40, baseValue: 110, averageWeight: 0.65, harvestType: 'Single', stage: 'early' },
 { name: 'Tomato', slug: 'tomato', emoji: '🍅', rarity: 'Uncommon', seedCost: 120, baseValue: 260, averageWeight: 0.9, harvestType: 'Multi', stage: 'early' },
 { name: 'Apple', slug: 'apple', emoji: '🍎', rarity: 'Uncommon', seedCost: 400, baseValue: 850, averageWeight: 1.2, harvestType: 'Multi', stage: 'mid' },
 { name: 'Bamboo', slug: 'bamboo', emoji: '🎋', rarity: 'Rare', seedCost: 700, baseValue: 1800, averageWeight: 2.4, harvestType: 'Multi', stage: 'mid' },
 { name: 'Corn', slug: 'corn', emoji: '🌽', rarity: 'Rare', seedCost: 2500, baseValue: 5200, averageWeight: 1.8, harvestType: 'Multi', stage: 'mid' },
 { name: 'Cactus', slug: 'cactus', emoji: '🌵', rarity: 'Rare', seedCost: 5000, baseValue: 9600, averageWeight: 3.2, harvestType: 'Single', stage: 'mid' },
 { name: 'Pineapple', slug: 'pineapple', emoji: '🍍', rarity: 'Rare', seedCost: 8500, baseValue: 16000, averageWeight: 2.9, harvestType: 'Multi', stage: 'mid', imageKey: 'pineapple-plant' },
 { name: 'Baby Cactus', slug: 'baby-cactus', emoji: '🌵', rarity: 'Rare', seedCost: null, baseValue: 14500, averageWeight: 2.6, harvestType: 'Multi', stage: 'mid' },
 { name: 'Horned Melon', slug: 'horned-melon', emoji: '🍈', rarity: 'Rare', seedCost: null, baseValue: 22000, averageWeight: 3.5, harvestType: 'Single', stage: 'mid' },
 { name: 'Mushroom', slug: 'mushroom', emoji: '🍄', rarity: 'Epic', seedCost: 15000, baseValue: 30000, averageWeight: 2.1, harvestType: 'Multi', stage: 'mid', imageKey: 'mushroom-farm' },
 { name: 'Green Bean', slug: 'green-bean', emoji: '🫛', rarity: 'Epic', seedCost: 20000, baseValue: 42000, averageWeight: 2.4, harvestType: 'Multi', stage: 'mid' },
 { name: 'Banana', slug: 'banana', emoji: '🍌', rarity: 'Epic', seedCost: 30000, baseValue: 62000, averageWeight: 2.6, harvestType: 'Multi', stage: 'mid' },
 { name: 'Grape', slug: 'grape', emoji: '🍇', rarity: 'Epic', seedCost: 50000, baseValue: 93000, averageWeight: 1.9, harvestType: 'Multi', stage: 'mid' },
 { name: 'Coconut', slug: 'coconut', emoji: '🥥', rarity: 'Epic', seedCost: 70000, baseValue: 126000, averageWeight: 4.5, harvestType: 'Multi', stage: 'mid' },
 { name: 'Mango', slug: 'mango', emoji: '🥭', rarity: 'Epic', seedCost: 85000, baseValue: 150000, averageWeight: 2.8, harvestType: 'Multi', stage: 'mid' },
 { name: 'Glow Mushroom', slug: 'glow-mushroom', emoji: '🍄', rarity: 'Epic', seedCost: null, baseValue: 65000, averageWeight: 1.7, harvestType: 'Single', stage: 'mid' },
 { name: 'Dragon Fruit', slug: 'dragon-fruit', emoji: '🐉', rarity: 'Legendary', seedCost: 120000, baseValue: 250000, averageWeight: 3.1, harvestType: 'Multi', stage: 'late' },
 { name: 'Acorn', slug: 'acorn', emoji: '🌰', rarity: 'Legendary', seedCost: 500000, baseValue: 900000, averageWeight: 1.1, harvestType: 'Multi', stage: 'late' },
 { name: 'Cherry', slug: 'cherry', emoji: '🍒', rarity: 'Legendary', seedCost: 950000, baseValue: 1700000, averageWeight: 0.8, harvestType: 'Multi', stage: 'late' },
 { name: 'Sunflower', slug: 'sunflower', emoji: '🌻', rarity: 'Legendary', seedCost: 5000000, baseValue: 25000000, averageWeight: 7.5, harvestType: 'Multi', stage: 'late' },
 { name: 'Poison Ivy', slug: 'poison-ivy', emoji: '🌿', rarity: 'Legendary', seedCost: null, baseValue: 25000, averageWeight: 1.5, harvestType: 'Single', stage: 'late' },
 { name: 'Pomegranate', slug: 'pomegranate', emoji: '🍎', rarity: 'Mythic', seedCost: 12000000, baseValue: 100000000, averageWeight: 3.6, harvestType: 'Multi', stage: 'late' },
 { name: 'Poison Apple', slug: 'poison-apple', emoji: '🍏', rarity: 'Mythic', seedCost: 25000000, baseValue: 120000000, averageWeight: 2.2, harvestType: 'Multi', stage: 'late' },
 { name: 'Ghost Pepper', slug: 'ghost-pepper', emoji: '🌶️', rarity: 'Mythic', seedCost: null, baseValue: 150000000, averageWeight: 1.3, harvestType: 'Multi', stage: 'late' },
 { name: 'Venus Fly Trap', slug: 'venus-fly-trap', emoji: '🪴', rarity: 'Mythic', seedCost: 7000000, baseValue: 80000000, averageWeight: 5.5, harvestType: 'Multi', stage: 'late', imageKey: 'venus-fly-trap' },
 { name: 'Moon Bloom', slug: 'moon-bloom', emoji: '🌙', rarity: 'Super', seedCost: 65000000, baseValue: 500000000, averageWeight: 4.8, harvestType: 'Multi', stage: 'late' },
 { name: "Dragon's Breath", slug: 'dragons-breath', emoji: '🔥', rarity: 'Super', seedCost: 90000000, baseValue: 750000000, averageWeight: 6.2, harvestType: 'Multi', stage: 'late' },
];

export interface GAG2Mutation {
 name: string;
 slug: string;
 multiplier: number;
 category: 'primary' | 'weather';
 action: string;
}

export const gag2Mutations: GAG2Mutation[] = [
 { name: 'None', slug: 'none', multiplier: 1, category: 'primary', action: 'Use normal sell value.' },
 { name: 'Gold', slug: 'gold', multiplier: 15, category: 'primary', action: 'Sell strong crops or compare against Rainbow plans.' },
 { name: 'Rainbow', slug: 'rainbow', multiplier: 40, category: 'primary', action: 'Save high-value multi-harvest crops for the biggest payout.' },
 { name: 'Frozen', slug: 'frozen', multiplier: 40, category: 'weather', action: 'Keep valuable crops planted during Snowfall.' },
 { name: 'Electric', slug: 'electric', multiplier: 70, category: 'weather', action: 'Use Lightning windows for your best crops.' },
 { name: 'Starstruck', slug: 'starstruck', multiplier: 45, category: 'weather', action: 'Wait until Starfall ends, then sell boosted crops.' },
 { name: 'Bloodlit', slug: 'bloodlit', multiplier: 60, category: 'weather', action: 'Defend before leaving valuable crops out at night.' },
];

export function formatSheckles(value: number): string {
 if (!Number.isFinite(value)) return '0';
 if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(value >= 10_000_000_000 ? 0 : 1)}B`;
 if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1)}M`;
 if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 10_000 ? 0 : 1)}K`;
 return Math.round(value).toLocaleString('en-US');
}

export function calculateCropValue({
 crop,
 weight,
 quantity,
 primaryMultiplier,
 weatherMultiplier,
 bargainBonus,
}: {
 crop: GAG2Crop;
 weight: number;
 quantity: number;
 primaryMultiplier: number;
 weatherMultiplier: number;
 bargainBonus: number;
}) {
 const safeWeight = Math.max(weight, 0.01);
 const safeQuantity = Math.max(quantity, 1);
 const weightFactor = Math.pow(safeWeight / crop.averageWeight, 2);
 const mutationMultiplier = primaryMultiplier * weatherMultiplier;
 const bargainMultiplier = 1 + Math.max(bargainBonus, 0) / 100;
 const singleValue = crop.baseValue * weightFactor * mutationMultiplier * bargainMultiplier;
 const totalValue = singleValue * safeQuantity;
 const seedCost = crop.seedCost ?? 0;
 const netProfit = totalValue - seedCost;
 const roi = seedCost > 0 ? (netProfit / seedCost) * 100 : null;
 return { weightFactor, mutationMultiplier, singleValue, totalValue, netProfit, roi };
}

export interface GAG2LookupItem {
 type: 'Pet' | 'Gear' | 'Seed' | 'Crop' | 'Code' | 'Egg' | 'Badge' | 'System' | 'Page';
 title: string;
 href: string;
 summary: string;
 keywords: string[];
}

const pageLookups: GAG2LookupItem[] = [
 { type: 'Page', title: 'Crop Value Calculator', href: '/calculator', summary: 'Calculate crop sell value from weight, quantity, mutations, and bargain bonus.', keywords: ['calculator', 'crop value', 'sell value', 'profit', 'roi'] },
 { type: 'Page', title: 'Crop Values & ROI', href: '/values', summary: 'Compare crop base value, seed cost, profit, ROI, rarity, and harvest type.', keywords: ['values', 'value list', 'roi', 'best crops', 'profit'] },
 { type: 'Page', title: 'Wheelbarrow Worth Guide', href: '/wheelbarrow', summary: 'Check what Wheelbarrow does and whether to buy it before pets or defense.', keywords: ['wheelbarrow', 'wheel barrow', 'worth', '500k', '129 robux'] },
 { type: 'Page', title: 'Pet Buy Order', href: '/pets', summary: 'Choose the next pet for speed, growth, defense, mutation income, or night stealing.', keywords: ['pets', 'pet wiki', 'best pet', 'buy order', 'bunny', 'deer'] },
 { type: 'Page', title: 'Codes', href: '/codes', summary: 'Redeem active Grow a Garden 2 codes and check reward steps.', keywords: ['codes', 'teamgreenbean', 'free seeds'] },
 { type: 'System', title: 'Weather Events', href: '/weather', summary: 'Use weather windows to boost crop value and plan when to sell.', keywords: ['weather', 'lightning', 'snowfall', 'rainbow', 'blood moon', 'midas moon'] },
 { type: 'System', title: 'Mutations', href: '/mutations', summary: 'Plan Gold, Rainbow, Electric, Frozen, Starstruck, and Bloodlit crop boosts.', keywords: ['mutation', 'gold mutation', 'rainbow mutation', 'electric mutation', 'frozen'] },
 { type: 'System', title: 'Badges', href: '/badges', summary: 'Find badge unlock requirements for pets, crops, fruit weight, and limited tasks.', keywords: ['badge', 'badges', 'achievement', '100kg', '1000ft'] },
];

export const gag2LookupIndex: GAG2LookupItem[] = [
 ...pageLookups,
 ...gag2Pets.map((pet) => ({
  type: 'Pet' as const,
  title: pet.name,
  href: '/pets',
  summary: `${pet.rarity} ${pet.category} pet. ${pet.ability}`,
  keywords: [pet.name, pet.rarity, pet.category, pet.ability],
 })),
 ...gag2Gears.map((gear) => ({
  type: 'Gear' as const,
  title: gear.name,
  href: gear.name === 'Wheelbarrow' ? '/wheelbarrow' : '/gears',
  summary: `${gear.rarity} ${gear.category} gear. ${gear.effect}`,
  keywords: [gear.name, gear.rarity, gear.category, gear.effect, gear.costSheckles],
 })),
 ...gag2Crops.map((crop) => ({
  type: 'Crop' as const,
  title: crop.name,
  href: '/values',
  summary: `${crop.rarity} ${crop.harvestType.toLowerCase()} crop. Base value ${formatSheckles(crop.baseValue)} Sheckles.`,
  keywords: [crop.name, crop.rarity, crop.stage, crop.harvestType, 'crop', 'seed', 'value'],
 })),
 ...gag2Codes.map((code) => ({
  type: 'Code' as const,
  title: code.code,
  href: '/codes',
  summary: `${code.reward}. Verified ${code.verified}.`,
  keywords: [code.code, code.reward, 'code', 'codes'],
 })),
 ...gag2Eggs.map((egg) => ({
  type: 'Egg' as const,
  title: egg.name,
  href: '/eggs',
  summary: `${egg.rarity} egg from ${egg.source}. Includes ${egg.pets.map((pet) => pet.name).slice(0, 3).join(', ')}.`,
  keywords: [egg.name, egg.rarity, egg.source, ...egg.pets.map((pet) => pet.name)],
 })),
 ...gag2Badges.map((badge) => ({
  type: 'Badge' as const,
  title: badge.name,
  href: '/badges',
  summary: badge.desc,
  keywords: [badge.name, badge.category, badge.desc, 'badge', 'achievement'],
 })),
];
