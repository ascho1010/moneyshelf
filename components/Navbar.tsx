"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/books", label: "Books" },
  { href: "/articles", label: "Articles" },
  { href: "/recommender", label: "Find a Book" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors">
          MoneyShelf
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
