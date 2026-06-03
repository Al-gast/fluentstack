# FluentStack Curriculum Plan

## Purpose

This document defines the master curriculum direction for FluentStack.

It explains the learning model, track structure, level progression, module strategy, practice strategy, documentation strategy, and content expansion order.

This document is not raw lesson content. Do not put full lesson scripts, full quiz question lists, or full coding challenge implementations here.

Use this document before creating or revising:

* Frontend Engineering curriculum details
* English for Tech Careers curriculum details
* module plans
* lesson batches
* Uji Kompetensi
* local development milestones
* documentation bridge tasks
* content authoring workflows

Actual lesson content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when they are natural in frontend work or remote-work communication.

## Product Learning Direction

FluentStack is a guided learning platform for Indonesian learners who want to build practical technology skills.

The first two learning tracks are:

1. Frontend Engineering
2. English for Tech Careers

The long-term goal is not to create a large library of disconnected lessons. The goal is to create a structured learning path where learners understand concepts, practice them, read relevant official documentation, and prove readiness before moving forward.

FluentStack should feel like a calm, practical, and interactive learning product.

## Core Teaching Model

FluentStack uses a module-level learning model.

The default flow is:

```txt
Track
→ Level
→ Module
→ Regular lessons
→ Uji Kompetensi
→ Next module
```

Regular lessons are for learning.

Uji Kompetensi is for checking readiness.

This keeps the experience focused and prevents learners from feeling tested after every small explanation.

## Regular Lesson

A regular lesson teaches one clear concept or skill.

A regular lesson should usually include:

* learning goal
* path context
* core explanation
* important terms
* small example
* how to read or use the example
* common mistake or decision rule
* quick check
* coding practice, writing practice, or mini action when useful
* actionable summary
* bridge to the next lesson

Regular beginner lessons should not include a quiz by default.

A quiz inside a regular lesson is allowed only when it adds clear learning value and does not make the lesson feel test-heavy.

For beginner content, the lesson should assume the learner starts from zero. Introduce terms before using them heavily.

## Uji Kompetensi

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
* readiness summary
* documentation bridge
* bridge to the next module

Uji Kompetensi should cover the whole module, not just one lesson.

It should not introduce important new concepts. It should evaluate concepts and skills that were already taught in the regular lessons.

## Browser Practice and Local Dev Milestone Model

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

### Recommended Local Milestone Points

Use local milestones after learners have enough concepts to combine.

Recommended points:

1. After HTML, Forms, and early CSS:

   * Local Static Website Project

2. After JavaScript DOM, events, localStorage, and fetch basics:

   * Local Vanilla JavaScript App

3. Before or during TypeScript:

   * Local Tooling and npm Basics

4. After React Fundamentals:

   * Local React App

5. After Next.js App Router:

   * Local Next.js App

6. During Production Next.js:

   * Local Next.js App + Deploy to Vercel

7. During Portfolio and Remote Readiness:

   * Portfolio Capstone Project

## Documentation Bridge Model

FluentStack should teach learners how to learn from official documentation.

FluentStack should not replace official documentation. It should make documentation easier to approach.

The model is:

```txt
FluentStack teaches the guided path.
Official documentation is the source of truth.
Local projects teach learners how to use docs like engineers.
```

### When to Use Documentation Bridge

Use documentation bridges at:

* the end of a module
* Uji Kompetensi
* local development milestones
* advanced lessons where official docs are part of real workflow
* project work
* debugging or deployment tasks

Do not overload every small regular lesson with many links.

For beginners, documentation bridge should be guided and specific.

A good documentation bridge tells the learner:

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

### Preferred Documentation Sources

Use official or widely trusted sources.

Preferred sources:

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

Every module should have a clear learning arc.

Before creating a module, define:

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

Do not create two lessons that explain the same concept in different words.

If two lessons overlap:

* merge the repeated explanation
* convert one into guided practice
* convert one into common mistakes or case study
* convert one into reinforcement
* move the check into Uji Kompetensi
* remove it from active module order if it does not add value

Prefer fewer mature lessons over many shallow lessons.

## Activity Strategy

Use activity types intentionally.

### Quick Check

Use quick checks inside regular lessons.

Purpose:

* confirm one concept
* catch one common mistake
* prepare the learner for practice

A quick check should feel light. It should not feel like an exam.

### Quiz

Use quizzes mainly inside Uji Kompetensi.

Purpose:

* check understanding across the whole module
* test practical decisions
* reveal misconceptions
* prepare the learner for the next module

A regular lesson may include a quiz only when the concept has several important misunderstandings and the quiz adds learning value.

### Coding Practice

Use coding practice when learners need to build, edit, refactor, or inspect code.

For beginner coding lessons:

* explain the concept first
* introduce terms before practice
* show a small example
* explain how to read the example
* then let the learner practice

For deterministic tasks, prefer simple rule-based auto checks.

Manual checklist is still useful for subjective review, project quality, or self-review tasks.

### Writing Practice

Use writing practice when the learner needs to communicate work.

Examples:

* daily update
* blocker explanation
* bug report
* pull request note
* implementation note
* code review comment
* project demo script
* interview answer

English for Tech Careers should use bilingual teaching:

* Indonesian explanation
* practical English examples
* Indonesian meaning or context when useful
* learner-written English response

### Project Work

Use project work after learners have enough small skills to combine.

Project work should not appear too early. It should be used when the learner can already understand the parts they are combining.

### Documentation Reading

Use documentation reading as a guided learning activity, not as a vague instruction.

Documentation reading should have:

* source
* section
* focus points
* ignore-for-now notes
* follow-up action

### Local Project Work

Use local project work when the learner should practice real engineering workflow.

Local project work should have:

* setup steps
* expected folder structure
* run command or open-in-browser instruction
* Git/GitHub step when relevant
* debugging guidance
* documentation references
* completion checklist

## Curriculum Stages

FluentStack uses three curriculum stages for Frontend Engineering:

* `beginner`: vocabulary, confidence, guided practice, and safe foundations.
* `intermediate`: realistic feature work, debugging, local workflow, and trade-off discussion.
* `advanced`: production constraints, architecture, testing, performance, accessibility depth, and portfolio readiness.

Stages guide content depth, copywriting tone, practice difficulty, Documentation Bridge expectations, and learner readiness language. They do not activate future curriculum by themselves.

Current active implementation is through Level 3, and all active levels are `beginner`. Level 4 and beyond remain planned until implemented in active content.

Recommended Frontend Engineering stage mapping:

* Beginner: Level 1 Web Foundations, Level 2 HTML and Accessibility Foundations, Level 3 CSS Fundamentals and Layout, Level 4 JavaScript Fundamentals.
* Intermediate: Level 5 JavaScript Advanced, Level 6 TypeScript, Level 7 React Fundamentals, Level 8 React Intermediate, Level 9 React Advanced, Level 10 Next.js App Router.
* Advanced: Level 11 Production Next.js, Level 12 Forms, Validation, and Data Fetching, Level 13 Testing, Level 14 Performance, Level 15 Accessibility, Level 16 Frontend Architecture, Level 17 Design System, Level 18 Backend Basics for Frontend Engineers, Level 19 Security Basics, Level 20 Portfolio and Remote Readiness.

## Learner Maturity Notes

These notes explain how stages should feel for learners.

### Beginner

The learner is still building vocabulary and basic confidence.

They need:

* simple explanations
* clear examples
* guided practice
* gentle correction
* small wins
* limited jargon
* browser-first practice
* no heavy local setup too early

### Intermediate

The learner can build small features and explain basic choices.

They need:

* more realistic practice
* debugging tasks
* small local projects
* official docs habits
* trade-off discussion
* clearer quality standards

