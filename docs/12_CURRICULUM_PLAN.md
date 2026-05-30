# FluentStack Master Curriculum Plan

## Purpose

This document defines the long-term curriculum map for FluentStack. It is a master map, not a full lesson-by-lesson inventory.

It should guide future detailed documents:

- `docs/13_FRONTEND_CURRICULUM_DETAIL.md`
- `docs/14_ENGLISH_CURRICULUM_DETAIL.md`
- `docs/15_CONTENT_AUTHORING_GUIDE.md`

FluentStack has two main tracks:

1. Frontend Engineering
2. English for Tech Careers

Developer documentation stays in English. Actual learning content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when natural: `component`, `props`, `state`, `API`, `semantic HTML`, `pull request`, `deployment`, and similar terms.

English for Tech Careers content should be bilingual: Indonesian explanation, practical English examples, Indonesian context when useful, and writing practice in realistic tech-work situations.

## Curriculum Principles

- Teach one practical skill at a time.
- Keep practice inside the lesson flow.
- Use quick checks for small understanding checks.
- Use quizzes to confirm concepts without trick questions.
- Use coding practice for hands-on frontend skills.
- Use writing practice for real remote-work communication.
- Use projects and case studies to connect multiple modules.
- Keep copy clear, practical, and specific.
- Build toward real work readiness, not just tutorial completion.

## Learner Levels

| Level | Definition | Expected capability |
| --- | --- | --- |
| Beginner | Learner is building basic confidence. | Can follow guided lessons, complete small practice blocks, and explain simple choices. |
| Intermediate | Learner can build small features and communicate progress. | Can build UI pieces, handle common states, write updates, and explain blockers. |
| Advanced | Learner can make product and architecture decisions. | Can improve reliability, accessibility, performance, and maintainability. |
| Remote-ready | Learner can work in a remote tech environment. | Can own a feature, communicate async, review work, and present projects clearly. |

Recommended activity types by level:

- Beginner: quick check, quiz, guided coding practice, guided writing practice.
- Intermediate: coding practice, writing practice, case study, self-review checklist, small project work.
- Advanced: project work, architecture case study, technical explanation, code review writing.
- Remote-ready: portfolio project, demo presentation, async update, stakeholder update, interview practice.

## Track 1: Frontend Engineering

### Track Goal

Take learners from basic web foundations to advanced frontend/product engineering. A learner who completes the full track should be able to build, explain, test, and deploy product-ready web interfaces.

### Level 1: Beginner Frontend Foundations

Focus: Understand how the web works and build static interfaces correctly.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Web Foundations | Browser, server, URL, HTTP, HTML/CSS/JS roles, project structure. | quick check, quiz, self-review checklist |
| HTML Semantic | Semantic elements, document structure, forms, accessibility basics. | code example, quick check, quiz |
| CSS Modern Layout | Box model, Flexbox, Grid, spacing, sizing, typography, color. | coding practice, quick check, quiz |
| Responsive Design | Mobile-first layout, breakpoints, fluid spacing, responsive navigation/cards. | coding practice, self-review checklist |
| Git/GitHub Workflow | Git basics, branches, commits, pull requests, diffs. | quiz, writing practice, self-review checklist |

Lesson idea groups:

- Build a semantic article page.
- Build a responsive navbar.
- Build a pricing card section.
- Fix a broken layout.
- Write useful commit messages.

### Level 2: JavaScript and TypeScript Foundations

Focus: Add reliable interaction and safer data handling.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| JavaScript Fundamentals | Values, variables, conditionals, loops, functions, arrays, objects, DOM interaction. | quick check, quiz, coding practice |
| JavaScript Advanced | Scope, closures, modules, promises, `async` / `await`, error handling. | coding practice, case study, quiz |
| TypeScript | Basic types, unions, narrowing, function types, component props, API response types. | coding practice, quick check, quiz |
| Forms and Validation | Form state, validation, clear errors, accessible form patterns. | coding practice, self-review checklist, quiz |

Lesson idea groups:

- Validate a signup form.
- Handle async loading and errors.
- Type an API response.
- Refactor unsafe JavaScript into TypeScript.
- Build a small interactive UI pattern.

### Level 3: React Product UI

