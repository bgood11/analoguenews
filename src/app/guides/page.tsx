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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-warm-black mb-1">Guides</h1>
      <p className="text-sm text-warm-gray mb-8">
        Practical, no-nonsense guides for film photographers at every level.
      </p>

      <div className="grid gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.slug}`}
            className="group block bg-white border border-warm-border rounded-xl p-6 hover:border-coral/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              {guide.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700"
                >
                  {cat}
                </span>
              ))}
              <time className="text-xs text-warm-gray font-mono">
                {new Date(guide.publishedDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
              {guide.title}
            </h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              {guide.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
