import { ImageResponse } from "next/og";
import { articles, getArticle, getBooksForArticle } from "@/lib/data";
import { SITE_NAME } from "@/lib/site";

export const alt = "MoneyShelf article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticleOgImage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  const book = article ? getBooksForArticle(article)[0] : undefined;
  const headline = article?.title ?? SITE_NAME;

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
          {article && (
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                background: "#FFC93E",
                border: "3px solid #221D14",
                borderRadius: 999,
                padding: "6px 18px",
              }}
            >
              {article.readTime} min read
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: headline.length > 70 ? 62 : 76,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#221D14",
          }}
        >
          {headline}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 60, height: 12, background: "#FF7A2F", borderRadius: 999 }} />
          <div style={{ display: "flex", fontSize: 26, color: "#6E6350" }}>
            {book ? `Anchored to ${book.title}` : "Every article anchored to a real book"}
          </div>
        </div>
      </div>
    ),
    size
  );
}
