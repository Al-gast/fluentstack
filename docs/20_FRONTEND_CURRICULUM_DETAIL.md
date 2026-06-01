# Frontend Engineering Curriculum Detail

## Purpose

This document defines the detailed Frontend Engineering curriculum for FluentStack.

It guides future content batches from beginner web foundations to Advanced Frontend Engineer / Frontend Product Engineer readiness. It is detailed enough to plan modules and lesson batches, but it is not raw lesson content.

Actual lesson content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when natural: `component`, `props`, `state`, `hook`, `API`, `semantic HTML`, `responsive design`, `accessibility`, `deployment`, and similar terms.

The curriculum follows FluentStack's learning model:

- Lessons are block-based.
- Practice belongs inside lessons.
- Progress should come from required blocks, not page views.
- Frontend content should be practical and connected to real product work.
- Writing practice can be used when the frontend task naturally maps to remote-work communication, such as PR notes, bug reports, implementation notes, or project demos.

## Track Outcome

A learner who completes this track should be able to:

- Build accessible, responsive web interfaces.
- Use JavaScript, TypeScript, React, and Next.js with practical judgment.
- Connect frontend features to APIs, auth, and persistence.
- Test, debug, optimize, and deploy production frontend work.
- Make maintainable architecture decisions.
- Explain implementation choices clearly in project notes, pull requests, and interviews.

## Activity Type Reference

Use these activity types across modules:

- `text`: short explanation of one concept.
- `callout`: warning, tip, common mistake, or decision rule.
- `code-example`: focused example that supports the concept.
- `quick-check`: one small understanding check.
- `quiz`: concept check at the end of a lesson or module.
- `coding-practice`: browser-based implementation task.
- `writing-practice`: PR note, bug report, implementation note, or demo script.
- `project work`: multi-lesson output.
- `case study`: inspect a realistic scenario and make a decision.
- `self-review checklist`: quality checklist before completion.

## Level 1: Web Foundations

Goal: Understand the web ecosystem before writing full HTML pages.

This level is for absolute beginners. It should explain what learners are looking at when they open a website, what the browser does, what a server is, and why frontend projects contain files such as `index.html`, `style.css`, and `script.js`. The goal is orientation, not deep implementation.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Web Orientation | Understand the basic objects and flow of the web. | What a website is; what a web page is; what a browser is; what a URL is; what a server is; what happens when opening a URL; request and response in simple terms. | text, callout, quick-check, quiz | Plain-language explanation of opening a web page from URL to visible page. | Can explain website, web page, browser, URL, server, request, and response without using advanced networking terms. |
| HTML, CSS, and JavaScript Orientation | Understand the three core frontend languages before writing full pages. | What HTML is; what CSS is; what JavaScript is; how HTML, CSS, and JavaScript work together on one web page; what happens when the browser reads HTML, CSS, and JavaScript, explained simply. | text, code-example, callout, quick-check, quiz | Annotated simple page showing which part is structure, style, and behavior. | Can explain what HTML, CSS, and JavaScript do separately and together in one page. |
| First Frontend Project Orientation | Recognize the files and tools used in a small frontend project. | What `index.html` is; what `style.css` is; what `script.js` is; what an `assets` folder is; what a small frontend project folder usually contains; basic DevTools introduction; basic Git/GitHub for saving a project. | text, code-example, case study, writing-practice, self-review checklist | File map for a small static project plus a short note explaining what each file does. | Can read a small project folder, identify the main files, open basic DevTools, and explain why Git/GitHub help save work. |

## Level 2: HTML and Accessibility Foundations

Goal: Write correct HTML structure that works for browsers, assistive technology, and other developers.

This level starts after learners understand what HTML is and where an HTML file fits in a frontend project. Now they begin writing page structure intentionally.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| HTML Basics | Write the basic structure and content of an HTML page. | Basic HTML document structure; tag, element, and attribute; headings; paragraphs; links; images; page content structure; relative paths. | text, callout, code-example, quick-check, quiz | Basic content page with headings, paragraphs, links, and images. | Can create a valid beginner HTML page and explain the difference between tag, element, and attribute. |
| Semantic HTML | Use HTML elements based on meaning and page structure. | Why semantic HTML matters; `header`; `nav`; `main`; `section`; `article`; `aside`; `footer`; heading hierarchy; common semantic HTML mistakes. | text, callout, code-example, quick-check, quiz | Semantic page structure for an article, documentation page, or simple landing page. | Can choose semantic elements for page regions and keep heading hierarchy clear. |
| Forms and Basic Accessibility | Build basic interactive HTML with accessibility in mind. | Link vs button; `form`; `label`; `input`; `textarea`; `select`; required fields; useful error text; alt text; keyboard navigation basics; basic accessibility checklist. | text, code-example, case study, coding-practice, self-review checklist | Accessible contact or signup form plus a basic accessibility checklist. | Can connect labels to fields, choose link/button semantics correctly, write useful alt text, and check keyboard navigation basics. |

