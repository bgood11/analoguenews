"use client";

import { useState } from "react";

export function DarkNewsletterCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="bg-warm-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-warm-black to-coral/10" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
          This Week in Film
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Top stories, a featured film stock, and one practical guide. Every
          Friday. Free.
        </p>
        {subscribed ? (
          <div className="text-coral font-semibold flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            You&apos;re in! Check your inbox to confirm.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-coral text-white font-semibold text-sm rounded-sm hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/30 active:translate-y-0 transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
