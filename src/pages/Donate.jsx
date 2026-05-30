import { donations, neededResources } from "../data";
import { DonationCard, SectionHeader } from "../components/Cards";
import { TrendingUp, Heart, Users, Award } from "lucide-react";

export default function Donate() {
  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-earth-700 to-earth-900 py-16 px-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Support Us</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Donate & Support</h1>
        <p className="text-earth-200 max-w-xl mx-auto text-sm sm:text-base">
          100% of your donation goes toward on-ground community work. No hidden fees. Full transparency.
        </p>
        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { icon: Award, label: "80G Tax Exemption" },
            { icon: TrendingUp, label: "100% Transparent" },
            { icon: Users, label: "1,000+ Donors" },
            { icon: Heart, label: "Zero Admin Cut" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-earth-200 text-xs">
              <Icon className="w-4 h-4 text-earth-300" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Impact Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Raised", value: "₹42L+", icon: "💰", bg: "bg-primary-50 border-primary-100" },
            { label: "Active Campaigns", value: "12", icon: "🎯", bg: "bg-earth-50 border-earth-100" },
            { label: "Villages Impacted", value: "312", icon: "🏘️", bg: "bg-sage-50 border-sage-100" },
            { label: "Families Helped", value: "8,400+", icon: "👨‍👩‍👧", bg: "bg-blue-50 border-blue-100" },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 border ${s.bg} text-center card-hover shadow-sm`}>
              <span className="text-3xl block mb-2">{s.icon}</span>
              <div className="font-display text-xl font-bold text-slate-800">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Campaigns */}
        <SectionHeader
          badge="Active Campaigns"
          title="Choose a Cause to Support"
          subtitle="Every rupee goes directly to the ground. Browse our active campaigns below."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {donations.map((d) => <DonationCard key={d.id} campaign={d} />)}
        </div>

        {/* Needed Resources */}
        <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8 mb-12">
          <SectionHeader
            badge="In-Kind Donations"
            title="Resources Urgently Needed"
            subtitle="Can't donate money? You can donate goods directly. Here's what we need most right now."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neededResources.map((r) => (
              <div key={r.item} className="flex items-center gap-4 p-4 rounded-xl bg-sage-50 border border-sage-100 card-hover">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{r.item}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Need: <span className="font-bold text-primary-600">{r.needed} {r.unit}</span>
                  </div>
                </div>
                <button className="ml-auto text-xs px-3 py-1.5 bg-primary-100 text-primary-700 rounded-lg font-semibold hover:bg-primary-200 transition-colors">
                  Donate
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-earth-50 border border-earth-100 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-3xl">📦</span>
            <div className="text-sm text-slate-600">
              <strong className="text-slate-800">Drop-off Centre:</strong> 42/B, NGO Colony, Nellore – 524001, AP
              <br />
              Mon–Sat: 9 AM – 5 PM &nbsp;|&nbsp; Contact: +91 98765 43210
            </div>
          </div>
        </div>

        {/* How funds are used */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Transparency</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">How We Use Your Donations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Community Programs", pct: 70, color: "bg-primary-400", icon: "🌾" },
              { label: "Medical & Health", pct: 15, color: "bg-earth-400", icon: "🏥" },
              { label: "Education & Books", pct: 10, color: "bg-green-400", icon: "📚" },
              { label: "Admin & Operations", pct: 5, color: "bg-slate-400", icon: "⚙️" },
            ].map((u) => (
              <div key={u.label} className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <span className="text-2xl block mb-2">{u.icon}</span>
                <div className="font-bold text-white text-2xl mb-1">{u.pct}%</div>
                <div className="text-primary-200 text-xs mb-3">{u.label}</div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full ${u.color} rounded-full`} style={{ width: `${u.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-primary-300 text-xs mt-6">
            Annual audit reports available on request. Registered under FCRA. 80G Tax Certificate issued for every donation.
          </p>
        </div>
      </div>
    </div>
  );
}