## Difference Between Web Foundations and HTML Foundations

Web Foundations and HTML Foundations should not teach the same thing.

- Web Foundations = understand how the web works and what frontend files are. Learners should know what a website, web page, browser, server, URL, request, response, HTML, CSS, JavaScript, `index.html`, `style.css`, `script.js`, and `assets` folder are.
- HTML Foundations = write page structure correctly and accessibly. Learners should use tags, elements, attributes, content elements, semantic regions, links, buttons, forms, alt text, keyboard basics, and basic accessibility rules.

Use this split when authoring content:

- If the lesson explains the ecosystem or file roles, it belongs in Web Foundations.
- If the lesson asks the learner to write or choose HTML elements, it belongs in HTML Foundations.

## Level 3: CSS Fundamentals and Layout

Goal: Style pages with predictable layout, responsive behavior, and maintainable CSS.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| CSS Core Mechanics | Understand how CSS rules apply. | Selectors; cascade; specificity; inheritance; box model; display basics. | text, callout, code-example, quick-check, quiz | Debug a broken card layout. | Can explain why one CSS rule wins over another and fix spacing bugs. |
| Flexbox and Grid Layout | Build common layouts without fragile hacks. | Flex container/items; alignment; wrapping; Grid columns/rows; gap; layout choice. | text, code-example, quick-check, coding-practice | Responsive navbar and card grid. | Can choose Flexbox or Grid for a layout and implement it cleanly. |
| Responsive Visual System | Make UI adapt across screen sizes. | Mobile-first CSS; breakpoints; fluid spacing; typography scale; CSS variables; dark mode basics. | text, code-example, coding-practice, self-review checklist | Responsive landing section with dark mode tokens. | Can build a mobile-safe layout with consistent spacing and readable typography. |

## Level 4: JavaScript Fundamentals

Goal: Add basic interaction and data handling to web pages.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Values, Types, and Functions | Use JavaScript building blocks safely. | Values; primitive types; variables; expressions; functions; conditionals; loops. | text, code-example, quick-check, quiz | Small calculator or formatter functions. | Can write small functions and predict simple output. |
| Arrays, Objects, and Data Modeling | Represent UI data in JavaScript. | Arrays; objects; iteration; filtering; mapping; nested data; simple data transformation. | text, code-example, coding-practice, quiz | Render a list from data. | Can transform an array of objects into UI-friendly data. |
| DOM, Events, Forms, localStorage, and Fetch Basics | Connect JavaScript to browser behavior. | DOM selection; events; event bubbling; forms; localStorage; fetch basics; JSON. | text, callout, code-example, coding-practice | Interactive form that saves local data and fetches sample data. | Can handle events, prevent default form behavior, save to localStorage, and read JSON from `fetch`. |

## Level 5: JavaScript Advanced

Goal: Handle async behavior, modules, browser APIs, and debugging with more confidence.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Scope, Closure, and Modules | Understand how JavaScript code is organized and remembered. | Scope; lexical environment; closure; ES modules; import/export; module boundaries. | text, code-example, quick-check, quiz | Refactor script files into modules. | Can explain closure in a practical UI example and split code into modules. |
| Async JavaScript and Error Handling | Work with asynchronous flows safely. | Promises; `async` / `await`; `try` / `catch`; loading state; failed request; retry basics. | text, callout, code-example, coding-practice | Fetch data with loading and error UI. | Can handle success, loading, empty, and error states for a request. |
| Browser APIs, Data Transformation, and Debugging | Use browser tools and APIs to solve real bugs. | URL APIs; timers; clipboard/storage basics; network debugging; breakpoints; console strategy. | text, case study, coding-practice, self-review checklist | Debug and fix a broken data-driven widget. | Can inspect a bug, isolate the cause, and explain the fix. |

## Level 6: TypeScript

