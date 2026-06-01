# Frontend Engineering Curriculum Detail

## Purpose

This document defines the detailed Frontend Engineering curriculum for FluentStack.

It turns the master curriculum direction from `docs/12_CURRICULUM_PLAN.md` into a practical module-by-module learning map for future content batches.

This document is not raw lesson content. Do not put full lesson scripts, full quiz question lists, or full coding challenge implementations here.

Use this document to plan:

* module order
* lesson order
* lesson role
* practice pattern
* Uji Kompetensi coverage
* readiness criteria
* future content batches

Actual lesson content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when natural, such as `component`, `props`, `state`, `hook`, `API`, `semantic HTML`, `accessibility`, `responsive design`, `deployment`, and similar terms.

## Track Outcome

A learner who completes Frontend Engineering should be able to:

* build accessible, responsive web interfaces
* write meaningful HTML structure
* style layouts with predictable CSS
* add interaction with JavaScript
* use TypeScript for safer frontend code
* build UI with React
* build app routes and production flows with Next.js
* connect frontend features to APIs, auth, and persistence
* test, debug, optimize, and deploy frontend work
* make maintainable architecture decisions
* explain implementation choices clearly in project notes, pull requests, and interviews

## FluentStack Teaching Model

Frontend Engineering follows a module-level learning model.

The default flow is:

```txt
Regular lessons teach and practice.
Uji Kompetensi checks readiness at the end of the module.
```

### Regular Lesson

A regular lesson should help learners understand and practice one clear concept.

A regular lesson usually includes:

* path context
* focused explanation
* important terms
* small example
* how to read or use the example
* common mistake or decision rule
* quick check
* coding practice when useful
* writing practice when communication is relevant
* actionable summary
* bridge to the next lesson

A regular beginner lesson should not include a quiz by default.

Use a quiz inside a regular lesson only when it adds clear learning value and does not make the lesson feel test-heavy.

### Uji Kompetensi

`Uji Kompetensi` is the module-end assessment.

It checks whether learners are ready for the next module.

An Uji Kompetensi may include:

* module recap
* quiz
* coding practice
* project task
* writing practice
* self-review checklist
* readiness summary

Uji Kompetensi should cover the whole module. It should not introduce important new concepts.

## Module Content Quality Rules

Every module must have a clear learning arc.

Before writing content, define:

* module goal
* prerequisite
* regular lesson sequence
* unique role of each lesson
* practice pattern
* Uji Kompetensi coverage
* readiness criteria
* bridge to the next module

Rules:

* Every lesson must have a unique role.
* Do not create two lessons that explain the same concept in different words.
* If two lessons overlap, convert one into guided practice, common mistakes, case study, reinforcement, or assessment.
* Do not add more lessons just to make a module look full.
* Prefer fewer mature lessons over many shallow lessons.
* A regular lesson should prepare learners for practice.
* Uji Kompetensi should check whether the whole module is understood.

## Activity Type Reference

Use activity types intentionally.

* `text`: focused explanation of one concept.
* `callout`: warning, tip, common mistake, or decision rule.
* `code-example`: small example that supports the concept.
* `quick-check`: one light understanding check inside a regular lesson.
* `quiz`: mainly for Uji Kompetensi or justified lesson checks.
* `coding-practice`: deterministic implementation practice.
* `writing-practice`: communication artifact such as PR note, bug report, implementation note, or demo script.
* `project work`: larger multi-lesson output.
* `case study`: inspect a realistic scenario and make a decision.
* `self-review checklist`: learner checks quality before completion.

## Module Planning Format

Use this structure when adding or revising modules:

```txt
Module:
Goal:
Prerequisite:
Lesson sequence:
Uji Kompetensi:
Readiness criteria:
Notes:
```

Lesson sequence should define:

* order
* lesson title
* lesson role
* main concept
* activity pattern
* practice output
* bridge / prepares for

---

# Level 1: Web Foundations

## Goal

Understand the web ecosystem before writing full HTML pages.

This level is for absolute beginners. Learners should understand what they are opening in the browser, how a page is requested, what HTML/CSS/JavaScript are, and how small frontend project files are organized.

## Module: Web Foundations

### Module goal

Learners understand the basic web vocabulary and can explain how a simple frontend project is organized.

### Prerequisite

None. This is the first frontend module.

### Lesson sequence

| Order | Lesson title                                       | Lesson role         | Main concept                                       | Activity pattern                                     | Practice output                                           | Bridge / prepares for                                      |
| ----- | -------------------------------------------------- | ------------------- | -------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| 1     | Apa Itu Website dan Web Page?                      | Beginner concept    | Website vs web page, URL as page address           | text, mini action, callout, quick-check, summary     | Learner can identify a page inside a website              | Prepares for how the browser opens a URL                   |
| 2     | Cara Kerja Web Page                                | Concept flow        | Browser opens URL, simple request/response         | text, simple flow, mini action, quick-check, summary | Learner can explain page loading in plain language        | Prepares for understanding what files the browser receives |
| 3     | Apa Itu HTML, CSS, dan JavaScript?                 | Concept vocabulary  | HTML, CSS, JavaScript as different parts of a page | text, simple example, quick-check, summary           | Learner can distinguish structure, style, and interaction | Prepares for seeing how the three work together            |
| 4     | Peran HTML, CSS, dan JavaScript                    | Guided example      | How structure, style, and interaction combine      | text, small example, quick-check, summary            | Learner can explain one page using HTML/CSS/JS roles      | Prepares for file separation                               |
| 5     | Mengenal File index.html, style.css, dan script.js | File orientation    | Main files in a small frontend project             | text, file example, quick-check, summary             | Learner can explain the purpose of each file              | Prepares for folder structure                              |
| 6     | Struktur Project Frontend Kecil                    | Project orientation | Basic frontend folders and files                   | text, file tree, quick-check/self-review, summary    | Learner can read a small project folder                   | Prepares for module assessment                             |
| 7     | Uji Kompetensi Web Foundations                     | Module assessment   | Web vocabulary and project orientation             | recap, quiz, optional reflection, summary            | Learner proves readiness for HTML Basics                  | Leads to HTML document structure                           |

