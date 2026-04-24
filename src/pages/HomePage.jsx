import { Link } from "react-router-dom";
import AvailabilityCalendar from "../components/AvailabilityCalendar";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Inventory from "../components/Inventory";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import WhyRentRegalia from "../components/WhyRentRegalia";

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyRentRegalia />
      <Pricing />
      <AvailabilityCalendar />
      <Inventory />
      <Testimonials />
      <Faq preview />
      <section className="section-shell pb-8">
        <div className="card-surface flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Need to book today?</p>
            <h2 className="text-3xl font-bold text-brand-navy">Emergency support is built into the demo.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              If you ordered late or only need a partial item like a hood or stole, RentRegalia is designed to feel practical and believable for a real campus launch.
            </p>
          </div>
          <Link to="/booking" className="primary-button">
            Start Your Request
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export default HomePage;
