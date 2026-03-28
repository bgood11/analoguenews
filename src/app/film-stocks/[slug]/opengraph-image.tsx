import { ImageResponse } from "next/og";
import { getFilmStock } from "@/data/film-stocks";

export const alt = "analoguenews film stock";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grainLabels: Record<string, string> = {
  ultra_fine: "Ultra Fine",
  fine: "Fine",
  medium: "Medium",
  coarse: "Coarse",
};

const typeLabels: Record<string, string> = {
  colour_negative: "Colour Negative",
  colour_reversal: "Slide Film",
  bw_negative: "Black & White",
  specialty: "Specialty",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stock = getFilmStock(slug);

  if (!stock) {
    return new ImageResponse(
      (
        <div style={{ background: "#1A1410", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 32 }}>
          Film stock not found
        </div>
      ),
      { ...size }
    );
  }

  const isBW = stock.type === "bw_negative";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1410",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, marginBottom: 8 }}>
            {stock.manufacturer}
          </span>
          <div style={{ color: "white", fontSize: 64, fontWeight: 600, fontStyle: "italic", lineHeight: 1.1, marginBottom: 32 }}>
            {stock.name}
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "ISO", value: String(stock.iso) },
              { label: "Grain", value: grainLabels[stock.grain] },
              { label: "Type", value: typeLabels[stock.type] },
              { label: "Formats", value: stock.formats.join(", ") },
            ].map((spec) => (
              <div
                key={spec.label}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 6,
                  padding: "12px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "white", fontSize: 22, fontWeight: 700 }}>
                  {spec.value}
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "#E8634A", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white" }} />
            </div>
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, fontStyle: "italic" }}>
            analoguenews
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: isBW
              ? "linear-gradient(to right, #8A8278, #1A1410, #8A8278)"
              : "linear-gradient(to right, #E8634A, #E89B3A, #E8634A)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
