import { pricing } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function Pricing() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sample pricing"
          title="Clear demo prices for a student-friendly rental model"
          description="These prices are demo sample prices for a class project and presentation."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pricing.map((item) => (
            <article key={item.title} className="card-surface p-6 text-center">
              <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-4 text-4xl font-black text-brand-navy">{item.price}</p>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
