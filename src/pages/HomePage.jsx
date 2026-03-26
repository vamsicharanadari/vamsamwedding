import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { couple } from '../data/siteData';

function HomePage() {
  return (
    <div className="space-y-10">
      <section
        className="overflow-hidden rounded-3xl bg-hero-overlay bg-cover bg-center"
        style={{ backgroundImage: `url(${couple.heroImage})` }}
      >
        <div className="bg-hero-overlay px-6 py-20 text-ivory-50 md:px-12 md:py-28">
          {/* TODO: Customize bride/groom names and official wedding date. */}
          <p className="text-sm uppercase tracking-[0.3em] text-gold-100">Together with our families</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            {couple.groom} <span className="text-gold-300">&</span> {couple.bride}
          </h1>
          <p className="mt-3 text-xl md:text-2xl">Wedding Celebration • {couple.weddingDate}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory-100 md:text-base">
            {couple.welcomeMessage}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="rounded-md bg-gold-500 px-5 py-2 text-sm font-semibold text-maroon-800 hover:bg-gold-600 hover:text-ivory-50"
            >
              View Events
            </Link>
            <Link
              to="/gallery"
              className="rounded-md border border-ivory-50 px-5 py-2 text-sm font-semibold hover:bg-ivory-50 hover:text-maroon-700"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-gold-300/40 bg-white p-5 md:grid-cols-2 md:p-8">
        <SectionTitle
          title="Welcome"
          subtitle="We cannot wait to share this beautiful journey and celebrate each ritual with you. Your love and blessings mean the world to us."
        />
        <div className="self-center rounded-xl bg-ivory-100 p-4 text-sm leading-relaxed text-maroon-800">
          <p>
            Please check the Events page for ceremony timelines and dress codes. Visit Travel & Stay for hotel blocks and shuttle details.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
