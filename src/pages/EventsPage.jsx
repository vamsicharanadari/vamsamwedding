import EventCard from '../components/EventCard';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/siteData';

function EventsPage() {
  return (
    <section>
      <SectionTitle
        title="Wedding Events"
        subtitle="Plan your attendance with complete details for every ceremony and celebration."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
