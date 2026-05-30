import { scholarships, courses, careerTips } from "../data";
import { ExternalLink, Clock, BookOpen, Award } from "lucide-react";
import { SectionHeader } from "../components/Cards";

export default function Students() {
  const handleApply = (scholarshipName) => {
    window.alert(`Your application for "${scholarshipName}" has been submitted.`);
  };

  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-700 to-primary-800 py-16 px-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Student Support</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Student Resources Hub</h1>
        <p className="text-blue-200 max-w-xl mx-auto text-sm sm:text-base">
          Scholarships, free courses, and career guidance — all in one place, designed for rural and first-generation students.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Scholarships Listed", value: "24", icon: "🏅", bg: "bg-blue-50 border-blue-100" },
            { label: "Free Courses", value: "40+", icon: "💻", bg: "bg-primary-50 border-primary-100" },
            { label: "Students Supported", value: "9,200+", icon: "🎓", bg: "bg-sage-50 border-sage-100" },
            { label: "Career Workshops", value: "85", icon: "🎯", bg: "bg-earth-50 border-earth-100" },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 border ${s.bg} text-center card-hover shadow-sm`}>
              <span className="text-3xl block mb-2">{s.icon}</span>
              <div className="font-display text-xl font-bold text-slate-800">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scholarships */}
        <SectionHeader
          badge="Scholarships"
          title="Financial Aid for Students"
          subtitle="Explore scholarships for rural and government school students across Andhra Pradesh."
        />
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {scholarships.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl border border-sage-100 shadow-sm p-6 flex flex-col gap-3 card-hover">
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl">{s.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.status === "Open" ? "bg-primary-100 text-primary-700" : "bg-slate-100 text-slate-500"}`}>
                  {s.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-slate-800 text-lg">{s.name}</h3>
              <div className="flex flex-col gap-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-earth-500" />
                  <span className="font-semibold text-earth-700">{s.amount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>{s.eligibility}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Deadline: <strong>{s.deadline}</strong></span>
                </div>
              </div>
              <button
                disabled={s.status === "Closed"}
                onClick={() => s.status === "Open" && handleApply(s.name)}
                className={`mt-auto w-full py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  s.status === "Open"
                    ? "bg-primary-600 hover:bg-primary-700 text-white"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {s.status === "Open" ? "Apply Now →" : "Applications Closed"}
              </button>
            </div>
          ))}
        </div>

        {/* Free Courses */}
        <SectionHeader
          badge="Free Courses"
          title="Learn New Skills for Free"
          subtitle="Curated, government-backed and globally recognised free online courses for rural students."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {courses.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl border border-sage-100 shadow-sm p-5 card-hover flex flex-col gap-3">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="font-bold text-slate-800 text-sm">{c.title}</h3>
              <div className="text-xs text-slate-500">{c.provider}</div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.duration}</span>
                <span>·</span>
                <span>{c.level}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-primary-50 text-primary-700 text-xs font-medium">{tag}</span>
                ))}
              </div>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(c.link, "_blank", "noopener,noreferrer");
                }}
                className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Start Learning <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Career Guidance */}
        <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8 mb-10">
          <SectionHeader
            badge="Career Guidance"
            title="Get Career Ready"
            subtitle="Practical tips to help rural students kickstart their professional journey."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {careerTips.map((tip) => (
              <div key={tip.title} className="flex items-start gap-4 p-5 rounded-2xl bg-sage-50 border border-sage-100 card-hover">
                <span className="text-3xl shrink-0">{tip.icon}</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">{tip.title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship CTA */}
        <div className="bg-gradient-to-br from-blue-700 to-primary-900 rounded-3xl p-8 text-white text-center">
          <span className="text-4xl block mb-3">🧑‍🏫</span>
          <h3 className="font-display text-2xl font-bold mb-2">Need Personal Guidance?</h3>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">Connect with our volunteer mentors — engineers, doctors, teachers — who can guide you one-on-one.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 bg-white text-primary-700 font-bold rounded-xl text-sm hover:bg-earth-50 transition-colors shadow-lg">
              Request a Mentor
            </button>
            <button className="px-6 py-3 bg-white/15 border border-white/30 text-white font-semibold rounded-xl text-sm hover:bg-white/25 transition-colors">
              Join Student WhatsApp Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
