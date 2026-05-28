# FluentStack

FluentStack is an interactive learning platform for technology skills.

Current MVP tracks:
- Frontend Engineering
- English for Tech Careers

The product focuses on activity-based learning inside lesson flow, not static reading pages.

## Product Direction

Main flow:

`Dashboard -> Roadmap -> Track -> Module -> Lesson -> Activity Blocks -> Progress`

Activity blocks inside lessons:
- Text
- Callout
- Code Example
- Quick Check
- Quiz
- Writing Practice
- Coding Practice
- Summary

Progress is based on meaningful activity completion (not page visits), with guest mode persistence in localStorage.

## MVP Features (Current)

- Premium dark-mode app shell and landing page
- Dashboard, Roadmap, Tracks page (`/learn`)
- Track and module pages
- Dynamic lesson reader (`/lesson/[lessonSlug]`)
- Interactive Quick Check blocks
- Reusable Quiz Engine with passing score and retry
- Writing Practice block with draft saving
- Coding Practice block (Monaco + live iframe preview)
- Guest progress tracking across pages (localStorage)
- Profile/Progress overview page

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Monaco Editor (`@monaco-editor/react`)
- Supabase SDK (prepared for next phase)

## Project Structure

```txt
src/
  app/
    dashboard/
    roadmap/
    learn/
    lesson/
    profile/
  components/
    layout/
    learning/
    playground/
    progress/
    quiz/
    ui/
  content/
    tracks.ts
    modules.ts
    lessons.ts
    quizzes.ts
    challenges.ts
  hooks/
    use-progress.ts
    use-local-storage.ts
  lib/
    content/
    progress/
    quiz/
    supabase/
  types/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3. Lint

```bash
npm run lint
```

## Main Routes

- `/` — Landing page
- `/dashboard` — Learning overview
- `/roadmap` — Learning map
- `/learn` — Track selection + continue learning
- `/learn/frontend-engineering`
- `/learn/frontend-engineering/html-web-fundamentals`
- `/learn/frontend-engineering/css-fundamentals`
- `/learn/english-for-tech-careers`
- `/learn/english-for-tech-careers/english-for-remote-work`
- `/lesson/html-semantic-basics`
- `/lesson/css-flexbox-basics`
- `/lesson/writing-daily-update`
- `/profile` — Guest progress summary

## Content Strategy (MVP)

Learning content is stored as static typed files under `src/content/*` and rendered dynamically.

User-specific progress is currently stored in localStorage for guest mode.

## Next Phase

- Add Supabase Auth
- Persist progress to Supabase
- Sync cross-device progress for authenticated users
- Keep guest mode as fallback

## Notes

- User-facing lesson content is primarily Bahasa Indonesia.
- Developer-facing code, file names, and architecture are in English.
- Common technical terms remain in English where natural.
