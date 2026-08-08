import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide social card, styled to match the "Pocket Money" design:
// cream ground, ink border, blue accent, hand-drawn underline.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFF8EE",
          padding: 64,
          border: "16px solid #221D14",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#221D14" }}>
          moneyshelf<span style={{ color: "#FF7A2F" }}>*</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#221D14",
            }}
          >
            The books that build&nbsp;
            <span style={{ color: "#2C4BE6" }}>wealth</span>
          </div>
          {/* hand-drawn underline */}
          <div
            style={{
              display: "flex",
              width: 360,
              height: 12,
              background: "#FF7A2F",
              borderRadius: 999,
              marginTop: 8,
            }}
          />
          <div style={{ display: "flex", fontSize: 30, color: "#6E6350", marginTop: 28 }}>
            Money advice from your smartest friend — the one who read all the books.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Investing", "Budgeting", "Mindset", "FIRE"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                color: "#221D14",
                background: "#FFE1C7",
                border: "3px solid #221D14",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
