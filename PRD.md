# Product Requirements Document (PRD)
## Personal Indian Wedding Website (GitHub Pages)

## 1) Product Overview

### Product Vision
Create an elegant, warm, festive, and modern wedding website that helps family and friends quickly find all key wedding information and enjoy curated wedding photos.

### Product Summary
This is a static, mobile-first website hosted on GitHub Pages for a personal Indian wedding. It will provide:
- A welcoming homepage with hero section and couple introduction
- A detailed events schedule for traditional Indian wedding functions
- A photo gallery for sharing wedding memories
- Optional RSVP via an external form
- Optional travel and stay information for out-of-town guests

The website should be easy to maintain through simple content updates in GitHub (Markdown/JSON/YAML + images), with minimal operational overhead.

---

## 2) Goals and Non-Goals

### Goals
1. Provide a single source of truth for all wedding-related details.
2. Offer a great user experience on mobile devices (primary usage context).
3. Present event details clearly: date, time, venue, dress code.
4. Showcase wedding photos in an organized gallery.
5. Ensure easy, low-effort maintenance via GitHub commits.
6. Enable optional RSVP collection through an external form link.
7. Optionally help guests with travel/stay logistics.

### Non-Goals
1. Building a custom backend or database.
2. Handling online payments, gift registries with transactions, or e-commerce.
3. Building a custom authentication or private guest portal in MVP.
4. Complex event ticketing/check-in workflows.
5. Native mobile app development.

---

## 3) Target Users

### Primary Users
- **Close family members** (parents, siblings, elders): need reliable event logistics.
- **Friends and cousins**: need quick schedule lookup, venue details, and gallery access.
- **Out-of-town/international guests**: need travel/stay guidance.

### Secondary Users
- **Wedding planners / helpers** who may reference event details.
- **Couple/admin maintainers** updating site content in GitHub.

### User Characteristics
- Wide age range and varying technical comfort.
- Heavy mobile usage (messaging-app shared links).
- Many users will skim for immediate answers ("When and where is Mehendi?").

---

## 4) User Stories

1. As a guest, I want to open the homepage and quickly understand whose wedding this is, so I feel welcomed and informed.
2. As a guest, I want to see all event names in one place (Engagement, Mehendi, Haldi, Sangeet, Wedding Ceremony, Reception), so I can plan attendance.
3. As a guest, I want each event page/card to show date, time, venue, map link, and dress code, so I know how to prepare.
4. As a guest, I want to browse wedding photos by event, so I can relive and share memories.
5. As an out-of-town guest, I want suggested hotels and transport notes, so I can plan travel smoothly.
6. As a guest, I want an RSVP link, so I can confirm attendance without calling.
7. As a maintainer, I want to update event details and images by editing files in GitHub, so content management stays simple.
8. As a maintainer, I want predictable page templates and structured content files, so updates are less error-prone.

---

## 5) Information Architecture / Sitemap

```text
/
├── Home
│   ├── Hero
│   ├── Couple Introduction
│   ├── Quick Links (Events, Gallery, RSVP, Travel)
│   └── Countdown (optional)
├── Events
│   ├── Engagement
│   ├── Mehendi
│   ├── Haldi
│   ├── Sangeet
│   ├── Wedding Ceremony
│   └── Reception
├── Gallery
│   ├── Highlights
│   └── Event-wise Albums (optional)
├── RSVP (optional)
│   └── External Form Redirect / Embedded Link
├── Travel & Stay (optional)
│   ├── Getting There
│   ├── Recommended Hotels
│   └── Local Transport Tips
└── FAQ / Contact (optional)
    ├── Common Questions
    └── Contact Details
```

### Navigation Requirements
- Sticky top navigation on desktop.
- Collapsible hamburger menu on mobile.
- Prominent CTA buttons for **Events**, **Gallery**, and **RSVP**.

---

## 6) Functional Requirements

