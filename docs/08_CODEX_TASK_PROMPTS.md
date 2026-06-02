# docs/08_CODEX_TASK_PROMPTS.md

# Codex Task Prompts

## Purpose

This document contains small, focused prompts to use with Codex.

Do not ask Codex to build the entire app in one prompt.

Use one prompt per task.

After each task:

1. Review the diff.
2. Run the app.
3. Check the UI.
4. Fix obvious issues.
5. Commit before moving to the next major task.

---

# Prompt Format

Use this structure when giving Codex a task:

```txt
Task:
Context:
Scope:
Files to modify:
Requirements:
Do not:
Acceptance criteria:
```

---

# Prompt 0: Read Project Blueprint

Use this before implementation.

```txt
Read AGENTS.md and all files inside docs/.

Do not write code yet.

Summarize the project direction, MVP scope, technical architecture, and implementation phases in concise bullet points.

Then list any unclear parts that should be clarified before implementation.
```

---

# Prompt 1: Initialize Next.js Project Structure

Use this after creating the Next.js app.

```txt
Task:
Set up the base project structure for FluentStack.

Context:
FluentStack is an interactive learning platform using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and Vercel.

Scope:
Create the recommended folder structure from docs/06_TECHNICAL_ARCHITECTURE.md.

Files to modify:
- src/app/*
- src/components/*
- src/content/*
- src/types/*
- src/lib/*
- src/hooks/*

Requirements:
- Create folders only when useful.
- Add placeholder index files only if needed.
- Keep the app running.
- Do not implement features yet.
- Preserve the default Next.js setup if it is still needed.

Do not:
- Add Supabase logic yet.
- Add auth yet.
- Add quiz yet.
- Add coding playground yet.

Acceptance criteria:
- Folder structure matches the architecture doc.
- App still runs locally.
- No broken imports.
```

---

# Prompt 2: Build App Shell and Landing Page

```txt
Task:
Build the initial app shell and landing page.

Context:
Use AGENTS.md and docs/05_DESIGN_SYSTEM.md. FluentStack should feel like a premium dark-mode developer learning platform.

Scope:
Create reusable layout components and a polished landing page.

Files to modify:
- src/app/page.tsx
- src/components/layout/*
- src/components/progress/*
- src/components/learning/*
- src/components/ui/* if needed

Requirements:
- Use TypeScript.
- Use Tailwind CSS.
- Use shadcn/ui where useful.
- Use Framer Motion for subtle animation.
- Create AppShell, Sidebar, Topbar, and responsive navigation if appropriate.
- Landing page sections:
  - hero
  - track preview
  - learning flow preview
  - coding lab preview
  - progress preview
  - call to action

Do not:
- Add Supabase Auth yet.
- Add database logic.
- Add real progress logic.
- Add coding playground yet.

Acceptance criteria:
- Landing page looks polished.
- Layout is responsive.
- Navigation links are present.
- No console errors.
- No TypeScript errors.
```

---

# Prompt 3: Add Static Content Types and Sample Data

```txt
Task:
Create the static content model for FluentStack.

Context:
Read docs/03_CONTENT_SCHEMA.md. Lessons are block-based. Quiz and practice are part of lesson blocks.

Scope:
Create TypeScript types and initial static content for one vertical slice.

Files to modify:
- src/types/learning.ts
- src/types/quiz.ts
- src/types/challenge.ts
- src/content/tracks.ts
- src/content/modules.ts
- src/content/lessons.ts
- src/content/quizzes.ts
- src/content/challenges.ts
- src/lib/content/get-track.ts
- src/lib/content/get-module.ts
- src/lib/content/get-lesson.ts
- src/lib/content/get-quiz.ts
- src/lib/content/get-challenge.ts

Requirements:
- Add Frontend Engineering track.
- Add HTML & Web Fundamentals module.
- Add HTML Semantic Basics lesson.
- Add lesson blocks:
  - text
  - callout
  - code-example
  - quick-check
  - quiz
  - summary
- Add one quiz for HTML Semantic Basics.
- Keep relationships typed and consistent.
- Lesson content must use Bahasa Indonesia.
- Keep common technical terms in English when natural.
- English for Tech Careers content should use bilingual format.
- Do not translate code-related terms awkwardly.

Do not:
- Hardcode lesson content inside route files.
- Add Supabase.
- Add auth.
- Add Monaco.

Acceptance criteria:
- Content is strongly typed.
- Track, module, lesson, and quiz data can be imported.
- Content lookup utilities work.
- No TypeScript errors.
```

