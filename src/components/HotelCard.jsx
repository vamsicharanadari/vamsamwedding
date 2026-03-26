function HotelCard({ hotel }) {
  return (
    <article className="rounded-xl border border-gold-300/40 bg-white p-4">
      <h3 className="font-heading text-xl text-maroon-700">{hotel.name}</h3>
      <p className="mt-2 text-sm text-maroon-800/80">{hotel.distance}</p>
      <p className="text-sm text-maroon-800/80">{hotel.priceRange}</p>
      <a
        href={hotel.link}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-maroon-700 underline decoration-gold-500 decoration-2 underline-offset-4"
      >
        View booking options
      </a>
    </article>
  );
}

export default HotelCard;