Focus: Build reusable interfaces with React and connect UI behavior to product state.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| React Fundamentals | Components, props, state, events, conditional rendering, lists, keys. | coding practice, quick check, quiz |
| React Intermediate | Composition, controlled forms, effects, custom hooks, loading/error states. | coding practice, case study, quiz |
| React Advanced | Error boundaries, memoization when useful, performance awareness, reusable patterns. | case study, coding practice, self-review checklist |
| State Management | Local state, derived state, URL state, server state, when not to add a state library. | case study, quiz, coding practice |
| Design System | Tokens, component variants, button hierarchy, form controls, empty/loading/error/success states. | coding practice, project work, self-review checklist |

Lesson idea groups:

- Build reusable cards and buttons.
- Build a filtered list.
- Build a form with clear errors.
- Refactor duplicate components.
- Create a small design-system section.

### Level 4: Next.js and Full Product Features

Focus: Build app-level features with routing, data, auth, and persistence.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Next.js App Router | App structure, layouts, dynamic routes, loading/error UI, server/client components. | quiz, coding practice, case study |
| Production Next.js | Metadata, environment variables, deployment basics, route handlers, build constraints. | checklist, case study |
| Data Fetching | Loading states, empty states, error states, response mapping, revalidation basics. | coding practice, quick check, quiz |
| API Integration | REST basics, request/response shape, API errors, integration boundaries. | coding practice, case study |
| Authentication | Auth UX, session-aware UI, public/protected routes, auth errors. | coding practice, case study, checklist |
| Supabase or Backend Integration | Database-backed features, RLS concepts, client/server access, user data persistence. | coding practice, case study, quiz |
| Backend Basics for Frontend Engineers | HTTP methods, status codes, JSON, auth headers, database basics. | quick check, case study, quiz |

Lesson idea groups:

- Build a dashboard route.
- Add session-aware navigation.
- Fetch data with loading and error states.
- Save a user preference.
- Explain an API error and choose the right UI response.

### Level 5: Quality, Performance, and Architecture

Focus: Make frontend work reliable, accessible, fast, and maintainable.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Testing | Unit tests, component tests, integration tests, critical flows, what not to test. | coding practice, case study, checklist |
| Performance and Core Web Vitals | LCP, CLS, INP, images, bundle awareness, measuring before optimizing. | case study, quiz, checklist |
| Accessibility | Keyboard navigation, focus states, semantic markup, contrast, form accessibility. | coding practice, checklist, quiz |
| Frontend Architecture | Folder structure, service boundaries, content-driven rendering, reusable components, business logic placement. | case study, project work, checklist |
| Security Basics | XSS basics, secrets, environment variables, auth boundaries, RLS awareness, safe iframe constraints. | quiz, case study, checklist |
| CI/CD Basics | Lint, typecheck, build checks, preview deployments, pull request checks. | checklist, case study |

Lesson idea groups:

- Audit a form for accessibility.
- Fix layout shift.
- Add tests for a critical flow.
- Review a folder structure.
- Prepare a Vercel deployment checklist.

### Level 6: Portfolio and Remote-Work Readiness

Focus: Turn skills into proof of work.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Portfolio Projects | Planning, feature slicing, UI polish, auth, persistence, deployment. | project work, case study, checklist |
| Product Engineering Practice | Reading requirements, handling ambiguity, UX/scope trade-offs, implementation notes. | case study, project work, writing practice |
| Remote-Work Readiness | Async updates, PR habits, scope clarification, blocker explanation, demos. | writing practice, project work, checklist |

Lesson idea groups:

- Build an auth-backed mini app.
- Improve an MVP into a portfolio-ready project.
- Write implementation notes.
- Prepare a project demo.
- Review a project before publishing.

## Track 2: English for Tech Careers

### Track Goal

Help learners work remotely in tech using English clearly and confidently.

This does not mean native-speaker perfection. It means professional remote-work fluency:

- daily updates
- asking clarification
- explaining blockers
- asking for help
- bug reports
- issue writing
- pull request notes
- commit messages
- code review communication
- meeting phrases
- technical explanation
- interviews
- portfolio demos
- async remote communication
- stakeholder updates

### Level 1: Work English Foundations

Focus: Build simple, useful sentence patterns for tech work.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Basic Sentence Structure for Work Communication | Practical subject/verb/object patterns, past/present/future updates, polite requests. | quick check, writing practice, quiz |
| Developer Vocabulary | Work verbs, common nouns, UI terms, API terms, debugging terms. | quiz, writing practice, checklist |
| Reading Documentation and Error Messages | Main instruction, warning vs error, stack trace basics, summarizing errors. | quick check, case study, writing practice |