Goal: Use TypeScript to make frontend code safer without overcomplicating it.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| TypeScript Core Types | Model common values and function contracts. | `type`; `interface`; primitives; arrays; objects; optional fields; function types. | text, code-example, quick-check, quiz | Type a small data model and helper functions. | Can define basic types and understand type errors. |
| Practical Type Design | Use TypeScript features for real UI states. | Union types; narrowing; discriminated unions; generics; utility types; strict mode. | text, callout, code-example, coding-practice | Model loading/success/error states with a union. | Can use narrowing instead of unsafe casts for common UI state. |
| Typed Frontend Boundaries | Type API responses, components, and hooks. | Typed API responses; typed props; typed custom hooks; practical generics; avoiding type noise. | text, code-example, case study, coding-practice | Typed fetch helper and typed component props. | Can type external data and keep component APIs readable. |

## Level 7: React Fundamentals

Goal: Build interactive UI with components, props, and state.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Component Model | Understand React components as UI building blocks. | JSX; components; props; children; rendering; component naming. | text, code-example, quick-check, quiz | Build a reusable card and button set. | Can split a UI into components with clear props. |
| State, Events, and Rendering | Make UI respond to user interaction. | `useState`; events; conditional rendering; lists and keys; derived display. | text, code-example, coding-practice, quick-check | Interactive task list or filterable list. | Can update state without mutating data and render lists safely. |
| Forms and Composition | Build forms and compose UI from smaller parts. | Controlled inputs; uncontrolled inputs; form submit; component composition; lifting state when needed. | text, callout, coding-practice, quiz | Controlled signup or settings form. | Can choose controlled inputs when needed and avoid unnecessary prop drilling in small UIs. |

## Level 8: React Intermediate

Goal: Organize behavior, state, and reusable patterns in medium-sized React features.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Custom Hooks and Effects | Extract reusable behavior carefully. | `useEffect`; cleanup; dependency arrays; custom hooks; browser subscriptions. | text, callout, code-example, coding-practice | Custom hook for localStorage or media query. | Can explain when an effect is needed and avoid derived-state effects. |
| State Strategy | Keep state close to where it is used. | State colocation; derived state; reducer pattern; context; avoiding global state too early. | text, case study, quick-check, coding-practice | Multi-step form or settings panel. | Can choose local state, reducer, or context based on the problem. |
| Reusable UI States | Build consistent loading, error, and empty states. | Loading state; error state; empty state; retry; skeletons; reusable patterns. | text, code-example, coding-practice, self-review checklist | Data list with loading/error/empty/success states. | Can design UI states that do not mislead users. |

## Level 9: React Advanced

Goal: Build resilient React patterns without over-abstraction.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Resilience and Suspense Basics | Handle UI failure and async boundaries. | Error boundaries; suspense basics; fallback UI; retry patterns; user-safe failure states. | text, case study, coding-practice, quiz | Feature area with error boundary and fallback UI. | Can isolate failure without crashing the whole page. |
| Performance Awareness | Optimize only when there is a real reason. | Render cost; memoization when useful; `useMemo`; `useCallback`; expensive lists; profiling basics. | text, callout, case study, coding-practice | Optimize a slow list after measuring. | Can explain when memoization helps and when it adds noise. |
| Advanced Component Patterns | Build flexible components with clear APIs. | Compound components; reusable form patterns; slots/children; design system integration; avoiding over-abstraction. | text, code-example, project work, self-review checklist | Reusable tabs, modal, or form field pattern. | Can design a component API that is flexible but understandable. |

## Level 10: Next.js App Router

Goal: Build app-level routes and layouts with the App Router.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| App Directory and Routing | Understand route structure and nested UI. | `app` directory; page; layout; nested routes; dynamic routes; route groups. | text, code-example, quick-check, coding-practice | Small multi-route learning app shell. | Can create nested and dynamic routes without hardcoding every page. |
| Server Components and Client Components | Choose the right component boundary. | Server Components; Client Components; props across boundary; interactive islands; common mistakes. | text, callout, case study, quiz | Refactor a route to reduce unnecessary client code. | Can explain why a component needs or does not need `"use client"`. |
| Loading, Error UI, Route Handlers, Metadata, and Env | Add production-minded route behavior. | `loading.tsx`; `error.tsx`; route handlers; metadata; environment variables; deployment basics. | text, code-example, coding-practice, self-review checklist | Route with metadata, loading UI, error UI, and a simple route handler. | Can build a route that handles loading, failure, metadata, and env safely. |

