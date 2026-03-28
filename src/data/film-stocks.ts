export type FilmType =
  | "colour_negative"
  | "colour_reversal"
  | "bw_negative"
  | "bw_reversal"
  | "specialty";
export type Grain = "ultra_fine" | "fine" | "medium" | "coarse";
export type Format = "35mm" | "120" | "4x5" | "8x10";
export type Status = "available" | "discontinued" | "limited";

export interface FilmStock {
  id: string;
  slug: string;
  name: string;
  manufacturer: string;
  type: FilmType;
  iso: number;
  formats: Format[];
  grain: Grain;
  status: Status;
  description: string;
  character: string;
  bestFor: string[];
  reciprocityData?: { measuredSeconds: number; adjustedSeconds: number }[];
}

export const filmStocks: FilmStock[] = [
  // === KODAK ===
  {
    id: "kodak-portra-160",
    slug: "kodak-portra-160",
    name: "Portra 160",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 160,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "Kodak's finest-grain colour negative film. Portra 160 delivers exceptionally smooth skin tones with neutral-to-warm colour rendition. The low speed makes it ideal for controlled lighting situations.",
    character:
      "Ultra-smooth, natural skin tones, subtle warm shift, excellent shadow detail. Scans beautifully with minimal correction needed.",
    bestFor: [
      "Portrait photography",
      "Fashion",
      "Studio work",
      "Wedding photography",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 20 },
      { measuredSeconds: 100, adjustedSeconds: 300 },
    ],
  },
  {
    id: "kodak-portra-400",
    slug: "kodak-portra-400",
    name: "Portra 400",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 400,
    formats: ["35mm", "120", "4x5", "8x10"],
    grain: "fine",
    status: "available",
    description:
      "The most versatile professional colour negative film available. Portra 400 combines fine grain with exceptional exposure latitude — it handles overexposure gracefully and produces consistently pleasing results across a wide range of conditions.",
    character:
      "Warm pastel palette, forgiving exposure latitude (can be shot 200-1600), organic grain structure. The gold standard for portrait and travel work.",
    bestFor: [
      "Portraits",
      "Travel",
      "Street photography",
      "Weddings",
      "Everyday carry",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 20 },
      { measuredSeconds: 100, adjustedSeconds: 300 },
    ],
  },
  {
    id: "kodak-portra-800",
    slug: "kodak-portra-800",
    name: "Portra 800",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 800,
    formats: ["35mm", "120"],
    grain: "medium",
    status: "available",
    description:
      "The fastest professional colour negative film. Portra 800 brings the Portra colour palette into low-light situations with noticeably more grain than its siblings, giving images a distinctive textural quality.",
    character:
      "Warm tones with visible but pleasing grain, excellent in mixed/low light. Slight magenta shift in shadows. Pushes well to 1600.",
    bestFor: [
      "Low light",
      "Indoor events",
      "Concert photography",
      "Golden hour",
    ],
  },
  {
    id: "kodak-ektar-100",
    slug: "kodak-ektar-100",
    name: "Ektar 100",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 100,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "The world's finest-grain colour negative film. Ektar 100 delivers vivid, saturated colours with exceptional sharpness. Unlike the subtle Portra palette, Ektar punches hard — blues are electric, reds pop, and greens glow.",
    character:
      "High saturation, vivid colours, ultra-fine grain, high contrast. Can produce unflattering skin tones if not carefully exposed.",
    bestFor: [
      "Landscape",
      "Architecture",
      "Product photography",
      "Nature",
      "Travel scenics",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 15 },
      { measuredSeconds: 100, adjustedSeconds: 200 },
    ],
  },
  {
    id: "kodak-gold-200",
    slug: "kodak-gold-200",
    name: "Gold 200",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 200,
    formats: ["35mm"],
    grain: "medium",
    status: "available",
    description:
      "Kodak's classic consumer film, recently reformulated and enjoying a massive resurgence. Gold 200 delivers the warm, nostalgic look that many associate with \"the film look\" — slightly warm, slightly soft, entirely charming.",
    character:
      "Warm golden tones, visible but friendly grain, nostalgic rendering. Handles daylight beautifully. The \"Instagram film\" that started it all.",
    bestFor: [
      "Everyday photography",
      "Travel",
      "Sunny days",
      "Casual portraits",
    ],
  },
  {
    id: "kodak-colorplus-200",
    slug: "kodak-colorplus-200",
    name: "ColorPlus 200",
    manufacturer: "Kodak",
    type: "colour_negative",
    iso: 200,
    formats: ["35mm"],
    grain: "medium",
    status: "available",
    description:
      "An affordable entry point into colour film photography. ColorPlus 200 shares DNA with Gold 200 but at a lower price point. Slightly cooler than Gold, with decent grain and reliable results in daylight.",
    character:
      "Neutral-to-warm, budget-friendly, predictable results. Slightly less saturated than Gold but very capable.",
    bestFor: [
      "Beginners",
      "Everyday photography",
      "Bulk shooting",
      "Learning exposure",
    ],
  },
  {
    id: "kodak-tri-x-400",
    slug: "kodak-tri-x-400",
    name: "Tri-X 400",
    manufacturer: "Kodak",
    type: "bw_negative",
    iso: 400,
    formats: ["35mm", "120", "4x5"],
    grain: "medium",
    status: "available",
    description:
      "The legendary black and white film. Tri-X has been in production since 1954 and has defined the look of photojournalism, street photography, and fine art for generations. Its distinctive grain structure and tonal range are instantly recognisable.",
    character:
      "Classic grain, rich midtones, punchy contrast. Pushes beautifully to 800/1600/3200. The most versatile B&W film ever made.",
    bestFor: [
      "Street photography",
      "Photojournalism",
      "Portraits",
      "Any situation",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 15 },
      { measuredSeconds: 100, adjustedSeconds: 250 },
    ],
  },
  {
    id: "kodak-tmax-100",
    slug: "kodak-tmax-100",
    name: "T-Max 100",
    manufacturer: "Kodak",
    type: "bw_negative",
    iso: 100,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "Kodak's finest-grain black and white film using T-Grain technology. T-Max 100 delivers exceptional sharpness and a smooth tonal range from deep blacks to clean highlights. More clinical than Tri-X, more detailed than anything else.",
    character:
      "Ultra-fine grain, long tonal scale, lower contrast than Tri-X. Technically excellent, sometimes called \"too perfect\" by Tri-X loyalists.",
    bestFor: [
      "Fine art",
      "Architecture",
      "Studio portraits",
      "Landscape",
      "Large prints",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 12 },
      { measuredSeconds: 100, adjustedSeconds: 170 },
    ],
  },
  {
    id: "kodak-tmax-400",
    slug: "kodak-tmax-400",
    name: "T-Max 400",
    manufacturer: "Kodak",
    type: "bw_negative",
    iso: 400,
    formats: ["35mm", "120", "4x5"],
    grain: "fine",
    status: "available",
    description:
      "The high-speed sibling to T-Max 100. Delivers remarkably fine grain for a 400-speed film, with the smooth tonal gradation of T-Grain technology. Sharper and finer than Tri-X at the same speed, but with a different character.",
    character:
      "Fine grain for 400 speed, smooth tonality, moderate contrast. Less \"character\" than Tri-X but technically superior resolution.",
    bestFor: [
      "General purpose B&W",
      "Low light",
      "Photojournalism",
      "Portrait",
    ],
  },

  // === FUJIFILM ===
  {
    id: "fujifilm-superia-400",
    slug: "fujifilm-superia-400",
    name: "Superia X-TRA 400",
    manufacturer: "Fujifilm",
    type: "colour_negative",
    iso: 400,
    formats: ["35mm"],
    grain: "medium",
    status: "available",
    description:
      "Fujifilm's versatile consumer colour film. Superia 400 tends cooler and greener than Kodak's warm palette, giving it a distinct look that many photographers actively seek out. Works well in a wide range of lighting conditions.",
    character:
      "Cool-neutral tones, slight green shift, visible grain. Underexposure produces moody, blue-shifted results that have become trendy.",
    bestFor: [
      "Everyday photography",
      "Overcast days",
      "Street photography",
      "Travel",
    ],
  },
  {
    id: "fujifilm-c200",
    slug: "fujifilm-c200",
    name: "C200",
    manufacturer: "Fujifilm",
    type: "colour_negative",
    iso: 200,
    formats: ["35mm"],
    grain: "medium",
    status: "limited",
    description:
      "A budget-friendly daylight film from Fujifilm. C200 delivers clean, slightly cool colours with moderate grain. Increasingly hard to find as Fujifilm has scaled back consumer film production, making remaining stock valuable.",
    character:
      "Clean, slightly cool palette, moderate grain. Simple and predictable. Becoming a collector's item.",
    bestFor: ["Daylight photography", "Beginners", "Budget shooting"],
  },
  {
    id: "fujifilm-provia-100f",
    slug: "fujifilm-provia-100f",
    name: "Provia 100F",
    manufacturer: "Fujifilm",
    type: "colour_reversal",
    iso: 100,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "Fujifilm's professional slide film delivers stunning transparency results with natural colour reproduction. Provia 100F is the most versatile slide film still in production — balanced, neutral, and incredibly sharp.",
    character:
      "Neutral colour balance, ultra-fine grain, high sharpness. Slightly less saturated than Velvia but more realistic. Gorgeous on a lightbox.",
    bestFor: [
      "Landscape",
      "Travel",
      "Nature",
      "Projection",
      "Fine art reproduction",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 4, adjustedSeconds: 5 },
      { measuredSeconds: 16, adjustedSeconds: 25 },
      { measuredSeconds: 64, adjustedSeconds: 130 },
      { measuredSeconds: 128, adjustedSeconds: 330 },
    ],
  },
  {
    id: "fujifilm-velvia-50",
    slug: "fujifilm-velvia-50",
    name: "Velvia 50",
    manufacturer: "Fujifilm",
    type: "colour_reversal",
    iso: 50,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "The most legendary landscape film ever made. Velvia 50 is famous for its hyper-saturated colours, deep blacks, and vibrant greens. Slide film demands precise exposure — there's almost no latitude — but the results on a lightbox are breathtaking.",
    character:
      "Extreme saturation, vivid greens and reds, deep contrast. Unforgiving exposure latitude (half-stop tolerance). Not for portraits.",
    bestFor: [
      "Landscape",
      "Nature",
      "Macro",
      "Fine art",
      "Projection",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 4, adjustedSeconds: 6 },
      { measuredSeconds: 16, adjustedSeconds: 32 },
      { measuredSeconds: 64, adjustedSeconds: 180 },
    ],
  },
  {
    id: "fujifilm-velvia-100",
    slug: "fujifilm-velvia-100",
    name: "Velvia 100",
    manufacturer: "Fujifilm",
    type: "colour_reversal",
    iso: 100,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "A faster alternative to Velvia 50 with slightly less extreme saturation. Velvia 100 is more usable in varied lighting while still delivering the vivid Velvia look. Better reciprocity characteristics for long exposures.",
    character:
      "Vibrant but slightly more restrained than Velvia 50. Better reciprocity behaviour. Still very saturated by any standard.",
    bestFor: ["Landscape", "Nature", "Travel", "Architecture"],
  },
  {
    id: "fujifilm-acros-ii-100",
    slug: "fujifilm-acros-ii-100",
    name: "Neopan Acros II 100",
    manufacturer: "Fujifilm",
    type: "bw_negative",
    iso: 100,
    formats: ["35mm", "120"],
    grain: "ultra_fine",
    status: "available",
    description:
      "Fujifilm's premium black and white film, relaunched in 2019. Acros II delivers exceptionally fine grain with a distinctive tonal character — smooth highlights, rich shadows, and excellent reciprocity characteristics that make it ideal for long exposures.",
    character:
      "Ultra-fine grain, smooth tonality, superb reciprocity. Slightly different look to Kodak T-Max — warmer, less clinical.",
    bestFor: [
      "Long exposures",
      "Architecture",
      "Fine art",
      "Night photography",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 4, adjustedSeconds: 4 },
      { measuredSeconds: 16, adjustedSeconds: 18 },
      { measuredSeconds: 64, adjustedSeconds: 80 },
      { measuredSeconds: 120, adjustedSeconds: 160 },
      { measuredSeconds: 240, adjustedSeconds: 360 },
    ],
  },

  // === ILFORD ===
  {
    id: "ilford-hp5-plus",
    slug: "ilford-hp5-plus",
    name: "HP5 Plus",
    manufacturer: "Ilford",
    type: "bw_negative",
    iso: 400,
    formats: ["35mm", "120", "4x5", "8x10"],
    grain: "medium",
    status: "available",
    description:
      "Ilford's high-speed workhorse and Tri-X's eternal rival. HP5 Plus offers a slightly softer, more forgiving character than Tri-X with excellent push processing latitude. Many darkroom printers prefer HP5 for its gentler highlight rolloff.",
    character:
      "Classic grain, slightly lower contrast than Tri-X, gentle highlights. Pushes well to 1600/3200. Excellent in Rodinal or ID-11.",
    bestFor: [
      "Street photography",
      "Photojournalism",
      "General purpose B&W",
      "Darkroom printing",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 17 },
      { measuredSeconds: 100, adjustedSeconds: 350 },
    ],
  },
  {
    id: "ilford-fp4-plus",
    slug: "ilford-fp4-plus",
    name: "FP4 Plus",
    manufacturer: "Ilford",
    type: "bw_negative",
    iso: 125,
    formats: ["35mm", "120", "4x5", "8x10"],
    grain: "fine",
    status: "available",
    description:
      "A medium-speed classic with a devoted following. FP4 Plus sits between the ultra-fine T-Max 100 and the grittier HP5 Plus, offering a beautiful balance of grain, tonality, and sharpness that's been refined over decades.",
    character:
      "Fine grain, long tonal scale, classic Ilford look. Responds beautifully to careful development. A favourite for zone system work.",
    bestFor: [
      "Landscape",
      "Portrait",
      "Architecture",
      "Fine art",
      "Zone system",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 17 },
      { measuredSeconds: 100, adjustedSeconds: 350 },
    ],
  },
  {
    id: "ilford-delta-100",
    slug: "ilford-delta-100",
    name: "Delta 100",
    manufacturer: "Ilford",
    type: "bw_negative",
    iso: 100,
    formats: ["35mm", "120", "4x5"],
    grain: "ultra_fine",
    status: "available",
    description:
      "Ilford's finest-grain film using Core-Shell crystal technology. Delta 100 competes directly with Kodak T-Max 100 and Fujifilm Acros II in the ultra-fine-grain space, with its own distinctive tonal character.",
    character:
      "Ultra-fine grain, excellent sharpness, clean modern look. Slightly different rendering to T-Max 100 — some find it warmer.",
    bestFor: [
      "Fine art",
      "Architecture",
      "Studio work",
      "Large prints",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 13 },
      { measuredSeconds: 100, adjustedSeconds: 200 },
    ],
  },
  {
    id: "ilford-delta-3200",
    slug: "ilford-delta-3200",
    name: "Delta 3200",
    manufacturer: "Ilford",
    type: "bw_negative",
    iso: 3200,
    formats: ["35mm", "120"],
    grain: "coarse",
    status: "available",
    description:
      "The fastest black and white film available. Delta 3200 (true ISO closer to 1000, designed to be pushed) delivers dramatic, grainy images in near-darkness. The grain isn't a flaw — it's the whole point.",
    character:
      "Pronounced grain, high contrast, dramatic look. Best shot at 1600-6400 and push-processed. Made for available-light extremes.",
    bestFor: [
      "Low light",
      "Concerts",
      "Night photography",
      "Atmospheric work",
    ],
  },
  {
    id: "ilford-xp2-super",
    slug: "ilford-xp2-super",
    name: "XP2 Super",
    manufacturer: "Ilford",
    type: "bw_negative",
    iso: 400,
    formats: ["35mm", "120"],
    grain: "fine",
    status: "available",
    description:
      "A black and white film processed in standard C-41 colour chemistry — meaning any high street lab can develop it. XP2 Super delivers surprisingly fine grain with a distinctive chromogenic look and extraordinary exposure latitude.",
    character:
      "Very fine grain for 400 speed, smooth tonality, C-41 process. Can be shot 50-800 on a single roll. Unique look — not quite traditional B&W.",
    bestFor: [
      "Travel",
      "When you can't develop B&W",
      "Variable lighting",
      "Mixed ISO shooting",
    ],
  },

  // === CINESTILL ===
  {
    id: "cinestill-800t",
    slug: "cinestill-800t",
    name: "800T",
    manufacturer: "CineStill",
    type: "colour_negative",
    iso: 800,
    formats: ["35mm", "120"],
    grain: "medium",
    status: "available",
    description:
      "Cinema film (Kodak Vision3 500T) with the remjet layer removed for standard C-41 processing. CineStill 800T has become an icon of the current film renaissance — its halation (red glow around highlights) is instantly recognisable.",
    character:
      "Tungsten-balanced, red halation around point lights, cinematic colour palette. Cool tones under tungsten, cross-processed look in daylight.",
    bestFor: [
      "Night photography",
      "Neon signs",
      "Urban night scenes",
      "Cinematic look",
    ],
  },
  {
    id: "cinestill-400d",
    slug: "cinestill-400d",
    name: "400D",
    manufacturer: "CineStill",
    type: "colour_negative",
    iso: 400,
    formats: ["35mm", "120"],
    grain: "fine",
    status: "available",
    description:
      "The daylight sibling to 800T, based on Kodak Vision3 250D cinema stock. CineStill 400D delivers a clean, slightly desaturated look with subtle halation — less dramatic than 800T but beautifully cinematic in daylight.",
    character:
      "Daylight-balanced, subtle halation, muted pastel palette. Clean and cinematic. Less dramatic halation than 800T.",
    bestFor: [
      "Daylight cinematics",
      "Portraits",
      "Travel",
      "Street photography",
    ],
  },

  // === SPECIALTY / INDIE ===
  {
    id: "harman-phoenix-200",
    slug: "harman-phoenix-200",
    name: "Phoenix 200",
    manufacturer: "Harman",
    type: "colour_negative",
    iso: 200,
    formats: ["35mm"],
    grain: "coarse",
    status: "available",
    description:
      "The first new colour negative film in over a decade. Phoenix 200 from Harman (Ilford's parent company) launched in 2024 with a deliberately lo-fi, experimental aesthetic. Heavy grain, saturated colours, and unpredictable results — it's not trying to be Portra.",
    character:
      "Heavy grain, saturated colours, experimental look. Results vary wildly. Polarising — some love the raw aesthetic, others find it unusable.",
    bestFor: [
      "Experimental photography",
      "Lomography aesthetic",
      "Art projects",
      "Texture-lovers",
    ],
  },
  {
    id: "fomapan-100",
    slug: "fomapan-100",
    name: "Fomapan 100",
    manufacturer: "Foma",
    type: "bw_negative",
    iso: 100,
    formats: ["35mm", "120", "4x5", "8x10"],
    grain: "fine",
    status: "available",
    description:
      "Czech-made black and white film offering excellent value. Fomapan 100 has an old-school, slightly retro character with lower contrast than modern T-Grain films. A favourite among budget-conscious darkroom workers and large format shooters.",
    character:
      "Classic cubic grain, slightly lower contrast, vintage look. Excellent value. Available in every format including 8x10 sheets.",
    bestFor: [
      "Budget B&W",
      "Large format",
      "Alternative processes",
      "Darkroom learning",
    ],
    reciprocityData: [
      { measuredSeconds: 1, adjustedSeconds: 1 },
      { measuredSeconds: 10, adjustedSeconds: 18 },
      { measuredSeconds: 100, adjustedSeconds: 400 },
    ],
  },
  {
    id: "fomapan-400",
    slug: "fomapan-400",
    name: "Fomapan 400",
    manufacturer: "Foma",
    type: "bw_negative",
    iso: 400,
    formats: ["35mm", "120"],
    grain: "coarse",
    status: "available",
    description:
      "The high-speed Fomapan. Noticeably grainier than HP5 or Tri-X at the same speed, but that grain has character. Fomapan 400 is the cheapest 400-speed B&W film on the market and a great choice for experimentation.",
    character:
      "Pronounced grain, moderate contrast, lo-fi character. Very affordable. Some love it, some find it too grainy.",
    bestFor: [
      "Budget shooting",
      "Experimentation",
      "Lo-fi aesthetic",
      "Students",
    ],
  },
];

export const manufacturers = [
  ...new Set(filmStocks.map((s) => s.manufacturer)),
].sort();

export const filmTypes: { value: FilmType; label: string }[] = [
  { value: "colour_negative", label: "Colour Negative" },
  { value: "colour_reversal", label: "Slide / Reversal" },
  { value: "bw_negative", label: "Black & White" },
  { value: "specialty", label: "Specialty" },
];

export function getFilmStock(slug: string): FilmStock | undefined {
  return filmStocks.find((s) => s.slug === slug);
}

export function getFilmStocksByManufacturer(manufacturer: string): FilmStock[] {
  return filmStocks.filter((s) => s.manufacturer === manufacturer);
}

export function getFilmStocksByType(type: FilmType): FilmStock[] {
  return filmStocks.filter((s) => s.type === type);
}
