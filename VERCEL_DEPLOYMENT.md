# Vercel Deployment — #1 Frisör Uppsala

## Configuration

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output | Static (`out/`) |
| Install Command | `npm install` |
| Dev port (local) | 3003 |

## Expected Production URL

```
https://business-3-1-frisor-uppsala.vercel.app
```

## Environment Variables

None required.

## Premium Site Notes

- Client components (`ReviewsCarousel`, `StickyMobileBar`) work in static export
- All pages pre-rendered; interactivity hydrates on client

## Build Time Estimate

~60–90 seconds (slightly more components than other sites).
