import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brand-navy py-14 text-slate-200">
      <div className="section-shell grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 text-white">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-gold text-sm font-black text-brand-navy">
              RR
            </div>
            <div>
              <p className="font-bold">RentRegalia</p>
              <p className="text-sm text-slate-300">Affordable graduation regalia rentals for students.</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            A front-end-only demo brand focused on affordable, campus-focused regalia rentals and graduation support.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="mailto:hello@rentregalia.demo">hello@rentregalia.demo</a></li>
            <li><a href="tel:+16025550123">(602) 555-0123</a></li>
            <li>Campus pickup by appointment</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Social</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Instagram placeholder</li>
            <li>TikTok placeholder</li>
            <li>LinkedIn placeholder</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