### Uji Kompetensi

Assessment title:

* Uji Kompetensi Web Foundations

Assessment coverage:

* website vs web page
* URL/path
* browser opening a URL
* request and response in simple terms
* HTML role
* CSS role
* JavaScript role
* `index.html`, `style.css`, `script.js`
* basic project folder structure

Suggested blocks:

* text recap
* quiz
* optional reflection or self-review
* summary

Readiness criteria:

Learner can explain the web page loading flow and identify the basic files in a small frontend project without using advanced networking terms.

### Notes

Do not turn Web Foundations into HTML writing practice. This module is orientation. HTML writing starts in HTML Basics.

---

# Level 2: HTML and Accessibility Foundations

## Goal

Write correct HTML structure that works for browsers, assistive technology, and other developers.

This level starts after learners understand what HTML is and where an HTML file fits in a frontend project.

## Module: HTML Basics

### Module goal

Learners can write a simple HTML page with valid document structure, basic content elements, links, images, and simple relative paths.

### Prerequisite

Learner understands that HTML gives page structure and knows where `index.html` fits in a small project.

### Lesson sequence

| Order | Lesson title                        | Lesson role               | Main concept                              | Activity pattern                                                     | Practice output               | Bridge / prepares for                    |
| ----- | ----------------------------------- | ------------------------- | ----------------------------------------- | -------------------------------------------------------------------- | ----------------------------- | ---------------------------------------- |
| 1     | Struktur HTML Dasar                 | Concept + guided practice | doctype, html, head, title, body, h1, p   | text, code-example, quick-check, coding-practice, summary            | Basic HTML page               | Prepares for tag, element, and attribute |
| 2     | Tag, Element, dan Attribute         | Concept + guided practice | tag, element, attribute, href, src, alt   | text, code-example, quick-check, coding-practice, summary            | Link and image snippet        | Prepares for visible content elements    |
| 3     | Heading, Paragraf, Link, dan Gambar | Content elements practice | h1/h2, p, a, img, alt                     | text, code-example, quick-check, coding-practice, summary            | Basic content page            | Prepares for paths used by href and src  |
| 4     | Relative Paths Dasar                | File reference practice   | simple relative paths for href and src    | text, file tree, code-example, quick-check, coding-practice, summary | Page using local links/images | Prepares for module assessment           |
| 5     | Uji Kompetensi HTML Basics          | Module assessment         | HTML document and basic content readiness | recap, quiz, coding-practice, summary                                | Build a small content page    | Leads to Semantic HTML                   |

### Uji Kompetensi

Assessment title:

* Uji Kompetensi HTML Basics

Assessment coverage:

* document structure
* head vs body
* title vs h1
* tag, element, and attribute
* h1, p, a, img
* href, src, alt
* simple relative paths

Suggested blocks:

* text recap
* quiz
* coding-practice
* summary

Readiness criteria:

Learner can build a beginner HTML page and explain the difference between document structure, visible content, and attributes.

### Notes

Regular HTML Basics lessons should focus on explanation and coding practice. Do not put full quizzes in every regular lesson. Save the main quiz for Uji Kompetensi.

## Module: Semantic HTML

### Module goal

Learners can choose HTML elements based on meaning and organize a page into meaningful regions.

### Prerequisite

Learner can write a basic HTML page and understands tag, element, attribute, headings, links, images, and simple paths.

### Lesson sequence

| Order | Lesson title                     | Lesson role            | Main concept                                           | Activity pattern                                          | Practice output                | Bridge / prepares for                  |
| ----- | -------------------------------- | ---------------------- | ------------------------------------------------------ | --------------------------------------------------------- | ------------------------------ | -------------------------------------- |
| 1     | Struktur Semantic HTML           | Main concept           | semantic HTML means choosing elements by meaning       | text, code-example, quick-check, coding-practice, summary | Simple semantic page structure | Prepares for guided refactor practice  |
| 2     | Latihan Menerapkan Semantic HTML | Reinforcement practice | replace generic div structure with meaningful elements | text, case/example, coding-practice, self-review, summary | Refactored semantic page       | Prepares for module assessment         |
| 3     | Uji Kompetensi Semantic HTML     | Module assessment      | semantic structure readiness                           | recap, quiz, coding-practice, summary                     | Build/refactor semantic page   | Leads to Forms and Basic Accessibility |

### Uji Kompetensi

Assessment title:

* Uji Kompetensi Semantic HTML

