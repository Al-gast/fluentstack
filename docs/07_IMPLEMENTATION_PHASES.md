# docs/07_IMPLEMENTATION_PHASES.md

# Implementation Phases

## Purpose

This document breaks FluentStack development into small, safe, practical phases.

Do not build the whole app in one Codex prompt.

Each phase should produce a working improvement that can be reviewed, tested, and committed.

## Development Rule

Build by vertical slices.

A vertical slice means one small flow works from UI to data to interaction.

Do not build many incomplete features at the same time.

Bad approach:

```txt
Build dashboard, roadmap, lesson, quiz, playground, auth, database, and profile all at once.
```

Good approach:

```txt
Build one complete lesson flow first.
Then add quiz.
Then add progress.
Then add Supabase.
Then add coding practice.
```

---

# Phase 0: Project Setup

## Goal

Create the base Next.js project and install core dependencies.

## Tasks

* Create Next.js project
* Enable TypeScript
* Enable Tailwind CSS
* Use App Router
* Use src directory
* Install shadcn/ui
* Install Framer Motion
* Install Supabase packages
* Install Monaco Editor later when needed
* Configure basic project structure

## Dependencies

Recommended:

```bash
npm install framer-motion @supabase/supabase-js @supabase/ssr
```

Install Monaco only when coding practice starts:

```bash
npm install @monaco-editor/react
```

## Acceptance Criteria

* App runs locally
* TypeScript works
* Tailwind works
* shadcn/ui works
* Basic folder structure exists
* No major console errors

---

# Phase 1: App Shell and Visual Foundation

## Goal

Create the main look and feel of FluentStack.

## Tasks

* Create AppShell
* Create sidebar
* Create topbar
* Create mobile navigation
* Create landing page
* Create reusable cards
* Create progress components
* Create empty state component
* Create loading skeleton component

## Pages

* /
* /dashboard
* /roadmap

## Acceptance Criteria

* Landing page looks polished
* Dashboard shell exists
* Roadmap shell exists
* Navigation works
* Layout is responsive
* Dark mode visual direction is followed

## Do Not Build Yet

* Supabase Auth
* database writes
* quiz engine
* coding playground
* full lesson system

---

# Phase 2: Static Content Model

## Goal

Create the content structure for tracks, modules, lessons, quizzes, and challenges.

## Tasks

* Create TypeScript types
* Create static content files
* Add initial track data
* Add initial module data
* Add initial lesson data
* Add initial quiz data
* Add basic content lookup utilities

## Files

```txt
src/types/learning.ts
src/types/quiz.ts
src/types/challenge.ts
src/content/tracks.ts
src/content/modules.ts
src/content/lessons.ts
src/content/quizzes.ts
src/content/challenges.ts
src/lib/content/get-track.ts
src/lib/content/get-module.ts
src/lib/content/get-lesson.ts
src/lib/content/get-quiz.ts
src/lib/content/get-challenge.ts
```

## Initial Content

Create enough content for one complete vertical slice:

```txt
Track:
Frontend Engineering

Module:
HTML & Web Fundamentals

Lesson:
HTML Semantic Basics
```

## Acceptance Criteria

* Content is typed
* Data relationships work
* Track, module, lesson, and quiz can be found by slug or id
* No hardcoded lesson page content inside route files

---

# Phase 3: Track, Module, and Roadmap Pages

## Goal

Make the roadmap and learning path navigable.

## Tasks

* Build roadmap page from content data
* Build track page
* Build module page
* Build TrackCard
* Build ModuleCard
* Build LessonCard
* Show status placeholders

## Pages

```txt
/roadmap
/learn/[trackSlug]
/learn/[trackSlug]/[moduleSlug]
```

## Acceptance Criteria

* User can open roadmap
* User can open Frontend Engineering track
* User can open HTML & Web Fundamentals module
* User can see lessons inside module
* UI is responsive and polished

---

# Phase 4: Lesson Reader MVP

## Goal

Render lessons dynamically from block data.

## Tasks

* Create lesson route
* Create LessonReader
* Create BlockRenderer
* Create block components:

  * text
  * callout
  * code-example
  * quick-check
  * summary
* Create basic lesson progress UI

## Page

```txt
/lesson/[lessonSlug]
```

## Acceptance Criteria

* HTML Semantic Basics lesson renders from content data
* Blocks render dynamically
* Quick check works locally
* User can see lesson objectives
* User can see lesson progress placeholder
* Page is comfortable to read

## Do Not Build Yet

* Full Supabase persistence
* Full quiz engine
* Monaco playground

---

# Phase 5: Local Progress System

## Goal

Track guest progress using localStorage.

## Tasks

* Create UserProgress type
* Create local progress service
* Create progress calculator
* Create useProgress hook
* Mark lesson blocks as completed
* Calculate lesson progress
* Calculate module progress
* Calculate track progress
* Add XP calculation
* Add streak calculation

## Files

```txt
src/types/progress.ts
src/hooks/use-local-storage.ts
src/hooks/use-progress.ts
src/lib/progress/local-progress-service.ts
src/lib/progress/progress-calculator.ts
src/lib/progress/progress-service.ts
```

## Acceptance Criteria

* Completed blocks are saved locally
* Lesson progress updates
* Module progress updates
* Track progress updates
* Refreshing the browser keeps progress
* Opening the app should not increase streak
* Completing a meaningful activity can increase streak

---

# Phase 6: Quiz Engine

## Goal

Create reusable quizzes inside lessons.

## Tasks

* Create quiz types if not already done
* Build QuizEngine
* Build QuizQuestion component
* Build QuizResult component
* Support:

  * multiple-choice
  * true-false
  * fill-blank
  * code-output
