import Link from "next/link";
import { filmStocks, filmTypes, manufacturers } from "@/data/film-stocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Film Stock Explorer — analoguenews",
  description:
    "Browse 25+ film stocks with specs, descriptions, and reciprocity data. Find the right film for your next shoot.",
};

const grainLabels: Record<string, string> = {
  ultra_fine: "Ultra Fine",
  fine: "Fine",
  medium: "Medium",
  coarse: "Coarse",
};

const statusColors: Record<string, string> = {
  available: "bg-green-50 text-green-700",
  discontinued: "bg-red-50 text-red-700",
  limited: "bg-amber-50 text-amber-700",
};

export default function FilmStocksPage() {
  const grouped = manufacturers.map((m) => ({
    manufacturer: m,
    stocks: filmStocks.filter((s) => s.manufacturer === m),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-warm-black mb-1">
        Film Stock Explorer
      </h1>
      <p className="text-sm text-warm-gray mb-2">
        {filmStocks.length} stocks from {manufacturers.length} manufacturers.
        Click any stock for full details and reciprocity data.
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-4">
        {filmTypes.map((t) => {
          const count = filmStocks.filter((s) => s.type === t.value).length;
          return (
            <span
              key={t.value}
              className="text-xs border border-warm-border rounded-full px-3 py-1 text-warm-gray"
            >
              {t.label} ({count})
            </span>
          );
        })}
      </div>

      {grouped.map(({ manufacturer, stocks }) => (
        <section key={manufacturer} className="mb-10">
          <h2 className="text-lg font-bold text-warm-black mb-4 border-b border-warm-border pb-2">
            {manufacturer}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stocks.map((stock) => (
              <Link
                key={stock.id}
                href={`/film-stocks/${stock.slug}`}
                className="group block bg-white border border-warm-border rounded-xl p-4 hover:border-coral/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-warm-black group-hover:text-coral transition-colors">
                    {stock.name}
                  </h3>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[stock.status]}`}
                  >
                    {stock.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-warm-gray mb-2">
                  <span className="font-mono">ISO {stock.iso}</span>
                  <span>{grainLabels[stock.grain]} grain</span>
                  <span>{stock.formats.join(", ")}</span>
                </div>
                <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">
                  {stock.description.split(".").slice(0, 2).join(".") + "."}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
