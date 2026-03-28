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

const statusConfig: Record<string, { label: string; color: string }> = {
  available: {
    label: "Available",
    color: "bg-coral-light text-coral-dark",
  },
  discontinued: {
    label: "Discontinued",
    color: "bg-warm-bg-alt text-warm-gray",
  },
  limited: {
    label: "Limited",
    color: "bg-amber-light text-amber",
  },
};

const typeColors: Record<string, string> = {
  colour_negative: "bg-coral/10 text-coral-dark border-coral/20",
  colour_reversal: "bg-amber-light text-amber border-amber/20",
  bw_negative: "bg-warm-bg-alt text-warm-gray border-warm-border",
  specialty: "bg-coral-light text-coral border-coral/20",
};

export default function FilmStocksPage() {
  const grouped = manufacturers.map((m) => ({
    manufacturer: m,
    stocks: filmStocks.filter((s) => s.manufacturer === m),
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-amber/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <p className="text-coral font-mono text-xs uppercase tracking-widest mb-4">
            Reference
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold italic mb-3">
            Film Stock Explorer
          </h1>
          <p className="text-white/60 max-w-xl">
            {filmStocks.length} stocks from {manufacturers.length}{" "}
            manufacturers. Specs, character descriptions, and reciprocity data
            for every stock.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {filmTypes.map((t) => {
              const count = filmStocks.filter(
                (s) => s.type === t.value
              ).length;
              return (
                <span
                  key={t.value}
                  className="text-xs border border-white/20 rounded-sm px-3 py-1 text-white/60"
                >
                  {t.label}{" "}
                  <span className="font-mono text-white/40">{count}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {grouped.map(({ manufacturer, stocks }) => (
          <section key={manufacturer} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-display text-xl font-semibold text-warm-black">
                {manufacturer}
              </h2>
              <div className="flex-1 h-px bg-warm-border" />
              <span className="text-xs font-mono text-warm-gray-light">
                {stocks.length} stock{stocks.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stocks.map((stock) => {
                const status = statusConfig[stock.status];
                return (
                  <Link
                    key={stock.id}
                    href={`/film-stocks/${stock.slug}`}
                    className="group block bg-white border border-warm-border rounded-lg p-4 hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
                  >
                    {/* Color strip at top */}
                    <div
                      className={`h-1 -mx-4 -mt-4 mb-3 rounded-t-lg ${
                        stock.type === "bw_negative"
                          ? "bg-warm-black/80"
                          : stock.type === "colour_reversal"
                            ? "bg-gradient-to-r from-amber to-coral"
                            : "bg-gradient-to-r from-coral to-coral-muted"
                      }`}
                    />
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display font-semibold text-warm-black group-hover:text-coral transition-colors">
                        {stock.name}
                      </h3>
                      <span
                        className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-warm-gray mb-2">
                      <span className="font-mono font-medium">
                        ISO {stock.iso}
                      </span>
                      <span>{grainLabels[stock.grain]}</span>
                      <span>{stock.formats.join(" · ")}</span>
                    </div>
                    <p className="text-xs text-warm-gray leading-relaxed line-clamp-2">
                      {stock.description.split(".").slice(0, 2).join(".") + "."}
                    </p>
                    {stock.reciprocityData && (
                      <div className="mt-2 text-[10px] text-coral font-mono">
                        Reciprocity data available
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
