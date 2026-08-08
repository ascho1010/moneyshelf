import { allArticles, getArticle, getBooksForArticle } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_NAME, absoluteUrl, pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};

  const description = article.excerpt;
  const path = `/articles/${article.slug}`;

  return {
    title: pageTitle(article.title),
    description,
    // Drafts stay out of search until the editorial is written.
    ...(article.draft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: article.title,
      description,
      url: path,
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
    },
    alternates: { canonical: path },
  };
}

export async function generateStaticParams() {
  // allArticles so drafts are previewable at their URL before publishing.
  return allArticles.map((a) => ({ slug: a.slug }));
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

  const articleUrl = absoluteUrl(`/articles/${article.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        url: articleUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        image: absoluteUrl(`/articles/${article.slug}/opengraph-image`),
        wordCount: article.body.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        // The books this piece is anchored to — reinforces the editorial rule.
        mentions: books.map((b) => ({
          "@type": "Book",
          name: b.title,
          author: { "@type": "Person", name: b.author },
          url: absoluteUrl(`/books/${b.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Articles", item: absoluteUrl("/articles") },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
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

      {article.draft && (
        <div className="bg-yellow border-2 border-border rounded-[16px] p-5 mb-8">
          <p className="font-display text-lg font-extrabold tracking-tight text-ink mb-1">
            Draft — not published
          </p>
          <p className="text-sm text-ink/80 leading-relaxed">
            This outline is hidden from the articles list, the sitemap, and
            search engines. Replace the prompts below with your copy, then set{" "}
            <code className="font-mono text-[13px]">draft: false</code> in{" "}
            <code className="font-mono text-[13px]">lib/data.ts</code> to publish.
            {article.targetKeyword && (
              <>
                {" "}Target query: <strong>{article.targetKeyword}</strong>.
              </>
            )}
          </p>
        </div>
      )}

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
