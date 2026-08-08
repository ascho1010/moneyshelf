import { articles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Articles",
  description:
    "Editorial articles on personal finance — every piece anchored in a real book. Investing, saving, spending, and building wealth the right way.",
  openGraph: {
    title: "Personal Finance Articles",
    description:
      "Editorial articles on personal finance — every piece anchored in a real book.",
    url: "/articles",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <span className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-4">
          From the blog
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-ink mb-4 text-balance">
          Articles
        </h1>
        <p className="text-muted-foreground text-[17px] leading-relaxed max-w-lg">
          Every article is anchored in a real book. We don&apos;t publish
          generic tips — we publish ideas that come from books worth reading.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </div>
  );
}
