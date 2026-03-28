import Link from "next/link";
import type { NewsItem } from "@/data/news";

const typeColors: Record<string, string> = {
  news: "bg-blue-50 text-blue-700",
  review: "bg-purple-50 text-purple-700",
  guide: "bg-green-50 text-green-700",
  historical: "bg-amber-50 text-amber-700",
  lab_spotlight: "bg-coral-light text-coral-dark",
};

const typeLabels: Record<string, string> = {
  news: "News",
  review: "Review",
  guide: "Guide",
  historical: "History",
  lab_spotlight: "Lab Spotlight",
};

export function NewsCard({ item }: { item: NewsItem }) {
  const href =
    item.contentType === "guide"
      ? `/guides/${item.slug}`
      : `/news/${item.slug}`;

  return (
    <article className="group border-b border-warm-border pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[item.contentType] || "bg-gray-100 text-gray-700"}`}
        >
          {typeLabels[item.contentType] || item.contentType}
        </span>
        <time className="text-xs text-warm-gray font-mono">
          {new Date(item.publishedDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        {item.sourceName && (
          <span className="text-xs text-warm-gray">
            via {item.sourceName}
          </span>
        )}
      </div>

      <Link href={href}>
        <h2 className="text-lg font-semibold text-warm-black group-hover:text-coral transition-colors leading-snug mb-1.5">
          {item.title}
        </h2>
      </Link>

      <p className="text-sm text-warm-gray leading-relaxed">{item.summary}</p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {item.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-warm-gray-light border border-warm-border-light rounded px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
