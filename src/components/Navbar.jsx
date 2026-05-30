import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/events", label: "Events" },
  { path: "/volunteer", label: "Volunteer" },
  { path: "/donate", label: "Donate" },
  { path: "/issues", label: "Issues" },
  { path: "/students", label: "Students" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-green-100/50" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-primary-300 transition-shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-display text-lg font-bold text-primary-800">GramSeva</span>
              <span className="font-display text-lg font-bold text-earth-600"> Hub</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-primary-50 text-primary-700 font-semibold"
                    : "text-slate-600 hover:bg-sage-50 hover:text-primary-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/volunteer"
              className="ml-3 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-primary-300 hover:-translate-y-0.5"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors text-primary-700"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-sage-100 py-3 pb-4 space-y-1 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium mx-2 transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary-50 text-primary-700 font-semibold"
                    : "text-slate-600 hover:bg-sage-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-2 pt-1">
              <Link
                to="/volunteer"
                className="block text-center px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl"
              >
                Join as Volunteer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