---

# Prompt 4: Build Roadmap, Track, and Module Pages

```txt
Task:
Build the roadmap, track, and module pages using static content.

Context:
Read docs/04_FEATURE_SPECS.md and docs/06_TECHNICAL_ARCHITECTURE.md.

Scope:
Create pages that let users navigate from roadmap to track to module to lesson.

Files to modify:
- src/app/roadmap/page.tsx
- src/app/learn/[trackSlug]/page.tsx
- src/app/learn/[trackSlug]/[moduleSlug]/page.tsx
- src/components/learning/track-card.tsx
- src/components/learning/module-card.tsx
- src/components/learning/lesson-card.tsx
- src/lib/content/* if needed

Requirements:
- Use data from src/content.
- Show titles, descriptions, estimated time, skill tags, and placeholder progress states.
- Make cards clickable.
- Handle missing track/module with a helpful not-found state.
- Keep UI consistent with docs/05_DESIGN_SYSTEM.md.

Do not:
- Add real progress logic yet.
- Add Supabase.
- Add auth.

Acceptance criteria:
- /roadmap works.
- /learn/frontend-engineering works.
- /learn/frontend-engineering/html-basics works.
- User can navigate toward a lesson.
- UI is responsive.
```

---

# Prompt 5: Build Lesson Reader and Block Renderer

```txt
Task:
Build the lesson reader and block renderer.

Context:
Read docs/02_LEARNING_FLOW.md and docs/03_CONTENT_SCHEMA.md. Lessons are made of blocks.

Scope:
Render the HTML Semantic Basics lesson from static data.

Files to modify:
- src/app/lesson/[lessonSlug]/page.tsx
- src/components/learning/lesson-reader.tsx
- src/components/learning/block-renderer.tsx
- src/components/learning/lesson-outline.tsx
- src/components/learning/lesson-progress.tsx
- src/components/learning/blocks/text-block.tsx
- src/components/learning/blocks/callout-block.tsx
- src/components/learning/blocks/code-example-block.tsx
- src/components/learning/blocks/quick-check-block.tsx
- src/components/learning/blocks/quiz-block.tsx
- src/components/learning/blocks/summary-block.tsx

Requirements:
- Render blocks dynamically by block.type.
- Show lesson title, description, objectives, level, estimated time, and progress placeholder.
- Quick check should allow answer selection and show explanation.
- Quiz block can show a placeholder for now if the full quiz engine is not built yet.
- Use polished, readable UI.

Do not:
- Add Supabase.
- Add full quiz engine unless specifically requested.
- Add Monaco.
- Hardcode lesson content in the page.

Acceptance criteria:
- /lesson/html-semantic-basics renders a complete lesson.
- Text, callout, code example, quick check, quiz placeholder, and summary render correctly.
- Quick check interaction works.
- Page is responsive and readable.
```

---

# Prompt 6: Add Local Progress System

```txt
Task:
Add local progress tracking for guest users.

Context:
Read docs/02_LEARNING_FLOW.md and docs/06_TECHNICAL_ARCHITECTURE.md. Progress should be based on meaningful learning activity, not page visits.

Scope:
Create localStorage-based progress and connect it to the lesson reader.

Files to modify:
- src/types/progress.ts
- src/hooks/use-local-storage.ts
- src/hooks/use-progress.ts
- src/lib/progress/local-progress-service.ts
- src/lib/progress/progress-service.ts
- src/lib/progress/progress-calculator.ts
- src/components/learning/lesson-progress.tsx
- src/components/learning/blocks/* as needed

Requirements:
- Store completedBlockIds.
- Store completedLessonIds.
- Store quizScores as a record.
- Store totalXp.
- Store streakCount and lastActivityDate.
- Mark quick-check block completed after answer submission.
- Mark text/code/summary blocks completed using a simple reliable action.
- Calculate lesson progress based on requiredBlockIds.

Do not:
- Add Supabase yet.
- Add auth yet.
- Make progress based only on page visits.

Acceptance criteria:
- Completing blocks updates progress.
- Refreshing the browser preserves progress.
- Lesson progress changes visibly.
- Completing required blocks can complete the lesson.
```

---

# Prompt 7: Build Quiz Engine

