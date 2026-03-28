"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { filmStocks, type FilmStock } from "@/data/film-stocks";

const grainLabels: Record<string, string> = {
  ultra_fine: "Ultra Fine",
  fine: "Fine",
  medium: "Medium",
  coarse: "Coarse",
};

const typeLabels: Record<string, string> = {
  colour_negative: "Colour Negative",
  colour_reversal: "Slide / Reversal",
  bw_negative: "Black & White",
  specialty: "Specialty",
};

function ComparisonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const aSlug = searchParams.get("a") || filmStocks[0].slug;
  const bSlug = searchParams.get("b") || filmStocks[6].slug;

  const stockA = filmStocks.find((s) => s.slug === aSlug) || filmStocks[0];
  const stockB = filmStocks.find((s) => s.slug === bSlug) || filmStocks[6];

  function setStock(slot: "a" | "b", slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(slot, slug);
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Stock selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <StockSelector
          label="Stock A"
          value={stockA.slug}
          onChange={(slug) => setStock("a", slug)}
          accentColor="coral"
        />
        <StockSelector
          label="Stock B"
          value={stockB.slug}
          onChange={(slug) => setStock("b", slug)}
          accentColor="amber"
        />
      </div>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <ComparisonCard stock={stockA} accent="coral" other={stockB} />
        <ComparisonCard stock={stockB} accent="amber" other={stockA} />
      </div>

      {/* Reciprocity curve */}
      {(stockA.reciprocityData || stockB.reciprocityData) && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-warm-black mb-4">
            Reciprocity Failure Curves
          </h2>
          <div className="bg-white border border-warm-border rounded-lg p-6">
            <ReciprocityCurve stockA={stockA} stockB={stockB} />
            <div className="flex items-center justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0.5 bg-coral" />
                <span className="text-warm-gray">
                  {stockA.manufacturer} {stockA.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0.5 bg-amber" />
                <span className="text-warm-gray">
                  {stockB.manufacturer} {stockB.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-4 h-0.5 border-t border-dashed border-warm-gray-light"
                  style={{ borderTopWidth: 1 }}
                />
                <span className="text-warm-gray-light">No compensation</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Head-to-head specs */}
      <section>
        <h2 className="font-display text-lg font-semibold text-warm-black mb-4">
          Specs Comparison
        </h2>
        <div className="bg-white border border-warm-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-warm-bg-alt">
                <th className="text-left py-2.5 px-4 font-semibold text-warm-black w-1/3">
                  Spec
                </th>
                <th className="text-left py-2.5 px-4 font-semibold text-coral w-1/3">
                  {stockA.name}
                </th>
                <th className="text-left py-2.5 px-4 font-semibold text-amber w-1/3">
                  {stockB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Manufacturer", a: stockA.manufacturer, b: stockB.manufacturer },
                { label: "ISO", a: String(stockA.iso), b: String(stockB.iso) },
                { label: "Type", a: typeLabels[stockA.type], b: typeLabels[stockB.type] },
                { label: "Grain", a: grainLabels[stockA.grain], b: grainLabels[stockB.grain] },
                { label: "Formats", a: stockA.formats.join(", "), b: stockB.formats.join(", ") },
                { label: "Status", a: stockA.status, b: stockB.status },
              ].map((row) => (
                <tr key={row.label} className="border-t border-warm-border-light">
                  <td className="py-2.5 px-4 font-medium text-warm-black">
                    {row.label}
                  </td>
                  <td
                    className={`py-2.5 px-4 font-mono text-sm ${row.a === row.b ? "text-warm-gray" : "text-warm-black font-semibold"}`}
                  >
                    {row.a}
                  </td>
                  <td
                    className={`py-2.5 px-4 font-mono text-sm ${row.a === row.b ? "text-warm-gray" : "text-warm-black font-semibold"}`}
                  >
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StockSelector({
  label,
  value,
  onChange,
  accentColor,
}: {
  label: string;
  value: string;
  onChange: (slug: string) => void;
  accentColor: string;
}) {
  return (
    <div>
      <label
        className={`text-[10px] font-semibold uppercase tracking-widest mb-2 block ${accentColor === "coral" ? "text-coral" : "text-amber"}`}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-warm-border rounded-lg bg-white text-warm-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238A8278'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          backgroundSize: "16px",
        }}
      >
        {filmStocks.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.manufacturer} {s.name} — ISO {s.iso}
          </option>
        ))}
      </select>
    </div>
  );
}

function ComparisonCard({
  stock,
  accent,
  other,
}: {
  stock: FilmStock;
  accent: string;
  other: FilmStock;
}) {
  const borderColor = accent === "coral" ? "border-t-coral" : "border-t-amber";

  return (
    <div
      className={`bg-white border border-warm-border rounded-lg overflow-hidden border-t-4 ${borderColor}`}
    >
      <div className="p-5">
        <div className="text-xs text-warm-gray mb-1">{stock.manufacturer}</div>
        <h3 className="font-display text-xl font-semibold text-warm-black mb-3">
          {stock.name}
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-warm-bg rounded-sm p-2 text-center">
            <div className="text-lg font-mono font-bold text-warm-black">
              {stock.iso}
            </div>
            <div className="text-[10px] text-warm-gray">ISO</div>
          </div>
          <div className="bg-warm-bg rounded-sm p-2 text-center">
            <div className="text-sm font-semibold text-warm-black">
              {grainLabels[stock.grain]}
            </div>
            <div className="text-[10px] text-warm-gray">Grain</div>
          </div>
        </div>
        <p className="text-sm text-warm-gray leading-relaxed line-clamp-3">
          {stock.character}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {stock.bestFor.slice(0, 3).map((use) => (
            <span
              key={use}
              className="text-[10px] bg-coral-light text-coral-dark rounded-sm px-2 py-0.5"
            >
              {use}
            </span>
          ))}
        </div>
        <Link
          href={`/film-stocks/${stock.slug}`}
          className="block mt-4 text-xs text-coral hover:text-coral-dark font-semibold transition-colors"
        >
          View full details &rarr;
        </Link>
      </div>
    </div>
  );
}

