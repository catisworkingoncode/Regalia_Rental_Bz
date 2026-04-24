import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Booking", to: "/booking" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur">
      <nav
        className="section-shell flex min-h-20 items-center justify-between gap-4 py-4"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-3 text-brand-navy">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-gold/90 text-sm font-black text-brand-navy shadow-soft">
            RR
          </div>
          <div>
            <p className="text-base font-bold">RentRegalia</p>
            <p className="text-xs text-slate-500">Affordable graduation regalia rentals for students.</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-brand-navy shadow-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-brand-navy" />
            <span className="block h-0.5 w-5 rounded-full bg-brand-navy" />
            <span className="block h-0.5 w-5 rounded-full bg-brand-navy" />
          </div>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${isActive ? "bg-white shadow-soft" : ""} nav-link`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/booking" className="primary-button ml-2">
            Book Now
          </Link>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? "block" : "hidden"} section-shell pb-4 md:hidden`}
      >
        <div className="card-surface flex flex-col gap-2 p-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold ${
                  isActive ? "bg-brand-mist text-brand-navy" : "text-brand-navy"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/booking" className="primary-button mt-2" onClick={() => setOpen(false)}>
            Start Booking
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
