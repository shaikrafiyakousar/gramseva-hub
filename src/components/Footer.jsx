import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Globe, MessageCircle, Share2, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">GramSeva Hub</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Bridging the gap between rural communities and the support they deserve — through technology, compassion, and collective action.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, Share2, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/events", label: "Upcoming Events" },
                { to: "/volunteer", label: "Become a Volunteer" },
                { to: "/donate", label: "Donate & Support" },
                { to: "/issues", label: "Report an Issue" },
                { to: "/students", label: "Student Resources" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary-500 inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {["Rural Health Camps", "Digital Literacy Drive", "Women Empowerment", "Scholarship Portal", "Clean Water Initiative", "Agri Support Camps"].map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-earth-500 inline-block" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span>42/B, NGO Colony, Nellore – 524001, Andhra Pradesh</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>hello@gramsevahub.org</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-primary-900/50 border border-primary-800/60">
              <p className="text-xs text-primary-300 font-medium">Registered NGO</p>
              <p className="text-xs text-slate-400 mt-1">Reg. No: AP/NGO/2019/04521</p>
              <p className="text-xs text-slate-400">80G & 12A Tax Exemption</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>© 2026 GramSeva Hub. All rights reserved. Made with ❤️ for Rural India.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