## Level 11: Production Next.js

Goal: Connect a Next.js app to real auth, persistence, and deployment workflows.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Authentication and Session-Aware UI | Add auth without confusing users. | Login/register UX; logout; session-aware nav; protected routes; auth errors. | text, case study, coding-practice, writing-practice | Auth-aware dashboard shell. | Can explain public vs protected routes and show safe session UI. |
| Supabase or Backend Integration | Persist user data with safe boundaries. | Supabase clients; RLS concept; server vs browser access; data persistence; profile rows. | text, code-example, case study, coding-practice | Save user settings or progress-like data. | Can keep Supabase access in service files and avoid exposing secrets. |
| Production Operations | Deploy and debug a production app. | Caching basics; streaming basics; file upload basics; Vercel deployment; production logs; env setup. | text, callout, case study, self-review checklist | Deployed app with deployment checklist and known limitations. | Can debug a failed deployment or missing env variable without guessing. |

## Level 12: Forms, Validation, and Data Fetching

Goal: Build data-heavy product flows with clear validation and server-state thinking.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| React Hook Form and Zod | Build typed form validation. | Form registration; Zod schemas; field errors; submit state; schema reuse. | text, code-example, coding-practice, quiz | Profile or onboarding form with validation. | Can validate inputs and show useful errors without blocking accessibility. |
| Validation UX and Accessible Errors | Make form feedback clear and usable. | Inline errors; summary errors; focus management; disabled state; success state; copy for errors. | text, callout, case study, coding-practice | Accessible multi-field form. | Can show errors that screen readers and keyboard users can understand. |
| Server-State Thinking | Fetch, cache, and update remote data predictably. | TanStack Query or equivalent mental model; loading/error/empty states; API response mapping; optimistic UI basics. | text, case study, coding-practice, self-review checklist | Editable data list with optimistic update. | Can distinguish server state from client state and avoid duplicate sources of truth. |

## Level 13: Testing

Goal: Test important behavior without testing implementation details.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Unit and Component Testing | Test small logic and UI behavior. | Vitest; React Testing Library; user events; assertions; accessible queries. | text, code-example, coding-practice, quiz | Tests for form validation and a reusable component. | Can test behavior from a user's perspective. |
| Integration and API Mocking | Test connected flows safely. | MSW; mocked API responses; loading/error/success paths; auth-adjacent flows. | text, case study, coding-practice, self-review checklist | Tests for a data-fetching component with API states. | Can test API-driven UI without calling real services. |
| End-to-End Testing Strategy | Cover critical user journeys. | Playwright; route navigation; auth flow basics; what to test and what not to test; flaky test causes. | text, case study, project work, checklist | E2E test for a critical learning or dashboard flow. | Can choose a small set of high-value E2E tests. |

## Level 14: Performance

Goal: Improve user experience by measuring and reducing real performance costs.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Core Web Vitals | Understand what to measure. | LCP; INP; CLS; Lighthouse; field vs lab data; performance budgets. | text, quick-check, case study, quiz | Performance report for one page. | Can identify which metric is failing and what might cause it. |
| Asset and Bundle Optimization | Reduce unnecessary loading cost. | Image optimization; font optimization; bundle awareness; code splitting; dynamic imports. | text, code-example, coding-practice, checklist | Optimize a media-heavy landing section. | Can reduce obvious asset and bundle waste without changing UX. |
| Rendering Cost and Hydration | Choose rendering patterns thoughtfully. | Hydration cost; server vs client rendering decisions; client component boundaries; expensive re-renders. | text, case study, coding-practice | Refactor a route to reduce client-side work. | Can explain performance trade-offs in a Next.js page. |

## Level 15: Accessibility

Goal: Build UI that works for keyboard, screen reader, and low-vision users.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Semantic Review and Keyboard Navigation | Audit the base interaction model. | Semantic HTML review; tab order; focus visibility; skip links; keyboard traps. | text, case study, coding-practice, checklist | Keyboard audit of a page. | Can complete main flows using only keyboard. |
| Accessible Components | Build common components safely. | Modal; dropdown; tabs; select; toast; focus management; ARIA when needed. | text, callout, code-example, coding-practice | Accessible modal or tabs component. | Can explain when ARIA is needed and when semantic HTML is enough. |
| Accessibility Testing and Preferences | Validate accessibility with tools and user settings. | Color contrast; accessible form errors; reduced motion; screen reader basics; testing tools. | text, case study, self-review checklist, quiz | Accessibility checklist for a feature. | Can use tools and manual checks to catch common accessibility issues. |

