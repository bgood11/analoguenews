import { newsItems } from "@/data/news";
import { NewsCard } from "@/components/NewsCard";
import { Sidebar } from "@/components/Sidebar";
import { ContentFilter } from "@/components/ContentFilter";

export default function HomePage() {
  const sortedNews = [...newsItems].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() -
      new Date(a.publishedDate).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Main Column — News River */}
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-warm-black mb-1">
              Latest
            </h1>
            <p className="text-sm text-warm-gray">
              News, guides, and stories from the analogue photography world
            </p>
          </div>

          <ContentFilter />

          <div className="mt-6">
            {sortedNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
