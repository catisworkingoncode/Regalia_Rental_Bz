import FinalCta from "../components/FinalCta";
import SectionHeading from "../components/SectionHeading";

const cards = [
  {
    title: "Business story",
    body:
      "RentRegalia started with a simple observation: many students spend a lot on graduation regalia even though they only wear it once. For graduate students, that cost can feel especially frustrating when tuition, fees, and end-of-semester expenses are already high."
  },
  {
    title: "The problem being solved",
    body:
      "Graduation costs add up quickly. Some students order late, need only part of their regalia, or are unsure which items match their program requirements. RentRegalia imagines a smaller, more flexible campus-based alternative."
  },
  {
    title: "Mission statement",
    body:
      "Our mission is to make graduation preparation more affordable, less wasteful, and easier to manage for students who need a school-compliant option without unnecessary extra cost."
  },
  {
    title: "Sustainability angle",
    body:
      "A rental model extends the life of each item and encourages reuse, which reduces waste and makes ceremonial clothing more practical for campuses where students want more responsible options."
  }
];

function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="About RentRegalia"
            title="A student startup idea built around affordability and graduation access"
            description="RentRegalia is designed as a campus-focused rental service that helps students access graduation regalia without paying full retail prices for one day of use."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="card-surface p-7">
                <h2 className="text-2xl font-bold text-brand-navy">{card.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-16 sm:py-20">
        <div className="section-shell">
          <div className="card-surface grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Why it matters</p>
              <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
                Graduation should feel exciting, not financially frustrating.
              </h2>
            </div>
            <div className="space-y-4 leading-7 text-slate-600">
              <p>
                For students balancing classes, jobs, and graduation deadlines, a service like RentRegalia can make a real difference. It supports students who only need regalia for one day, students who need partial items like a hood or stole, and students who need a backup option when plans change late.
              </p>
              <p>
                RentRegalia does not claim to support every school universally. Available options depend on current inventory and supported campus needs, so students should verify their program requirements before finalizing a rental.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Why students care"
              title="A more accessible way to participate in graduation"
              description="A campus-focused rental service can make graduation more accessible for students who want to participate fully without adding another major expense."
            />
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              It also gives students a realistic place to start when they are unsure about pickup timing, item selection, or last-minute ceremony prep.
            </p>
          </div>
          <aside className="rounded-[2rem] border border-slate-200 bg-brand-cream p-8 shadow-soft">
            <p className="eyebrow">Responsible note</p>
            <h2 className="text-3xl font-bold text-brand-navy">Please verify your program requirements.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              RentRegalia is campus-focused and aims to offer school-compliant options for supported programs, not every school universally.
            </p>
          </aside>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

export default AboutPage;
