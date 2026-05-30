import { useState } from "react";
import { CheckCircle, User, Mail, Phone, Briefcase, Heart, Clock } from "lucide-react";

const skillOptions = ["Teaching/Education", "Healthcare/Nursing", "Engineering/Tech", "Agriculture", "Management", "Photography", "Social Work", "Legal Aid", "Finance", "Construction"];
const interestOptions = ["Health Camps", "Tree Plantation", "Water Projects", "Women Empowerment", "Digital Literacy", "Child Welfare", "Animal Care", "Disaster Relief", "Sports & Culture", "Environmental Awareness"];
const availabilityOptions = ["Weekdays (Morning)", "Weekdays (Evening)", "Weekends Only", "Full-Time (Short-term)", "Remote/Online Only", "Flexible"];

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", skills: [], interests: [], availability: "", motivation: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10) e.phone = "Valid phone number required";
    if (!form.city.trim()) e.city = "City / Village is required";
    if (form.skills.length === 0) e.skills = "Select at least one skill";
    if (form.interests.length === 0) e.interests = "Select at least one area";
    if (!form.availability) e.availability = "Select your availability";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-sage-50/30 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-3xl border border-sage-100 shadow-xl p-10 text-center animate-fade-up">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="font-display text-3xl font-bold text-slate-800 mb-3">You're Registered! 🎉</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Thank you, <strong>{form.name}</strong>! Your volunteer profile has been submitted. Our team will contact you within 48 hours with upcoming opportunities matching your interests.
          </p>
          <div className="bg-sage-50 rounded-2xl p-4 text-sm text-slate-600 mb-6 text-left space-y-2">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-500" /><span>{form.email}</span></div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-500" /><span>{form.phone}</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary-500" /><span>{form.availability}</span></div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",city:"",skills:[],interests:[],availability:"",motivation:"" }); setErrors({}); }}
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors"
          >
            Register Another Volunteer
          </button>
        </div>
      </div>
    );
  }

  const Field = ({ icon: Icon, label, error, children }) => (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
        <Icon className="w-3.5 h-3.5 text-primary-500" /> {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-sage-600 to-primary-800 py-16 px-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Join Us</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Become a Volunteer</h1>
        <p className="text-primary-200 max-w-xl mx-auto text-sm sm:text-base">
          Your time and skills can transform lives. Join thousands of volunteers working to uplift rural communities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why volunteer */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🌍", title: "Real Impact", desc: "See tangible change in people's lives — not just statistics." },
            { icon: "🤝", title: "Community", desc: "Build friendships with like-minded changemakers across the state." },
            { icon: "🎓", title: "Grow Yourself", desc: "Gain leadership, communication, and project management skills." },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-5 border border-sage-100 text-center shadow-sm">
              <span className="text-3xl block mb-2">{b.icon}</span>
              <div className="font-bold text-slate-800 text-sm mb-1">{b.title}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-7 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-slate-800 mb-1">Volunteer Registration Form</h2>
          <p className="text-slate-500 text-sm mb-8">Fill in your details below. Fields marked * are required.</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <Field icon={User} label="Full Name *" error={errors.name}>
              <input
                type="text"
                placeholder="e.g., Ravi Kumar"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.name ? "border-red-300" : "border-slate-200"}`}
              />
            </Field>

            {/* Email */}
            <Field icon={Mail} label="Email Address *" error={errors.email}>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.email ? "border-red-300" : "border-slate-200"}`}
              />
            </Field>

            {/* Phone */}
            <Field icon={Phone} label="Phone Number *" error={errors.phone}>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.phone ? "border-red-300" : "border-slate-200"}`}
              />
            </Field>

            {/* City */}
            <Field icon={Briefcase} label="City / Village *" error={errors.city}>
              <input
                type="text"
                placeholder="e.g., Nellore, AP"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.city ? "border-red-300" : "border-slate-200"}`}
              />
            </Field>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
              <Briefcase className="w-3.5 h-3.5 text-primary-500" /> Your Skills * (select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {skillOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggle("skills", s)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    form.skills.includes(s)
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
          </div>

          {/* Interests */}
          <div className="mt-6">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
              <Heart className="w-3.5 h-3.5 text-primary-500" /> Areas of Interest * (select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggle("interests", opt)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    form.interests.includes(opt)
                      ? "bg-earth-500 text-white border-earth-500"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-earth-300 hover:text-earth-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {errors.interests && <p className="text-red-500 text-xs mt-1">{errors.interests}</p>}
          </div>

          {/* Availability */}
          <div className="mt-6">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
              <Clock className="w-3.5 h-3.5 text-primary-500" /> Availability *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availabilityOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setForm({ ...form, availability: opt })}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 text-left ${
                    form.availability === opt
                      ? "bg-sage-600 text-white border-sage-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-sage-300"
                  }`}
                >
                  {form.availability === opt && <span className="mr-1">✓</span>}{opt}
                </button>
              ))}
            </div>
            {errors.availability && <p className="text-red-500 text-xs mt-1">{errors.availability}</p>}
          </div>

          {/* Motivation */}
          <div className="mt-6">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
              <Heart className="w-3.5 h-3.5 text-primary-500" /> Why do you want to volunteer? (optional)
            </label>
            <textarea
              rows={3}
              placeholder="Share your motivation or past experience in community service..."
              value={form.motivation}
              onChange={(e) => setForm({ ...form, motivation: e.target.value })}
              className="form-input w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-8 w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-base rounded-2xl transition-all duration-200 shadow-lg shadow-primary-200 hover:shadow-primary-300 hover:-translate-y-0.5"
          >
            Submit Volunteer Application 🙌
          </button>
          <p className="text-center text-xs text-slate-400 mt-3">
            By submitting, you agree to our volunteer code of conduct and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
