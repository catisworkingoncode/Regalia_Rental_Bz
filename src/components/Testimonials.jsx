import { useEffect, useState } from "react";
import { testimonials } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = testimonials[activeIndex];

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Student feedback"
          title="What a realistic campus launch could sound like"
          description="These testimonials are fictional, but written to feel believable for a student startup demo."
          centered
        />
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex w-full max-w-4xl items-center gap-3">
            <button
              type="button"
              className="hidden h-12 w-12 shrink-0 rounded-full border border-slate-300 bg-white text-xl font-bold text-brand-navy shadow-soft md:inline-flex md:items-center md:justify-center"
              aria-label="Previous testimonial"
              onClick={() =>
                setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
              }
            >
              {"<"}
            </button>
            <article className="card-surface flex-1 p-8 text-center sm:p-10">
              <p className="text-lg leading-8 text-slate-600 sm:text-xl">&quot;{activeItem.quote}&quot;</p>
              <h3 className="mt-6 text-xl font-bold text-brand-navy">{activeItem.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {activeItem.title}
              </p>
            </article>
            <button
              type="button"
              className="hidden h-12 w-12 shrink-0 rounded-full border border-slate-300 bg-white text-xl font-bold text-brand-navy shadow-soft md:inline-flex md:items-center md:justify-center"
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
            >
              {">"}
            </button>
          </div>
          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? "bg-brand-gold" : "bg-slate-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
