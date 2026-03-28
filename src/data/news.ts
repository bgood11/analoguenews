export type ContentType =
  | "news"
  | "review"
  | "guide"
  | "historical"
  | "lab_spotlight";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  contentType: ContentType;
  sourceName?: string;
  sourceUrl?: string;
  publishedDate: string;
  categories: string[];
  tags: string[];
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: "n001",
    slug: "kodak-announces-tri-x-120-production-increase",
    title: "Kodak Increases Tri-X 120 Production After Sustained Shortage",
    summary:
      "Kodak Alaris confirms additional Tri-X 400 120-format production runs to address chronic stock shortages across retailers. Availability expected to improve by Q3 2026.",
    body: `After months of sporadic availability that frustrated medium format shooters worldwide, Kodak Alaris has confirmed it is increasing production of Tri-X 400 in 120 format.

The shortage, which began in late 2025, saw prices on the secondary market spike to double retail. Several major retailers — including B&H Photo, Analogue Wonderland, and Freestyle Photographic — reported extended back-order periods.

"We understand the frustration," a Kodak Alaris spokesperson said. "Tri-X 120 is one of our most beloved products and we're committed to meeting demand. Additional production runs are now scheduled and we expect retail availability to normalise by the third quarter of 2026."

The announcement follows a broader pattern of production challenges across the film industry, as manufacturers work to scale up capacity to meet growing demand from a new generation of film photographers.

Tri-X 400 in 35mm format remains readily available. Kodak has not indicated any plans to change the film's formulation — the increased production is purely a capacity expansion.

**What this means for you:** If you've been hoarding 120 Tri-X, relief is coming. Current street prices should begin to normalise within the next few months as new stock reaches retailers.`,
    contentType: "news",
    sourceName: "Kodak Alaris",
    sourceUrl: "https://www.kodakalaris.com",
    publishedDate: "2026-03-27",
    categories: ["Film Stocks", "Industry"],
    tags: ["Kodak", "Tri-X", "120 film", "supply chain"],
    featured: true,
  },
  {
    id: "n002",
    slug: "ilford-darkroom-printing-workshops-2026",
    title:
      "Ilford Announces 2026 Darkroom Printing Workshop Series Across the UK",
    summary:
      "Ilford Photo is running a new series of hands-on darkroom workshops at partner labs across England and Scotland, open to beginners and experienced printers alike.",
    body: `Ilford Photo has announced a new series of darkroom printing workshops running from April through October 2026, hosted at partner darkrooms across the UK.

The workshops cover everything from absolute beginner ("Your First Print") through to advanced techniques ("Split-Grade Printing Masterclass" and "Lith Printing Workshop"). Each session is limited to 6 participants to ensure hands-on instruction.

Confirmed locations include:
- **London**: Photofusion, Brixton
- **Manchester**: Darkroom Manchester
- **Edinburgh**: Stills Centre for Photography
- **Bristol**: The Bristol Darkroom
- **Birmingham**: Grain Photography Gallery

Prices range from £45 for a 3-hour beginner session to £120 for a full-day advanced workshop. All chemicals and paper are included — participants just need to bring their negatives.

"We want to make the darkroom accessible to everyone, not just those who had the luck to learn at school or university," said an Ilford spokesperson. "These workshops are designed to give you real skills you can take away and practise."

Registration opens April 7th at ilfordphoto.com/workshops.

**Why it matters:** Darkroom access remains one of the biggest barriers to entry for film photographers. Structured workshops with quality instruction help bridge that gap — and Ilford's involvement adds credibility and ensures proper materials.`,
    contentType: "news",
    sourceName: "Ilford Photo",
    sourceUrl: "https://www.ilfordphoto.com",
    publishedDate: "2026-03-26",
    categories: ["Education", "Events"],
    tags: ["Ilford", "darkroom", "workshops", "UK", "printing"],
  },
  {
    id: "n003",
    slug: "lomography-new-instant-back-medium-format",
    title:
      "Lomography Unveils Instant Film Back for Medium Format Cameras",
    summary:
      "A new Instax Wide-compatible film back that attaches to Mamiya RB67 and similar medium format systems. Shipping June 2026.",
    body: `Lomography has announced a new product that bridges the gap between medium format precision and instant gratification — an Instax Wide-compatible film back designed for the Mamiya RB67 system.

The LomoGraflok Instant Back 67 follows the success of their 4x5 Graflok back, which became a surprise hit among large format photographers who wanted quick test shots without burning sheet film.

The new back attaches via the standard RB67 revolving back mount, replacing the standard 120 or Polaroid backs. It accepts Fujifilm Instax Wide film, giving photographers instant feedback while using their favourite lenses and accessories.

Key features:
- Standard Mamiya RB67 back mount (also fits RZ67 with adapter)
- Uses widely available Instax Wide film
- Dark slide for mid-roll back swapping
- Built-in exposure compensation dial (+/- 2 stops)

Priced at $179 USD, it's positioned as an affordable accessory for the thriving RB67 community. Pre-orders open April 15th with June 2026 shipping.

**Our take:** This is clever product design. The RB67 is arguably the most popular medium format camera among new film photographers (thanks to its affordability and excellent lenses), and Instax film is cheap enough to use for test shots. It won't replace scanning, but it's a fun, practical addition.`,
    contentType: "news",
    sourceName: "Lomography",
    sourceUrl: "https://www.lomography.com",
    publishedDate: "2026-03-25",
    categories: ["Gear", "New Products"],
    tags: ["Lomography", "Instax", "medium format", "Mamiya RB67"],
  },
  {
    id: "n004",
    slug: "darkroom-supply-shortage-selenium-toner",
    title:
      "Selenium Toner Shortage Impacts Darkroom Printers as Regulatory Pressure Mounts",
    summary:
      "Selenium-based photographic toner is becoming harder to source as environmental regulations tighten. Alternatives exist but divide opinion among fine art printers.",
    body: `Darkroom printers are facing increasing difficulty sourcing selenium toner, a staple of fine art black and white printing, as regulatory pressure on selenium compounds grows.

Kodak discontinued its rapid selenium toner several years ago, and remaining stocks from other manufacturers are thinning. The core issue is environmental: selenium is classified as a toxic substance in many jurisdictions, and manufacturers face rising compliance costs.

Photographers have traditionally used selenium toner for two purposes: archival protection (it converts silver to silver selenide, which resists degradation) and aesthetic enhancement (it adds a subtle cool-purple tone to prints and deepens blacks).

**Current alternatives:**

- **Gold toner**: Excellent archival properties, warm tone shift. Very expensive (£40-60 per litre of working solution).
- **Sistan**: Fujifilm's archival treatment. No tonal change, pure protection. Still available but not widely stocked.
- **Sulfide toners**: Warm brown tones, good archival properties. Different aesthetic to selenium.

The fine art printing community remains divided. "Nothing replaces selenium for the specific look it gives," says one UK-based printer. "But if the choice is between environmental responsibility and a marginal tonal difference, we adapt."

**What to do:** If selenium toning is part of your workflow, consider stocking up from remaining suppliers. For new printers, gold toner or Sistan offer solid archival protection without the regulatory concerns.`,
    contentType: "news",
    publishedDate: "2026-03-24",
    categories: ["Darkroom", "Industry"],
    tags: ["darkroom", "selenium toner", "chemicals", "regulation"],
  },
  {
    id: "n005",
    slug: "fujifilm-instax-mini-evo-2-review-roundup",
    title:
      "Review Round-Up: Fujifilm Instax Mini Evo 2 — Hybrid Instant Camera",
    summary:
      "The second-generation Instax Mini Evo adds Bluetooth, new creative filters, and improved lens optics. Here's what reviewers are saying.",
    body: `Fujifilm's Instax Mini Evo 2 has been in reviewers' hands for several weeks now. Here's a roundup of the consensus.

**What's new over the original:**
- Bluetooth connectivity for remote triggering and image transfer
- Improved lens with reduced chromatic aberration
- 12 new creative filter effects (in addition to the original 10)
- Slightly larger rear LCD screen
- USB-C charging (finally)

**What reviewers agree on:**
The Instax Mini Evo 2 remains the best hybrid instant camera on the market. The ability to review shots on screen before choosing to print saves film — a significant practical advantage over traditional instant cameras. Print quality on Instax Mini film is as good as the format allows.

**Where opinions differ:**
Some reviewers feel the Evo 2 is an incremental update that doesn't justify the £30 price increase over the original (now £199 vs £169). Others argue the Bluetooth functionality and USB-C alone make it worthwhile.

**The consensus:** If you don't own an Instax Mini Evo, the Evo 2 is the one to buy. If you already have the original, the upgrade is optional unless Bluetooth control matters to you.

**Price:** £199 / $219 USD. Available now.

*Sources: PetaPixel, DPReview, Japan Camera Hunter, 35mmc*`,
    contentType: "review",
    publishedDate: "2026-03-23",
    categories: ["Reviews", "Gear"],
    tags: ["Fujifilm", "Instax", "instant camera", "review roundup"],
  },
  {
    id: "n006",
    slug: "35mmc-reaches-one-million-monthly-readers",
    title:
      "35mmc Crosses One Million Monthly Readers — A Milestone for Film Photography Media",
    summary:
      "Hamish Gill's community-driven film photography blog has quietly become one of the most-read photography sites on the web.",
    body: `35mmc, the film photography blog founded by Hamish Gill in 2014, has announced it now reaches over one million unique monthly readers — a remarkable milestone for a niche publication in an era of declining blog readership.

The site's growth mirrors the broader resurgence of film photography. What started as a personal blog about 35mm compact cameras has evolved into one of the most comprehensive community-driven photography sites online, with hundreds of contributing writers sharing camera reviews, processing tips, and project stories.

"I never planned for it to become this," Gill said. "The growth has been entirely organic — people discovering film, wanting to share their experiences, and finding a home for that here."

The site's success offers lessons for anyone in the analogue photography space:
1. **Community contribution scales.** 35mmc publishes multiple articles per week, almost all from guest contributors.
2. **Niche depth beats broad coverage.** The site doesn't try to cover digital photography or video.
3. **Consistent publishing compounds.** A decade of regular content has built an enormous archive that ranks well in search.

35mmc remains free to read with no paywall — supported by affiliate links, a Patreon, and a small online shop.

**Why it matters:** 35mmc's growth validates the demand for quality film photography content online. The audience is there — and it's growing.`,
    contentType: "news",
    sourceName: "35mmc",
    sourceUrl: "https://www.35mmc.com",
    publishedDate: "2026-03-22",
    categories: ["Community", "Industry"],
    tags: ["35mmc", "community", "media", "milestone"],
  },
  {
    id: "n007",
    slug: "analogue-wonderland-expands-european-shipping",
    title:
      "Analogue Wonderland Launches Free European Shipping Over €40",
    summary:
      "The UK-based film retailer extends its free shipping offer to all EU countries, plus Norway and Switzerland, for orders over €40.",
    body: `Analogue Wonderland, one of the UK's leading specialist film retailers, has expanded its free shipping threshold to cover all European Union countries, plus Norway and Switzerland.

Orders over €40 (approximately £34) now qualify for free tracked shipping to Europe, with delivery typically taking 5-8 working days. Previously, free shipping was limited to UK orders over £30.

The move comes as Analogue Wonderland continues to grow its European customer base post-Brexit. The company has invested in a fulfilment partnership in the Netherlands to reduce delivery times and customs friction for EU customers.

"Post-Brexit shipping to Europe has been our biggest customer complaint," said the company. "This new fulfilment arrangement means EU orders no longer go through UK customs, which eliminates the surprise duties that were driving customers away."

The shop stocks over 100 different film stocks, along with chemicals, accessories, and the popular "mystery film" bundles that have become a social media favourite.

**For UK customers:** The existing free UK shipping over £30 threshold remains unchanged.`,
    contentType: "news",
    sourceName: "Analogue Wonderland",
    sourceUrl: "https://www.analoguewonderland.co.uk",
    publishedDate: "2026-03-21",
    categories: ["Retail", "Industry"],
    tags: ["Analogue Wonderland", "shipping", "retail", "Europe"],
  },
  {
    id: "n008",
    slug: "on-this-day-kodachrome-discontinued-2009",
    title:
      "On This Day: The Last Roll of Kodachrome Was Processed (2010)",
    summary:
      "A look back at the end of an era — when Dwayne's Photo in Kansas processed the world's final roll of Kodachrome on December 30, 2010.",
    body: `On this day in photographic history, we remember one of the medium's most bittersweet moments.

Kodachrome, Kodak's legendary colour reversal film, was first introduced in 1935. For over 70 years, it defined colour photography — National Geographic was shot on it, Abraham Zapruder filmed President Kennedy's assassination on it, and Paul Simon wrote a song about it.

Kodak discontinued Kodachrome in 2009, citing declining demand. But the real end came on December 30, 2010, when Dwayne's Photo in Parsons, Kansas — the last lab in the world still processing K-14 chemistry — developed its final roll.

**Why Kodachrome couldn't survive:**
The K-14 process was extraordinarily complex compared to E-6 (standard slide film processing). It required specialised equipment and chemicals that only made economic sense at scale. As demand dropped below critical mass, labs couldn't justify the investment.

**The lasting legacy:**
Kodachrome's colour palette — punchy reds, deep blues, warm skin tones — influenced digital colour science. Many digital presets and film emulations attempt to recreate the "Kodachrome look." It remains the gold standard against which colour film is measured.

**Could it return?** Almost certainly not. The K-14 chemistry is essentially lost, the manufacturing equipment was dismantled, and the economics don't work at any foreseeable scale. Kodachrome lives on in archives, in memory, and in the countless images it captured over 75 years.

*"Mama, don't take my Kodachrome away." — Paul Simon, 1973*`,
    contentType: "historical",
    publishedDate: "2026-03-20",
    categories: ["History", "Film Stocks"],
    tags: ["Kodak", "Kodachrome", "history", "on this day"],
  },
  {
    id: "n009",
    slug: "lab-spotlight-carmencita-film-lab-valencia",
    title:
      "Lab Spotlight: Carmencita Film Lab, Valencia — Craft Processing in the Mediterranean Sun",
    summary:
      "A look inside one of Europe's most respected film labs, processing everything from 35mm to large format with meticulous attention to detail.",
    body: `Carmencita Film Lab in Valencia, Spain, has built a reputation as one of Europe's premier film processing facilities. Founded in 2014, it now processes film for photographers across 40+ countries.

**What they offer:**
- C-41 colour negative processing (35mm, 120, 4x5)
- E-6 slide film processing (35mm, 120, 4x5)
- B&W processing (multiple chemistry options including Rodinal, D-76, HC-110)
- High-resolution scanning (Noritsu, Fuji Frontier, drum scanning for large format)
- ECN-2 motion picture film processing (CineStill, Lomography cine stocks)

**What sets them apart:**
Carmencita is known for its scanning quality and consistency. Every roll receives individual attention — exposure adjustments, colour correction, and dust removal are standard, not add-ons. Their Noritsu scanning produces clean, well-balanced files that many photographers use without further editing.

The lab also runs a popular YouTube channel with processing and scanning tutorials, and hosts an annual film photography festival in Valencia that draws attendees from across Europe.

**Turnaround:** 3-5 working days for standard processing, 24-48 hours for rush orders. International shipping via tracked post.

**Pricing:** Develop + scan from €12 for 35mm, €14 for 120. Competitive for the quality level, especially with their bulk discount programme.

**Website:** carmencitafilmlab.com

**Our verdict:** If you're in Europe and want consistently excellent results without fussing over your own scanning setup, Carmencita is hard to beat. The slightly higher price compared to budget labs is immediately visible in the scan quality.`,
    contentType: "lab_spotlight",
    publishedDate: "2026-03-19",
    categories: ["Labs", "Feature"],
    tags: ["Carmencita", "film lab", "Valencia", "Spain", "processing"],
  },
  {
    id: "n010",
    slug: "foma-bohemia-announces-new-colour-film",
    title:
      "Foma Bohemia Teases New Colour Negative Film — First in Decades",
    summary:
      "The Czech film manufacturer hints at a new colour negative stock in development, potentially the second new colour film to launch after Harman Phoenix.",
    body: `Foma Bohemia, the Czech manufacturer behind the Fomapan line of black and white films, has dropped hints that it is developing a colour negative film — which would be only the second brand-new colour film stock to launch in recent memory, after Harman's Phoenix 200.

Details are scarce. A social media post from the company's official account showed a test strip with distinctly warm colour rendition and the caption "Something new is coming from Hradec Králové" — the city where Foma's factory is located.

Industry observers note that Foma has the coating equipment and chemical expertise to produce colour film, though the C-41 process is significantly more complex than the black and white production they're known for.

**What we know:**
- Foma has been researching colour film production for at least two years
- The company has hired colour chemistry specialists
- Test batches are reportedly being evaluated by select photographers
- No timeline has been announced

**What it would mean:**
A new colour film from Foma would likely be positioned as a budget option — Fomapan's strength has always been affordability. If they can produce a C-41 film at Fomapan pricing (roughly half the cost of Portra), it would significantly lower the barrier to colour film shooting.

We'll update this story as more information becomes available.`,
    contentType: "news",
    sourceName: "Foma Bohemia",
    publishedDate: "2026-03-18",
    categories: ["Film Stocks", "Industry"],
    tags: ["Foma", "colour film", "new product", "Czech Republic"],
    featured: true,
  },
  {
    id: "n011",
    slug: "beginner-what-is-film-photography",
    title: "What is Film Photography? A Complete Beginner's Guide",
    summary:
      "Everything you need to know to start shooting film in 2026 — from choosing a camera to getting your first roll developed.",
    body: `So you want to try film photography. Welcome — you're joining a community that's never been more active or more welcoming.

## What is film photography?

Film photography uses light-sensitive chemical film (rather than a digital sensor) to capture images. When you press the shutter, light hits the film and creates a latent image in the emulsion. That film is then chemically processed to reveal the photograph.

It sounds old-fashioned, and in some ways it is — the basic technology hasn't changed fundamentally since the 1930s. But that's part of the appeal. Film forces you to slow down, think about each frame, and accept a degree of beautiful unpredictability.

## Why shoot film in 2026?

- **The process matters.** Film makes photography physical — loading a camera, advancing frames, waiting for development. Every step is tactile.
- **The look is real.** Film's colour science, grain structure, and dynamic range produce a look that digital emulations approximate but never fully replicate.
- **Constraints breed creativity.** 36 exposures (or 12 on medium format) forces you to be intentional about every frame.
- **It's more accessible than ever.** Film stocks are widely available, labs operate worldwide, and excellent cameras can be found for under £100.

## What do you need to get started?

**1. A camera.** You don't need to spend much. Excellent starter options:
- **Canon AE-1** or **AE-1 Program** (£80-150) — the classic 35mm SLR
- **Olympus OM-1** or **OM-2** (£100-200) — compact, beautifully built
- **Pentax K1000** (£80-120) — fully manual, great for learning
- **Any compact point-and-shoot** (£20-50) — the easiest way to start

**2. A roll of film.** Start with:
- **Kodak Gold 200** — warm, forgiving, cheap. The perfect first roll.
- **Kodak ColorPlus 200** — similar to Gold, slightly cheaper.
- **Ilford HP5 Plus 400** — if you want to try black and white.

**3. Somewhere to develop it.** You have three options:
- **Send to a lab.** Mail-order labs like Carmencita, Take It Easy Lab, or your local photo shop. Typical cost: £8-15 for development + scanning.
- **Find a local lab.** Many cities have walk-in film labs. Google "film processing near me."
- **Develop at home.** A starter kit costs around £50 and it's easier than you think (but save this for later).

## Your first roll: tips

1. **Shoot in daylight.** ISO 200 film is designed for sunny to overcast conditions.
2. **Don't overthink it.** Your first roll doesn't need to be art. Just shoot.
3. **Finish the roll.** Don't leave a half-shot roll in the camera for months.
4. **Get it developed promptly.** Exposed but undeveloped film degrades over time.
5. **Don't judge film by drugstore prints.** Get scans, not just prints. The scan quality matters enormously.

## What will it cost?

Rough budget for your first month:
- Camera: £50-150 (one-time)
- 3 rolls of Kodak Gold 200: £24
- Development + scanning (3 rolls): £30-45
- **Total first month: £100-220**

After the initial camera purchase, ongoing costs are roughly £15-20 per roll (film + processing). That's about 50p per frame on 35mm. Expensive enough to make you think, cheap enough to enjoy.

## Next steps

Once you've shot and developed your first few rolls, you'll know whether film photography is for you. If it is, explore our [film stock guide](/film-stocks) to find stocks that match your style, and try our [exposure calculator](/tools/exposure-calculator) if you're shooting a manual camera.

Welcome to the community. Your first roll is going to be great.`,
    contentType: "guide",
    publishedDate: "2026-03-15",
    categories: ["Guides", "Beginner"],
    tags: ["beginner", "getting started", "guide", "first roll"],
    featured: true,
  },
  {
    id: "n012",
    slug: "guide-c41-vs-bw-processing",
    title: "C-41 vs Black & White: Understanding Film Processing",
    summary:
      "A clear explanation of the two main film development processes, what they cost, and which you can do at home.",
    body: `When you drop off a roll of film at a lab, the processing method depends on the type of film. Here's what you need to know about the two main processes.

## C-41: Colour Negative Processing

**What it develops:** All standard colour negative films (Kodak Portra, Gold, Ektar; Fujifilm Superia, C200; CineStill 400D/800T; Harman Phoenix; Lomography colour films).

**How it works:** C-41 is a standardised process — every lab runs the same chemistry at the same temperature (37.8°C) for the same time. This standardisation means results are consistent regardless of where you get your film developed.

**Key facts:**
- Temperature-critical: must be maintained at 37.8°C ± 0.15°C
- Total process time: approximately 24 minutes
- Chemistry: developer, bleach, fix, stabiliser
- Can be done at home with a kit (Tetenal, CineStill Cs41) — but temperature control is the challenge

**Cost:** Typically £5-8 for development only, £10-15 with scanning.

**Special case: ECN-2.** Motion picture films (and some CineStill stocks) are designed for ECN-2 processing, not C-41. However, most labs process them in C-41 chemistry successfully — the main difference is ECN-2 films have a remjet layer that needs removing (CineStill pre-removes this).

## Black & White Processing

**What it develops:** All traditional B&W films (Ilford HP5, FP4, Delta; Kodak Tri-X, T-Max; Fujifilm Acros; Fomapan).

**How it works:** Unlike C-41, B&W processing is not standardised. Different developers produce different results with the same film — Rodinal gives sharp grain, D-76 gives smooth tonality, HC-110 is a versatile liquid concentrate. This variability is part of the creative control that draws people to B&W.

**Key facts:**
- Temperature-flexible: typically 20°C, but more tolerant than C-41
- Development times vary by film + developer + dilution combination
- Fewer chemicals: developer, stop bath, fixer
- Much easier to do at home than C-41 (temperature less critical)

**Cost:** Typically £6-10 for development only, £12-18 with scanning. Slightly more expensive than C-41 because it's less automated.

**Special case: XP2 Super and other chromogenic B&W films.** Despite producing black and white images, XP2 Super uses C-41 chemistry. Any lab that processes colour film can develop it.

## Which should you try at home first?

**Start with black and white.** It's more forgiving of temperature variation, the chemistry is simpler, and you can work under a safelight (red/amber) when handling paper for printing. A basic B&W developing kit (tank, reels, chemicals, thermometer, measuring jugs) costs about £50.

C-41 at home is absolutely doable but requires more precise temperature control. A sous vide stick or a dedicated tempering bath helps enormously.

## Quick reference

| | C-41 | Black & White |
|---|---|---|
| Film types | Colour negative | Traditional B&W |
| Temperature | 37.8°C (critical) | 20°C (flexible) |
| Standardised? | Yes | No (creative choice) |
| Home difficulty | Moderate | Easy |
| Lab cost | £5-8 dev | £6-10 dev |
| Special cases | ECN-2 films in C-41 | XP2 in C-41 |`,
    contentType: "guide",
    publishedDate: "2026-03-14",
    categories: ["Guides", "Darkroom"],
    tags: ["processing", "C-41", "black and white", "darkroom", "guide"],
  },
  {
    id: "n013",
    slug: "guide-understanding-iso-film-speed",
    title: "Understanding ISO: Film Speed Explained Simply",
    summary:
      "What ISO means, how it affects your photos, and how to choose the right speed for different situations.",
    body: `ISO is one of the three pillars of exposure (alongside aperture and shutter speed). In film photography, ISO describes how sensitive the film is to light.

## The basics

- **Low ISO (50-100):** Less sensitive to light. Needs more light (bright conditions or long exposures). Produces finer grain and more detail.
- **Medium ISO (200-400):** Versatile. Works in most daylight to overcast conditions. Moderate grain.
- **High ISO (800-3200):** Very sensitive to light. Works in low light. More visible grain.

## Common film speeds and when to use them

**ISO 50 (e.g., Velvia 50)**
Bright sunshine only. Produces stunning detail and almost invisible grain. You'll need a tripod in anything less than full sun.

**ISO 100 (e.g., Ektar 100, T-Max 100, Delta 100)**
Bright to moderately bright conditions. Ideal for landscapes, architecture, and studio work where you control the light. Very fine grain.

**ISO 200 (e.g., Gold 200, ColorPlus 200)**
The sweet spot for daylight photography. Handles sunny to overcast conditions comfortably. The most popular speed for beginners.

**ISO 400 (e.g., Portra 400, HP5 Plus, Tri-X 400)**
The all-rounder. Works from bright sun to shade to indoor-with-window-light. The most versatile speed — if you only carry one film, make it 400.

**ISO 800 (e.g., Portra 800, CineStill 800T)**
Low light and indoor photography. Concerts, evening street photography, indoor events. Noticeable grain adds character.

**ISO 3200 (e.g., Delta 3200)**
Near-darkness. Candlelit rooms, night streets, astronomical photography. Very grainy — embrace it as an aesthetic choice.

## A crucial difference from digital

On a digital camera, you can change ISO between shots. On film, **the entire roll is one ISO.** You choose your film speed before you start shooting, and every frame on that roll is the same sensitivity.

This means film photographers need to think ahead: What conditions will I be shooting in today? If the answer is "I don't know," ISO 400 is almost always the safe choice.

## Pushing and pulling

You can intentionally shoot film at a different ISO than its box speed and adjust during development:

- **Pushing** (shooting at higher ISO): Shoot your ISO 400 film at 800 or 1600, then ask the lab to "push" process it. This increases contrast and grain but lets you shoot in darker conditions.
- **Pulling** (shooting at lower ISO): Shoot your ISO 400 film at 200, then ask for "pull" processing. This decreases contrast and can help in very bright conditions.

Not all labs offer push/pull processing, and there's usually a small extra charge (£1-3). Always tell your lab if you've pushed or pulled — the development time must be adjusted.

## Quick guide

| Conditions | Recommended ISO |
|---|---|
| Bright sunshine | 100-200 |
| Overcast / shade | 200-400 |
| Indoor with windows | 400 |
| Indoor, artificial light | 800 |
| Night / very low light | 1600-3200 |
| "I don't know" | 400 |`,
    contentType: "guide",
    publishedDate: "2026-03-13",
    categories: ["Guides", "Beginner"],
    tags: ["ISO", "film speed", "beginner", "exposure", "guide"],
  },
  {
    id: "n014",
    slug: "guide-choosing-your-first-film-camera",
    title: "Choosing Your First Film Camera: A Practical Guide",
    summary:
      "SLR, rangefinder, point-and-shoot, or medium format? Here's how to pick the right camera for how you want to shoot.",
    body: `The used camera market is overflowing with excellent film cameras at every price point. Here's how to navigate it.

## The four main categories

### 1. SLR (Single Lens Reflex)
**What it is:** You look through the actual taking lens via a mirror and prism. What you see is what you get.

**Best for:** Learning photography, versatility, lens selection.

**Top picks:**
- **Canon AE-1 Program** (£80-150): The most popular film SLR ever made. Huge lens ecosystem, reliable, affordable.
- **Nikon FM2** (£150-250): Built like a tank. Fully mechanical — works without batteries. Professional quality.
- **Pentax K1000** (£80-120): The teaching camera. Fully manual, simple, reliable. No frills, no distractions.
- **Minolta X-700** (£60-120): Underrated. Excellent metering, great lenses, cheaper than Canon/Nikon equivalents.

### 2. Rangefinder
**What it is:** You focus through a separate viewfinder using a double-image alignment system. Compact and quiet.

**Best for:** Street photography, travel, discreet shooting.

**Top picks:**
- **Olympus 35 SP** (£80-150): Fixed 42mm lens, excellent optics, spot metering. A hidden gem.
- **Canonet QL17 GIII** (£100-180): The "poor man's Leica." Sharp 40mm f/1.7 lens, compact, beautiful images.
- **Yashica Electro 35** (£60-120): Distinctive look, electronic shutter priority. Quirky but capable.
- **Leica M6** (£2,500+): The gold standard. If budget allows, nothing else compares.

### 3. Point-and-Shoot / Compact
**What it is:** Fixed or zoom lens, autofocus, fully automatic. Load film and press the button.

**Best for:** Casual photography, parties, always-in-your-pocket camera.

**Top picks:**
- **Olympus mju-II (Stylus Epic)** (£100-200): Weatherproof, sharp 35mm f/2.8 lens. The cult favourite.
- **Canon Sure Shot / Autoboy** series (£20-60): Reliable, cheap, surprisingly good.
- **Nikon L35AF** (£80-150): Sharp Nikon lens, robust build. One of the first quality autofocus compacts.
- **Ricoh GR1** (£400+): Premium compact with a legendary 28mm GR lens. Expensive but exceptional.

### 4. Medium Format
**What it is:** Larger film (120 format) producing bigger negatives with more detail and shallower depth of field.

**Best for:** Portraits, landscapes, anyone who wants more resolution and the medium format "look."

**Top picks:**
- **Mamiya RB67** (£200-400): The affordable studio beast. Heavy but produces stunning results.
- **Yashica Mat 124G** (£150-250): Twin-lens reflex. Quiet, compact for medium format, beautiful rendering.
- **Bronica SQ-A** (£150-300): 6x6 SLR system. Modular, affordable, excellent Zenzanon lenses.
- **Pentax 67** (£400-600): The "medium format SLR." Handles like an oversized 35mm camera. Legendary portraits.

## How to choose

Ask yourself three questions:

**1. Do I want to learn manual controls?**
Yes → SLR (Canon AE-1, Nikon FM2, Pentax K1000)
No → Point-and-shoot (Olympus mju-II, Canon Sure Shot)

**2. What will I mainly photograph?**
Street/travel → Rangefinder or compact
Portraits/landscapes → SLR or medium format
Everything → SLR with a 50mm lens

**3. What's my budget?**
Under £50 → Point-and-shoot
£50-150 → SLR or rangefinder
£150-400 → Premium SLR or entry medium format
£400+ → Premium rangefinder or medium format system

## Buying tips

- **Test before buying.** Check the shutter fires at all speeds, the meter works (if applicable), and the lens is free of fungus and haze.
- **Buy from reputable sellers.** Camera shops with return policies, eBay sellers with high ratings, or dedicated film camera shops like KEH, MPB, or Japan Camera Hunter.
- **Start cheap.** Your first camera doesn't need to be perfect. Learn on something affordable and upgrade later if you want to.
- **Don't chase hype.** Instagram-famous cameras (Contax T2, Leica M6) are wildly overpriced. Equally good alternatives exist at a fraction of the cost.`,
    contentType: "guide",
    publishedDate: "2026-03-12",
    categories: ["Guides", "Gear"],
    tags: ["camera", "buying guide", "beginner", "SLR", "rangefinder"],
  },
  {
    id: "n015",
    slug: "guide-scanning-film-at-home",
    title: "Scanning Film at Home: DSLR Scanning vs Flatbed vs Dedicated",
    summary:
      "A comparison of the three main approaches to digitising your negatives, with recommendations at every budget.",
    body: `You've shot and developed your film. Now you need to digitise it. Here are your options.

## Option 1: DSLR / Mirrorless Camera Scanning

**How it works:** You photograph your negatives using a digital camera, macro lens, and a light source. Software then inverts and colour-corrects the "scan."

**Pros:**
- Fastest method (a 36-exposure roll in under 10 minutes)
- Highest resolution if you have a modern camera (40MP+)
- Works with any format (35mm, 120, 4x5, 8x10)
- One-time investment if you already own a camera

**Cons:**
- Requires a macro lens, copy stand, and film holder
- Software learning curve (Negative Lab Pro, Grain2Pixel)
- Colour consistency requires practice

**Cost:** £100-300 for a copy stand + film holder + light pad (assuming you have a camera and macro lens). Negative Lab Pro is £99.

**Best for:** Photographers who already own a digital camera and want speed and quality.

## Option 2: Flatbed Scanner

**How it works:** A flatbed scanner with a transparency unit scans film directly. You lay the film in a holder on the glass and the scanner does the rest.

**Pros:**
- Simple to use — minimal learning curve
- Good for medium and large format
- Can also scan prints and documents

**Cons:**
- Slow (5-15 minutes per frame at high resolution)
- 35mm quality is limited (most flatbeds max out around 2400 true DPI for 35mm)
- Bulky equipment

**Cost:** £200-500 for a capable unit. The Epson V600 (£250) is the entry point; the V850 (£600) is the enthusiast standard.

**Best for:** Medium and large format shooters who want simplicity. Not ideal as the only scanning method for 35mm.

## Option 3: Dedicated Film Scanner

**How it works:** Purpose-built devices designed specifically for scanning film. Range from budget 35mm scanners to professional Noritsu/Frontier units.

**Pros:**
- Optimised for film (better optics than flatbeds for 35mm)
- Some models offer batch scanning
- Professional models (Noritsu, Pakon) produce lab-quality results

**Cons:**
- Single-purpose device
- Professional models are expensive and maintenance-intensive
- Budget models (Plustek 8200i) are slow (one frame at a time)

**Cost:** £200-400 for a Plustek 8200i (excellent 35mm quality), £1,500-3,000+ for a used Noritsu LS-600/LS-1100.

**Best for:** Dedicated 35mm shooters who want the best quality without a digital camera setup.

## Quick comparison

| Method | Speed | 35mm Quality | 120 Quality | Cost | Ease |
|---|---|---|---|---|---|
| DSLR scanning | Fast | Excellent | Excellent | Medium | Moderate |
| Flatbed (V600) | Slow | Fair | Good | Low | Easy |
| Flatbed (V850) | Slow | Good | Excellent | Medium | Easy |
| Plustek 8200i | Very slow | Excellent | N/A (35mm only) | Low | Easy |
| Noritsu | Fast | Excellent | Excellent | High | Moderate |

## Our recommendation

**If you're just starting:** Send your film to a lab for scanning. The cost (£5-10 per roll) is worth it while you're learning. Once you know you're committed to film, invest in a scanning setup.

**Best value setup:** DSLR scanning if you already own a camera. A Raleno light pad (£25), a 3D-printed film holder (£15-30), and Negative Lab Pro (£99) will outperform most flatbed scanners.

**Best for 35mm only:** Plustek 8200i with SilverFast software. Slow but produces excellent results.

**Best for medium format:** Epson V850 flatbed or DSLR scanning. Both produce excellent results at 120 size.`,
    contentType: "guide",
    publishedDate: "2026-03-11",
    categories: ["Guides", "Scanning"],
    tags: ["scanning", "DSLR scanning", "flatbed", "digitising", "guide"],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}

export function getNewsByType(type: ContentType): NewsItem[] {
  return newsItems.filter((n) => n.contentType === type);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter((n) => n.featured);
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  newsItems.forEach((n) => n.categories.forEach((c) => cats.add(c)));
  return [...cats].sort();
}
