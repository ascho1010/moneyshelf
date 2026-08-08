import type { Metadata } from "next";

// page.tsx is a client component (stateful wizard), so metadata lives here.
export const metadata: Metadata = {
  title: "Which Personal Finance Book Should I Read?",
  description:
    "Answer 4 quick questions and get matched to the right personal finance book for your goal, experience level, and reading time — from budgeting and investing to FIRE.",
  alternates: { canonical: "/recommender" },
  openGraph: {
    title: "Which personal finance book should you read?",
    description:
      "A 4-question quiz that matches you to the right money book — budgeting, investing, mindset, or FIRE.",
    url: "/recommender",
    type: "website",
  },
};

export default function RecommenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
