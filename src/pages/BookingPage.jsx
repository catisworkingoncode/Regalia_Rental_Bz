import BookingForm from "../components/BookingForm";
import SectionHeading from "../components/SectionHeading";

function BookingPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Rental request"
          title="Book your graduation rental"
          description="Use this front-end-only demo form to request sample regalia, compare add-ons, and see a live mock estimate."
        />
        <div className="mt-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
