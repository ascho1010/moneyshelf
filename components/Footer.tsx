import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border mt-24 py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-xs">
            <p className="font-display text-2xl font-extrabold text-ink mb-2">
              moneyshelf<span className="text-orange">*</span>
            </p>
            <p className="text-subtle text-sm leading-relaxed">
              The books that build wealth. Money advice from your smartest
              friend — the one who actually read all the books.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-subtle mb-3">
                Browse
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/books" className="text-sm font-medium text-ink hover:text-accent transition-colors">Books</Link>
                <Link href="/articles" className="text-sm font-medium text-ink hover:text-accent transition-colors">Articles</Link>
                <Link href="/recommender" className="text-sm font-medium text-ink hover:text-accent transition-colors">Find my book</Link>
                <Link href="/about" className="text-sm font-medium text-ink hover:text-accent transition-colors">About</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-line pt-6">
          <p className="text-xs text-subtle leading-relaxed">
            <strong className="text-ink">Affiliate disclosure:</strong> MoneyShelf participates in the Amazon Services LLC Associates Program.
            When you purchase books through our links, we may earn a small commission at no extra cost to you.
            This helps us keep the site running and the recommendations honest.
          </p>
          <p className="text-xs text-subtle mt-3">© {new Date().getFullYear()} MoneyShelf. The books that build wealth.</p>
        </div>
      </div>
    </footer>
  );
}
