# docs/04_FEATURE_SPECS.md

# Feature Specs

## Feature Philosophy

FluentStack should feel like a guided learning lab.

The user should always know:

* what they are learning
* why the skill is useful
* what to do next
* how much progress they have made
* where they are in the roadmap

Quiz, practice, coding challenges, and writing exercises are part of lessons. They are not isolated features.

---

# 1. Landing Page

## Goal

Introduce FluentStack as an interactive learning platform for technology skills.

## Sections

* Hero section
* Track preview
* Feature preview
* Learning flow preview
* Coding lab preview
* Progress preview
* Call to action

## Requirements

* Premium visual style
* Dark mode first
* Smooth animations
* Clear headline
* Responsive layout
* Clear call to action for guest and registered users

## Suggested Headline

Master technology skills through guided lessons, real practice, and measurable progress.

## Suggested Subheadline

FluentStack helps you learn frontend engineering, technical English, and future-ready technology skills with interactive lessons, quizzes, coding labs, and progress tracking.

## Primary CTA

Start learning

## Secondary CTA

Explore roadmap

---

# 2. Authentication

## Goal

Allow users to create an account and save progress across devices.

## Provider

Use Supabase Auth.

## Pages

* /login
* /register

## Requirements

* Email and password authentication for MVP
* Clean and simple auth UI
* Redirect logged-in users to dashboard
* Allow guest users to explore the app without logging in
* Do not block public lesson preview unless explicitly required later

## Guest Mode

Guest users can:

* view lessons
* complete quick checks
* try quizzes
* use coding practice
* save temporary progress in localStorage

Logged-in users can:

* save progress permanently
* continue progress across devices
* view profile and progress history

---

# 3. Dashboard

## Goal

Give the user a clear overview of their learning progress.

## Content

* Current track
* Continue learning card
* Overall progress
* Track progress
* XP
* Streak
* Recently completed lessons
* Recommended next lesson

## Requirements

* User should immediately see what to do next.
* Dashboard should feel polished and motivating.
* Progress should be based on real activity.
* Guest users should see local progress.
* Logged-in users should see Supabase progress.

## Empty State

If user has no progress yet, show:

* suggested first track
* first lesson recommendation
* short explanation of how learning works

---

# 4. Roadmap Page

## Goal

Show the full learning path.

## Content

* Track cards
* Module list
* Progress per module
* Locked / available / completed states
* Estimated time
* Skill tags

## Requirements

* Should make the learning journey feel structured.
* User should understand what comes first, next, and later.
* Should support future tracks beyond the initial two.
* Should be data-driven from track and module content.

---

# 5. Track Page

## Goal

Show all modules inside one track.

Example tracks:

* Frontend Engineering
* English for Tech Careers

## Content

* Track title
* Track description
* Estimated hours
* Skill tags
* Module cards
* Track progress

## Requirements

* Must be data-driven.
* Must not hardcode only frontend and English.
* Should work for future tracks.
* Should show completed, in-progress, and not-started states.

---

# 6. Module Page

## Goal

Show lessons inside a module.

## Content

* Module title
* Description
* Lesson cards
* Estimated time
* Progress
* Skill tags

## Lesson Card Requirements

Each lesson card should show:

* title
* short description
* level
* estimated minutes
* status: not started / in progress / completed
* progress percentage
* skill tags

---

# 7. Lesson Reader

## Goal

Render a full lesson using lesson blocks.

## Content

* Lesson title
* Description
* Level
* Estimated time
* Objectives
* Lesson progress
* Block renderer
* Next lesson button

## Supported Blocks

* text
* callout
* code-example
* quick-check
* coding-practice
* writing-practice
* quiz
* summary

## Requirements

* The page should be comfortable for long reading.
* The layout should be responsive.
* On desktop, use a sticky lesson outline if useful.
* On mobile, keep navigation simple.
* Mark blocks as completed when the user interacts with required activities.
* Lesson progress should update as blocks are completed.
* Lesson content should be rendered from data, not hardcoded pages.

---

# 8. Block Renderer

## Goal

Render different lesson block types with a consistent UI.

## Requirements

* Accept a LessonBlock object.
* Render the correct block component based on block.type.
* Keep each block component reusable.
* Keep progress logic outside the visual component when possible.
* Avoid large switch logic inside page files.

## Suggested Component Structure

```txt
components/learning/block-renderer.tsx
components/learning/blocks/text-block.tsx
components/learning/blocks/callout-block.tsx
components/learning/blocks/code-example-block.tsx
components/learning/blocks/quick-check-block.tsx
components/learning/blocks/coding-practice-block.tsx
components/learning/blocks/writing-practice-block.tsx
components/learning/blocks/quiz-block.tsx
components/learning/blocks/summary-block.tsx
```

---

# 9. Quick Check Block

## Goal

Check understanding inside a lesson without opening a separate quiz page.

## Behavior

* Show a short question.
* User selects an answer.
* Show immediate feedback.
* Show explanation.
* Mark block completed after answer is submitted.

## Requirements

