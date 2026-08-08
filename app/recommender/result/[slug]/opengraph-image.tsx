import { ImageResponse } from "next/og";
import { books, getBook } from "@/lib/data";
import { categoryBg } from "@/lib/ui";
import { SITE_NAME } from "@/lib/site";

export const alt = "My MoneyShelf book match";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export default async function ResultOgImage({
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
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              background: "#FF7A2F",
              border: "3px solid #221D14",
              borderRadius: 999,
              padding: "6px 18px",
            }}
          >
            MY BOOK MATCH
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, color: "#6E6350", marginBottom: 14 }}>
            I should read
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 70 : 86,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#2C4BE6",
            }}
          >
            {title}
          </div>
          {book && (
            <div style={{ display: "flex", fontSize: 32, color: "#6E6350", marginTop: 16 }}>
              by {book.author}
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {book && (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                color: "#221D14",
                background: categoryBg(book.category),
                border: "3px solid #221D14",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {book.category}
            </div>
          )}
          <div style={{ display: "flex", fontSize: 26, color: "#6E6350" }}>
            Take the 4-question quiz to find yours
          </div>
        </div>
      </div>
    ),
    size
  );
}
