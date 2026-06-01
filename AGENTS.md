# AGENTS.md

# FluentStack Project Instructions

FluentStack is an interactive learning web app for technology skills.

The first learning tracks are:

1. Frontend Engineering
2. English for Tech Careers

The app may later expand into:

* Backend Engineering
* Computer Science Fundamentals
* Databases
* Cloud Fundamentals
* AI for Developers
* System Design
* Cybersecurity Basics
* Career Preparation

## Product Goal

Build a polished, comfortable, and interactive learning platform where users learn through structured lessons, practice blocks, quizzes, coding labs, writing practice, and progress tracking.

FluentStack is not a simple blog, static course website, or collection of disconnected pages.

It should feel like a premium learning product and also be strong enough as a portfolio project.

## Core Learning Principle

Quiz, practice, coding challenges, and writing exercises are not separate disconnected features.

They are activity blocks inside the lesson flow.

Main flow:

```txt
Dashboard
→ Roadmap
→ Track
→ Module
→ Lesson
→ Text / Example / Quick Check / Practice / Quiz / Summary
→ Progress updated
```

## Tech Stack

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Monaco Editor for coding practice
* Supabase Auth
* Supabase PostgreSQL
* Supabase Row Level Security
* Vercel for deployment
* localStorage for guest mode and temporary progress

## Backend Architecture

Use Next.js App Router as the main application framework.

Do not create a separate Express, NestJS, Laravel, Django, or standalone backend for the MVP.

Use Supabase for:

* authentication
* PostgreSQL database
* user profiles
* lesson progress
* quiz attempts
* coding challenge progress
* writing drafts
* XP and streak data

Use static TypeScript, MDX, or JSON files for learning content during the MVP.

Use Next.js Route Handlers for small server-side API needs.

Use Supabase Edge Functions only for future needs such as:

* payment webhook
* AI feedback
* email automation
* background server logic
* third-party integrations

Keep Supabase access inside service files.

Do not call Supabase directly from random UI components.

## Content Strategy

Learning content should be stored in the codebase during the MVP.

Use static TypeScript, MDX, or JSON files for:

* tracks
* modules
* lessons
* quizzes
* coding challenges
* sample projects

User-specific data should be stored in Supabase.

Use Supabase for:

* user profile
* completed lesson blocks
* lesson progress
* quiz scores
* challenge progress
* writing drafts
* XP
* streak

## Content Quality Work

For any task that adds or revises learning content, read the relevant content docs before editing:

* `docs/11_COPYWRITING_AND_CONTENT_VOICE.md`
* `docs/20_FRONTEND_CURRICULUM_DETAIL.md` when frontend content is involved
* `docs/21_ENGLISH_CURRICULUM_DETAIL.md` when English content is involved
* `docs/22_CONTENT_AUTHORING_GUIDE.md`
* `docs/23_LESSON_FORMAT_STANDARD.md`
* `docs/24_LESSON_QUALITY_RUBRIC.md`

Rules:

* Do not add large batches of new content until the relevant beginner path has a strong quality benchmark.
* For beginner lessons, assume the learner starts from zero.
* Introduce terms before using them heavily.
* Every lesson should have a clear bridge to the next lesson unless it is the last lesson in a module.

## Language Strategy

Developer-facing parts should use English.

Use English for:
- file names
- folder names
- component names
- function names
- TypeScript types
- variable names
- route names
- developer documentation
- Codex prompts
- README

Learning content should use Bahasa Indonesia first.

Use Bahasa Indonesia for:
- lesson explanations
- quiz questions
- quiz explanations
- practice instructions
- summary points
- user-facing learning guidance

Keep common technical terms in English when they are standard in programming.

Examples:
- component
- props
- state
- hook
- route
- layout
- semantic HTML
- accessibility
- responsive design
- API
- deployment
- debugging

Do not force awkward translations of common programming terms.

English for Tech Careers lessons should be bilingual:
- explain the concept in Bahasa Indonesia
- provide practical English examples
- include Indonesian meaning when useful
- include writing practice using realistic remote-work situations

The MVP does not need a full language switcher.

Do not build complex i18n unless explicitly requested.

## Guest Mode

Support guest mode when possible.

For guest users:

* store temporary progress in localStorage
* allow them to explore lessons
* allow them to try quizzes and coding practice
* do not require login just to view the product

For logged-in users:

* save progress to Supabase
* sync learning data across devices
* store quiz attempts and challenge progress permanently

Do not build complex localStorage-to-Supabase sync in the first implementation unless explicitly requested.

## Coding Rules

* Use strict TypeScript.
* Prefer small reusable components.
* Keep business logic separate from UI components.
* Use data-driven rendering for lessons and activity blocks.
* Do not hardcode lesson pages manually.
* Keep the UI responsive.
* Keep accessibility in mind.
* Avoid unnecessary dependencies.
* Do not build unrelated features.
* Do not change the product direction without asking.
* Avoid large rewrites unless needed.
* Keep the codebase easy to extend.

## Design Direction

The product should feel like a modern premium developer learning platform.

Visual style:

* dark mode first
* clean typography
* comfortable long-form reading
* soft gradients
* subtle glass effect when useful
* smooth micro-interactions
* polished dashboard
* clear visual hierarchy
* not too noisy
* not childish

## Typography Rule

Use Montserrat as the main app font.

All user-facing UI text should use Montserrat, including:
- headings
- body text
- cards
- sidebar
- navigation
- buttons
- lesson content

Use monospace only for:
- code blocks
- inline code
- pre
- kbd
- samp
- code-like labels

Do not use serif fonts.

Avoid:
- font-serif
- editorial-style headings
- newspaper-like typography
- excessive letter spacing
- too many uppercase micro-labels

The UI should feel like a modern SaaS learning platform, not an editorial magazine or academic publication.

## Progress Rules

Progress should be based on real learning activity, not just page visits.

A lesson may include:

* reading blocks
* quick checks
* coding practice
* writing practice
* quiz
* summary

Completion should be calculated from completed required blocks.

Example:

```txt
Read material: 30%
Complete practice: 40%
Pass quiz: 30%
Total: 100%
```

## Development Workflow

Work in small tasks.

Before implementing:

* read the relevant docs in /docs
* keep the current scope small
* avoid unrelated features
* avoid building future features too early

After implementing:

* summarize changed files
* mention trade-offs
* run lint/typecheck if available
* check for obvious accessibility issues
* explain anything that needs manual setup
