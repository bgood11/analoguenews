import { notFound } from "next/navigation";
import Link from "next/link";
import { newsItems, getNewsItem } from "@/data/news";
import { renderMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return newsItems
    .filter((n) => n.contentType !== "guide")
    .map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.title} — analoguenews`,
    description: item.summary,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item || item.contentType === "guide") notFound();

  const typeLabels: Record<string, string> = {
    news: "News",
    review: "Review",
    historical: "History",
    lab_spotlight: "Lab Spotlight",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link
        href="/"
        className="text-sm text-warm-gray hover:text-coral transition-colors mb-6 inline-block"
      >
        &larr; Back to all stories
      </Link>

      <article>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
            {typeLabels[item.contentType] || item.contentType}
          </span>
          <time className="text-xs text-warm-gray font-mono">
            {new Date(item.publishedDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="font-display text-3xl font-semibold text-warm-black leading-tight mb-4">
          {item.title}
        </h1>

        <p className="text-lg text-warm-gray leading-relaxed mb-8 border-l-4 border-coral pl-4">
          {item.summary}
        </p>

        {item.sourceName && (
          <div className="text-sm text-warm-gray mb-6">
            Source:{" "}
            {item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:text-coral-dark"
              >
                {item.sourceName}
              </a>
            ) : (
              item.sourceName
            )}
          </div>
        )}

        <div className="prose-analog">{renderMarkdown(item.body)}</div>

        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-warm-border">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-warm-gray border border-warm-border rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
