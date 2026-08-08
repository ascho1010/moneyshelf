import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "MoneyShelf is built on one rule: every article and recommendation must be anchored to a real book. Here's how we choose them — and our affiliate disclosure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MoneyShelf",
    description:
      "Every article and recommendation is anchored to a real book. Here's how we choose them.",
    url: "/about",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <span className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-4">
        About
      </span>
      <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-tight mb-8 text-balance">
        The books that build wealth
      </h1>

      <div className="prose-article mb-14">
        <p className="text-xl text-ink leading-relaxed mb-6 font-medium">
          MoneyShelf is a personal finance publication built on a simple idea:
          the best financial advice already exists, written down in books.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We don&apos;t publish &quot;10 tips to save money&quot; listicles.
          Every article we write is anchored in at least one real book —
          something you can buy, read, and keep building from. Our job is to
          distill the ideas, contextualize them, and point you to the source.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          The shelf is curated deliberately. These aren&apos;t just bestsellers —
          they&apos;re books that hold up under scrutiny and offer frameworks
          you can actually use.
        </p>

        <div className="bg-card border-2 border-border rounded-[20px] p-7 mb-10 shadow-card not-prose">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink mb-3">
            The rule
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every piece of content on MoneyShelf must reference at least one
            book. This isn&apos;t a gimmick — it&apos;s a quality filter. It
            forces us to ground every recommendation in something rigorous rather
            than punditry.
          </p>
        </div>

        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink mb-4">
          Affiliate disclosure
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          MoneyShelf participates in the Amazon Services LLC Associates Program,
          an affiliate advertising program designed to provide a means for sites
          to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          When you click a book link and make a purchase, we may earn a small
          commission — at no additional cost to you. This is how we keep the
          lights on. It does not influence which books we recommend; we only
          feature books we genuinely think are worth your time.
        </p>
      </div>

      <div className="border-t-2 border-line pt-10 flex flex-wrap gap-3.5">
        <Link
          href="/books"
          className="pop inline-block bg-accent text-background font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border"
        >
          Browse the Shelf
        </Link>
        <Link
          href="/recommender"
          className="pop inline-block bg-card text-ink font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border"
        >
          Find my book →
        </Link>
      </div>
    </div>
  );
}
