# Indian Wedding Website (React + Vite + Tailwind)

A static, GitHub Pages–compatible wedding website with five pages:
- Home
- Events
- Gallery
- Travel & Stay
- Contact

## Setup

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

This project uses a relative Vite base (`base: './'`) so the built site works as static files.

## Folder structure

```text
.
├── public
│   └── images
│       ├── haldi
│       ├── mehendi
│       ├── reception
│       ├── sangeet
│       └── wedding
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components
    │   ├── EventCard.jsx
    │   ├── FaqItem.jsx
    │   ├── Footer.jsx
    │   ├── GalleryModal.jsx
    │   ├── HotelCard.jsx
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   └── SectionTitle.jsx
    ├── data
    │   ├── galleryData.js
    │   └── siteData.js
    └── pages
        ├── ContactPage.jsx
        ├── EventsPage.jsx
        ├── GalleryPage.jsx
        ├── HomePage.jsx
        └── TravelStayPage.jsx
```

## Customization notes

Search `TODO:` comments in `src/data/siteData.js` and `src/pages/HomePage.jsx` / `src/components/Navbar.jsx` to quickly replace names, dates, venues, and photos.

### Gallery image management (GitHub-friendly)

The gallery is designed so a non-technical person only needs to:

1. Add image files into one of these folders:
   - `public/images/mehendi`
   - `public/images/haldi`
   - `public/images/sangeet`
   - `public/images/wedding`
   - `public/images/reception`
2. Open `src/data/galleryData.js`.
3. Add one entry in `galleryImages` for each photo.

Use this format:

```js
{
  id: 'mehendi-1',
  eventId: 'mehendi',
  src: '/images/mehendi/mehendi-01.jpg',
  caption: 'Bride getting intricate mehendi done',
  alt: 'Close-up of bridal mehendi designs on hands'
}
```

Notes:
- `eventId` must match one of: `mehendi`, `haldi`, `sangeet`, `wedding`, `reception`.
- `src` must start with `/images/...` and point to a real file under `public/images`.
- `alt` should describe what is visible in the photo for accessibility.
