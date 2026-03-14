import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="font-serif text-xl font-bold text-foreground mb-2">MoneyShelf</p>
            <p className="text-muted-foreground text-sm max-w-xs">
              The books that build wealth. Curated personal finance reading with honest editorial.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Browse</p>
              <div className="flex flex-col gap-2">
                <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Books</Link>
                <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground/60">Affiliate Disclosure:</strong> MoneyShelf participates in the Amazon Services LLC Associates Program. 
            When you purchase books through our links, we may earn a small commission at no extra cost to you. 
            This helps us keep the site running and the recommendations honest.
          </p>
          <p className="text-xs text-muted-foreground mt-3">© {new Date().getFullYear()} MoneyShelf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
