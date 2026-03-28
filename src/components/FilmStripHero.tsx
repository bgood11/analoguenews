export function FilmStripHero({
  palette = "warm",
  children,
}: {
  palette?: "warm" | "bw" | "vivid" | "cool";
  children: React.ReactNode;
}) {
  const palettes: Record<string, string[]> = {
    warm: [
      "#E8634A",
      "#E89B3A",
      "#D4522A",
      "#F2B5A8",
      "#E8634A",
      "#C4BEB6",
      "#E89B3A",
      "#E8634A",
      "#F2B5A8",
      "#D4522A",
      "#E89B3A",
      "#E8634A",
      "#C4BEB6",
      "#E89B3A",
      "#E8634A",
      "#D4522A",
    ],
    bw: [
      "#3A3632",
      "#5A554E",
      "#8A8278",
      "#C4BEB6",
      "#3A3632",
      "#E8E4DF",
      "#5A554E",
      "#8A8278",
      "#3A3632",
      "#C4BEB6",
      "#5A554E",
      "#E8E4DF",
      "#3A3632",
      "#8A8278",
      "#C4BEB6",
      "#5A554E",
    ],
    vivid: [
      "#2E7D32",
      "#E8634A",
      "#1565C0",
      "#E89B3A",
      "#6A1B9A",
      "#2E7D32",
      "#E8634A",
      "#1565C0",
      "#E89B3A",
      "#6A1B9A",
      "#2E7D32",
      "#E8634A",
      "#1565C0",
      "#E89B3A",
      "#6A1B9A",
      "#2E7D32",
    ],
    cool: [
      "#1A1410",
      "#E8634A",
      "#1A1410",
      "#E89B3A",
      "#1A1410",
      "#E8634A",
      "#1A1410",
      "#C4BEB6",
      "#1A1410",
      "#E8634A",
      "#1A1410",
      "#E89B3A",
      "#1A1410",
      "#E8634A",
      "#1A1410",
      "#C4BEB6",
    ],
  };

  const colors = palettes[palette] || palettes.warm;
  const frameWidth = 80;
  const sprocketSize = 8;
  const totalWidth = colors.length * (frameWidth + 4);

  return (
    <section className="bg-warm-black text-white relative overflow-hidden">
      {/* Animated film strip background */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div
          className="flex gap-1 h-full animate-filmstrip"
          style={{
            width: totalWidth * 2,
            animationDuration: "45s",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...colors, ...colors].map((color, i) => (
            <div key={i} className="flex-shrink-0 h-full relative" style={{ width: frameWidth }}>
              {/* Sprocket holes top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <div
                  className="rounded-sm"
                  style={{
                    width: sprocketSize,
                    height: sprocketSize,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                />
              </div>
              {/* Frame */}
              <div
                className="absolute top-5 bottom-5 left-1 right-1 rounded-sm"
                style={{ backgroundColor: color }}
              />
              {/* Sprocket holes bottom */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div
                  className="rounded-sm"
                  style={{
                    width: sprocketSize,
                    height: sprocketSize,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-black/95 via-warm-black/90 to-warm-black/80" />

      {/* Content */}
      <div className="relative">{children}</div>

      {/* Film strip accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
    </section>
  );
}
