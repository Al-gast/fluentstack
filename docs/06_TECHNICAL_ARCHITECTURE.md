# docs/06_TECHNICAL_ARCHITECTURE.md

# Technical Architecture

## Architecture Decision

FluentStack uses:

```txt
Next.js + Supabase + Vercel
```

Do not create a separate backend for the MVP.

Next.js is the main application framework.

Supabase provides:

* authentication
* PostgreSQL database
* Row Level Security
* user-specific learning data

Vercel provides:

* deployment
* preview deployments
* production hosting

## Core Stack

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Monaco Editor
* Supabase Auth
* Supabase PostgreSQL
* Supabase Row Level Security
* Vercel
* localStorage for guest mode

## Backend Strategy

Use Next.js server-side features first.

Use:

* Server Components for server-rendered UI when useful
* Client Components for interactive learning blocks
* Route Handlers for small API needs
* Server Actions only when they make implementation simpler

Do not create:

* Express backend
* NestJS backend
* Laravel backend
* Django backend
* separate REST API server

## Supabase Strategy

Use Supabase for logged-in user data.

Supabase responsibilities:

* user authentication
* user profile
* lesson progress
* quiz attempts
* challenge progress
* writing drafts
* XP
* streak

Use Row Level Security on all user-specific tables.

Users should only access their own data.

## Vercel Strategy

Deploy the Next.js app to Vercel.

Use environment variables for Supabase configuration.

Required environment variables:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Do not commit `.env.local`.

## Content Strategy

Learning content should live in the codebase during the MVP.

Use static files for:

* tracks
* modules
* lessons
* quizzes
* coding challenges

Recommended folder:

```txt
src/content/
  tracks.ts
  modules.ts
  lessons.ts
  quizzes.ts
  challenges.ts
```

Reason:

* easier to version with Git
* easier to review changes
* no need for admin CMS in MVP
* easy to migrate later

## User Data Strategy

User data should live in Supabase for logged-in users.

Use localStorage for guest users.

Storage split:

```txt
Static learning content:
codebase

Guest progress:
localStorage

Logged-in progress:
Supabase
```

## Recommended Folder Structure

```txt
src/
  app/
    page.tsx
    dashboard/
      page.tsx
    roadmap/
      page.tsx
    learn/
      [trackSlug]/
        page.tsx
        [moduleSlug]/
          page.tsx
    lesson/
      [lessonSlug]/
        page.tsx
    profile/
      page.tsx
    login/
      page.tsx
    register/
      page.tsx
    api/
      progress/
        route.ts
      quiz-attempt/
        route.ts
      challenge-progress/
        route.ts

  components/
    layout/
      app-shell.tsx
      sidebar.tsx
      topbar.tsx
      bottom-nav.tsx

    learning/
      lesson-reader.tsx
      block-renderer.tsx
      lesson-progress.tsx
      lesson-outline.tsx
      blocks/
        text-block.tsx
        callout-block.tsx
        code-example-block.tsx
        quick-check-block.tsx
        quiz-block.tsx
        coding-practice-block.tsx
        writing-practice-block.tsx
        summary-block.tsx

    quiz/
      quiz-engine.tsx
      quiz-question.tsx
      quiz-result.tsx

    playground/
      code-editor.tsx
      preview-panel.tsx
      coding-lab.tsx

    progress/
      progress-bar.tsx
      xp-badge.tsx
      streak-card.tsx
      skill-progress.tsx

    auth/
      login-form.tsx
      register-form.tsx
      auth-card.tsx

    ui/
      shadcn components

  content/
    tracks.ts
    modules.ts
    lessons.ts
    quizzes.ts
    challenges.ts

  hooks/
    use-local-storage.ts
    use-progress.ts
    use-auth-user.ts

  lib/
    supabase/
      client.ts
      server.ts
      middleware.ts

    content/
      get-track.ts
      get-module.ts
      get-lesson.ts
      get-quiz.ts
      get-challenge.ts

    progress/
      progress-service.ts
      local-progress-service.ts
      supabase-progress-service.ts
      progress-calculator.ts

    quiz/
      scoring.ts

    utils.ts

  types/
    learning.ts
    quiz.ts
    challenge.ts
    progress.ts
    database.ts
```

## Route Structure

Primary routes:

```txt
/
```

Landing page.

```txt
/dashboard
```

User learning overview.

```txt
/roadmap
```

All tracks and modules.

```txt
/learn/[trackSlug]
```

Track detail page.

```txt
/learn/[trackSlug]/[moduleSlug]
```

Module detail page.

```txt
/lesson/[lessonSlug]
```

Lesson reader page with activity blocks.

```txt
/profile
```

Progress profile.

```txt
/login
```

Login page.

```txt
/register
```

Register page.

## API Route Strategy

Use API routes only when needed.

Possible API routes:

```txt
/api/progress
/api/quiz-attempt
/api/challenge-progress
```

Do not create API routes for static learning content unless needed.

Static content can be imported directly from the codebase.

## Client and Server Component Strategy

Use Server Components for:

* static pages
* loading content from local static files
* non-interactive layout
* read-only lesson structure where possible

Use Client Components for:

* quiz interaction
* quick checks
* coding playground
* Monaco editor
* writing practice textarea
* localStorage usage
* progress updates
* auth-aware UI when needed

Do not make the whole app client-side unless necessary.

## Supabase Client Structure

Recommended files:

```txt
src/lib/supabase/client.ts
src/lib/supabase/server.ts
src/lib/supabase/middleware.ts
```

