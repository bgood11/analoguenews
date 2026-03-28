# analoguenews

The daily pulse of analogue photography. News, guides, film stock reference, and practical tools — all free, no paywall.

**Live:** [analoguenews.vercel.app](https://analoguenews.vercel.app)

## What's Included

### Content
- **15 seed articles** — news briefs, review roundups, beginner guides, historical features, lab spotlights
- **25 film stock reference pages** — Kodak, Fujifilm, Ilford, CineStill, Harman, Foma — with specs, character descriptions, reciprocity data
- **5 beginner guides** — What is Film Photography, Understanding ISO, Choosing Your First Camera, C-41 vs B&W Processing, Scanning at Home

### Tools
- **Exposure Calculator** — select lighting conditions, film speed, and see all aperture/shutter combinations with practical notes
- **Reciprocity Failure Helper** — select film stock, input metered time, get adjusted exposure with log-linear interpolation across 15+ stocks

### Pages
- Homepage with news river + discovery sidebar
- Film stock explorer (grouped by manufacturer, filterable)
- Individual film stock pages with specs, character, best-for tags, reciprocity tables
- Guides index + individual guide pages
- Tools hub + individual tool pages
- Newsletter signup
- About page with AI transparency note

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Hosting | Vercel |
| Content | Static (TypeScript data files) |
| Pages | 50 statically generated |

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design

Following the brand framework from planning docs:
- **Warm editorial modern** aesthetic (not moody darkroom)
- Coral accent (#E8634A), warm white background (#FAFAF8), warm near-black text (#1A1410)
- Inter font family, monospace for specs/data
- Mobile-responsive, clean typography at 17-19px body

## Next Steps (from planning roadmap)

- [ ] Backend ingestion pipeline (RSS workers on VPS)
- [ ] Claude API integration for source summarisation
- [ ] Newsletter integration (Buttondown or Resend)
- [ ] Search (Pagefind)
- [ ] Real source content seeding
- [ ] Analytics (Plausible or Umami)
- [ ] Film stock comparison tool (Phase 2)
- [ ] Lab finder directory (Phase 3)
