import SectionTitle from '../components/SectionTitle';
import { contacts } from '../data/siteData';

function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Contact"
        subtitle="Reach out to our families or coordinator for travel, schedule, and on-ground support."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {contacts.family.map((person) => (
          <article key={person.phone} className="rounded-xl border border-gold-300/40 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-maroon-700/80">{person.role}</p>
            <h3 className="mt-1 font-heading text-2xl text-maroon-700">{person.name}</h3>
            <a href={`tel:${person.phone}`} className="mt-2 inline-block text-sm text-maroon-800 underline">
              {person.phone}
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-gold-300/40 bg-maroon-700 p-6 text-ivory-50">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Wedding coordinator</p>
        <h3 className="mt-2 font-heading text-3xl">{contacts.coordinator.name}</h3>
        <p className="mt-2 text-sm">
          Phone:{' '}
          <a href={`tel:${contacts.coordinator.phone}`} className="underline decoration-gold-300">
            {contacts.coordinator.phone}
          </a>
        </p>
        <p className="mt-1 text-sm">
          Email:{' '}
          <a href={`mailto:${contacts.coordinator.email}`} className="underline decoration-gold-300">
            {contacts.coordinator.email}
          </a>
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
