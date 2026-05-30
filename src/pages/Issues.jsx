import { useState } from "react";
import { issues, issueCategories } from "../data";
import { IssueCard, SectionHeader } from "../components/Cards";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function Issues() {
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", village: "", description: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = issues.filter((i) => category === "All" || i.category === category);

  const statusCounts = {
    Reported: issues.filter((i) => i.status === "Reported").length,
    "In Progress": issues.filter((i) => i.status === "In Progress").length,
    Resolved: issues.filter((i) => i.status === "Resolved").length,
  };

  const handleSubmit = () => {
    if (!form.title || !form.category || !form.village) return;
    setSubmitted(true);
    setShowForm(false);
    setForm({ title: "", category: "", village: "", description: "", contact: "" });
  };

  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 py-16 px-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Community Issues</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Report & Track Village Issues</h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Report infrastructure and civic problems in your village. Our team follows up with local authorities and volunteers.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg"
        >
          <AlertTriangle className="w-4 h-4" /> Report an Issue
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Status Summary */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Reported", count: statusCounts["Reported"], icon: AlertTriangle, color: "text-slate-600", bg: "bg-slate-50 border-slate-200" },
            { label: "In Progress", count: statusCounts["In Progress"], icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" },
            { label: "Resolved", count: statusCounts["Resolved"], icon: CheckCircle, color: "text-primary-600", bg: "bg-primary-50 border-primary-200" },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 border text-center card-hover ${s.bg}`}>
              <s.icon className={`w-7 h-7 ${s.color} mx-auto mb-2`} />
              <div className={`font-display text-3xl font-bold ${s.color}`}>{s.count}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {issueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                category === cat
                  ? "bg-slate-700 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Issues grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filtered.map((issue) => <IssueCard key={issue.id} issue={issue} />)}
        </div>

        {submitted && (
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 flex items-start gap-3 mb-8">
            <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-primary-800">Issue Submitted Successfully!</div>
              <div className="text-sm text-primary-600 mt-0.5">Our team will review and follow up within 24–48 hours.</div>
            </div>
          </div>
        )}

        {/* How it works */}
        <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8">
          <h3 className="font-display text-xl font-bold text-slate-800 mb-6 text-center">How Issue Reporting Works</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: "1", icon: "📝", title: "Report", desc: "Submit the issue with location and description." },
              { step: "2", icon: "🔍", title: "Review", desc: "Our team verifies and categorizes the report." },
              { step: "3", icon: "📢", title: "Escalate", desc: "We contact local authorities or deploy volunteers." },
              { step: "4", icon: "✅", title: "Resolve", desc: "Issue is marked resolved once fixed and confirmed." },
            ].map((s) => (
              <div key={s.step} className="text-center p-4 rounded-2xl bg-sage-50 relative">
                <span className="text-3xl block mb-2">{s.icon}</span>
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full text-xs font-bold flex items-center justify-center mx-auto mb-2">{s.step}</div>
                <div className="font-bold text-slate-800 text-sm mb-1">{s.title}</div>
                <div className="text-xs text-slate-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 animate-fade-up">
            <h3 className="font-display text-2xl font-bold text-slate-800 mb-1">Report an Issue</h3>
            <p className="text-slate-500 text-sm mb-6">Help us identify and resolve community problems.</p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Issue Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Broken streetlight on Main Road"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="form-input w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="form-input w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50"
                  >
                    <option value="">Select</option>
                    {["Water", "Roads", "Electricity", "Sanitation", "Infrastructure", "Education"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Village / Area *</label>
                  <input
                    type="text"
                    placeholder="Village name"
                    value={form.village}
                    onChange={(e) => setForm({ ...form, village: e.target.value })}
                    className="form-input w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue in detail..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="form-input w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50 resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Your Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="For follow-up"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="form-input w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)} className="flex-1 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-sm">Cancel</button>
                <button onClick={handleSubmit} className="flex-1 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors text-sm">Submit Report</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