Assessment coverage:

* choosing elements by meaning
* `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
* heading hierarchy
* avoiding div-only structure
* explaining semantic choices

Suggested blocks:

* text recap
* quiz
* coding-practice
* self-review checklist
* summary

Readiness criteria:

Learner can structure a simple page using semantic HTML and explain why each region uses that element.

### Notes

Do not let `Latihan Menerapkan Semantic HTML` repeat the same explanation as `Struktur Semantic HTML`. It should behave as guided practice or reinforcement.

## Module: Forms and Basic Accessibility

### Module goal

Learners can create basic interactive HTML forms and apply first-layer accessibility habits.

### Prerequisite

Learner can write basic and semantic HTML structure.

### Planned lesson sequence

| Order | Lesson title                                 | Lesson role               | Main concept                                | Activity pattern                                          | Practice output                             | Bridge / prepares for          |
| ----- | -------------------------------------------- | ------------------------- | ------------------------------------------- | --------------------------------------------------------- | ------------------------------------------- | ------------------------------ |
| 1     | Link vs Button                               | Decision rule             | navigation vs action                        | text, example, quick-check, summary                       | Learner can choose link or button correctly | Prepares for form controls     |
| 2     | Form, Label, dan Input                       | Concept + guided practice | form structure and label connection         | text, code-example, quick-check, coding-practice, summary | Basic accessible form                       | Prepares for more field types  |
| 3     | Textarea, Select, dan Required Fields        | Guided practice           | larger text input, choices, required fields | text, code-example, quick-check, coding-practice, summary | Contact form fields                         | Prepares for useful error text |
| 4     | Alt Text Dasar                               | Accessibility concept     | image description for non-visual context    | text, examples, quick-check, practice, summary            | Better image alt text                       | Prepares for keyboard basics   |
| 5     | Keyboard Navigation Dasar                    | Accessibility behavior    | tab order and focus                         | text, mini action, case study, self-review, summary       | Keyboard check of simple page               | Prepares for checklist         |
| 6     | Basic Accessibility Checklist                | Review / self-review      | first-layer accessibility review            | text, checklist, case study, summary                      | Accessibility review of a simple page       | Prepares for module assessment |
| 7     | Uji Kompetensi Forms and Basic Accessibility | Module assessment         | form and accessibility readiness            | recap, quiz, coding-practice, checklist, summary          | Accessible signup/contact form              | Leads to CSS Fundamentals      |

### Uji Kompetensi

Assessment title:

* Uji Kompetensi Forms and Basic Accessibility

Assessment coverage:

* link vs button
* label/input connection
* form controls
* required fields
* useful error text
* alt text
* keyboard navigation basics
* basic accessibility checklist

Suggested blocks:

* text recap
* quiz
* coding-practice
* self-review checklist
* summary

Readiness criteria:

Learner can build a simple accessible form and run a basic accessibility checklist.

### Notes

Keep this module hidden from the active track until its first lesson batch is ready.

---

# Level 3: CSS Fundamentals and Layout

## Goal

Style pages with predictable layout, responsive behavior, and maintainable CSS.

## Module: CSS Core Mechanics

### Module goal

Learners understand how CSS rules apply before building layouts.

### Prerequisite

Learner can write meaningful HTML structure.

### Planned lesson sequence

| Order | Lesson title                      | Lesson role         | Main concept                     | Activity pattern                                          | Practice output               | Bridge / prepares for       |
| ----- | --------------------------------- | ------------------- | -------------------------------- | --------------------------------------------------------- | ----------------------------- | --------------------------- |
| 1     | Apa Itu CSS?                      | Concept             | CSS controls visual presentation | text, example, quick-check, summary                       | Learner can identify CSS role | Prepares for selectors      |
| 2     | Selector dan Declaration Dasar    | Guided example      | selector, property, value        | text, code-example, quick-check, coding-practice, summary | Style a simple card           | Prepares for cascade        |
| 3     | Cascade dan Specificity Dasar     | Concept + debugging | why one rule wins                | text, callout, case study, practice, summary              | Fix conflicting CSS rules     | Prepares for box model      |
| 4     | Uji Kompetensi CSS Core Mechanics | Module assessment   | CSS rule basics                  | recap, quiz, debugging task, summary                      | Debug simple CSS              | Leads to spacing and layout |

### Uji Kompetensi

Assessment coverage:

* CSS role
* selector, property, value
* cascade
* specificity
* inheritance at a beginner level
* debugging simple conflicting rules

Readiness criteria:

Learner can read simple CSS and explain why one rule applies.

## Module: Box Model and Spacing

### Module goal

Learners can control size and spacing without guessing.

### Prerequisite

Learner understands basic CSS selectors and declarations.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role       | Main concept                     | Activity pattern                                          | Practice output           | Bridge / prepares for |
| ----- | ------------------------------------ | ----------------- | -------------------------------- | --------------------------------------------------------- | ------------------------- | --------------------- |
| 1     | Box Model Dasar                      | Concept           | content, padding, border, margin | text, visual/code example, quick-check, practice, summary | Inspect spacing of a card | Prepares for sizing   |
| 2     | Width, Height, dan box-sizing        | Guided practice   | sizing and box-sizing            | text, code-example, practice, summary                     | Predict card size         | Prepares for layout   |
| 3     | Spacing yang Konsisten               | Practice          | reusable spacing habits          | text, example, coding-practice, checklist, summary        | Clean card spacing        | Prepares for Flexbox  |
| 4     | Uji Kompetensi Box Model and Spacing | Module assessment | spacing readiness                | recap, quiz, coding-practice, summary                     | Fix a broken layout       | Leads to Flexbox/Grid |

### Uji Kompetensi

Assessment coverage:

* content, padding, border, margin
* `box-sizing`
* width and height basics
* spacing consistency
* fixing simple spacing bugs

Readiness criteria:

Learner can explain and fix spacing issues in a basic card or section.

## Module: Flexbox and Grid Layout

### Module goal

Learners can build common one-dimensional and two-dimensional layouts.

### Prerequisite

Learner understands CSS box model and spacing.

### Planned lesson sequence

| Order | Lesson title                           | Lesson role        | Main concept                   | Activity pattern                                          | Practice output                | Bridge / prepares for         |
| ----- | -------------------------------------- | ------------------ | ------------------------------ | --------------------------------------------------------- | ------------------------------ | ----------------------------- |
| 1     | Flexbox Dasar                          | Concept + practice | flex container, direction, gap | text, code-example, quick-check, coding-practice, summary | Simple horizontal layout       | Prepares for navbar           |
| 2     | Membuat Navbar dengan Flexbox          | Guided practice    | align items and spacing        | text, coding-practice, checklist, summary                 | Responsive-ish navbar          | Prepares for Grid             |
| 3     | Grid Dasar                             | Concept + practice | columns, rows, gap             | text, code-example, coding-practice, summary              | Card grid                      | Prepares for layout decisions |
| 4     | Kapan Pakai Flexbox atau Grid?         | Decision rule      | layout choice                  | text, case study, quick-check, summary                    | Learner can choose layout tool | Prepares for assessment       |
| 5     | Uji Kompetensi Flexbox and Grid Layout | Module assessment  | layout readiness               | recap, quiz, coding-practice, summary                     | Navbar + card grid             | Leads to responsive design    |

### Uji Kompetensi

Assessment coverage:

* Flexbox basics
* Grid basics
* gap and alignment
* layout tool decision
* responsive-friendly structure

Readiness criteria:

Learner can choose Flexbox or Grid for common layout tasks and implement a simple layout.

## Module: Responsive Visual System

### Module goal

Learners can make UI adapt across screen sizes with consistent visual rules.

### Prerequisite

Learner understands basic CSS layout.

### Planned lesson sequence

| Order | Lesson title                            | Lesson role        | Main concept                     | Activity pattern                                   | Practice output            | Bridge / prepares for      |
| ----- | --------------------------------------- | ------------------ | -------------------------------- | -------------------------------------------------- | -------------------------- | -------------------------- |
| 1     | Mobile-first CSS                        | Concept            | start from small screens         | text, example, quick-check, practice, summary      | Mobile-safe section        | Prepares for breakpoints   |
| 2     | Breakpoints Dasar                       | Guided practice    | media queries                    | text, code-example, coding-practice, summary       | Responsive card layout     | Prepares for fluid spacing |
| 3     | Fluid Spacing dan Typography Dasar      | Practice           | readable spacing and text        | text, example, coding-practice, checklist, summary | Better reading layout      | Prepares for tokens        |
| 4     | CSS Variables dan Dark Mode Dasar       | Concept + practice | reusable values and theme basics | text, code-example, practice, summary              | Simple token-based section | Prepares for assessment    |
| 5     | Uji Kompetensi Responsive Visual System | Module assessment  | responsive visual readiness      | recap, quiz, coding-practice, checklist, summary   | Responsive landing section | Leads to JavaScript        |

### Uji Kompetensi

Assessment coverage:

* mobile-first thinking
* media queries
* responsive spacing
* readable typography
* CSS variables
* simple theme values

Readiness criteria:

Learner can build a small responsive section with readable spacing and basic visual consistency.

---

# Level 4: JavaScript Fundamentals

## Goal

Add basic interaction and data handling to web pages.

## Module: Values, Types, and Functions

### Module goal

Learners can write small JavaScript functions and predict simple output.

### Prerequisite

Learner understands basic HTML and CSS.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role        | Main concept                                  | Activity pattern                                          | Practice output                     | Bridge / prepares for       |
| ----- | ------------------------------------------- | ------------------ | --------------------------------------------- | --------------------------------------------------------- | ----------------------------------- | --------------------------- |
| 1     | Apa Itu JavaScript di Browser?              | Concept            | JavaScript adds behavior                      | text, example, quick-check, summary                       | Learner can identify JS role        | Prepares for values         |
| 2     | Values dan Variables                        | Concept + practice | values, strings, numbers, booleans, variables | text, code-example, quick-check, coding-practice, summary | Store simple values                 | Prepares for expressions    |
| 3     | Functions Dasar                             | Guided practice    | reusable logic                                | text, code-example, coding-practice, summary              | Small formatter/calculator function | Prepares for conditionals   |
| 4     | Conditionals dan Loops Dasar                | Guided practice    | branching and repetition                      | text, examples, coding-practice, summary                  | Simple decision function            | Prepares for assessment     |
| 5     | Uji Kompetensi Values, Types, and Functions | Module assessment  | JS basics readiness                           | recap, quiz, coding-practice, summary                     | Small utility functions             | Leads to arrays and objects |

### Uji Kompetensi

Assessment coverage:

* values and variables
* primitive types
* functions
* conditionals
* simple loops
* predicting output

Readiness criteria:

Learner can write and explain small JavaScript functions.

## Module: Arrays, Objects, and Data Modeling

### Module goal

Learners can represent UI data with arrays and objects.

### Prerequisite

Learner can write small functions and understand basic values.

### Planned lesson sequence

| Order | Lesson title                                      | Lesson role        | Main concept             | Activity pattern                                          | Practice output             | Bridge / prepares for          |
| ----- | ------------------------------------------------- | ------------------ | ------------------------ | --------------------------------------------------------- | --------------------------- | ------------------------------ |
| 1     | Array Dasar untuk Data UI                         | Concept + practice | list of values           | text, code-example, coding-practice, summary              | Render or inspect list data | Prepares for objects           |
| 2     | Object Dasar untuk Satu Item                      | Concept + practice | object fields            | text, code-example, quick-check, coding-practice, summary | Model a card item           | Prepares for array of objects  |
| 3     | Array of Objects                                  | Guided practice    | list of structured items | text, code-example, coding-practice, summary              | Product/task list data      | Prepares for mapping/filtering |
| 4     | map, filter, dan Data Transformasi Dasar          | Guided practice    | transform data for UI    | text, code-example, coding-practice, summary              | Filtered list               | Prepares for assessment        |
| 5     | Uji Kompetensi Arrays, Objects, and Data Modeling | Module assessment  | UI data readiness        | recap, quiz, coding-practice, summary                     | Transform array of objects  | Leads to DOM/events            |

### Uji Kompetensi

Assessment coverage:

* arrays
* objects
* array of objects
* mapping
* filtering
* simple data transformation

Readiness criteria:

Learner can shape simple data for UI rendering.

## Module: DOM, Events, Forms, localStorage, and Fetch Basics

### Module goal

Learners can connect JavaScript to browser behavior and simple data.

### Prerequisite

Learner understands basic functions, arrays, and objects.

### Planned lesson sequence

| Order | Lesson title                                                      | Lesson role        | Main concept                 | Activity pattern                                          | Practice output             | Bridge / prepares for        |
| ----- | ----------------------------------------------------------------- | ------------------ | ---------------------------- | --------------------------------------------------------- | --------------------------- | ---------------------------- |
| 1     | DOM Selection Dasar                                               | Concept + practice | selecting elements           | text, code-example, quick-check, coding-practice, summary | Select and update page text | Prepares for events          |
| 2     | Event Click dan Input                                             | Guided practice    | responding to user action    | text, code-example, coding-practice, summary              | Interactive button/input    | Prepares for forms           |
| 3     | Form Submit Dasar                                                 | Guided practice    | prevent default, read values | text, callout, coding-practice, summary                   | Simple form handler         | Prepares for localStorage    |
| 4     | localStorage Dasar                                                | Concept + practice | save small browser data      | text, code-example, coding-practice, summary              | Save form value locally     | Prepares for fetch           |
| 5     | Fetch dan JSON Dasar                                              | Concept + practice | request data and read JSON   | text, code-example, coding-practice, summary              | Load sample data            | Prepares for assessment      |
| 6     | Uji Kompetensi DOM, Events, Forms, localStorage, and Fetch Basics | Module assessment  | browser behavior readiness   | recap, quiz, coding-practice, summary                     | Interactive data form/page  | Leads to advanced JavaScript |

### Uji Kompetensi

Assessment coverage:

* DOM selection
* click/input events
* form submit
* localStorage
* fetch
* JSON basics
* loading/error awareness at a simple level

Readiness criteria:

Learner can build a small interactive page that reads input, updates UI, saves simple data, and fetches sample data.

---

# Level 5: JavaScript Advanced

## Goal

Handle async behavior, modules, browser APIs, and debugging with more confidence.

## Modules

### Module: Scope, Closure, and Modules

Lesson sequence:

1. Scope Dasar
2. Closure dalam Contoh UI
3. ES Modules dan import/export
4. Memecah File JavaScript
5. Uji Kompetensi Scope, Closure, and Modules

Uji Kompetensi coverage:

* scope
* closure
* module boundaries
* import/export
* refactoring script into modules

### Module: Async JavaScript and Error Handling

Lesson sequence:

1. Promise Dasar
2. async / await
3. try / catch
4. Loading, Error, Empty, dan Success State
5. Retry Dasar
6. Uji Kompetensi Async JavaScript and Error Handling

Uji Kompetensi coverage:

* async flow
* error handling
* loading/error UI
* failed request handling

### Module: Browser APIs, Data Transformation, and Debugging

Lesson sequence:

1. URL dan Timer API Dasar
2. Clipboard dan Storage Patterns
3. Network Debugging
4. Breakpoints dan Console Strategy
5. Uji Kompetensi Browser APIs and Debugging

Uji Kompetensi coverage:

* browser API use
* network debugging
* isolating bugs
* explaining a fix

---

# Level 6: TypeScript

## Goal

Use TypeScript to make frontend code safer without overcomplicating it.

## Modules

### Module: TypeScript Core Types

Lesson sequence:

1. Apa Itu TypeScript?
2. Primitive Types dan Arrays
3. Object Types
4. Function Types
5. Optional Fields
6. Uji Kompetensi TypeScript Core Types

Uji Kompetensi coverage:

* basic types
* arrays
* objects
* functions
* optional fields

### Module: Practical Type Design

Lesson sequence:

1. Union Types
2. Narrowing
3. Discriminated Union untuk UI State
4. Generics Dasar
5. Utility Types Dasar
6. Uji Kompetensi Practical Type Design

Uji Kompetensi coverage:

* unions
* narrowing
* typed UI states
* generic helper
* avoiding unsafe casts

### Module: Typed Frontend Boundaries

Lesson sequence:

1. Typing API Responses
2. Typed Props
3. Typed Custom Hooks
4. Keeping Types Readable
5. Uji Kompetensi Typed Frontend Boundaries

Uji Kompetensi coverage:

* API response types
* component props
* hook return types
* boundary safety

---

# Level 7: React Fundamentals

## Goal

Build interactive UI with components, props, state, and forms.

## Modules

### Module: Component Model

Lesson sequence:

1. Apa Itu Component?
2. JSX Dasar
3. Props dan Children
4. Splitting UI into Components
5. Uji Kompetensi Component Model

Uji Kompetensi coverage:

* JSX
* component structure
* props
* children
* reusable card/button components

### Module: State, Events, and Rendering

Lesson sequence:

1. useState Dasar
2. Event Handling
3. Conditional Rendering
4. Lists and Keys
5. Derived Display
6. Uji Kompetensi State, Events, and Rendering

Uji Kompetensi coverage:

* state updates
* events
* conditions
* lists
* keys
* derived display

### Module: Forms and Composition

Lesson sequence:

1. Controlled Inputs
2. Form Submit
3. Composition Patterns
4. Lifting State When Needed
5. Uji Kompetensi Forms and Composition

Uji Kompetensi coverage:

* controlled form
* form submit
* composition
* state boundaries

---

# Level 8: React Intermediate

## Goal

Organize behavior, state, and reusable patterns in medium-sized React features.

## Modules

### Module: Custom Hooks and Effects

Lesson sequence:

1. Kapan Perlu useEffect?
2. Cleanup dan Dependency Array
3. Custom Hook Dasar
4. Browser Subscription Hook
5. Uji Kompetensi Custom Hooks and Effects

### Module: State Strategy

Lesson sequence:

1. State Colocation
2. Derived State
3. Reducer Pattern
4. Context When Needed
5. Uji Kompetensi State Strategy

### Module: Reusable UI States

Lesson sequence:

1. Loading State
2. Error State
3. Empty State
4. Retry Pattern
5. Uji Kompetensi Reusable UI States

---

# Level 9: React Advanced

## Goal

Build resilient React patterns without over-abstraction.

## Modules

### Module: Resilience and Suspense Basics

Lesson sequence:

1. Error Boundaries
2. Fallback UI
3. Suspense Basics
4. Retry and Recovery Patterns
5. Uji Kompetensi Resilience and Suspense Basics

### Module: Performance Awareness

Lesson sequence:

1. Render Cost
2. Measuring Before Optimizing
3. useMemo and useCallback When Useful
4. Expensive Lists
5. Uji Kompetensi Performance Awareness

### Module: Advanced Component Patterns

Lesson sequence:

1. Compound Components
2. Slots and Children Patterns
3. Reusable Form Field Pattern
4. Avoiding Over-Abstraction
5. Uji Kompetensi Advanced Component Patterns

---

# Level 10: Next.js App Router

## Goal

Build app-level routes and layouts with the App Router.

## Modules

### Module: App Directory and Routing

Lesson sequence:

1. app Directory
2. page.tsx and layout.tsx
3. Nested Routes
4. Dynamic Routes
5. Route Groups
6. Uji Kompetensi App Directory and Routing

### Module: Server Components and Client Components

Lesson sequence:

1. Server Components
2. Client Components
3. use client Boundary
4. Passing Props Across Boundaries
5. Common Boundary Mistakes
6. Uji Kompetensi Server and Client Components

### Module: Loading, Error UI, Route Handlers, Metadata, and Env

Lesson sequence:

1. loading.tsx
2. error.tsx
3. Route Handlers
4. Metadata
5. Environment Variables
6. Uji Kompetensi Next.js Route Behavior

---

# Level 11: Production Next.js

## Goal

Connect a Next.js app to real auth, persistence, and deployment workflows.

## Modules

### Module: Authentication and Session-Aware UI

Lesson sequence:

1. Login/Register UX
2. Logout and Session-Aware Nav
3. Public vs Protected Routes
4. Auth Error States
5. Uji Kompetensi Authentication and Session-Aware UI

### Module: Supabase or Backend Integration

Lesson sequence:

1. Supabase Client Boundaries
2. RLS Concept
3. Service Layer
4. Persisting User Data
5. Profile Rows
6. Uji Kompetensi Supabase Integration

### Module: Production Operations

Lesson sequence:

1. Vercel Deployment
2. Environment Setup
3. Production Logs
4. Caching Basics
5. Deployment Debugging
6. Uji Kompetensi Production Operations

---

# Level 12: Forms, Validation, and Data Fetching

## Goal

Build data-heavy product flows with useful validation and server-state thinking.

## Modules

### Module: React Hook Form and Zod

Lesson sequence:

1. Form Registration
2. Zod Schema
3. Field Errors
4. Submit State
5. Schema Reuse
6. Uji Kompetensi React Hook Form and Zod

### Module: Validation UX and Accessible Errors

Lesson sequence:

1. Inline Errors
2. Summary Errors
3. Focus Management
4. Disabled State
5. Success State
6. Uji Kompetensi Validation UX

### Module: Server-State Thinking

Lesson sequence:

1. Server State vs Client State
2. Loading/Error/Empty States
3. Mapping API Responses
4. Optimistic UI Basics
5. Uji Kompetensi Server-State Thinking

---

# Level 13: Testing

## Goal

Test important behavior without testing implementation details.

## Modules

### Module: Unit and Component Testing

Lesson sequence:

1. Testing Mindset
2. Vitest Basics
3. React Testing Library
4. User Events
5. Accessible Queries
6. Uji Kompetensi Unit and Component Testing

### Module: Integration and API Mocking

Lesson sequence:

1. Integration Test Scope
2. MSW Basics
3. Loading/Error/Success API States
4. Auth-Adjacent Test Cases
5. Uji Kompetensi Integration and API Mocking

### Module: End-to-End Testing Strategy

Lesson sequence:

1. What E2E Should Cover
2. Playwright Basics
3. Critical User Journeys
4. Flaky Test Causes
5. Uji Kompetensi E2E Testing Strategy

---

# Level 14: Performance

## Goal

Improve user experience by measuring and reducing real performance costs.

## Modules

### Module: Core Web Vitals

Lesson sequence:

1. LCP
2. INP
3. CLS
4. Lighthouse and Field vs Lab Data
5. Performance Budget
6. Uji Kompetensi Core Web Vitals

### Module: Asset and Bundle Optimization

Lesson sequence:

1. Image Optimization
2. Font Optimization
3. Bundle Awareness
4. Code Splitting
5. Dynamic Imports
6. Uji Kompetensi Asset and Bundle Optimization

### Module: Rendering Cost and Hydration

Lesson sequence:

1. Hydration Cost
2. Server vs Client Rendering Decisions
3. Client Component Boundaries
4. Expensive Re-renders
5. Uji Kompetensi Rendering Cost and Hydration

---

# Level 15: Accessibility

## Goal

Build UI that works for keyboard, screen reader, and low-vision users.

## Modules

### Module: Semantic Review and Keyboard Navigation

Lesson sequence:

1. Semantic HTML Review
2. Tab Order
3. Focus Visibility
4. Skip Links
5. Keyboard Traps
6. Uji Kompetensi Semantic Review and Keyboard Navigation

### Module: Accessible Components

Lesson sequence:

1. Modal Accessibility
2. Dropdown Accessibility
3. Tabs Accessibility
4. Focus Management
5. ARIA When Needed
6. Uji Kompetensi Accessible Components

### Module: Accessibility Testing and Preferences

Lesson sequence:

1. Color Contrast
2. Accessible Form Errors
3. Reduced Motion
4. Screen Reader Basics
5. Testing Tools
6. Uji Kompetensi Accessibility Testing and Preferences

---

# Level 16: Frontend Architecture

## Goal

Structure frontend code so features stay maintainable as the app grows.

## Modules

### Module: Feature-Based Structure and Boundaries

Lesson sequence:

1. Feature Folders
2. Shared Components
3. Service Layer
4. Types and Content Boundaries
5. Dependency Boundaries
6. Uji Kompetensi Feature-Based Structure

### Module: State and Data Strategy

Lesson sequence:

1. Server State vs Client State
2. URL State
3. Local State
4. Persistence Boundaries
5. Error Strategy
6. Uji Kompetensi State and Data Strategy

### Module: Component API and Documentation

Lesson sequence:

1. Component API Design
2. Prop Naming
3. Content-Driven Rendering
4. Usage Examples
5. Documentation Notes
6. Uji Kompetensi Component API and Documentation

---

# Level 17: Design System

## Goal

Build consistent UI primitives and product components.

## Modules

### Module: Design Tokens and Variants

Lesson sequence:

1. Design Tokens
2. Color and Spacing Tokens
3. Radius and Typography
4. Button Variants
5. Card Variants
6. Uji Kompetensi Design Tokens and Variants

### Module: Product Components

Lesson sequence:

1. Form Components
2. Table Components
3. Modal
4. Toast
5. Tabs and Select
6. Uji Kompetensi Product Components

### Module: Storybook and Package Basics

Lesson sequence:

1. Storybook Basics
2. Component Stories
3. Accessibility Checks
4. Package Structure Basics
5. Changelog Thinking
6. Uji Kompetensi Storybook and Package Basics

---

# Level 18: Backend Basics for Frontend Engineers

## Goal

Understand enough backend concepts to integrate, debug, and communicate effectively.

## Modules

### Module: API Fundamentals

Lesson sequence:

1. REST API Basics
2. GraphQL Basics
3. Status Codes
4. Request and Response Shape
5. Pagination and Webhooks
6. Uji Kompetensi API Fundamentals

### Module: Auth, Cookies, and Browser Security Boundaries

Lesson sequence:

1. Auth Concepts
2. Cookies
3. JWT vs Session
4. CORS
5. CSRF
6. Secure Cookies
7. Uji Kompetensi Auth and Browser Security Boundaries

### Module: Data and Infrastructure Basics

Lesson sequence:

1. SQL Basics
2. PostgreSQL Basics
3. Supabase or Prisma Basics
4. Redis Basics
5. File Upload Concepts
6. Uji Kompetensi Data and Infrastructure Basics

---

# Level 19: Security Basics

## Goal

Avoid common frontend security mistakes and understand product-level risk.

## Modules

### Module: Browser Attack Basics

Lesson sequence:

1. XSS Basics
2. CSRF Basics
3. CORS Risks
4. Input Sanitization
5. Dependency Vulnerabilities
6. Uji Kompetensi Browser Attack Basics

### Module: Secrets, Tokens, and Permissions

Lesson sequence:

1. Env Leakage
2. Token Storage
3. Secure Cookies
4. Permission UI
5. Auth Guards
6. Uji Kompetensi Secrets, Tokens, and Permissions

### Module: File Upload and Third-Party Risk

Lesson sequence:

1. File Upload Risks
2. File Type and Size Checks
3. Preview Risks
4. Third-Party Packages
5. iframe Constraints
6. Uji Kompetensi File Upload and Third-Party Risk

---

# Level 20: Portfolio and Remote Readiness

## Goal

Turn technical skill into visible proof of work and job-ready communication.

## Modules

### Module: Portfolio Project Tracks

Lesson sequence:

1. Choosing a Portfolio Project
2. SaaS Dashboard Project Scope
3. Marketplace or E-commerce Mini Project Scope
4. Design System Project Scope
5. Feature Planning
6. Uji Kompetensi Portfolio Project Tracks

### Module: Project Documentation and Demo Prep

Lesson sequence:

1. README Structure
2. Screenshots and Feature Notes
3. Deployment Checklist
4. Technical Decision Notes
5. Demo Script
6. Uji Kompetensi Project Documentation and Demo Prep

### Module: Interview and Remote-Work Readiness

Lesson sequence:

1. Explaining What You Built
2. Explaining Technical Choices
3. Explaining Trade-offs
4. PR and Async Work Habits
5. Interview Practice
6. Uji Kompetensi Interview and Remote-Work Readiness

---

# First Content Batches

Content should expand in complete module slices.

A complete module slice includes:

* regular lessons
* meaningful examples
* practice when useful
* Uji Kompetensi
* assessment quiz/practice coverage
* bridge to the next module
* browser testing

## Batch 1A: Web Foundations

Status:

* Active and accepted as v1.

Includes:

* Apa Itu Website dan Web Page?
* Cara Kerja Web Page
* Apa Itu HTML, CSS, dan JavaScript?
* Peran HTML, CSS, dan JavaScript
* Mengenal File index.html, style.css, dan script.js
* Struktur Project Frontend Kecil
* Uji Kompetensi Web Foundations

## Batch 1B: HTML Basics

Status:

* Active and being matured.

Includes:

* Struktur HTML Dasar
* Tag, Element, dan Attribute
* Heading, Paragraf, Link, dan Gambar
* Relative Paths Dasar
* Uji Kompetensi HTML Basics

## Batch 1C: Semantic HTML

Status:

* Active and being matured.

Includes:

* Struktur Semantic HTML
* Latihan Menerapkan Semantic HTML
* Uji Kompetensi Semantic HTML

## Batch 1D: Forms and Basic Accessibility

Status:

* Planned.
* Keep hidden until the first lesson batch is ready.

Planned lessons:

* Link vs Button
* Form, Label, dan Input
* Textarea, Select, dan Required Fields
* Alt Text Dasar
* Keyboard Navigation Dasar
* Basic Accessibility Checklist
* Uji Kompetensi Forms and Basic Accessibility

## Batch 1E: CSS Core Mechanics

Status:

* Planned.
* Do not reuse prototype CSS content without review.

Planned lessons:

* Apa Itu CSS?
* Selector dan Declaration Dasar
* Cascade dan Specificity Dasar
* Uji Kompetensi CSS Core Mechanics

# Content That Should Wait

Wait until foundational modules are stable before creating:

* Production Next.js
* Supabase-backed project work
* React Advanced
* Design system package structure
* Storybook
* E2E testing
* Performance and Core Web Vitals deep dives
* Advanced accessibility components
* Security modules
* Portfolio capstone projects

Reason:

* These topics need enough frontend fluency to avoid overwhelming learners.
* They are better taught with project context.
* They should reuse patterns from earlier content instead of introducing new complexity too early.

# Authoring Notes for Future Content

* Keep lesson explanations practical and beginner-friendly.
* Use Bahasa Indonesia for main teaching content.
* Keep common technical terms in English when natural.
* Prefer one main concept per regular lesson.
* Include quick checks in regular lessons.
* Use coding practice when the learner is ready to apply the concept.
* Use writing practice when the frontend task maps to remote-work communication.
* Use Uji Kompetensi for module-level readiness checks.
* Avoid quiz overload in regular lessons.
* Avoid repetitive lessons.
* Prefer fewer mature lessons over many shallow lessons.
* Do not add the next module until the current module has been browser-tested.
