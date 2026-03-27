function GalleryModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-900/85 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl animate-fade-up" role="dialog" aria-modal="true" aria-label={image.alt}>
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full border border-gold-300/40 bg-ivory-50/95 px-3 py-1 text-sm font-semibold text-maroon-700"
          onClick={onClose}
        >
          Close
        </button>
        <img src={image.src} alt={image.alt} className="max-h-[85vh] w-full rounded-2xl object-cover shadow-premium" />
        {image.caption ? <p className="mt-2 px-2 text-sm text-ivory-50">{image.caption}</p> : null}
      </div>
    </div>
  );
}

export default GalleryModal;
