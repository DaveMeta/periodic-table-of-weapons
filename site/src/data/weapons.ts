export interface Weapon {
  id: string;
  name: string;
  alt?: string;
}

export interface Epoch {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  period: string;
  description: string;
  headerImage: string;
  weapons: Weapon[];
}

export const epochs: Epoch[] = [
  {
    id: "ancient",
    slug: "ancient",
    name: "Ancient Age",
    subtitle: "Before Recorded History",
    period: "Prehistory",
    description: "As long as there have been humans, there has been conflict. Prehistoric warfare was an intimate affair, conducted on a very small scale. The development of the first ancient city-states allowed for agricultural surplus, which in turn gave rise to centralization and the first organized armies.",
    headerImage: "/images/header/ancient.jpg",
    weapons: [
      { id: "fist", name: "Fists" },
      { id: "stone", name: "Stone" },
      { id: "club", name: "Club" },
      { id: "javelin", name: "Javelin" },
      { id: "sling", name: "Sling" },
      { id: "handaxe", name: "Hand Axe" },
      { id: "spear", name: "Spear" },
      { id: "compositebow", name: "Composite Bow" },
      { id: "atlatl", name: "Atlatl" },
    ],
  },
  {
    id: "bronze-iron",
    slug: "bronze-iron",
    name: "Bronze and Iron Ages",
    subtitle: "From 3500 BCE to 400 CE",
    period: "3500 BCE - 400 CE",
    description: "The Bronze and Iron Ages are marked by vast advances in metalworking, which in turn brought about innovations in the manufacture and design of weapons and armor. These eras gave rise to the first dedicated weapons without uses as tools — most notably the sword — and major improvements in siege weaponry.",
    headerImage: "/images/header/bronze.jpg",
    weapons: [
      { id: "mace", name: "Mace" },
      { id: "dagger", name: "Dagger" },
      { id: "gladius", name: "Gladius" },
      { id: "catapault", name: "Catapult" },
      { id: "yumi", name: "Yumi" },
      { id: "gastraphetes", name: "Gastraphetes" },
      { id: "trebuchet", name: "Trebuchet" },
      { id: "crossbow", name: "Crossbow" },
    ],
  },
  {
    id: "middle-ages",
    slug: "middle-ages",
    name: "Middle Ages",
    subtitle: "From 400 CE to 1500 CE",
    period: "400 CE - 1500 CE",
    description: "Major technological, cultural, and political shifts forced a dramatic transformation in the character of warfare from antiquity. Standing armies became commonplace, and tactics changed rapidly to reflect the rise of the castle, advanced bows, heavy cavalry, and gunpowder weaponry.",
    headerImage: "/images/header/middle.jpg",
    weapons: [
      { id: "flangedmace", name: "Flanged Mace" },
      { id: "turkosabre", name: "Turko-Mongol Sabre" },
      { id: "longsword", name: "Longsword" },
      { id: "battleaxe", name: "Battle Axe" },
      { id: "pike", name: "Pike" },
      { id: "firelance", name: "Fire Lance" },
      { id: "grenade", name: "Grenade" },
      { id: "warhammer", name: "War Hammer" },
      { id: "scimitar", name: "Scimitar" },
      { id: "katana", name: "Katana" },
      { id: "pollaxe", name: "Pollaxe" },
      { id: "bill", name: "Bill" },
      { id: "longbow", name: "Longbow" },
      { id: "arquebus", name: "Arquebus" },
      { id: "handcannon", name: "Hand Cannon" },
      { id: "cannon", name: "Cannon" },
      { id: "bardiche", name: "Bardiche" },
      { id: "halberd", name: "Halberd" },
      { id: "repeatingcrossbow", name: "Repeating Crossbow" },
    ],
  },
  {
    id: "early-modern",
    slug: "early-modern",
    name: "Early Modern Age",
    subtitle: "From 1500 CE to 1800 CE",
    period: "1500 CE - 1800 CE",
    description: "The early modern age is distinguished by the widespread use of gunpowder weaponry and accordingly shifting battlefield tactics. The size and scope of conflicts exploded, and armies dominated by heavily armored cavalry gave way to light infantry armed with muskets and mobile field artillery.",
    headerImage: "/images/header/earlymodern.jpg",
    weapons: [
      { id: "rapier", name: "Rapier" },
      { id: "cutlass", name: "Cutlass" },
      { id: "musket", name: "Musket" },
      { id: "blunderbuss", name: "Blunderbuss" },
      { id: "fieldgun", name: "Field Gun" },
    ],
  },
  {
    id: "modern",
    slug: "modern",
    name: "Modern Age",
    subtitle: "From 1800 CE to Present",
    period: "1800 CE - Present",
    description: "Warfare in the modern age is the story of scientific enterprise and industrial mass production. Weapons — particularly small arms — are far easier to use than a sword or bow, and the professional warrior has been supplanted by the conscripted soldier.",
    headerImage: "/images/header/modern.jpg",
    weapons: [
      { id: "singleshotpistol", name: "Single-Shot Pistol" },
      { id: "multishotpistol", name: "Multi-Shot Pistol" },
      { id: "semiautopistol", name: "Semi-Auto Pistol" },
      { id: "machinepistol", name: "Machine Pistol" },
      { id: "personaldefenseweapon", name: "Personal Defense Weapon" },
      { id: "breakshotgun", name: "Break Shotgun" },
      { id: "levershotgun", name: "Lever Shotgun" },
      { id: "pumpshotgun", name: "Pump Shotgun" },
      { id: "combatshotgun", name: "Combat Shotgun" },
      { id: "minierifle", name: "Mini\u00e9 Rifle" },
      { id: "semiautorifle", name: "Semi-Auto Rifle" },
      { id: "assaultrifle", name: "Assault Rifle" },
      { id: "antimaterielrifle", name: "Anti-Materiel Rifle" },
    ],
  },
];

export const totalWeapons = epochs.reduce((sum, e) => sum + e.weapons.length, 0);