* Should be fast and lightweight.
* Should support retry.
* Should not feel like a high-pressure test.
* Correct answer should be clearly explained.
* Wrong answer should not shame the user.

---

# 10. Quiz Block

## Goal

Validate understanding at the end or middle of a lesson.

## Supported Question Types

* multiple-choice
* true-false
* fill-blank
* code-output

## Behavior

* Show one question at a time.
* Track answers.
* Show score.
* Show explanation for each question.
* Save best score.
* Mark block completed if score meets passing score.
* Allow retry.

## Requirements

* Quiz appears inside the lesson flow.
* Quiz score contributes to lesson progress.
* User can retry.
* Result screen should show weak areas if possible.
* Quiz should be reusable across lessons.

---

# 11. Coding Practice Block

## Goal

Allow users to practice coding directly in the browser.

## MVP Scope

Support:

* HTML
* CSS
* JavaScript
* live preview

## UI

* Instructions panel
* Checklist
* Monaco editor
* Tabs: HTML, CSS, JS
* Preview iframe
* Reset button
* Show solution button
* Mark as completed button

## Behavior

* Load starter code from challenge data.
* Save user code in localStorage for guest users.
* Save user code in Supabase for logged-in users.
* Render result in sandboxed iframe.
* Allow user to reset code.
* Allow user to reveal solution.
* User can manually check completed checklist items.
* Challenge progress contributes to lesson progress.

## Requirements

* Do not execute server-side code.
* Do not add React execution playground in MVP.
* Keep the editor responsive.
* Make the practice experience feel smooth and focused.
* Do not block the entire app if Monaco fails to load.
* Provide a fallback loading state.

---

# 12. Writing Practice Block

## Goal

Help users practice English for technology work.

## Use Cases

* writing daily updates
* explaining bugs
* asking for clarification
* writing pull request notes
* introducing a project
* answering interview questions

## UI

* Prompt
* Writing textarea
* Checklist
* Save draft
* Show model answer
* Mark as completed button

## Behavior

* Save draft locally for guest users.
* Save draft to Supabase for logged-in users.
* Let user compare their answer with a model answer.
* Mark block completed after user writes a minimum response.

## Requirements

* Do not grade writing with AI in MVP.
* Keep feedback simple.
* Focus on useful workplace English.
* Avoid making users feel tested too early.

---

# 13. Progress System

## Goal

Track real learning progress.

## Data to Track

* completed blocks
* completed lessons
* quiz scores
* coding challenge progress
* writing drafts
* XP
* streak
* last activity date

## Guest Persistence

Use localStorage.

## Logged-In Persistence

Use Supabase.

## Requirements

* Use reusable progress hooks or service functions.
* Keep progress logic separate from UI.
* Design the system so it can later support more storage modes.
* Progress should not be based only on page visits.
* Use optimistic UI carefully, then persist the result.

## Suggested Service Files

```txt
lib/progress/progress-service.ts
lib/progress/local-progress-service.ts
lib/progress/supabase-progress-service.ts
```

---

# 14. Profile / Progress Page

## Goal

Show the user their learning history and progress.

## Content

* Total XP
* Streak
* Track progress
* Completed lessons
* Quiz scores
* Completed challenges
* Skill progress

## Requirements

* Should feel motivating.
* Should help users understand their strengths and weak areas.
* Should work for guest and logged-in users.
* Guest users should be encouraged to create an account to keep progress.

---

# 15. Navigation

## Required Navigation

Desktop:

* Sidebar
* Topbar

Mobile:

* Bottom navigation or compact menu

Primary routes:

* /
* /dashboard
* /roadmap
* /learn/[trackSlug]
* /learn/[trackSlug]/[moduleSlug]
* /lesson/[lessonSlug]
* /profile
* /login
* /register

## Requirements

* Navigation should be simple.
* User should always know where they are.
* Current route should be visually active.
* Guest and logged-in states should be handled clearly.

---

# 16. Animation

## Goal

Make the app feel polished without hurting usability.

## Use Animation For

* page transitions
* card hover
* progress updates
* quiz feedback
* lesson block reveal
* dashboard stat entrance

## Requirements

* Use Framer Motion.
* Keep animations subtle.
* Avoid distracting motion.
* Respect reduced motion when possible.
* Do not make core learning interactions feel slow.

---

# 17. Accessibility

## Requirements

* Use semantic HTML.
* Buttons must use button elements.
* Inputs must have labels.
* Focus states must be visible.
* Color contrast should be readable.
* Keyboard navigation should work.
* Interactive blocks should not rely only on color.
* Quiz feedback should use text, not only color.
* Coding practice controls should be keyboard accessible.

---

# 18. Deployment

## Goal

Deploy the app easily and safely.

## Platform

Use Vercel.

## Requirements

* Use environment variables for Supabase keys.
* Do not commit secrets.
* App should build successfully before deployment.
* Landing page, dashboard, roadmap, lesson page, and auth pages should work on deployment.

## Required Environment Variables

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

If server-only Supabase usage is added later, use server-only variables where needed.