## Level 16: Frontend Architecture

Goal: Structure frontend code so features stay maintainable as the app grows.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Feature-Based Structure and Boundaries | Organize files by product behavior. | Folder structure; feature folders; shared components; service layer; dependency boundaries. | text, case study, project work, checklist | Refactor a small app into feature-based structure. | Can explain where UI, services, types, and content belong. |
| State and Data Strategy | Avoid unclear ownership of data. | Server state vs client state; URL state; local state; persistence boundaries; error strategy. | text, case study, coding-practice | Architecture note for a dashboard feature. | Can choose where data should live and how errors should flow. |
| Component API and Documentation | Make reusable code understandable. | Component API design; content-driven rendering; prop naming; documentation; examples. | text, code-example, writing-practice, checklist | Document a reusable component with usage examples. | Can design and document components other developers can use. |

## Level 17: Design System

Goal: Build consistent UI primitives and patterns that support product work.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Design Tokens and Variants | Standardize visual decisions. | Tokens; colors; spacing; radius; typography; component variants; button hierarchy. | text, code-example, coding-practice, checklist | Token-based button and card system. | Can use tokens instead of one-off styling. |
| Product Components | Build reusable components for common app needs. | Form components; table components; modal; toast; tabs; select; empty/loading/error states. | text, coding-practice, project work, checklist | Small design system component set. | Can build components with consistent states and accessibility basics. |
| Storybook and Package Basics | Document and validate UI components. | Storybook basics; stories; accessibility checks; package structure basics; changelog thinking. | text, case study, project work, self-review checklist | Storybook section for core components. | Can document component states and catch visual/API regressions early. |

## Level 18: Backend Basics for Frontend Engineers

Goal: Understand enough backend concepts to integrate, debug, and communicate effectively.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| API Fundamentals | Work with common API styles and constraints. | REST API; GraphQL basics; status codes; request/response shape; pagination; webhooks. | text, quick-check, case study, quiz | API integration decision note. | Can read API docs and ask precise integration questions. |
| Auth, Cookies, and Browser Security Boundaries | Understand how auth travels between browser and server. | Auth concepts; cookies; JWT/session; CORS; CSRF; secure cookies. | text, callout, case study, quiz | Auth flow diagram and risk notes. | Can explain common auth storage and request risks. |
| Data and Infrastructure Basics | Understand common persistence and backend tools. | SQL basics; PostgreSQL basics; Prisma or Supabase basics; Redis basics; file upload concepts. | text, case study, coding-practice, checklist | Simple data-backed feature plan. | Can discuss database-backed frontend features with backend engineers. |

## Level 19: Security Basics

Goal: Avoid common frontend security mistakes and understand product-level risk.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Browser Attack Basics | Recognize common frontend attack paths. | XSS; CSRF; CORS risks; input sanitization; dependency vulnerabilities. | text, callout, case study, quiz | Security review of a risky feature. | Can identify common browser-side risks and explain mitigations. |
| Secrets, Tokens, and Permissions | Protect sensitive data and UI boundaries. | Env leakage; token storage; secure cookies; permission UI; auth guard; role-aware UI. | text, case study, coding-practice, checklist | Permission-aware settings page. | Can avoid exposing secrets and design safer permission states. |
| File Upload and Third-Party Risk | Handle untrusted input carefully. | File upload risks; file type/size checks; preview risk; third-party packages; iframe constraints. | text, callout, case study, checklist | File upload risk checklist. | Can list risks before adding upload or third-party features. |

## Level 20: Portfolio and Remote Readiness

Goal: Turn technical skill into visible proof of work and job-ready communication.

| Module | Goal | Lesson idea groups | Required activity types | Practice output | Readiness criteria |
| --- | --- | --- | --- | --- | --- |
| Portfolio Project Tracks | Build projects that show product thinking. | SaaS dashboard; e-commerce or marketplace mini project; design system project; feature scope. | project work, case study, coding-practice, checklist | One deployed portfolio-grade project. | Can explain the problem, users, features, and technical choices. |
| Project Documentation and Demo Prep | Present work clearly. | README writing; deployment checklist; screenshots; demo script; technical decision notes. | writing-practice, project work, self-review checklist | Portfolio README and demo outline. | Can guide someone through the project without live improvisation. |
| Interview and Remote-Work Readiness | Prepare for frontend hiring and remote collaboration. | Case studies; trade-off explanations; PR habits; async updates; interview readiness. | case study, writing-practice, project work, checklist | Interview-ready project case study. | Can answer what was built, why decisions were made, what trade-offs exist, and what would improve next. |