function ReciprocityCurve({
  stockA,
  stockB,
}: {
  stockA: FilmStock;
  stockB: FilmStock;
}) {
  const width = 500;
  const height = 280;
  const padding = { top: 20, right: 30, bottom: 40, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Log scale: 1s to 300s
  const minLog = 0; // log10(1)
  const maxLog = 2.5; // log10(~300)
  const minLogY = 0;
  const maxLogY = 2.8; // log10(~600)

  function toX(seconds: number): number {
    const log = Math.log10(Math.max(seconds, 1));
    return padding.left + (log - minLog) / (maxLog - minLog) * chartW;
  }

  function toY(seconds: number): number {
    const log = Math.log10(Math.max(seconds, 1));
    return padding.top + chartH - (log - minLogY) / (maxLogY - minLogY) * chartH;
  }

  function buildPath(data: { measuredSeconds: number; adjustedSeconds: number }[]): string {
    return data
      .filter((d) => d.measuredSeconds >= 1)
      .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(d.measuredSeconds)} ${toY(d.adjustedSeconds)}`)
      .join(" ");
  }

  // Reference line y=x
  const refLine = `M ${toX(1)} ${toY(1)} L ${toX(300)} ${toY(300)}`;

  // Grid lines
  const xTicks = [1, 2, 4, 10, 30, 60, 120, 300];
  const yTicks = [1, 2, 5, 10, 30, 60, 120, 300, 600];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* Grid */}
      {xTicks.map((t) => (
        <g key={`x-${t}`}>
          <line
            x1={toX(t)} y1={padding.top} x2={toX(t)} y2={padding.top + chartH}
            stroke="#F0ECE8" strokeWidth={1}
          />
          <text
            x={toX(t)} y={padding.top + chartH + 16}
            textAnchor="middle" fontSize={10} fill="#8A8278" fontFamily="JetBrains Mono, monospace"
          >
            {t >= 60 ? `${t / 60}m` : `${t}s`}
          </text>
        </g>
      ))}
      {yTicks.map((t) => (
        <g key={`y-${t}`}>
          <line
            x1={padding.left} y1={toY(t)} x2={padding.left + chartW} y2={toY(t)}
            stroke="#F0ECE8" strokeWidth={1}
          />
          <text
            x={padding.left - 8} y={toY(t) + 3}
            textAnchor="end" fontSize={10} fill="#8A8278" fontFamily="JetBrains Mono, monospace"
          >
            {t >= 60 ? `${t / 60}m` : `${t}s`}
          </text>
        </g>
      ))}

      {/* Axis labels */}
      <text
        x={padding.left + chartW / 2} y={height - 2}
        textAnchor="middle" fontSize={11} fill="#8A8278"
      >
        Metered Time
      </text>
      <text
        x={12} y={padding.top + chartH / 2}
        textAnchor="middle" fontSize={11} fill="#8A8278"
        transform={`rotate(-90, 12, ${padding.top + chartH / 2})`}
      >
        Adjusted Time
      </text>

      {/* Reference line (no compensation) */}
      <path d={refLine} stroke="#C4BEB6" strokeWidth={1} strokeDasharray="4 4" fill="none" />

      {/* Stock A curve */}
      {stockA.reciprocityData && (
        <path
          d={buildPath(stockA.reciprocityData)}
          stroke="#E8634A"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
      )}

      {/* Stock B curve */}
      {stockB.reciprocityData && (
        <path
          d={buildPath(stockB.reciprocityData)}
          stroke="#E89B3A"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
      )}

      {/* Data points */}
      {stockA.reciprocityData?.filter((d) => d.measuredSeconds >= 1).map((d, i) => (
        <circle
          key={`a-${i}`}
          cx={toX(d.measuredSeconds)} cy={toY(d.adjustedSeconds)}
          r={3} fill="#E8634A"
        />
      ))}
      {stockB.reciprocityData?.filter((d) => d.measuredSeconds >= 1).map((d, i) => (
        <circle
          key={`b-${i}`}
          cx={toX(d.measuredSeconds)} cy={toY(d.adjustedSeconds)}
          r={3} fill="#E89B3A"
        />
      ))}
    </svg>
  );
}

export default function FilmComparisonPage() {
  return (
    <>
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/tools"
            className="text-sm text-white/40 hover:text-coral transition-colors mb-4 inline-block"
          >
            &larr; All tools
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-semibold italic mb-2">
            Film Stock Comparison
          </h1>
          <p className="text-white/50 text-sm max-w-lg">
            Compare two film stocks side-by-side — specs, character, and
            reciprocity failure curves. Shareable via URL.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center text-warm-gray">
            Loading comparison...
          </div>
        }
      >
        <ComparisonContent />
      </Suspense>
    </>
  );
}
