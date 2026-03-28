"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const apertures = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
const shutterSpeeds = [
  "1/4000",
  "1/2000",
  "1/1000",
  "1/500",
  "1/250",
  "1/125",
  "1/60",
  "1/30",
  "1/15",
  "1/8",
  "1/4",
  "1/2",
  "1",
  "2",
  "4",
  "8",
  "15",
  "30",
];
const isoValues = [25, 50, 100, 200, 400, 800, 1600, 3200];

const presets = [
  { name: "Bright Sun", ev: 15, desc: "Clear sky, direct sunlight" },
  { name: "Hazy Sun", ev: 14, desc: "Thin clouds, soft shadows" },
  { name: "Cloudy Bright", ev: 13, desc: "Overcast but bright" },
  { name: "Overcast", ev: 12, desc: "Heavy clouds, no shadows" },
  { name: "Open Shade", ev: 11, desc: "Shade on a sunny day" },
  { name: "Indoor (bright)", ev: 9, desc: "Well-lit room, large windows" },
  { name: "Indoor (normal)", ev: 7, desc: "Average indoor lighting" },
  { name: "Indoor (dim)", ev: 5, desc: "Low artificial light" },
  { name: "Twilight", ev: 3, desc: "Just after sunset" },
  { name: "Night Street", ev: 1, desc: "Street lights, neon signs" },
  { name: "Full Moon", ev: -2, desc: "Moonlit landscape" },
];

function shutterToEv(shutter: string): number {
  if (shutter.startsWith("1/")) {
    return Math.log2(parseFloat(shutter.slice(2)));
  }
  return -Math.log2(parseFloat(shutter));
}

function apertureToEv(aperture: number): number {
  return Math.log2(aperture * aperture);
}

function isoToEv(iso: number): number {
  return Math.log2(iso / 100);
}

function evToShutterSpeed(ev: number): string {
  const seconds = Math.pow(2, -ev);
  if (seconds < 1) {
    const denom = Math.round(1 / seconds);
    return `1/${denom}`;
  }
  if (seconds >= 60) {
    return `${Math.round(seconds)}s (${(seconds / 60).toFixed(1)}min)`;
  }
  return `${seconds.toFixed(1)}s`;
}

