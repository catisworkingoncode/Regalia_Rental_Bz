import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="pb-16 pt-12 sm:pb-20 sm:pt-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Campus-focused graduation support</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Look ceremony-ready without buying regalia you only wear once.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            RentRegalia helps students rent school-compliant options for graduation at a lower cost.
            It is a practical way to save money, reduce waste, and still show up prepared for the big day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/booking" className="primary-button">
              Reserve Your Rental
            </Link>
            <a href="#how-it-works" className="secondary-button">
              See How It Works
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <li className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              Budget-friendly sample pricing
            </li>
            <li className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              Helpful for one-day or partial regalia needs
            </li>
            <li className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              Emergency support for late orders
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-0 h-64 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="relative card-surface mx-auto max-w-md p-8">
            <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Most Requested
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy">Master&apos;s Rental Set</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Gown rental, hood guidance, pickup instructions, and easy return support in one simple campus-friendly process.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-navy">
                Sample Price $20
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-navy">
                Deposit $10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
