import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Gustavo González — Full-Stack Developer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginTop: 24,
            }}
          >
            Gustavo González
          </div>
          <div
            style={{
              fontSize: 38,
              lineHeight: 1.35,
              color: "#a1a1aa",
              marginTop: 28,
              maxWidth: 940,
            }}
          >
            I build multi-tenant backends — PostgreSQL at scale, tenant
            isolation, and systems that stay safe to refactor.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 26, color: "#a1a1aa" }}>
          <span style={{ color: "#f5f5f5" }}>Co-Founder &amp; CTO, AquaSense</span>
          <span>·</span>
          <span>github.com/Gugoraaa</span>
        </div>
      </div>
    ),
    size,
  );
}
