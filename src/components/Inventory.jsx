import { inventory } from "../data/siteData";
import SectionHeading from "./SectionHeading";

function Inventory() {
  return (
    <section className="bg-white/60 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured inventory"
          title="Example items available to rent"
          description="Inventory is campus-focused and may vary by program. Please verify your program requirements."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {inventory.map((item) => (
            <article key={`${item.name}-${item.details}`} className="card-surface p-6">
              <span className="inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                {item.status}
              </span>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{item.name}</h3>
              <p className="mt-1 font-medium text-slate-500">{item.details}</p>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inventory;
