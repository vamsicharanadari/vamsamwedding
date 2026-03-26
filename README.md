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