export default function ExposureCalculatorPage() {
  const [selectedIso, setSelectedIso] = useState(400);
  const [selectedAperture, setSelectedAperture] = useState(5.6);
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);

  const evAtIso100 = selectedPreset.ev;
  const evAdjusted = evAtIso100 + isoToEv(selectedIso);
  const apertureEv = apertureToEv(selectedAperture);
  const shutterEv = evAdjusted - apertureEv;
  const calculatedShutter = evToShutterSpeed(shutterEv);

  const combinations = useMemo(() => {
    return apertures.map((ap) => {
      const apEv = apertureToEv(ap);
      const sEv = evAdjusted - apEv;
      return {
        aperture: ap,
        shutter: evToShutterSpeed(sEv),
        shutterEv: sEv,
        practical: sEv >= -6 && sEv <= 13,
      };
    });
  }, [evAdjusted]);

  return (
    <>
    <section className="bg-warm-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-amber/15" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Link
          href="/tools"
          className="text-sm text-white/40 hover:text-coral transition-colors mb-4 inline-block"
        >
          &larr; All tools
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-amber/20 rounded-sm flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold italic">
            Exposure Calculator
          </h1>
        </div>
        <p className="text-white/50 text-sm max-w-lg">
          Select lighting conditions, film speed, and see all aperture/shutter
          combinations with practical notes.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber via-coral to-amber opacity-60" />
    </section>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

      {/* Lighting Conditions */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-warm-black mb-3 uppercase tracking-wide">
          Lighting Conditions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setSelectedPreset(preset)}
              className={`text-left p-3 rounded-lg border transition-colors ${
                selectedPreset.name === preset.name
                  ? "bg-coral-light border-coral text-warm-black"
                  : "bg-white border-warm-border text-warm-gray hover:border-warm-gray-light"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{preset.name}</span>
                <span className="text-[10px] font-mono opacity-50">EV {preset.ev}</span>
              </div>
              <div className="text-xs opacity-75">{preset.desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* ISO */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-warm-black mb-3 uppercase tracking-wide">
          Film Speed (ISO)
        </h2>
        <div className="flex flex-wrap gap-2">
          {isoValues.map((iso) => (
            <button
              key={iso}
              onClick={() => setSelectedIso(iso)}
              className={`px-4 py-2 rounded-lg border text-sm font-mono transition-colors ${
                selectedIso === iso
                  ? "bg-warm-black text-white border-warm-black"
                  : "bg-white border-warm-border text-warm-gray hover:border-warm-gray-light"
              }`}
            >
              {iso}
            </button>
          ))}
        </div>
      </section>

      {/* Result Hero */}
      <section className="bg-white border-2 border-coral rounded-lg p-6 mb-8 text-center">
        <div className="text-xs text-warm-gray uppercase tracking-wider mb-1">
          {selectedPreset.name} &middot; ISO {selectedIso}
        </div>
        <div className="flex items-center justify-center gap-3 my-2">
          <span className="text-2xl font-mono font-semibold text-warm-black">
            f/{selectedAperture}
          </span>
          <span className="text-warm-gray-light text-lg">&rarr;</span>
          <span className="text-3xl font-mono font-bold text-coral">
            {calculatedShutter}
          </span>
        </div>
        <p className="text-xs text-warm-gray">
          Tap a row below to change aperture
        </p>
      </section>

      {/* All Combinations */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-warm-black mb-3 uppercase tracking-wide">
          All Combinations
        </h2>
        <div className="bg-white border border-warm-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-warm-bg-alt">
                <th className="text-left py-2 px-4 font-semibold text-warm-black">
                  Aperture
                </th>
                <th className="text-left py-2 px-4 font-semibold text-warm-black">
                  Shutter Speed
                </th>
                <th className="text-left py-2 px-4 font-semibold text-warm-black hidden sm:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {combinations.map((c) => (
                <tr
                  key={c.aperture}
                  onClick={() => setSelectedAperture(c.aperture)}
                  role="button"
                  tabIndex={0}
                  className={`border-t border-warm-border-light cursor-pointer transition-colors hover:bg-warm-bg-alt ${
                    c.aperture === selectedAperture ? "bg-coral-light hover:bg-coral-light" : ""
                  } ${!c.practical ? "opacity-40" : ""}`}
                >
                  <td className="py-2 px-4 font-mono text-warm-black">
                    f/{c.aperture}
                  </td>
                  <td className="py-2 px-4 font-mono text-warm-black">
                    {c.shutter}
                  </td>
                  <td className="py-2 px-4 text-warm-gray hidden sm:table-cell">
                    {c.shutterEv > 10 && "Very fast — sports/action"}
                    {c.shutterEv >= 6 && c.shutterEv <= 10 && "Hand-holdable"}
                    {c.shutterEv >= 3 && c.shutterEv < 6 && "Steady hands or brace"}
                    {c.shutterEv >= 0 && c.shutterEv < 3 && "Tripod recommended"}
                    {c.shutterEv < 0 && "Tripod required"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sunny 16 Rule */}
      <section className="bg-amber-light border-l-4 border-amber rounded-sm p-5">
        <h2 className="text-sm font-semibold text-warm-black mb-2">
          The Sunny 16 Rule
        </h2>
        <p className="text-sm text-warm-gray leading-relaxed">
          In bright sunlight, set your aperture to f/16 and your shutter speed
          to 1/ISO. So with ISO 400 film on a sunny day: f/16 at 1/500 (nearest
          standard speed). From there, you can trade stops — f/11 at 1/1000,
          f/8 at 1/2000, etc. This calculator does the maths, but the Sunny 16
          rule is worth memorising for when you don&apos;t have your phone.
        </p>
      </section>
    </div>
    </>
  );
}
