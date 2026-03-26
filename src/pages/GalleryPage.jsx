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
      <SectionTitle
        title="Photo Gallery"
        subtitle="Relive every sparkle of mehendi, sangeet, and the wedding ceremony."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            filter === 'all' ? 'bg-maroon-700 text-ivory-50' : 'bg-white text-maroon-700'
          }`}
        >
          All
        </button>
        {events.map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() => setFilter(event.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              filter === event.id ? 'bg-maroon-700 text-ivory-50' : 'bg-white text-maroon-700'
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {visibleImages.map((image) => (
          <button
            key={image.id}
            type="button"
            className="overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-44 w-full object-cover transition duration-500 hover:scale-110 md:h-56"
            />
          </button>
        ))}
      </div>

      <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}

export default GalleryPage;
