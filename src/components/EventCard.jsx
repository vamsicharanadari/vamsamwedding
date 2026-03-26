function EventCard({ event }) {
  return (
    <article className="rounded-2xl border border-gold-300/40 bg-white p-5 shadow-card">
      <div className="mb-3 inline-block rounded-full bg-maroon-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-maroon-700">
        {event.dressCode}
      </div>
      <h3 className="font-heading text-2xl text-maroon-700">{event.name}</h3>
      <p className="mt-2 text-sm text-maroon-800/80">
        {event.date} • {event.time}
      </p>
      <p className="mt-1 text-sm text-maroon-800/80">{event.venue}</p>
      <p className="mt-4 text-sm leading-relaxed text-maroon-800">{event.description}</p>
      <a
        href={event.mapLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-maroon-800 transition hover:bg-gold-600 hover:text-ivory-50"
      >
        Open Map
      </a>
    </article>
  );
}

export default EventCard;
