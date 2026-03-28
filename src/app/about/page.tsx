import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — analoguenews",
  description:
    "About analoguenews — the daily pulse of analogue photography.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-coral font-mono text-xs uppercase tracking-widest mb-4">
            About
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold italic mb-4">
            The daily pulse of analogue photography
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            We aggregate, curate, and publish news, guides, and reference
            material for the film photography community — so you don&apos;t have
            to trawl dozens of sites to stay informed.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl font-semibold text-warm-black mb-3">
              What we publish
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  title: "News Briefs",
                  desc: "The latest from manufacturers, retailers, labs, and the community",
                },
                {
                  title: "Guides",
                  desc: "Practical, no-nonsense advice for film photographers at every level",
                },
                {
                  title: "Film Stock Reference",
                  desc: "Detailed pages for 25+ stocks with specs, character notes, and reciprocity data",
                },
                {
                  title: "Tools",
                  desc: "Free exposure calculator and reciprocity failure helper",
                },
                {
                  title: "Lab Spotlights",
                  desc: "In-depth looks at film processing labs around the world",
                },
                {
                  title: "Historical Features",
                  desc: "Stories and moments from photography history",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-3 border-coral/30 pl-4 py-2"
                >
                  <h3 className="font-semibold text-sm text-warm-black">
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-gray leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-warm-black mb-3">
              Our editorial process
            </h2>
            <p className="text-warm-black leading-relaxed mb-3">
              We use AI tools to help monitor sources, draft summaries, and
              classify content. Every published piece is reviewed and approved by
              a human editor. We believe AI should assist editorial work, not
              replace it — and we&apos;re transparent about where it helps.
            </p>
            <p className="text-warm-gray leading-relaxed">
              All news briefs link back to their original sources. We write
              transformative summaries, not copies. If a source asks us to
              remove content, we will.
            </p>
          </section>

          <section className="bg-coral-light border-l-4 border-coral rounded-sm p-5">
            <h2 className="font-display text-lg font-semibold text-warm-black mb-2">
              No paywall. Ever.
            </h2>
            <p className="text-warm-gray leading-relaxed">
              All content on analoguenews is free to read. No paywall, no
              registration required, no premium tiers. The analogue photography
              community thrives on open access to information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-warm-black mb-3">
              Get in touch
            </h2>
            <p className="text-warm-black leading-relaxed">
              Have a tip, correction, or just want to say hello? Email{" "}
              <a
                href="mailto:hello@analoguenews.com"
                className="text-coral hover:text-coral-dark font-medium"
              >
                hello@analoguenews.com
              </a>
              .
            </p>
          </section>

          <footer className="pt-8 border-t border-warm-border text-sm text-warm-gray">
            <p>
              analoguenews is built with{" "}
              <Link
                href="https://nextjs.org"
                className="text-coral hover:text-coral-dark"
              >
                Next.js
              </Link>
              , hosted on{" "}
              <Link
                href="https://vercel.com"
                className="text-coral hover:text-coral-dark"
              >
                Vercel
              </Link>
              , and made with care in the UK.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
