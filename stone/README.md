# StoneBuySell — Iranian Natural Stone Export

Production-ready Astro static site for StoneBuySell, a B2B exporter of Iranian natural stone (travertine, marble, granite, onyx, limestone, crystal).

## Tech Stack

- Astro 5 (static output, directory format, trailing slash)
- Tailwind CSS
- @astrojs/sitemap
- Content Collections for guides and blog

## Deploy to Vercel

1. Push this repo to GitHub (`stonebuysell`).
2. Import the project in Vercel → framework preset **Astro** → build command `npm run build` → output directory `dist`.
3. Set custom domain `www.stonebuysell.ir` and add `stonebuysell.ir` as an alias (redirect to www).
4. Submit `https://www.stonebuysell.ir/sitemap-index.xml` to Google Search Console and Bing Webmaster Tools.

## Content

Guides live in `src/content/guides/` (20 articles, 1800–2200 words each).
Blog posts live in `src/content/blog/` (4 posts, 1200–1500 words each).
Image mapping for every article is in `src/data/imageMap.json`.

## Local Dev

```bash
npm install
npm run dev
```