Lesson idea groups:

- Rewrite vague work sentences.
- Match error messages to likely actions.
- Write a simple status update.
- Explain a small bug in one paragraph.

### Level 2: Daily Remote Communication

Focus: Communicate daily work without long meetings.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Daily Updates | Yesterday / Today / Blockers, specific progress, actionable blockers. | writing practice, quick check, checklist |
| Asking Clarification | Scope, expected behavior, priority, acceptance criteria, edge cases. | writing practice, case study |
| Explaining Blockers | What happened, what was tried, what is needed, who can unblock it. | writing practice, checklist |
| Asking for Help | Clear context, attempted solution, specific request, follow-up. | writing practice, quick check |
| Meeting Phrases | Joining discussion, asking to repeat, confirming understanding, summarizing next steps. | quick check, writing practice |

Lesson idea groups:

- Write a daily update for a frontend task.
- Ask a PM to clarify a design state.
- Explain an API blocker.
- Ask a teammate for review.
- Summarize meeting action items.

### Level 3: Issue, Bug, and Pull Request Communication

Focus: Write technical notes that help teammates act.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Bug Reports | Expected vs actual behavior, reproduction steps, environment, screenshots/logs. | writing practice, case study, checklist |
| Issue Writing | Problem statement, acceptance criteria, scope boundaries, dependencies. | writing practice, case study |
| Pull Request Descriptions | What changed, why it changed, how to test, risks, screenshots. | writing practice, checklist |
| Commit Messages | Clear verbs, scoped commits, avoiding vague messages. | quick check, writing practice |
| Code Review Language | Asking for changes, suggesting alternatives, explaining trade-offs, responding to feedback. | writing practice, case study, checklist |

Lesson idea groups:

- Turn a vague bug report into a useful one.
- Write PR notes for a login form.
- Respond to a code review comment.
- Write commit messages for a small feature.

### Level 4: Technical Explanation and Decision Making

Focus: Explain technical work clearly to engineers and non-engineers.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Technical Explanation | Implementation steps, UI behavior, API integration, debugging path. | writing practice, case study, quick check |
| Explaining Projects | Problem, user, solution, core features, technical choices. | writing practice, project work, checklist |
| Explaining Decisions and Trade-Offs | Option comparison, UX vs scope, performance vs complexity, short-term vs long-term. | case study, writing practice |
| Advanced Stakeholder Updates | Status, risk, delay, launch readiness, next action. | writing practice, case study |

Lesson idea groups:

- Explain why a feature was split into smaller tasks.
- Explain why an API response blocks frontend work.
- Write a launch readiness update.
- Present a frontend architecture choice.

### Level 5: Interview, Portfolio, and Fluency Maintenance

Focus: Present work, answer questions, and keep English useful over time.

| Module | Coverage | Recommended activities |
| --- | --- | --- |
| Interview English | Self-introduction, frontend experience, technical questions, questions for interviewer. | writing practice, checklist, case study |
| Behavioral Interview Answers | Conflict, learning quickly, ambiguity, feedback, ownership. | writing practice, checklist |
| Salary and Availability Conversation | Availability, time zone overlap, contract vs full-time, salary range. | writing practice, quick check |
| Portfolio and Demo Presentation | Project overview, feature walkthrough, technical choices, lessons learned. | project work, writing practice, checklist |
| Async Communication and Remote Collaboration | Long-form updates, decision records, handoff notes, time zone collaboration. | case study, writing practice |
| Maintaining English Fluency | Weekly writing habit, reading docs, reviewing old messages, phrase bank. | checklist, writing practice |

Lesson idea groups:

- Write a portfolio introduction.
- Present a project demo script.
- Answer "Tell me about yourself" for a frontend role.
- Discuss availability and salary professionally.
- Write a handoff note for another time zone.

## How Both Tracks Support Each Other

Frontend Engineering teaches the technical work. English for Tech Careers teaches how to communicate that work in a remote team.

Examples:

| Frontend lesson | English support |
| --- | --- |
| Build a login form | Explain validation, edge cases, and test steps in a pull request note. |
| Handle API errors | Explain a blocker caused by an unexpected API response. |
| Build a responsive navbar | Write a daily update about what changed and what still needs review. |
| Improve accessibility | Explain keyboard navigation concerns in a code review comment. |
| Add Supabase Auth | Write a handoff note describing auth behavior and known limitations. |
| Portfolio project | Present the project in English: problem, solution, features, trade-offs, next steps. |