* Save quiz score locally
* Mark quiz block completed when passing score is reached

## Acceptance Criteria

* Quiz appears inside lesson flow
* User can answer questions
* User receives explanations
* Score is calculated correctly
* Best score is saved
* Passing quiz updates lesson progress
* User can retry quiz

---

# Phase 7: Supabase Setup and Auth

## Goal

Add real user accounts and prepare database-backed progress.

## Tasks

* Create Supabase project manually
* Add environment variables
* Create Supabase client files
* Create login page
* Create register page
* Add logout
* Add auth-aware navigation
* Create profiles table
* Enable Row Level Security
* Add basic policies

## Pages

```txt
/login
/register
```

## Acceptance Criteria

* User can register
* User can login
* User can logout
* Auth state is reflected in the UI
* Guest mode still works
* No secrets are committed

---

# Phase 8: Supabase Progress Persistence

## Goal

Save logged-in progress to Supabase.

## Tasks

* Create database tables:

  * lesson_progress
  * quiz_attempts
  * challenge_progress
  * writing_drafts
  * user_stats
* Enable RLS
* Add policies
* Create supabase progress service
* Connect progress service to auth state
* Save lesson progress
* Save quiz attempts
* Save user stats

## Acceptance Criteria

* Logged-in user progress is saved to Supabase
* User can refresh and keep progress
* User can logout and login again to see progress
* Users cannot access other users' progress
* Guest progress still works locally

---

# Phase 9: Coding Practice Block

## Goal

Add browser-based coding practice inside lessons.

## Tasks

* Install Monaco Editor
* Create CodeEditor component
* Create PreviewPanel component
* Create CodingLab component
* Create CodingPracticeBlock component
* Support HTML, CSS, JS tabs
* Render preview in sandboxed iframe
* Save code for guest users
* Save code for logged-in users
* Add checklist
* Add reset code
* Add show solution
* Add mark as completed

## Acceptance Criteria

* Coding practice appears inside lesson
* User can edit HTML/CSS/JS
* Preview updates
* Checklist works
* Code is saved
* User can reset starter code
* User can reveal solution
* Completing challenge updates progress

---

# Phase 10: Writing Practice Block

## Goal

Add English writing practice inside lessons.

## Tasks

* Create WritingPracticeBlock
* Add textarea
* Add checklist
* Add save draft
* Add show model answer
* Add minimum character logic
* Save draft locally for guest users
* Save draft to Supabase for logged-in users
* Mark block completed

## Acceptance Criteria

* Writing practice appears inside English lessons
* User can write and save draft
* User can show model answer
* Completion requires meaningful input
* Progress updates after completion

---

# Phase 11: Profile and Progress Page

## Goal

Show user learning history and progress.

## Tasks

* Build profile page
* Show XP
* Show streak
* Show track progress
* Show completed lessons
* Show quiz scores
* Show completed challenges
* Show skill progress
* Add guest account reminder

## Acceptance Criteria

* Profile page works for guest users
* Profile page works for logged-in users
* User can understand learning progress
* UI feels motivating and useful

---

# Phase 12: Content Expansion

## Goal

Add enough content for the MVP to feel real.

## Tasks

Add Frontend Engineering beginner lessons:

1. How the Web Works
2. HTML Semantic Basics
3. Forms and Inputs
4. CSS Box Model
5. Flexbox Basics
6. CSS Grid Basics
7. Responsive Design
8. JavaScript Variables and Types
9. Functions and Events
10. Fetch API Basics

Add English for Tech Careers beginner lessons:

1. Introducing Yourself as a Developer
2. Writing Daily Updates
3. Explaining a Bug
4. Asking for Clarification
5. Writing Pull Request Notes
6. Reading Documentation
7. Technical Vocabulary
8. Explaining Your Project
9. Interview Self-Introduction
10. Remote Work Communication Basics

Add at least:

* 10 quizzes
* 5 coding challenges
* 5 writing practices

## Acceptance Criteria

* Content is useful
* Content matches schema
* Lessons include active learning where useful
* No placeholder-only pages

---

# Phase 13: Polish, Accessibility, and Performance

## Goal

Make the app feel portfolio-ready.

## Tasks

* Improve responsive layout
* Add loading states
* Add empty states
* Polish animation
* Improve focus states
* Check color contrast
* Check keyboard navigation
* Optimize large components
* Handle Monaco loading
* Add error states
* Clean up duplicated code

## Acceptance Criteria

* App feels polished
* Mobile layout is usable
* Lesson reading is comfortable
* Quiz and practice interactions are clear
* No obvious console errors
* No broken routes
* No major accessibility issues

---

# Phase 14: Deployment

## Goal

Deploy FluentStack to Vercel.

## Tasks

* Push project to GitHub
* Connect GitHub repo to Vercel
* Add Supabase environment variables
* Build production deployment
* Test deployed app
* Fix deployment issues
* Add README
* Add case study content

## Acceptance Criteria

* App is deployed
* Public URL works
* Auth works
* Supabase progress works
* Guest mode works
* Core learning flow works
* README explains the project clearly

---

# Recommended Commit Order

Use small commits.

Examples:

```txt
chore: initialize next app
docs: add project blueprint
feat: add app shell and landing page
feat: add learning content schema
feat: add roadmap and module pages
feat: add lesson block renderer
feat: add local progress tracking
feat: add quiz engine
feat: add supabase auth
feat: persist progress to supabase
feat: add coding practice block
feat: add writing practice block
feat: add profile progress page
content: add beginner lessons
chore: polish ui and accessibility
chore: deploy to vercel
```