```txt
Task:
Build the reusable quiz engine.

Context:
Read docs/03_CONTENT_SCHEMA.md and docs/04_FEATURE_SPECS.md. Quiz appears inside lesson flow.

Scope:
Replace the quiz placeholder with a functional quiz engine.

Files to modify:
- src/components/quiz/quiz-engine.tsx
- src/components/quiz/quiz-question.tsx
- src/components/quiz/quiz-result.tsx
- src/components/learning/blocks/quiz-block.tsx
- src/lib/quiz/scoring.ts
- src/hooks/use-progress.ts if needed

Requirements:
- Support multiple-choice.
- Support true-false.
- Support fill-blank.
- Support code-output.
- Show one question at a time.
- Show explanation.
- Calculate score.
- Save best score locally.
- Mark quiz block completed if passing score is reached.
- Allow retry.

Do not:
- Add Supabase yet.
- Add unrelated quiz routes.
- Make quiz a disconnected separate feature.

Acceptance criteria:
- Quiz works inside /lesson/html-semantic-basics.
- Score calculation is correct.
- Passing quiz updates lesson progress.
- Retry works.
```

---

# Prompt 8: Add Supabase Auth

```txt
Task:
Add Supabase Auth.

Context:
Read docs/06_TECHNICAL_ARCHITECTURE.md. FluentStack uses Supabase Auth and still supports guest mode.

Scope:
Add login, register, logout, session handling, and Supabase client setup.

Files to modify:
- src/lib/supabase/client.ts
- src/lib/supabase/server.ts
- src/lib/supabase/middleware.ts
- src/app/login/page.tsx
- src/app/register/page.tsx
- src/components/auth/login-form.tsx
- src/components/auth/register-form.tsx
- src/components/auth/auth-card.tsx
- src/components/layout/topbar.tsx
- middleware.ts if needed

Requirements:
- Use @supabase/supabase-js and @supabase/ssr.
- Use email/password auth.
- Add environment variable documentation if needed.
- Redirect logged-in users to dashboard.
- Show logout in navigation when logged in.
- Keep guest mode available.

Do not:
- Add database progress yet.
- Remove localStorage progress.
- Commit secrets.

Acceptance criteria:
- User can register.
- User can login.
- User can logout.
- App still works for guest users.
```

---

# Prompt 9: Add Supabase Progress Persistence

```txt
Task:
Persist logged-in user progress to Supabase.

Context:
Read docs/03_CONTENT_SCHEMA.md and docs/06_TECHNICAL_ARCHITECTURE.md.

Scope:
Add Supabase progress service and connect it to the existing progress system.

Files to modify:
- src/lib/progress/supabase-progress-service.ts
- src/lib/progress/progress-service.ts
- src/hooks/use-progress.ts
- src/types/database.ts
- Supabase SQL migration file if the project uses migrations

Requirements:
- Save lesson progress.
- Save quiz attempts.
- Save user stats.
- Keep localStorage for guest users.
- Use Supabase when user is logged in.
- Handle loading and failed requests safely.
- Document required SQL if migrations are not used.

Do not:
- Add complex sync from guest to logged-in progress unless requested.
- Expose service role key.
- Allow users to access other users' data.

Acceptance criteria:
- Logged-in progress persists after refresh.
- Guest progress still works.
- Progress service chooses the correct storage mode.
```

---

# Prompt 10: Add Coding Practice Block

```txt
Task:
Add the coding practice block with browser-based HTML/CSS/JS editing.

Context:
Read docs/04_FEATURE_SPECS.md. Coding practice is an activity block inside lessons.

Scope:
Build a Monaco-based coding lab.

Files to modify:
- src/components/playground/code-editor.tsx
- src/components/playground/preview-panel.tsx
- src/components/playground/coding-lab.tsx
- src/components/learning/blocks/coding-practice-block.tsx
- src/content/challenges.ts
- src/types/challenge.ts
- src/hooks/use-progress.ts if needed

Requirements:
- Use @monaco-editor/react.
- Support HTML, CSS, and JS tabs.
- Render output in sandboxed iframe.
- Load starter code from challenge data.
- Save code locally for guests.
- Save code to Supabase for logged-in users if progress service is ready.
- Add reset button.
- Add show solution button.
- Add checklist.
- Add mark completed button.

Do not:
- Execute code on the server.
- Add React playground in MVP.
- Add unrelated standalone challenge pages.

Acceptance criteria:
- Coding practice renders inside a lesson.
- User can edit code and preview output.
- Reset works.
- Show solution works.
- Completion updates progress.
```

---

# Prompt 11: Add Writing Practice Block

