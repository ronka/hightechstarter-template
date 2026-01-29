# HighTechStarter

תבנית מודרנית לפיתוח מהיר של אפליקציות ווב. כוללת Next.js, Supabase, Clerk ועוד.

## סטאק טכנולוגי

- **Next.js 15** – React Framework
- **Supabase** – Backend as a Service
- **Clerk** – אימות משתמשים
- **TypeScript** – Type Safety
- **Tailwind CSS** – עיצוב
- **Drizzle ORM** – ORM למסד נתונים

## התקנה

1. שבטו את הריפוזיטורי:
   ```bash
   git clone <repo-url>
   cd hightechstarter-template
   ```

2. התקינו את התלויות:
   ```bash
   npm install
   ```

3. העתיקו את קובץ הסביבה ועדכנו את המפתחות:
   ```bash
   cp .example.env .env
   ```

4. ערכו את `.env` והכניסו את הערכים שלכם:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` – מפתח Clerk
   - `CLERK_SECRET_KEY` – מפתח סודי של Clerk
   - `DATABASE_URL` – כתובת חיבור ל-Supabase

## הגדרת מסד נתונים

1. יצרו סכמה:
   ```bash
   npm run db:generate
   ```

2. דחפו את הסכמה למסד הנתונים:
   ```bash
   npm run db:push
   ```

3. (אופציונלי) זרעו נתונים ראשוניים:
   ```bash
   npm run db:seed
   ```

> **חשוב:** ודאו שהחלפתם את כל המפתחות ב-`.env` לערכים האמיתיים לפני הרצת הפרויקט.

## הפעלה

```bash
npm run dev
```

פתחו [http://localhost:3000](http://localhost:3000) בדפדפן.

## למידע נוסף

- [תיעוד Next.js](https://nextjs.org/docs)
- [תיעוד Drizzle ORM](https://orm.drizzle.team/docs/overview)

## פריסה

הדרך הקלה ביותר לפרוס את האפליקציה היא דרך [Vercel](https://vercel.com).
