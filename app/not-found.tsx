import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <span className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-6">
        404
      </span>
      <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-ink mb-5 text-balance">
        This page isn&apos;t on the shelf
      </h1>
      <p className="text-muted-foreground text-[17px] leading-relaxed max-w-md mx-auto mb-9">
        The link may be broken or the page may have moved. Let&apos;s get you
        back to something worth reading.
      </p>
      <div className="flex flex-wrap gap-3.5 justify-center">
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