### Advanced

The learner can build larger features and reason about maintainability.

They need:

* architecture decisions
* performance awareness
* accessibility depth
* testing strategy
* production constraints
* local workflows
* official docs fluency

### Remote-ready

The learner can work in a professional environment.

They need:

* project communication
* pull request writing
* code review language
* async collaboration
* interview readiness
* portfolio presentation
* documentation-backed decision making

## Track 1: Frontend Engineering

### Track Goal

Learners become capable of building accessible, responsive, maintainable frontend applications and explaining their implementation decisions.

The Frontend Engineering track should move from basic web understanding to production frontend work.

### Track Outcomes

A learner who completes the track should be able to:

* explain how websites and web pages work
* write correct HTML structure
* build accessible forms and basic page regions
* style responsive layouts with CSS
* add interactivity with JavaScript
* use TypeScript for safer frontend code
* build UI with React
* build application routes with Next.js
* connect frontend features to APIs, auth, and persistence
* test and debug frontend behavior
* optimize performance
* apply accessibility principles
* structure frontend code for maintainability
* build portfolio-ready projects
* explain technical decisions clearly
* use official documentation as part of normal development
* run projects locally when a real workflow requires it

### Frontend Level Map

#### Level 1: Web Foundations

Purpose:

Help absolute beginners understand what they are opening in the browser before writing full HTML pages.

Modules:

1. Web Foundations

Module outcome:

Learner understands website, web page, browser, URL, server, request/response, HTML, CSS, JavaScript, and basic frontend project files.

Practice model:

* Built-in quick checks
* Mini observations
* No required local setup yet

Documentation bridge:

* Optional beginner-safe MDN links only after orientation
* Do not send learners into broad docs too early

Uji Kompetensi should check:

* website vs web page
* URL and path
* simple browser request/response flow
* HTML/CSS/JavaScript roles
* `index.html`, `style.css`, `script.js`
* basic project folder structure

#### Level 2: HTML and Accessibility Foundations

Purpose:

Help learners write meaningful HTML structure and begin thinking about accessibility.

Modules:

1. HTML Basics
2. Semantic HTML
3. Forms and Basic Accessibility

HTML Basics outcome:

Learner can write a beginner HTML page with correct document structure, headings, paragraphs, links, images, attributes, and simple relative paths.

Semantic HTML outcome:

Learner can structure a page using semantic regions and explain why each element fits the content.

Forms and Basic Accessibility outcome:

Learner can build basic forms, connect labels to fields, choose link vs button correctly, write useful alt text, and run basic keyboard/accessibility checks.

Practice model:

* Built-in HTML coding practice
* Rule-based auto validation when deterministic
* Self-review checklist for accessibility habits

Documentation bridge:

* MDN HTML basics
* MDN links and images
* MDN forms
* MDN accessibility basics
* Guided sections only, not broad docs dumping

Local milestone:

* No heavy local setup during early HTML lessons
* Prepare for Local Static Website Project after learners have HTML, forms, and early CSS skills

Each module should end with Uji Kompetensi.

#### Level 3: CSS Fundamentals and Layout

Purpose:

Help learners style pages with predictable spacing, layout, responsive behavior, and maintainable visual rules.

Modules:

1. CSS Core Mechanics
2. Box Model and Spacing
3. Flexbox and Grid Layout
4. Responsive Visual System

This level is implemented through the active modules above, plus the local static website milestone that now sits alongside the CSS path.

Module outcomes:

* understand selectors, declarations, cascade, specificity, and inheritance
* control spacing and sizing with box model
* build layouts with Flexbox and Grid
* create responsive sections with consistent spacing and typography

Practice model:

* Built-in CSS editor practice
* Visual preview
* Rule-based checks where practical
* Debugging tasks for broken styles

Documentation bridge:

