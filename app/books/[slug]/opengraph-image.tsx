import { ImageResponse } from "next/og";
import { books, getBook } from "@/lib/data";
import { categoryBg } from "@/lib/ui";
import { SITE_NAME } from "@/lib/site";

export const alt = "MoneyShelf book";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

// A landscape card for each book. We deliberately don't embed the cover art —
// a 2:3 cover in a 1.91:1 slot letterboxes badly, and covers vary wildly in
// quality. Typography + the category color carry the brand instead.
export default async function BookOgImage({
  params,
}: {
  params: { slug: string };
}) {
  const book = getBook(params.slug);
  const title = book?.title ?? SITE_NAME;

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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#221D14" }}>
            moneyshelf<span style={{ color: "#FF7A2F" }}>*</span>
          </div>
          {book && (
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                background: categoryBg(book.category),
                border: "3px solid #221D14",
                borderRadius: 999,
                padding: "6px 18px",
              }}
            >
              {book.category}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 72 : 88,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#221D14",
            }}
          >
            {title}
          </div>
          {book && (
            <div style={{ display: "flex", fontSize: 32, color: "#6E6350", marginTop: 18 }}>
              by {book.author}
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 60, height: 12, background: "#FF7A2F", borderRadius: 999 }} />
          <div style={{ display: "flex", fontSize: 26, color: "#6E6350" }}>
            {book ? `Rated ${book.rating}/5 on MoneyShelf` : "The books that build wealth"}
          </div>
        </div>
      </div>
    ),
    size
  );
}
