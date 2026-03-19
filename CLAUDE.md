# Periodic Table of Weapons — Project Guide

## What This Is
A static microsite showcasing "The Periodic Table of Weapons" — an illustrated poster that catalogs historical weapons across five epochs (Ancient, Bronze/Iron Age, Middle Ages, Early Modern, Modern). The site features the poster for download, epoch-by-epoch weapon galleries with wallpaper-quality images, historical narrative content, a MailChimp email signup form (for poster print restocks), and social sharing buttons. Originally published May 2017 under Verge Studios.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static site generator) |
| Styling | Tailwind CSS 4 |
| Fonts | Google Fonts — PT Serif, Roboto |
| Email | Resend API (audience: a9ec2ace-7422-450a-88cd-83409353388f) |
| Analytics | GA4 (G-SMPLH08W8H, property 528611666) |
| Hosting | Cloudflare Pages (periodictableofweapons.com) |

## Commands
| Command | What It Does |
|---------|-------------|
| Open `PTOW Microsite/index.html` in browser | Preview the site locally |
| `sass ptow.scss ptow.min.css --style compressed` | Compile SCSS (if sass CLI installed) |
| No package.json or build tooling exists | Everything is manual |

## Directory Structure
```
periodic-table-of-weapons/
  .gitignore                          # Ignores .DS_Store, *.psd, *.tif
  poster-36x24.jpg                    # Print-ready poster (12.7MB)
  poster-with-bleed-37x25.jpg         # Print-ready poster with bleed (12MB)
  PTOW Microsite/                     # The actual website
    index.html                        # Main page
    thank-you.html                    # Post-signup confirmation page
    css/
      normalize.min.css               # CSS reset
      ptow.min.css                    # Compiled styles
      ptow.scss                       # Source SCSS
    js/
      main.js                         # Hamburger menu + ScrollReveal init
      vendor/                         # jQuery, ScrollReveal, Modernizr
    images/
      header/                         # Epoch header backgrounds (5 images)
      highres/                        # High-res weapon illustrations (44 images)
      poster/                         # Poster preview images
      squares/                        # Thumbnail weapon tiles for galleries
      wallpaper/                      # Full-size wallpaper weapon images
    source/                           # Source photography for headers
  PTOW Poster Proof Photos/           # Physical print proof photos (11 JPGs)
  Wallpapers/                         # Standalone wallpaper collection (66 images)
```

## Key Architecture Decisions
- Entirely static — no build pipeline, no bundler, no SSR
- SCSS is the only preprocessed asset; compiled CSS is committed
- jQuery Slim (no AJAX) is used only for the hamburger menu toggle
- ScrollReveal handles scroll-triggered fade-in animations
- All weapon images exist at three sizes: squares (thumbnails), wallpaper (full), highres (poster-quality)
- MailChimp form posts directly to MailChimp servers (no backend)
- Social sharing via Sharer.js loaded from CDN
- No analytics currently installed (no GA, no GTM)
- No sitemap.xml, no robots.txt, no structured data
- Meta description is empty — immediate SEO fix needed

## Secrets Needed
| Secret | Purpose | Status |
|--------|---------|--------|
| MailChimp list ID | Email signup form | Hardcoded in HTML (ae3d6915c3a8c85307ce23b5c / 51d043e95b) |
| Font Awesome kit ID | Icon CDN | Hardcoded in HTML (82f16ee276) |
| GA4 Property ID | Analytics | Not yet configured |
| Search Console | SEO tracking | Not yet configured |

## Site Profile

### Identity
- **Domain**: vergegraphics.com/periodic-table-of-weapons (subdirectory of vergegraphics.com)
- **Business model**: TBD — research needed (currently: poster sales via email waitlist, no active e-commerce)
- **MRR target**: Contribute toward $1,000 total portfolio MRR
- **Audience**: History enthusiasts, military history buffs, weapons collectors, infographic/poster fans, educators

### Analytics Mapping
- **GA4 Property ID**: 528611666 (G-SMPLH08W8H)
- **Search Console Property**: sc-domain:periodictableofweapons.com (verified 2026-03-18)
- **Cloudflare Zone ID**: TBD

### Performance Baseline
- **Monthly traffic**: ~11 sessions (all Direct, zero organic)
- **Top pages**: / (homepage only — no other pages receiving traffic)
- **Top keywords**: None ranking yet (zero GSC impressions)
- **Current revenue**: $0
- **Last updated**: 2026-03-18

### Voice & Tone
- Authoritative and educational — the site reads like a museum exhibit
- Historical narrative style with rich, descriptive prose
- Serious but accessible — not academic, not casual
- Visual-first: the imagery and poster design carry the brand

### Research Agenda
- [ ] What is the current traffic and trend?
- [ ] What keywords are we ranking for? What's the opportunity?
- [ ] Who are the competitors? What are they doing?
- [ ] What monetization model fits best? (print-on-demand, digital downloads, affiliate, ads)
- [ ] What content gaps exist? (individual weapon pages, blog posts, timeline interactive)
- [ ] What technical SEO issues exist? (empty meta description, no sitemap, no structured data, no robots.txt)
- [ ] What is the backlink profile?
- [ ] Should this become its own domain (e.g., periodictableofweapons.com)?
- [ ] Can the MailChimp list be migrated or reactivated?
- [ ] What would a modern rebuild look like? (Next.js/Astro static site with CMS)

## Conventions
- No build tooling — edit HTML/CSS/JS directly
- SCSS source is in `PTOW Microsite/css/ptow.scss`, compiled output is `ptow.min.css`
- Images use spaces-replaced-by-plus-signs naming in highres (e.g., `Battle+Axe+T.jpg`), lowercase-no-spaces in squares/wallpapers
- All links to wallpapers use `target="_new"` (non-standard but consistent)
- Color palette: dark navy background (#0e222f), light blue accent ($rose: #8cd7f7)
- Fonts: Roboto 700 for headings, PT Serif for body text
