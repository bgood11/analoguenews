import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — analoguenews",
  description:
    "Get the weekly analoguenews newsletter — top stories, new film stocks, and one featured guide. Free, no spam.",
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/15" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <p className="text-coral font-mono text-xs uppercase tracking-widest mb-6">
            Weekly Newsletter
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 italic">
            This Week in Film
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Every Friday — the stories that matter, one featured film stock, and
            a practical guide. Five minutes, no fluff.
          </p>
          <div className="max-w-sm mx-auto">
            <NewsletterForm />
          </div>
          <p className="text-white/30 text-xs mt-4">
            Free forever. Unsubscribe anytime. No spam.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      {/* What you get */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-warm-black text-center mb-10">
          What&apos;s Inside
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-coral-light rounded-sm flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-coral"
              >
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-sm text-warm-black mb-1">
              Top 5 Stories
            </h3>
            <p className="text-xs text-warm-gray leading-relaxed">
              The most important news from the analogue photography world,
              summarised so you stay current in five minutes.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-amber-light rounded-sm flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-amber"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-sm text-warm-black mb-1">
              Featured Stock
            </h3>
            <p className="text-xs text-warm-gray leading-relaxed">
              One film stock explored in depth — character, best uses, and tips
              from the community.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-warm-bg-alt rounded-sm flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-warm-gray"
              >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-sm text-warm-black mb-1">
              Weekly Guide
            </h3>
            <p className="text-xs text-warm-gray leading-relaxed">
              A practical technique or tutorial to help you improve your
              photography.
            </p>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-warm-bg-alt border-y border-warm-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <blockquote className="font-display text-xl italic text-warm-black leading-relaxed">
            &ldquo;The only photography newsletter I actually read every
            week.&rdquo;
          </blockquote>
          <p className="text-sm text-warm-gray mt-3">
            — What we hope you&apos;ll say after subscribing
          </p>
        </div>
      </section>
    </>
  );
}
