function EventCard({ event }) {
  return (
    <article className="group rounded-3xl border border-gold-300/40 bg-white/95 p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-premium md:p-6">
      <div className="mb-4 inline-block rounded-full bg-maroon-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-maroon-700">
        {event.dressCode}
      </div>
      <h3 className="font-heading text-2xl leading-tight text-maroon-700">{event.name}</h3>
      <p className="mt-3 text-sm font-medium text-emerald-700">
        {event.date} • {event.time}
      </p>
      <p className="mt-1 text-sm text-maroon-800/85">{event.venue}</p>
      <p className="mt-4 text-sm leading-relaxed text-maroon-800">{event.description}</p>
      <a
        href={event.mapLink}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-maroon-900 transition group-hover:animate-soft-float hover:bg-gold-600 hover:text-ivory-50"
      >
        Open Map
      </a>
    </article>
  );
}

export default EventCard;