Use client Supabase only when needed in Client Components.

Use server Supabase for server-side user/session handling.

Do not create Supabase clients inside random components.

## Progress Service Architecture

Progress logic should be isolated.

Recommended files:

```txt
src/lib/progress/progress-service.ts
src/lib/progress/local-progress-service.ts
src/lib/progress/supabase-progress-service.ts
src/lib/progress/progress-calculator.ts
```

## Progress Service Responsibilities

`progress-service.ts`:

* expose high-level progress functions
* decide whether to use localStorage or Supabase based on user state
* keep UI components clean

`local-progress-service.ts`:

* read guest progress from localStorage
* write guest progress to localStorage
* handle missing or corrupted localStorage data safely

`supabase-progress-service.ts`:

* read logged-in user progress from Supabase
* write progress to Supabase
* update quiz attempts
* update challenge progress
* update writing drafts

`progress-calculator.ts`:

* calculate lesson progress
* calculate module progress
* calculate track progress
* calculate XP
* calculate streak updates

## Content Service Architecture

Recommended files:

```txt
src/lib/content/get-track.ts
src/lib/content/get-module.ts
src/lib/content/get-lesson.ts
src/lib/content/get-quiz.ts
src/lib/content/get-challenge.ts
```

Content service responsibilities:

* find content by slug or id
* validate relationships between track, module, and lesson
* provide next lesson data
* provide module progress mapping when needed

## Database Tables

Recommended Supabase tables:

```txt
profiles
lesson_progress
quiz_attempts
challenge_progress
writing_drafts
user_stats
```

## profiles

Purpose:

Store basic user profile data.

Columns:

```txt
id uuid primary key references auth.users(id)
full_name text
avatar_url text
created_at timestamp with time zone
updated_at timestamp with time zone
```

## lesson_progress

Purpose:

Track completed blocks and lesson completion.

Columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
lesson_id text
completed_block_ids jsonb
progress_percent integer
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Unique constraint:

```txt
unique(user_id, lesson_id)
```

## quiz_attempts

Purpose:

Store quiz attempt history.

Columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
quiz_id text
lesson_id text
score integer
answers jsonb
passed boolean
created_at timestamp with time zone
```

## challenge_progress

Purpose:

Store coding practice progress.

Columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
challenge_id text
lesson_id text
saved_code jsonb
completed_checklist_items jsonb
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Unique constraint:

```txt
unique(user_id, challenge_id)
```

## writing_drafts

Purpose:

Store English writing practice drafts.

Columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
lesson_id text
block_id text
content text
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Unique constraint:

```txt
unique(user_id, block_id)
```

## user_stats

Purpose:

Store user-level XP and streak.

Columns:

```txt
user_id uuid primary key references auth.users(id)
total_xp integer
streak_count integer
last_activity_date date
created_at timestamp with time zone
updated_at timestamp with time zone
```

## Row Level Security

Enable Row Level Security for all user-specific tables.

Tables requiring RLS:

* profiles
* lesson_progress
* quiz_attempts
* challenge_progress
* writing_drafts
* user_stats

Basic policy rule:

```txt
Authenticated users can only access rows where user_id equals their auth user id.
```

For `profiles` and `user_stats`, use `id` or `user_id` depending on table design.

## Authentication Flow

Use Supabase Auth.

MVP supports:

* email registration
* email login
* logout
* session persistence

Guest mode remains available.

Auth behavior:

```txt
Guest:
uses localStorage progress

Logged in:
uses Supabase progress
```

Do not force login before the user can explore the app.

## Environment Variables

Use:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Optional future variables:

```txt
SUPABASE_SERVICE_ROLE_KEY=
```

Do not use service role key in client-side code.

Do not add service role key unless there is a clear server-side need.

## Coding Playground Architecture

MVP playground supports:

* HTML
* CSS
* JavaScript
* iframe preview

Use Monaco Editor.

The preview should render in a sandboxed iframe.

Do not execute user code on the server.

Recommended component structure:

```txt
components/playground/
  code-editor.tsx
  preview-panel.tsx
  coding-lab.tsx
```

Recommended behavior:

* load starter code from challenge data
* save code locally for guest users
* save code to Supabase for logged-in users
* allow reset
* allow show solution
* allow manual checklist completion

## Error Handling

Handle:

* missing lesson
* missing track
* missing module
* missing quiz
* missing challenge
* failed Supabase request
* unauthenticated user
* localStorage unavailable
* Monaco editor loading failure

Use helpful empty/error states.

Avoid crashing the entire page.

## Testing Strategy

MVP should eventually include:

* TypeScript checks
* linting
* basic unit tests for progress calculation
* basic component tests for quiz behavior
* basic e2e flow for one complete lesson

Suggested tests later:

```txt
progress-calculator.test.ts
quiz-scoring.test.ts
lesson-flow.spec.ts
auth-flow.spec.ts
```

Do not block early prototyping with too much testing, but keep the code testable.

## Deployment Checklist

Before deploying to Vercel:

* app builds successfully
* Supabase environment variables are set
* landing page works
* dashboard works
* roadmap works
* lesson page works
* auth pages work
* guest progress works
* logged-in progress works
* no secrets are committed
* no obvious console errors

## Future Architecture Options

Do not build these now, but keep the architecture flexible for:

* Supabase Storage for avatars or submissions
* Supabase Edge Functions for AI feedback
* Stripe or payment integration
* admin dashboard
* content database or CMS
* project submission system
* AI writing feedback
* automated coding validation