### 6.1 Homepage
- Must include a hero section with:
  - Couple names
  - Wedding tagline/short message
  - Optional wedding date range
  - Primary CTA buttons (View Events, View Gallery, RSVP)
- Must include a short couple introduction (2–5 short paragraphs or equivalent card layout).
- Should include one featured image.

### 6.2 Events Section
- Must include all six core Indian wedding events:
  - Engagement
  - Mehendi
  - Haldi
  - Sangeet
  - Wedding Ceremony
  - Reception
- For each event, must display:
  - Event name
  - Date (with day of week)
  - Start time (and end time if available)
  - Venue name and full address
  - Clickable map link
  - Dress code
  - Optional note (e.g., "Arrive 30 mins early")
- Should support chronological sorting.
- Should support desktop card view + mobile stacked layout.

### 6.3 Gallery
- Must support image grid with responsive thumbnails.
- Must support full-size lightbox/modal view.
- Should allow grouping by event.
- Should optimize image loading (compressed assets, lazy loading).
- Should include alt text for accessibility.

### 6.4 RSVP (Optional)
- Should provide external RSVP form link (e.g., Google Form, Typeform, Airtable Form).
- Must clearly indicate user is leaving the wedding site.
- Should include fallback contact instructions for guests unable to submit online.

### 6.5 Travel & Stay (Optional)
- Should provide nearest airports/railway stations.
- Should list recommended hotels across budget tiers.
- Should include venue-to-hotel transport notes.
- Should include emergency/local contact details.

### 6.6 Content Management
- Maintainer should be able to update content without changing core layout code.
- Event data should be centralized in one structured file (JSON/YAML/Markdown frontmatter).
- Gallery image references should be maintainable via folder conventions and metadata.

### 6.7 Accessibility and Usability
- Must be keyboard navigable.
- Must maintain readable contrast ratios.
- Must provide semantic headings and landmarks.
- Must have touch-friendly controls on mobile.

---

## 7) Design Requirements

### Visual Tone
- Elegant, warm, festive, modern.
- Indian wedding-inspired accents without visual clutter.

### Style Direction
- Color palette: warm neutrals + celebratory accent colors (e.g., maroon, gold, deep green, saffron).
- Typography: one expressive heading font + one highly readable body font.
- Use whitespace and card layouts for clarity.
- Use subtle animation/motion (no heavy effects that reduce performance).

### UI Components
- Hero banner
- Event cards/timeline blocks
- Gallery grid + lightbox
- CTA buttons
- Section dividers/motifs (optional Indian pattern accents)

### Responsive Design
- Mobile-first breakpoints.
- No horizontal overflow on common devices.
- Core actions reachable within one-thumb interaction zones where practical.

---

## 8) Content Requirements

### Content Inventory
1. **Homepage**
   - Couple names
   - Intro text
   - Hero image
   - Key CTAs
2. **Events**
   - 6 required event entries with complete logistics
3. **Gallery**
   - Curated compressed images
   - Optional captions per image/event
4. **RSVP (optional)**
   - Form link + instructions
5. **Travel & Stay (optional)**
   - Transport options, hotel list, local tips
6. **Footer**
   - Family contact / coordinator info (optional)
   - Last updated date

### Content Quality Standards
- Dates/times must include timezone context when relevant.
- Venue addresses must be copy-paste friendly.
- Language should be warm, concise, and inclusive.
- Avoid overlong paragraphs; prioritize scan-friendly sections.

---

## 9) Technical Requirements (GitHub-hosted Static Website)

### Hosting & Deployment
- Must deploy on **GitHub Pages**.
- Source can be:
  - root branch static files, or
  - generated static site from `/docs` or a build output branch.
- Must support custom domain later (optional).

### Recommended Stack
- Static site approach preferred:
  - Plain HTML/CSS/JS **or**
  - Jekyll/Hugo/Eleventy/Astro static export
- No server-side runtime dependencies in production.

