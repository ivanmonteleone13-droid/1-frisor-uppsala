# Project Audit — #1 Frisör Uppsala (business-3-1-frisor-uppsala)

**Date:** 2026-06-22  
**Business:** #1 Frisör Uppsala — Premium herrfrisör & barber  
**Path:** `C:\Jarvis\projects\business-3-1-frisor-uppsala`

---

## Stack Summary

| Item | Value |
|------|-------|
| Framework | Next.js 16.2.9 (App Router) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 |
| TypeScript | Yes |
| Export mode | `output: "export"` (static) |
| Dev port | 3003 |

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Premium landing — hero, trust badges, reviews carousel, FAQ |
| `/om-oss` | About the salon |
| `/tjanster` | Services with pricing |
| `/galleri` | Gallery |
| `/kontakt` | Contact section |
| `/robots.txt` | Dynamic robots |
| `/sitemap.xml` | Dynamic sitemap |

## Premium Components (vs. other sites)

- `StickyMobileBar` — mobile CTA bar
- `ReviewsCarousel` — auto-rotating testimonials
- `TrustBadges`, `WhyChooseUs`, `FAQ`, `FinalCTA`
- Dark premium aesthetic with gold accents

## Business Data

- **Source:** `src/lib/business.ts`
- **Address:** Drottninggatan 1, 753 10 Uppsala
- **Phone:** 072-323 23 00
- **Booking:** Bokadirekt
- **Rating:** 4.9★ (411 reviews)

## SEO Status (post-audit)

| Feature | Status |
|---------|--------|
| `metadataBase` | ✅ Vercel-aware |
| Open Graph | ✅ |
| Twitter Card | ✅ |
| robots.txt | ✅ `src/app/robots.ts` |
| sitemap.xml | ✅ `src/app/sitemap.ts` |
| JSON-LD | ✅ HairSalon + LocalBusiness |
| Canonical URL | ✅ Dynamic |

## Build Status

```
npm install  → OK
npm run lint → OK (0 errors, 0 warnings after fix)
npm run build → OK (10 static pages)
```

## Git Status

- Repository initialized (`master` branch)
- `.gitignore` present
- Ready for first commit

## Deployment Readiness

| Check | Result |
|-------|--------|
| Static export compatible | ✅ |
| `vercel.json` | ✅ Added |
| Production URL placeholder | `https://business-3-1-frisor-uppsala.vercel.app` |

## Known Limitations

- Contact form is client-side only
- OG image `/og-image.png` not yet in `public/`

## Recommended Vercel Project Name

`business-3-1-frisor-uppsala` or `frisor-uppsala`
