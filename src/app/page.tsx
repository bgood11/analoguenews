import { newsItems } from "@/data/news";
import { NewsCard } from "@/components/NewsCard";
import { Sidebar } from "@/components/Sidebar";
import { ContentFilter } from "@/components/ContentFilter";
import { DarkNewsletterCTA } from "@/components/DarkNewsletterCTA";
import { RevealWrapper } from "@/components/RevealWrapper";
import { TodayInHistory } from "@/components/TodayInHistory";
import { FilmStripHero } from "@/components/FilmStripHero";
import Link from "next/link";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  const sortedNews = [...newsItems]
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    )
    .filter((n) => !type || n.contentType === type);

  const featured = sortedNews.find((n) => n.featured) || sortedNews[0];
  const secondary = sortedNews.filter((n) => n !== featured).slice(0, 3);
  const river = sortedNews.filter(
    (n) => n !== featured && !secondary.includes(n)
  );

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero Section */}
      <FilmStripHero palette="warm">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-coral font-mono text-sm mb-4 tracking-wider uppercase">
                {today}
              </p>
              {featured && (
                <>
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-sm bg-coral text-white mb-4 uppercase tracking-wider">
                    Featured
                  </span>
                  <Link href={`/news/${featured.slug}`}>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 hover:text-coral-muted transition-colors">
                      {featured.title}
                    </h1>
                  </Link>
                  <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                    {featured.summary}
                  </p>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center mt-6 text-coral hover:text-coral-muted font-semibold text-sm transition-colors group"
                  >
                    Read the full story
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>

            {/* Quick links panel */}
            <div className="hidden lg:block bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6">
              <h3 className="font-display text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/film-stocks"
                    className="flex items-center gap-3 text-white/80 hover:text-coral transition-colors text-sm"
                  >
                    <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
                      <FilmIcon />
                    </span>
                    Film Stock Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/exposure-calculator"
                    className="flex items-center gap-3 text-white/80 hover:text-coral transition-colors text-sm"
                  >
                    <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
                      <SunIcon />
                    </span>
                    Exposure Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/reciprocity"
                    className="flex items-center gap-3 text-white/80 hover:text-coral transition-colors text-sm"
                  >
                    <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
                      <TimerIcon />
                    </span>
                    Reciprocity Helper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/beginner-what-is-film-photography"
                    className="flex items-center gap-3 text-white/80 hover:text-coral transition-colors text-sm"
                  >
                    <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
                      <BookIcon />
                    </span>
                    New to Film? Start Here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </FilmStripHero>

      {/* Today in Film History */}
      <TodayInHistory />

      {/* Secondary Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((item, i) => (
            <RevealWrapper key={item.id} delay={i * 100}>
              <SecondaryCard item={item} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t-2 border-warm-black/10" />
      </div>

      {/* News River + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-semibold text-warm-black">
                All Stories
              </h2>
              <ContentFilter />
            </div>
            <div>
              {river.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </section>

      {/* Newsletter CTA — Full-bleed dark section */}
      <DarkNewsletterCTA />
    </>
  );
}

function SecondaryCard({
  item,
}: {
  item: (typeof newsItems)[number];
}) {
  const href =
    item.contentType === "guide"
      ? `/guides/${item.slug}`
      : `/news/${item.slug}`;

  const typeAccent: Record<string, string> = {
    news: "border-l-coral",
    review: "border-l-amber",
    guide: "border-l-coral-muted",
    historical: "border-l-warm-gray",
    lab_spotlight: "border-l-coral-dark",
  };

  return (
    <Link
      href={href}
      className={`group block bg-white border border-warm-border rounded-lg p-5 border-l-4 ${typeAccent[item.contentType] || "border-l-coral"} hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-1 transition-all`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-warm-gray">
          {item.contentType.replace("_", " ")}
        </span>
        <span className="text-warm-gray-light">&middot;</span>
        <time className="text-[10px] text-warm-gray-light font-mono">
          {new Date(item.publishedDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          })}
        </time>
      </div>
      <h3 className="font-display text-base font-semibold text-warm-black group-hover:text-coral transition-colors leading-snug mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">
        {item.summary}
      </p>
    </Link>
  );
}

function FilmIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2M5 3l2 2M19 3l-2 2M12 3v2" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}
