import Link from "next/link";
import { newsItems } from "@/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides — analoguenews",
  description:
    "Practical guides for film photographers — from choosing your first camera to scanning at home.",
};

export default function GuidesPage() {
  const guides = newsItems
    .filter((n) => n.contentType === "guide")
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );

  return (
    <>
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <p className="text-coral font-mono text-xs uppercase tracking-widest mb-4">
            Learn
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold italic mb-3">
            Guides
          </h1>
          <p className="text-white/60 max-w-xl">
            Practical, no-nonsense guides for film photographers at every level.
            No gatekeeping — just clear, useful information.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid gap-5">
          {guides.map((guide, i) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-1 bg-gradient-to-r from-coral/60 to-coral-muted/60" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-coral">
                    Guide {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-warm-gray-light">&middot;</span>
                  {guide.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-medium text-warm-gray"
                    >
                      {cat}
                    </span>
                  ))}
                  <span className="text-warm-gray-light">&middot;</span>
                  <time className="text-[10px] text-warm-gray-light font-mono">
                    {new Date(guide.publishedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1.5">
                  {guide.title}
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {guide.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
