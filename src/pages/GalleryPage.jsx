import { useMemo, useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import SectionTitle from '../components/SectionTitle';
import { events, galleryImages } from '../data/siteData';

function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((image) => image.eventId === filter)),
    [filter]
  );

  return (
    <section>
      <SectionTitle title="Photo Gallery" subtitle="Relive every sparkle of mehendi, sangeet, and the wedding ceremony." />

      <div className="mb-5 flex flex-wrap gap-2 md:gap-3">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            filter === 'all' ? 'bg-maroon-700 text-ivory-50 shadow-card' : 'bg-white text-maroon-700 hover:bg-maroon-100'
          }`}
        >
          All
        </button>
        {events.map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() => setFilter(event.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === event.id ? 'bg-maroon-700 text-ivory-50 shadow-card' : 'bg-white text-maroon-700 hover:bg-maroon-100'
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {visibleImages.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group overflow-hidden rounded-2xl border border-gold-300/30 bg-white shadow-sm"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-44 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110 md:h-60"
            />
          </button>
        ))}
      </div>

      <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}

export default GalleryPage;
