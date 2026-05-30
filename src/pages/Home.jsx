import { Link } from "react-router-dom";
import {
  ArrowRight, Users, MapPin, Calendar, GraduationCap,
  CheckCircle, Heart, Leaf, Star, ChevronRight
} from "lucide-react";
import { events, stats, donations } from "../data";
import { EventCard, DonationCard } from "../components/Cards";

const iconMap = { Users, MapPin, Calendar, GraduationCap, CheckCircle, Heart };

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative hero-gradient min-h-[92vh] flex items-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-medium mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              🌱 Serving 312+ villages across Andhra Pradesh
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Empowering
              <span className="block text-earth-300">Rural India</span>
              Together
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              GramSeva Hub connects volunteers, NGOs, and communities to transform villages — through health camps, education drives, clean water projects, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary-700 font-bold rounded-2xl hover:bg-earth-50 transition-all duration-200 shadow-xl shadow-primary-900/30 hover:-translate-y-0.5"
              >
                Join as Volunteer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-200"
              >
                Explore Events
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {["80G Tax Exemption", "ISO Certified NGO", "4.9★ Rated"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-white/75 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-green-300" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right – floating cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in">
            {[
              { label: "Active Volunteers", value: "4,820+", icon: "👥", bg: "bg-white" },
              { label: "Villages Reached", value: "312", icon: "🏘️", bg: "bg-earth-50" },
              { label: "Events This Year", value: "186", icon: "🗓️", bg: "bg-sage-50" },
              { label: "Students Helped", value: "9,200+", icon: "🎓", bg: "bg-primary-50" },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-2xl p-5 shadow-2xl border border-white/80 card-hover`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <div className="text-2xl font-display font-bold text-slate-800">{card.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8faf5" />
          </svg>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-sage-100 shadow-sm grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 mb-3 tracking-wide uppercase">Our Mission</span>
              <h2 className="font-display text-3xl font-bold text-slate-800 mb-4">
                Building Stronger Villages, One Initiative at a Time
              </h2>
              <p className="text-slate-500 leading-relaxed">
                We believe every rural community deserves access to quality healthcare, education, clean water, and economic opportunity. GramSeva Hub is the digital bridge that connects compassionate volunteers with the villages that need them most.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {["Transparent use of donations", "Grassroots community leadership", "Verified impact reporting", "Long-term sustainable programs"].map((m) => (
                  <div key={m} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: "🌿", label: "Environment", desc: "500+ trees planted monthly" },
                { icon: "🏥", label: "Healthcare", desc: "Free camps in 50+ villages" },
                { icon: "📚", label: "Education", desc: "9,200 students supported" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-3 p-3.5 rounded-xl bg-sage-50 border border-sage-100">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-slate-700">{p.label}</div>
                    <div className="text-xs text-slate-500">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-earth-100 text-earth-700 mb-3 tracking-wide uppercase">Impact So Far</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800">Numbers That Speak Volumes</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => {
              const Icon = iconMap[s.icon] || CheckCircle;
              const bgs = ["bg-primary-50","bg-earth-50","bg-sage-50","bg-blue-50","bg-purple-50","bg-red-50"];
              const colors = ["text-primary-600","text-earth-600","text-sage-600","text-blue-600","text-purple-600","text-red-500"];
              return (
                <div key={s.id} className={`${bgs[i]} rounded-2xl p-5 text-center card-hover border border-white`}>
                  <Icon className={`w-7 h-7 ${colors[i]} mx-auto mb-2`} />
                  <div className={`text-2xl font-display font-bold ${colors[i]}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Events ───────────────────────────────────── */}
      <section className="py-16 bg-sage-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 mb-3 tracking-wide uppercase">Upcoming Events</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800">Join Community Events</h2>
              <p className="text-slate-500 mt-2 text-sm">Make a real difference — sign up for events near your village.</p>
            </div>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 shrink-0 group">
              View all events <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.slice(0, 3).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </div>
      </section>

      {/* ── Donations ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-earth-100 text-earth-700 mb-3 tracking-wide uppercase">Campaigns</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800">Support a Cause Today</h2>
              <p className="text-slate-500 mt-2 text-sm">Your small contribution can change a family's life forever.</p>
            </div>
            <Link to="/donate" className="inline-flex items-center gap-2 text-sm font-semibold text-earth-600 hover:text-earth-800 shrink-0 group">
              All campaigns <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donations.map((d) => <DonationCard key={d.id} campaign={d} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl mb-4 block">🙌</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-200 text-base mb-8 max-w-xl mx-auto">
            Whether you have 2 hours or 2 months, your time and skills can transform rural communities. Register as a volunteer today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/volunteer" className="px-8 py-4 bg-earth-400 hover:bg-earth-300 text-slate-900 font-bold rounded-2xl transition-all duration-200 shadow-xl hover:-translate-y-0.5">
              Register as Volunteer
            </Link>
            <Link to="/donate" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/25 transition-all duration-200">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-16 bg-sage-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-sage-100 text-sage-700 mb-3 tracking-wide uppercase">Testimonials</span>
            <h2 className="font-display text-3xl font-bold text-slate-800">Voices from the Community</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sunita Devi", village: "Kovur, Nellore", role: "Beneficiary", quote: "The health camp changed my life. I got treatment I could never afford before. GramSeva volunteers treated us with so much respect.", avatar: "👩" },
              { name: "Ravi Kumar", village: "Sullurpeta, AP", role: "Volunteer", quote: "Volunteering here taught me more about leadership than any college course. The impact is real and immediate.", avatar: "👨" },
              { name: "Priya Nair", village: "Nellore City", role: "Donor", quote: "I can track exactly how my donation is used. The transparency and impact reports give me full confidence.", avatar: "👩‍💼" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-sm card-hover">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-earth-400 text-earth-400" />)}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-xl">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role} · {t.village}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
