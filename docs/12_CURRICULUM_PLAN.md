# FluentStack Curriculum Plan

## Purpose

This document defines the master curriculum direction for FluentStack.

It explains the learning model, track structure, level progression, module strategy, and content expansion order. It is not raw lesson content and should not contain full lesson scripts, quiz questions, or coding challenge implementations.

Use this document before creating or revising:

* Frontend Engineering curriculum details
* English for Tech Careers curriculum details
* module plans
* lesson batches
* Uji Kompetensi
* content authoring workflows

Actual lesson content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when they are natural in frontend work or remote-work communication.

## Product Learning Direction

FluentStack is a guided learning platform for Indonesian learners who want to build practical technology skills.

The first two learning tracks are:

1. Frontend Engineering
2. English for Tech Careers

The long-term goal is not to create a large library of disconnected lessons. The goal is to create a structured learning path where learners understand concepts, practice them, and prove readiness before moving forward.

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

Uji Kompetensi should cover the whole module, not just one lesson.

It should not introduce important new concepts. It should evaluate concepts and skills that were already taught in the regular lessons.

## Module Design Rules

Every module should have a clear learning arc.

Before creating a module, define:

* module goal
* prerequisite knowledge
* regular lesson sequence
* unique role of each lesson
* practice pattern
* Uji Kompetensi coverage
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

## Learner Levels

FluentStack uses four broad learner levels.

### Beginner

The learner is still building vocabulary and basic confidence.

They need:

* simple explanations
* clear examples
* guided practice
* gentle correction
* small wins
* limited jargon

### Intermediate

The learner can build small features and explain basic choices.

They need:

* more realistic practice
* debugging tasks
* small projects
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

### Remote-ready

The learner can work in a professional environment.

They need:

* project communication
* pull request writing
* code review language
* async collaboration
* interview readiness
* portfolio presentation

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

### Frontend Level Map

#### Level 1: Web Foundations

Purpose:

Help absolute beginners understand what they are opening in the browser before writing full HTML pages.

Modules:

1. Web Foundations

Module outcome:

Learner understands website, web page, browser, URL, server, request/response, HTML, CSS, JavaScript, and basic frontend project files.

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

Each module should end with Uji Kompetensi.

#### Level 3: CSS Fundamentals and Layout

Purpose:

Help learners style pages with predictable spacing, layout, responsive behavior, and maintainable visual rules.

Modules:

1. CSS Core Mechanics
2. Box Model and Spacing
3. Flexbox and Grid Layout
4. Responsive Visual System

Module outcomes:

* understand selectors, declarations, cascade, specificity, and inheritance
* control spacing and sizing with box model
* build layouts with Flexbox and Grid
* create responsive sections with consistent spacing and typography

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
* beginner project folder
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

### 7 to 12 months

Focus:

* Flexbox and Grid
* Responsive Visual System
* JavaScript Fundamentals
* English technical explanation

Expected output:

* responsive layouts
* interactive pages
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

* production-style app
* deployed portfolio project
* technical case study
* interview-ready project demo

## Content Expansion Order

Content should expand in complete module slices.

A complete module slice includes:

* regular lessons
* examples
* practice
* Uji Kompetensi
* bridge to the next module
* browser testing

Recommended order:

1. Finish Web Foundations
2. Finish HTML Basics
3. Finish Semantic HTML
4. Build Forms and Basic Accessibility
5. Build CSS Core Mechanics
6. Build Box Model and Spacing
7. Build Flexbox and Grid Layout
8. Build Responsive Visual System
9. Build JavaScript Fundamentals
10. Build English modules that support the current frontend stage

Do not add the next module before the current module feels coherent and has been tested in the browser.

## Content That Should Wait

Wait before creating:

* Production Next.js
* Supabase-backed project work
* React Advanced
* Design system package structure
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
Uji Kompetensi assesses.
Quality matters more than lesson quantity.
```