## First Content Batches

These batches should be added to the app after this document. Keep each batch small enough to review and test.

### Batch 1A: Web Foundations zero-to-one

Create:

- Web Foundations module.

Recommended first lessons:

- What is a website and web page?
- How a web page loads.
- Browser, server, URL, request, and response.
- What HTML, CSS, and JavaScript are.
- How HTML, CSS, and JavaScript work together.
- `index.html`, `style.css`, and `script.js`.
- Project structure for a small frontend app.
- Basic DevTools.
- Basic Git/GitHub for saving a project.

Why this comes first:

- It gives absolute beginners the vocabulary they need before writing full pages.
- It separates web ecosystem understanding from HTML authoring.
- It makes later HTML, CSS, and JavaScript lessons feel less abrupt.

### Batch 1B: HTML Foundations

Create:

- HTML and Accessibility Foundations module.

Recommended first lessons:

- Basic HTML document structure.
- Tag, element, and attribute.
- Headings, paragraphs, links, and images.
- Semantic HTML structure.
- Header, nav, main, section, article, aside, and footer.
- Link vs button.
- Forms, labels, and inputs.
- Alt text and keyboard navigation basics.
- Basic HTML accessibility checklist.

Why this comes next:

- Learners already know what HTML is from Web Foundations.
- This batch turns orientation into correct page structure.
- It prepares learners for CSS layout without mixing structure and styling too early.

### Batch 1C: CSS Foundations

Create:

- CSS Fundamentals and Layout module.

Recommended first lessons:

- What CSS does in a web page.
- Selectors and basic declarations.
- Box model.
- Cascade and specificity.
- Flexbox navbar.
- Responsive card grid.
- CSS variables and basic visual tokens.

Why this comes after HTML:

- CSS is easier to understand when learners already have meaningful HTML structure.
- Layout practice becomes more useful when learners can identify page regions.
- It gives learners visible practice without skipping the basics.

### Batch 2: JavaScript + TypeScript Foundations

Create:

- JavaScript Fundamentals module.
- JavaScript Advanced module.
- TypeScript module.

Recommended first lessons:

- Values, variables, and functions.
- Arrays and objects for UI data.
- DOM events and forms.
- localStorage and fetch basics.
- Async JavaScript and error handling.
- TypeScript object types and unions.
- Typed API response basics.

Why this comes next:

- JavaScript enables more realistic UI behavior.
- TypeScript prepares learners for React and Next.js content.
- Fetch and error handling connect directly to real product features.

### Batch 3: React Fundamentals

Create:

- React Fundamentals module.
- React Intermediate starter module.

Recommended first lessons:

- Components and props.
- State and events.
- Conditional rendering.
- Lists and keys.
- Controlled forms.
- Component composition.
- First custom hook.

Why this comes third:

- Learners need HTML, CSS, JavaScript, and basic TypeScript before React becomes useful.
- React lessons can reuse earlier UI projects and turn them into component-based practice.
- This batch prepares the path toward Next.js App Router.

## Content That Should Wait

Wait until foundational modules are stable before creating:

- Production Next.js.
- Supabase-backed project work.
- React Advanced.
- Design system package structure.
- Storybook.
- E2E testing with Playwright.
- Performance and Core Web Vitals deep dives.
- Advanced accessibility components.
- Security modules.
- Portfolio capstone projects.

Reason:

- These topics need enough frontend fluency to avoid overwhelming learners.
- They are better taught with project context.
- They should reuse patterns from earlier content instead of introducing new complexity too early.

## Authoring Notes for Future Content

- Keep lesson explanations short and practical.
- Use Bahasa Indonesia for the main teaching content.
- Keep common technical terms in English when they are standard in frontend work.
- Prefer one main concept per lesson.
- Include at least one active block in most lessons.
- Use writing practice when the frontend task maps to remote-work communication.
- Keep quizzes focused on understanding, not memorization.
- Use project work only after learners have enough small practice pieces to combine.