* MDN CSS basics
* MDN selectors
* MDN cascade and specificity
* MDN box model
* MDN Flexbox
* MDN Grid
* MDN media queries

Local milestone:

* After early HTML, forms, and CSS basics:

  * Local Static Website Project

Each module should include coding practice and Uji Kompetensi.

#### Level 4: JavaScript Fundamentals

Purpose:

Help learners add basic interaction and data behavior to pages.

Modules:

1. Values, Types, and Functions
2. Arrays, Objects, and Data Modeling
3. DOM, Events, Forms, localStorage, and Fetch Basics

Module outcomes:

* write small JavaScript functions
* model UI data with arrays and objects
* respond to browser events
* handle forms
* save simple data in localStorage
* fetch and display basic JSON data

Practice model:

* Built-in JavaScript practice for small concepts
* Preview-based DOM practice
* Console/debugging tasks
* Uji Kompetensi coding tasks

Documentation bridge:

* MDN JavaScript basics
* MDN arrays and objects
* MDN DOM
* MDN events
* MDN localStorage
* MDN fetch
* MDN JSON

Local milestone:

* After DOM, events, localStorage, and fetch:

  * Local Vanilla JavaScript App

Each module should include coding practice and Uji Kompetensi.

#### Level 5: JavaScript Advanced

Purpose:

Help learners handle async behavior, modules, browser APIs, and debugging.

Modules:

1. Scope, Closure, and Modules
2. Async JavaScript and Error Handling
3. Browser APIs, Data Transformation, and Debugging

Module outcomes:

* organize JavaScript into modules
* understand closure through practical UI examples
* use promises and async/await
* handle loading, error, empty, and success states
* debug with browser tools

Practice model:

* Built-in focused JS tasks
* Debugging case studies
* Local project reinforcement when useful

Documentation bridge:

* MDN closures
* MDN modules
* MDN promises
* MDN async functions
* MDN browser APIs
* MDN DevTools references when useful

#### Level 6: TypeScript

Purpose:

Help learners use TypeScript to make frontend code safer without overcomplicating it.

Modules:

1. TypeScript Core Types
2. Practical Type Design
3. Typed Frontend Boundaries

Module outcomes:

* define basic types and interfaces
* use unions and narrowing
* model UI states
* type API responses
* write readable typed components and hooks

Practice model:

* Built-in type editing tasks
* Error-reading practice
* Small typed helper functions
* Local tooling milestone before or during this level if not introduced earlier

Documentation bridge:

* TypeScript official handbook
* TypeScript everyday types
* TypeScript narrowing
* TypeScript generics
* TypeScript utility types

Local milestone:

* Local Tooling and npm Basics

#### Level 7: React Fundamentals

Purpose:

Help learners build interactive UI with components, props, state, and forms.

Modules:

1. Component Model
2. State, Events, and Rendering
3. Forms and Composition

Module outcomes:

* split UI into components
* pass props
* manage state
* render lists
* handle forms
* compose reusable UI

Practice model:

* Built-in React component practice if supported by the app
* Focused component/state tasks
* Uji Kompetensi for each module
* Local project after core React basics

Documentation bridge:

* React Learn: Your First Component
* React Learn: Passing Props
* React Learn: State
* React Learn: Rendering Lists
* React Learn: Responding to Events
* React Learn: Sharing State Between Components

Local milestone:

* Local React App after React Fundamentals

#### Level 8: React Intermediate

Purpose:

Help learners organize behavior and state in medium-sized React features.

Modules:

1. Custom Hooks and Effects
2. State Strategy
3. Reusable UI States

Module outcomes:

* use effects correctly
* extract custom hooks
* choose local state, reducer, or context
* build loading, error, empty, and success states

Practice model:

* Built-in focused React tasks
* Local React project feature upgrades
* Case studies for state decisions

Documentation bridge:

* React Effects
* React custom hooks
* React state structure
* React context
* React performance guidance when relevant