```txt
Task:
Add the writing practice block.

Context:
Writing practice is used for English for Tech Careers lessons.

Scope:
Build a reusable writing practice block.

Files to modify:
- src/components/learning/blocks/writing-practice-block.tsx
- src/content/lessons.ts
- src/hooks/use-progress.ts if needed
- src/lib/progress/* if needed

Requirements:
- Show prompt.
- Show textarea.
- Show checklist.
- Save draft locally for guests.
- Save draft to Supabase for logged-in users if progress service is ready.
- Add show model answer.
- Require minimum character count when configured.
- Mark block completed after meaningful response.

Do not:
- Add AI grading.
- Add grammar correction.
- Add unrelated English tools.

Acceptance criteria:
- Writing practice works inside an English lesson.
- Draft is saved.
- Model answer can be revealed.
- Completion updates progress.
```

---

# Prompt 12: Build Profile and Progress Page

```txt
Task:
Build the profile and progress page.

Context:
Read docs/04_FEATURE_SPECS.md. The profile page should help users understand learning progress.

Scope:
Create a polished progress overview.

Files to modify:
- src/app/profile/page.tsx
- src/components/progress/*
- src/hooks/use-progress.ts
- src/lib/progress/progress-calculator.ts

Requirements:
- Show total XP.
- Show streak.
- Show track progress.
- Show completed lessons.
- Show quiz scores.
- Show completed challenges.
- Show skill progress.
- Work for guest users.
- Work for logged-in users if Supabase progress is implemented.

Do not:
- Add social features.
- Add certificates.
- Add complex analytics.

Acceptance criteria:
- /profile works.
- User can understand progress.
- Guest users see account creation reminder.
```

---

# Prompt 13: Expand MVP Content

```txt
Task:
Expand MVP content.

Context:
Read docs/07_IMPLEMENTATION_PHASES.md Phase 12.

Scope:
Add initial content for Frontend Engineering and English for Tech Careers.

Files to modify:
- src/content/tracks.ts
- src/content/modules.ts
- src/content/lessons.ts
- src/content/quizzes.ts
- src/content/challenges.ts

Requirements:
- Add 10 Frontend Engineering beginner lessons.
- Add 10 English for Tech Careers beginner lessons.
- Frontend lesson explanations must use Bahasa Indonesia.
- Frontend quiz questions and explanations must use Bahasa Indonesia.
- Coding challenge instructions must use Bahasa Indonesia.
- Keep common technical terms in English when natural.
- English for Tech Careers lessons must use bilingual format: Indonesian explanation, - practical English examples, Indonesian meaning, and writing practice.
- Add useful quiz questions.
- Add at least 5 coding challenges.
- Add at least 5 writing practice blocks.
- Keep all content typed and schema-compliant.

Do not:
- Add placeholder-only lessons.
- Add video content.
- Add unsupported block types.

Acceptance criteria:
- Roadmap feels real.
- Lessons render correctly.
- Content is useful and practical.
- No broken references between tracks, modules, lessons, quizzes, and challenges.
```

---

# Prompt 14: Polish UI and Accessibility

```txt
Task:
Polish UI, responsiveness, accessibility, and interaction quality.

Context:
Read docs/05_DESIGN_SYSTEM.md and docs/09_QA_CHECKLIST.md.

Scope:
Improve existing UI without changing product scope.

Requirements:
- Improve spacing.
- Improve mobile layout.
- Improve focus states.
- Improve empty states.
- Improve loading states.
- Improve quiz feedback.
- Improve lesson readability.
- Respect reduced motion where possible.
- Fix obvious accessibility issues.
- Fix obvious console errors.

Do not:
- Add new major features.
- Rewrite the entire app.
- Change core architecture.

Acceptance criteria:
- App feels more polished.
- Core flow still works.
- No major regressions.
```

---

# Prompt 15: Prepare for Vercel Deployment

```txt
Task:
Prepare FluentStack for Vercel deployment.

Context:
Read docs/06_TECHNICAL_ARCHITECTURE.md and docs/09_QA_CHECKLIST.md.

Scope:
Clean up project for deployment.

Requirements:
- Ensure build passes.
- Ensure env variable names are documented.
- Ensure no secrets are committed.
- Add README if missing.
- Add basic project description.
- Add setup instructions.
- Add Supabase setup notes.
- Add deployment notes.
- Check major routes.

Do not:
- Add unrelated features.
- Add fake claims.

Acceptance criteria:
- App builds successfully.
- Project can be deployed to Vercel.
- README is useful.
```
