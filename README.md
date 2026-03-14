# MoneyShelf

> The books that build wealth. — [moneyshelf.xyz](https://moneyshelf.xyz)

Personal finance book recommendation site with editorial content. Every article references at least one real book. Amazon affiliate links use tag `moneyshelf0e-20`.

## Stack

- **Next.js 14** (App Router)
- **Sanity.io v3** (CMS — not yet connected, uses static seed data)
- **Tailwind CSS**
- **TypeScript**
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Sanity project details:

```bash
cp .env.local.example .env.local
```

> **Note:** The app currently runs with static seed data in `lib/data.ts`. Sanity integration is Phase 2.

## Project Structure

```
app/
  page.tsx          # Home
  books/
    page.tsx        # Book catalog
    [slug]/         # Individual book + Amazon affiliate CTA
  articles/
    page.tsx        # Article listing
    [slug]/         # Article with book sidebar
  about/            # About + affiliate disclosure
components/
  Navbar.tsx
  Footer.tsx        # Includes affiliate disclosure
  BookCard.tsx
  ArticleCard.tsx
lib/
  data.ts           # Seed data (books + articles)
```

## Affiliate Tag

All Amazon links use tag: `moneyshelf0e-20`

## Phase 2 (Next Steps)

- [ ] Connect Sanity.io CMS (replace static data in `lib/data.ts`)
- [ ] Add Beehiiv newsletter signup
- [ ] Category filtering on /books
- [ ] SEO metadata per page
- [ ] Deploy to Vercel + connect moneyshelf.xyz domain
