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

Build a polished, comfortable, and interactive learning platform where users learn through structured lessons, built-in practice, documentation bridges, local development milestones, module assessments, coding labs, writing practice, and progress tracking.

FluentStack is not a simple blog, static course website, documentation clone, quiz app, or collection of disconnected pages.

It should feel like a premium learning product and also be strong enough as a portfolio project.

The core value is not the number of lessons. The core value is the learning experience.

## Product and Experience Architecture Docs

For product, UI/UX, navigation, dashboard, track, module, lesson, or practice workspace tasks, read:

* `docs/30_PRODUCT_DIRECTION.md`
* `docs/31_LEARNING_EXPERIENCE_ARCHITECTURE.md`
* `docs/32_PRACTICE_WORKSPACE_STANDARD.md` for coding practice or practice workspace tasks

Treat FluentStack as a guided engineering learning platform, not a small MVP course reader. UI and product changes should preserve the learning flow and help learners know what to do next.

## Core Learning Principle

Quiz, practice, coding challenges, writing exercises, documentation reading, local projects, and assessments are not separate disconnected features.

They are part of the lesson and module flow.

Main flow:

```txt
Dashboard
→ Roadmap
→ Track
→ Module
→ Regular lessons
→ Uji Kompetensi
→ Documentation Bridge / Local Dev Milestone when relevant
→ Progress updated
→ Next module
```

Regular lessons teach and practice.

`Uji Kompetensi` checks readiness at the end of a module.

Built-in practice teaches focused concepts.

Local Dev Milestone teaches real engineering workflow.

Documentation Bridge builds long-term independence with official docs.

## FluentStack Teaching Model

FluentStack uses a module-level assessment model.

### Regular Lessons

Regular lessons should help learners understand and practice one clear concept.

A regular lesson should usually include:

* learning goal
* path context
* focused explanation
* important terms
* small example
* how to read or use the example
* common mistake or decision rule
* quick check
* coding practice, writing practice, or mini action when useful
* documentation bridge only when it is tightly relevant and guided
* actionable summary
* bridge to the next lesson

A regular beginner lesson should not include a quiz by default.

A quiz inside a regular lesson is allowed only when it adds clear learning value and does not make the lesson feel test-heavy.

For beginner lessons:

* assume the learner starts from zero
* introduce terms before using them heavily
* explain the concept before asking the learner to practice
* use concrete examples
* avoid jargon unless already introduced
* keep the tone calm, clear, and practical
* do not force local setup too early

### Uji Kompetensi

`Uji Kompetensi` is the module-end assessment.

It checks whether the learner is ready to continue to the next module.

An Uji Kompetensi may include:

* module recap
* quiz
* coding practice
* writing practice
* project task
* case study
* self-review checklist
* documentation bridge
* readiness summary

Rules:

* Uji Kompetensi should cover the whole module.
* It should not introduce important new concepts.
* It should not be a random trivia quiz.
* It should test understanding and practical readiness.
* It should bridge to the next module when the learner passes.
* It should point to relevant official documentation when useful.

## Built-in Practice and Local Dev Milestone Model

FluentStack uses two complementary practice layers.

```txt
Built-in practice teaches focused concepts.
Local Dev Milestone teaches real engineering workflow.
```

### Built-in Practice

Built-in practice happens inside FluentStack.

Use built-in practice for:

* focused concept practice
* fast feedback
* beginner-friendly code editing
* small HTML/CSS/JS/React/Next examples
* rule-based auto validation
* quick writing practice
* Uji Kompetensi tasks that can be checked safely in the browser

Built-in practice should remain useful across beginner, intermediate, and advanced levels.

It is not only for beginner content.

Examples:

* HTML: write `h1`, `p`, `a`, `img`, and semantic regions
* CSS: adjust Flexbox, Grid, spacing, selectors, and responsive rules
* JavaScript: write functions, transform arrays, handle events
* React: edit component props, state, list rendering, controlled inputs
* Next.js: inspect route structure, server/client boundary examples, loading/error UI patterns
* English: write daily updates, PR notes, code review replies, interview answers

### Local Dev Milestone

Local Dev Milestone happens on the learner’s own device.

