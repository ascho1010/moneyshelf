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
      <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block">
        ← Back to Articles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
        {/* Article body */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6 text-xs text-muted-foreground">
            <span>{date}</span>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-foreground leading-tight mb-8">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-5">
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
            <p className="text-xs uppercase tracking-widest text-accent mb-5">Referenced in this article</p>
            <div className="flex flex-col gap-4">
              {books.map((book) => (
                <div key={book.slug} className="border border-border rounded-lg p-4">
                  <div
                    className="w-12 h-16 rounded mb-3 relative overflow-hidden"
                    style={{ backgroundColor: book.coverColor }}
                  >
                    <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="48px" />
                  </div>
                  <Link href={`/books/${book.slug}`} className="font-serif text-base font-bold text-foreground hover:text-accent transition-colors leading-tight block mb-1">
                    {book.title}
                  </Link>
                  <p className="text-xs text-muted-foreground mb-4">{book.author}</p>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-accent/10 text-accent border border-accent/30 text-xs font-semibold px-4 py-2 rounded hover:bg-accent/20 transition-colors"
                  >
                    Buy on Amazon →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Affiliate links — we earn a small commission at no cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
