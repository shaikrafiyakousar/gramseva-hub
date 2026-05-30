import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageCircle, Share2, Video, Link } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim() || form.message.length < 20) e.message = "Please write at least 20 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSent(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-700 to-primary-950 py-16 px-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Contact</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Get in Touch</h1>
        <p className="text-primary-200 max-w-xl mx-auto text-sm sm:text-base">
          We'd love to hear from you — whether you're a volunteer, donor, village representative, or student.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Panel */}
          <div className="space-y-5">
            {/* Info cards */}
            {[
              {
                icon: MapPin, title: "Visit Us",
                content: "42/B, NGO Colony,\nNellore – 524001,\nAndhra Pradesh, India",
                bg: "bg-primary-50", ic: "text-primary-600"
              },
              {
                icon: Phone, title: "Call Us",
                content: "+91 98765 43210\n+91 91234 56789",
                bg: "bg-earth-50", ic: "text-earth-600"
              },
              {
                icon: Mail, title: "Email Us",
                content: "hello@gramsevahub.org\nsupport@gramsevahub.org",
                bg: "bg-sage-50", ic: "text-sage-600"
              },
              {
                icon: Clock, title: "Office Hours",
                content: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: 10:00 AM – 1:00 PM",
                bg: "bg-blue-50", ic: "text-blue-600"
              },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} rounded-2xl p-5 border border-white card-hover`}>
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className={`w-5 h-5 ${item.ic}`} />
                  <span className="font-semibold text-slate-800 text-sm">{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            ))}

            {/* Social media */}
            <div className="bg-white rounded-2xl p-5 border border-sage-100 shadow-sm">
              <h4 className="font-semibold text-slate-800 text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Globe, color: "hover:bg-blue-600", label: "fb" },
                  { Icon: MessageCircle, color: "hover:bg-sky-500", label: "tw" },
                  { Icon: Share2, color: "hover:bg-pink-600", label: "ig" },
                  { Icon: Video, color: "hover:bg-red-600", label: "yt" },
                  { Icon: Link, color: "hover:bg-blue-700", label: "li" },
                ].map(({ Icon, color, label }) => (
                  <a
                    key={label}
                    href="#"
                    className={`w-10 h-10 rounded-xl bg-slate-100 ${color} hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-sage-100 shadow-sm p-7 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Message Sent! 🎉</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Thank you for reaching out! We typically respond within 24–48 hours on working days.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:"",email:"",subject:"",message:"" }); setErrors({}); }}
                  className="mt-6 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-slate-800 mb-1">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-7">Have a question, partnership proposal, or want to collaborate? Write to us.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.name ? "border-red-300" : "border-slate-200"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Email Address *</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.email ? "border-red-300" : "border-slate-200"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Subject *</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`form-input w-full px-4 py-2.5 border rounded-xl text-sm bg-slate-50 ${errors.subject ? "border-red-300" : "border-slate-200"}`}
                  >
                    <option value="">Select a subject</option>
                    {["General Inquiry", "Volunteer Inquiry", "Donation & Funding", "Event Collaboration", "Media / Press", "Village Issue", "Student Support", "Other"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`form-input w-full px-4 py-3 border rounded-xl text-sm bg-slate-50 resize-none ${errors.message ? "border-red-300" : "border-slate-200"}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-base rounded-2xl transition-all duration-200 shadow-lg shadow-primary-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-10 bg-white rounded-3xl border border-sage-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-sage-100">
            <h3 className="font-semibold text-slate-800">📍 Our Location – Nellore, Andhra Pradesh</h3>
          </div>
          <div className="h-64 bg-gradient-to-br from-sage-100 to-primary-50 flex items-center justify-center relative">
            <div className="text-center">
              <div className="text-6xl mb-3">🗺️</div>
              <p className="font-semibold text-slate-600">Interactive Map</p>
              <p className="text-xs text-slate-400 mt-1">42/B, NGO Colony, Nellore – 524001, Andhra Pradesh</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-primary-600 rounded-full"
                  style={{ left: `${(i * 7.3) % 100}%`, top: `${(i * 13.7) % 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 bg-white rounded-3xl border border-sage-100 shadow-sm p-8">
          <h3 className="font-display text-xl font-bold text-slate-800 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { q: "How do I register as a volunteer?", a: "Go to the Volunteer page and fill out the registration form. Our team will contact you within 48 hours." },
              { q: "Are donations tax-exempt?", a: "Yes! All donations are eligible for 80G tax deductions. We'll send your certificate via email." },
              { q: "Can I volunteer remotely?", a: "Absolutely. We have online teaching, design, and content creation roles suitable for remote volunteers." },
              { q: "How do I report a village issue?", a: "Visit the Community Issues page and click 'Report an Issue'. We'll escalate it to local authorities." },
            ].map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-sage-50 border border-sage-100">
                <div className="font-semibold text-slate-800 text-sm mb-2">❓ {faq.q}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
