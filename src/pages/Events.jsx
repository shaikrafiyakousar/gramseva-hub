import { useState } from "react";
import { Search } from "lucide-react";
import { events } from "../data";
import { EventCard, SectionHeader } from "../components/Cards";

const categories = ["All", "Environment", "Health", "Education", "Empowerment", "Water", "Youth"];

export default function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = () => {
    const validEmail = /\S+@\S+\.\S+/.test(subscribeEmail);
    if (!validEmail) {
      setSubscribeMessage("Please enter a valid email address.");
      return;
    }
    setSubscribeMessage(`Thank you! ${subscribeEmail} has been subscribed.`);
    setSubscribeEmail("");
  };

  const filtered = events.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === "All" || e.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-16 min-h-screen bg-sage-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white mb-3 tracking-wide uppercase">Upcoming Events</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Community Events</h1>
          <p className="text-primary-200 max-w-xl mx-auto text-sm sm:text-base">
            Find events in your area and register to be part of something meaningful.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-sage-100 shadow-sm p-5 mb-8 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search events or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 placeholder:text-slate-400"
            />
          </div>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  category === cat
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-700">{filtered.length}</span> events
          </p>
          {(search || category !== "All") && (
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="text-xs text-primary-600 hover:text-primary-800 font-medium"
            >
              Clear filters ✕
            </button>
          )}
        </div>

        {/* Event grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-sage-100">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="text-slate-600 font-semibold">No events found</p>
            <p className="text-slate-400 text-sm mt-1">Try changing your search or filter.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 text-center text-white">
          <h3 className="font-display text-2xl font-bold mb-2">Never Miss an Event</h3>
          <p className="text-primary-200 text-sm mb-5">Subscribe to get event reminders directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl text-slate-800 text-sm focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="px-5 py-2.5 bg-earth-400 hover:bg-earth-300 text-slate-900 font-bold rounded-xl text-sm transition-colors"
            >
              Subscribe
            </button>
          </div>
          {subscribeMessage && (
            <p className={`mt-4 text-sm font-medium ${subscribeMessage.startsWith("Thank") ? "text-emerald-200" : "text-red-200"}`}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
