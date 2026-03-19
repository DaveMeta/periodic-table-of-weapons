/**
 * Enriched weapon data for individual weapon pages.
 * Keyed by weapon ID from weapons.ts.
 */

export interface WeaponDetail {
  type: string;
  origin: string;
  era: string;
  notableUsers: string;
  description: string;
  significance: string;
}

export const weaponDetails: Record<string, WeaponDetail> = {
  // ── Ancient Age ──────────────────────────────────────────
  fist: {
    type: "Unarmed",
    origin: "Universal",
    era: "Prehistory",
    notableUsers: "All early humans",
    description:
      "The human fist is the oldest weapon in existence. Long before our ancestors shaped stone or sharpened wood, bare-knuckle combat decided disputes over territory, mates, and resources. Archaeological evidence of healed fractures on ancient skulls confirms that interpersonal violence predates every other tool of war. The closed fist, with the thumb bracing the fingers, is a biomechanical adaptation unique among primates \u2014 our hands evolved not just to grip tools, but to deliver blows.",
    significance:
      "The fist is the zero point. Every other weapon on this poster exists because the fist alone was not enough.",
  },
  stone: {
    type: "Projectile / Bludgeon",
    origin: "Universal",
    era: "Lower Paleolithic, c. 2.6 million years ago",
    notableUsers: "Homo habilis, Homo erectus, all early hominins",
    description:
      "The thrown or hand-held stone is humanity's first technological weapon. Knapped flint and river cobbles served dual purpose \u2014 they could be hurled at prey or enemies from a distance, or gripped in the fist to amplify the force of a strike. Oldowan stone tools dating back 2.6 million years represent the earliest evidence of deliberate weapon-making. These rough choppers and scrapers gave our ancestors a decisive edge over larger predators and rival groups.",
    significance:
      "The leap from fist to stone is where weapons technology begins. Somebody picked up a rock and realized the world itself could be shaped into a weapon. Everything since has been a refinement of that idea.",
  },
  club: {
    type: "Bludgeon",
    origin: "Universal",
    era: "Prehistory",
    notableUsers: "Prehistoric tribes, indigenous peoples worldwide",
    description:
      "A heavy branch, a shaped length of hardwood, a bone \u2014 the club is the simplest extension of the human arm. It requires no metallurgy, no complex shaping, and no specialized materials. Yet its effectiveness is undeniable: a solid blow from a wooden club can shatter bone and collapse a skull. Clubs appear in virtually every culture on Earth, from the Polynesian mere pounamu carved from greenstone to the Native American gunstock war club.",
    significance:
      "The club is the archetype of the bludgeoning weapon \u2014 a category that persists through every era of warfare, evolving into the mace, the war hammer, and eventually the rifle butt. Its simplicity is its genius: anyone can pick up a stick.",
  },
  javelin: {
    type: "Thrown Spear",
    origin: "Africa / Europe",
    era: "Middle Paleolithic, c. 400,000 years ago",
    notableUsers: "Roman velites, Greek peltasts, Zulu warriors",
    description:
      "The javelin is a light spear designed to be thrown rather than thrust. Archaeological finds at Sch\u00f6ningen, Germany, include eight spruce-wood javelins dating to approximately 400,000 years ago \u2014 among the oldest known wooden artifacts. These were not crude sticks but carefully balanced projectiles, shaped with the center of gravity forward for accurate flight. The javelin gave early humans the ability to wound or kill from 20 to 30 meters away, which changed everything about how hunting and fighting worked.",
    significance:
      "The javelin is the first weapon designed solely for killing at a distance. Once you can wound an enemy from 30 meters away, the entire logic of combat changes. Standoff warfare starts here.",
  },
  sling: {
    type: "Ranged Projectile",
    origin: "Middle East / Mediterranean",
    era: "Neolithic, c. 10,000 BCE",
    notableUsers: "Balearic slingers, biblical David, Roman auxiliaries",
    description:
      "A deceptively simple weapon: two cords attached to a pouch, whirled overhead to hurl a stone or lead bullet at lethal velocity. A trained slinger could launch a projectile at speeds exceeding 100 mph, with an effective range surpassing that of most early bows. The Balearic Islanders were so renowned for their accuracy that they served as mercenaries across the ancient Mediterranean. Lead sling bullets from the Roman era have been found inscribed with taunts and curses.",
    significance:
      "Balearic slingers routinely outranged archers using a weapon that cost nothing to make. The sling proved something that keeps getting relearned throughout military history: cheap and well-trained beats expensive and mediocre.",
  },
  handaxe: {
    type: "Edged Tool / Weapon",
    origin: "Africa / Eurasia",
    era: "Lower Paleolithic, c. 1.7 million years ago",
    notableUsers: "Homo erectus, Homo heidelbergensis",
    description:
      "The Acheulean hand axe is one of the longest-used tool designs in human history, persisting largely unchanged for over a million years. Teardrop-shaped and bifacially knapped from flint, obsidian, or quartzite, it served as an all-purpose cutting, chopping, and scraping tool. In combat, the hand axe's sharp edges could inflict devastating lacerations. Its balanced weight made it effective both as a melee weapon and a thrown projectile.",
    significance:
      "The hand axe is the first standardized weapon. The same teardrop shape appears across Africa, Europe, and Asia, separated by thousands of miles and tens of thousands of years. Something about this design just worked, and nothing improved on it for over a million years.",
  },
  spear: {
    type: "Polearm / Thrusting Weapon",
    origin: "Universal",
    era: "Lower Paleolithic, c. 500,000 years ago",
    notableUsers: "Greek hoplites, Macedonian phalangites, Zulu impis",
    description:
      "The spear is arguably the most important weapon in human history. A sharpened point on a long shaft, it extends the reach of the wielder and concentrates force into a tiny area. Fire-hardened wooden spears from Clacton-on-Sea date to roughly 450,000 years ago. With the addition of stone and later metal points, the spear became the primary infantry weapon of virtually every civilization from the Sumerian phalanx to the Zulu impi. It is cheap, effective, and requires minimal training.",
    significance:
      "The spear dominated warfare for longer than any other weapon in history. From prehistory through the Renaissance, the spear in its various forms \u2014 pike, lance, sarissa \u2014 was the backbone of organized armies. More battles have been decided by the spear than any other weapon.",
  },
  compositebow: {
    type: "Ranged Weapon",
    origin: "Central Asian Steppe",
    era: "c. 2000 BCE",
    notableUsers: "Mongol horse archers, Huns, Scythians, Ottoman Turks",
    description:
      "The composite bow is a marvel of ancient engineering. Constructed from layers of wood, horn, and sinew laminated together with animal glue, it stores far more energy per unit of length than a simple wooden bow. This compact power made it ideal for mounted archery \u2014 steppe nomads could shoot accurately from horseback at full gallop. The Mongol composite bow had a draw weight of 100 to 160 pounds and an effective range exceeding 300 meters. It was the weapon that built the largest contiguous land empire in history.",
    significance:
      "The composite bow is why steppe nomads terrified settled civilizations for two thousand years. Mongols, Huns, Scythians, Turks: the list of empires built on horseback archery is long. No pre-industrial weapon packed more lethality into a smaller package.",
  },
  atlatl: {
    type: "Spear-Thrower",
    origin: "Africa / Europe / Americas",
    era: "Upper Paleolithic, c. 30,000 years ago",
    notableUsers: "Aztec warriors, Aboriginal Australians, Upper Paleolithic hunters",
    description:
      "The atlatl is a lever-based spear-throwing device that effectively extends the length of the thrower's arm, dramatically increasing the velocity and range of a dart or light spear. A skilled user can launch a projectile at over 90 mph \u2014 fast enough to penetrate megafauna hide. The atlatl predates the bow by tens of thousands of years and remained the primary ranged weapon of Mesoamerican armies even after contact with European firearms. The Aztec word \u2018atlatl\u2019 is the source of the modern English name.",
    significance:
      "The atlatl is the first weapon that amplifies the human body through leverage. Earlier weapons improved the projectile. The atlatl improved the thrower. That's a different kind of thinking entirely, and it predates the bow by tens of thousands of years.",
  },

  // ── Bronze and Iron Ages ─────────────────────────────────
  mace: {
    type: "Bludgeon",
    origin: "Mesopotamia / Egypt",
    era: "c. 5000 BCE",
    notableUsers: "Egyptian pharaohs, Sumerian infantry, medieval knights",
    description:
      "The mace evolved from the simple club through the addition of a heavy head \u2014 first stone, then copper, then bronze \u2014 mounted on a wooden shaft. The concentrated mass of the head multiplied impact force, making the mace devastating against armored and unarmored opponents alike. In ancient Egypt, the ceremonial mace became a symbol of royal authority; the Narmer Palette (c. 3100 BCE) depicts the pharaoh smiting his enemies with a mace. On the battlefield, the mace remained relevant for over four thousand years.",
    significance:
      "The mace established the principle of concentrated mass \u2014 focusing kinetic energy into a small striking surface. This concept drove the development of the flanged mace, the morning star, and the war hammer, each finding new ways to defeat ever-improving armor.",
  },
  dagger: {
    type: "Edged Sidearm",
    origin: "Mesopotamia / Anatolia",
    era: "Copper Age, c. 4000 BCE",
    notableUsers: "Roman legionaries, Egyptian soldiers, medieval knights",
    description:
      "The dagger is the earliest purpose-built stabbing weapon \u2014 a short, double-edged blade designed exclusively for close combat. The oldest metal daggers date to the Copper Age, and the form was refined through bronze and iron iterations. Unlike a knife, which is primarily a tool, the dagger was conceived from the start as an instrument of war. Roman legionaries carried the pugio as a sidearm. Medieval knights used the rondel dagger to finish fallen opponents through gaps in their armor, a technique called the misericorde \u2014 the mercy stroke.",
    significance:
      "The dagger is the ancestor of the sword. The technological leap from short blade to long blade produced the weapon that would define aristocratic warfare for three millennia. Every sword began as a dagger that someone decided to make longer.",
  },
  gladius: {
    type: "Short Sword",
    origin: "Iberian Peninsula / Roman Republic",
    era: "c. 300 BCE \u2013 300 CE",
    notableUsers: "Roman legionaries",
    description:
      "The gladius hispaniensis \u2014 the \u2018Spanish sword\u2019 \u2014 was the standard sidearm of the Roman legionary for over five centuries. Roughly 60\u201370 cm long with a double-edged blade and a sharp stabbing point, it was designed for the brutal close-quarters combat of the Roman battle line. Legionaries fought in tight formation behind large shields, using short, economical thrusts to the torso and groin. This technique was devastatingly effective: Livy records that Macedonian soldiers were horrified by the wounds inflicted by the gladius during the Roman conquest of Greece.",
    significance:
      "The gladius is the weapon that built the Roman Empire. Its effectiveness was inseparable from the tactical system that employed it \u2014 proof that a weapon\u2019s true power lies not in its design alone, but in the doctrine that governs its use.",
  },
  catapault: {
    type: "Siege Engine",
    origin: "Greece / Mediterranean",
    era: "c. 400 BCE",
    notableUsers: "Greek city-states, Roman legions, Hellenistic kingdoms",
    description:
      "The catapult in its earliest form \u2014 the torsion-powered ballista and onager \u2014 was the artillery of the ancient world. Greek engineers in Syracuse developed the first catapults under Dionysius I around 399 BCE. Roman engineers refined the technology into standardized field pieces that accompanied every legion. The onager could hurl stone projectiles weighing up to 25 kg over distances of 300\u2013400 meters, demolishing walls, towers, and formations of men with equal efficiency.",
    significance:
      "Before the catapult, destruction at range was limited to what one person could throw or shoot. After it, a machine could hurl 25 kilograms of stone 400 meters. That's a different kind of war. Every artillery piece since descends from this idea.",
  },
  yumi: {
    type: "Asymmetric Longbow",
    origin: "Japan",
    era: "Yayoi period, c. 300 BCE",
    notableUsers: "Samurai, ashigaru, Heian-era mounted archers",
    description:
      "The yumi is the traditional Japanese longbow, distinctive for its extreme asymmetry \u2014 the grip sits roughly one-third from the bottom. Standing over two meters tall, it is among the largest bows ever used in warfare. The asymmetric design allows it to be shot from horseback and from behind cover while kneeling. The yumi was the primary weapon of the samurai class for centuries before the sword assumed cultural prominence. In early Japanese warfare, battles often began with formal archery exchanges between mounted champions.",
    significance:
      "Most people think of the katana when they think of samurai weapons. But the yumi came first and mattered more. Ky\u016bd\u014d, the way of the bow, is still practiced today. The asymmetric limb design looks strange until you try to shoot a normal bow from a horse or a kneeling position, and then it makes perfect sense.",
  },
  gastraphetes: {
    type: "Mechanical Crossbow",
    origin: "Ancient Greece",
    era: "c. 5th century BCE",
    notableUsers: "Greek siege engineers, Syracusan defenders",
    description:
      "The gastraphetes, or \u2018belly bow,\u2019 was a large crossbow cocked by bracing the stock against the stomach and pushing down with the body\u2019s weight. It was the first known mechanical hand-held projectile weapon \u2014 a decisive step beyond the simple bow. Described by Heron of Alexandria, it could launch bolts with far greater force than a conventional bow, enabling a single soldier to penetrate shields and armor at range. The gastraphetes was the direct ancestor of the Roman ballista and, ultimately, the medieval crossbow.",
    significance:
      "The gastraphetes is where mechanical projectile weapons begin. A human can only pull a bowstring so hard. The gastraphetes used body weight instead of arm strength, storing more energy than any archer could manage. That principle, mechanical energy replacing muscle, eventually leads to firearms.",
  },
  trebuchet: {
    type: "Counterweight Siege Engine",
    origin: "China / Byzantine Empire / Medieval Europe",
    era: "c. 4th century BCE (traction), 12th century CE (counterweight)",
    notableUsers: "Mongol armies, Crusader forces, medieval European kings",
    description:
      "The trebuchet is the most powerful mechanical siege weapon ever built. The counterweight variant, which appeared in the Mediterranean around the 12th century, uses a massive weight (up to 10 tonnes) on a pivoting beam to hurl projectiles weighing 100\u2013150 kg over distances of 300 meters or more. Edward I\u2019s \u2018Warwolf,\u2019 used at the siege of Stirling Castle in 1304, was so large that it required 30 wagons to transport. The trebuchet could demolish stone fortifications that had resisted battering rams and catapults for centuries.",
    significance:
      "The counterweight trebuchet was the ultimate expression of mechanical siege warfare \u2014 the last great innovation before gunpowder made stone castles obsolete. It proved that gravity itself could be weaponized.",
  },
  crossbow: {
    type: "Ranged Weapon",
    origin: "China",
    era: "c. 6th century BCE",
    notableUsers: "Chinese infantry, medieval European crossbowmen, Genoese mercenaries",
    description:
      "The crossbow is a mechanically locked bow mounted on a stock, capable of being aimed and fired with minimal training. Chinese bronze crossbow triggers dating to the 6th century BCE demonstrate remarkable precision engineering. In medieval Europe, the crossbow was so devastating \u2014 capable of piercing chainmail at 100 meters \u2014 that the Second Lateran Council of 1139 attempted to ban its use against Christians. The ban failed completely. Crossbowmen remained a decisive battlefield element until supplanted by firearms in the 16th century.",
    significance:
      "The crossbow democratized ranged warfare. Unlike the longbow, which required years of training, a crossbow could turn a peasant into a lethal soldier in weeks. It was the first weapon to seriously threaten the armored knight's dominance.",
  },

  // ── Middle Ages ──────────────────────────────────────────
  flangedmace: {
    type: "Bludgeon",
    origin: "Europe / Middle East",
    era: "12th\u201315th century",
    notableUsers: "Crusader knights, Eastern European cavalry, clergy-warriors",
    description:
      "The flanged mace was a direct response to improving armor. By adding protruding metal flanges to the striking head, smiths concentrated impact force along narrow ridges that could dent, deform, and breach plate armor without needing to cut through it. The weapon was particularly favored by warrior-clergy, who adopted it under the dubious theological argument that a mace did not \u2018shed blood\u2019 as a bladed weapon would. Bishop Odo of Bayeux is depicted wielding a mace at the Battle of Hastings in the Bayeux Tapestry.",
    significance:
      "The flanged mace exemplifies the eternal arms race between offense and defense. Every improvement in armor drove innovation in the weapons designed to defeat it. The flanges were a direct answer to plate \u2014 concentrating force rather than distributing it.",
  },
  turkosabre: {
    type: "Curved Sword",
    origin: "Central Asian Steppe",
    era: "8th\u201314th century",
    notableUsers: "Turkic cavalry, Mongol warriors, Seljuk soldiers",
    description:
      "The Turko-Mongol sabre is a curved, single-edged sword optimized for mounted combat. Its gentle curve lets a rider draw the blade along a target at speed, converting the horse's momentum into a vicious slashing cut. Lighter and faster than a straight sword, the sabre became the defining weapon of steppe cavalry from the Turkic Khaganate through the Mongol Empire. The design was so effective that it influenced virtually every cavalry sword that followed, from the Persian shamshir to the European hussar saber.",
    significance:
      "The curved sabre solved a fundamental problem of mounted combat: how to deliver a cutting blow from a moving horse without the blade binding in the wound. Its geometry converts linear motion into rotational cutting force \u2014 a principle that shaped cavalry warfare for a millennium.",
  },
  longsword: {
    type: "Two-Handed Sword",
    origin: "Europe",
    era: "13th\u201316th century",
    notableUsers: "European knights, men-at-arms, fencing masters",
    description:
      "The longsword is a cruciform, double-edged sword with a grip long enough for two hands, wielded by European warriors from the late medieval period through the Renaissance. Typically 100\u2013120 cm in total length, it was a versatile weapon capable of powerful cuts, precise thrusts, and half-swording techniques where the blade itself was gripped for close-quarters grappling. The longsword spawned a rich tradition of martial arts \u2014 the Fechtb\u00fccher (fight books) of masters like Johannes Liechtenauer, Fiore dei Liberi, and Hans Talhoffer document sophisticated combat systems that rival any Asian martial art in complexity.",
    significance:
      "If you think medieval European combat was just armored men bashing each other, read the Fechtb\u00fccher. The longsword's fighting systems are as sophisticated as anything from Japan or China. The HEMA movement has revived these traditions, and what they've found looks nothing like Hollywood.",
  },
  battleaxe: {
    type: "Axe",
    origin: "Scandinavia / Northern Europe",
    era: "8th\u201314th century",
    notableUsers: "Viking warriors, Varangian Guard, Anglo-Saxon huscarls",
    description:
      "The medieval battle axe was the signature weapon of the Viking Age. The iconic bearded axe \u2014 with its extended lower blade designed to hook shields and limbs \u2014 was both a weapon of war and a tool of daily life. Two-handed Danish axes with broad, crescent-shaped blades could shear through mail and helmets with terrifying ease. The Varangian Guard, the elite Byzantine bodyguard composed of Norse mercenaries, was renowned for their massive two-handed axes. At the Battle of Hastings in 1066, Anglo-Saxon huscarls wielding Danish axes held the shield wall against Norman cavalry for hours.",
    significance:
      "The battle axe was the great equalizer of the Viking Age. Cheaper and easier to produce than a sword, it armed the Norse raiders and settlers who reshaped the map of Europe. An axe in the hands of a skilled warrior was every bit as lethal as a fine sword.",
  },
  pike: {
    type: "Polearm",
    origin: "Macedonia / Switzerland",
    era: "4th century BCE; revived 14th\u201317th century",
    notableUsers: "Macedonian phalangites, Swiss pikemen, Spanish tercios",
    description:
      "The pike is an extremely long thrusting spear, typically 4\u20136 meters in length, wielded in dense formations. Alexander the Great's Macedonian phalanx carried the sarissa, a 5.5-meter pike that created an impenetrable wall of iron points. The weapon was revived in the 14th century by the Swiss, whose disciplined pike squares shattered the dominance of mounted knights at battles like Morgarten (1315) and Grandson (1476). Spanish tercios combined pikemen with arquebusiers to create the most formidable military formation of the 16th century.",
    significance:
      "The pike proves that reach and discipline can defeat individual skill and expensive equipment. Swiss pikemen \u2014 common infantry \u2014 defeated the flower of European chivalry repeatedly, ending the feudal knight's reign on the battlefield.",
  },
  firelance: {
    type: "Gunpowder Weapon",
    origin: "China",
    era: "10th\u201313th century",
    notableUsers: "Song dynasty soldiers, Jin dynasty infantry",
    description:
      "The fire lance is the ancestor of all firearms. First documented in 10th-century China, it consisted of a bamboo or metal tube packed with gunpowder and attached to a spear. When ignited, it projected a jet of flame and shrapnel at close range while still functioning as a thrusting weapon. Over time, the fire lance evolved: barrels grew stronger, projectiles became standardized, and the spear component was discarded. By the 13th century, the fire lance had given birth to the hand cannon \u2014 the first true gun.",
    significance:
      "The fire lance is the single most consequential weapon on this entire poster. It is the direct ancestor of every firearm ever made. The principle it introduced \u2014 using an explosion to propel a projectile from a tube \u2014 would eventually render every other weapon category obsolete.",
  },
  grenade: {
    type: "Explosive Projectile",
    origin: "Byzantine Empire / China",
    era: "8th\u201310th century",
    notableUsers: "Byzantine soldiers, Mamluk warriors, Ottoman janissaries",
    description:
      "The earliest grenades were ceramic or glass containers filled with Greek fire, naphtha, or gunpowder compositions, thrown by hand at enemy fortifications and ships. Byzantine incendiary grenades terrorized Crusader forces. Chinese thunderclap bombs packed with gunpowder, shrapnel, and sometimes poison were documented as early as the 10th century. The name \u2018grenade\u2019 derives from the French word for pomegranate, which the weapon resembled. By the 17th century, specialized \u2018grenadier\u2019 companies were formed in European armies, composed of the tallest and strongest soldiers who could hurl the heavy iron devices.",
    significance:
      "The grenade is the oldest area-effect weapon in the gunpowder era. It introduced the concept of explosive fragmentation \u2014 killing through blast and shrapnel rather than direct impact \u2014 a principle that dominates modern warfare.",
  },
  warhammer: {
    type: "Bludgeon / Armor-Piercing",
    origin: "Europe",
    era: "14th\u201316th century",
    notableUsers: "Late medieval knights, men-at-arms",
    description:
      "The war hammer was the knight-killer of the late Middle Ages. As plate armor became increasingly effective against swords and axes, warriors turned to weapons that could defeat it through concentrated impact. The war hammer features a flat striking face on one side for delivering concussive blows through plate, and a sharp beak or spike on the reverse for punching through armor at the joints and weak points. Short-hafted versions served as sidearms; long-hafted variants like the bec de corbin and lucerne hammer were infantry polearms.",
    significance:
      "The war hammer is the ultimate expression of the medieval arms race. When swords could no longer cut through plate and axes could no longer cleave it, the war hammer simply ignored the problem \u2014 transferring kinetic energy directly through the armor to the body beneath.",
  },
  scimitar: {
    type: "Curved Sword",
    origin: "Middle East / Persia",
    era: "9th\u201318th century",
    notableUsers: "Saracen warriors, Mamluk cavalry, Ottoman sipahi",
    description:
      "The scimitar is a family of curved, single-edged swords associated with the Islamic world, encompassing the Persian shamshir, the Turkish kilij, and the Indian tulwar. The deeply curved blade excels at drawing cuts delivered from horseback. Damascus steel scimitars, forged from wootz crucible steel, were renowned for their distinctive watered patterns and exceptional sharpness. Crusader accounts describe scimitars cutting through European mail with ease. The kilij variant featured a widened, angled tip called a yelman that added devastating cutting power.",
    significance:
      "European Crusaders wrote home about scimitars with something close to awe. Damascus and wootz steel were centuries ahead of anything European smiths could produce. The science behind those distinctive watered patterns wasn't fully understood in the West until modern metallurgy caught up.",
  },
  katana: {
    type: "Curved Sword",
    origin: "Japan",
    era: "Kamakura period, c. 1185\u20131333 CE",
    notableUsers: "Samurai warrior class",
    description:
      "The katana is a curved, single-edged sword traditionally associated with the samurai. Forged through a meticulous process of folding, differential hardening, and clay tempering, the katana achieves a hard, razor-sharp edge supported by a flexible spine \u2014 a combination of contradictory properties that represents a pinnacle of metallurgical craft. The distinctive hamon (temper line) visible on the blade is both functional and aesthetic. The katana was more than a weapon; it was considered the soul of the samurai, embodying the warrior\u2019s honor, discipline, and social status.",
    significance:
      "The katana is perhaps the most culturally revered weapon in history. Its forging process, which can take weeks or months, embodies the Japanese concept of monozukuri \u2014 the art of making things with exceptional care and craftsmanship. No other weapon carries such spiritual weight.",
  },
  pollaxe: {
    type: "Polearm",
    origin: "Europe",
    era: "14th\u201316th century",
    notableUsers: "Dismounted knights, men-at-arms",
    description:
      "The pollaxe is a sophisticated combination weapon designed for armored foot combat. Mounted on a shaft of roughly 1.5\u20132 meters, it combines an axe blade, a hammer head, and a top spike in a single weapon, giving the wielder options against any type of defense. Pollaxe combat was the premier martial art of the 15th-century European nobility \u2014 fought in judicial duels, tournaments, and battlefield melees between dismounted knights. Fighting manuals by masters like Fiore dei Liberi and Le Jeu de la Hache detail dozens of techniques, guards, and counters.",
    significance:
      "The pollaxe was the Swiss Army knife of medieval combat \u2014 a single weapon that could cut, crush, thrust, and hook. Its associated martial tradition represents some of the most sophisticated armored combat techniques ever developed.",
  },
  bill: {
    type: "Polearm",
    origin: "England",
    era: "14th\u201316th century",
    notableUsers: "English infantry, town militias",
    description:
      "The bill evolved from the agricultural billhook \u2014 a curved chopping blade used for hedge-laying and woodland management. Military bills added a thrusting spike, a back hook for pulling riders from horses, and a reinforced cutting edge. The weapon was favored by English militia and town levies because the basic cutting motion was already familiar from agricultural work. Bills were cheap to produce, effective against both mounted and dismounted opponents, and required less training than a sword or poleaxe. English bill-armed infantry remained effective into the early 16th century.",
    significance:
      "The bill exemplifies how agricultural tools become weapons of war. Throughout history, peasant levies have adapted the tools they already knew into fighting implements. The bill did this more successfully than almost any other conversion.",
  },
  longbow: {
    type: "Ranged Weapon",
    origin: "Wales / England",
    era: "12th\u201316th century",
    notableUsers: "English and Welsh archers",
    description:
      "The English longbow is a simple self-bow of yew, typically 1.8\u20132 meters long, with draw weights of 100\u2013180 pounds. In the hands of trained archers, it could loose 10\u201312 arrows per minute at ranges exceeding 250 meters. The longbow dominated English warfare for three centuries: at Cr\u00e9cy (1346), Poitiers (1356), and Agincourt (1415), English longbowmen annihilated French armies many times their size. The weapon required years of training from childhood, and English law mandated archery practice on Sundays. Skeletons of longbowmen show deformed bones from the extreme physical demands.",
    significance:
      "The longbow proved that massed, disciplined ranged fire could destroy heavy cavalry charges \u2014 a lesson that would be relearned with every new projectile weapon from the crossbow to the machine gun. Agincourt remains the archetype of firepower defeating armor.",
  },
  arquebus: {
    type: "Matchlock Firearm",
    origin: "Europe",
    era: "15th\u201316th century",
    notableUsers: "Spanish conquistadors, Ottoman janissaries, Japanese ashigaru",
    description:
      "The arquebus was the first truly practical shoulder-fired gun. Using a matchlock mechanism \u2014 a slow-burning fuse clamped in a serpentine lever that was lowered into a flash pan \u2014 it could be aimed and fired by a single soldier with modest training. The weapon revolutionized warfare at the Battle of Pavia (1525), where Spanish arquebusiers annihilated French heavy cavalry. In Japan, the introduction of Portuguese arquebus technology in 1543 transformed samurai warfare within a generation. At the Battle of Nagashino (1575), Oda Nobunaga's massed arquebusiers destroyed Takeda cavalry charges behind field fortifications.",
    significance:
      "The arquebus ended the age of the armored knight. For the first time, a common soldier with weeks of training could reliably kill a warrior who had trained for a lifetime. The social implications were as revolutionary as the military ones.",
  },
  handcannon: {
    type: "Early Firearm",
    origin: "China / Europe",
    era: "13th\u201315th century",
    notableUsers: "Chinese infantry, early European gunners, Hussite warriors",
    description:
      "The hand cannon is the earliest true firearm \u2014 a simple metal tube loaded with gunpowder and a projectile, ignited through a touch hole. Chinese bronze hand cannons from the 13th century are the oldest surviving examples. In Europe, hand cannons appeared in the 14th century and saw extensive use in the Hussite Wars (1419\u20131434), where Jan \u017di\u017eka's forces used them from behind wagenburg (wagon fort) defenses to devastating effect. Early hand cannons were inaccurate and slow to reload, but their psychological impact \u2014 the thunder, the smoke, the invisible killing force \u2014 was immense.",
    significance:
      "The hand cannon is the missing link between the fire lance and the modern gun. It established the fundamental mechanism \u2014 explosion, barrel, projectile \u2014 that defines every firearm in existence. Everything that followed was refinement.",
  },
  cannon: {
    type: "Artillery",
    origin: "China / Europe",
    era: "14th century onward",
    notableUsers: "Ottoman Turks, European monarchs, Mughal emperors",
    description:
      "The cannon transformed warfare more completely than any weapon since the spear. Ottoman bombards breached the walls of Constantinople in 1453, ending the Byzantine Empire and the medieval concept of the impregnable fortress. Cannons could reduce in days fortifications that had withstood years of siege. The development of mobile field artillery in the 16th century added devastating direct-fire capability to the battlefield. Napoleon, himself an artillery officer, declared that \u2018God fights on the side with the best artillery.\u2019 By the 19th century, artillery caused more battlefield casualties than all other weapons combined.",
    significance:
      "The cannon made stone castles obsolete overnight, ended feudalism by destroying the nobility's defensive advantage, and established firepower as the dominant factor in warfare. The fall of Constantinople to Ottoman cannon marks the end of the medieval world.",
  },
  bardiche: {
    type: "Polearm / Long Axe",
    origin: "Eastern Europe / Russia",
    era: "14th\u201317th century",
    notableUsers: "Muscovite streltsy, Scandinavian infantry, Eastern European soldiers",
    description:
      "The bardiche is a long poleaxe distinguished by its wide, cleaver-like blade attached to the shaft at two points. Common across Eastern Europe and Russia, it was the signature weapon of the streltsy \u2014 the Muscovite musketeers who served as Russia\u2019s first standing army. Streltsy used the bardiche both as a melee weapon and as a rest for their heavy matchlock muskets, bracing the barrel on the blade\u2019s flat edge for steadier aim. The broad blade could deliver chopping blows heavy enough to crumple plate armor.",
    significance:
      "Where Western European polearms emphasized the thrusting point, the bardiche went the other direction: a huge cutting surface that could chop through anything. The fact that streltsy also used it as a musket rest tells you something about the practical ingenuity of soldiers making do during the gunpowder transition.",
  },
  halberd: {
    type: "Polearm",
    origin: "Switzerland / Central Europe",
    era: "14th\u201317th century",
    notableUsers: "Swiss mercenaries, German Landsknechte, palace guards",
    description:
      "The halberd combines an axe blade, a thrusting spike, and a rear hook on a shaft of roughly 1.8 meters. This triple-threat design made it extraordinarily versatile: the axe could cleave armor, the spike could thrust like a short spear, and the hook could pull riders from horseback or trip opponents. Swiss halberdiers won decisive victories at Morgarten (1315) and Sempach (1386) against Austrian heavy cavalry. The weapon remained in ceremonial use long after its battlefield retirement \u2014 the Swiss Guard at the Vatican still carries halberds today.",
    significance:
      "The halberd is the quintessential combination polearm \u2014 proof that versatility on the battlefield can be as valuable as specialization. Swiss halberdiers, alongside pikemen, created the most feared infantry in Renaissance Europe.",
  },
  repeatingcrossbow: {
    type: "Mechanical Ranged Weapon",
    origin: "China",
    era: "4th century BCE \u2013 19th century",
    notableUsers: "Chinese defenders, Zhuge Liang (attributed)",
    description:
      "The Zhuge Nu, or repeating crossbow, is a remarkable feat of ancient mechanical engineering. Using a lever-operated mechanism, it can span the bow, place a bolt, and fire in a single motion, achieving a rate of fire of roughly 10 bolts in 15 seconds. Attributed (apocryphally) to the Three Kingdoms strategist Zhuge Liang, the weapon traded individual bolt power for volume of fire. The bolts were often poisoned to compensate for their lower penetration. Repeating crossbows remained in active Chinese military service into the late 19th century \u2014 an astonishing span of over two millennia.",
    significance:
      "The repeating crossbow is history\u2019s first rapid-fire weapon. Its magazine-fed, lever-operated mechanism anticipated the principles behind 19th-century repeating firearms by over two thousand years. It prioritized rate of fire over individual lethality \u2014 a trade-off that defines modern automatic weapons.",
  },

  // ── Early Modern Age ─────────────────────────────────────
  rapier: {
    type: "Thrusting Sword",
    origin: "Spain / Italy",
    era: "15th\u201317th century",
    notableUsers: "Renaissance duelists, Spanish rodeleros, court gentlemen",
    description:
      "The rapier is a long, slender thrusting sword that emerged in the late 15th century as civilian self-defense replaced battlefield melee as the primary context for swordsmanship. With a blade of 100\u2013130 cm optimized for the thrust, the rapier demanded a fundamentally different fighting style from the medieval longsword \u2014 linear, precise, and scientific. Italian and Spanish fencing masters developed elaborate theoretical systems: Salvator Fabris, Ridolfo Capoferro, and Jer\u00f3nimo S\u00e1nchez de Carranza codified techniques that remain the foundation of modern fencing. The rapier\u2019s complex hilts \u2014 rings, bars, and swept guards \u2014 were both functional hand protection and status displays.",
    significance:
      "The rapier marks the transition from martial weapon to martial art. It drove the development of fencing as a codified, scientific discipline and established the thrust as the dominant sword technique \u2014 a paradigm that persists in modern Olympic fencing.",
  },
  cutlass: {
    type: "Short Sword",
    origin: "Europe",
    era: "17th\u201319th century",
    notableUsers: "Naval sailors, pirates, buccaneers",
    description:
      "The cutlass is a short, broad-bladed, slightly curved sword designed for the close-quarters chaos of naval combat. Its compact length made it maneuverable in the tight confines of a ship\u2019s deck and below-decks compartments, where a longer weapon would catch on rigging, bulkheads, and overhead beams. The heavy blade could chop through rope, wood, and bone with equal facility. A sturdy basket or cup guard protected the hand. The cutlass was standard naval issue from the 17th century into the 19th, and its association with piracy has made it one of the most iconic weapons in popular culture.",
    significance:
      "The cutlass is a weapon shaped entirely by its environment. Every design choice \u2014 the short blade, the heavy curve, the protective guard \u2014 reflects the unique demands of fighting on a wooden ship. It is a masterclass in purpose-driven design.",
  },
  musket: {
    type: "Smoothbore Firearm",
    origin: "Europe",
    era: "16th\u201319th century",
    notableUsers: "European line infantry, American revolutionaries, Napoleonic armies",
    description:
      "The musket was the dominant infantry weapon for over three centuries, from the Spanish tercios of the 1500s to the Napoleonic Wars of the early 1800s. A smoothbore, muzzle-loading long gun firing a lead ball, the musket was inaccurate beyond 50\u201375 meters but devastating in massed volley fire. Flintlock muskets could be loaded and fired 3\u20134 times per minute by trained soldiers. The \u2018Brown Bess\u2019 musket served the British Empire for over a century. Line infantry tactics \u2014 standing shoulder to shoulder, firing in synchronized volleys at close range \u2014 were a direct consequence of the musket\u2019s limitations.",
    significance:
      "The musket made the professional standing army possible. Because it required less skill than a longbow and less courage than a pike, it enabled mass conscription and standardized warfare. The musket is the weapon that built the modern nation-state.",
  },
  blunderbuss: {
    type: "Smoothbore Firearm",
    origin: "Europe",
    era: "17th\u201319th century",
    notableUsers: "Naval boarding parties, coachmen, colonial settlers",
    description:
      "The blunderbuss is a short, large-bore firearm with a distinctive flared muzzle, designed to fire a spreading charge of shot at close range. The flared barrel \u2014 contrary to popular belief \u2014 does not significantly spread the shot pattern, but it does make the weapon faster to load from a moving vehicle or rocking ship deck. Blunderbusses were favored by stagecoach guards, ship\u2019s officers, and anyone who needed to repel boarders or highwaymen at arm\u2019s length. Some were loaded with a terrifying mix of musket balls, nails, and scrap metal.",
    significance:
      "The blunderbuss is the ancestor of the modern shotgun. Its design philosophy \u2014 sacrificing range and precision for close-range lethality and ease of use \u2014 defines an entire category of firearms that remains relevant in the 21st century.",
  },
  fieldgun: {
    type: "Artillery",
    origin: "Europe",
    era: "16th\u201319th century",
    notableUsers: "Napoleonic grand batteries, Gustavus Adolphus' Swedish army",
    description:
      "The field gun is mobile artillery designed to accompany armies on the march and provide direct fire support on the battlefield. Gustavus Adolphus of Sweden pioneered the use of light, horse-drawn field guns in the Thirty Years\u2019 War (1618\u20131648), integrating them directly into infantry and cavalry formations. Napoleon elevated field artillery to an art form, massing hundreds of guns into grand batteries that could obliterate enemy formations at ranges of 500\u20131,200 meters. The combination of solid shot, canister (anti-personnel), and explosive shell gave field guns unmatched versatility.",
    significance:
      "The field gun transformed artillery from a siege weapon into a battlefield weapon. Napoleon\u2019s dictum that \u2018artillery decides everything\u2019 reflected a new reality: by the 19th century, gunpowder artillery was the decisive arm of war, surpassing both infantry and cavalry.",
  },

  // ── Modern Age ───────────────────────────────────────────
  singleshotpistol: {
    type: "Handgun",
    origin: "Europe",
    era: "16th\u201319th century",
    notableUsers: "Cavalry officers, duelists, naval officers",
    description:
      "The single-shot pistol evolved from the wheellock and flintlock mechanisms of the 16th and 17th centuries. A compact, one-handed firearm that could be drawn and fired at close range, it transformed cavalry tactics and personal combat. Cavalrymen carried multiple loaded pistols into battle, firing them in sequence before closing with the sword. The pistol also became the weapon of the formal duel \u2014 the ritualized settling of disputes among the European aristocracy. Alexander Hamilton died from a pistol ball fired by Aaron Burr in 1804.",
    significance:
      "The single-shot pistol introduced the concept of the personal firearm \u2014 a weapon that could be concealed, carried at all times, and used with one hand. It democratized lethal force in a way that swords, which required training and strength, never could.",
  },
  multishotpistol: {
    type: "Revolver / Repeating Handgun",
    origin: "United States / Europe",
    era: "19th century",
    notableUsers: "American frontiersmen, lawmen, soldiers of the Civil War",
    description:
      "The multi-shot pistol \u2014 most famously the revolver \u2014 solved the single-shot pistol\u2019s fatal limitation: the inability to fire more than once without reloading. Samuel Colt\u2019s 1836 Patent Arms revolver, with its rotating cylinder holding five or six charges, gave a single person the firepower of half a squad. The Colt Navy, Colt Army, and Smith & Wesson revolvers became the defining weapons of the American frontier. \u2018God created men; Colonel Colt made them equal\u2019 became a popular saying. The revolver remains in service worldwide nearly 200 years after its invention.",
    significance:
      "The revolver multiplied individual firepower five- or sixfold with a single mechanical innovation. It made the lone gunfighter possible and established the handgun as the primary self-defense weapon of the modern era.",
  },
  semiautopistol: {
    type: "Semi-Automatic Handgun",
    origin: "Europe",
    era: "Late 19th century \u2013 present",
    notableUsers: "Military officers, police forces, civilians worldwide",
    description:
      "The semi-automatic pistol uses the energy of each fired cartridge to cycle the action, eject the spent case, and chamber a fresh round from a detachable magazine. Hugo Borchardt\u2019s C-93 (1893) and Georg Luger\u2019s Parabellum (1900) established the form. John Browning\u2019s M1911, adopted by the US military in 1911 and chambered in the powerful .45 ACP, served through two World Wars, Korea, and Vietnam. Modern polymer-framed designs like the Glock 17 (1982) dominate military and law enforcement use today, offering 15\u201318 rounds of 9mm ammunition in a lightweight, reliable package.",
    significance:
      "The semi-automatic pistol is the most widely used military and law enforcement sidearm in the world. Its magazine-fed design allows rapid reloading and higher ammunition capacity than the revolver, making it the standard personal weapon of the modern era.",
  },
  machinepistol: {
    type: "Automatic Handgun / Submachine Gun",
    origin: "Europe",
    era: "20th century \u2013 present",
    notableUsers: "Special forces, security details, vehicle crews",
    description:
      "The machine pistol is a compact, fully automatic firearm that bridges the gap between the pistol and the submachine gun. Capable of firing 900\u20131,200 rounds per minute, weapons like the Glock 18, Beretta 93R, and Stechkin APS sacrifice accuracy for overwhelming close-range firepower. The Mauser C96 with its selector switch was among the earliest, seeing action with Winston Churchill at the Battle of Omdurman (1898). Modern machine pistols serve primarily in personal defense roles where concealment and compactness matter more than precision.",
    significance:
      "The machine pistol answers the question 'what if we made a handgun fully automatic?' The answer turns out to be: uncontrollable recoil, a magazine emptied in two seconds, and accuracy measured in hopes and prayers. It creates as many problems as it solves, which is why most armies use them sparingly.",
  },
  personaldefenseweapon: {
    type: "Compact Automatic Weapon",
    origin: "Belgium / Germany",
    era: "1990s \u2013 present",
    notableUsers: "NATO vehicle crews, rear-echelon troops, special forces, security teams",
    description:
      "The Personal Defense Weapon (PDW) is a relatively new category, designed to replace the pistol for military personnel who need more firepower than a handgun but cannot carry a full rifle. FN Herstal\u2019s P90 (1990) and Heckler & Koch\u2019s MP7 (2001) defined the category, firing small-caliber, high-velocity cartridges (5.7x28mm and 4.6x30mm) capable of penetrating body armor at 200 meters. The P90\u2019s unconventional bullpup layout and top-mounted 50-round magazine make it immediately recognizable. PDWs prioritize armor penetration, low recoil, and compact size.",
    significance:
      "The PDW exists because body armor made pistols useless but most troops can't carry rifles. It's a weapon born from a very specific gap in the arsenal. The arms race between personal armor and the cartridges designed to punch through it keeps producing new answers, and the PDW is one of them.",
  },
  breakshotgun: {
    type: "Shotgun",
    origin: "Europe",
    era: "17th century \u2013 present",
    notableUsers: "Hunters, sportsmen, rural landowners",
    description:
      "The break-action shotgun \u2014 single-barrel or double-barrel, opened at a hinge for loading \u2014 is the simplest and oldest repeating shotgun design. Side-by-side and over-under configurations dominate sporting use. The double-barrel shotgun has been a fixture of rural life for centuries: defense, hunting, and pest control. Its simplicity means extreme reliability \u2014 there is almost nothing to malfunction. Break-action shotguns remain the most common firearms in many parts of the world, valued for their versatility and ease of maintenance.",
    significance:
      "There is almost nothing to break in a break-action shotgun, which is why it's found on every inhabited continent. Farmers in rural England, ranchers in Australia, and villagers in sub-Saharan Africa all rely on essentially the same design. No other firearm has spread so widely.",
  },
  levershotgun: {
    type: "Shotgun",
    origin: "United States",
    era: "19th century",
    notableUsers: "American frontiersmen, lawmen, stagecoach guards",
    description:
      "The lever-action shotgun applies the same cycling mechanism as the iconic Winchester rifle to a smoothbore platform. The Winchester Model 1887, designed by John Browning, was the first successful repeating shotgun. A lever behind the trigger guard cycles the action, ejecting the spent shell and chambering a new one. While eventually superseded by pump-action designs, the lever shotgun earned its place in American frontier history. Its fast cycling and reliable action made it a favorite of lawmen and express guards in the late 19th century.",
    significance:
      "The lever-action shotgun proved that repeating mechanisms could work with shotgun shells, paving the way for pump-action and semi-automatic shotguns. It bridges the gap between single-shot simplicity and modern repeating capability.",
  },
  pumpshotgun: {
    type: "Shotgun",
    origin: "United States",
    era: "Late 19th century \u2013 present",
    notableUsers: "Military, police, hunters worldwide",
    description:
      "The pump-action shotgun is cycled by sliding the forend rearward and forward, ejecting the spent shell and chambering a fresh one. John Browning\u2019s Winchester Model 1897 was the first commercially successful pump shotgun and saw extensive military service in World War I, where its devastating effect in trench clearing earned it the name \u2018trench gun.\u2019 Germany formally protested its use as inhumane \u2014 an objection the United States rejected. The Remington 870 (1950) and Mossberg 500 (1961) remain two of the most produced firearms in history, with combined production exceeding 20 million units.",
    significance:
      "The pump-action shotgun is the most versatile firearm ever designed. With a change of ammunition \u2014 birdshot, buckshot, slugs, breaching rounds, less-lethal \u2014 it serves as a hunting arm, a combat weapon, a door-breaching tool, and a riot control device.",
  },
  combatshotgun: {
    type: "Semi-Automatic / Automatic Shotgun",
    origin: "United States / Italy",
    era: "20th century \u2013 present",
    notableUsers: "US military, special operations forces, law enforcement tactical units",
    description:
      "The combat shotgun is a semi-automatic or selective-fire shotgun optimized for military use. The Browning Auto-5 (1902) pioneered semi-automatic shotgun operation. Modern combat shotguns like the Benelli M4 (adopted by the US Marine Corps as the M1014) use gas-operated or inertia-driven actions to cycle reliably with a wide range of ammunition. The USAS-12 and AA-12 pushed the concept further with fully automatic fire and drum magazines. Combat shotguns excel in urban warfare, vehicle checkpoints, and breaching operations.",
    significance:
      "The combat shotgun took a hunting weapon and gave it ghost ring sights, picatinny rails, and magazine-fed operation. Old weapon categories don't die; they get adapted. The shotgun has been 'obsolete' for over a century and keeps finding new jobs.",
  },
  minierifle: {
    type: "Rifled Musket",
    origin: "France / Europe",
    era: "Mid-19th century",
    notableUsers: "Civil War soldiers (Union and Confederate), Crimean War combatants",
    description:
      "The Mini\u00e9 rifle is a muzzle-loading rifled musket that fires the revolutionary Mini\u00e9 ball \u2014 a conical bullet with a hollow base that expands upon firing to grip the barrel\u2019s rifling grooves. This solved the centuries-old problem of making rifled weapons fast to load: the undersized bullet dropped easily down the barrel, then expanded to engage the rifling when fired. The result was a weapon with the loading speed of a smoothbore musket and the accuracy of a rifle \u2014 effective to 500 meters. The Mini\u00e9 rifle made the American Civil War the first truly modern war in terms of infantry casualties.",
    significance:
      "The Mini\u00e9 rifle made Napoleonic tactics suicidal. Commanders who sent infantry in massed formations against rifled weapons suffered catastrophic casualties. The weapon forced the development of trenches, dispersed formations, and the fundamental rethinking of infantry tactics that defines modern warfare.",
  },
  semiautorifle: {
    type: "Self-Loading Rifle",
    origin: "United States / Europe",
    era: "Early 20th century \u2013 present",
    notableUsers: "US forces (M1 Garand), Soviet forces (SVT-40), modern militaries",
    description:
      "The semi-automatic rifle fires one round per trigger pull and automatically cycles the action to chamber the next round. The M1 Garand, adopted by the US Army in 1936, was the first standard-issue semi-automatic military rifle. General George S. Patton called it \u2018the greatest battle implement ever devised.\u2019 The Garand\u2019s eight-round en-bloc clip gave American infantrymen a significant firepower advantage over Axis soldiers still carrying bolt-action rifles in World War II. Modern semi-automatic rifles like the AR-15 platform dominate both military and civilian markets.",
    significance:
      "The semi-automatic rifle doubled the practical rate of fire of infantry without sacrificing accuracy. It represented a fundamental shift: the individual soldier became a more potent combat unit, requiring fewer troops to hold the same frontage.",
  },
  assaultrifle: {
    type: "Selective-Fire Rifle",
    origin: "Germany / Soviet Union",
    era: "1940s \u2013 present",
    notableUsers: "Virtually every modern military force",
    description:
      "The assault rifle is a selective-fire weapon chambered in an intermediate cartridge, capable of both semi-automatic and fully automatic fire. The German StG 44 (Sturmgewehr 44) of 1944 established the concept. The Soviet AK-47 (1947), designed by Mikhail Kalashnikov, became the most produced firearm in history \u2014 over 100 million manufactured. The American M16/M4 family, firing the 5.56x45mm NATO cartridge, equips US and allied forces. The assault rifle combines the range of a rifle with the sustained fire capability of a submachine gun in a single, versatile platform.",
    significance:
      "The assault rifle is the defining weapon of modern warfare. The AK-47 alone has armed more combatants than any other weapon in history. Its intermediate cartridge concept \u2014 more powerful than a pistol round, lighter than a full rifle round \u2014 was the key insight that made the modern infantry soldier possible.",
  },
  antimaterielrifle: {
    type: "Heavy Rifle",
    origin: "Germany / United States",
    era: "World War I \u2013 present",
    notableUsers: "Military snipers and EOD teams worldwide",
    description:
      "The anti-materiel rifle is a large-caliber, long-range precision rifle designed to destroy equipment, vehicles, and fortifications rather than personnel (though it is devastatingly effective against both). The Mauser 1918 T-Gewehr, firing a 13.2mm round, was developed to penetrate the armor of World War I tanks. The modern Barrett M82, chambered in .50 BMG (12.7x99mm), can engage targets at ranges exceeding 1,800 meters and penetrate light armored vehicles, aircraft on the ground, radar installations, and improvised explosive devices. The weapon\u2019s massive recoil is managed through muzzle brakes and semi-automatic recoil-operated actions.",
    significance:
      "One soldier, one rifle, one round, and a radar installation or parked helicopter ceases to exist from nearly two kilometers away. The anti-materiel rifle is the outer limit of what a single person can carry and shoot. There is nowhere left to go from here without wheels.",
  },
};
