# MVP Scope

## MVP Goal

Build the first usable version of FluentStack with a complete learning flow.

The MVP should prove that the app can support:

* structured learning tracks
* lesson-based learning
* activity blocks inside lessons
* quiz inside lessons
* coding practice inside lessons
* English writing practice
* progress tracking
* user accounts
* saved progress using Supabase
* guest mode using localStorage

## Included in MVP

### Pages

* Landing page
* Dashboard
* Roadmap
* Track page
* Module page
* Lesson page
* Profile / Progress page
* Login page
* Register page

### Core Features

* Learning tracks
* Modules
* Lessons
* Lesson blocks
* Quick checks
* Quiz blocks
* Coding practice blocks
* Writing practice blocks
* Progress bars
* XP points
* Local guest progress
* Supabase user progress
* Supabase Auth
* Supabase database for logged-in users

### Initial Content

Content language:

- Main lesson explanations use Bahasa Indonesia.
- Common technical terms stay in English when natural.
- Quiz questions and explanations use Bahasa Indonesia.
- Practice instructions use Bahasa Indonesia.
- English for Tech Careers lessons use bilingual format.

Frontend Engineering:

- 10 beginner lessons in Bahasa Indonesia

English for Tech Careers:

- 10 beginner lessons using Bahasa Indonesia explanations and practical English examples

Coding Practice:

- 5 browser-based HTML/CSS/JavaScript challenges with Bahasa Indonesia instructions

Quiz:

- Quiz questions embedded inside lessons
- Quiz questions use Bahasa Indonesia
- Technical terms may remain in English

## MVP Tech Stack

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

## Data Storage Rules

### Store in Codebase

Use static TypeScript, MDX, or JSON files for:

* tracks
* modules
* lessons
* quizzes
* coding challenges
* sample content

### Store in Supabase

Use Supabase for:

* user profile
* completed lesson blocks
* lesson progress
* quiz attempts
* challenge progress
* writing drafts
* XP
* streak

### Store in localStorage

Use localStorage for:

* guest progress
* temporary code drafts
* temporary writing drafts
* simple client-side state persistence

## Not Included in MVP

Do not build these yet:

* Separate Express backend
* Separate NestJS backend
* Payment
* Subscription
* Complex admin dashboard
* Video course system
* AI tutor
* Real-time collaboration
* Certificate generation
* Public discussion forum
* Mobile app
* Complex analytics dashboard
* React execution playground
* Full CMS

## MVP Quality Bar

The MVP should feel polished.

Minimum quality:

* responsive layout
* smooth navigation
* good typography
* clear learning flow
* useful progress tracking
* working authentication
* working logged-in progress
* working guest mode
* no obvious console errors
* readable lesson pages
* functional quiz
* functional browser coding practice
* clean route structure
* clear reusable components

## MVP Success Criteria

The MVP is successful if a user can:

1. Create an account.
2. Log in.
3. Open the dashboard.
4. Choose a track.
5. Open a lesson.
6. Read lesson content.
7. Answer a quick check.
8. Complete a quiz.
9. Complete a coding or writing practice block.
10. See lesson progress update.
11. Leave the app.
12. Return later and still see saved progress.

## Scope Discipline

Do not build future features too early.

If a feature does not directly support the first complete learning flow, postpone it.
