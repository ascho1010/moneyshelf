import { books } from "./data";

export interface CategoryMeta {
  /** URL segment, e.g. "real-estate". */
  slug: string;
  /** Must match Book.category exactly. */
  name: string;
  h1: string;
  title: string;
  description: string;
  /** On-page intro. Written per category — not templated boilerplate, which
   *  is what makes these pages worth indexing rather than thin duplicates. */
  intro: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "investing",
    name: "Investing",
    h1: "The Best Investing Books",
    title: "Best Investing Books for Beginners and Beyond",
    description:
      "The investing books worth your time — index funds, asset allocation, and the behavior that decides returns. Every pick reviewed and ranked on the quality of its ideas.",
    intro:
      "Most investing advice is either too vague to act on or too complicated to stick with. The books here are neither. They cover the same core argument from different angles — costs matter, diversification works, and the hardest part is doing nothing — and range from a weekend read to the reference you'll keep for a decade.",
  },
  {
    slug: "mindset",
    name: "Mindset",
    h1: "The Best Books on Money Mindset",
    title: "Best Books on Money Mindset and Behavior",
    description:
      "Doing well with money has less to do with math than with behavior. These books explain why smart people make bad financial decisions — and what to do about it.",
    intro:
      "You can know every rule of personal finance and still get it wrong, because money decisions are made by people, not spreadsheets. These books are about the human side: why we overspend, why we panic-sell, why enough is such a hard number to name, and how the people who handle money well actually think.",
  },
  {
    slug: "budgeting",
    name: "Budgeting",
    h1: "The Best Budgeting and Saving Books",
    title: "Best Budgeting Books to Get Your Money in Order",
    description:
      "Practical books on budgeting, saving, and getting out of debt — the ones with real systems rather than guilt and generic tips.",
    intro:
      "The best budgeting books don't ask you to track every coffee. They give you a system that runs without constant willpower, then get out of the way. These are the practical ones — automation, debt payoff, and building a setup that survives contact with a normal, busy life.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    h1: "The Best Real Estate Investing Books",
    title: "Best Real Estate Investing Books",
    description:
      "Books on rental property, house hacking, and building income through real estate — focused on the arithmetic rather than the motivation.",
    intro:
      "Real estate is the most common alternative path to financial independence, and the most commonly oversold. These books stay on the practical side: how to analyze a deal, how financing actually works, and the cash-flow math that decides whether a rental is an asset or a second job.",
  },
];

export function getCategory(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function booksInCategory(name: string) {
  return books.filter((b) => b.category === name);
}

/** Only categories that actually have books — never link to an empty page. */
export const ACTIVE_CATEGORIES = CATEGORIES.filter(
  (c) => booksInCategory(c.name).length > 0
);
