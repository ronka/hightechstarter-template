# HighTechStarter

HighTechStarter is a modern web app starter template, ready for rapid development. It includes Next.js, Supabase, Clerk, and more—everything you need to launch your next startup quickly.

התחל את המסע שלך עם תבנית מוכנה הכוללת Next.js, Supabase ו-Clerk. כל מה שאתה צריך כדי לבנות את הסטארטאפ הבא שלך בזמן שיא.

## Tech Stack / סטאק טכנולוגי

- **Next.js 15** – React Framework (⚛️)
- **Supabase** – Backend as a Service (🔥)
- **Clerk** – Authentication (🔐)
- **TypeScript** – Type Safety (📘)
- **Tailwind CSS** – Styling (🎨)
- **Prisma** – Database ORM (💎)

נבחרו בקפידה הטכנולוגיות המתקדמות והאמינות ביותר בשוק.

## התקנה

1. שיבטו את הריפוזיטורי:
   ```bash
   git clone <repo-url>
   cd hightechstarter-template
   ```
2. התקינו את התלויות:
   ```bash
   npm install
   # או
   yarn install
   # או
   pnpm install
   # או
   bun install
   ```
3. העתיקו את קובץ הסביבה לדוגמה ועדכנו את המפתחות:
   ```bash
   cp .example.env .env.local
   ```
4. פתחו את `.env.local` והכניסו את הערכים שלכם:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` – מפתח Clerk
   - `CLERK_SECRET_KEY` – מפתח סודי של Clerk
   - `DATABASE_URL` – כתובת חיבור למסד הנתונים (Supabase)

> ⚠️ **Important / חשוב:**
> Make sure to replace all placeholder keys in `.env.local` with your real credentials before running the project.
> ודאו שהחלפתם את כל המפתחות בקובץ `.env.local` לערכים האמיתיים שלכם לפני הרצת הפרויקט.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
