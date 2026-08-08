import { articles, getArticle, getBooksForArticle } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};

  const title = `${article.title} — MoneyShelf`;
  const description = article.excerpt;
  const url = `https://moneyshelf.xyz/articles/${article.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "MoneyShelf",
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const books = getBooksForArticle(article);
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    url: `https://moneyshelf.xyz/articles/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "MoneyShelf",
      url: "https://moneyshelf.xyz",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/articles" className="inline-block text-sm font-bold text-ink underline decoration-orange decoration-2 underline-offset-4 hover:text-accent transition-colors mb-10">
        ← Back to Articles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
        {/* Article body */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block bg-yellow border-2 border-border rounded-full text-[10.5px] font-bold px-2.5 py-1">
              {article.readTime} min read
            </span>
            <span className="text-xs text-subtle">{date}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight mb-8 text-balance">
            {article.title}
          </h1>
          <p className="text-lg text-ink leading-relaxed mb-10 border-l-4 border-orange pl-5 font-medium">
            {article.excerpt}
          </p>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>

        {/* Sidebar: referenced books */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <p className="inline-block bg-mint border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-5">
              Referenced here
            </p>
            <div className="flex flex-col gap-4">
              {books.map((book) => (
                <div key={book.slug} className="bg-card border-2 border-border rounded-[16px] p-5 shadow-card">
                  <div
                    className="w-14 h-20 rounded-[10px] mb-3 relative overflow-hidden border-2 border-border"
                    style={{ backgroundColor: book.coverColor }}
                  >
                    <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="56px" />
                  </div>
                  <Link href={`/books/${book.slug}`} className="font-display text-base font-extrabold tracking-tight text-ink hover:text-accent transition-colors leading-tight block mb-1">
                    {book.title}
                  </Link>
                  <p className="text-xs text-subtle mb-4">{book.author}</p>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="pop block w-full text-center bg-accent text-background border-2 border-border text-xs font-bold px-4 py-2.5 rounded-[10px]"
                  >
                    Get it on Amazon ↗
                  </a>
                </div>
              ))}
            </div>
            <p className="text-xs text-subtle mt-4">
              Affiliate links — we earn a small commission at no cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
