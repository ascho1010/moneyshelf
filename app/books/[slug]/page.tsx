import { books, articles, getBook } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categoryBg, categoryTint } from "@/lib/ui";
import { SITE_URL, SITE_NAME, absoluteUrl, bookPageTitle } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const book = getBook(params.slug);
  if (!book) return {};

  const title = bookPageTitle(book.title, book.author);
  const description = book.description;
  const path = `/books/${book.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: book.coverImage, alt: `${book.title} book cover` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [book.coverImage],
    },
    alternates: { canonical: path },
  };
}

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const relatedArticles = articles.filter((a) => a.bookSlugs.includes(book.slug));

  const bookUrl = absoluteUrl(`/books/${book.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${bookUrl}#book`,
        name: book.title,
        author: { "@type": "Person", name: book.author },
        description: book.description,
        genre: book.category,
        image: absoluteUrl(book.coverImage),
        url: bookUrl,
        offers: {
          "@type": "Offer",
          url: book.amazonUrl,
          availability: "https://schema.org/InStock",
        },
        // Our own editorial verdict — marked up as a Review by MoneyShelf
        // rather than an aggregateRating, since it's a single first-party rating.
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: book.rating,
            bestRating: 5,
            worstRating: 1,
          },
          author: { "@type": "Organization", name: SITE_NAME },
          reviewBody: book.description,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Books", item: absoluteUrl("/books") },
          { "@type": "ListItem", position: 3, name: book.title, item: bookUrl },
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
      <Link href="/books" className="inline-block text-sm font-bold text-ink underline decoration-orange decoration-2 underline-offset-4 hover:text-accent transition-colors mb-10">
        ← Back to Books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-4">
        {/* Book cover */}
        <div className="md:col-span-1">
          <div
            className="border-2 border-border rounded-[20px] p-6 mb-5 flex justify-center shadow-card"
            style={{ backgroundColor: categoryTint(book.category) }}
          >
            <div
              className="w-full max-w-[220px] aspect-[2/3] rounded-[12px] relative overflow-hidden border-2 border-border shadow-pop"
              style={{ backgroundColor: book.coverColor }}
            >
              <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="(max-width: 768px) 60vw, 220px" priority />
            </div>
          </div>
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="pop block w-full bg-accent text-background font-bold text-sm text-center px-6 py-4 rounded-[14px] border-2 border-border mb-3"
          >
            Get this book on Amazon ↗
          </a>
          <p className="text-xs text-subtle text-center">
            Affiliate link — we earn a small commission at no cost to you.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-lg ${i < book.rating ? "text-orange" : "text-line"}`}>★</span>
            ))}
          </div>
        </div>

        {/* Book info */}
        <div className="md:col-span-2">
          <span
            className="inline-block border-2 border-border rounded-full text-[11px] font-bold px-3 py-1 mb-4"
            style={{ backgroundColor: categoryBg(book.category) }}
          >
            {book.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight mb-2 text-balance">
            {book.title}
          </h1>
          <p className="text-lg text-subtle mb-8">by {book.author}</p>

          <p className="text-[17px] text-muted-foreground leading-relaxed mb-10">{book.description}</p>

          <div className="bg-card border-2 border-border rounded-[20px] p-7 mb-10 shadow-card">
            <h2 className="font-display text-xl font-extrabold tracking-tight text-ink mb-5">
              Key takeaways
            </h2>
            <ul className="flex flex-col gap-3.5">
              {book.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange mt-0.5 flex-shrink-0">★</span>
                  <span className="text-muted-foreground text-[15px] leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedArticles.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-ink mb-5">
                Articles about this book
              </h2>
              <div className="flex flex-col gap-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="pop group block bg-card border-2 border-border rounded-[14px] p-5"
                  >
                    <p className="inline-block bg-yellow border-2 border-border rounded-full text-[10.5px] font-bold px-2 py-0.5 mb-2">
                      {article.readTime} min read
                    </p>
                    <p className="text-[15px] font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
