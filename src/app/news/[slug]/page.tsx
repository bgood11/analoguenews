import { notFound } from "next/navigation";
import Link from "next/link";
import { newsItems, getNewsItem } from "@/data/news";
import { renderMarkdown } from "@/lib/markdown";
import { ReadingProgress } from "@/components/ReadingProgress";
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

const typeLabels: Record<string, string> = {
  news: "News",
  review: "Review",
  historical: "History",
  lab_spotlight: "Lab Spotlight",
};

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item || item.contentType === "guide") notFound();

  const allArticles = newsItems
    .filter((n) => n.contentType !== "guide")
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
  const currentIndex = allArticles.findIndex((n) => n.slug === slug);
  const prevArticle =
    currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  return (
    <>
      <ReadingProgress />
      {/* Dark hero */}
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-coral transition-colors mb-4 inline-block"
          >
            &larr; Back to all stories
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-coral text-white">
              {typeLabels[item.contentType] || item.contentType}
            </span>
            <time className="text-xs text-white/40 font-mono">
              {new Date(item.publishedDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {item.sourceName && (
              <span className="text-xs text-white/30">
                via{" "}
                {item.sourceUrl ? (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral/70 hover:text-coral"
                  >
                    {item.sourceName}
                  </a>
                ) : (
                  item.sourceName
                )}
              </span>
            )}
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
            {item.title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-lg text-warm-gray leading-relaxed mb-8 pl-5 border-l-4 border-coral italic">
          {item.summary}
        </p>

        <div className="prose-analog">{renderMarkdown(item.body)}</div>

        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-warm-border">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-warm-gray border border-warm-border rounded-sm px-3 py-1 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Prev/Next navigation */}
        {(prevArticle || nextArticle) && (
          <nav className="mt-10 pt-8 border-t-2 border-warm-border grid grid-cols-2 gap-6">
            <div>
              {prevArticle && (
                <Link
                  href={`/news/${prevArticle.slug}`}
                  className="group block"
                >
                  <span className="text-[10px] text-warm-gray uppercase tracking-widest font-mono">
                    Previous
                  </span>
                  <p className="font-display text-sm font-semibold text-warm-black group-hover:text-coral transition-colors mt-1 leading-snug">
                    {prevArticle.title}
                  </p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextArticle && (
                <Link
                  href={`/news/${nextArticle.slug}`}
                  className="group block"
                >
                  <span className="text-[10px] text-warm-gray uppercase tracking-widest font-mono">
                    Next
                  </span>
                  <p className="font-display text-sm font-semibold text-warm-black group-hover:text-coral transition-colors mt-1 leading-snug">
                    {nextArticle.title}
                  </p>
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Back link */}
        <div className="mt-8 pt-6 border-t border-warm-border">
          <Link
            href="/"
            className="text-sm text-coral hover:text-coral-dark font-semibold transition-colors group inline-flex items-center"
          >
            <svg
              className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to all stories
          </Link>
        </div>
      </article>
    </>
  );
}
