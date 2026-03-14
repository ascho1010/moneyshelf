import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "MoneyShelf — The books that build wealth",
  description:
    "Curated personal finance book recommendations with honest editorial. Every article references a real book.",
  openGraph: {
    title: "MoneyShelf",
    description: "The books that build wealth.",
    url: "https://moneyshelf.xyz",
    siteName: "MoneyShelf",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