#### Level 9: React Advanced

Purpose:

Help learners build resilient React patterns without over-abstraction.

Modules:

1. Resilience and Suspense Basics
2. Performance Awareness
3. Advanced Component Patterns

Module outcomes:

* isolate UI failure
* understand suspense basics
* measure before optimizing
* design flexible component APIs

Practice model:

* Built-in small experiments
* Local project refactors
* Case studies and architecture notes

Documentation bridge:

* React error boundaries references
* React Suspense references
* React performance references
* Official docs first, articles only when carefully selected later

#### Level 10: Next.js App Router

Purpose:

Help learners build app-level routes and layouts with Next.js App Router.

Modules:

1. App Directory and Routing
2. Server Components and Client Components
3. Loading, Error UI, Route Handlers, Metadata, and Env

Module outcomes:

* create nested routes and layouts
* choose Server or Client Components
* handle loading and error UI
* use route handlers
* manage metadata and environment variables

Practice model:

* Built-in route/component examples when possible
* Local Next.js project for full workflow
* Uji Kompetensi for routing and boundaries

Documentation bridge:

* Next.js docs: App Router
* Next.js docs: Routing
* Next.js docs: Server and Client Components
* Next.js docs: Route Handlers
* Next.js docs: Metadata
* Learn Next.js when useful

Local milestone:

* Local Next.js App

#### Level 11: Production Next.js

Purpose:

Help learners connect a Next.js app to auth, persistence, and deployment workflows.

Modules:

1. Authentication and Session-Aware UI
2. Supabase or Backend Integration
3. Production Operations

Module outcomes:

* build login/register/logout flows
* show session-aware UI
* persist data safely
* understand RLS at a high level
* deploy and debug production issues

Practice model:

* Local Next.js app
* Supabase project setup
* Deployment checklist
* Production debugging tasks

Documentation bridge:

* Supabase auth docs
* Supabase RLS docs
* Next.js deployment docs
* Vercel docs
* Environment variable docs

Local milestone:

* Local Next.js App + Deploy to Vercel

#### Level 12: Forms, Validation, and Data Fetching

Purpose:

Help learners build data-heavy product flows with useful validation and server-state thinking.

Modules:

1. React Hook Form and Zod
2. Validation UX and Accessible Errors
3. Server-State Thinking

Module outcomes:

* validate forms
* show accessible errors
* handle loading/error/empty states
* map API responses
* understand optimistic UI basics

Practice model:

* Built-in form validation tasks
* Local app feature integration
* Case studies for error states

Documentation bridge:

* React Hook Form docs
* Zod docs
* TanStack Query docs if used
* MDN form accessibility references
* React docs for forms

#### Level 13: Testing

Purpose:

Help learners test important behavior without testing implementation details.

Modules:

1. Unit and Component Testing
2. Integration and API Mocking
3. End-to-End Testing Strategy

Module outcomes:

* test UI behavior
* use mocks for API states
* choose high-value E2E flows
* avoid fragile tests

Practice model:

* Built-in conceptual tasks when possible
* Local testing setup for real test runs
* Test writing in local project

Documentation bridge:

* Vitest docs
* Testing Library docs
* MSW docs
* Playwright docs

#### Level 14: Performance

Purpose:

Help learners improve user experience by measuring and reducing real performance costs.

Modules:

1. Core Web Vitals
2. Asset and Bundle Optimization
3. Rendering Cost and Hydration

Module outcomes:

* understand LCP, INP, and CLS
* optimize images and fonts
* reason about bundle cost
* reduce unnecessary client-side work

Practice model:

* Built-in case studies
* Local measurement tasks
* Lighthouse or Vercel/Chrome tooling when relevant

Documentation bridge:

* web.dev Core Web Vitals
* Chrome DevTools performance docs
* Next.js performance docs
* Vercel analytics docs when relevant

#### Level 15: Accessibility

Purpose:

Help learners build UI that works for keyboard, screen reader, and low-vision users.

Modules:

1. Semantic Review and Keyboard Navigation
2. Accessible Components
3. Accessibility Testing and Preferences

Module outcomes:

* audit keyboard navigation
* manage focus
* use ARIA only when needed
* test contrast and reduced motion
* build safer modal, tabs, and dropdown patterns

Practice model:

* Built-in accessibility checklists
* Local audits on project pages
* Keyboard and screen reader observation tasks

Documentation bridge:

* MDN accessibility
* WAI tutorials
* WCAG quick references
* ARIA Authoring Practices when appropriate

#### Level 16: Frontend Architecture

Purpose:

Help learners structure frontend code so features stay maintainable as the app grows.

Modules:

1. Feature-Based Structure and Boundaries
2. State and Data Strategy
3. Component API and Documentation

Module outcomes:

* organize features
* define dependency boundaries
* separate UI, services, types, and content
* document reusable components

Practice model:

* Local project refactors
* Architecture notes
* Code organization case studies

Documentation bridge:

* Official framework docs first
* Project documentation examples
* Team conventions when available

#### Level 17: Design System

Purpose:

Help learners build consistent UI primitives and product components.

Modules:

1. Design Tokens and Variants
2. Product Components
3. Storybook and Package Basics

Module outcomes:

* use design tokens
* build component variants
* document component states
* create reusable UI patterns

Practice model:

* Built-in component state tasks
* Local design system project
* Storybook documentation work

Documentation bridge:

* Storybook docs
* WAI component guidance
* React docs for component composition
* CSS docs for tokens/custom properties

#### Level 18: Backend Basics for Frontend Engineers

Purpose:

Help frontend learners integrate and communicate better with backend systems.

Modules:

1. API Fundamentals
2. Auth, Cookies, and Browser Security Boundaries
3. Data and Infrastructure Basics

Module outcomes:

* read API docs
* understand status codes and request/response shapes
* discuss auth and cookies
* understand SQL/PostgreSQL basics
* reason about file uploads and webhooks

Practice model:

* Case studies
* API integration practice
* Local app integration tasks

Documentation bridge:

* MDN HTTP docs
* Supabase docs
* PostgreSQL docs when appropriate
* API provider docs in examples

#### Level 19: Security Basics

Purpose:

Help learners avoid common frontend security mistakes.

Modules:

1. Browser Attack Basics
2. Secrets, Tokens, and Permissions
3. File Upload and Third-Party Risk

Module outcomes:

* recognize XSS, CSRF, and CORS risks
* avoid exposing secrets
* handle tokens and permissions carefully
* think through file upload risks

Practice model:

* Case studies
* Risk review checklists
* Local project security review

Documentation bridge:

* OWASP references when appropriate
* MDN security references
* Supabase security docs
* Next.js security guidance when relevant

#### Level 20: Portfolio and Remote Readiness

Purpose:

Help learners turn technical skills into visible proof of work and professional communication.

Modules:

1. Portfolio Project Tracks
2. Project Documentation and Demo Prep
3. Interview and Remote-Work Readiness

Module outcomes:

* build portfolio-grade projects
* write README and technical decision notes
* prepare demo scripts
* explain trade-offs in interviews
* communicate clearly in remote work

Practice model:

* Local portfolio project
* Writing practice
* Demo scripts
* Interview practice

Documentation bridge:

* Official docs for the stack used in the project
* Deployment docs
* README and project documentation references

Local milestone:

* Portfolio Capstone Project

## Track 2: English for Tech Careers

### Track Goal

Learners become able to work remotely in tech using clear, practical English.

Fluency in FluentStack does not mean native-speaker perfection. It means the learner can communicate technical work clearly and confidently.

### Track Outcomes

A learner who completes the track should be able to:

* write daily updates
* explain blockers
* ask clarification
* write bug reports
* write pull request notes
* respond to code review comments
* explain technical decisions
* present portfolio projects
* answer interview questions
* communicate asynchronously in remote teams
* read relevant official documentation more confidently

### English Learning Model

English lessons should be bilingual.

A regular English lesson should include:

* work situation
* useful phrase pattern
* example message
* tone explanation in Bahasa Indonesia
* quick check
* writing practice
* summary and bridge

English Uji Kompetensi should check whether the learner can write or explain a realistic work artifact.

English lessons can include documentation reading when the task involves understanding docs, errors, PR notes, issue reports, or technical explanations.

### English Level Map

#### Level 1: English Foundations for Tech

Purpose:

Help learners build basic sentence confidence for work-related communication.

Modules:

1. Basic Work Sentences
2. Developer Vocabulary
3. Reading Simple Docs and Errors

Uji Kompetensi should check:

* simple present/past/future work sentences
* common developer verbs and nouns
* short documentation/error interpretation

#### Level 2: Daily Remote Communication

Purpose:

Help learners communicate daily work clearly.

Modules:

1. Daily Updates
2. Clarification and Confirmation
3. Asking for Help and Explaining Delays

Uji Kompetensi should check:

* yesterday/today/blockers update
* asking one specific clarification question
* explaining a delay without sounding vague

#### Level 3: Developer Writing

Purpose:

Help learners write common developer work artifacts.

Modules:

1. Bug Reports and Issues
2. Pull Request Notes
3. Commit Messages, Changelog, and README Basics

Uji Kompetensi should check:

* clear bug report
* useful PR description
* concise implementation note

#### Level 4: Meeting and Speaking Basics

Purpose:

Help learners prepare short speaking scripts for meetings and calls.

Modules:

1. Self-Introduction
2. Standup Speaking
3. Explaining Progress and Next Steps

Uji Kompetensi should check:

* short introduction
* standup answer
* simple progress explanation

#### Level 5: Code Review and Collaboration

Purpose:

Help learners communicate during review and collaboration.

Modules:

1. Asking for Review
2. Responding to Review Comments
3. Suggesting and Disagreeing Politely

Uji Kompetensi should check:

* review request
* polite response to feedback
* clear suggestion with reason

#### Level 6: Technical Explanation

Purpose:

Help learners explain frontend decisions clearly.

Modules:

1. Explaining Features and Bugs
2. Explaining API and State Issues
3. Explaining Trade-offs and Delays

Uji Kompetensi should check:

* feature explanation
* blocker explanation
* trade-off explanation

#### Level 7: Interview English

Purpose:

Help learners answer frontend and behavioral interview questions.

Modules:

1. Tell Me About Yourself
2. Explaining Experience and Projects
3. Behavioral and Practical Interview Answers

Uji Kompetensi should check:

* self-introduction
* portfolio project explanation
* behavioral answer using a clear structure

#### Level 8: Portfolio and Demo English

Purpose:

Help learners present projects in English.

Modules:

1. Project Summary
2. Feature Walkthrough
3. Demo Script and README Copy

Uji Kompetensi should check:

* project summary
* feature demo script
* README section

#### Level 9: Advanced Remote Communication

Purpose:

Help learners handle higher-stakes async communication.

Modules:

1. Scope and Estimation
2. Stakeholder Updates
3. Incident, Migration, and Handoff Notes

Uji Kompetensi should check:

* scope negotiation note
* risk update
* handoff message

#### Level 10: Fluency Maintenance

Purpose:

Help learners keep improving after completing the main track.

Modules:

1. Weekly Writing Routine
2. Documentation Reading Habit
3. Portfolio and Interview Refresh

Uji Kompetensi should check:

* weekly writing sample
* article summary
* updated project explanation

## Relationship Between Frontend and English Tracks

Frontend and English should support each other.

Examples:

```txt
Frontend:
Build login form

English:
Write a pull request note explaining validation and edge cases.
```

