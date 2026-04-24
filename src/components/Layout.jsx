import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-hero">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-brand-gold/40"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
