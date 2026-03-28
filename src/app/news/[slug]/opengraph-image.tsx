import { ImageResponse } from "next/og";
import { getNewsItem } from "@/data/news";

export const alt = "analoguenews article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const typeLabels: Record<string, string> = {
  news: "NEWS",
  review: "REVIEW",
  historical: "HISTORY",
  lab_spotlight: "LAB SPOTLIGHT",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  const title = item?.title || "Article";
  const type = item?.contentType || "news";
  const date = item
    ? new Date(item.publishedDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

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
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div
              style={{
                background: "#E8634A",
                color: "white",
                fontSize: 14,
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: 4,
                letterSpacing: 1.5,
              }}
            >
              {typeLabels[type] || "NEWS"}
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
              {date}
            </span>
          </div>
          <div
            style={{
              color: "white",
              fontSize: title.length > 80 ? 36 : 44,
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "#E8634A",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
            background: "linear-gradient(to right, #E8634A, #E89B3A, #E8634A)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
