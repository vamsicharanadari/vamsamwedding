# GitHub Pages Wedding Website Implementation Plan

## 1) Recommended tech stack

### MVP recommendation (best fit for constraints)
- **Framework:** **Eleventy (11ty)** static site generator.
- **Templating:** Nunjucks templates + reusable includes.
- **Styling:** Plain CSS with CSS custom properties (no heavy UI framework).
- **Data layer:** JSON files in `src/_data/` (events, couple, gallery, travel).
- **Images:** Pre-compressed WebP/JPEG assets organized by event folders.
- **Build/deploy:** GitHub Actions to build and publish `_site/` to GitHub Pages.

### Why this stack
- Keeps deployment simple (pure static output, no runtime backend).
- Easy for maintainers to update content via structured JSON files.
- Strong performance on mobile with minimal JavaScript.
- Scales from MVP to future features (multi-language, more pages) without framework lock-in.

### Alternatives (if preferred)
- **Simplest possible:** plain HTML/CSS/JS + data JSON.
- **If team likes component model:** Astro static export.

---

## 2) Folder structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── src/
│   ├── _data/
│   │   ├── site.json
│   │   ├── couple.json
│   │   ├── events.json
│   │   ├── gallery.json
│   │   └── travel.json                 # optional
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk
│   │   │   └── page.njk
│   │   ├── components/
│   │   │   ├── header.njk
│   │   │   ├── mobile-menu.njk
│   │   │   ├── hero.njk
│   │   │   ├── event-card.njk
│   │   │   ├── gallery-grid.njk
│   │   │   ├── lightbox.njk
│   │   │   ├── cta-row.njk
│   │   │   └── footer.njk
│   │   └── seo/
│   │       └── meta.njk
│   ├── assets/
│   │   ├── css/
│   │   │   ├── base.css
│   │   │   ├── components.css
│   │   │   └── utilities.css
│   │   ├── js/
│   │   │   ├── nav.js
│   │   │   ├── gallery-lightbox.js
│   │   │   └── filters.js              # optional phase 2+
│   │   └── images/
│   │       ├── hero/
│   │       │   └── hero-main.webp
│   │       ├── events/
│   │       │   ├── engagement/
│   │       │   ├── mehendi/
│   │       │   ├── haldi/
│   │       │   ├── sangeet/
│   │       │   ├── wedding-ceremony/
│   │       │   └── reception/
│   │       └── gallery/
│   │           ├── highlights/
│   │           ├── engagement/
│   │           ├── mehendi/
│   │           ├── haldi/
│   │           ├── sangeet/
│   │           ├── wedding-ceremony/
│   │           └── reception/
│   ├── pages/
│   │   ├── index.njk
│   │   ├── events.njk
│   │   ├── gallery.njk
│   │   ├── rsvp.njk                    # optional but recommended in MVP
│   │   ├── travel.njk                  # optional phase 2
│   │   └── faq.njk                     # optional phase 2
│   └── 404.njk
├── .eleventy.js
├── package.json
├── README.md
└── PRD.md
```

---

## 3) Feature breakdown

### MVP (Phase 1)
1. **Home page**
   - Hero, couple intro, quick navigation CTAs.
2. **Events page**
   - All six required Indian wedding events.
   - Each event has date/time/venue/map/dress code/note.
3. **Gallery page**
   - Responsive grid, lazy-loaded thumbnails, lightbox.
   - Highlights + event-grouped images.
4. **RSVP link module (optional in PRD, included if form exists)**
   - External link with “you are leaving this site” note.
5. **Core accessibility + performance baseline**
   - Keyboard nav, semantic landmarks, contrast.
   - Compressed assets + mobile-first CSS.
6. **GitHub Pages deployment + maintainer docs**
   - CI workflow and README content update guide.

### Phase 2 (nice-to-have)
- Travel & Stay page.
- FAQ/Contact page.
- Event filters on gallery/events.
- Add-to-calendar buttons per event.

### Phase 3 (post-wedding / enhancements)
- Thank-you page and video highlights.
- Multi-language support.
- Optional PWA offline cache.

---

## 4) Step-by-step implementation plan

### Phase 0 — Project setup (0.5 day)
1. Initialize Eleventy project and scripts (`dev`, `build`, `start`).
2. Add base layout, global CSS, and shared header/footer components.
3. Set up static asset passthrough and clean URL behavior.
4. Add GitHub Actions Pages workflow.

### Phase 1 — MVP information architecture (1 day)
1. Create pages: Home, Events, Gallery, RSVP.
2. Implement mobile-first header with hamburger menu.
3. Add SEO basics (title, description, OG image, favicon).
4. Add footer with “Last updated” timestamp from data.

### Phase 2 — Content modeling + rendering (1 day)
1. Add structured data files:
   - `couple.json`, `events.json`, `gallery.json`, `site.json`.
2. Render Events page from `events.json` in chronological order.
3. Render Gallery from `gallery.json` grouped by event.
4. Wire homepage sections from `couple.json` and `site.json`.

### Phase 3 — UI polish + interactions (1 day)
1. Build event card component with mandatory fields.
2. Build responsive gallery grid and lightweight lightbox.
3. Add CTA row for Events/Gallery/RSVP.
4. Ensure touch target sizes and one-thumb-friendly spacing.

### Phase 4 — Performance + accessibility hardening (0.5–1 day)
1. Compress/resize images and provide WebP with JPG fallback where needed.
2. Enable native lazy loading (`loading="lazy"`).
3. Validate semantic headings/landmarks and keyboard flow.
4. Run Lighthouse and fix biggest mobile bottlenecks.

### Phase 5 — Content operations + launch prep (0.5 day)
1. Add README instructions for maintainers:
   - how to edit events,
   - how to add images by event,
   - naming conventions,
   - pre-commit image checks.
2. Run link checks for maps and RSVP.
3. Final QA on common mobile widths.
4. Publish to GitHub Pages and verify public URL.

---

## 5) Acceptance criteria

### A. Home page
- Loads with hero section containing couple names and primary CTA buttons.
- Couple introduction is visible and readable on mobile without layout break.
- Navigation includes links to Events, Gallery, RSVP.

### B. Events feature
- Exactly six required events are visible: Engagement, Mehendi, Haldi, Sangeet, Wedding Ceremony, Reception.
- Every event card shows: name, date/day, time, venue, full address, map link, dress code.
- Events appear in chronological order from data file.
- Event layout works as stacked cards on mobile and multi-column/cards on larger screens.

### C. Gallery feature
- Gallery displays thumbnails grouped by event category.
- Clicking/tapping a thumbnail opens full-size lightbox/modal.
- Below-the-fold images are lazy loaded.
- Every image has meaningful `alt` text in data.

### D. RSVP feature
- RSVP page/section includes external form link.
- External link opens safely (`rel="noopener noreferrer"`) and indicates user leaves the site.
- Fallback contact text is shown when no form link exists.

### E. Accessibility + performance
- All interactive elements are keyboard reachable.
- Pages have semantic heading order and main landmark.
- No horizontal scrolling at 360px width.
- Lighthouse mobile performance score is **>= 85** on Home and Gallery.

### F. Maintainability + deployment
- Non-code content changes can be made by editing JSON data + image assets only.
- Gallery images are organized into event folders.
- `main` branch push triggers GitHub Pages workflow and deploys successfully.
- README includes update workflow that a maintainer can follow in under 15 minutes.

---

## 6) Deployment notes for GitHub Pages

1. **Repository settings**
   - Enable GitHub Pages source: **GitHub Actions**.
2. **Workflow behavior**
   - On push to `main`, run install + `npm run build`.
   - Upload `_site/` as Pages artifact.
   - Deploy via `actions/deploy-pages`.
3. **Custom domain (optional)**
   - Add `CNAME` in output and configure DNS.
4. **Caching strategy**
   - Use hashed asset filenames (or query/version strategy) to avoid stale CSS/JS.
5. **Operational checklist before each publish**
   - Validate event date/time and map links.
   - Confirm RSVP URL still works.
   - Confirm new images are compressed and correctly placed by event folder.
6. **Rollback plan**
   - Revert to previous commit on `main`; GitHub Pages auto-redeploys stable version.

---

## Sample data models

### `events.json` (sample)

```json
[
  {
    "id": "engagement",
    "name": "Engagement",
    "slug": "engagement",
    "start": "2026-11-20T18:00:00+05:30",
    "end": "2026-11-20T21:00:00+05:30",
    "timezone": "Asia/Kolkata",
    "venue": {
      "name": "Lotus Banquets",
      "address": "12 MG Road, Bengaluru, Karnataka 560001",
      "mapUrl": "https://maps.google.com/?q=Lotus+Banquets+Bengaluru"
    },
    "dressCode": "Indian Festive",
    "note": "Please arrive 30 minutes early for welcome photos",
    "isCoreEvent": true,
    "sortOrder": 1
  }
]
```

### `gallery.json` (sample)

```json
[
  {
    "id": "mehendi-001",
    "eventId": "mehendi",
    "eventSlug": "mehendi",
    "title": "Mehendi ceremony candid smiles",
    "alt": "Bride and friends during Mehendi ceremony",
    "caption": "Henna moments with family",
    "thumb": "/assets/images/gallery/mehendi/mehendi-001-thumb.webp",
    "src": "/assets/images/gallery/mehendi/mehendi-001.webp",
    "width": 1600,
    "height": 1067,
    "featured": true,
    "sortOrder": 10
  }
]
```

### Notes on data modeling decisions
- `eventId/eventSlug` ties each image to a specific event for easy grouping.
- ISO datetime + explicit timezone avoids ambiguity for guests.
- `sortOrder` gives maintainers deterministic manual control.
