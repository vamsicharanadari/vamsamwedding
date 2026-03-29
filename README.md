# Wedding Website (React + Vite + Tailwind)

A beginner-friendly, customizable wedding website template for sharing your celebration details with guests.

This project is a **single-page React app** with multiple sections/pages (Home, Events, Gallery, Travel & Stay, Contact) and is set up to work well with **GitHub Pages**.

---

## Project Overview

This website helps you publish all key wedding information in one place:

- Couple introduction and welcome message
- Event schedule (Mehendi, Haldi, Sangeet, Wedding, Reception)
- Photo gallery by event
- Travel, hotel, and transport information
- Family/coordinator contact details

All major content is stored in simple data files so you can update text without changing core UI components.

---

## Tech Stack

- **React 18** for UI
- **React Router** for page routing
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **ESLint** for linting

Main configuration and entry files:

- `package.json` for scripts/dependencies
- `vite.config.js` for build/base config
- `src/main.jsx` + `src/App.jsx` for app bootstrap

---

## Local Development (Step-by-Step)

### Prerequisites

Install:

- **Node.js 18+** (recommended: latest LTS)
- **npm** (comes with Node.js)

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

Build output is generated in `dist/`.

### 4) Preview production build locally

```bash
npm run preview
```

### 5) Run linter (optional but recommended)

```bash
npm run lint
```

---

## How to Update Couple Names, Dates, Venues, and Content

Most editable content is in:

- `src/data/siteData.js`

Open that file and update the exported objects:

### `couple`

Edit:

- `bride`
- `groom`
- `weddingDate`
- `heroImage`
- `welcomeMessage`
- `coupleStory`

### `events`

Each event has:

- `id`
- `name`
- `date`
- `time`
- `venue`
- `mapLink`
- `dressCode`
- `description`

### `travelInfo`

Update:

- `hotels` list
- `transport` notes
- `faq` items

### `contacts`

Update:

- Family contact names/roles/phones
- Coordinator name/phone/email

> Tip: Keep event `id` values stable (`mehendi`, `haldi`, `sangeet`, `wedding`, `reception`) since gallery filtering relies on these IDs.

---

## How to Add Event Photos

Photo folders are under:

- `public/images/mehendi`
- `public/images/haldi`
- `public/images/sangeet`
- `public/images/wedding`
- `public/images/reception`

### Steps

1. Copy your image files into the matching folder above.
2. Open `src/data/galleryData.js`.
3. Add one object to `galleryImages` per photo.

Example:

```js
{
  id: 'mehendi-1',
  eventId: 'mehendi',
  src: '/images/mehendi/mehendi-01.jpg',
  caption: 'Bride getting intricate mehendi done',
  alt: 'Close-up of bridal mehendi designs on hands'
}
```

### Rules to avoid broken images

- `eventId` must match one of the event IDs.
- `src` must begin with `/images/...` and point to a real file.
- Use meaningful `alt` text for accessibility.

---

## How to Deploy to GitHub Pages

This project already uses `base: './'` in `vite.config.js`, which helps static hosting compatibility.

### Option A (Recommended): Deploy `dist/` to `gh-pages` branch

1. Build the project:

   ```bash
   npm run build
   ```

2. Push the contents of `dist/` to a `gh-pages` branch (via your preferred method/tool).
3. In GitHub repo settings:
   - Go to **Settings → Pages**
   - Set source to `gh-pages` branch (root)

### Option B: Deploy from `docs/` on `main`

1. Build project: `npm run build`
2. Copy `dist/*` into a `docs/` folder at repo root.
3. Commit and push.
4. In **Settings → Pages**, choose:
   - Branch: `main`
   - Folder: `/docs`

### After deployment

- Wait 1–5 minutes for first publish.
- Hard refresh browser (`Ctrl/Cmd + Shift + R`) if updates do not appear.

---

## Folder Structure Overview

```text
.
├── public/
│   └── images/
│       ├── mehendi/
│       ├── haldi/
│       ├── sangeet/
│       ├── wedding/
│       └── reception/
├── src/
│   ├── components/      # Reusable UI blocks (cards, navbar, footer, etc.)
│   ├── data/            # Main editable content
│   │   ├── siteData.js
│   │   └── galleryData.js
│   ├── pages/           # Route-level pages
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Notes for Future Customization

- **Branding/theme:** update colors, fonts, spacing in Tailwind styles and component classes.
- **Add/remove events:** update `events` in `siteData.js` and keep gallery event IDs in sync.
- **Custom domain:** after GitHub Pages is live, you can add a custom domain in repo settings.
- **SEO basics:** update page title/meta in `index.html`.
- **Performance:** compress photos before upload (WebP/JPEG optimized) to improve load speed.
- **Content workflow:** make small changes, test with `npm run dev`, then deploy.

---

## Quick Start Checklist

- [ ] Update couple names and story in `src/data/siteData.js`
- [ ] Update event dates/times/venues/map links
- [ ] Update travel/hotel/contact details
- [ ] Add gallery photos to `public/images/*`
- [ ] Add `galleryImages` entries in `src/data/galleryData.js`
- [ ] Run `npm run build`
- [ ] Deploy to GitHub Pages

If you want, I can also generate a copy-paste GitHub Actions workflow for automatic GitHub Pages deployment on every push.
