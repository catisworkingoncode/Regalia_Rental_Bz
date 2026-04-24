import { useState } from "react";
import { availabilityDates, calendarStatusConfig } from "../data/siteData";
import SectionHeading from "./SectionHeading";

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendarDays(monthOffset) {
  const inquiryMap = new Map(availabilityDates.map((item) => [item.date, item.status]));
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const startDay = currentMonth.getDay();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const cells = [];
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  for (let index = 0; index < startDay; index += 1) {
    cells.push({ type: "empty", key: `empty-${index}` });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const isoDate = date.toISOString().slice(0, 10);
    const isPast = date < startOfToday;
    const status = isPast ? "unavailable" : inquiryMap.get(isoDate) || "available";

    cells.push({
      type: "day",
      key: isoDate,
      day,
      isoDate,
      isToday: isoDate === today.toISOString().slice(0, 10),
      status
    });
  }

  return {
    monthLabel: currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    }),
    cells
  };
}

function AvailabilityCalendar() {
  const totalMonths = 3;
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const { monthLabel, cells } = buildCalendarDays(activeMonthIndex);

  return (
    <section className="bg-white/60 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Live availability"
          title="See which pickup dates are open and which dates are getting heavy interest"
          description="This sample calendar shows dates that are still available now and dates with high inquiry volume. High inquiry means students are asking about the date, but it is not fully booked yet."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl font-bold text-brand-navy shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={() => setActiveMonthIndex((value) => Math.max(0, value - 1))}
                    disabled={activeMonthIndex === 0}
                    aria-label="Show previous month"
                  >
                    {"<"}
                  </button>
                  <h3 className="text-2xl font-bold text-brand-navy">{monthLabel}</h3>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl font-bold text-brand-navy shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={() => setActiveMonthIndex((value) => Math.min(totalMonths - 1, value + 1))}
                    disabled={activeMonthIndex === totalMonths - 1}
                    aria-label="Show next month"
                  >
                    {">"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  {Object.entries(calendarStatusConfig).map(([key, value]) => (
                    <span key={key} className={`rounded-full px-3 py-2 ${value.className}`}>
                      {value.shortLabel}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalMonths }).map((_, index) => (
                  <button
                    key={`month-${index}`}
                    type="button"
                    aria-label={`Show month ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition ${
                      index === activeMonthIndex ? "bg-brand-gold" : "bg-slate-300"
                    }`}
                    onClick={() => setActiveMonthIndex(index)}
                  />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Month {activeMonthIndex + 1} of {totalMonths}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              {weekdayLabels.map((label) => (
                <div key={label} className="py-2">
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {cells.map((cell) => {
                if (cell.type === "empty") {
                  return <div key={cell.key} className="h-20 rounded-2xl bg-transparent" aria-hidden="true" />;
                }

                const status = calendarStatusConfig[cell.status];

                return (
                  <div
                    key={cell.key}
                    className={`flex h-20 flex-col justify-between rounded-2xl p-3 text-left shadow-sm ${status.className}`}
                    aria-label={`${cell.isoDate} ${status.label}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold">{cell.day}</span>
                      {cell.isToday ? (
                        <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-navy">
                          Today
                        </span>
                      ) : null}
                    </div>
                    <span className="text-[11px] font-semibold leading-4">{status.shortLabel}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="card-surface p-6 sm:p-8">
            <p className="eyebrow">How to read it</p>
            <h3 className="text-2xl font-bold text-brand-navy">Built to help students pick a realistic date faster</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                <strong className="text-brand-navy">Available now:</strong> We are still taking requests for this date.
              </p>
              <p>
                <strong className="text-brand-navy">High inquiry:</strong> Many students have asked about this date, so availability may change soon.
              </p>
              <p>
                <strong className="text-brand-navy">Unavailable:</strong> This date is already closed or no longer being prioritized for pickup.
              </p>
              <p>
                Use the left and right buttons to view this month plus the next two months. In a real student business version, this could be updated daily based on current inquiries and confirmed orders.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AvailabilityCalendar;
