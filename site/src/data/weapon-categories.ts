/**
 * Weapon categories for taxonomy pages.
 * Each category groups weapons by type and targets specific SEO keywords.
 */

export interface WeaponCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  seoDescription: string;
  intro: string;
  weaponIds: string[];
}

export const weaponCategories: WeaponCategory[] = [
  {
    slug: "swords",
    name: "Swords",
    title: "Types of Swords: A Visual Guide to History's Bladed Weapons",
    description: "From the Roman gladius to the Japanese katana, explore every type of sword cataloged in The Periodic Table of Weapons.",
    seoDescription: "Explore the major types of swords throughout history, from the Roman gladius and medieval longsword to the Japanese katana, Turkish sabre, and Renaissance rapier. Illustrated guide with origins, eras, and combat details.",
    intro: "The sword is the most iconic weapon in human history. It began as a dagger that somebody decided to make longer, and it never stopped evolving. Each culture that adopted the sword reshaped it to fit its fighting style, its metallurgy, and its battlefield conditions. A Roman legionary would barely recognize a katana, and a rapier fencer would have no idea what to do with a scimitar. That's the point. The sword adapted to everything, which is why it lasted for three thousand years as the prestige weapon of warriors worldwide.",
    weaponIds: ["dagger", "gladius", "turkosabre", "longsword", "scimitar", "katana", "rapier", "cutlass"],
  },
  {
    slug: "polearms",
    name: "Polearms",
    title: "Types of Polearms: Spears, Pikes, Halberds & More",
    description: "The polearm family spans from prehistoric spears to Renaissance halberds. Explore every polearm in The Periodic Table of Weapons.",
    seoDescription: "A complete guide to polearm types: spears, javelins, pikes, halberds, pollaxes, bardiches, and bills. Learn how polearms dominated warfare from prehistory through the Renaissance, with illustrated examples.",
    intro: "If you had to pick one weapon category that won more battles than any other, it's polearms. Not swords, not bows, not guns. Polearms. A sharpened point on a long stick is cheap, easy to learn, and terrifyingly effective in formation. The spear was the backbone of organized armies for longer than every other weapon on this site combined. Its descendants, the pike and the halberd, ended the age of the mounted knight. Even the bayonet is just a spear bolted onto a gun.",
    weaponIds: ["javelin", "spear", "pike", "pollaxe", "bill", "halberd", "bardiche"],
  },
  {
    slug: "ranged-weapons",
    name: "Ranged Weapons",
    title: "Ancient & Medieval Ranged Weapons: Bows, Crossbows & Slings",
    description: "From the prehistoric atlatl to the medieval crossbow, explore the ranged weapons that changed warfare before gunpowder.",
    seoDescription: "Explore pre-gunpowder ranged weapons: the sling, atlatl, composite bow, yumi, longbow, crossbow, gastraphetes, and repeating crossbow. Illustrated guide covering origins, mechanics, and battlefield impact.",
    intro: "Killing from a distance changed warfare more than any single invention except gunpowder itself. The first ranged weapons were simple thrown objects. But each step in their evolution, from the atlatl's leverage to the composite bow's laminated energy storage to the crossbow's mechanical lock, multiplied the range and lethality available to a single person. By the time English longbowmen shattered French cavalry at Agincourt, the principle was established: you don't need to be brave or strong if you can shoot accurately from 250 meters away.",
    weaponIds: ["sling", "atlatl", "compositebow", "yumi", "gastraphetes", "crossbow", "longbow", "repeatingcrossbow"],
  },
  {
    slug: "bludgeons",
    name: "Bludgeons & Impact Weapons",
    title: "Maces, War Hammers & Bludgeoning Weapons Through History",
    description: "Clubs, maces, flanged maces, and war hammers: the blunt-force weapons that defeated armor when blades couldn't.",
    seoDescription: "A guide to bludgeoning weapons from the prehistoric club to the medieval war hammer. Learn how maces, flanged maces, and impact weapons evolved to defeat ever-improving armor across thousands of years.",
    intro: "When you can't cut through armor, hit it harder. That's the entire philosophy behind bludgeoning weapons, and it worked for five thousand years. The club is the simplest weapon a human can make. The mace added a heavy head. The flanged mace added ridges to concentrate force. The war hammer added a spike to punch through plate. Each evolution was a direct response to better armor, and each time, the bludgeon caught up. There's something honest about that arms race.",
    weaponIds: ["fist", "stone", "club", "mace", "flangedmace", "warhammer"],
  },
  {
    slug: "firearms",
    name: "Firearms",
    title: "Types of Firearms: From Fire Lances to Assault Rifles",
    description: "The complete evolution of firearms, from the Chinese fire lance through matchlocks, muskets, revolvers, and modern assault rifles.",
    seoDescription: "Trace the complete evolution of firearms from the 10th-century Chinese fire lance to the modern assault rifle. Covers hand cannons, matchlocks, muskets, pistols, revolvers, semi-automatic and automatic weapons.",
    intro: "Every firearm in existence descends from a bamboo tube packed with gunpowder and strapped to a spear. The fire lance appeared in 10th-century China, and within nine centuries its descendants had made every other weapon category on this poster either obsolete or ceremonial. The progression from fire lance to hand cannon to matchlock to flintlock to percussion cap to cartridge is not a story of sudden leaps. It's a slow, grinding march of incremental improvements, each one making the last generation of weapons just slightly less relevant.",
    weaponIds: ["firelance", "handcannon", "arquebus", "musket", "blunderbuss", "singleshotpistol", "multishotpistol", "semiautopistol", "machinepistol", "personaldefenseweapon"],
  },
  {
    slug: "rifles",
    name: "Rifles",
    title: "Types of Rifles: From Muskets to Modern Assault Rifles",
    description: "The evolution of the rifle from the Minié ball revolution through semi-automatic, assault, and anti-materiel designs.",
    seoDescription: "Explore rifle types from the Minié rifle that changed the Civil War to the M1 Garand, AK-47, and Barrett M82. Covers rifled muskets, semi-automatic rifles, assault rifles, and anti-materiel rifles.",
    intro: "Rifling changed everything. Cut spiral grooves into a barrel and the bullet spins, flies straighter, and hits harder at range. The problem was always loading: a tight-fitting ball is accurate but slow to ram home. The Minié ball solved this in the 1840s with a hollow-base bullet that expanded on firing, and suddenly infantry could kill at 500 meters. The tactical implications took a generation to absorb, and the cost was measured in the mass graves of the American Civil War. Every rifle since has been an extension of that same idea: spin the projectile, extend the range, increase the lethality.",
    weaponIds: ["minierifle", "semiautorifle", "assaultrifle", "antimaterielrifle"],
  },
  {
    slug: "shotguns",
    name: "Shotguns",
    title: "Types of Shotguns: Break-Action to Combat Auto-Loaders",
    description: "Every type of shotgun from the simple break-action to lever, pump, and combat semi-auto designs.",
    seoDescription: "A guide to shotgun types: break-action, lever-action, pump-action, and semi-automatic combat shotguns. Covers the Winchester 1887, Remington 870, Benelli M4, and the shotgun's evolution from sport to warfare.",
    intro: "The shotgun has been declared obsolete by military planners roughly once per generation, and it keeps showing up anyway. The reason is versatility. Swap the ammunition and the same weapon goes from bird hunting to door breaching to riot control. No other firearm category adapts to as many roles with a simple change of shells. The break-action is the simplest design that works. The pump-action is the most reliable. The combat shotgun is the most lethal. Pick your priority.",
    weaponIds: ["breakshotgun", "levershotgun", "pumpshotgun", "combatshotgun"],
  },
  {
    slug: "siege-weapons",
    name: "Siege Weapons & Artillery",
    title: "Siege Weapons & Artillery: Catapults, Trebuchets & Cannons",
    description: "The machines of destruction: from Greek catapults and medieval trebuchets to the cannons that ended the age of castles.",
    seoDescription: "Explore the history of siege weapons and artillery: catapults, trebuchets, hand cannons, full cannons, and field guns. Learn how these machines toppled walls, ended feudalism, and reshaped warfare.",
    intro: "Siege weapons exist because walls work. For most of human history, a well-built fortification could hold off armies for months or years. The catapult was the first serious answer: a machine that could throw heavy stones farther and harder than any human. The trebuchet refined the concept to its mechanical limit. Then the cannon arrived and made stone walls irrelevant overnight. The fall of Constantinople in 1453, when Ottoman bombards breached walls that had stood for a thousand years, is the dividing line between medieval and modern warfare.",
    weaponIds: ["catapault", "trebuchet", "cannon", "fieldgun", "grenade"],
  },
  {
    slug: "axes",
    name: "Axes & Edged Weapons",
    title: "Battle Axes & Edged Weapons: From Stone Age to Viking Age",
    description: "Hand axes, battle axes, and edged combat tools from the Lower Paleolithic through the Viking Age and beyond.",
    seoDescription: "Explore battle axes and edged weapons from the Acheulean hand axe to the Viking bearded axe. Covers prehistoric hand axes, medieval battle axes, and their role in warfare across 1.7 million years of human conflict.",
    intro: "The axe is older than civilization. The hand axe appeared 1.7 million years ago and didn't change for a million years because it didn't need to. When metal came along, the axe gained a hafted head and became the battle axe, the signature weapon of the Viking Age. Cheaper than a sword, easier to make, and just as lethal in trained hands. The battle axe armed the Norse warriors who reshaped the map of Europe, and the huscarls who held the shield wall at Hastings until they couldn't hold it anymore.",
    weaponIds: ["handaxe", "battleaxe"],
  },
];
