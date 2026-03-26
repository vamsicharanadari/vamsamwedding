function GalleryModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-800/85 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" role="dialog" aria-modal="true" aria-label={image.alt}>
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-ivory-50 px-3 py-1 text-sm font-semibold text-maroon-700"
          onClick={onClose}
        >
          Close
        </button>
        <img src={image.url} alt={image.alt} className="max-h-[85vh] w-full rounded-2xl object-cover" />
      </div>
    </div>
  );
}

export default GalleryModal;
