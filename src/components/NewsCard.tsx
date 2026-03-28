import Link from "next/link";
import type { NewsItem } from "@/data/news";

const typeAccent: Record<string, string> = {
  news: "border-l-coral",
  review: "border-l-amber",
  guide: "border-l-coral-muted",
  historical: "border-l-warm-gray",
  lab_spotlight: "border-l-coral-dark",
};

const typeBadge: Record<string, string> = {
  news: "bg-coral-light text-coral-dark",
  review: "bg-amber-light text-amber",
  guide: "bg-coral-light text-coral-dark",
  historical: "bg-warm-bg-alt text-warm-gray",
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
    <article
      className={`group border-l-4 pl-5 pb-7 mb-7 last:pb-0 last:mb-0 ${typeAccent[item.contentType] || "border-l-coral"}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm ${typeBadge[item.contentType] || "bg-warm-bg-alt text-warm-gray"}`}
        >
          {typeLabels[item.contentType] || item.contentType}
        </span>
        <time className="text-[11px] text-warm-gray font-mono">
          {new Date(item.publishedDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        {item.sourceName && (
          <span className="text-[11px] text-warm-gray-light">
            via {item.sourceName}
          </span>
        )}
      </div>

      <Link href={href}>
        <h2 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors leading-snug mb-1.5">
          {item.title}
        </h2>
      </Link>

      <p className="text-sm text-warm-gray leading-relaxed">{item.summary}</p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {item.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-warm-gray-light border border-warm-border-light rounded-sm px-1.5 py-0.5 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
