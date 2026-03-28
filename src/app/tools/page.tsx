import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — analoguenews",
  description:
    "Free tools for film photographers — exposure calculator and reciprocity failure helper.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-amber/10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <p className="text-coral font-mono text-xs uppercase tracking-widest mb-4">
            Practical Tools
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold italic mb-3">
            Tools for Film Photographers
          </h1>
          <p className="text-white/60 max-w-xl">
            Free, practical, no account needed. Works on mobile — bookmark them
            for the field.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber via-coral to-amber opacity-60" />
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid gap-5">
          <Link
            href="/tools/exposure-calculator"
            className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="h-1.5 bg-gradient-to-r from-amber to-coral" />
            <div className="p-6 flex items-start gap-5">
              <div className="w-12 h-12 bg-amber-light rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-amber"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
                  Exposure Calculator
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Select lighting conditions, film speed, and see all
                  aperture/shutter combinations. 11 presets from bright sun to
                  moonlight, with practical notes for each combination.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/reciprocity"
            className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="h-1.5 bg-gradient-to-r from-coral to-coral-muted" />
            <div className="p-6 flex items-start gap-5">
              <div className="w-12 h-12 bg-coral-light rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-coral"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2M5 3l2 2M19 3l-2 2M12 3v2" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
                  Reciprocity Failure Helper
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Select your film stock and input your metered exposure time —
                  get the adjusted time for long exposures. Covers 15+ stocks
                  with manufacturer and community data.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/tools/film-comparison"
            className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="h-1.5 bg-gradient-to-r from-coral via-amber to-coral" />
            <div className="p-6 flex items-start gap-5">
              <div className="w-12 h-12 bg-warm-bg-alt rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-warm-gray"
                >
                  <rect x="2" y="3" width="8" height="18" rx="1" />
                  <rect x="14" y="3" width="8" height="18" rx="1" />
                  <path d="M10 8h4M10 12h4M10 16h4" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
                  Film Stock Comparison
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Compare two film stocks side-by-side — specs, character, and
                  reciprocity failure curves on a log-scale chart. Shareable via URL.
                </p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-coral bg-coral-light px-2 py-0.5 rounded-sm">
                  NEW
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/film-recommender"
            className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="h-1.5 bg-gradient-to-r from-coral-muted to-coral" />
            <div className="p-6 flex items-start gap-5">
              <div className="w-12 h-12 bg-coral-light rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-coral"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
                  What Film Should I Shoot?
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Answer 4 quick questions about your subject, lighting, and
                  preferences — get personalised film stock recommendations.
                </p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-coral bg-coral-light px-2 py-0.5 rounded-sm">
                  NEW
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
