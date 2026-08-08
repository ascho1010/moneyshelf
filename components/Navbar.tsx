"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/books", label: "Books" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-[73px] flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold tracking-tight text-ink"
        >
          moneyshelf<span className="text-orange">*</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hidden sm:inline-block text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                  active ? "bg-muted text-ink" : "text-ink hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/recommender"
            className="pop inline-block text-sm font-bold px-4 py-2 rounded-full bg-accent text-background border-2 border-border"
          >
            Find my book →
          </Link>
        </div>
      </div>
    </nav>
  );
}
