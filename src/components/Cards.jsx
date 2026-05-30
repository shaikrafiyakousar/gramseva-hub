import { useState } from "react";
import { Calendar, MapPin, Users, ArrowRight, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Stat Card ────────────────────────────────────────────────────
export function StatCard({ label, value, icon: Icon, color, bg }) {
  return (
    <div className={`card-hover rounded-2xl p-5 border border-white/60 shadow-sm ${bg || "bg-white"}`}>
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${color} bg-current/10`}>
        <Icon className={`w-5 h-5 ${color}`} style={{ filter: "none" }} />
      </div>
      <div className={`text-2xl font-display font-bold ${color}`}>{value}</div>
      <div className="text-sm text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}

// ─── Event Card ───────────────────────────────────────────────────
export function EventCard({ event }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    source: "",
  });
  const [errors, setErrors] = useState({});

  const pct = Math.round((event.registered / event.seats) * 100);

  const handleOpen = () => {
    setModalOpen(true);
    setSubmitted(false);
    setErrors({});
  };

  const handleClose = () => {
    setModalOpen(false);
    setFormState({ name: "", email: "", phone: "", city: "", source: "" });
    setErrors({});
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!formState.name.trim()) nextErrors.name = "Required";
    if (!/\S+@\S+\.\S+/.test(formState.email)) nextErrors.email = "Valid email required";
    if (!formState.phone.trim() || formState.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Valid phone required";
    if (!formState.city.trim()) nextErrors.city = "Required";
    if (!formState.source) nextErrors.source = "Please select an option";
    return nextErrors;
  };

  const handleSubmit = () => {
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <div className={`card-hover rounded-2xl border p-5 flex flex-col gap-3 ${event.color}`}>
        <div className="flex items-start justify-between gap-2">
          <span className="text-3xl">{event.image}</span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${event.badge}`}>
            {event.category}
          </span>
        </div>
        <h3 className="font-display font-bold text-slate-800 text-base leading-snug">{event.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{event.description}</p>
        <div className="flex flex-col gap-1.5 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary-500" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary-500" />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-primary-500" />
            {event.registered} / {event.seats} registered
          </span>
        </div>
        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Registration</span>
            <span className="font-semibold">{pct}%</span>
          </div>
          <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="mt-auto w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          Register Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70">
          <div className="w-full max-w-2xl rounded-[2rem] overflow-hidden bg-white shadow-2xl">
            <div className="flex flex-col gap-3 bg-gradient-to-r from-primary-700 to-primary-900 px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">Register for {event.title}</h2>
                  <p className="text-sm text-primary-100 mt-1">Complete the form below to reserve your spot.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="rounded-3xl border border-primary-200 bg-primary-50 p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white text-3xl">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-800 mb-3">Registration Successful!</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    You are registered for <span className="font-semibold">{event.title}</span>! We will contact you before the event.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 inline-flex rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-700">
                      <span className="font-semibold">Full Name</span>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={`form-input w-full rounded-2xl border px-4 py-3 text-sm ${errors.name ? "border-red-300" : "border-slate-200"}`}
                      />
                      {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                    </label>
                    <label className="space-y-2 text-sm text-slate-700">
                      <span className="font-semibold">Email Address</span>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={`form-input w-full rounded-2xl border px-4 py-3 text-sm ${errors.email ? "border-red-300" : "border-slate-200"}`}
                      />
                      {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-700">
                      <span className="font-semibold">Phone Number</span>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className={`form-input w-full rounded-2xl border px-4 py-3 text-sm ${errors.phone ? "border-red-300" : "border-slate-200"}`}
                      />
                      {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                    </label>
                    <label className="space-y-2 text-sm text-slate-700">
                      <span className="font-semibold">Village / City</span>
                      <input
                        type="text"
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        className={`form-input w-full rounded-2xl border px-4 py-3 text-sm ${errors.city ? "border-red-300" : "border-slate-200"}`}
                      />
                      {errors.city && <span className="text-xs text-red-500">{errors.city}</span>}
                    </label>
                  </div>
                  <label className="space-y-2 text-sm text-slate-700">
                    <span className="font-semibold">How did you hear about us?</span>
                    <select
                      value={formState.source}
                      onChange={(e) => setFormState({ ...formState, source: e.target.value })}
                      className={`form-input w-full rounded-2xl border px-4 py-3 text-sm ${errors.source ? "border-red-300" : "border-slate-200"}`}
                    >
                      <option value="">Select an option</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend">Friend</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.source && <span className="text-xs text-red-500">{errors.source}</span>}
                  </label>
                  <button
                    onClick={handleSubmit}
                    className="w-full rounded-2xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Donation Card ────────────────────────────────────────────────
export function DonationCard({ campaign }) {
  const pct = Math.round((campaign.raised / campaign.goal) * 100);
  const handleDonate = () => {
    window.alert(`Donate to ${campaign.title} — current funding ₹${campaign.raised.toLocaleString()} of ₹${campaign.goal.toLocaleString()}`);
  };
  return (
    <div className="card-hover bg-white rounded-2xl border border-sage-100 p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between">
        <span className="text-3xl">{campaign.icon}</span>
        <div className="flex gap-2 items-center">
          {campaign.urgent && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Urgent
            </span>
          )}
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sage-100 text-sage-700">
            {campaign.category}
          </span>
        </div>
      </div>
      <h3 className="font-display font-bold text-slate-800 text-base leading-snug">{campaign.title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{campaign.description}</p>
      {/* Progress */}
      <div>
        <div className="h-2.5 bg-sage-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full progress-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span className="text-primary-700 font-bold">₹{(campaign.raised / 1000).toFixed(0)}K raised</span>
          <span className="text-slate-500">Goal: ₹{(campaign.goal / 1000).toFixed(0)}K</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Users className="w-3.5 h-3.5" />
        <span>{campaign.donors} donors</span>
        <span className="ml-auto font-bold text-primary-700">{pct}% funded</span>
      </div>
      <button
        onClick={handleDonate}
        className="w-full py-2.5 bg-earth-500 hover:bg-earth-600 text-white text-sm font-semibold rounded-xl transition-all duration-200"
      >
        Donate Now 💛
      </button>
    </div>
  );
}

// ─── Issue Card ───────────────────────────────────────────────────
export function IssueCard({ issue }) {
  return (
    <div className="card-hover bg-white rounded-2xl border border-sage-100 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{issue.icon}</span>
          <div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${issue.statusColor}`}>
              {issue.status}
            </span>
          </div>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${issue.priorityColor}`}>
          {issue.priority}
        </span>
      </div>
      <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-2">{issue.title}</h3>
      <div className="flex flex-col gap-1 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3" /> {issue.village}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" /> Reported: {issue.date}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
          {issue.category}
        </span>
        <button className="flex items-center gap-1 text-xs text-primary-600 font-semibold hover:text-primary-800 transition-colors">
          👍 {issue.votes} Support
        </button>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────
export function SectionHeader({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 mb-3 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