Use local milestones when the learner needs to combine several concepts into a real engineering workflow.

Local milestones should teach:

* creating project folders
* opening projects in a code editor
* running projects locally
* using terminal commands
* installing dependencies when needed
* debugging with browser DevTools
* using Git and GitHub
* reading official documentation while building
* deploying when relevant

Do not force local setup too early.

Do not replace built-in practice with local milestones.

Use both:

```txt
Learn in FluentStack
Practice focused skills in FluentStack
Assess in FluentStack
Build larger project locally
Return to FluentStack for the next concepts
```

Recommended milestone points:

* after early HTML, Forms, and CSS: Local Static Website Project
* after JavaScript DOM/events/localStorage/fetch: Local Vanilla JavaScript App
* before or during TypeScript/React tooling: Local Tooling and npm Basics
* after React Fundamentals: Local React App
* after Next.js App Router: Local Next.js App
* during Production Next.js: Local Next.js App + Deploy to Vercel
* during Portfolio and Remote Readiness: Portfolio Capstone Project

## Documentation Bridge Model

FluentStack should teach learners how to learn from official documentation.

FluentStack should not replace official documentation. It should make documentation easier to approach.

The model is:

```txt
FluentStack teaches the guided path.
Official documentation is the source of truth.
Local projects teach learners how to use docs like engineers.
```

Use documentation bridges at:

* the end of a module
* Uji Kompetensi
* local development milestones
* advanced lessons where official docs are part of real workflow
* project work
* debugging or deployment tasks

Do not overload every small regular lesson with many links.

For beginners, documentation bridge must be guided and specific.

A documentation bridge should tell the learner:

* which official docs source to open
* which page or section to read
* what to focus on
* what to ignore for now
* one small follow-up action

Weak documentation bridge:

```txt
Read the React docs.
```

Strong documentation bridge:

```txt
Read React docs: Passing Props to a Component.
Focus on:
1. how props are passed
2. how props are read inside a component
3. why props should stay read-only

Ignore advanced patterns for now.

Follow-up action:
Update one component in the practice project so it receives title and description through props.
```

Preferred documentation sources:

* MDN Web Docs for HTML, CSS, JavaScript, Web APIs, HTTP, and accessibility basics
* WHATWG or W3C references only when needed, usually not for beginners
* React official docs for React
* Next.js official docs and Learn Next.js for Next.js
* TypeScript official handbook for TypeScript
* Testing Library docs for React Testing Library
* Vitest docs for unit testing
* Playwright docs for end-to-end testing
* Supabase docs for Supabase integration
* Vercel docs for deployment
* WCAG/WAI resources for accessibility when appropriate

Documentation bridge should not become link dumping.

Each docs reference should support the current module goal.

## Module Design Rules

Every module must have a clear learning arc.

Before writing or revising module content, define:

* module goal
* prerequisite knowledge
* regular lesson sequence
* unique role of each lesson
* practice pattern
* Uji Kompetensi coverage
* documentation bridge
* local dev milestone connection when relevant
* readiness criteria
* bridge to the next module

Every regular lesson must have a unique purpose.

Do not create two regular lessons that explain the same concept in different words.

If two lessons overlap:

* merge the repeated explanation
* convert one into guided practice
* convert one into reinforcement
* convert one into common mistakes or case study
* move the check into Uji Kompetensi
* remove it from active module order if it does not add value

Prefer fewer mature lessons over many shallow lessons.

Do not add more lessons just to make a module look full.

## Content Quality Work

For any task that adds or revises learning content, read the relevant content docs before editing:

* `docs/11_COPYWRITING_AND_CONTENT_VOICE.md`
* `docs/12_CURRICULUM_PLAN.md`
* `docs/20_FRONTEND_CURRICULUM_DETAIL.md` when frontend content is involved
* `docs/21_ENGLISH_CURRICULUM_DETAIL.md` when English content is involved
* `docs/22_CONTENT_AUTHORING_GUIDE.md`
* `docs/23_LESSON_FORMAT_STANDARD.md`
* `docs/24_LESSON_QUALITY_RUBRIC.md`

Rules:

* Do not add large batches of new content until the relevant beginner path has a strong quality benchmark.
* Do not make every lesson quiz-heavy.
* Prefer module-level Uji Kompetensi over repeated quizzes in every regular lesson.
* Regular lessons should teach and practice, not repeatedly test.
* Built-in practice should be used for focused concept practice.
* Local Dev Milestone should be used for real workflow practice at the right points.
* Documentation Bridge should guide learners to official docs without dumping links.
* Every module should define lesson roles before content is written.
* Every lesson should have a clear bridge to the next lesson unless it is the last lesson before Uji Kompetensi.
* Uji Kompetensi should have a clear bridge to the next module when relevant.
* If two lessons overlap, convert one into practice, reinforcement, case study, or assessment.
* Do not use valid schema as proof of content quality. A lesson can render correctly and still fail as a learning experience.

## Track Strategy

### Frontend Engineering

Frontend Engineering should move from beginner web foundations to production-ready frontend work.

The broad path is:

1. Web Foundations
2. HTML and Accessibility Foundations
3. CSS Fundamentals and Layout
4. JavaScript Fundamentals
5. JavaScript Advanced
6. TypeScript
7. React Fundamentals
8. React Intermediate
9. React Advanced
10. Next.js App Router
11. Production Next.js
12. Forms, Validation, and Data Fetching
13. Testing
14. Performance
15. Accessibility
16. Frontend Architecture
17. Design System
18. Backend Basics for Frontend Engineers
19. Security Basics
20. Portfolio and Remote Readiness

Frontend content should be practical and connected to real product work.

Use built-in coding practice when the learner needs to build, edit, refactor, inspect, or debug a focused concept.

Use local dev milestones when the learner needs to combine several concepts in a real project workflow.

Use documentation bridges so learners build the habit of reading official docs.

Use writing practice when the frontend task naturally maps to remote-work communication, such as:

* pull request notes
* bug reports
* implementation notes
* code review comments
* project demos

### English for Tech Careers

English for Tech Careers should help learners communicate in remote tech work.

Fluency does not mean native-speaker perfection. It means the learner can communicate clearly and confidently in professional tech situations.

English content should use bilingual teaching:

* Indonesian explanation
* practical English examples
* Indonesian meaning or context when useful
* learner-written English response

Use writing practice heavily for English track lessons.

Good English lesson outputs include:

* daily update
* blocker explanation
* clarification message
* bug report
* pull request note
* code review response
* technical explanation
* interview answer
* project demo script
* documentation summary

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

Use Next.js Route Handlers only for small server-side API needs.

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
* writing practice data
* sample projects
* documentation bridge metadata if added later
* local dev milestone content if added later

User-specific data should be stored separately.

Use localStorage for guest progress.

Use Supabase for logged-in user progress.

User progress includes:

* completed lesson blocks
* completed lessons
* quiz scores
* challenge code and checklist state
* writing drafts
* XP
* streak

Do not put user-specific state inside static content files.

## Challenge and Practice Strategy

Coding practice should be meaningful and safe.

For deterministic coding tasks, prefer simple rule-based auto validation.

Examples:

* HTML element exists
* attribute exists
* required text exists
* semantic region exists
* simple CSS property exists
* simple JavaScript behavior is represented in code

Manual checklist is still acceptable when validation is subjective.

Use manual checklist for:

* code quality review
* accessibility review
* visual judgment
* project completeness
* writing quality
* self-review tasks
* local dev milestone completion

Do not use AI grading in MVP content unless explicitly requested in a future task.

Do not execute learner JavaScript during validation unless a future task explicitly designs a safe execution model.

## Language Strategy

Developer-facing parts should use English.

Use English for:

* file names
* folder names
* component names
* function names
* TypeScript types
* variable names
* route names
* developer documentation
* Codex prompts
* README

Learning content should use Bahasa Indonesia first.

Use Bahasa Indonesia for:

* lesson explanations
* quiz questions
* quiz explanations
* practice instructions
* summaries
* user-facing learning guidance
* local dev milestone instructions

Keep common technical terms in English when they are standard in programming.

Examples:

* component
* props
* state
* hook
* route
* layout
* semantic HTML
* accessibility
* responsive design
* API
* deployment
* debugging
* terminal
* local project
* documentation

Do not force awkward translations of common programming terms.

