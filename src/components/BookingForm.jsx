import { useMemo, useState } from "react";
import { inventory } from "../data/siteData";

const basePricing = {
  rental: 20,
  deposit: 10,
  emergency: 8,
  steaming: 10
};

const initialForm = {
  fullName: "",
  email: "",
  university: "",
  degreeType: "",
  program: "",
  heightRange: "",
  pickupDate: "",
  returnDate: "",
  emergencyKit: false,
  steaming: false,
  notes: ""
};

function BookingForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    let total = basePricing.rental + basePricing.deposit;

    if (formData.emergencyKit) total += basePricing.emergency;
    if (formData.steaming) total += basePricing.steaming;

    return total;
  }, [formData.emergencyKit, formData.steaming]);

  function handleChange(event) {
    const { name, type, checked, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  }

  function validate() {
    const nextErrors = {};
    const requiredFields = [
      "fullName",
      "email",
      "university",
      "degreeType",
      "program",
      "heightRange",
      "pickupDate",
      "returnDate"
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (
      formData.pickupDate &&
      formData.returnDate &&
      formData.returnDate < formData.pickupDate
    ) {
      nextErrors.returnDate = "Return date must be on or after pickup date.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialForm);
  }

  const fields = [
    { label: "Full name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "University", name: "university", type: "text" }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
      <aside className="card-surface h-fit p-8">
        <p className="eyebrow">Sample pricing estimator</p>
        <h2 className="text-3xl font-bold text-brand-navy">Plan your demo total in seconds</h2>
        <p className="mt-4 leading-7 text-slate-600">
          The full set rental is the main $20 offer. If a student only needs one item, a gown, stole, hood, or cap can still be rented separately for $5 each.
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between text-sm">
            <span>Full Set Rental</span>
            <strong>$20</strong>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>Separate Piece Option</span>
            <strong>$5 each</strong>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>Refundable Deposit</span>
            <strong>$10</strong>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>Emergency Kit</span>
            <strong>${formData.emergencyKit ? basePricing.emergency : 0}</strong>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>Steaming</span>
            <strong>${formData.steaming ? basePricing.steaming : 0}</strong>
          </div>
          <div className="mt-5 border-t border-slate-200 pt-5 text-base font-bold text-brand-navy">
            <div className="flex items-center justify-between">
              <span>Estimated Total</span>
              <span>${estimate}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Campus-focused service. We aim to provide school-compliant options, but please verify your program requirements.
        </p>

        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
          <strong className="text-brand-navy">Pickup and drop-off:</strong> ASU W. P. Carey McCord Avnet. Time available from 7am - 9pm.
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-brand-gold/30 bg-brand-cream px-5 py-4 text-sm leading-6 text-slate-700">
          <strong className="text-brand-navy">Payment detail:</strong> This demo currently shows payment by Zelle only. Payment instructions would be shared when availability is confirmed.
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-brand-navy">Example rental options</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {inventory.map((item) => (
              <li key={`${item.name}-${item.details}`} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                {item.name} - {item.details} - $5
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="card-surface p-8">
        <p className="eyebrow">Rental request</p>
        <h2 className="text-3xl font-bold text-brand-navy">Book your graduation rental</h2>
        <p className="mt-4 leading-7 text-slate-600">
          This is a front-end-only demo form for presentation use. Submit your request and a confirmation message will appear on the page.
        </p>

        <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="mb-2 block text-sm font-semibold text-brand-navy">{field.label}</span>
                <input
                  className="input-field"
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
                {errors[field.name] ? (
                  <span className="mt-2 block text-sm text-red-700">{errors[field.name]}</span>
                ) : null}
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Degree type</span>
              <select
                className="input-field"
                name="degreeType"
                value={formData.degreeType}
                onChange={handleChange}
                required
              >
                <option value="">Select degree type</option>
                <option>Master&apos;s</option>
                <option>Bachelor&apos;s</option>
                <option>Doctoral</option>
                <option>Certificate</option>
              </select>
              {errors.degreeType ? <span className="mt-2 block text-sm text-red-700">{errors.degreeType}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">College / program</span>
              <input
                className="input-field"
                name="program"
                type="text"
                value={formData.program}
                onChange={handleChange}
                required
              />
              {errors.program ? <span className="mt-2 block text-sm text-red-700">{errors.program}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Height range</span>
              <select
                className="input-field"
                name="heightRange"
                value={formData.heightRange}
                onChange={handleChange}
                required
              >
                <option value="">Select height range</option>
                <option>Under 5&apos;2&quot;</option>
                <option>5&apos;2&quot; - 5&apos;5&quot;</option>
                <option>5&apos;6&quot; - 5&apos;9&quot;</option>
                <option>5&apos;10&quot; - 6&apos;1&quot;</option>
                <option>Over 6&apos;1&quot;</option>
              </select>
              {errors.heightRange ? <span className="mt-2 block text-sm text-red-700">{errors.heightRange}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Preferred pickup date</span>
              <input
                className="input-field"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
              {errors.pickupDate ? <span className="mt-2 block text-sm text-red-700">{errors.pickupDate}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Preferred return date</span>
              <input
                className="input-field"
                name="returnDate"
                type="date"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
              {errors.returnDate ? <span className="mt-2 block text-sm text-red-700">{errors.returnDate}</span> : null}
            </label>
          </div>

          <fieldset className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <legend className="px-2 text-sm font-semibold text-brand-navy">Add-ons</legend>
            <label className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                name="emergencyKit"
                checked={formData.emergencyKit}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-gold"
              />
              Emergency graduation kit (+$8)
            </label>
            <label className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                name="steaming"
                checked={formData.steaming}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-gold"
              />
              Steaming / prep service (+$10)
            </label>
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-brand-navy">Notes</span>
            <textarea
              className="input-field min-h-32"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Share anything helpful, like hood-only needs, timing concerns, or program details."
            />
          </label>

          <p className="text-sm leading-6 text-slate-500">
            Campus-focused service. We aim to provide school-compliant options, but please verify your program requirements before final confirmation.
          </p>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
            <strong className="text-brand-navy">Pickup and drop-off:</strong> ASU W. P. Carey McCord Avnet. Time available from 7am - 9pm.
          </div>

          <div className="rounded-[1.5rem] border border-brand-gold/30 bg-brand-cream px-5 py-4 text-sm leading-6 text-slate-700">
            <strong className="text-brand-navy">Payment detail:</strong> Zelle is the only payment method shown in this demo. Final payment details would be shared after the rental request is reviewed.
          </div>

          <button type="submit" className="primary-button">
            Submit Rental Request
          </button>

          {submitted ? (
            <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
              Thanks! Your rental request has been received. We&apos;ll contact you to confirm availability.
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
