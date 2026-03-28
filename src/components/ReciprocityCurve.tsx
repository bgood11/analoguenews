"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface DataPoint {
  measuredSeconds: number;
  adjustedSeconds: number;
}

export function ReciprocityCurveSingle({
  data,
  stockName,
}: {
  data: DataPoint[];
  stockName: string;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  const width = 440;
  const height = 220;
  const pad = { top: 16, right: 24, bottom: 36, left: 44 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const minLogX = 0;
  const maxLogX = 2.5;
  const minLogY = 0;
  const maxLogY = 2.8;

  function toX(s: number) {
    return pad.left + ((Math.log10(Math.max(s, 1)) - minLogX) / (maxLogX - minLogX)) * chartW;
  }
  function toY(s: number) {
    return pad.top + chartH - ((Math.log10(Math.max(s, 1)) - minLogY) / (maxLogY - minLogY)) * chartH;
  }

  const curvePath = data
    .filter((d) => d.measuredSeconds >= 1)
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(d.measuredSeconds)} ${toY(d.adjustedSeconds)}`)
    .join(" ");

  const refLine = `M ${toX(1)} ${toY(1)} L ${toX(300)} ${toY(300)}`;
  const xTicks = [1, 2, 4, 10, 30, 60, 120, 300];
  const yTicks = [1, 2, 5, 10, 30, 60, 120, 300, 600];

  return (
    <div ref={ref} className="reveal">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        {xTicks.map((t) => (
          <g key={`x-${t}`}>
            <line x1={toX(t)} y1={pad.top} x2={toX(t)} y2={pad.top + chartH} stroke="#F0ECE8" strokeWidth={1} />
            <text x={toX(t)} y={pad.top + chartH + 14} textAnchor="middle" fontSize={9} fill="#8A8278" fontFamily="JetBrains Mono, monospace">
              {t >= 60 ? `${t / 60}m` : `${t}s`}
            </text>
          </g>
        ))}
        {yTicks.map((t) => (
          <g key={`y-${t}`}>
            <line x1={pad.left} y1={toY(t)} x2={pad.left + chartW} y2={toY(t)} stroke="#F0ECE8" strokeWidth={1} />
            <text x={pad.left - 6} y={toY(t) + 3} textAnchor="end" fontSize={9} fill="#8A8278" fontFamily="JetBrains Mono, monospace">
              {t >= 60 ? `${t / 60}m` : `${t}s`}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        <text x={pad.left + chartW / 2} y={height - 2} textAnchor="middle" fontSize={10} fill="#8A8278">
          Metered
        </text>
        <text x={10} y={pad.top + chartH / 2} textAnchor="middle" fontSize={10} fill="#8A8278" transform={`rotate(-90, 10, ${pad.top + chartH / 2})`}>
          Adjusted
        </text>

        {/* Reference line */}
        <path d={refLine} stroke="#C4BEB6" strokeWidth={1} strokeDasharray="4 4" fill="none" />

        {/* Curve */}
        <path
          d={curvePath}
          stroke="#E8634A"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            animation: "draw-curve 1.5s ease forwards 0.3s",
          }}
        />

        {/* Data points */}
        {data.filter((d) => d.measuredSeconds >= 1).map((d, i) => (
          <circle
            key={i}
            cx={toX(d.measuredSeconds)}
            cy={toY(d.adjustedSeconds)}
            r={3}
            fill="#E8634A"
            style={{
              opacity: 0,
              animation: `fade-in 0.3s ease forwards ${0.5 + i * 0.15}s`,
            }}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-coral" />
          <span className="text-warm-gray">{stockName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 border-t border-dashed border-warm-gray-light" />
          <span className="text-warm-gray-light">No compensation</span>
        </div>
      </div>

      <style>{`
        @keyframes draw-curve {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
