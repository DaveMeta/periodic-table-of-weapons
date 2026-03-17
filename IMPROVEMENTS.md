# Periodic Table of Weapons — Improvement Backlog

**Type**: E-commerce / Product play
**Product**: 36x24" illustrated poster — 80+ historical weapons across 5 epochs
**Goal**: Get poster selling via print-on-demand, zero inventory

## Status Legend
- [ ] Not started
- [~] In progress
- [x] Complete

---

## Queue (Priority Order)

### Phase 1: POD Setup & Marketplace Listings

1. [ ] **Research and select POD service** — Compare Printful, Printify, Gelato, Gooten for poster printing. Evaluate cost, quality, margins, integration. POD research agent running.
2. [ ] **List on Redbubble** — Upload poster design, set pricing, optimize listing with keywords. Zero setup cost, immediate exposure.
3. [ ] **List on Society6** — Same. Different audience, art-focused marketplace.
4. [ ] **List on Teepublic** — Same. Pop culture / novelty audience.
5. [ ] **List on Etsy** — Create shop, list poster. Etsy has massive search traffic for novelty posters.
6. [ ] **List on Amazon Merch / KDP** — If poster format is supported.
7. [ ] **Expand product line** — Upload design to t-shirts, mugs, phone cases, canvas prints, framed prints on each platform.

### Phase 2: Standalone Website

8. [x] **Modernize the microsite** — Rebuilt as Astro 5 + Tailwind CSS 4 static site. Homepage, 5 epoch pages, poster page, about page. Deployed to Cloudflare Pages.
9. [ ] **Integrate POD checkout** — Printful/Printify API for direct purchases on the site.
10. [x] **Add SEO foundation** — Meta descriptions, OG tags, Product schema on poster page, sitemap, robots.txt. All pages have canonical URLs.
11. [x] **Set up GA4** — GA4 property G-SMPLH08W8H added to BaseLayout.astro and deployed.
12. [ ] **Set up GSC** — Verify domain, submit sitemap.
13. [ ] **Add email capture** — MailChimp form is there but may be stale. Verify or switch to Resend.
14. [x] **Domain setup** — periodictableofweapons.com zone exists in Cloudflare. Custom domain added to Pages project. DNS pending propagation.

### Phase 3: Content & SEO

15. [ ] **Create weapon detail pages** — Individual pages for each weapon with history, specifications, illustrations. 80+ pages of SEO content.
16. [ ] **Blog content** — "History of [weapon type]" articles targeting weapon history keywords.
17. [x] **Run /humanizer on all existing copy** — All marketing copy on homepage, poster, and about pages humanized. Legacy narrative text (human-written) preserved.
18. [ ] **Keyword research** — "periodic table poster", "weapons poster", "novelty wall art", "history poster".

### Phase 4: Marketing & Growth

19. [ ] **Social media assets** — Create shareable images from weapon illustrations for Instagram, Reddit, X.
20. [ ] **Reddit marketing** — Post to r/coolguides, r/weapons, r/history, r/interestingasfuck.
21. [ ] **Affiliate/referral program** — Set up on POD platform if supported.

---

## Completed Log

| # | Improvement | Completed | Commit |
|---|-------------|-----------|--------|
| 8 | Modernize the microsite (Astro 5 + Tailwind) | 2026-03-16 | e8183d3 |
| 10 | Add SEO foundation (meta, schema, sitemap, robots) | 2026-03-16 | e8183d3 |
| 14 | Domain setup (periodictableofweapons.com on CF Pages) | 2026-03-16 | e8183d3 |
| 17 | Run /humanizer on all copy | 2026-03-16 | 69063dc |
| 11 | Set up GA4 (G-SMPLH08W8H) | 2026-03-16 | cb0b9dd |
