/**
 * Gallery content source of truth.
 *
 * Non-technical update steps:
 * 1) Add image files into the matching folder under `public/images/<event>/`.
 * 2) Add one object to `galleryImages` with:
 *    - `eventId`: event folder name (mehendi/haldi/sangeet/wedding/reception)
 *    - `src`: path starting with `/images/...`
 *    - `caption`: short card/modal text
 *    - `alt`: accessibility description
 * 3) Save and redeploy.
 */

export const galleryEvents = [
  { id: 'mehendi', name: 'Mehendi' },
  { id: 'haldi', name: 'Haldi' },
  { id: 'sangeet', name: 'Sangeet' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'reception', name: 'Reception' }
];

export const galleryImages = [
  // Example:
  // {
  //   id: 'mehendi-1',
  //   eventId: 'mehendi',
  //   src: '/images/mehendi/mehendi-01.jpg',
  //   caption: 'Bride getting intricate mehendi done',
  //   alt: 'Close-up of bridal mehendi designs on hands'
  // }
];
