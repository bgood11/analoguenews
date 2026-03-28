import { ImageResponse } from "next/og";

export const alt = "analoguenews — The daily pulse of analogue photography";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1410",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Film strip accent */}
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
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#E8634A",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "2.5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "white",
                }}
              />
            </div>
          </div>
          <span
            style={{
              color: "white",
              fontSize: 40,
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            analoguenews
          </span>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          The daily pulse of analogue photography
        </p>
      </div>
    ),
    { ...size }
  );
}
