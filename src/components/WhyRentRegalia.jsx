import { whyRentRegalia } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function WhyRentRegalia() {
  return (
    <section className="bg-white/60 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why RentRegalia"
          title="A practical option for students who want less stress"
          description="Built around affordability, sustainability, and last-minute graduation support."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whyRentRegalia.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-gold/20 text-sm font-black text-brand-navy">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRentRegalia;
