## Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint

# Database (Drizzle + PostgreSQL)
npm run db:generate  # Generate migrations from schema changes
npm run db:push      # Push schema directly to database (dev)
npm run db:migrate   # Run migrations (production)
npm run db:seed      # Seed initial data
```

## Architecture

This is a Next.js 15 template with Hebrew RTL support, using the App Router.

**Tech Stack:**
- **Auth:** Clerk (middleware at `middleware.ts`, public routes: `/`, `/sign-in`, `/sign-up`)
- **Database:** PostgreSQL via Drizzle ORM (schema in `db/schema.ts`, connection in `db/index.ts`)
- **UI:** shadcn/ui components in `components/ui/`, styled with Tailwind CSS
- **Data Fetching:** React Query with custom hooks pattern (see `hooks/use-users.ts`)

**Key Patterns:**
- Providers are toggled via flags in `components/providers.tsx` (Clerk and React Query currently disabled)
- API routes use Zod validation and return `{ success: boolean, data/error }` format
- Auth helpers in `lib/auth.ts` handle user creation/lookup from Clerk to local DB
- Database types are inferred from schema: `User = typeof users.$inferSelect`

**Environment Variables:**
- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key

## Code Style

- Use arrow functions (`const fn = () =>`) over function declarations
- Event handlers prefixed with "handle" (e.g., `handleClick`, `handleSubmit`)
- Use early returns for readability
- Tailwind classes only for styling, no CSS files
- Wrap React Query usage in custom hooks (e.g., `useUsers`, `useCreateUser`)
- Include accessibility attributes (tabindex, aria-label, keyboard handlers)
