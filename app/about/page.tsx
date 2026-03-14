import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-accent mb-3">About</p>
      <h1 className="font-serif text-5xl font-black text-foreground leading-tight mb-8">
        MoneyShelf
      </h1>

      <div className="prose-article mb-16">
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          MoneyShelf is a personal finance publication built on a simple idea: 
          the best financial advice already exists, written down in books.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-6">
          We don&apos;t publish "10 tips to save money" listicles. Every article we write is 
          anchored in at least one real book — something you can buy, read, and keep building from. 
          Our job is to distill the ideas, contextualize them, and point you to the source.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-10">
          The shelf is curated deliberately. These aren't just bestsellers — they're books that 
          hold up under scrutiny and offer frameworks you can actually use.
        </p>

        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">The Rule</h2>
        <p className="text-foreground/70 leading-relaxed mb-10">
          Every piece of content on MoneyShelf must reference at least one book. This isn&apos;t a 
          gimmick — it's a quality filter. It forces us to ground every recommendation in 
          something rigorous rather than punditry.
        </p>

        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Affiliate Disclosure</h2>
        <p className="text-foreground/70 leading-relaxed mb-4">
          MoneyShelf participates in the Amazon Services LLC Associates Program, an affiliate 
          advertising program designed to provide a means for sites to earn advertising fees 
          by advertising and linking to Amazon.com.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-10">
          When you click a book link and make a purchase, we may earn a small commission — 
          at no additional cost to you. This is how we keep the lights on. It does not 
          influence which books we recommend; we only feature books we genuinely think are worth your time.
        </p>
      </div>

      <div className="border-t border-border pt-10">
        <Link
          href="/books"
          className="inline-block bg-accent text-background font-semibold text-sm px-6 py-3 rounded hover:bg-accent/90 transition-colors"
        >
          Browse the Shelf →
        </Link>
      </div>
    </div>
  );
}