Recommended integration pattern:

1. Teach the frontend concept.
2. Add one coding or case-study activity.
3. Add an optional English support prompt when the concept maps to real communication.
4. Reuse the same project context across both tracks when useful.

## Realistic Learning Timeline

This timeline assumes consistent part-time learning. Learners may move faster or slower depending on prior experience and available time.

| Timeline | Primary focus | Expected outcome |
| --- | --- | --- |
| 0 to 3 months | Web foundations, semantic HTML, CSS layout, responsive design, basic JavaScript, daily updates, blockers. | Build simple static pages and write clear daily updates. |
| 4 to 6 months | JavaScript, TypeScript basics, forms, React fundamentals, bug reports, clarification, PR notes. | Build small interactive features and explain changes in simple English. |
| 7 to 12 months | React intermediate, state, API integration, Next.js App Router, auth basics, Supabase/backend integration, code review language. | Build product features with auth/persistence and communicate blockers/trade-offs. |
| 13 to 18 months | Production Next.js, testing, accessibility, performance, frontend architecture, stakeholder updates, portfolio demos. | Improve reliability and UX, explain project decisions, prepare public portfolio work. |
| 18 to 30 months | Advanced React, design systems, security basics, CI/CD, product engineering practice, interview English, remote collaboration habits. | Own features from requirement to deployment and present work clearly in remote English. |

## MVP Content Expansion Order

### Phase 1: Complete the Beginner Vertical Slice

Create first:

- Frontend Engineering: HTML & Web Fundamentals.
- Frontend Engineering: CSS Fundamentals.
- Frontend Engineering: JavaScript Basics.
- English for Tech Careers: English for Remote Work.

Why:

- These modules support the current MVP feature set.
- They give learners a clear starting path.
- They use existing block types well: text, callout, code example, quick check, quiz, writing practice, coding practice.
- They create useful cross-track scenarios, such as daily updates about frontend tasks.

### Phase 2: Add JavaScript, Forms, and Work Communication

Create next:

- JavaScript Fundamentals.
- Forms and Validation.
- Developer Vocabulary.
- Bug Reports and Issue Writing.
- Pull Request Descriptions.

Why:

- JavaScript unlocks meaningful frontend interaction.
- Forms are common in real products and connect to validation, accessibility, and auth.
- Bug reports and PR descriptions support realistic remote work.

### Phase 3: Add React and API Integration

Create after foundations are stable:

- React Fundamentals.
- React Intermediate.
- Data Fetching and API Integration.
- Asking Clarification.
- Code Review Language.

Why:

- React content is more useful after HTML, CSS, and JavaScript foundations.
- API integration creates realistic blockers and communication scenarios.
- Code review practice becomes useful once learners can reason about components.

### Phase 4: Add Next.js, Auth, Supabase, and Production Skills

Create later:

- Next.js App Router.
- Production Next.js.
- Authentication.
- Supabase or Backend Integration.
- Testing.
- Accessibility.
- Performance and Core Web Vitals.

Why:

- These topics need enough frontend fluency to avoid overwhelming learners.
- They are stronger when taught through project context.
- They map directly to portfolio-quality work.

### Phase 5: Add Portfolio, Interviews, and Remote-Ready Capstone

Create after the core technical path is strong:

- Portfolio Projects.
- Product Engineering Practice.
- Interview English.
- Behavioral Interview Answers.
- Portfolio and Demo Presentation.
- Async Remote Collaboration.

Why:

- These modules should use projects learners already built.
- Interview and demo content is stronger when tied to real implementation details.
- Remote-ready communication should be practiced with realistic project artifacts.

### Content That Should Wait

Wait until later:

- AI grading.
- Automated code validation.
- Certificates.
- Large CMS workflows.
- Advanced backend tracks.
- Complex team collaboration simulation.
- Deep system design content.

Reason:

These topics may be valuable later, but they do not improve the first complete learning path enough to justify early complexity.

## Next Curriculum Work

Recommended next documents:

1. `docs/20_FRONTEND_CURRICULUM_DETAIL.md`
2. `docs/21_ENGLISH_CURRICULUM_DETAIL.md`
3. `docs/22_CONTENT_AUTHORING_GUIDE.md`