The MVP does not need a full language switcher.

Do not build complex i18n unless explicitly requested.

## Guest Mode

Support guest mode when possible.

For guest users:

* store temporary progress in localStorage
* allow them to explore lessons
* allow them to try quick checks, coding practice, writing practice, and Uji Kompetensi
* do not require login just to view the product

For logged-in users:

* save progress to Supabase
* sync learning data across devices
* store quiz attempts and challenge progress permanently

Do not build complex localStorage-to-Supabase sync unless explicitly requested.

## Progress Rules

Progress should be based on real learning activity, not just page visits.

A regular lesson may include:

* reading blocks
* quick checks
* coding practice
* writing practice
* documentation bridge action
* summary

An Uji Kompetensi may include:

* recap
* quiz
* coding practice
* writing practice
* project task
* self-review checklist
* documentation bridge
* readiness summary

Completion should be calculated from completed required blocks.

Example regular lesson:

```txt
Read material: 25%
Complete quick check: 15%
Complete practice: 40%
Read summary: 20%
Total: 100%
```

Example Uji Kompetensi:

```txt
Read recap: 10%
Pass quiz: 40%
Complete practice/checklist: 40%
Read readiness summary: 10%
Total: 100%
```

Do not mark progress from page views alone.

## Coding Rules

Use strict TypeScript.

Prefer:

* small reusable components
* clear service layers
* data-driven rendering
* typed content models
* pure helper functions for calculations
* UI components that receive clean props

Keep business logic separate from UI components.

Keep Supabase access inside service files.

Do not hardcode lesson pages manually.

Keep the UI responsive.

Keep accessibility in mind.

Avoid unnecessary dependencies.

Do not build unrelated features.

Do not change the product direction without asking.

Avoid large rewrites unless needed.

Keep the codebase easy to extend.

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

The learning UI should feel calm and focused.

A learner should always know:

* where they are
* what they are learning
* what they should do next
* whether they are practicing or being assessed
* when they should read official docs
* when they should move to local device practice
* how the current lesson connects to the next step

## Typography Rule

Use Montserrat as the main app font.

All user-facing UI text should use Montserrat, including:

* headings
* body text
* cards
* sidebar
* navigation
* buttons
* lesson content

Use monospace only for:

* code blocks
* inline code
* pre
* kbd
* samp
* code-like labels

Do not use serif fonts.

Avoid:

* `font-serif`
* editorial-style headings
* newspaper-like typography
* excessive letter spacing
* too many uppercase micro-labels

The UI should feel like a modern SaaS learning platform, not an editorial magazine or academic publication.

## Development Workflow

Work in small tasks.

Before implementing:

* read the relevant docs in `/docs`
* keep the scope small
* avoid unrelated features
* avoid building future features too early
* identify whether the task is product, content, UI, progress, auth, docs, local milestone, or documentation bridge
* for content tasks, define module role and lesson role before editing content

After implementing:

* summarize changed files
* mention trade-offs
* run lint/typecheck/build if available
* check for obvious accessibility issues
* test the relevant route in browser when possible
* explain anything that needs manual setup

## Content Workflow

For content tasks, use this order:

1. Confirm the module goal.
2. Confirm prerequisite knowledge.
3. Define the regular lesson sequence.
4. Define each lesson role.
5. Define the practice pattern.
6. Define the Uji Kompetensi coverage.
7. Define the documentation bridge if relevant.
8. Define the local dev milestone connection if relevant.
9. Write or revise one representative lesson first.
10. Score it against `docs/24_LESSON_QUALITY_RUBRIC.md`.
11. Scale the pattern only after the representative lesson feels strong.
12. Add or update assessment content.
13. Test the full module flow in browser.

Do not skip directly to adding many lessons.

Do not add the next module until the current module feels coherent.

## Final Product Rule

FluentStack should optimize for learning quality, not content volume.

A good module should make learners feel:

* "I understand why this matters."
* "I know what to practice."
* "I know where to read more."
* "I can see my progress."
* "I know whether I am ready for the next module."
* "I know when to use FluentStack practice and when to build locally."

If a lesson does not help the learner understand, practice, communicate, read docs, build locally, or prove a real skill, do not add it.