### Repository Structure (Suggested)
```text
/ (repo root)
├── index.html
├── events.html
├── gallery.html
├── travel.html (optional)
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   │   ├── hero/
│   │   ├── events/
│   │   └── gallery/
│   └── data/
│       ├── events.json
│       ├── couple.json
│       └── travel.json (optional)
├── CNAME (optional)
└── README.md
```

### Performance
- Target Lighthouse performance score: 85+ on mobile for MVP.
- Compress and resize images before commit.
- Use lazy-loading for below-the-fold gallery images.
- Minimize render-blocking assets.

### SEO & Social
- Basic metadata per page (title, description).
- Open Graph tags for share previews.
- Favicon and social preview image.

### Security & Privacy
- No sensitive personal data in repository.
- If publishing contact numbers, do so intentionally and minimally.
- External links must use `rel="noopener noreferrer"` where appropriate.

### Maintainability
- Clear README with update instructions.
- Centralized editable data files for events/travel details.
- Naming conventions for image files and folders.

---

## 10) Risks / Edge Cases

1. **Frequent schedule changes** close to wedding dates.
   - Mitigation: centralized event data file + visible "Last updated" timestamp.
2. **Large image sizes causing slow mobile loads**.
   - Mitigation: enforce image compression and max dimensions.
3. **Guests with low connectivity**.
   - Mitigation: lightweight pages, compressed assets, minimal JS.
4. **Broken external RSVP/form/map links**.
   - Mitigation: link validation checklist before publishing updates.
5. **Non-technical maintainers making content mistakes**.
   - Mitigation: template-driven content + contributor guide in README.
6. **Accessibility gaps** for older guests.
   - Mitigation: high contrast, larger text defaults, clear navigation labels.

---

## 11) MVP Scope

### In Scope (MVP)
1. Mobile-friendly homepage with hero + couple intro.
2. Events section with all six required Indian wedding events and mandatory fields:
   - Date, time, venue, dress code.
3. Responsive gallery with at least one album/highlights view.
4. Optional RSVP external link section (if available at launch).
5. GitHub Pages deployment with documented update workflow.
6. Basic metadata, accessibility baseline, and performance optimizations.

### Out of Scope (MVP)
- Custom RSVP backend
- Guest login/private albums
- Multi-language support
- Live streaming integration
- Advanced animations or interactive storytelling

---

## 12) Future Enhancements

1. Multi-language support (e.g., English + regional language).
2. Personalized schedules by guest group.
3. Private gallery or passcode-protected albums.
4. Wedding party bios and family introductions.
5. Interactive map with multiple venue pins.
6. Countdown widget and event reminders.
7. Add-to-calendar (.ics / Google Calendar) per event.
8. Post-wedding thank-you page and video highlights.
9. PWA offline caching for low-connectivity scenarios.

---

## 13) Success Metrics

### Launch Readiness Metrics
- All six required events are published with complete details.
- No major mobile layout issues across common viewport sizes.
- All critical links (maps, RSVP, navigation) functional.

### Adoption Metrics
- Number of unique visitors in pre-wedding period.
- Percentage of visits from mobile devices.
- Click-through rate on RSVP link.
- Time spent on Events and Gallery pages.

### Quality Metrics
- Lighthouse mobile performance >= 85.
- Zero critical accessibility issues (manual + automated checks).
- Content update turnaround time (target: < 15 minutes for event edits).

---

## Delivery Checklist (for Engineering Build)

- [ ] Implement sitemap and required pages/sections.
- [ ] Add structured event data file and rendering logic.
- [ ] Implement responsive gallery with lazy loading.
- [ ] Ensure mobile-first responsive behavior.
- [ ] Add optional RSVP + optional travel/stay modules.
- [ ] Set up GitHub Pages deployment.
- [ ] Add README with maintainer instructions.
- [ ] Run performance/accessibility pass before launch.