```txt
Frontend:
Handle API errors

English:
Explain a blocker caused by an unexpected API response.
```

```txt
Frontend:
Accessibility audit

English:
Write a code review comment about keyboard navigation.
```

```txt
Frontend:
Portfolio project

English:
Present the project in English.
```

```txt
Frontend:
Read official React docs about props

English:
Summarize the concept in a short implementation note.
```

The tracks should not feel separate. English lessons should use realistic situations from frontend work whenever possible.

## Learning Timeline

The timeline is flexible. Learners may move faster or slower depending on time, background, and consistency.

### 0 to 3 months

Focus:

* Web Foundations
* HTML Basics
* Semantic HTML
* early English foundations
* daily update writing

Expected output:

* simple HTML pages
* beginner project folder understanding
* basic English work sentences

### 4 to 6 months

Focus:

* Forms and Basic Accessibility
* CSS Core Mechanics
* Box Model and Spacing
* Daily Remote Communication
* Developer Writing

Expected output:

* accessible form
* styled page sections
* bug report
* PR note
* first local static website project

### 7 to 12 months

Focus:

* Flexbox and Grid
* Responsive Visual System
* JavaScript Fundamentals
* English technical explanation

Expected output:

* responsive layouts
* interactive pages
* Local Vanilla JavaScript App
* clear blocker explanations
* small frontend project

### 13 to 18 months

Focus:

* JavaScript Advanced
* TypeScript
* React Fundamentals
* interview English
* portfolio communication

Expected output:

* typed UI data
* React components
* Local React App
* interactive feature
* project explanation

### 18 to 30 months

Focus:

* React Intermediate and Advanced
* Next.js App Router
* Production Next.js
* Testing
* Performance
* Accessibility
* Architecture
* Portfolio and Remote Readiness

Expected output:

* Local Next.js App
* deployed portfolio project
* technical case study
* interview-ready project demo

## Content Expansion Order

Content should expand in complete module slices.

A complete module slice includes:

* regular lessons
* examples
* built-in practice
* documentation bridge
* Uji Kompetensi
* bridge to the next module
* browser testing

Current active frontend module slices:

1. Web Foundations
2. HTML Basics
3. Semantic HTML
4. Forms and Basic Accessibility
5. CSS Core Mechanics
6. Box Model and Spacing
7. Local Static Website Project
8. Flexbox and Grid Layout
9. Responsive Visual System

Recommended next expansion order:

1. Build JavaScript Fundamentals
2. Add Local Vanilla JavaScript App
3. Build English modules that support the current frontend stage
4. Add Local Tooling and npm Basics before React/TypeScript needs it
5. Build React Fundamentals
6. Add Local React App
7. Build Next.js App Router
8. Add Local Next.js App
9. Build Production Next.js and deployment milestones

Do not add the next module before the current module feels coherent and has been tested in the browser.

## Content That Should Wait

Wait before creating:

* Production Next.js
* Supabase-backed project work
* React Advanced
* design system package structure
* Storybook
* E2E testing
* advanced performance
* advanced accessibility components
* security modules
* portfolio capstone projects

These topics need stronger foundations and project context.

## Next Curriculum Work

Future detailed curriculum documents should follow this master plan:

* `docs/20_FRONTEND_CURRICULUM_DETAIL.md`
* `docs/21_ENGLISH_CURRICULUM_DETAIL.md`
* `docs/22_CONTENT_AUTHORING_GUIDE.md`
* `docs/23_LESSON_FORMAT_STANDARD.md`
* `docs/24_LESSON_QUALITY_RUBRIC.md`

When updating detailed curriculum documents, keep the same core model:

```txt
Regular lessons teach.
Built-in practice reinforces focused concepts.
Documentation bridge builds independence.
Local Dev Milestone teaches real workflow.
Uji Kompetensi assesses.
Quality matters more than lesson quantity.
```
