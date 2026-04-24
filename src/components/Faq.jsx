import { useState } from "react";
import { Link } from "react-router-dom";
import { faqItems } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function Faq({ preview = false }) {
  const items = preview ? faqItems.slice(0, 3) : faqItems;
  const [openIndex, setOpenIndex] = useState(0);

  if (preview) {
    return (
      <section className="bg-white/60 py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ preview" title="Helpful answers before you book" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.question} className="card-surface p-6">
                <h3 className="text-lg font-bold text-brand-navy">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/faq" className="secondary-button">
              View Full FAQ
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straightforward answers about rentals, school-compliant options, deposits, and what to expect."
          />
          <div className="mt-8 space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={item.question} className="card-surface overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold text-brand-navy"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="text-2xl leading-none text-brand-blue">{isOpen ? "-" : "+"}</span>
                    </button>
                  </h3>
                  {isOpen ? <p className="px-6 pb-6 leading-7 text-slate-600">{item.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>

        <aside className="card-surface h-fit p-8">
          <p className="eyebrow">Need a quick next step?</p>
          <h2 className="text-3xl font-bold text-brand-navy">Verify your details, then book with confidence.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            RentRegalia is campus-focused. We aim to offer school-compliant options, but you should always verify your program requirements before final confirmation.
          </p>
          <Link to="/booking" className="primary-button mt-6">
            Go to Booking
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Faq;
