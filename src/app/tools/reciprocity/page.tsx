"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { filmStocks } from "@/data/film-stocks";

const stocksWithReciprocity = filmStocks.filter(
  (s) => s.reciprocityData && s.reciprocityData.length > 0
);

function interpolateReciprocity(
  data: { measuredSeconds: number; adjustedSeconds: number }[],
  measuredTime: number
): number {
  if (measuredTime <= 1) return measuredTime;

  // Find the two bracketing data points
  let lower = data[0];
  let upper = data[data.length - 1];

  for (let i = 0; i < data.length - 1; i++) {
    if (
      data[i].measuredSeconds <= measuredTime &&
      data[i + 1].measuredSeconds >= measuredTime
    ) {
      lower = data[i];
      upper = data[i + 1];
      break;
    }
  }

  // If beyond the data range, extrapolate from the last two points
  if (measuredTime > upper.measuredSeconds) {
    lower = data[data.length - 2];
    upper = data[data.length - 1];
  }

  if (lower.measuredSeconds === upper.measuredSeconds) {
    return upper.adjustedSeconds;
  }

  // Log-linear interpolation
  const logLower = Math.log10(lower.measuredSeconds || 1);
  const logUpper = Math.log10(upper.measuredSeconds);
  const logMeasured = Math.log10(measuredTime);

  const t = (logMeasured - logLower) / (logUpper - logLower);

  const logAdjLower = Math.log10(lower.adjustedSeconds || 1);
  const logAdjUpper = Math.log10(upper.adjustedSeconds);

  return Math.pow(10, logAdjLower + t * (logAdjUpper - logAdjLower));
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  if (mins < 60) return `${mins}m ${secs}s`;
  const hours = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return `${hours}h ${remainMins}m`;
}

export default function ReciprocityPage() {
  const [selectedStockId, setSelectedStockId] = useState(
    stocksWithReciprocity[0]?.id || ""
  );
  const [measuredTime, setMeasuredTime] = useState("10");

  const selectedStock = filmStocks.find((s) => s.id === selectedStockId);
  const measuredSeconds = parseFloat(measuredTime) || 0;

  const result = useMemo(() => {
    if (!selectedStock?.reciprocityData || measuredSeconds <= 0) return null;

    const adjusted = interpolateReciprocity(
      selectedStock.reciprocityData,
      measuredSeconds
    );

    return {
      adjustedSeconds: adjusted,
      factor: adjusted / measuredSeconds,
      stopsCompensation: Math.log2(adjusted / measuredSeconds),
    };
  }, [selectedStock, measuredSeconds]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link
        href="/tools"
        className="text-sm text-warm-gray hover:text-coral transition-colors mb-6 inline-block"
      >
        &larr; All tools
      </Link>

      <h1 className="font-display text-2xl font-semibold text-warm-black mb-1">
        Reciprocity Failure Helper
      </h1>
      <p className="text-sm text-warm-gray mb-8">
        Film becomes less sensitive during long exposures. Select your film and
        metered time to get the adjusted exposure.
      </p>

      {/* Film Selection */}
      <section className="mb-6">
        <label className="text-sm font-semibold text-warm-black mb-2 block uppercase tracking-wide">
          Film Stock
        </label>
        <select
          value={selectedStockId}
          onChange={(e) => setSelectedStockId(e.target.value)}
          className="w-full px-4 py-3 border border-warm-border rounded-lg bg-white text-warm-black text-sm focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
        >
          {stocksWithReciprocity.map((stock) => (
            <option key={stock.id} value={stock.id}>
              {stock.manufacturer} {stock.name} (ISO {stock.iso})
            </option>
          ))}
        </select>
      </section>

      {/* Metered Time */}
      <section className="mb-8">
        <label className="text-sm font-semibold text-warm-black mb-2 block uppercase tracking-wide">
          Metered Exposure Time (seconds)
        </label>
        <input
          type="number"
          value={measuredTime}
          onChange={(e) => setMeasuredTime(e.target.value)}
          min="1"
          max="3600"
          step="1"
          className="w-full px-4 py-3 border border-warm-border rounded-lg bg-white text-warm-black text-sm font-mono focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
          placeholder="Enter metered time in seconds"
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {[1, 2, 4, 8, 15, 30, 60, 120, 240].map((t) => (
            <button
              key={t}
              onClick={() => setMeasuredTime(String(t))}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
                measuredTime === String(t)
                  ? "bg-warm-black text-white border-warm-black"
                  : "bg-white border-warm-border text-warm-gray hover:border-warm-gray-light"
              }`}
            >
              {t}s
            </button>
          ))}
        </div>
      </section>

      {/* Result */}
      {result && measuredSeconds > 0 && (
        <section className="bg-white border-2 border-coral rounded-xl p-6 mb-8">
          <div className="text-center">
            <div className="text-sm text-warm-gray mb-1">
              Adjusted Exposure Time
            </div>
            <div className="text-4xl font-bold font-mono text-coral mb-2">
              {formatTime(result.adjustedSeconds)}
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-warm-gray">
              <span>
                Factor:{" "}
                <span className="font-mono font-semibold text-warm-black">
                  {result.factor.toFixed(1)}x
                </span>
              </span>
              <span>
                Extra stops:{" "}
                <span className="font-mono font-semibold text-warm-black">
                  +{result.stopsCompensation.toFixed(1)}
                </span>
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Reference Table */}
      {selectedStock?.reciprocityData && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-warm-black mb-3 uppercase tracking-wide">
            {selectedStock.manufacturer} {selectedStock.name} — Reference Data
          </h2>
          <div className="bg-white border border-warm-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-warm-bg-alt">
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Metered
                  </th>
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Adjusted
                  </th>
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Factor
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedStock.reciprocityData.map((d, i) => (
                  <tr key={i} className="border-t border-warm-border-light">
                    <td className="py-2 px-4 font-mono">{d.measuredSeconds}s</td>
                    <td className="py-2 px-4 font-mono">
                      {formatTime(d.adjustedSeconds)}
                    </td>
                    <td className="py-2 px-4 font-mono text-warm-gray">
                      {d.measuredSeconds > 0
                        ? `${(d.adjustedSeconds / d.measuredSeconds).toFixed(1)}x`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray-light mt-2">
            Data from manufacturer specifications and community testing.
            Intermediate values are interpolated. For critical exposures, bracket
            ±1 stop.
          </p>
        </section>
      )}

      {/* Explanation */}
      <section className="bg-warm-bg-alt border-l-4 border-warm-gray rounded-sm p-5">
        <h2 className="text-sm font-semibold text-warm-black mb-2">
          What is reciprocity failure?
        </h2>
        <p className="text-sm text-warm-gray leading-relaxed">
          In normal conditions, doubling the exposure time doubles the amount of
          light hitting the film. But at very long exposures (typically over 1
          second), film becomes progressively less efficient — this is called
          reciprocity failure. A metered 10-second exposure might actually need
          15-20 seconds to produce a correctly exposed negative. Each film stock
          behaves differently, which is why this tool exists.
        </p>
      </section>
    </div>
  );
}
