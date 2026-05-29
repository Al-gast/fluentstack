# FluentStack

FluentStack is an interactive learning platform for Indonesian learners who want to build technology skills through structured lessons, quizzes, writing practice, coding labs, and progress tracking.

The MVP focuses on two tracks:
- Frontend Engineering
- English for Tech Careers

Learning is activity-based. Progress is earned by completing required lesson blocks, not by visiting pages.

## Current MVP Features

- Premium dark-mode landing page and app shell
- Dashboard, roadmap, track, module, lesson, and profile pages
- Static typed learning content in the codebase
- Dynamic lesson reader with block rendering
- Quick check blocks with retry-friendly feedback
- Reusable quiz engine with passing scores, explanations, and best-score persistence
- Writing practice blocks with local draft saving
- Coding practice blocks with Monaco editor, HTML/CSS/JS tabs, and sandboxed live preview
- Guest progress persistence with localStorage
- Supabase Auth for email/password registration, login, logout, and session-aware UI
- Supabase progress persistence for logged-in users
- Row Level Security SQL for user-specific progress tables

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Monaco Editor (`@monaco-editor/react`)
- Supabase Auth
- Supabase PostgreSQL with Row Level Security
- Vercel deployment
- localStorage for guest progress

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Fill in the Supabase values:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Supabase Setup

1. Create a Supabase project.
2. Copy the project URL into `NEXT_PUBLIC_SUPABASE_URL`.
3. Copy the anon public key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Run `supabase/schema.sql` in the Supabase SQL Editor.
5. Confirm Row Level Security is enabled on all progress tables.
6. Configure Auth email settings and allowed redirect URLs for local development and Vercel.

Required tables:
- `profiles`
- `lesson_progress`
- `quiz_attempts`
- `challenge_progress`
- `writing_drafts`
- `user_stats`

The SQL schema and policy notes are documented in `docs/14_SUPABASE_PROGRESS_SCHEMA.md`.

## Environment Variables

Required for Supabase Auth and logged-in progress persistence:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

These values are safe to expose to the browser when Supabase RLS is configured correctly. Do not add or expose a service role key in this app.

If these variables are missing in local development, the app falls back to guest mode where possible. For production deployment, set both variables in Vercel.

## Main Routes

- `/` - Landing page
- `/dashboard` - Learning overview
- `/roadmap` - Learning map
- `/learn` - Track selection and continue learning
- `/learn/frontend-engineering` - Frontend Engineering track
- `/learn/frontend-engineering/html-web-fundamentals` - HTML module
- `/learn/frontend-engineering/css-fundamentals` - CSS module
- `/learn/english-for-tech-careers` - English for Tech Careers track
- `/learn/english-for-tech-careers/english-for-remote-work` - Remote work English module
- `/lesson/html-semantic-basics` - Semantic HTML lesson
- `/lesson/css-flexbox-basics` - Flexbox lesson with coding practice
- `/lesson/writing-daily-update` - Writing practice lesson
- `/profile` - Progress overview
- `/login` - Email/password login
- `/register` - Email/password registration

## Deployment Notes for Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project Settings.
4. Add the Vercel production URL to Supabase Auth redirect URLs.
5. Keep `.env.local` out of Git.
6. Run `npm run build` before deployment when possible.

This project uses Next.js 16 request-layer `src/proxy.ts` for Supabase session refresh.

## Current Limitations

- Guest progress is not automatically merged into an account after login.
- Learning content is static TypeScript content, not CMS-managed.
- Coding practice uses manual checklist completion; there is no automated code validation yet.
- Writing practice does not include AI or grammar grading.
- Routes are public for MVP; learning pages are not protected.
- There is no password reset or OAuth flow yet.

## Language Strategy

Developer-facing code and documentation use English.

Learner-facing content uses Bahasa Indonesia first, with common technical terms kept in English where natural. English for Tech Careers lessons are bilingual and use practical workplace examples.
