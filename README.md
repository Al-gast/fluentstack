# FluentStack

FluentStack is an interactive learning platform for Indonesian learners who want to build practical frontend engineering skills and tech-career English communication.

The product is designed as a guided learning path, not a static course page. Learners move through tracks, modules, lessons, built-in practice, and module-level assessments while their progress is saved as guest data or account data.

Live app:

```txt
https://fluentstack.vercel.app
```

## Product Direction

FluentStack helps learners build real technical understanding through a structured flow:

```txt
Track
→ Module
→ Regular lessons
→ Built-in practice
→ Uji Kompetensi
→ Next module
```

Regular lessons teach one clear concept at a time.

Uji Kompetensi checks readiness at the end of each module.

Built-in practice helps learners try focused concepts directly in the browser.

Local Dev Milestones, planned for later content batches, will guide learners to build projects on their own device using real developer workflow.

Documentation Bridges help learners read official documentation with clear focus points instead of being sent to broad docs pages without guidance.

## Current Learning Tracks

### Frontend Engineering

The active track currently focuses on the beginner frontend path.

Active modules:

```txt
1. Web Foundations
2. HTML Basics
3. Semantic HTML
4. Forms and Basic Accessibility
5. CSS Core Mechanics
6. Box Model and Spacing
```

Current learning flow:

```txt
Web Foundations
→ HTML Basics
→ Semantic HTML
→ Forms and Basic Accessibility
→ CSS Core Mechanics
→ Box Model and Spacing
```

Planned next modules:

```txt
Local Static Website Project
JavaScript Fundamentals
Flexbox and Grid Layout
Responsive Visual System
```

### English for Tech Careers

The English track is planned as a practical communication path for remote tech work.

Planned topics include:

```txt
Daily updates
Blocker explanations
Bug reports
Pull request notes
Code review replies
Project explanations
Interview answers
Documentation summaries
```

## Current Features

### Guided learning path

Learners can browse tracks, modules, and lessons in a structured order.

The app now supports ordered learning flow, previous/next lesson navigation, and module-based progression.

### Module-level assessment model

FluentStack avoids quiz overload in regular lessons.

Regular lessons focus on explanation and practice.

Uji Kompetensi appears at the end of a module and may include:

```txt
recap
quiz
coding practice
writing practice
self-review checklist
readiness summary
```

### Built-in coding practice

The app includes built-in coding practice with an editor and live preview.

Current practice support includes:

```txt
HTML
CSS
JavaScript
```

Selected HTML challenges support rule-based auto validation.

Examples of auto checks:

```txt
Ada elemen h1.
Ada paragraph.
Ada link dengan href.
Ada image dengan src dan alt.
Ada header, nav, main, dan footer.
```

Older or subjective practice tasks can still use manual checklist completion.

### Guest and logged-in progress

FluentStack supports both guest and logged-in learning.

Guest users:

```txt
progress is saved in localStorage
can browse lessons
can complete lesson blocks
can try coding practice
can take quizzes
```

Logged-in users:

```txt
progress is saved to Supabase
can keep progress across devices
can store lesson progress, quiz attempts, and practice data
```

### Supabase auth and progress persistence

The app uses Supabase for:

```txt
authentication
user profile
lesson progress
quiz attempts
challenge progress
XP and streak data
```

Guest progress and logged-in progress are intentionally separate in the current MVP.

### UI and UX

The current UI is dark-mode first and designed for focused learning.

Recent polish passes improved:

```txt
navigation clarity
progress clarity
lesson reading experience
practice interactions
mobile responsiveness
visual system consistency
Indonesian UI copy
```

## Tech Stack

```txt
Next.js App Router
TypeScript
Tailwind CSS
Supabase Auth
Supabase PostgreSQL
Supabase Row Level Security
Monaco Editor
Vercel
localStorage for guest mode
```

## Project Structure

Common folders:

```txt
src/app
src/components
src/content
src/hooks
src/lib
src/types
docs
supabase
```

Important content files:

```txt
src/content/tracks.ts
src/content/modules.ts
src/content/lessons.ts
src/content/quizzes.ts
src/content/challenges.ts
```

Important curriculum and content docs:

```txt
docs/11_COPYWRITING_AND_CONTENT_VOICE.md
docs/12_CURRICULUM_PLAN.md
docs/20_FRONTEND_CURRICULUM_DETAIL.md
docs/21_ENGLISH_CURRICULUM_DETAIL.md
docs/22_CONTENT_AUTHORING_GUIDE.md
docs/23_LESSON_FORMAT_STANDARD.md
docs/24_LESSON_QUALITY_RUBRIC.md
```

Supabase schema:

```txt
supabase/schema.sql
```

Environment example:

```txt
.env.example
```

## Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/Al-gast/fluentstack.git
cd fluentstack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Copy the example file:

```bash
cp .env.example .env.local
```

Fill in your Supabase public variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Supabase Setup

Create a Supabase project, then run the SQL schema from:

```txt
supabase/schema.sql
```

Required Supabase setup:

```txt
1. Create Supabase project.
2. Run supabase/schema.sql.
3. Confirm Row Level Security is enabled.
4. Add NEXT_PUBLIC_SUPABASE_URL to .env.local.
5. Add NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.
6. Configure Supabase Auth redirect URLs.
```

For local development, include:

```txt
http://localhost:3000
```

For production, include the deployed Vercel URL.

## Deployment

The project is deployed on Vercel.

Before deploying, add these environment variables in Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Then add the production URL to Supabase Auth redirect URLs.

Current production URL:

```txt
https://fluentstack.vercel.app
```

## Useful Routes

Main app routes:

```txt
/
 /dashboard
 /roadmap
 /learn
 /learn/frontend-engineering
 /learn/frontend-engineering/web-foundations
 /learn/frontend-engineering/html-basics
 /learn/frontend-engineering/semantic-html
 /learn/frontend-engineering/forms-basic-accessibility
 /learn/frontend-engineering/css-core-mechanics
 /learn/frontend-engineering/box-model-spacing
 /lesson/[lessonSlug]
 /profile
 /login
 /register
```

Selected active beginner lesson routes include:

```txt
/lesson/what-is-website-and-web-page
/lesson/how-web-page-loads
/lesson/what-are-html-css-javascript
/lesson/html-basic-structure
/lesson/tag-element-attribute
/lesson/headings-paragraphs-links-images
/lesson/relative-paths-basic
/lesson/html-basics-assessment
/lesson/semantic-html-structure
/lesson/html-semantic-basics
/lesson/semantic-html-assessment
/lesson/forms-basic-accessibility-assessment
/lesson/css-core-mechanics-assessment
/lesson/box-model-spacing-assessment
```

## Development Commands

```bash
npm run lint
npm run build
npm run dev
```

Use lint and build before pushing changes.

## Content Authoring Rules

FluentStack content should follow the current learning model:

```txt
Regular lessons teach.
Built-in practice reinforces focused concepts.
Uji Kompetensi assesses module readiness.
Documentation Bridge builds official docs habits.
Local Dev Milestone teaches real device workflow.
```

Before adding or revising content, read:

```txt
docs/11_COPYWRITING_AND_CONTENT_VOICE.md
docs/12_CURRICULUM_PLAN.md
docs/20_FRONTEND_CURRICULUM_DETAIL.md
docs/22_CONTENT_AUTHORING_GUIDE.md
docs/23_LESSON_FORMAT_STANDARD.md
docs/24_LESSON_QUALITY_RUBRIC.md
```

Important content rules:

```txt
Do not make every regular lesson quiz-heavy.
Do not create repetitive lessons.
Do not add unfinished modules to the active track.
Do not use schema validity as proof of content quality.
Do not force local setup too early.
Do not dump documentation links without guidance.
Prefer fewer mature lessons over many shallow lessons.
```

## Current Status

Stable:

```txt
Landing page
Auth pages
Dashboard
Roadmap
Track/module pages
Lesson reader
Progress display
Guest progress
Supabase logged-in progress
Built-in coding practice
Rule-based HTML and CSS validation for selected challenges
Module-level assessments for active beginner modules
Mobile responsiveness
Dark visual system
```

Active curriculum:

```txt
Web Foundations
HTML Basics
Semantic HTML
Forms and Basic Accessibility
CSS Core Mechanics
Box Model and Spacing
```

Planned curriculum next:

```txt
Local Static Website Project
JavaScript Fundamentals
Flexbox and Grid Layout
Responsive Visual System
```

## Known Limitations

Current MVP limitations:

```txt
Guest progress and logged-in progress are separate.
There is no advanced guest-to-account sync yet.
Rule-based auto validation currently covers selected deterministic challenges.
There is no AI grading.
There is no full code execution sandbox for arbitrary JavaScript.
Local Dev Milestones are planned in the curriculum but not fully implemented as product-specific verification features yet.
Documentation Bridge is part of the content model, is available in active module assessments, and will be added gradually to future milestones.
Some future modules are intentionally hidden until their content is rebuilt.
```

## Product Philosophy

FluentStack should optimize for learning quality, not content volume.

A good module should help learners feel:

```txt
I understand why this matters.
I know what to practice.
I know where to read more.
I can see my progress.
I know whether I am ready for the next module.
I know when to practice inside FluentStack and when to build locally.
```

If a lesson does not help the learner understand, practice, communicate, read documentation, build locally, or prove a real skill, it should not be added to the active path.
