import FaqItem from '../components/FaqItem';
import HotelCard from '../components/HotelCard';
import SectionTitle from '../components/SectionTitle';
import { travelInfo } from '../data/siteData';

function TravelStayPage() {
  return (
    <div className="space-y-10">
      <section>
        <SectionTitle title="Travel & Stay" subtitle="Everything you need for a smooth and joyful trip." />
        <div className="grid gap-4 md:grid-cols-3">
          {travelInfo.hotels.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gold-300/40 bg-white p-5">
        <h3 className="font-heading text-2xl text-maroon-700">Transport Information</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-maroon-800">
          {travelInfo.transport.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-4 font-heading text-2xl text-maroon-700">Guest FAQs</h3>
        <div className="space-y-3">
          {travelInfo.faq.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TravelStayPage;
