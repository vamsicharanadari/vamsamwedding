function HotelCard({ hotel }) {
  return (
    <article className="rounded-2xl border border-gold-300/40 bg-white/95 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <h3 className="font-heading text-2xl text-maroon-700">{hotel.name}</h3>
      <p className="mt-2 text-sm text-maroon-800/80">{hotel.distance}</p>
      <p className="text-sm text-maroon-800/80">{hotel.priceRange}</p>
      <a
        href={hotel.link}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-emerald-700 underline decoration-gold-500 decoration-2 underline-offset-4"
      >
        View booking options
      </a>
    </article>
  );
}

export default HotelCard;
