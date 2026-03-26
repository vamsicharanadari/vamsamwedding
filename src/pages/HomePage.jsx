import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { couple } from '../data/siteData';

function HomePage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <section
        className="relative overflow-hidden rounded-[2rem] bg-cover bg-center shadow-premium"
        style={{ backgroundImage: `url(${couple.heroImage})` }}
      >
        <div className="bg-hero-overlay px-6 py-16 text-ivory-50 md:px-12 md:py-24">
          <p className="inline-block rounded-full border border-gold-100/40 bg-maroon-900/40 px-4 py-1 text-[11px] uppercase tracking-[0.28em] text-gold-100">
            Together with our families
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight md:text-7xl">
            {couple.groom} <span className="text-gold-300">&</span> {couple.bride}
          </h1>
          <p className="mt-4 text-lg md:text-2xl">Wedding Celebration • {couple.weddingDate}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory-100 md:text-base">{couple.welcomeMessage}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-maroon-900 transition hover:-translate-y-0.5 hover:bg-gold-600 hover:text-ivory-50"
            >
              View Events
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-ivory-50/70 bg-ivory-50/10 px-6 py-2.5 text-sm font-semibold transition hover:bg-ivory-50 hover:text-maroon-700"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-gold-300/40 bg-white/90 p-5 shadow-card md:grid-cols-2 md:gap-8 md:p-8">
        <SectionTitle
          title="Welcome"
          subtitle="We cannot wait to share this beautiful journey and celebrate each ritual with you. Your love and blessings mean the world to us."
        />
        <div className="self-center rounded-2xl border border-floral-200/70 bg-gradient-to-br from-ivory-100 via-ivory-50 to-floral-200/40 p-5 text-sm leading-relaxed text-maroon-800">
          <p>
            Please check the Events page for ceremony timelines and dress codes. Visit Travel & Stay for hotel blocks and shuttle details.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
