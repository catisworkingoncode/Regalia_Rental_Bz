import { howItWorks } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps to graduation day"
          description="The process is designed to stay clear and manageable for busy students."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {howItWorks.map((item) => (
            <article key={item.step} className="card-surface p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand-gold/20 text-sm font-black text-brand-navy">
                {item.step}
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

export default HowItWorks;
