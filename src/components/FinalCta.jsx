import { Link } from "react-router-dom";

function FinalCta() {
  return (
    <section className="pb-20 pt-6">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-brand-navy px-8 py-10 text-white shadow-card sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="eyebrow text-white/80">Ready to reserve?</p>
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Graduation is expensive enough. Start with a simpler rental option.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              Submit a request, review your program details, and plan ahead with a polished student-friendly service model.
            </p>
          </div>
          <Link to="/booking" className="primary-button mt-6 bg-white text-brand-navy hover:bg-brand-cream lg:mt-0">
            Start a Booking
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
