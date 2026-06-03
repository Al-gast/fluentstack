# Frontend Engineering Curriculum Detail

## Purpose

This document defines the detailed Frontend Engineering curriculum for FluentStack.

It turns the master curriculum direction from `docs/12_CURRICULUM_PLAN.md` into a practical module-by-module learning map for future content batches.

This document is not raw lesson content. Do not put full lesson scripts, full quiz question lists, or full coding challenge implementations here.

Use this document to plan:

* level order
* module order
* lesson order
* lesson role
* built-in practice pattern
* Documentation Bridge
* Local Dev Milestone
* Uji Kompetensi coverage
* readiness criteria
* future content batches

Actual lesson content inside the product should be Bahasa Indonesia-first. Common technical terms may stay in English when natural, such as `component`, `props`, `state`, `hook`, `API`, `semantic HTML`, `accessibility`, `responsive design`, `deployment`, and similar terms.

## Track Outcome

A learner who completes Frontend Engineering should be able to:

* explain how websites and web pages work
* write meaningful HTML structure
* build accessible forms and page regions
* style responsive layouts with CSS
* add interaction with JavaScript
* use TypeScript for safer frontend code
* build UI with React
* build app routes and production flows with Next.js
* connect frontend features to APIs, auth, and persistence
* test, debug, optimize, and deploy frontend work
* make maintainable architecture decisions
* use official documentation as part of normal development
* run projects locally when real workflow requires it
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
* guided Documentation Bridge only when tightly relevant
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
* Documentation Bridge
* readiness summary

Uji Kompetensi should cover the whole module. It should not introduce important new concepts.

## Practice Model

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

Built-in practice remains useful across beginner, intermediate, and advanced levels.

It is not only for beginner content.

Examples:

* HTML: write `h1`, `p`, `a`, `img`, and semantic regions
* CSS: adjust Flexbox, Grid, spacing, selectors, and responsive rules
* JavaScript: write functions, transform arrays, handle events
* React: edit component props, state, list rendering, controlled inputs
* Next.js: inspect route structure, server/client boundary examples, loading/error UI patterns
* English support tasks: write PR notes, blocker explanations, and documentation summaries

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

Recommended milestone points:

1. After early HTML, Forms, and CSS:

   * Local Static Website Project

2. After JavaScript DOM, events, localStorage, and fetch:

   * Local Vanilla JavaScript App

3. Before or during TypeScript/React tooling:

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

Use Documentation Bridge at:

* the end of a module
* Uji Kompetensi
* Local Dev Milestone
* advanced lessons where official docs are part of real workflow
* project work
* debugging or deployment tasks

Do not overload every regular lesson with many links.

For beginners, Documentation Bridge should be guided and specific.

A good Documentation Bridge tells the learner:

* which official docs source to open
* which page or section to read
* what to focus on
* what to ignore for now
* one small follow-up action

Weak:

```txt
Read the React docs.
```

Strong:

```txt
Read React docs: Passing Props to a Component.

Focus on:
1. how props are passed
2. how props are read inside a component
3. why props should stay read-only

Ignore advanced composition patterns for now.

Follow-up action:
Update one component in the practice project so it receives title and description through props.
```

Preferred documentation sources:

* MDN Web Docs for HTML, CSS, JavaScript, Web APIs, HTTP, and accessibility basics
* React official docs for React
* Next.js official docs and Learn Next.js for Next.js
* TypeScript official handbook for TypeScript
* Testing Library docs for React Testing Library
* Vitest docs for unit testing
* Playwright docs for end-to-end testing
* Supabase docs for Supabase integration
* Vercel docs for deployment
* WCAG/WAI resources for accessibility when appropriate

Documentation Bridge should not become link dumping.

Each docs reference should support the current module goal.

## Module Content Quality Rules

Every module must have a clear learning arc.

Before writing content, define:

* module goal
* prerequisite
* regular lesson sequence
* unique role of each lesson
* practice pattern
* Documentation Bridge
* Local Dev Milestone connection when relevant
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
* Built-in practice should reinforce focused concepts.
* Local Dev Milestone should teach real workflow at the right time.
* Documentation Bridge should build independence without overwhelming learners.

## Activity Type Reference

Use activity types intentionally.

* `text`: focused explanation of one concept.
* `callout`: warning, tip, common mistake, or decision rule.
* `code-example`: small example that supports the concept.
* `quick-check`: one light understanding check inside a regular lesson.
* `quiz`: mainly for Uji Kompetensi or justified lesson checks.
* `coding-practice`: deterministic implementation practice.
* `writing-practice`: communication artifact such as PR note, bug report, implementation note, docs summary, or demo script.
* `project work`: larger multi-lesson output.
* `case study`: inspect a realistic scenario and make a decision.
* `self-review checklist`: learner checks quality before completion.
* `Documentation Bridge`: guided reading of official docs with focus points and follow-up action.
* `Local Dev Milestone`: learner builds and runs a project on their own device.

## Module Planning Format

Use this structure when adding or revising modules:

```txt
Module:
Goal:
Prerequisite:
Lesson sequence:
Built-in practice pattern:
Documentation Bridge:
Local Dev Milestone connection:
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

## Frontend Curriculum Stage Map

Stages describe learner maturity and should guide content depth, copywriting tone, practice difficulty, documentation expectations, and readiness language.

Active implementation is currently through Level 3. Level 4+ remains planned and must not be treated as active app curriculum until implemented.

* Beginner: Level 1 Web Foundations, Level 2 HTML and Accessibility Foundations, Level 3 CSS Fundamentals and Layout, Level 4 JavaScript Fundamentals.
* Intermediate: Level 5 JavaScript Advanced, Level 6 TypeScript, Level 7 React Fundamentals, Level 8 React Intermediate, Level 9 React Advanced, Level 10 Next.js App Router.
* Advanced: Level 11 Production Next.js, Level 12 Forms, Validation, and Data Fetching, Level 13 Testing, Level 14 Performance, Level 15 Accessibility, Level 16 Frontend Architecture, Level 17 Design System, Level 18 Backend Basics for Frontend Engineers, Level 19 Security Basics, Level 20 Portfolio and Remote Readiness.

# Level 1 (Beginner): Web Foundations

## Goal

Understand the web ecosystem before writing full HTML pages.

This level is for absolute beginners. Learners should understand what they are opening in the browser, how a page is requested, what HTML/CSS/JavaScript are, and how small frontend project files are organized.

## Module: Web Foundations

### Module goal

Learners understand the basic web vocabulary and can explain how a simple frontend project is organized.

### Prerequisite

None. This is the first frontend module.

### Lesson sequence

| Order | Lesson title                                       | Lesson role         | Main concept                                       | Activity pattern                                     | Practice output                                           | Bridge / prepares for       |
| ----- | -------------------------------------------------- | ------------------- | -------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- | --------------------------- |
| 1     | Apa Itu Website dan Web Page?                      | Beginner concept    | Website vs web page, URL as page address           | text, mini action, callout, quick-check, summary     | Learner can identify a page inside a website              | How browser opens a URL     |
| 2     | Cara Kerja Web Page                                | Concept flow        | Browser opens URL, simple request/response         | text, simple flow, mini action, quick-check, summary | Learner can explain page loading in plain language        | What files browser receives |
| 3     | Apa Itu HTML, CSS, dan JavaScript?                 | Concept vocabulary  | HTML, CSS, JavaScript as different parts of a page | text, simple example, quick-check, summary           | Learner can distinguish structure, style, and interaction | How the three work together |
| 4     | Peran HTML, CSS, dan JavaScript                    | Guided example      | How structure, style, and interaction combine      | text, small example, quick-check, summary            | Learner can explain one page using HTML/CSS/JS roles      | File separation             |
| 5     | Mengenal File index.html, style.css, dan script.js | File orientation    | Main files in a small frontend project             | text, file example, quick-check, summary             | Learner can explain each file purpose                     | Folder structure            |
| 6     | Struktur Project Frontend Kecil                    | Project orientation | Basic frontend folders and files                   | text, file tree, quick-check/self-review, summary    | Learner can read a small project folder                   | Module assessment           |
| 7     | Uji Kompetensi Web Foundations                     | Module assessment   | Web vocabulary and project orientation             | recap, quiz, optional reflection, summary            | Learner proves readiness for HTML Basics                  | HTML document structure     |

### Built-in practice pattern

* Mini observations
* Quick checks
* Simple project/folder reading tasks
* No required local setup yet

### Documentation Bridge

Use only light and guided references.

Suggested docs:

* MDN: Getting started with the web
* MDN: How the web works
* MDN: HTML basics, only as preview before HTML Basics

Focus:

* website/web page vocabulary
* browser and URL basics
* HTML/CSS/JS roles

Ignore for now:

* HTTP details
* browser rendering internals
* build tools
* advanced networking

### Local Dev Milestone connection

No local milestone yet.

This module is orientation.

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

# Level 2 (Beginner): HTML and Accessibility Foundations

## Goal

Write correct HTML structure that works for browsers, assistive technology, and other developers.

This level starts after learners understand what HTML is and where an HTML file fits in a frontend project.

## Module: HTML Basics

### Module goal

Learners can write a simple HTML page with valid document structure, basic content elements, links, images, and simple relative paths.

### Prerequisite

Learner understands that HTML gives page structure and knows where `index.html` fits in a small project.

### Lesson sequence

| Order | Lesson title                        | Lesson role               | Main concept                              | Activity pattern                                                     | Practice output               | Bridge / prepares for       |
| ----- | ----------------------------------- | ------------------------- | ----------------------------------------- | -------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| 1     | Struktur HTML Dasar                 | Concept + guided practice | doctype, html, head, title, body, h1, p   | text, code-example, quick-check, coding-practice, summary            | Basic HTML page               | Tag, element, and attribute |
| 2     | Tag, Element, dan Attribute         | Concept + guided practice | tag, element, attribute, href, src, alt   | text, code-example, quick-check, coding-practice, summary            | Link and image snippet        | Visible content elements    |
| 3     | Heading, Paragraf, Link, dan Gambar | Content elements practice | h1/h2, p, a, img, alt                     | text, code-example, quick-check, coding-practice, summary            | Basic content page            | Paths used by href and src  |
| 4     | Relative Paths Dasar                | File reference practice   | simple relative paths for href and src    | text, file tree, code-example, quick-check, coding-practice, summary | Page using local links/images | Module assessment           |
| 5     | Uji Kompetensi HTML Basics          | Module assessment         | HTML document and basic content readiness | recap, quiz, coding-practice, summary                                | Build a small content page    | Semantic HTML               |

### Built-in practice pattern

* HTML editor practice
* Rule-based auto validation
* Live preview
* Simple checkable output
* No CSS/JS requirement except minimal preview support

### Documentation Bridge

Suggested docs:

* MDN: HTML basics
* MDN: What's in the head? Metadata in HTML
* MDN: HTML text fundamentals
* MDN: Creating hyperlinks
* MDN: Images in HTML

Focus:

* document structure
* head vs body
* headings and paragraphs
* links
* images
* alt text basics
* simple file paths

Ignore for now:

* advanced metadata
* SEO details
* responsive images
* advanced accessibility patterns

### Local Dev Milestone connection

No full local milestone yet.

HTML Basics prepares learners for the Local Static Website Project after early CSS.

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
* guided Documentation Bridge

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

| Order | Lesson title                     | Lesson role            | Main concept                                           | Activity pattern                                          | Practice output                | Bridge / prepares for         |
| ----- | -------------------------------- | ---------------------- | ------------------------------------------------------ | --------------------------------------------------------- | ------------------------------ | ----------------------------- |
| 1     | Struktur Semantic HTML           | Main concept           | semantic HTML means choosing elements by meaning       | text, code-example, quick-check, coding-practice, summary | Simple semantic page structure | Guided refactor practice      |
| 2     | Latihan Menerapkan Semantic HTML | Reinforcement practice | replace generic div structure with meaningful elements | text, case/example, coding-practice, self-review, summary | Refactored semantic page       | Module assessment             |
| 3     | Uji Kompetensi Semantic HTML     | Module assessment      | semantic structure readiness                           | recap, quiz, coding-practice, summary                     | Build/refactor semantic page   | Forms and Basic Accessibility |

### Built-in practice pattern

* Semantic HTML refactor tasks
* Rule-based checks for semantic regions
* Self-review checklist for heading hierarchy and meaning

### Documentation Bridge

Suggested docs:

* MDN: Document and website structure
* MDN: HTML sections and outlines
* MDN: HTML elements reference, only selected elements
* WAI: Page structure basics when appropriate

Focus:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `aside`
* `footer`
* heading hierarchy
* meaning over appearance

Ignore for now:

* ARIA landmarks in depth
* advanced accessibility audits
* SEO schema markup

### Local Dev Milestone connection

No full local milestone yet.

Semantic HTML becomes part of the Local Static Website Project later.

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
* guided Documentation Bridge

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

| Order | Lesson title                                 | Lesson role               | Main concept                                | Activity pattern                                          | Practice output                             | Bridge / prepares for |
| ----- | -------------------------------------------- | ------------------------- | ------------------------------------------- | --------------------------------------------------------- | ------------------------------------------- | --------------------- |
| 1     | Link vs Button                               | Decision rule             | navigation vs action                        | text, example, quick-check, summary                       | Learner can choose link or button correctly | Form controls         |
| 2     | Form, Label, dan Input                       | Concept + guided practice | form structure and label connection         | text, code-example, quick-check, coding-practice, summary | Basic accessible form                       | More field types      |
| 3     | Textarea, Select, dan Required Fields        | Guided practice           | larger text input, choices, required fields | text, code-example, quick-check, coding-practice, summary | Contact form fields                         | Useful error text     |
| 4     | Alt Text Dasar                               | Accessibility concept     | image description for non-visual context    | text, examples, quick-check, practice, summary            | Better image alt text                       | Keyboard basics       |
| 5     | Keyboard Navigation Dasar                    | Accessibility behavior    | tab order and focus                         | text, mini action, case study, self-review, summary       | Keyboard check of simple page               | Checklist             |
| 6     | Basic Accessibility Checklist                | Review / self-review      | first-layer accessibility review            | text, checklist, case study, summary                      | Accessibility review of a simple page       | Module assessment     |
| 7     | Uji Kompetensi Forms and Basic Accessibility | Module assessment         | form and accessibility readiness            | recap, quiz, coding-practice, checklist, summary          | Accessible signup/contact form              | CSS Fundamentals      |

### Built-in practice pattern

* Form markup practice
* Label/input connection checks
* Accessibility self-review checklist
* Keyboard observation tasks

### Documentation Bridge

Suggested docs:

* MDN: HTML forms
* MDN: The label element
* MDN: Button element
* MDN: Input element
* MDN: Textarea and select
* MDN: Accessibility basics
* WAI: Forms tutorial when appropriate

Focus:

* label/input connection
* link vs button
* form controls
* alt text
* keyboard navigation basics

Ignore for now:

* complex ARIA patterns
* custom select components
* advanced validation libraries

### Local Dev Milestone connection

Forms and accessibility are included later in the Local Static Website Project.

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
* guided Documentation Bridge

Readiness criteria:

Learner can build a simple accessible form and run a basic accessibility checklist.

### Notes

Keep this module hidden from the active track until its first lesson batch is ready.

---

# Level 3 (Beginner): CSS Fundamentals and Layout

## Goal

Style pages with predictable layout, responsive behavior, and maintainable CSS.

This level is implemented in the active curriculum through CSS Core Mechanics, Box Model and Spacing, Local Static Website Project, Flexbox and Grid Layout, and Responsive Visual System.

## Module: CSS Core Mechanics

### Module goal

Learners understand how CSS rules apply before building layouts.

### Prerequisite

Learner can write meaningful HTML structure.

### Planned lesson sequence

| Order | Lesson title                      | Lesson role         | Main concept                     | Activity pattern                                          | Practice output               | Bridge / prepares for |
| ----- | --------------------------------- | ------------------- | -------------------------------- | --------------------------------------------------------- | ----------------------------- | --------------------- |
| 1     | Apa Itu CSS?                      | Concept             | CSS controls visual presentation | text, example, quick-check, summary                       | Learner can identify CSS role | Selectors             |
| 2     | Selector dan Declaration Dasar    | Guided example      | selector, property, value        | text, code-example, quick-check, coding-practice, summary | Style a simple card           | Cascade               |
| 3     | Cascade dan Specificity Dasar     | Concept + debugging | why one rule wins                | text, callout, case study, practice, summary              | Fix conflicting CSS rules     | Box model             |
| 4     | Uji Kompetensi CSS Core Mechanics | Module assessment   | CSS rule basics                  | recap, quiz, debugging task, summary                      | Debug simple CSS              | Spacing and layout    |

### Built-in practice pattern

* CSS editor practice
* Visual preview
* Debugging small broken styles
* Rule-based checks when practical

### Documentation Bridge

Suggested docs:

* MDN: CSS basics
* MDN: CSS selectors
* MDN: Cascade and inheritance
* MDN: Specificity
* MDN: Values and units

Focus:

* selector
* declaration
* property
* value
* cascade
* specificity

Ignore for now:

* preprocessors
* CSS architecture
* browser compatibility tables unless needed

### Local Dev Milestone connection

No full local milestone yet.

CSS Core Mechanics prepares learners for Local Static Website Project after spacing/layout basics.

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
| 1     | Box Model Dasar                      | Concept           | content, padding, border, margin | text, visual/code example, quick-check, practice, summary | Inspect spacing of a card | Sizing                |
| 2     | Width, Height, dan box-sizing        | Guided practice   | sizing and box-sizing            | text, code-example, practice, summary                     | Predict card size         | Layout                |
| 3     | Spacing yang Konsisten               | Practice          | reusable spacing habits          | text, example, coding-practice, checklist, summary        | Clean card spacing        | Flexbox               |
| 4     | Uji Kompetensi Box Model and Spacing | Module assessment | spacing readiness                | recap, quiz, coding-practice, summary                     | Fix a broken layout       | Flexbox/Grid          |

### Built-in practice pattern

* Visual spacing practice
* Box model inspection
* Fix spacing bugs
* Checklist for consistent spacing

### Documentation Bridge

Suggested docs:

* MDN: Box model
* MDN: width
* MDN: height
* MDN: box-sizing
* MDN: margin
* MDN: padding

Focus:

* content box
* padding
* border
* margin
* `box-sizing: border-box`

Ignore for now:

* complex layout systems
* CSS reset debates
* design token systems

### Local Dev Milestone connection

This module prepares learners for Local Static Website Project.

### Uji Kompetensi

Assessment coverage:

* content, padding, border, margin
* `box-sizing`
* width and height basics
* spacing consistency
* fixing simple spacing bugs

Readiness criteria:

Learner can explain and fix spacing issues in a basic card or section.

## Module: Local Static Website Project

Status: active

### Module goal

Learners create and run a small static website on their own device.

### Prerequisite

Learner can write basic HTML, semantic structure, forms/accessibility basics, and early CSS.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role       | Main concept                        | Activity pattern                                    | Practice output              | Bridge / prepares for |
| ----- | ------------------------------------------- | ----------------- | ----------------------------------- | --------------------------------------------------- | ---------------------------- | --------------------- |
| 1     | Menyiapkan Folder Project Lokal             | Local setup       | create project folder and files     | text, checklist, local task, summary                | local project folder         | Code editor workflow  |
| 2     | Membuka Project di Code Editor              | Local workflow    | open folder, edit files             | text, mini action, checklist, summary               | project opened in editor     | Browser preview       |
| 3     | Menjalankan HTML di Browser                 | Local workflow    | open static HTML and inspect result | text, local task, checklist, summary                | local page opened in browser | DevTools              |
| 4     | DevTools Dasar untuk Static Page            | Tooling           | inspect elements and console        | text, case study, checklist, summary                | simple DevTools inspection   | Git                   |
| 5     | Menyimpan Project dengan Git dan GitHub     | Local workflow    | git init, commit, push              | text, command example, checklist, summary           | GitHub repository            | Module assessment     |
| 6     | Uji Kompetensi Local Static Website Project | Module assessment | local static workflow readiness     | recap, project checklist, writing-practice, summary | local static website repo    | Flexbox/Grid or JS    |

### Built-in practice pattern

* Mostly checklist and guided local tasks
* No heavy in-browser code practice required
* Writing practice for README/project note

### Documentation Bridge

Suggested docs:

* MDN: Getting started with the web
* GitHub Docs: Hello World / repositories
* VS Code docs only if needed
* MDN DevTools references when useful

Focus:

* create local files
* open HTML in browser
* use DevTools lightly
* commit and push

Ignore for now:

* npm
* bundlers
* deployment
* frameworks

### Local Dev Milestone connection

This is the first local milestone.

### Uji Kompetensi

Assessment coverage:

* folder setup
* local file editing
* browser preview
* basic DevTools inspection
* Git commit
* GitHub push
* short project explanation

Readiness criteria:

Learner can create a small local static website, open it in the browser, inspect it, and save it to GitHub.

## Module: Flexbox and Grid Layout

Status: active

### Module goal

Learners can build common one-dimensional and two-dimensional layouts.

### Prerequisite

Learner understands CSS box model and spacing.

### Planned lesson sequence

| Order | Lesson title                           | Lesson role        | Main concept                   | Activity pattern                                          | Practice output                | Bridge / prepares for |
| ----- | -------------------------------------- | ------------------ | ------------------------------ | --------------------------------------------------------- | ------------------------------ | --------------------- |
| 1     | Flexbox Dasar                          | Concept + practice | flex container, direction, gap | text, code-example, quick-check, coding-practice, summary | Simple horizontal layout       | Navbar                |
| 2     | Membuat Navbar dengan Flexbox          | Guided practice    | align items and spacing        | text, coding-practice, checklist, summary                 | Responsive-ish navbar          | Grid                  |
| 3     | Grid Dasar                             | Concept + practice | columns, rows, gap             | text, code-example, coding-practice, summary              | Card grid                      | Layout decisions      |
| 4     | Kapan Pakai Flexbox atau Grid?         | Decision rule      | layout choice                  | text, case study, quick-check, summary                    | Learner can choose layout tool | Module assessment     |
| 5     | Uji Kompetensi Flexbox and Grid Layout | Module assessment  | layout readiness               | recap, quiz, coding-practice, summary                     | Navbar + card grid             | Responsive design     |

### Built-in practice pattern

* Layout editor practice
* Preview-based visual feedback
* Checklist for layout correctness

### Documentation Bridge

Suggested docs:

* MDN: Flexbox
* MDN: Grid
* MDN: align-items
* MDN: justify-content
* MDN: gap
* MDN: grid-template-columns

Focus:

* choosing layout tool
* common layout properties
* readable layout implementation

Ignore for now:

* complex CSS architecture
* subgrid
* advanced grid placement

### Local Dev Milestone connection

Can optionally upgrade Local Static Website Project layout.

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

Status: active

### Module goal

Learners can make UI adapt across screen sizes with consistent visual rules.

### Prerequisite

Learner understands basic CSS layout.

### Planned lesson sequence

| Order | Lesson title                            | Lesson role        | Main concept                     | Activity pattern                                   | Practice output            | Bridge / prepares for |
| ----- | --------------------------------------- | ------------------ | -------------------------------- | -------------------------------------------------- | -------------------------- | --------------------- |
| 1     | Mobile-first CSS                        | Concept            | start from small screens         | text, example, quick-check, practice, summary      | Mobile-safe section        | Breakpoints           |
| 2     | Breakpoints Dasar                       | Guided practice    | media queries                    | text, code-example, coding-practice, summary       | Responsive card layout     | Fluid spacing         |
| 3     | Fluid Spacing dan Typography Dasar      | Practice           | readable spacing and text        | text, example, coding-practice, checklist, summary | Better reading layout      | Tokens                |
| 4     | CSS Variables dan Dark Mode Dasar       | Concept + practice | reusable values and theme basics | text, code-example, practice, summary              | Simple token-based section | Module assessment     |
| 5     | Uji Kompetensi Responsive Visual System | Module assessment  | responsive visual readiness      | recap, quiz, coding-practice, checklist, summary   | Responsive landing section | JavaScript            |

### Built-in practice pattern

* Responsive preview tasks
* CSS variables practice
* Visual checklist

### Documentation Bridge

Suggested docs:

* MDN: media queries
* MDN: responsive design
* MDN: CSS custom properties
* MDN: typography basics when useful

Focus:

* mobile-first thinking
* breakpoints
* responsive spacing
* CSS variables

Ignore for now:

* advanced design systems
* complex theming
* animation systems

### Local Dev Milestone connection

Can upgrade Local Static Website Project into a responsive static website.

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

| Order | Lesson title                                | Lesson role        | Main concept                                  | Activity pattern                                          | Practice output                     | Bridge / prepares for |
| ----- | ------------------------------------------- | ------------------ | --------------------------------------------- | --------------------------------------------------------- | ----------------------------------- | --------------------- |
| 1     | Apa Itu JavaScript di Browser?              | Concept            | JavaScript adds behavior                      | text, example, quick-check, summary                       | Learner can identify JS role        | Values                |
| 2     | Values dan Variables                        | Concept + practice | values, strings, numbers, booleans, variables | text, code-example, quick-check, coding-practice, summary | Store simple values                 | Expressions           |
| 3     | Functions Dasar                             | Guided practice    | reusable logic                                | text, code-example, coding-practice, summary              | Small formatter/calculator function | Conditionals          |
| 4     | Conditionals dan Loops Dasar                | Guided practice    | branching and repetition                      | text, examples, coding-practice, summary                  | Simple decision function            | Module assessment     |
| 5     | Uji Kompetensi Values, Types, and Functions | Module assessment  | JS basics readiness                           | recap, quiz, coding-practice, summary                     | Small utility functions             | Arrays and objects    |

### Built-in practice pattern

* Small JavaScript editor tasks
* Output prediction
* Console-style examples
* Deterministic code checks when safe

### Documentation Bridge

Suggested docs:

* MDN: JavaScript first steps
* MDN: variables
* MDN: data types
* MDN: functions
* MDN: conditionals
* MDN: loops

Focus:

* basic syntax
* values
* functions
* simple decisions

Ignore for now:

* async
* DOM APIs
* classes
* modules

### Local Dev Milestone connection

No local milestone yet. This module prepares for JavaScript project work later.

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

| Order | Lesson title                                      | Lesson role        | Main concept             | Activity pattern                                          | Practice output             | Bridge / prepares for |
| ----- | ------------------------------------------------- | ------------------ | ------------------------ | --------------------------------------------------------- | --------------------------- | --------------------- |
| 1     | Array Dasar untuk Data UI                         | Concept + practice | list of values           | text, code-example, coding-practice, summary              | Render or inspect list data | Objects               |
| 2     | Object Dasar untuk Satu Item                      | Concept + practice | object fields            | text, code-example, quick-check, coding-practice, summary | Model a card item           | Array of objects      |
| 3     | Array of Objects                                  | Guided practice    | list of structured items | text, code-example, coding-practice, summary              | Product/task list data      | Mapping/filtering     |
| 4     | map, filter, dan Data Transformasi Dasar          | Guided practice    | transform data for UI    | text, code-example, coding-practice, summary              | Filtered list               | Module assessment     |
| 5     | Uji Kompetensi Arrays, Objects, and Data Modeling | Module assessment  | UI data readiness        | recap, quiz, coding-practice, summary                     | Transform array of objects  | DOM/events            |

### Built-in practice pattern

* Data transformation tasks
* Array/object editing
* Output preview when possible

### Documentation Bridge

Suggested docs:

* MDN: arrays
* MDN: objects
* MDN: Array.prototype.map
* MDN: Array.prototype.filter
* MDN: Array.prototype.find

Focus:

* modeling data for UI
* transforming data safely

Ignore for now:

* advanced prototypes
* classes
* performance optimizations

### Local Dev Milestone connection

Prepares for Local Vanilla JavaScript App.

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

| Order | Lesson title                                                      | Lesson role        | Main concept                 | Activity pattern                                          | Practice output             | Bridge / prepares for |
| ----- | ----------------------------------------------------------------- | ------------------ | ---------------------------- | --------------------------------------------------------- | --------------------------- | --------------------- |
| 1     | DOM Selection Dasar                                               | Concept + practice | selecting elements           | text, code-example, quick-check, coding-practice, summary | Select and update page text | Events                |
| 2     | Event Click dan Input                                             | Guided practice    | responding to user action    | text, code-example, coding-practice, summary              | Interactive button/input    | Forms                 |
| 3     | Form Submit Dasar                                                 | Guided practice    | prevent default, read values | text, callout, coding-practice, summary                   | Simple form handler         | localStorage          |
| 4     | localStorage Dasar                                                | Concept + practice | save small browser data      | text, code-example, coding-practice, summary              | Save form value locally     | Fetch                 |
| 5     | Fetch dan JSON Dasar                                              | Concept + practice | request data and read JSON   | text, code-example, coding-practice, summary              | Load sample data            | Module assessment     |
| 6     | Uji Kompetensi DOM, Events, Forms, localStorage, and Fetch Basics | Module assessment  | browser behavior readiness   | recap, quiz, coding-practice, summary                     | Interactive data form/page  | Local Vanilla JS App  |

### Built-in practice pattern

* DOM preview tasks
* Event handling practice
* localStorage simulation
* Fetch examples using safe sample data

### Documentation Bridge

Suggested docs:

* MDN: DOM introduction
* MDN: querySelector
* MDN: addEventListener
* MDN: forms
* MDN: localStorage
* MDN: Fetch API
* MDN: JSON

Focus:

* connecting JS to browser behavior
* reading and writing data
* safe beginner fetch flow

Ignore for now:

* framework state management
* complex async patterns
* service workers

### Local Dev Milestone connection

Leads directly into Local Vanilla JavaScript App.

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

## Module: Local Vanilla JavaScript App

### Module goal

Learners build and run a small JavaScript app on their own device.

### Prerequisite

Learner understands DOM, events, forms, localStorage, and fetch basics.

### Planned lesson sequence

| Order | Lesson title                                       | Lesson role            | Main concept                 | Activity pattern                                    | Practice output         | Bridge / prepares for |
| ----- | -------------------------------------------------- | ---------------------- | ---------------------------- | --------------------------------------------------- | ----------------------- | --------------------- |
| 1     | Menyiapkan Project Vanilla JS Lokal                | Local setup            | folder, files, editor        | text, checklist, local task, summary                | local JS project folder | Running app           |
| 2     | Menghubungkan index.html, style.css, dan script.js | Local workflow         | connect files locally        | text, code-example, checklist, summary              | connected local app     | DOM feature           |
| 3     | Membuat Interaksi Pertama                          | Local build            | DOM + event in local project | text, local task, checklist, summary                | interactive local page  | localStorage          |
| 4     | Menyimpan Data Lokal                               | Local build            | localStorage in real files   | text, local task, checklist, summary                | saved data app          | Fetch                 |
| 5     | Membaca Dokumentasi saat Debugging                 | Documentation workflow | use MDN while fixing issue   | text, docs bridge, case study, summary              | debug note              | Assessment            |
| 6     | Uji Kompetensi Local Vanilla JavaScript App        | Module assessment      | local JS workflow readiness  | recap, project checklist, writing-practice, summary | local mini app repo     | JavaScript Advanced   |

### Built-in practice pattern

* Minimal built-in tasks
* Mostly local checklist and project guidance

### Documentation Bridge

Suggested docs:

* MDN DOM
* MDN events
* MDN localStorage
* MDN fetch
* GitHub docs for repository workflow

Focus:

* reading docs to solve concrete project issues
* debugging with DevTools

Ignore for now:

* npm
* frameworks
* bundlers

### Local Dev Milestone connection

This is a local milestone.

### Uji Kompetensi

Assessment coverage:

* local project setup
* HTML/CSS/JS file connection
* DOM event
* localStorage or fetch
* DevTools debugging
* GitHub push
* short project note

Readiness criteria:

Learner can build a small local JavaScript app and explain how the files work together.

---

# Level 5: JavaScript Advanced

## Goal

Handle async behavior, modules, browser APIs, data transformation, and debugging with more confidence.

At this level, learners move from writing JavaScript in one file to organizing code, handling asynchronous behavior safely, using browser APIs intentionally, and debugging problems with a clearer strategy.

This level should still use Vanilla JavaScript. Do not introduce TypeScript, React, framework tooling, bundlers, or advanced architecture yet.

---

## Module: Scope, Closure, and Modules

### Module goal

Learners understand how JavaScript controls variable access, how closures preserve state, and how to split a growing Vanilla JavaScript app into modules.

### Prerequisite

Learner can write basic JavaScript functions, use arrays and objects, handle DOM events, and has completed a simple Local Vanilla JavaScript App.

### Planned lesson sequence

| Order | Lesson title                               | Lesson role             | Main concept                                             | Activity pattern                                          | Practice output                                      | Bridge / prepares for |
| ----- | ------------------------------------------ | ----------------------- | -------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| 1     | Scope Dasar                                | Concept                 | global scope, function scope, block scope                | text, code-example, prediction task, quick-check, summary | Learner can predict whether a variable is accessible | Closures              |
| 2     | Closure dalam Contoh UI                    | Guided example          | function remembers outer variables                       | text, UI case study, code-example, practice, summary      | Counter or toggle state using closure                | Modules               |
| 3     | ES Modules dan import/export               | Concept + code reading  | `export`, `import`, named exports, default export basics | text, code-example, quick-check, summary                  | Learner can read simple module imports               | File splitting        |
| 4     | Memecah File JavaScript                    | Local refactor practice | separating DOM, state, and utility code                  | text, before/after example, local task checklist, summary | Refactor one script into smaller files               | Assessment            |
| 5     | Uji Kompetensi Scope, Closure, and Modules | Module assessment       | scope, closure, module boundaries                        | recap, quiz, refactor task, documentation bridge, summary | Explain and refactor small JavaScript modules        | Async modules         |

### Built-in practice pattern

* Scope prediction tasks.
* Closure examples using small UI behavior.
* Import/export reading exercises.
* Local refactor checklist for splitting a single `app.js` file into smaller module files.
* No bundler required; use browser-supported ES modules with `<script type="module">`.

### Documentation Bridge

Suggested docs:

* MDN: Closures
* MDN: JavaScript modules
* MDN: import
* MDN: export

Focus:

* lexical scope
* closure behavior
* why closures preserve access to outer variables
* module files
* named exports and imports
* using `type="module"` in the browser

Ignore for now:

* bundlers
* package publishing
* tree shaking
* advanced module resolution
* CommonJS
* circular dependencies

### Local Dev Milestone connection

Upgrade the Local Vanilla JavaScript App by splitting one large script into small files, for example:

* `main.js`
* `dom.js`
* `state.js`
* `storage.js`
* `utils.js`

The learner should understand why the split was made and what each file is responsible for.

### Uji Kompetensi

Assessment coverage:

* global scope
* function scope
* block scope
* closure in a UI example
* reading `import` and `export`
* deciding what belongs in each module file
* refactoring one large script into smaller module boundaries

Readiness criteria:

Learner can explain where a variable is accessible, recognize a closure in a small UI example, and split a basic Vanilla JavaScript app into readable module files without introducing a bundler.

---

## Module: Async JavaScript and Error Handling

### Module goal

Learners can handle asynchronous JavaScript with clearer control flow, safer error handling, and user-friendly UI states.

### Prerequisite

Learner understands functions, arrays, objects, DOM events, basic `fetch`, and can organize JavaScript into simple module files.

### Planned lesson sequence

| Order | Lesson title                                       | Lesson role         | Main concept                                | Activity pattern                                              | Practice output                                 | Bridge / prepares for |
| ----- | -------------------------------------------------- | ------------------- | ------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------- | --------------------- |
| 1     | Promise Dasar                                      | Concept             | pending, fulfilled, rejected                | text, timeline example, prediction task, quick-check, summary | Learner can explain Promise states              | async/await           |
| 2     | async / await                                      | Guided practice     | writing async flow that reads top-to-bottom | text, code-example, small refactor, practice, summary         | Convert `.then()` flow to `async/await`         | try/catch             |
| 3     | try / catch                                        | Concept + debugging | catching failed async operations            | text, broken example, fix task, quick-check, summary          | Add error handling around async code            | UI states             |
| 4     | Loading, Error, Empty, dan Success State           | UI pattern lesson   | showing honest UI states                    | text, case study, coding-practice, checklist, summary         | Render loading/error/empty/success states       | Retry                 |
| 5     | Retry Dasar                                        | Guided example      | retrying failed actions safely              | text, example, practice, callout, summary                     | Add a retry button for failed request           | Assessment            |
| 6     | Uji Kompetensi Async JavaScript and Error Handling | Module assessment   | async flow and failure handling             | recap, quiz, debugging task, documentation bridge, summary    | Fix async UI flow with loading and error states | Browser API debugging |

### Built-in practice pattern

* Promise state prediction.
* Refactor `.then()` into `async/await`.
* Add `try/catch` around async functions.
* Build small loading, error, empty, and success UI states.
* Debug failed request examples.
* Add a basic retry interaction.

### Documentation Bridge

Suggested docs:

* MDN: Promise
* MDN: async function
* MDN: await
* MDN: try...catch
* MDN: Fetch API error handling references

Focus:

* Promise states
* readable async flow
* rejected promises
* `try/catch` with `async/await`
* UI states for async operations
* handling failed requests honestly

Ignore for now:

* advanced concurrency
* cancellation with AbortController
* queues
* streams
* complex retry/backoff algorithms
* service workers

### Local Dev Milestone connection

Upgrade the Local Vanilla JavaScript App so it shows clearer async states:

* loading while data is being requested
* empty state when no data is available
* error state when request fails
* success state when data renders correctly
* retry button for a failed request

### Uji Kompetensi

Assessment coverage:

* Promise states
* `async/await`
* `try/catch`
* loading state
* error state
* empty state
* success state
* failed request handling
* basic retry behavior
* explaining what happens when an async operation fails

Readiness criteria:

Learner can write a small async function, handle failures with `try/catch`, display honest UI states, and explain what the user sees when a request is loading, empty, successful, or failed.

---

## Module: Browser APIs, Data Transformation, and Debugging

### Module goal

Learners can use selected browser APIs, transform data before rendering it, and debug browser-based JavaScript problems with a repeatable strategy.

### Prerequisite

Learner can write modular Vanilla JavaScript, handle async behavior, render DOM updates, and use basic DevTools.

### Planned lesson sequence

| Order | Lesson title                              | Lesson role        | Main concept                                     | Activity pattern                                                             | Practice output                                  | Bridge / prepares for |
| ----- | ----------------------------------------- | ------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------ | --------------------- |
| 1     | URL dan Timer API Dasar                   | Concept + practice | `URL`, query params, `setTimeout`, `setInterval` | text, code-example, mini task, quick-check, summary                          | Read URL params or run a simple timer            | Storage patterns      |
| 2     | Clipboard dan Storage Patterns            | Guided practice    | Clipboard API, localStorage patterns             | text, example, practice, troubleshooting callout, summary                    | Copy text or persist small UI state              | Data transformation   |
| 3     | Transformasi Data untuk UI                | Practice           | map, filter, sort, normalize data for display    | text, before/after data example, coding-practice, summary                    | Transform raw data into render-ready data        | Network debugging     |
| 4     | Network Debugging                         | Tooling lesson     | inspect requests and responses                   | text, case study, local task checklist, documentation bridge, summary        | Use Network panel to inspect failed data loading | Breakpoints           |
| 5     | Breakpoints dan Console Strategy          | Debugging lesson   | isolate bugs using console and breakpoints       | text, debugging case study, practice, checklist, summary                     | Explain a bug and fix path                       | Assessment            |
| 6     | Uji Kompetensi Browser APIs and Debugging | Module assessment  | APIs, data transformation, debugging strategy    | recap, quiz, debugging task, writing-practice, documentation bridge, summary | Debug and explain a browser JS issue             | TypeScript readiness  |

### Built-in practice pattern

* Browser API mini tasks.
* Data transformation exercises using arrays of objects.
* Debugging case studies.
* Network panel inspection tasks.
* Console and breakpoint strategy tasks.
* Writing practice for explaining a bug and fix.

### Documentation Bridge

Suggested docs:

* MDN: URL API
* MDN: URLSearchParams
* MDN: setTimeout
* MDN: setInterval
* MDN: Clipboard API
* MDN: Web Storage API
* Chrome DevTools: Network panel
* Chrome DevTools: JavaScript debugging / breakpoints

Focus:

* reading URL values
* using simple timers
* copying text safely
* storing small values in localStorage
* transforming data before rendering
* inspecting failed network requests
* using console intentionally
* using breakpoints to pause code

Ignore for now:

* Web Workers
* IndexedDB
* advanced performance profiling
* memory debugging
* browser extension APIs
* advanced security permissions
* complex offline behavior

### Local Dev Milestone connection

Perform a debugging pass on the Local Vanilla JavaScript App:

* inspect one request in the Network panel
* identify one failed or suspicious state
* transform raw data before rendering
* add one browser API feature if useful
* explain the bug or improvement in the project README

### Uji Kompetensi

Assessment coverage:

* URL API basics
* timer basics
* Clipboard API use case
* localStorage pattern
* transforming array/object data for UI
* Network panel inspection
* console strategy
* breakpoint strategy
* isolating a bug
* explaining a fix clearly

Readiness criteria:

Learner can use selected browser APIs safely, transform data before rendering, inspect browser behavior with DevTools, isolate a bug, and explain the fix in beginner-friendly terms.

---

## Level 5 completion readiness

Learner is ready to move beyond JavaScript Advanced when they can:

* explain variable access using scope
* recognize closure behavior in UI code
* split JavaScript into small module files
* handle async behavior with `async/await`
* show loading, error, empty, and success UI states
* use basic retry behavior without hiding failure
* use selected browser APIs intentionally
* transform data before rendering
* inspect network behavior
* use console and breakpoints to isolate bugs
* explain a bug and fix clearly

Next level can introduce TypeScript only after the learner can reason about JavaScript structure, async behavior, browser APIs, and debugging without relying on a framework.

# Level 6: TypeScript

## Goal

Use TypeScript to make frontend code safer without overcomplicating it.

At this level, learners start using modern local tooling and TypeScript to catch mistakes earlier, describe data more clearly, and prepare for React development.

This level should stay practical. Do not turn TypeScript into advanced type puzzles. Focus on everyday frontend use cases: values, objects, functions, UI state, API responses, and readable type boundaries.

---

## Module: Local Tooling and npm Basics

### Module goal

Learners understand the local tooling needed before modern TypeScript and React projects.

### Prerequisite

Learner has built simple local HTML, CSS, and JavaScript projects and has used Git/GitHub at a beginner level.

### Planned lesson sequence

| Order | Lesson title                                  | Lesson role           | Main concept                                             | Activity pattern                                                                         | Practice output                                                      | Bridge / prepares for |
| ----- | --------------------------------------------- | --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------- |
| 1     | Apa Itu Node.js dan npm?                      | Concept               | Node.js as local JavaScript runtime, npm as package tool | text, analogy, tool prerequisite note, quick-check, summary                              | Learner can explain why modern frontend projects need Node/npm       | Version check         |
| 2     | Mengecek `node -v` dan `npm -v`               | Local setup           | checking installed tools                                 | text, command walkthrough, troubleshooting callout, checklist, summary                   | Learner confirms Node/npm are available locally                      | package.json          |
| 3     | `package.json` Dasar                          | Code reading          | project metadata and scripts                             | text, code-example, package.json inspection, quick-check, summary                        | Learner can identify name, scripts, dependencies                     | npm commands          |
| 4     | `npm install` dan `npm run`                   | Guided local workflow | installing dependencies and running scripts              | text, command walkthrough, local checklist, troubleshooting, summary                     | Learner can run an existing project script                           | Dependencies          |
| 5     | Dependency vs Dev Dependency secara Sederhana | Concept + inspection  | runtime vs development tools                             | text, code-example, package.json comparison, quick-check, summary                        | Learner can distinguish dependency and devDependency in common cases | Assessment            |
| 6     | Uji Kompetensi Local Tooling and npm Basics   | Module assessment     | local tooling readiness                                  | recap, quiz, package.json reading task, local self-review, documentation bridge, summary | Learner confirms tooling readiness for TypeScript projects           | TypeScript setup      |

### Built-in practice pattern

* Command reading tasks.
* `package.json` inspection.
* Local checklist/self-review.
* Troubleshooting callouts for common beginner issues.
* No fake validation for local installations.
* No framework setup yet unless a later lesson explicitly needs it.

### Documentation Bridge

Suggested docs:

* Node.js official docs
* npm docs: `package.json`
* npm docs: scripts
* npm docs: dependencies and devDependencies
* Vite docs only as future context, not required in this module

Focus:

* what Node.js is used for in frontend tooling
* what npm does
* how to check installed versions
* how `package.json` describes a project
* how `npm install` and `npm run` fit into local workflow

Ignore for now:

* publishing npm packages
* monorepos
* workspaces
* package manager debates
* advanced npm config
* bundler internals

### Local Dev Milestone connection

Learner confirms their local tooling is ready before TypeScript projects:

* Node.js installed
* npm available
* terminal can run `node -v`
* terminal can run `npm -v`
* learner can inspect `package.json`
* learner can run a project script

### Uji Kompetensi

Assessment coverage:

* purpose of Node.js
* purpose of npm
* checking Node/npm versions
* `package.json`
* scripts
* `npm install`
* `npm run`
* dependency vs devDependency
* local troubleshooting basics

Readiness criteria:

Learner can explain why Node/npm are needed for modern frontend projects, inspect a simple `package.json`, run basic npm commands, and troubleshoot the most common beginner setup problems without assuming the app can verify their machine.

---

## Module: TypeScript Core Types

### Module goal

Learners understand TypeScript as JavaScript with type checking and can type everyday values, arrays, objects, and functions.

### Prerequisite

Learner understands JavaScript values, arrays, objects, functions, and has basic local tooling readiness.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role        | Main concept                               | Activity pattern                                              | Practice output                                 | Bridge / prepares for |
| ----- | ------------------------------------ | ------------------ | ------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------- | --------------------- |
| 1     | Apa Itu TypeScript?                  | Concept            | TypeScript catches mistakes before runtime | text, JS vs TS example, quick-check, summary                  | Learner can explain why TypeScript helps        | Primitive types       |
| 2     | Primitive Types dan Arrays           | Guided example     | `string`, `number`, `boolean`, arrays      | text, code-example, type editing task, quick-check, summary   | Type simple values and arrays                   | Object types          |
| 3     | Object Types                         | Concept + practice | object shape and property types            | text, code-example, coding-practice, summary                  | Type a user/product/card object                 | Function types        |
| 4     | Function Types                       | Guided practice    | parameter types and return types           | text, code-example, fix type error task, summary              | Type small helper functions                     | Optional fields       |
| 5     | Optional Fields                      | Concept + UI case  | optional properties and safe access        | text, case study, type error reading, quick-check, summary    | Model data that may be incomplete               | Assessment            |
| 6     | Uji Kompetensi TypeScript Core Types | Module assessment  | everyday TypeScript basics                 | recap, quiz, type editing task, documentation bridge, summary | Fix basic type errors and explain object shapes | Type design           |

### Built-in practice pattern

* Type editing tasks.
* Type error reading.
* Small object modeling tasks.
* Function parameter/return exercises.
* Safe optional field examples.
* Keep examples close to frontend data, such as user cards, product cards, todo items, and form values.

### Documentation Bridge

Suggested docs:

* TypeScript Handbook: Everyday Types
* TypeScript Handbook: Object Types
* TypeScript Handbook: More on Functions
* TypeScript Playground

Focus:

* primitive types
* arrays
* object shapes
* function parameters
* return types
* optional properties
* reading simple type errors

Ignore for now:

* advanced generics
* conditional types
* mapped types
* declaration files
* complex compiler configuration
* type-level programming

### Local Dev Milestone connection

Optional local TypeScript playground/project:

* learner can read simple `.ts` examples
* learner can use TypeScript Playground or local tooling
* learner can identify type errors before runtime

This module may use built-in practice if local TypeScript setup is not yet ready.

### Uji Kompetensi

Assessment coverage:

* TypeScript purpose
* primitive types
* arrays
* object types
* function parameter types
* function return types
* optional fields
* reading beginner type errors

Readiness criteria:

Learner can add basic types to everyday frontend values, understand common TypeScript error messages, and explain how types describe the shape of data.

---

## Module: Practical Type Design

### Module goal

Learners can design practical TypeScript types for UI states, branching logic, reusable helpers, and safer frontend data modeling.

### Prerequisite

Learner can type primitive values, arrays, objects, functions, and optional fields.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role                | Main concept                                        | Activity pattern                                                   | Practice output                                     | Bridge / prepares for    |                   |
| ----- | ------------------------------------ | -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- | ------------------------ | ----------------- |
| 1     | Union Types                          | Concept                    | values with limited possible options                | text, code-example, type editing task, quick-check, summary        | Model status values like `"loading"` or `"success"` | Narrowing                |                   |
| 2     | Narrowing                            | Guided practice            | checking before using a value                       | text, broken example, fix task, summary                            | Safely handle `string                               | null` or multiple states | UI state modeling |
| 3     | Discriminated Union untuk UI State   | UI modeling lesson         | state objects with a shared discriminant            | text, case study, coding-practice, summary                         | Model loading/error/success UI state                | Generics                 |                   |
| 4     | Generics Dasar                       | Concept + practical helper | reusable types/functions                            | text, simple helper example, quick-check, summary                  | Create a reusable response/result type              | Utility types            |                   |
| 5     | Utility Types Dasar                  | Guided example             | `Pick`, `Omit`, `Partial`, `Record` in simple cases | text, code-example, type reading task, summary                     | Reuse existing object types safely                  | Assessment               |                   |
| 6     | Uji Kompetensi Practical Type Design | Module assessment          | practical type modeling                             | recap, quiz, UI state modeling task, documentation bridge, summary | Model safe UI state and reusable helper types       | Frontend boundaries      |                   |

### Built-in practice pattern

* Union/narrowing tasks.
* UI state modeling exercises.
* Type error reading.
* Small generic helper examples.
* Utility type reading tasks.
* Avoid clever or overly abstract type challenges.

### Documentation Bridge

Suggested docs:

* TypeScript Handbook: Union Types
* TypeScript Handbook: Narrowing
* TypeScript Handbook: Generics
* TypeScript Handbook: Utility Types

Focus:

* union types
* narrowing with checks
* discriminated unions for UI state
* simple generic functions/types
* common utility types in readable cases
* avoiding unsafe casts

Ignore for now:

* advanced conditional types
* infer keyword
* recursive types
* complex generic constraints
* type-level programming
* clever one-line types

### Local Dev Milestone connection

Model state in a local or built-in project:

* loading state
* error state
* empty state
* success state
* selected item state
* reusable API result type

The learner should be able to explain why the type makes invalid states harder to represent.

### Uji Kompetensi

Assessment coverage:

* unions
* narrowing
* discriminated union for UI states
* generic helper basics
* utility type basics
* avoiding unsafe casts
* explaining why a type design is safer

Readiness criteria:

Learner can model common frontend states with TypeScript, narrow values safely, use simple generics, and avoid reaching for `as` or `any` as the first solution.

---

## Module: Typed Frontend Boundaries

### Module goal

Learners can use TypeScript at important frontend boundaries: API responses, form/input data, reusable functions, and component-ready data shapes.

### Prerequisite

Learner can design practical TypeScript types using unions, narrowing, simple generics, and utility types.

### Planned lesson sequence

| Order | Lesson title                             | Lesson role        | Main concept                                   | Activity pattern                                                           | Practice output                                            | Bridge / prepares for  |
| ----- | ---------------------------------------- | ------------------ | ---------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| 1     | Typing API Responses                     | Concept + practice | describing data from outside the app           | text, code-example, API type task, callout, summary                        | Type a response object before rendering it                 | Form/input data        |
| 2     | Typing Form dan Input Data               | Guided practice    | values coming from user input                  | text, form data example, type editing task, summary                        | Type simple form values and validation result              | Component props        |
| 3     | Component-Ready Data Shapes              | React preparation  | shaping data before passing it to UI pieces    | text, before/after example, practice, summary                              | Create a clean UI data type from raw data                  | Reusable logic         |
| 4     | Typing Reusable Frontend Logic           | Guided example     | typed helper return values and result objects  | text, code-example, fix task, summary                                      | Type a reusable function that returns success/error result | Keeping types readable |
| 5     | Keeping Types Readable                   | Decision rule      | when to inline, name, split, or simplify types | text, case study, refactor task, checklist, summary                        | Refactor confusing types into readable ones                | Assessment             |
| 6     | Uji Kompetensi Typed Frontend Boundaries | Module assessment  | safe frontend boundaries                       | recap, quiz, API/form/type readability task, documentation bridge, summary | Type data boundaries without overcomplicating them         | React readiness        |

### Built-in practice pattern

* API type tasks.
* Form/input type tasks.
* Transform raw data into UI-ready data.
* Typed helper return values.
* Type readability refactor tasks.
* Optional React terminology as preparation only, not React implementation.

### Documentation Bridge

Suggested docs:

* TypeScript Handbook: Everyday Types
* TypeScript Handbook: Object Types
* TypeScript Handbook: Narrowing
* TypeScript Handbook: Generics
* TypeScript Handbook: Utility Types
* React TypeScript references only as preview or bridge when appropriate

Focus:

* API response types
* user input/form value types
* UI-ready data shapes
* helper return types
* safe boundaries
* readable type naming
* avoiding `any`
* avoiding unsafe casts unless there is a clear reason

Ignore for now:

* React implementation details
* advanced custom hooks
* complex component patterns
* runtime schema validation libraries
* code generation
* backend contract tooling
* advanced type architecture

### Local Dev Milestone connection

Prepare a Vanilla JavaScript or TypeScript-ready app for React by making data boundaries clearer:

* define API response types
* define UI-ready data types
* define form/input types
* define reusable helper return types
* write a short note explaining where data enters the app and how it becomes safer before rendering

### Uji Kompetensi

Assessment coverage:

* API response types
* form/input data types
* transforming raw data into UI-ready data
* typed helper return values
* readable type boundaries
* avoiding unsafe `any`
* avoiding unnecessary type complexity
* preparing data shapes for future React components

Readiness criteria:

Learner can type important frontend data boundaries, keep types readable, avoid unsafe shortcuts, and prepare data shapes that will be easier to use in React.

---

## Level 6 completion readiness

Learner is ready to move into React when they can:

* explain why modern frontend projects use Node/npm tooling
* inspect `package.json`
* run basic npm commands
* explain what TypeScript adds to JavaScript
* type primitive values, arrays, objects, and functions
* read beginner TypeScript errors
* model optional fields safely
* use union types and narrowing
* model loading/error/success UI states
* use simple generics and common utility types
* type API responses and user input data
* keep types readable instead of overengineering them
* avoid `any` and unsafe casts as the first solution

Next level can introduce React after the learner can use TypeScript to describe data, state, and frontend boundaries clearly.

# Level 7: React Fundamentals

## Goal

Build interactive UI with components, props, state, events, lists, forms, and basic local React workflow.

At this level, learners move from Vanilla JavaScript UI updates to React’s component model. The focus is understanding how React thinks about UI: components receive data through props, remember changing values with state, respond to events, render lists, and handle forms.

This level should stay focused on React fundamentals. Do not introduce Next.js, routing, global state libraries, server components, advanced performance optimization, or complex architecture yet.

---

## Module: Component Model

### Module goal

Learners understand React components as reusable UI pieces and can build small component trees with JSX, props, and children.

### Prerequisite

Learner understands HTML, CSS, JavaScript functions, objects, arrays, TypeScript basics, and the idea of splitting code into modules.

### Planned lesson sequence

| Order | Lesson title                   | Lesson role        | Main concept                                | Activity pattern                                                      | Practice output                                  | Bridge / prepares for |
| ----- | ------------------------------ | ------------------ | ------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------ | --------------------- |
| 1     | Apa Itu Component?             | Concept            | UI as small reusable pieces                 | text, visual analogy, code-example, quick-check, summary              | Learner can identify components in a UI          | JSX                   |
| 2     | JSX Dasar                      | Guided example     | writing markup inside JavaScript/TypeScript | text, JSX vs HTML comparison, code editing task, quick-check, summary | Convert simple HTML-like UI into JSX             | Props                 |
| 3     | Props dan Children             | Concept + practice | passing data into components                | text, code-example, props practice, summary                           | Build reusable Card/Button components with props | Component splitting   |
| 4     | Splitting UI into Components   | Refactor practice  | breaking one UI into smaller components     | text, before/after refactor, practice, checklist, summary             | Split a profile/card/list UI into components     | Assessment            |
| 5     | Uji Kompetensi Component Model | Module assessment  | component structure and reusable UI         | recap, quiz, component editing task, documentation bridge, summary    | Build and explain a small component tree         | State and events      |

### Built-in practice pattern

* Component editing tasks.
* JSX correction tasks.
* Props practice with small UI cards.
* Children practice for wrapper components.
* Refactor tasks that split one large UI into smaller components.
* Small UI preview where learner can see component output.

### Documentation Bridge

Suggested docs:

* React Learn: Your First Component
* React Learn: Writing Markup with JSX
* React Learn: JavaScript in JSX with Curly Braces
* React Learn: Passing Props to a Component
* React Learn: Conditional Rendering only as preview, not deep coverage yet

Focus:

* component functions
* JSX basics
* differences between JSX and HTML
* props as data passed into components
* children as nested UI
* reusable Card/Button components

Ignore for now:

* hooks
* effects
* routing
* server components
* context
* memoization
* advanced TypeScript React patterns
* styling architecture

### Local Dev Milestone connection

Prepares for Local React App by making learners comfortable reading and editing component files before they run a full React project locally.

### Uji Kompetensi

Assessment coverage:

* identifying components
* JSX syntax basics
* className instead of class
* expressions in JSX
* props
* children
* splitting UI into smaller components
* reusable card/button components

Readiness criteria:

Learner can read a simple React component, explain what JSX returns, pass data through props, use children for nested content, and split a small UI into meaningful reusable components.

---

## Module: State, Events, and Rendering

### Module goal

Learners can make React UI interactive using state, event handlers, conditional rendering, lists, keys, and derived display values.

### Prerequisite

Learner understands React components, JSX, props, children, JavaScript arrays, functions, and basic TypeScript types.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role          | Main concept                                              | Activity pattern                                                | Practice output                                      | Bridge / prepares for |
| ----- | ------------------------------------------- | -------------------- | --------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| 1     | `useState` Dasar                            | Concept + practice   | component memory                                          | text, counter example, coding-practice, quick-check, summary    | Build a simple counter/toggle                        | Events                |
| 2     | Event Handling                              | Guided practice      | responding to user actions                                | text, code-example, click/input task, summary                   | Add button and input interactions                    | Conditional rendering |
| 3     | Conditional Rendering                       | Concept + UI pattern | showing different UI based on state                       | text, example, practice, quick-check, summary                   | Show empty/success/error-like UI                     | Lists                 |
| 4     | Lists and Keys                              | Guided practice      | rendering arrays with stable keys                         | text, map example, list task, callout, summary                  | Render a list of cards/items                         | Derived display       |
| 5     | Derived Display                             | Decision rule        | calculate display from state instead of duplicating state | text, case study, refactor task, checklist, summary             | Show filtered/count/summary text from existing state | Assessment            |
| 6     | Uji Kompetensi State, Events, and Rendering | Module assessment    | interactive rendering                                     | recap, quiz, interactive UI task, documentation bridge, summary | Build a small interactive list UI                    | Forms                 |

### Built-in practice pattern

* State change tasks.
* Button click/event handling tasks.
* Conditional rendering examples.
* Render list tasks using arrays.
* Key selection practice.
* Derived display refactor tasks.
* Avoid `useEffect` in this module unless absolutely necessary.

### Documentation Bridge

Suggested docs:

* React Learn: State: A Component's Memory
* React Learn: Responding to Events
* React Learn: Conditional Rendering
* React Learn: Rendering Lists
* React Learn: Choosing the State Structure

Focus:

* `useState`
* event handler functions
* rendering different UI based on state
* using `map` to render lists
* choosing stable keys
* deriving display values from existing state
* avoiding duplicate state when possible

Ignore for now:

* `useEffect`
* data fetching
* reducers
* context
* external state libraries
* advanced rendering performance
* server/client boundaries

### Local Dev Milestone connection

Prepares for Local React App by making learners comfortable building interactive features before moving into a full local React project.

### Uji Kompetensi

Assessment coverage:

* `useState`
* state updates
* event handlers
* conditional rendering
* rendering lists
* keys
* derived display values
* avoiding unnecessary duplicate state

Readiness criteria:

Learner can build a small interactive React UI that responds to events, updates state, renders conditional content, renders lists with keys, and derives display output from existing state.

---

## Module: Forms and Composition

### Module goal

Learners can build simple controlled forms, handle submit events, compose components, and move state only when needed.

### Prerequisite

Learner understands components, props, children, state, events, conditional rendering, and rendering lists.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role        | Main concept                           | Activity pattern                                                 | Practice output                          | Bridge / prepares for |
| ----- | ------------------------------------ | ------------------ | -------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------- | --------------------- |
| 1     | Controlled Inputs                    | Guided practice    | input value controlled by state        | text, code-example, form editing task, quick-check, summary      | Build a controlled text input            | Submit                |
| 2     | Form Submit                          | Concept + practice | handling submit without page reload    | text, event example, practice, troubleshooting callout, summary  | Submit a small form and add item to list | Composition           |
| 3     | Composition Patterns                 | Concept            | combining small components cleanly     | text, card/form/list example, refactor task, summary             | Compose form, list, and item components  | Lifting state         |
| 4     | Lifting State When Needed            | Decision rule      | moving state to closest shared parent  | text, case study, practice, checklist, summary                   | Share form/list state between components | Assessment            |
| 5     | Uji Kompetensi Forms and Composition | Module assessment  | form handling and component boundaries | recap, quiz, controlled form task, documentation bridge, summary | Build a small form-driven component flow | Local React App       |

### Built-in practice pattern

* Controlled input tasks.
* Form submit tasks.
* Prevent default behavior examples.
* Composition refactor examples.
* Lifting state decision tasks.
* Small form-to-list UI practice.
* Keep validation simple and local; do not add form libraries.

### Documentation Bridge

Suggested docs:

* React Learn: Reacting to Input with State
* React Learn: Sharing State Between Components
* React Learn: Choosing the State Structure
* React Learn: Passing Props to a Component
* React Learn: Thinking in React

Focus:

* controlled inputs
* `onSubmit`
* `event.preventDefault()`
* form state
* component composition
* when state belongs in parent or child
* keeping component boundaries understandable

Ignore for now:

* form libraries
* schema validation libraries
* server actions
* complex multi-step forms
* advanced accessibility patterns beyond basics already learned
* global state management

### Local Dev Milestone connection

Leads directly to Local React App. Learner should be ready to build a small local React app with components, state, events, lists, and forms.

### Uji Kompetensi

Assessment coverage:

* controlled inputs
* form submit
* preventing page reload
* composition
* passing form data through props
* lifting state when needed
* choosing simple state boundaries

Readiness criteria:

Learner can build a simple controlled form, submit it safely, update UI from form data, compose multiple components, and explain why state lives in a specific component.

---

## Module: Local React App

### Module goal

Learners create and run their first React app locally, understand the basic file structure, edit components, use props/state/events, and save the project to GitHub.

### Prerequisite

Learner understands components, JSX, props, children, state, events, lists, basic forms, npm basics, and beginner TypeScript.

### Planned lesson sequence

| Order | Lesson title                               | Lesson role           | Main concept                                         | Activity pattern                                                                 | Practice output                         | Bridge / prepares for |
| ----- | ------------------------------------------ | --------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------- | --------------------- |
| 1     | Membuat React Project Lokal                | Local setup           | create a React project with a beginner-friendly tool | tool prerequisite note, command walkthrough, checklist, troubleshooting, summary | React project folder created locally    | Dev server            |
| 2     | Menjalankan `npm run dev`                  | Local workflow        | start development server                             | text, command walkthrough, browser check, troubleshooting, summary               | React app running in browser            | src structure         |
| 3     | Mengenal Struktur `src`                    | Code reading          | entry file, App component, assets/styles             | text, folder walkthrough, code-example, checklist, summary                       | Learner can identify main files         | First component       |
| 4     | Membuat Component Pertama di Local Project | Guided local practice | create and import a component file                   | text, code-example, local task, summary                                          | New component rendered in App           | State/events          |
| 5     | Menambahkan State dan Event                | Guided local practice | use state and event in local project                 | text, code-example, local task, troubleshooting, summary                         | Interactive component in local app      | GitHub                |
| 6     | Menyimpan Project ke GitHub                | Local workflow        | commit and push React app                            | command walkthrough, checklist, GitHub resource link, troubleshooting, summary   | Local React app saved to GitHub         | Assessment            |
| 7     | Uji Kompetensi Local React App             | Module assessment     | local React workflow readiness                       | recap, quiz, project checklist, writing-practice, documentation bridge, summary  | Explain and share first local React app | React intermediate    |

### Built-in practice pattern

* Minimal built-in coding practice.
* Mostly local workflow support.
* Tool prerequisite notes.
* Command walkthroughs.
* Local task checklists.
* Troubleshooting callouts.
* Writing practice for explaining the project.
* Honest self-review; the app should not pretend to verify local files.
* Use TypeScript lightly if the chosen setup uses a TypeScript template.

### Documentation Bridge

Suggested docs:

* React Learn: Start a New React Project
* React Learn: Your First Component
* React Learn: State: A Component's Memory
* Vite docs, if Vite is used for project creation
* npm docs: scripts
* GitHub Docs: repositories and commit basics

Focus:

* creating a local React project
* running a development server
* understanding `src`
* editing `App`
* creating component files
* using props/state/events in a local project
* committing and pushing project to GitHub

Ignore for now:

* Next.js
* React Router
* data fetching architecture
* deployment
* environment variables
* testing setup
* advanced build configuration
* global state libraries

### Local Dev Milestone connection

This is a local milestone.

Learner creates a small React app locally, runs it in the browser, edits components, adds interaction, commits the project, pushes it to GitHub, and explains what they built.

Recommended project shape:

* simple profile card app
* small todo/list app
* mini product/card gallery
* form-to-list app

Keep the project small enough that the learner focuses on React workflow, not product complexity.

### Uji Kompetensi

Assessment coverage:

* creating project locally
* running dev server
* identifying main `src` files
* editing `App`
* creating a component
* passing simple props
* using state
* handling events
* committing to Git
* pushing to GitHub
* explaining the project

Readiness criteria:

Learner can run a React project locally, explain the basic file structure, create and import a component, use simple props/state/events, commit the project, push it to GitHub, and describe what the app does in beginner-friendly language.

---

## Level 7 completion readiness

Learner is ready to move into React Intermediate when they can:

* explain what a React component is
* write basic JSX
* pass props into components
* use children for nested UI
* split UI into smaller components
* use `useState`
* handle events
* render conditional UI
* render lists with keys
* avoid unnecessary duplicate state for derived display
* build controlled inputs
* handle form submit
* compose components clearly
* lift state only when needed
* create and run a local React app
* edit files in `src`
* create a new component file
* commit and push a React project to GitHub

Next level can introduce React Intermediate topics such as effects, data fetching, custom hooks, context, routing, and more realistic project structure after the learner is comfortable with React’s component, state, event, and form fundamentals.

# Level 8: React Intermediate

## Goal

Organize behavior, state, and reusable patterns in medium-sized React features.

At this level, learners move from building small React components to organizing real feature behavior more clearly. They learn when effects are needed, how to extract repeated logic into custom hooks, how to decide where state should live, and how to build reusable loading, error, empty, and retry UI patterns.

This level should stay practical. Do not introduce React Router, server components, global state libraries, query libraries, advanced performance optimization, or complex architecture yet.

---

## Module: Custom Hooks and Effects

### Module goal

Learners understand when `useEffect` is actually needed, how cleanup and dependency arrays work, and how to extract reusable behavior into custom hooks.

### Prerequisite

Learner understands components, props, state, events, forms, basic local React workflow, and JavaScript async basics.

### Planned lesson sequence

| Order | Lesson title                            | Lesson role         | Main concept                              | Activity pattern                                               | Practice output                                         | Bridge / prepares for     |
| ----- | --------------------------------------- | ------------------- | ----------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- |
| 1     | Kapan Perlu `useEffect`?                | Decision rule       | effects synchronize with external systems | text, case study, good/bad examples, quick-check, summary      | Learner can decide whether effect is needed             | Cleanup                   |
| 2     | Cleanup dan Dependency Array            | Concept + debugging | cleanup function and dependency behavior  | text, timeline example, broken effect case, practice, summary  | Fix repeated effect or stale subscription issue         | Custom hook               |
| 3     | Custom Hook Dasar                       | Guided practice     | extracting reusable stateful logic        | text, code-example, refactor task, summary                     | Extract repeated logic into `useToggle` or `useCounter` | Browser subscription hook |
| 4     | Browser Subscription Hook               | Practical pattern   | subscribing to browser events safely      | text, example, cleanup checklist, practice, summary            | Build `useWindowSize` or similar small hook             | Assessment                |
| 5     | Uji Kompetensi Custom Hooks and Effects | Module assessment   | effect decisions and reusable behavior    | recap, quiz, hook refactor task, documentation bridge, summary | Explain and implement a small custom hook with cleanup  | State strategy            |

### Built-in practice pattern

* Effect decision case studies.
* Identify “effect not needed” examples.
* Dependency array debugging tasks.
* Cleanup tasks for event listeners or timers.
* Custom hook extraction tasks.
* Small browser subscription hook practice.
* Avoid data-fetching architecture in this module; keep examples small and focused.

### Documentation Bridge

Suggested docs:

* React Learn: Synchronizing with Effects
* React Learn: You Might Not Need an Effect
* React Learn: Lifecycle of Reactive Effects
* React Learn: Reusing Logic with Custom Hooks
* MDN: `addEventListener`
* MDN: `removeEventListener`
* MDN: `setInterval` and `clearInterval` if timer examples are used

Focus:

* effects synchronize with something outside React
* effects are not for every calculation
* dependency array basics
* cleanup function
* extracting reusable logic into custom hooks
* naming custom hooks with `use`
* browser subscription cleanup

Ignore for now:

* advanced concurrency
* Suspense
* React Server Components
* data fetching libraries
* complex caching
* performance tuning
* custom hook libraries
* advanced TypeScript hook signatures

### Local Dev Milestone connection

Upgrade the Local React App by extracting one repeated behavior into a custom hook, for example:

* `useToggle`
* `useCounter`
* `useLocalStorageState`
* `useWindowSize`

The learner should explain:

* what behavior was repeated
* why it became a hook
* what the hook returns
* whether the hook needs cleanup

### Uji Kompetensi

Assessment coverage:

* when `useEffect` is needed
* when `useEffect` is not needed
* dependency array basics
* cleanup function
* avoiding infinite loops
* extracting custom hooks
* custom hook naming
* browser event subscription cleanup
* explaining hook responsibility

Readiness criteria:

Learner can decide whether an effect is needed, fix simple dependency/cleanup problems, extract repeated stateful behavior into a custom hook, and explain what the hook is responsible for.

---

## Module: State Strategy

### Module goal

Learners can choose where state should live, avoid unnecessary state, use reducer patterns for related state transitions, and use context only when it solves a real sharing problem.

### Prerequisite

Learner understands props, state, events, forms, lists, derived display, lifting state, effects, and basic custom hooks.

### Planned lesson sequence

| Order | Lesson title                  | Lesson role        | Main concept                                   | Activity pattern                                                | Practice output                                           | Bridge / prepares for |
| ----- | ----------------------------- | ------------------ | ---------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| 1     | State Colocation              | Decision rule      | keep state close to where it is used           | text, case study, refactor task, quick-check, summary           | Move state closer to the component that owns it           | Derived state         |
| 2     | Derived State                 | Concept + refactor | calculate values instead of storing duplicates | text, broken example, refactor task, summary                    | Remove duplicated state and derive display values         | Reducer               |
| 3     | Reducer Pattern               | Guided practice    | managing related state transitions             | text, action example, reducer practice, summary                 | Convert multiple state updates into a reducer             | Context               |
| 4     | Context When Needed           | Decision rule      | sharing values without prop drilling           | text, before/after example, checklist, callout, summary         | Use context for a small shared setting or user preference | Assessment            |
| 5     | Uji Kompetensi State Strategy | Module assessment  | choosing state patterns                        | recap, quiz, state decision task, documentation bridge, summary | Refactor state placement and explain the decision         | Reusable UI states    |

### Built-in practice pattern

* State placement case studies.
* Duplicate state detection tasks.
* Derived state refactor tasks.
* Reducer transition tasks.
* Context decision checklists.
* Small refactor exercises, not large architecture rewrites.
* Keep examples feature-sized, such as filterable list, cart summary, settings panel, or form wizard step state.

### Documentation Bridge

Suggested docs:

* React Learn: Choosing the State Structure
* React Learn: Sharing State Between Components
* React Learn: Extracting State Logic into a Reducer
* React Learn: Passing Data Deeply with Context
* React Learn: Scaling Up with Reducer and Context

Focus:

* keeping state close to usage
* avoiding duplicate state
* deriving values during render
* when reducer is clearer than many state setters
* action names in reducer
* context for shared values
* context is not always needed

Ignore for now:

* Redux
* Zustand
* Jotai
* MobX
* server state libraries
* performance optimization with memoization
* large-scale app architecture
* deeply nested provider patterns

### Local Dev Milestone connection

Refactor the Local React App state:

* move local-only state closer to its component
* remove one unnecessary duplicated state value
* use reducer only if transitions are related enough
* use context only if a value is needed by several distant components

The learner should write a short note explaining why each state stayed local, moved up, moved into a reducer, or moved into context.

### Uji Kompetensi

Assessment coverage:

* state colocation
* derived state
* duplicate state smell
* reducer use case
* reducer action basics
* context use case
* avoiding context when props are enough
* explaining state ownership

Readiness criteria:

Learner can choose a reasonable state location, avoid unnecessary duplicate state, use a reducer for related state transitions, and use context only when the sharing problem is real.

---

## Module: Reusable UI States

### Module goal

Learners can design reusable UI patterns for loading, error, empty, success, and retry states in React features.

### Prerequisite

Learner understands React state, conditional rendering, async JavaScript basics, effects, custom hooks, and state strategy.

### Planned lesson sequence

| Order | Lesson title                      | Lesson role       | Main concept                                   | Activity pattern                                           | Practice output                                                | Bridge / prepares for    |
| ----- | --------------------------------- | ----------------- | ---------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- | ------------------------ |
| 1     | Loading State                     | UI pattern lesson | showing progress honestly                      | text, UI case study, coding-practice, quick-check, summary | Build reusable loading display                                 | Error state              |
| 2     | Error State                       | UI pattern lesson | explaining failure clearly                     | text, broken fetch example, error UI practice, summary     | Render error message and recovery hint                         | Empty state              |
| 3     | Empty State                       | UI pattern lesson | useful UI when no data exists                  | text, case study, practice, checklist, summary             | Render helpful empty state with next action                    | Retry                    |
| 4     | Retry Pattern                     | Guided practice   | retrying failed actions without hiding failure | text, async example, practice, callout, summary            | Add retry button and reset flow                                | Assessment               |
| 5     | Uji Kompetensi Reusable UI States | Module assessment | complete async UI state pattern                | recap, quiz, UI state task, documentation bridge, summary  | Build a feature with loading, error, empty, success, and retry | React advanced readiness |

### Built-in practice pattern

* Loading/error/empty UI tasks.
* Conditional rendering tasks.
* Async state object modeling.
* Retry button practice.
* Accessibility-aware status messaging.
* Reusable component extraction, such as `LoadingMessage`, `ErrorMessage`, and `EmptyState`.
* Keep patterns simple; do not introduce query libraries yet.

### Documentation Bridge

Suggested docs:

* React Learn: Conditional Rendering
* React Learn: State: A Component's Memory
* React Learn: Choosing the State Structure
* React Learn: Synchronizing with Effects
* MDN: ARIA live regions, only if status messaging is discussed
* WebAIM or MDN accessibility references for status/error messaging when needed

Focus:

* loading state
* error state
* empty state
* success state
* retry action
* clear status messaging
* basic accessible feedback
* reusable UI state components

Ignore for now:

* React Query / TanStack Query
* SWR
* Suspense
* streaming UI
* advanced cache invalidation
* optimistic updates
* toast systems
* advanced accessibility announcements

### Local Dev Milestone connection

Upgrade the Local React App data states:

* show loading while data or simulated data is being prepared
* show error when something fails
* show empty state when no items exist
* show success/content state when data exists
* add a retry action for a failed state
* extract at least one reusable UI state component

The learner should explain what the user sees in each state and why it matters.

### Uji Kompetensi

Assessment coverage:

* loading state
* error state
* empty state
* success/content state
* retry behavior
* conditional rendering
* reusable UI state components
* basic status accessibility
* explaining user experience during failure

Readiness criteria:

Learner can build a React feature that handles loading, error, empty, and success states clearly, includes a basic retry flow, and explains how each state improves the user experience.

---

## Level 8 completion readiness

Learner is ready to move into more advanced React topics when they can:

* decide when `useEffect` is needed
* avoid using effects for simple derived values
* write cleanup logic for timers or browser event listeners
* extract repeated behavior into a custom hook
* explain what a custom hook returns and owns
* colocate state near where it is used
* avoid unnecessary duplicate state
* use reducer for related transitions
* use context only when prop passing becomes a real problem
* build loading, error, empty, success, and retry UI states
* extract reusable UI state components
* explain state and behavior decisions in a medium-sized React feature

Next level can introduce advanced React patterns, data fetching architecture, routing, performance, and larger project structure after the learner can organize behavior, state, and reusable UI states confidently.

# Level 9: React Advanced

## Goal

Build resilient React patterns without over-abstraction.

At this level, learners move from building medium-sized React features to making those features more resilient, measurable, and reusable. The focus is not “advanced tricks”, but better engineering judgment: handle failures clearly, measure before optimizing, and create reusable component patterns only when they solve real repetition.

This level should avoid unnecessary abstraction. Do not introduce Next.js, server components, advanced routing architecture, global state libraries, data fetching libraries, design system architecture, or complex performance tuning yet.

---

## Module: Resilience and Suspense Basics

### Module goal

Learners can make React UI more resilient by handling render errors, showing fallback UI, using Suspense basics, and giving users a path to recover.

### Prerequisite

Learner understands components, props, state, events, conditional rendering, reusable UI states, effects, custom hooks, and local React workflow.

### Planned lesson sequence

| Order | Lesson title                                  | Lesson role          | Main concept                             | Activity pattern                                                   | Practice output                                                  | Bridge / prepares for |
| ----- | --------------------------------------------- | -------------------- | ---------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | --------------------- |
| 1     | Error Boundaries                              | Concept + case study | catching render errors in part of the UI | text, broken component example, code reading, quick-check, summary | Learner can explain what error boundaries catch and do not catch | Fallback UI           |
| 2     | Fallback UI                                   | UI pattern lesson    | showing a helpful recovery screen        | text, before/after example, practice, checklist, summary           | Build a user-friendly fallback message                           | Suspense              |
| 3     | Suspense Basics                               | Guided example       | waiting for lazy-loaded UI               | text, `React.lazy` example, fallback practice, callout, summary    | Lazy-load a component with Suspense fallback                     | Retry/recovery        |
| 4     | Retry and Recovery Patterns                   | Practical pattern    | reset, retry, and recover after failure  | text, error/retry case study, practice, summary                    | Add retry/reset behavior to a failing UI area                    | Assessment            |
| 5     | Uji Kompetensi Resilience and Suspense Basics | Module assessment    | resilient UI patterns                    | recap, quiz, resilience task, documentation bridge, summary        | Add error/fallback/recovery pattern to a small React feature     | Performance awareness |

### Built-in practice pattern

* Error boundary code reading tasks.
* Broken UI case studies.
* Fallback UI improvement tasks.
* Suspense fallback examples using `React.lazy`.
* Retry/reset flow tasks.
* Writing practice for explaining what failure the UI can recover from.
* Avoid complex data-fetching Suspense patterns in this module.

### Documentation Bridge

Suggested docs:

* React docs: Error Boundaries
* React docs: `lazy`
* React docs: `<Suspense>`
* React docs: preserving and resetting state, if reset behavior is discussed

Focus:

* what error boundaries are for
* render errors vs event handler errors
* fallback UI
* `React.lazy`
* Suspense fallback for lazy-loaded components
* retry/reset patterns
* explaining failure and recovery clearly

Ignore for now:

* Suspense for data fetching architecture
* server components
* framework-specific error routes
* streaming
* complex retry/backoff systems
* error monitoring tools
* production observability platforms

### Local Dev Milestone connection

Upgrade the Local React App by adding one resilience pattern:

* wrap a risky feature area with an error boundary
* show a helpful fallback UI
* lazy-load one non-critical component if appropriate
* add a simple retry or reset path
* write a short note explaining what can fail and how the UI helps the user recover

### Uji Kompetensi

Assessment coverage:

* purpose of error boundaries
* what error boundaries catch
* what error boundaries do not catch
* fallback UI quality
* basic Suspense with lazy-loaded components
* retry/reset behavior
* explaining recovery path
* avoiding scary or vague error messages

Readiness criteria:

Learner can add a basic resilience pattern to a React feature, explain the role of fallback UI, use Suspense for a lazy-loaded component, and provide a clear recovery path when something fails.

---

## Module: Performance Awareness

### Module goal

Learners can reason about React performance without guessing, measure before optimizing, and use memoization only when it solves a real problem.

### Prerequisite

Learner understands React rendering, props, state, effects, custom hooks, lists, and reusable UI patterns.

### Planned lesson sequence

| Order | Lesson title                            | Lesson role       | Main concept                                                    | Activity pattern                                                     | Practice output                                            | Bridge / prepares for |
| ----- | --------------------------------------- | ----------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------- |
| 1     | Render Cost                             | Concept           | rendering has cost, but not every render is a bug               | text, render timeline example, quick-check, summary                  | Learner can explain why a component re-rendered            | Measuring             |
| 2     | Measuring Before Optimizing             | Tooling lesson    | observe before changing code                                    | text, React DevTools Profiler walkthrough, local checklist, summary  | Identify one expensive render or confirm there is no issue | Memoization           |
| 3     | `useMemo` and `useCallback` When Useful | Decision rule     | memoize expensive calculations or stable references when needed | text, good/bad examples, refactor task, callout, summary             | Apply memoization to a justified case                      | Expensive lists       |
| 4     | Expensive Lists                         | Practical pattern | list rendering and derived filtering/sorting cost               | text, case study, practice, checklist, summary                       | Improve one list render or calculation path                | Assessment            |
| 5     | Uji Kompetensi Performance Awareness    | Module assessment | practical performance judgment                                  | recap, quiz, measure-and-improve task, documentation bridge, summary | Measure, explain, and improve one React performance issue  | Component patterns    |

### Built-in practice pattern

* Render reasoning tasks.
* “Is this render actually a problem?” case studies.
* React DevTools Profiler self-review.
* `useMemo` and `useCallback` decision tasks.
* Expensive list examples with filtering/sorting.
* Writing practice for explaining why an optimization was or was not needed.

### Documentation Bridge

Suggested docs:

* React docs: keeping components pure
* React docs: `memo`
* React docs: `useMemo`
* React docs: `useCallback`
* React DevTools Profiler docs
* Browser performance tools as supporting reference

Focus:

* render cost
* re-render reasoning
* measuring before optimizing
* expensive calculations
* stable references only when useful
* expensive lists
* avoiding premature optimization

Ignore for now:

* advanced virtualization libraries
* compiler-level optimization
* micro-benchmarking
* complex flamegraph analysis
* server rendering performance
* bundle splitting strategy
* advanced cache invalidation
* large-scale performance budgets

### Local Dev Milestone connection

Measure and improve one local React feature:

* identify a component that renders often or does expensive work
* measure or observe the behavior
* decide whether optimization is actually needed
* apply a small improvement if justified
* write a short note explaining what was measured and what changed

### Uji Kompetensi

Assessment coverage:

* render cost
* why components re-render
* measuring before optimizing
* when `useMemo` is useful
* when `useCallback` is useful
* when memoization is unnecessary
* expensive list calculations
* explaining trade-offs clearly

Readiness criteria:

Learner can explain a React performance issue without guessing, use measurement to guide decisions, apply memoization only when justified, and avoid over-optimizing simple components.

---

## Module: Advanced Component Patterns

### Module goal

Learners can build reusable component patterns with composition, children, slots, compound components, and form field patterns while avoiding unnecessary abstraction.

### Prerequisite

Learner understands component composition, props, children, state boundaries, forms, reusable UI states, and performance basics.

### Planned lesson sequence

| Order | Lesson title                               | Lesson role              | Main concept                                        | Activity pattern                                                   | Practice output                                         | Bridge / prepares for      |
| ----- | ------------------------------------------ | ------------------------ | --------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- | -------------------------- |
| 1     | Compound Components                        | Concept + guided example | related components sharing a parent pattern         | text, tabs/card example, code reading, practice, summary           | Build a simple compound component pattern               | Slots                      |
| 2     | Slots and Children Patterns                | Composition lesson       | flexible component areas with children/props        | text, layout example, refactor task, quick-check, summary          | Build a reusable panel/card layout with slots           | Form field                 |
| 3     | Reusable Form Field Pattern                | Practical pattern        | label, input, hint, error, and accessibility basics | text, form example, practice, checklist, summary                   | Build a reusable form field component                   | Avoiding over-abstraction  |
| 4     | Avoiding Over-Abstraction                  | Decision rule            | abstraction should reduce real repetition           | text, before/after examples, refactor-or-not task, summary         | Decide whether to keep code simple or extract a pattern | Assessment                 |
| 5     | Uji Kompetensi Advanced Component Patterns | Module assessment        | reusable patterns with judgment                     | recap, quiz, component pattern task, documentation bridge, summary | Build one reusable pattern and explain why it exists    | Production React readiness |

### Built-in practice pattern

* Component pattern reading tasks.
* Refactor tasks from repeated markup into reusable pattern.
* “Should this be abstracted?” case studies.
* Reusable form field practice.
* Accessibility checklist for label, hint, and error text.
* Small component API design tasks.
* Avoid large design system work in this module.

### Documentation Bridge

Suggested docs:

* React docs: Passing JSX as children
* React docs: Sharing state between components
* React docs: composition-related examples
* React docs: Thinking in React
* MDN: form labels
* WAI or WebAIM references for accessible form fields when needed
* Design system references only as preview, not required implementation

Focus:

* composition
* children
* slot-like patterns
* compound component basics
* reusable form fields
* clear component APIs
* avoiding over-abstraction
* accessibility basics for reusable inputs

Ignore for now:

* full design system architecture
* headless UI libraries
* polymorphic components
* advanced generics for component APIs
* animation systems
* theme systems
* complex accessibility widgets
* package publishing

### Local Dev Milestone connection

Build one reusable component pattern locally:

* reusable `Card` or `Panel`
* reusable `FormField`
* simple `Tabs` or `Accordion` pattern if appropriate
* document the component API
* explain why the pattern is useful
* explain why the pattern is not over-engineered

### Uji Kompetensi

Assessment coverage:

* compound component purpose
* children/slot patterns
* reusable form field structure
* label/hint/error relationship
* component API clarity
* deciding whether to abstract
* avoiding over-abstraction
* explaining trade-offs

Readiness criteria:

Learner can build one reusable component pattern, keep the component API understandable, include basic accessibility considerations, and explain why the abstraction is useful without making the code harder to maintain.

---

## Level 9 completion readiness

Learner is ready to move into production-level React or framework work when they can:

* add a basic error boundary pattern
* create helpful fallback UI
* use Suspense for lazy-loaded components
* provide retry or reset behavior for recoverable failures
* reason about render cost
* measure before optimizing
* use `useMemo` and `useCallback` only when useful
* identify expensive list calculations
* create reusable component patterns with composition
* build a reusable form field pattern
* decide when abstraction helps and when it hurts
* explain resilience, performance, and abstraction trade-offs clearly

Next level can introduce framework-level React work, routing, data loading architecture, production app structure, or Next.js after the learner can build resilient and reusable React patterns without over-abstraction.

# Level 10: Next.js App Router

## Goal

Build app-level routes and layouts with the Next.js App Router.

At this level, learners move from component-level React thinking to application-level React thinking. They learn how Next.js organizes routes, layouts, server/client boundaries, loading and error UI, route handlers, metadata, environment variables, and local Next.js workflow.

This level should stay focused on App Router fundamentals. Do not introduce authentication, database integration, server actions, middleware, deployment pipelines, caching strategy, or production security yet.

---

## Module: App Directory and Routing

### Module goal

Learners understand how the Next.js `app` directory maps files and folders into routes, layouts, nested pages, dynamic routes, and route groups.

### Prerequisite

Learner understands React components, JSX, props, local React app workflow, npm basics, and basic file/folder project structure.

### Planned lesson sequence

| Order | Lesson title                             | Lesson role         | Main concept                              | Activity pattern                                                  | Practice output                                        | Bridge / prepares for    |
| ----- | ---------------------------------------- | ------------------- | ----------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | ------------------------ |
| 1     | `app` Directory                          | Concept             | file-system based routing                 | text, folder tree example, route inspection, quick-check, summary | Learner can explain why routes live in `app`           | page/layout files        |
| 2     | `page.tsx` and `layout.tsx`              | Guided example      | route page and shared layout              | text, code-example, folder walkthrough, practice, summary         | Build a page and shared layout                         | Nested routes            |
| 3     | Nested Routes                            | Concept + practice  | folders create route segments             | text, folder tree example, route matching task, summary           | Create `/about` and `/dashboard/settings` style routes | Dynamic routes           |
| 4     | Dynamic Routes                           | Guided practice     | dynamic segments with params              | text, `[slug]` example, route prediction task, summary            | Create a simple detail route                           | Route groups             |
| 5     | Route Groups                             | Organization lesson | grouping routes without changing URL path | text, before/after folder example, checklist, summary             | Organize routes with `(marketing)` or `(app)` group    | Assessment               |
| 6     | Uji Kompetensi App Directory and Routing | Module assessment   | App Router route structure                | recap, quiz, route structure task, documentation bridge, summary  | Explain and build a small route tree                   | Server/client boundaries |

### Built-in practice pattern

* Route structure inspection.
* Folder tree reading tasks.
* Route prediction tasks.
* Small route examples.
* Local file/folder checklist.
* No deployment required.
* No advanced routing features yet.

### Documentation Bridge

Suggested docs:

* Next.js docs: App Router
* Next.js docs: Defining Routes
* Next.js docs: Pages and Layouts
* Next.js docs: Dynamic Routes
* Next.js docs: Route Groups
* Learn Next.js routing sections

Focus:

* `app` directory
* `page.tsx`
* `layout.tsx`
* nested folders
* dynamic segments
* route groups
* how folder structure maps to URL structure

Ignore for now:

* middleware
* parallel routes
* intercepting routes
* advanced caching
* server actions
* authentication
* database integration
* deployment

### Local Dev Milestone connection

Prepares for Local Next.js App by making learners comfortable reading and creating route folders before building a full local Next.js project.

### Uji Kompetensi

Assessment coverage:

* purpose of the `app` directory
* `page.tsx`
* `layout.tsx`
* nested routes
* dynamic routes
* route groups
* route tree explanation
* when a folder affects the URL and when it does not

Readiness criteria:

Learner can read a small App Router folder tree, predict the resulting URLs, create a page and layout, use a dynamic route, and explain why route groups help organize files without changing the URL.

---

## Module: Server Components and Client Components

### Module goal

Learners understand the difference between Server Components and Client Components, when to use the `"use client"` boundary, and how to pass props across the boundary safely.

### Prerequisite

Learner understands React components, props, state, event handlers, effects, local React app workflow, and basic Next.js routing.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role          | Main concept                                                    | Activity pattern                                                   | Practice output                                      | Bridge / prepares for |
| ----- | ------------------------------------------- | -------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- | --------------------- |
| 1     | Server Components                           | Concept              | components that render on the server by default                 | text, mental model, code reading, quick-check, summary             | Learner can identify a Server Component              | Client Components     |
| 2     | Client Components                           | Concept + comparison | components that need browser interactivity                      | text, before/after example, decision task, summary                 | Identify when state/events require Client Component  | `use client` boundary |
| 3     | `use client` Boundary                       | Guided practice      | marking the client entry point                                  | text, code-example, boundary placement task, callout, summary      | Add `"use client"` only where needed                 | Passing props         |
| 4     | Passing Props Across Boundaries             | Practical pattern    | server-to-client data flow                                      | text, serializable props example, practice, summary                | Pass simple props from server parent to client child | Common mistakes       |
| 5     | Common Boundary Mistakes                    | Debugging lesson     | event handlers, hooks, browser APIs, and non-serializable props | text, broken examples, fix task, checklist, summary                | Fix a boundary mistake                               | Assessment            |
| 6     | Uji Kompetensi Server and Client Components | Module assessment    | server/client boundary decisions                                | recap, quiz, boundary decision task, documentation bridge, summary | Explain and fix a small boundary issue               | Route behavior        |

### Built-in practice pattern

* Boundary decision tasks.
* Server vs client component case studies.
* Broken component examples.
* `"use client"` placement tasks.
* Serializable props examples.
* Avoid advanced server architecture.
* Avoid data fetching complexity beyond small examples.

### Documentation Bridge

Suggested docs:

* Next.js docs: Server and Client Components
* Next.js docs: `"use client"` directive
* React docs: Server Components references, only when useful
* React docs: components and props as supporting context

Focus:

* Server Components are default in App Router
* Client Components are needed for interactivity
* `useState`, event handlers, and browser APIs require Client Components
* `"use client"` marks a client boundary
* props can cross from Server Component to Client Component when serializable
* keeping the client boundary small

Ignore for now:

* server actions
* streaming architecture
* advanced caching
* authentication sessions
* database queries
* React Server Components internals
* complex serialization issues
* hydration deep dives

### Local Dev Milestone connection

Implement boundaries in Local Next.js App:

* keep static layout/page parts as Server Components
* move interactive button/form behavior into Client Components
* pass simple props from server-rendered parent to client child
* explain why `"use client"` was placed in a specific file

### Uji Kompetensi

Assessment coverage:

* Server Component purpose
* Client Component purpose
* when `"use client"` is needed
* where to place `"use client"`
* passing props from server to client
* common boundary mistakes
* avoiding making everything client by default

Readiness criteria:

Learner can decide whether a component should be server or client, add `"use client"` only when needed, fix common boundary mistakes, and explain the trade-off in beginner-friendly language.

---

## Module: Loading, Error UI, Route Handlers, Metadata, and Env

### Module goal

Learners understand important App Router route behavior: loading UI, error UI, basic route handlers, metadata, and environment variables.

### Prerequisite

Learner understands App Router route structure, layouts, Server Components, Client Components, async JavaScript basics, and React reusable UI states.

### Planned lesson sequence

| Order | Lesson title                          | Lesson role                  | Main concept                                       | Activity pattern                                                | Practice output                                        | Bridge / prepares for |
| ----- | ------------------------------------- | ---------------------------- | -------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------ | --------------------- |
| 1     | `loading.tsx`                         | UI pattern lesson            | route-level loading UI                             | text, folder example, route behavior task, quick-check, summary | Add loading UI to a route segment                      | error UI              |
| 2     | `error.tsx`                           | UI pattern + boundary lesson | route-level error UI and reset                     | text, broken route example, fix task, checklist, summary        | Add error UI with recovery action                      | Route handlers        |
| 3     | Route Handlers                        | Concept + small example      | basic API-like endpoints inside Next.js            | text, `GET` example, route inspection, practice, summary        | Create a simple local route handler                    | Metadata              |
| 4     | Metadata                              | Guided example               | page title and description                         | text, code-example, metadata reading task, summary              | Add route metadata                                     | Env                   |
| 5     | Environment Variables                 | Tooling/config lesson        | local config values and public/private distinction | text, `.env.local` example, safety callout, checklist, summary  | Read a safe local env value                            | Assessment            |
| 6     | Uji Kompetensi Next.js Route Behavior | Module assessment            | route-level app behavior                           | recap, quiz, route behavior task, documentation bridge, summary | Add loading/error/metadata/env basics to a small route | Local Next.js App     |

### Built-in practice pattern

* Small route behavior examples.
* Folder/file placement tasks.
* Route handler reading tasks.
* Metadata editing tasks.
* Env/config reading tasks.
* Safety callouts around secrets.
* No database/auth integration yet.
* No production deployment requirement yet.

### Documentation Bridge

Suggested docs:

* Next.js docs: Loading UI and Streaming
* Next.js docs: Error Handling
* Next.js docs: Route Handlers
* Next.js docs: Metadata
* Next.js docs: Environment Variables

Focus:

* `loading.tsx`
* `error.tsx`
* reset/retry behavior
* basic `GET` route handler
* metadata title/description
* `.env.local`
* `NEXT_PUBLIC_` for browser-exposed values
* never committing secrets

Ignore for now:

* advanced streaming
* cache control strategy
* database access
* authentication
* server actions
* middleware
* advanced metadata generation
* production secret management
* deployment environment configuration

### Local Dev Milestone connection

Leads to Local Next.js App by preparing learners to add basic route behavior:

* route-level loading UI
* route-level error UI
* one simple route handler
* page metadata
* local environment variable awareness

### Uji Kompetensi

Assessment coverage:

* `loading.tsx`
* `error.tsx`
* route-level recovery/reset
* basic route handlers
* metadata title and description
* `.env.local`
* public vs private env variables
* avoiding committed secrets
* explaining route behavior clearly

Readiness criteria:

Learner can add basic loading and error UI to routes, create a simple route handler, add metadata, understand local env variables, and explain which values are safe or unsafe to expose.

---

## Module: Local Next.js App

### Module goal

Learners create and run a basic Next.js App Router project locally, build routes and layouts, add route-level behavior, save the project to GitHub, and explain the file structure.

### Prerequisite

Learner understands React fundamentals, React intermediate patterns, basic React advanced judgment, npm tooling, TypeScript basics, and Next.js App Router fundamentals.

### Planned lesson sequence

| Order | Lesson title                     | Lesson role           | Main concept                             | Activity pattern                                                                 | Practice output                                            | Bridge / prepares for |
| ----- | -------------------------------- | --------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------- |
| 1     | Membuat Next.js Project Lokal    | Local setup           | create a Next.js project                 | tool prerequisite note, command walkthrough, checklist, troubleshooting, summary | Next.js project folder created locally                     | dev server            |
| 2     | Menjalankan `npm run dev`        | Local workflow        | run local development server             | text, command walkthrough, browser check, troubleshooting, summary               | Next.js app running locally                                | route/layout          |
| 3     | Membuat Route dan Layout         | Guided local practice | create route folders, pages, and layouts | text, folder example, local task, summary                                        | Basic route tree with layout                               | loading/error UI      |
| 4     | Menambahkan Loading dan Error UI | Guided local practice | `loading.tsx` and `error.tsx`            | text, code-example, local checklist, troubleshooting, summary                    | Route-level loading/error files                            | metadata              |
| 5     | Menambahkan Metadata             | Guided practice       | title and description                    | text, code-example, local task, summary                                          | Route metadata added                                       | GitHub                |
| 6     | Push ke GitHub                   | Local workflow        | commit and push project                  | command walkthrough, checklist, GitHub resource link, troubleshooting, summary   | Next.js app saved to GitHub                                | Assessment            |
| 7     | Uji Kompetensi Local Next.js App | Module assessment     | local Next.js readiness                  | recap, quiz, project checklist, writing-practice, documentation bridge, summary  | Explain and share a basic local Next.js App Router project | Production Next.js    |

### Built-in practice pattern

* Mostly local workflow support.
* Tool prerequisite notes.
* Command walkthroughs.
* Local project checklists.
* File/folder inspection tasks.
* Writing practice for explaining project structure.
* Honest self-review; the app should not pretend to validate local files.
* Use official resource links for Next.js, npm, GitHub, and deployment preview docs.
* Keep the project small.

### Documentation Bridge

Suggested docs:

* Next.js official docs
* Next.js docs: Installation
* Next.js docs: App Router
* Next.js docs: Pages and Layouts
* Next.js docs: Loading UI
* Next.js docs: Error Handling
* Next.js docs: Metadata
* Learn Next.js
* npm docs: scripts
* GitHub Docs: repositories and commit basics
* Vercel docs as preview for future deployment, not a required task yet

Focus:

* creating a local Next.js project
* running `npm run dev`
* understanding the `app` folder
* creating routes
* creating layouts
* adding loading and error UI
* adding metadata
* committing and pushing to GitHub
* explaining local project structure

Ignore for now:

* deployment
* auth
* database
* server actions
* middleware
* advanced caching
* API architecture
* testing
* analytics
* production monitoring

### Local Dev Milestone connection

This is a local milestone.

Learner creates a basic Next.js App Router project locally, runs it in the browser, edits routes and layouts, adds route-level behavior, commits the project, pushes it to GitHub, and explains what they built.

Recommended project shape:

* small personal dashboard
* mini documentation site
* simple multi-page portfolio
* small product/info site

Keep the app small enough that the learner focuses on App Router workflow, not product complexity.

### Uji Kompetensi

Assessment coverage:

* creating a Next.js project locally
* running dev server
* understanding `app`
* creating `page.tsx`
* creating `layout.tsx`
* nested routes
* basic loading UI
* basic error UI
* metadata
* Git commit
* GitHub push
* explaining the project structure

Readiness criteria:

Learner can run a basic Next.js App Router project locally, create routes and layouts, add loading/error UI, add metadata, commit and push the project, and explain how the `app` directory maps to the app’s pages.

---

## Level 10 completion readiness

Learner is ready to move into production-oriented Next.js topics when they can:

* explain how the `app` directory maps to routes
* create `page.tsx` and `layout.tsx`
* create nested routes
* create dynamic routes
* use route groups for organization
* decide when a component should be server or client
* place `"use client"` only when needed
* pass simple props across server/client boundaries
* add route-level loading UI
* add route-level error UI
* create a simple route handler
* add metadata
* understand basic environment variable safety
* create and run a local Next.js App Router project
* push the project to GitHub
* explain routes, layouts, and boundaries in beginner-friendly terms

Next level can introduce production Next.js topics such as deployment, caching strategy, data loading, authentication, database integration, server actions, middleware, monitoring, and production environment configuration after the learner understands App Router fundamentals.

# Level 11: Production Next.js

## Goal

Connect a Next.js app to real auth, persistence, and deployment workflows.

At this level, learners move from a local Next.js app into production-oriented app behavior. They learn how authentication changes the UI, how protected routes work, how persisted user data should be scoped, how Supabase integrates with a Next.js app, and how deployment changes the way environment variables, logs, and debugging work.

This level should stay practical and safety-focused. Do not turn this level into advanced backend architecture. Avoid multi-tenant architecture, complex RBAC, payment systems, background jobs, advanced caching strategy, observability platforms, and security deep dives beyond what beginners need to avoid dangerous mistakes.

---

## Module: Authentication and Session-Aware UI

### Module goal

Learners can add authentication-aware UI to a Next.js app, handle login/logout flows, protect routes at a beginner level, and show useful auth error states.

### Prerequisite

Learner understands Next.js App Router, Server Components and Client Components, route layouts, environment variables, React forms, loading/error states, and local Next.js workflow.

### Planned lesson sequence

| Order | Lesson title                                       | Lesson role           | Main concept                                     | Activity pattern                                                | Practice output                                    | Bridge / prepares for |
| ----- | -------------------------------------------------- | --------------------- | ------------------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------- | --------------------- |
| 1     | Login/Register UX                                  | Product + form lesson | auth forms and user expectations                 | text, UI case study, form flow example, checklist, summary      | Learner can design simple login/register UI states | Logout/session nav    |
| 2     | Logout and Session-Aware Nav                       | Guided practice       | UI changes based on session                      | text, code-example, session state case, practice, summary       | Navbar shows login/logout state correctly          | Protected routes      |
| 3     | Public vs Protected Routes                         | Routing lesson        | route access based on auth state                 | text, route map example, decision task, callout, summary        | Define which routes are public/protected           | Auth errors           |
| 4     | Auth Error States                                  | Resilience lesson     | failed login, expired session, permission denied | text, error examples, UI state practice, summary                | Show helpful auth error messages                   | Assessment            |
| 5     | Uji Kompetensi Authentication and Session-Aware UI | Module assessment     | auth-aware UI readiness                          | recap, quiz, auth flow checklist, documentation bridge, summary | Explain and implement basic auth-aware UI          | Supabase integration  |

### Built-in practice pattern

* Auth UI state examples.
* Login/register form flow reading.
* Public vs protected route decision tasks.
* Session-aware navigation examples.
* Auth error message improvement tasks.
* Honest local/project checklist.
* Avoid pretending the app can validate real auth credentials unless integrated in a real local project.

### Documentation Bridge

Suggested docs:

* Supabase Auth docs
* Supabase Auth with Next.js docs
* Next.js App Router routing docs
* Next.js middleware docs only as preview if route protection is discussed
* Next.js environment variable docs

Focus:

* login/register flow
* logout flow
* session-aware navigation
* public routes
* protected routes
* auth loading state
* auth error state
* redirect after auth action
* beginner-safe environment variables

Ignore for now:

* OAuth provider setup complexity
* enterprise SSO
* advanced session refresh internals
* multi-role RBAC
* organization/team permissions
* custom auth servers
* passwordless magic link edge cases
* account linking

### Local Dev Milestone connection

Add auth to the Local Next.js App:

* create login/register UI
* show logout button when user is signed in
* show login link when user is signed out
* protect one dashboard-like route
* show friendly error state when login fails
* write a short note explaining which routes are public and which are protected

### Uji Kompetensi

Assessment coverage:

* login/register UX
* auth loading state
* logout behavior
* session-aware navigation
* public route vs protected route
* auth error messages
* beginner route protection concept
* redirect behavior
* safe environment variable awareness

Readiness criteria:

Learner can explain how authentication changes UI behavior, identify public and protected routes, show session-aware navigation, handle common auth error states, and avoid exposing sensitive auth configuration.

---

## Module: Supabase or Backend Integration

### Module goal

Learners can connect a Next.js app to Supabase or a backend service safely enough to persist user data, understand RLS at a beginner level, and keep data access logic readable.

### Prerequisite

Learner understands authentication-aware UI, Next.js server/client boundaries, route handlers, environment variables, basic database concepts, TypeScript types, and async error handling.

### Planned lesson sequence

| Order | Lesson title                        | Lesson role              | Main concept                                     | Activity pattern                                                          | Practice output                                        | Bridge / prepares for |
| ----- | ----------------------------------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------- |
| 1     | Supabase Client Boundaries          | Boundary lesson          | where database client code should live           | text, server/client examples, decision task, safety callout, summary      | Decide whether code belongs server-side or client-side | RLS                   |
| 2     | RLS Concept                         | Security concept         | rows should only be accessible to the right user | text, analogy, policy reading example, quick-check, summary               | Explain why RLS matters                                | Service layer         |
| 3     | Service Layer                       | Code organization lesson | keep database operations in readable functions   | text, before/after example, refactor task, summary                        | Create simple data service functions                   | Persisting data       |
| 4     | Persisting User Data                | Guided practice          | create/read/update user-owned records            | text, async flow example, local project checklist, summary                | Save and display user-owned data                       | Profile rows          |
| 5     | Profile Rows                        | Practical pattern        | separate auth user from app profile data         | text, schema example, case study, checklist, summary                      | Create/read profile-like row safely                    | Assessment            |
| 6     | Uji Kompetensi Supabase Integration | Module assessment        | persisted user data readiness                    | recap, quiz, backend integration checklist, documentation bridge, summary | Explain safe user-owned data flow                      | Production operations |

### Built-in practice pattern

* Server/client boundary case studies.
* RLS policy reading tasks.
* “Who should be able to read this row?” decision tasks.
* Service layer refactor examples.
* Async persistence flow checklists.
* Profile row modeling examples.
* Safety callouts for secret keys and service role keys.
* No fake database validation in built-in practice unless a real backend integration exists.

### Documentation Bridge

Suggested docs:

* Supabase JavaScript client docs
* Supabase Auth docs
* Supabase Row Level Security docs
* Supabase database docs
* Supabase Next.js guide
* Next.js environment variable docs

Focus:

* Supabase client setup
* public anon key vs secret/service role key
* user-owned rows
* RLS as database-level protection
* readable database service functions
* profile table concept
* async success/error states
* safe environment variable use

Ignore for now:

* advanced Postgres design
* database migrations strategy
* complex joins
* role-based admin dashboards
* service role usage in frontend
* realtime subscriptions
* storage buckets
* edge functions
* advanced security policies
* multi-tenant apps

### Local Dev Milestone connection

Save data in the Local Next.js App:

* create a simple table or app data model
* connect authenticated user to their own records
* read user-owned data
* create or update user-owned data
* show loading/error/success states
* explain how RLS protects the data
* write a short note explaining where the app talks to Supabase

### Uji Kompetensi

Assessment coverage:

* Supabase client boundary
* public anon key vs sensitive secret
* RLS concept
* user-owned data
* service layer purpose
* create/read/update flow
* profile row concept
* async persistence error handling
* explaining data access safely

Readiness criteria:

Learner can explain how a Next.js app talks to Supabase, why RLS matters, where database logic should live, how user-owned data is persisted, and why sensitive keys must never be exposed to the browser.

---

## Module: Production Operations

### Module goal

Learners can deploy a Next.js app, configure production environment variables, inspect logs, understand basic caching behavior, and debug common deployment problems.

### Prerequisite

Learner understands local Next.js workflow, Git/GitHub, environment variables, route behavior, auth basics, Supabase/backend integration basics, and async UI states.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role                  | Main concept                                                    | Activity pattern                                                                   | Practice output                                     | Bridge / prepares for       |
| ----- | ------------------------------------ | ---------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------- |
| 1     | Vercel Deployment                    | Local-to-production workflow | deploy from GitHub to Vercel                                    | text, tool prerequisite note, deployment checklist, troubleshooting, summary       | Learner deploys a small Next.js app                 | Env setup                   |
| 2     | Environment Setup                    | Configuration lesson         | local env vs production env                                     | text, `.env.local` vs dashboard example, safety checklist, summary                 | Configure required production environment variables | Logs                        |
| 3     | Production Logs                      | Debugging lesson             | inspect errors after deploy                                     | text, error case study, logs checklist, summary                                    | Use logs to identify one production issue           | Caching                     |
| 4     | Caching Basics                       | Concept                      | some data/pages may be cached                                   | text, mental model, route behavior examples, quick-check, summary                  | Explain why production may not behave like local    | Deployment debugging        |
| 5     | Deployment Debugging                 | Practical troubleshooting    | build errors, missing env, broken route, auth callback mismatch | text, case studies, debugging checklist, summary                                   | Debug a failed deployment or broken production page | Assessment                  |
| 6     | Uji Kompetensi Production Operations | Module assessment            | production workflow readiness                                   | recap, quiz, deployment checklist, writing-practice, documentation bridge, summary | Deploy, inspect, and explain production readiness   | Portfolio/project readiness |

### Built-in practice pattern

* Deployment checklist.
* Environment variable self-review.
* Production logs reading tasks.
* Caching behavior case studies.
* Deployment debugging case studies.
* Writing practice for production readiness notes.
* Honest self-review; the app cannot verify the learner’s Vercel dashboard or production environment.
* Official resource links should be clearly clickable.

### Documentation Bridge

Suggested docs:

* Vercel deployment docs
* Vercel environment variables docs
* Vercel logs / functions logs docs
* Next.js deployment docs
* Next.js environment variable docs
* Next.js caching docs
* Supabase production/auth URL docs when auth callback configuration is relevant

Focus:

* deploying from GitHub
* build command awareness
* production environment variables
* local vs production configuration
* checking logs
* missing env variable symptoms
* basic caching mental model
* deployment debugging flow

Ignore for now:

* custom CI/CD pipelines
* Docker
* Kubernetes
* advanced observability
* distributed tracing
* edge regions strategy
* complex cache invalidation
* advanced security hardening
* cost optimization
* scaling architecture

### Local Dev Milestone connection

Local Next.js App + deploy to Vercel:

* push project to GitHub
* import project into Vercel
* configure environment variables
* deploy app
* open production URL
* inspect logs if something fails
* write a short production note explaining env variables, known limitations, and how to debug basic issues

### Uji Kompetensi

Assessment coverage:

* Vercel deployment flow
* GitHub connection
* build command awareness
* production environment variables
* local vs production env
* checking production logs
* missing environment variable debugging
* basic caching behavior
* deployment troubleshooting
* explaining production readiness

Readiness criteria:

Learner can deploy a basic Next.js app to Vercel, configure production environment variables safely, inspect logs, debug common deployment issues, and explain how the production app differs from local development.

---

## Level 11 completion readiness

Learner is ready to move into larger production app topics when they can:

* build login/register UI
* show session-aware navigation
* distinguish public and protected routes
* handle auth error states
* explain why sensitive keys must not be exposed
* connect a Next.js app to Supabase/backend data
* explain RLS at a beginner level
* persist user-owned data
* organize database calls in readable service functions
* understand the purpose of profile rows
* deploy a Next.js app to Vercel
* configure production environment variables
* inspect production logs
* debug common deployment problems
* explain local vs production differences
* write a short production readiness note

Next level can introduce larger application architecture, testing, security hardening, performance, accessibility audits, or portfolio readiness after the learner can connect auth, persistence, and deployment workflows safely.

# Level 12: Forms, Validation, and Data Fetching

## Goal

Build data-heavy product flows with useful validation and server-state thinking.

At this level, learners move from basic forms and persistence into more realistic product flows. They learn how to build maintainable forms, validate data with schemas, show helpful accessible errors, handle submit states, map API responses, and reason about server state separately from local UI state.

This level should stay product-focused and beginner-safe. Do not introduce overly complex form architecture, advanced query caching strategies, optimistic updates at scale, realtime synchronization, or full backend architecture yet.

---

## Module: React Hook Form and Zod

### Module goal

Learners can build practical forms using React Hook Form and Zod, validate user input with schemas, show field errors, handle submit state, and reuse schemas safely.

### Prerequisite

Learner understands React forms, controlled inputs, TypeScript core types, Next.js basics, async submit flows, and npm package installation.

### Planned lesson sequence

| Order | Lesson title                           | Lesson role                   | Main concept                            | Activity pattern                                                         | Practice output                                    | Bridge / prepares for |
| ----- | -------------------------------------- | ----------------------------- | --------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------- | --------------------- |
| 1     | Form Registration                      | Tooling + guided practice     | registering fields with React Hook Form | tool prerequisite note, code-example, practice, troubleshooting, summary | Build a small registered form                      | Zod schema            |
| 2     | Zod Schema                             | Concept + validation practice | schema as validation source             | text, schema example, type reading task, practice, summary               | Create a schema for form values                    | Field errors          |
| 3     | Field Errors                           | UX + implementation lesson    | showing validation errors near fields   | text, broken form example, fix task, checklist, summary                  | Render clear field error messages                  | Submit state          |
| 4     | Submit State                           | Async form lesson             | pending, success, and failed submit     | text, async submit example, practice, summary                            | Disable submit while pending and show result state | Schema reuse          |
| 5     | Schema Reuse                           | Code organization lesson      | shared schema and inferred types        | text, before/after example, refactor task, callout, summary              | Reuse schema/type across form and submit logic     | Assessment            |
| 6     | Uji Kompetensi React Hook Form and Zod | Module assessment             | typed form validation workflow          | recap, quiz, validated form task, documentation bridge, summary          | Build and explain a validated form flow            | Validation UX         |

### Built-in practice pattern

* Form registration tasks.
* Schema editing tasks.
* Type error reading.
* Field error rendering.
* Submit state tasks.
* Schema reuse examples.
* Small local project checklist for installing required packages.
* Avoid complex dynamic form builders.

### Tooling guidance

Tools/packages likely introduced:

* `react-hook-form`
* `zod`
* `@hookform/resolvers`

Authoring guidance:

* Mention packages before asking learners to install them.
* Use official docs/resource links.
* Explain what each package is used for.
* Show install commands one at a time.
* Do not assume the learner already knows resolver setup.
* Do not pretend FluentStack can verify packages installed in the learner’s local project.

### Documentation Bridge

Suggested docs:

* React Hook Form docs: Getting Started
* React Hook Form docs: register
* React Hook Form docs: formState/errors
* React Hook Form Resolvers docs
* Zod docs: basic usage
* Zod docs: string/object validation
* TypeScript docs only as supporting reference when inferred types are discussed

Focus:

* registering fields
* schema validation
* resolver connection
* field-level errors
* submit state
* inferred form type
* simple schema reuse

Ignore for now:

* complex nested field arrays
* wizard forms
* advanced resolver customization
* custom validation pipelines
* server actions
* multi-step forms
* internationalized validation messages
* schema generation from database

### Local Dev Milestone connection

Upgrade a local Next.js or React project form:

* install React Hook Form and Zod
* create a simple form schema
* register fields
* connect resolver
* show field errors
* handle submit pending state
* reuse inferred TypeScript type from schema
* write a short note explaining what the schema validates

### Uji Kompetensi

Assessment coverage:

* React Hook Form purpose
* field registration
* Zod schema purpose
* resolver connection
* field errors
* submit pending state
* success/error submit state
* schema reuse
* inferred TypeScript types
* avoiding duplicated validation logic

Readiness criteria:

Learner can build a small validated form, connect React Hook Form with Zod, show field errors clearly, handle submit state, reuse schema-derived types, and explain why schema validation makes form logic safer.

---

## Module: Validation UX and Accessible Errors

### Module goal

Learners can design validation experiences that are clear, accessible, and helpful instead of frustrating or vague.

### Prerequisite

Learner understands React forms, validation schemas, field errors, submit state, semantic HTML forms, labels, and basic accessibility.

### Planned lesson sequence

| Order | Lesson title                 | Lesson role                | Main concept                                         | Activity pattern                                               | Practice output                                      | Bridge / prepares for |
| ----- | ---------------------------- | -------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| 1     | Inline Errors                | UX pattern lesson          | errors near the relevant field                       | text, good/bad examples, practice, checklist, summary          | Show useful field-level errors                       | Summary errors        |
| 2     | Summary Errors               | Form-level UX lesson       | helping users understand all issues                  | text, form case study, refactor task, quick-check, summary     | Add an error summary for failed submit               | Focus management      |
| 3     | Focus Management             | Accessibility lesson       | move attention to important feedback                 | text, case study, local checklist, callout, summary            | Focus first invalid field or summary after submit    | Disabled state        |
| 4     | Disabled State               | State design lesson        | prevent duplicate submit without blocking correction | text, async example, practice, checklist, summary              | Disable submit only when appropriate                 | Success state         |
| 5     | Success State                | Completion feedback lesson | confirm action and next step                         | text, before/after examples, practice, summary                 | Show success message and next action                 | Assessment            |
| 6     | Uji Kompetensi Validation UX | Module assessment          | accessible validation flow                           | recap, quiz, validation UX task, documentation bridge, summary | Improve a form’s validation/error/success experience | Server state          |

### Built-in practice pattern

* Good/bad validation message comparisons.
* Inline error improvement tasks.
* Error summary tasks.
* Focus management checklist.
* Disabled submit state case studies.
* Success message writing practice.
* Accessibility self-review.
* Avoid overcomplicated form systems.

### Documentation Bridge

Suggested docs:

* MDN: Client-side form validation
* MDN: HTML forms
* MDN: form labels and accessible descriptions
* WAI/W3C form accessibility guidance
* WAI/W3C error identification guidance
* React accessibility references when relevant

Focus:

* clear inline errors
* specific error messages
* error summary
* focus after failed submit
* `aria-describedby`
* label and error relationship
* disabled vs pending state
* success feedback

Ignore for now:

* complex ARIA widgets
* advanced screen reader testing workflows
* enterprise design system forms
* multi-language error systems
* backend-only validation architecture
* multi-step form orchestration

### Local Dev Milestone connection

Upgrade a local validated form:

* improve error copy
* place errors near fields
* add summary error when submit fails
* ensure labels and errors are connected
* avoid disabling fields unnecessarily
* show success feedback after submit
* write a short note explaining how the form helps the user recover from mistakes

### Uji Kompetensi

Assessment coverage:

* inline error placement
* useful error message wording
* summary errors
* focus management
* disabled submit state
* pending state vs disabled state
* success state
* label/error relationship
* accessible validation basics
* explaining validation UX decisions

Readiness criteria:

Learner can improve a form so users understand what went wrong, where to fix it, what is happening during submit, and what happened after success.

---

## Module: Server-State Thinking

### Module goal

Learners understand the difference between local UI state and server state, can handle loading/error/empty/success flows, map API responses into UI-ready data, and apply basic optimistic UI only when appropriate.

### Prerequisite

Learner understands async JavaScript, React state, reusable UI states, Next.js basics, API responses, form submit flows, and TypeScript data modeling.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role            | Main concept                                             | Activity pattern                                              | Practice output                                  | Bridge / prepares for     |
| ----- | ------------------------------------ | ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------ | ------------------------- |
| 1     | Server State vs Client State         | Concept                | data owned by server vs UI-only state                    | text, examples, decision task, quick-check, summary           | Classify state examples correctly                | Loading/error/empty       |
| 2     | Loading/Error/Empty States           | UI state pattern       | honest data-fetching UI states                           | text, case study, coding-practice, checklist, summary         | Render complete server-state UI flow             | Mapping responses         |
| 3     | Mapping API Responses                | Data boundary lesson   | transform external data before rendering                 | text, raw-to-UI example, type task, summary                   | Map API response into UI-ready model             | Optimistic UI             |
| 4     | Optimistic UI Basics                 | Product pattern lesson | update UI before server confirms, then recover if needed | text, safe/unsafe examples, practice, callout, summary        | Add a small optimistic toggle or item update     | Assessment                |
| 5     | Uji Kompetensi Server-State Thinking | Module assessment      | server-state flow readiness                              | recap, quiz, server-state task, documentation bridge, summary | Explain and implement a small data-heavy UI flow | Testing/data architecture |

### Built-in practice pattern

* State classification tasks.
* Loading/error/empty/success UI tasks.
* API response mapping tasks.
* TypeScript boundary tasks.
* Optimistic UI case studies.
* Recovery/rollback examples.
* Optional TanStack Query examples only if the current app/module has introduced it clearly.
* Do not require a query library before the mental model is understood.

### Tooling guidance

Possible tools:

* built-in `fetch`
* Next.js data fetching patterns
* TanStack Query, if introduced in this module or a later dedicated module

Authoring guidance:

* Start with the mental model first.
* Do not make TanStack Query mandatory too early.
* If TanStack Query is used, explain why server state needs different tools from local UI state.
* Keep examples small and product-like.

### Documentation Bridge

Suggested docs:

* React docs: state and UI rendering
* Next.js docs: data fetching / fetching data
* Next.js docs: route handlers, if used in examples
* TanStack Query docs: Overview, if used
* TanStack Query docs: Queries and Mutations, if used
* MDN: Fetch API
* TypeScript docs for response typing as supporting reference

Focus:

* server state vs client state
* loading state
* error state
* empty state
* success state
* transforming API response
* typed response boundaries
* optimistic update basics
* rollback/recovery when optimistic update fails

Ignore for now:

* advanced caching policies
* infinite queries
* offline synchronization
* realtime collaboration
* normalized caches
* complex invalidation strategy
* optimistic updates at scale
* background refetch tuning
* SSR data architecture deep dive

### Local Dev Milestone connection

Upgrade a local Next.js or React project with server-state thinking:

* classify state in the feature
* fetch or simulate server-owned data
* show loading/error/empty/success states
* map raw response into UI-ready data
* optionally add one small optimistic UI interaction
* write a short note explaining what data belongs to the server and what state belongs only to the UI

### Uji Kompetensi

Assessment coverage:

* server state vs client state
* loading/error/empty/success state
* API response mapping
* typed UI-ready data
* safe optimistic UI use case
* rollback/recovery if optimistic update fails
* when a query library may help
* avoiding overcomplicated data fetching for small features

Readiness criteria:

Learner can identify server-owned data, keep UI-only state separate, show honest data-fetching states, transform API responses before rendering, and apply basic optimistic UI only when the recovery path is clear.

---

## Level 12 completion readiness

Learner is ready to move into testing, quality, or larger data-heavy product flows when they can:

* install and explain React Hook Form and Zod
* register form fields
* create a Zod schema
* connect schema validation to form handling
* show field errors clearly
* handle submit pending/success/error states
* reuse schema-inferred TypeScript types
* write useful validation error messages
* add summary errors when helpful
* consider focus management after failed submit
* avoid confusing disabled states
* show success feedback with a clear next step
* distinguish server state from client UI state
* render loading/error/empty/success data states
* map API responses into UI-ready data
* understand when optimistic UI is safe
* explain data-heavy UX decisions clearly

Next level can introduce testing, reliability, accessibility audits, or more advanced data-fetching architecture after the learner can build useful forms and data flows without confusing validation, server state, and local UI state.

# Level 13: Testing

## Goal

Test important behavior without testing implementation details.

At this level, learners learn how to test frontend behavior with confidence. They start with testing mindset, then move into unit/component testing, integration testing with API mocking, and end-to-end testing for critical user journeys.

This level should stay practical. Do not chase 100% coverage. Do not test internal implementation details. Focus on user-visible behavior, important states, and confidence for real product flows.

---

## Module: Unit and Component Testing

### Module goal

Learners can test small functions and React components by focusing on behavior, user interactions, and accessible UI output.

### Prerequisite

Learner understands React components, props, state, forms, accessibility basics, TypeScript basics, npm scripts, and local project workflow.

### Planned lesson sequence

| Order | Lesson title                              | Lesson role                | Main concept                                    | Activity pattern                                                                    | Practice output                               | Bridge / prepares for |
| ----- | ----------------------------------------- | -------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------- | --------------------- |
| 1     | Testing Mindset                           | Concept                    | test behavior, not implementation details       | text, good/bad test examples, quick-check, summary                                  | Learner can identify useful test targets      | Vitest                |
| 2     | Vitest Basics                             | Tooling + guided practice  | test files, assertions, npm test script         | tool prerequisite note, code-example, command walkthrough, local checklist, summary | Run a small function test locally             | React Testing Library |
| 3     | React Testing Library                     | Component testing lesson   | render component and assert visible output      | text, code-example, component test task, summary                                    | Test a simple component render                | User events           |
| 4     | User Events                               | Interaction testing lesson | simulate user behavior                          | text, button/form example, practice, troubleshooting, summary                       | Test click/input behavior                     | Accessible queries    |
| 5     | Accessible Queries                        | Testing quality lesson     | query by role, label, text, and accessible name | text, before/after query example, checklist, quick-check, summary                   | Improve tests to use user-like queries        | Assessment            |
| 6     | Uji Kompetensi Unit and Component Testing | Module assessment          | behavior-focused component tests                | recap, quiz, component test task, documentation bridge, summary                     | Write tests for a small interactive component | Integration testing   |

### Built-in practice pattern

* Good vs bad test comparison.
* Small function test.
* Component render test.
* User event test.
* Accessible query refactor.
* Local test command checklist.
* Test error reading practice.
* Avoid snapshot testing as the default beginner strategy.

### Tooling guidance

Tools likely introduced:

* Vitest
* React Testing Library
* `@testing-library/user-event`
* `@testing-library/jest-dom`

Authoring guidance:

* Explain what each package is for before install/use.
* Show commands one by one.
* Mention that exact setup can differ between Vite, Next.js, and other projects.
* Do not pretend FluentStack can verify local test results automatically.
* Prefer local self-review and test output reading.

### Documentation Bridge

Suggested docs:

* Vitest docs: Getting Started
* Vitest docs: Assertions
* Testing Library docs: About Queries
* Testing Library docs: React Testing Library
* Testing Library docs: User Event
* jest-dom docs when matcher examples are used

Focus:

* test behavior
* test file structure
* assertions
* rendering components
* user events
* accessible queries
* reading failed test output
* avoiding implementation detail tests

Ignore for now:

* snapshot testing strategy
* mocking complex APIs
* test coverage targets
* CI setup
* E2E testing
* visual regression testing
* complex test utilities
* implementation-detail queries

### Local Dev Milestone connection

Add tests to a local React or Next.js project:

* configure or confirm test tooling
* run test command
* test one helper function
* test one component render
* test one user interaction
* use accessible queries
* write a short note explaining what behavior the tests protect

### Uji Kompetensi

Assessment coverage:

* testing mindset
* behavior vs implementation detail
* Vitest basics
* assertions
* React Testing Library render
* user events
* accessible queries
* reading failed test output
* choosing what not to test

Readiness criteria:

Learner can run local unit/component tests, write behavior-focused assertions, test user interactions, use accessible queries, and explain why a test gives confidence without depending on internal implementation details.

---

## Module: Integration and API Mocking

### Module goal

Learners can test feature-level behavior that involves multiple components, async states, and API responses by mocking network behavior safely.

### Prerequisite

Learner understands component testing, async JavaScript, loading/error/empty/success states, forms, server-state thinking, and API response mapping.

### Planned lesson sequence

| Order | Lesson title                               | Lesson role               | Main concept                                      | Activity pattern                                                  | Practice output                                   | Bridge / prepares for |
| ----- | ------------------------------------------ | ------------------------- | ------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------- | --------------------- |
| 1     | Integration Test Scope                     | Decision rule             | test a feature flow, not every internal component | text, case study, test scope task, quick-check, summary           | Choose reasonable integration test boundaries     | MSW                   |
| 2     | MSW Basics                                 | Tooling + guided practice | mock network requests at the boundary             | tool prerequisite note, code-example, setup checklist, summary    | Mock one API response in a test                   | API states            |
| 3     | Loading/Error/Success API States           | Async testing lesson      | test visible states from mocked responses         | text, example, practice, troubleshooting, summary                 | Test loading, error, and success UI               | Auth-adjacent cases   |
| 4     | Auth-Adjacent Test Cases                   | Feature testing lesson    | test session-aware UI without real auth backend   | text, mock session example, case study, checklist, summary        | Test login/logout-like UI states safely           | Assessment            |
| 5     | Uji Kompetensi Integration and API Mocking | Module assessment         | feature behavior with mocked APIs                 | recap, quiz, integration test task, documentation bridge, summary | Test a feature with success and failure API paths | E2E strategy          |

### Built-in practice pattern

* Integration test scope case studies.
* API mock setup reading.
* MSW handler examples.
* Loading/error/success state tests.
* Auth-adjacent UI state tests.
* Mock response mapping tasks.
* Test failure debugging.
* Keep mocks simple and readable.

### Tooling guidance

Tools likely introduced:

* MSW
* Testing Library async utilities
* Existing Vitest/Testing Library setup

Authoring guidance:

* Explain why mocking at the network boundary is useful.
* Avoid mocking every internal function.
* Keep handlers close to the test scenario when teaching.
* Avoid requiring real API keys or real auth credentials.
* Make it clear that mocked tests do not prove the real backend is healthy.

### Documentation Bridge

Suggested docs:

* MSW docs: Getting Started
* MSW docs: Network behavior
* MSW docs: REST API mocking
* Testing Library docs: Async Methods
* Testing Library docs: Appearance and Disappearance
* Testing Library docs: User Event

Focus:

* integration test scope
* network boundary mocking
* success response
* error response
* loading state
* async assertions
* auth-adjacent UI without real auth dependency
* readable mock data

Ignore for now:

* complex contract testing
* real database test setup
* full auth provider testing
* visual regression testing
* complex cache invalidation tests
* advanced MSW lifecycle patterns
* CI test environment complexity

### Local Dev Milestone connection

Add feature-level tests to a local React or Next.js project:

* choose one feature flow
* mock success API response
* mock error API response
* assert loading/success/error UI
* optionally mock session-aware UI state
* write a short note explaining what the integration test covers and what it does not cover

### Uji Kompetensi

Assessment coverage:

* integration test scope
* what to mock
* why network-boundary mocking helps
* MSW handler basics
* loading state test
* success state test
* error state test
* auth-adjacent UI test
* async assertion basics
* limitations of mocked tests

Readiness criteria:

Learner can write a feature-level test that uses mocked API responses, verifies important async UI states, avoids over-mocking internals, and explains what confidence the test provides.

---

## Module: End-to-End Testing Strategy

### Module goal

Learners can decide what belongs in an end-to-end test, write basic Playwright tests for critical user journeys, and understand common causes of flaky tests.

### Prerequisite

Learner understands local app workflow, testing mindset, component tests, integration tests, user journeys, forms, auth-aware UI, and deployment basics.

### Planned lesson sequence

| Order | Lesson title                        | Lesson role               | Main concept                                                 | Activity pattern                                                                    | Practice output                       | Bridge / prepares for |
| ----- | ----------------------------------- | ------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------- | --------------------- |
| 1     | What E2E Should Cover               | Decision rule             | test critical user journeys, not every detail                | text, journey map example, test selection task, quick-check, summary                | Choose high-value E2E scenarios       | Playwright            |
| 2     | Playwright Basics                   | Tooling + guided practice | browser automation for user journeys                         | tool prerequisite note, code-example, command walkthrough, local checklist, summary | Run one basic Playwright test locally | Critical journeys     |
| 3     | Critical User Journeys              | Product testing lesson    | sign up, login, create item, submit form, navigation         | text, case study, E2E flow task, summary                                            | Write a journey-based test outline    | Flakiness             |
| 4     | Flaky Test Causes                   | Debugging lesson          | timing, unstable selectors, test data, external dependencies | text, broken test examples, troubleshooting checklist, summary                      | Identify and fix a flaky test cause   | Assessment            |
| 5     | Uji Kompetensi E2E Testing Strategy | Module assessment         | E2E testing judgment                                         | recap, quiz, E2E strategy task, documentation bridge, summary                       | Define and run one critical E2E flow  | Quality workflow      |

### Built-in practice pattern

* Critical journey selection tasks.
* Playwright code reading.
* Local Playwright run checklist.
* Locator improvement tasks.
* Flaky test debugging case studies.
* Writing practice for E2E test strategy.
* Avoid building a huge E2E suite.

### Tooling guidance

Tools likely introduced:

* Playwright
* Local dev server
* Test browser installation if required by Playwright

Authoring guidance:

* Explain install/setup before command use.
* Keep the first test very small.
* Use user-facing locators when possible.
* Explain that E2E tests are slower and should cover critical paths.
* Do not make learners test every UI state with E2E.

### Documentation Bridge

Suggested docs:

* Playwright docs: Getting Started
* Playwright docs: Writing Tests
* Playwright docs: Locators
* Playwright docs: Assertions
* Playwright docs: Trace Viewer
* Testing Library docs as supporting reference for user-centered testing mindset

Focus:

* what E2E is for
* critical user journeys
* browser automation basics
* locators
* assertions
* waiting behavior
* flaky test causes
* debugging failed E2E tests

Ignore for now:

* cross-browser matrix strategy
* parallel CI optimization
* advanced fixtures
* visual regression testing
* complex auth state reuse
* test sharding
* large suite maintenance
* production monitoring

### Local Dev Milestone connection

Run tests in a local project:

* add or confirm Playwright setup
* run the local dev server
* run one E2E test
* test one critical path
* use stable locators
* inspect failure output or trace if available
* write a short note explaining why this journey deserves E2E coverage

### Uji Kompetensi

Assessment coverage:

* what E2E should cover
* what E2E should not cover
* Playwright basics
* locators
* assertions
* critical user journeys
* flaky test causes
* debugging failed E2E tests
* balancing unit, integration, and E2E tests

Readiness criteria:

Learner can choose high-value E2E scenarios, run a basic Playwright test locally, use stable locators, identify common flaky test causes, and explain how E2E fits alongside unit and integration testing.

---

## Level 13 completion readiness

Learner is ready to move into broader quality and production confidence topics when they can:

* explain behavior-focused testing
* avoid testing implementation details
* run Vitest locally
* write a basic unit test
* test React component output
* test user interactions
* use accessible queries
* write feature-level tests with mocked API responses
* test loading, success, and error states
* understand the limits of mocked integration tests
* choose critical user journeys for E2E testing
* run a basic Playwright test locally
* identify flaky test causes
* explain how unit, integration, and E2E tests work together

Next level can introduce performance, accessibility audits, reliability, CI workflows, or production quality gates after the learner can test important frontend behavior with the right level of test.

# Level 14: Performance

## Goal

Improve user experience by measuring and reducing real performance costs.

At this level, learners learn how to think about frontend performance as user experience, not just numbers. They measure page loading, interaction responsiveness, layout stability, asset cost, bundle size, hydration cost, and rendering cost before deciding what to optimize.

This level should stay practical and measurement-driven. Do not optimize blindly. Do not introduce advanced performance engineering, custom infrastructure, edge caching strategy, or deep browser internals yet.

---

## Module: Core Web Vitals

### Module goal

Learners understand Core Web Vitals as user-centered performance signals and can use Lighthouse, browser tools, and simple performance budgets to identify practical improvement areas.

### Prerequisite

Learner understands Next.js, React rendering basics, browser DevTools, production deployment, and basic testing/quality workflows.

### Planned lesson sequence

| Order | Lesson title                     | Lesson role                   | Main concept                                | Activity pattern                                                    | Practice output                                    | Bridge / prepares for |
| ----- | -------------------------------- | ----------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- | --------------------- |
| 1     | LCP                              | Concept + diagnosis           | largest visible content loading             | text, visual example, Lighthouse reading task, quick-check, summary | Identify likely LCP element on a page              | INP                   |
| 2     | INP                              | Concept + interaction example | responsiveness to user interactions         | text, interaction case study, DevTools example, checklist, summary  | Explain why a slow click/input feels bad           | CLS                   |
| 3     | CLS                              | Concept + layout stability    | unexpected layout shifts                    | text, before/after example, layout shift task, quick-check, summary | Identify common causes of layout shift             | Lab vs field          |
| 4     | Lighthouse and Field vs Lab Data | Tooling lesson                | test environment vs real user data          | text, report walkthrough, comparison task, callout, summary         | Read a Lighthouse report without overreacting      | Performance budget    |
| 5     | Performance Budget               | Product/engineering rule      | define limits before performance gets worse | text, budget examples, checklist, writing-practice, summary         | Draft a simple performance budget for a page       | Assessment            |
| 6     | Uji Kompetensi Core Web Vitals   | Module assessment             | performance measurement basics              | recap, quiz, performance report task, documentation bridge, summary | Analyze one page and propose measured improvements | Asset optimization    |

### Built-in practice pattern

* Lighthouse report reading.
* DevTools observation checklist.
* “What is likely causing this metric?” case studies.
* Before/after UI examples.
* Performance budget writing practice.
* Avoid requiring perfect scores.
* Focus on understanding trade-offs and user impact.

### Documentation Bridge

Suggested docs:

* web.dev: Core Web Vitals
* web.dev: Largest Contentful Paint
* web.dev: Interaction to Next Paint
* web.dev: Cumulative Layout Shift
* Chrome DevTools: Lighthouse
* Chrome DevTools: Performance panel

Focus:

* what each Core Web Vital means for users
* LCP element identification
* slow interactions
* layout shifts
* lab data vs field data
* Lighthouse as a diagnostic tool
* simple performance budget

Ignore for now:

* advanced browser scheduling
* custom RUM infrastructure
* synthetic monitoring platforms
* complex analytics pipelines
* advanced trace analysis
* SEO deep dive
* perfect Lighthouse score chasing

### Local Dev Milestone connection

Measure one local or deployed Next.js page:

* run Lighthouse
* identify one likely LCP issue
* identify one possible interaction cost
* check for layout shift
* write a short performance note with current score, observed issue, and next improvement

### Uji Kompetensi

Assessment coverage:

* LCP meaning
* INP meaning
* CLS meaning
* reading Lighthouse reports
* lab vs field data
* identifying likely metric causes
* setting simple performance budgets
* avoiding blind optimization

Readiness criteria:

Learner can read a basic performance report, explain what Core Web Vitals mean for users, identify likely causes of poor metrics, and propose practical improvements without chasing perfect scores.

---

## Module: Asset and Bundle Optimization

### Module goal

Learners can reduce avoidable asset and JavaScript cost by optimizing images, fonts, bundle awareness, code splitting, and dynamic imports.

### Prerequisite

Learner understands Next.js basics, Core Web Vitals, App Router routes/layouts, Server and Client Component boundaries, and local production builds.

### Planned lesson sequence

| Order | Lesson title                                 | Lesson role             | Main concept                                             | Activity pattern                                                   | Practice output                                                  | Bridge / prepares for |
| ----- | -------------------------------------------- | ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | --------------------- |
| 1     | Image Optimization                           | Practical pattern       | image size, dimensions, priority, and responsive loading | text, before/after example, Next image task, checklist, summary    | Improve one image-heavy page                                     | Fonts                 |
| 2     | Font Optimization                            | Practical pattern       | loading readable fonts without hurting UX                | text, font loading example, code reading task, callout, summary    | Use a safer font loading approach                                | Bundle awareness      |
| 3     | Bundle Awareness                             | Tooling lesson          | JavaScript sent to the browser has cost                  | text, build output/report reading, checklist, quick-check, summary | Identify a heavy client-side dependency or route                 | Code splitting        |
| 4     | Code Splitting                               | Concept + route pattern | loading code only where needed                           | text, route/component example, practice, summary                   | Split a non-critical feature from initial load                   | Dynamic imports       |
| 5     | Dynamic Imports                              | Guided practice         | load heavy UI only when needed                           | text, `dynamic()`/import example, task, trade-off callout, summary | Lazy-load one non-critical component                             | Assessment            |
| 6     | Uji Kompetensi Asset and Bundle Optimization | Module assessment       | reduce page asset and bundle cost                        | recap, quiz, optimization task, documentation bridge, summary      | Improve one page’s image/font/bundle cost and explain trade-offs | Hydration/rendering   |

### Built-in practice pattern

* Image optimization checklist.
* Font loading review.
* Build output or bundle awareness tasks.
* “Should this be client-side?” case studies.
* Dynamic import examples.
* Before/after performance note.
* Avoid premature lazy-loading of tiny components.

### Documentation Bridge

Suggested docs:

* Next.js docs: Image Optimization
* Next.js docs: Font Optimization
* Next.js docs: Lazy Loading
* Next.js docs: Dynamic Imports
* Next.js docs: Production build output
* Vercel/Next.js performance references when useful

Focus:

* image dimensions
* image priority when appropriate
* responsive images
* font loading
* JavaScript bundle cost
* client-side dependency cost
* route-level and component-level splitting
* dynamic imports for non-critical UI

Ignore for now:

* custom image CDN architecture
* advanced font subsetting workflows
* micro-frontend bundling
* webpack internals
* manual chunk strategy
* advanced tree shaking analysis
* complex performance budgets across many teams

### Local Dev Milestone connection

Optimize one local or deployed Next.js page:

* replace an unoptimized image pattern
* review font loading
* inspect build output or bundle hints
* identify one unnecessary client-side dependency or heavy component
* lazy-load one non-critical feature if justified
* write a short note explaining what changed and why

### Uji Kompetensi

Assessment coverage:

* image optimization basics
* font optimization basics
* bundle cost awareness
* when JavaScript cost matters
* code splitting purpose
* dynamic import use case
* avoiding unnecessary lazy-loading
* explaining optimization trade-offs

Readiness criteria:

Learner can improve asset and bundle cost on a page, choose when an image/font/component needs optimization, and explain why the optimization improves user experience instead of just changing code for its own sake.

---

## Module: Rendering Cost and Hydration

### Module goal

Learners understand hydration cost, Server vs Client rendering decisions, Client Component boundaries, and expensive re-render patterns in React/Next.js apps.

### Prerequisite

Learner understands React rendering, Next.js Server and Client Components, performance measurement basics, bundle awareness, and React performance awareness.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role       | Main concept                                               | Activity pattern                                                    | Practice output                                        | Bridge / prepares for   |
| ----- | ------------------------------------------- | ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------- |
| 1     | Hydration Cost                              | Concept           | browser work needed to make server-rendered UI interactive | text, mental model, page example, quick-check, summary              | Explain why interactive UI has browser cost            | Server/client decisions |
| 2     | Server vs Client Rendering Decisions        | Decision rule     | choose the right rendering boundary                        | text, case studies, boundary decision task, summary                 | Decide which parts should stay server-rendered         | Client boundaries       |
| 3     | Client Component Boundaries                 | Practical pattern | keep client components as small as useful                  | text, before/after example, refactor task, checklist, summary       | Move interactivity into smaller client islands         | Expensive re-renders    |
| 4     | Expensive Re-renders                        | Debugging lesson  | unnecessary re-renders and heavy calculations              | text, profiler example, fix task, summary                           | Identify and reduce one expensive render path          | Assessment              |
| 5     | Uji Kompetensi Rendering Cost and Hydration | Module assessment | rendering performance judgment                             | recap, quiz, rendering decision task, documentation bridge, summary | Explain and improve one hydration/rendering cost issue | Production quality      |

### Built-in practice pattern

* Server vs client boundary case studies.
* Hydration mental model exercises.
* “Does this need to be client?” decision tasks.
* Client boundary refactor.
* Expensive render diagnosis.
* Profiler-guided improvement.
* Writing practice for explaining rendering trade-offs.

### Documentation Bridge

Suggested docs:

* Next.js docs: Server and Client Components
* Next.js docs: `"use client"` directive
* Next.js docs: Rendering
* React docs: render and commit
* React docs: memoization references when useful
* Chrome DevTools Performance references
* React DevTools Profiler references

Focus:

* hydration as browser work
* server-rendered UI vs client interactivity
* keeping client boundaries small
* avoiding making whole pages client components
* expensive calculations during render
* measuring before refactoring
* explaining rendering trade-offs

Ignore for now:

* React internals deep dive
* streaming architecture
* partial prerendering strategy
* edge rendering strategy
* advanced cache and revalidation strategy
* compiler-level optimization
* complex profiling traces
* server component architecture debates

### Local Dev Milestone connection

Review one Next.js page:

* identify Client Components
* ask which parts truly need interactivity
* move non-interactive UI back to Server Components if appropriate
* reduce one expensive render calculation
* measure or observe the result
* write a short note explaining the rendering boundary decision

### Uji Kompetensi

Assessment coverage:

* hydration meaning
* hydration cost
* Server vs Client Component decisions
* `"use client"` boundary placement
* keeping client boundaries small
* expensive re-renders
* measuring before changing code
* explaining rendering trade-offs

Readiness criteria:

Learner can explain hydration cost in simple terms, keep Client Components focused on interactivity, avoid unnecessary client boundaries, identify expensive render work, and improve rendering cost with measured reasoning.

---

## Level 14 completion readiness

Learner is ready to move into broader production quality work when they can:

* explain LCP, INP, and CLS in user-centered terms
* read a Lighthouse report without chasing perfect scores
* understand lab data vs field data
* define a simple performance budget
* optimize common image and font issues
* reason about JavaScript bundle cost
* use code splitting and dynamic imports when justified
* explain hydration cost
* choose Server vs Client Component boundaries intentionally
* keep Client Components small when possible
* identify expensive re-render patterns
* measure before optimizing
* explain performance trade-offs clearly

Next level can introduce accessibility audits, production quality gates, monitoring, or architecture-level performance decisions after the learner can measure and improve real user-facing performance costs.

# Level 15: Accessibility

## Goal

Build UI that works for keyboard, screen reader, and low-vision users.

At this level, learners move from basic accessibility awareness into practical accessibility implementation and testing. They review semantic HTML, keyboard navigation, focus behavior, accessible component patterns, accessible form errors, user preferences, and testing tools.

This level should stay practical and product-focused. Do not turn accessibility into memorizing every WCAG rule. Focus on common UI problems learners will actually build: navigation, forms, modals, dropdowns, tabs, focus states, color contrast, reduced motion, and testing.

---

## Module: Semantic Review and Keyboard Navigation

### Module goal

Learners can review UI structure for semantic meaning, navigate with keyboard, manage focus visibility, add skip links, and identify keyboard traps.

### Prerequisite

Learner understands semantic HTML, forms, React components, basic UI states, routing/layouts, and browser DevTools.

### Planned lesson sequence

| Order | Lesson title                                           | Lesson role                | Main concept                                  | Activity pattern                                                     | Practice output                                 | Bridge / prepares for |
| ----- | ------------------------------------------------------ | -------------------------- | --------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------------------- |
| 1     | Semantic HTML Review                                   | Review + audit             | semantic structure supports accessibility     | text, before/after markup, audit checklist, quick-check, summary     | Improve one page’s semantic structure           | Tab order             |
| 2     | Tab Order                                              | Keyboard navigation lesson | focus should follow meaningful page order     | text, keyboard walkthrough, broken example, practice, summary        | Fix confusing tab order                         | Focus visibility      |
| 3     | Focus Visibility                                       | UI state lesson            | users need to see where focus is              | text, good/bad examples, CSS task, checklist, summary                | Add visible focus styles                        | Skip links            |
| 4     | Skip Links                                             | Navigation pattern         | skip repeated navigation to main content      | text, code-example, local checklist, summary                         | Add skip-to-content link                        | Keyboard traps        |
| 5     | Keyboard Traps                                         | Debugging lesson           | users must be able to leave interactive areas | text, modal/dropdown case study, debugging checklist, summary        | Identify and fix a simple keyboard trap         | Assessment            |
| 6     | Uji Kompetensi Semantic Review and Keyboard Navigation | Module assessment          | semantic and keyboard readiness               | recap, quiz, accessibility audit task, documentation bridge, summary | Audit and improve keyboard navigation on a page | Accessible components |

### Built-in practice pattern

* Semantic markup review.
* Keyboard-only navigation checklist.
* Tab order debugging.
* Focus style CSS tasks.
* Skip link implementation.
* Keyboard trap case studies.
* Writing practice for explaining accessibility fixes.
* Avoid complex ARIA until native HTML and keyboard basics are understood.

### Documentation Bridge

Suggested docs:

* MDN: Accessibility
* MDN: HTML semantic elements
* MDN: Keyboard accessible
* WAI tutorials: page structure
* WAI tutorials: menus and navigation
* WCAG quick references for keyboard and focus guidance

Focus:

* semantic landmarks
* headings
* buttons vs links
* tab order
* visible focus
* skip links
* keyboard traps
* keyboard-only testing

Ignore for now:

* complex ARIA widgets
* screen reader deep testing
* advanced focus libraries
* full WCAG audit process
* accessibility legal compliance detail
* enterprise accessibility reporting

### Local Dev Milestone connection

Audit one local React or Next.js page:

* navigate with keyboard only
* confirm heading order
* confirm main landmarks
* check visible focus
* add or test skip link
* identify one keyboard issue
* write a short note explaining what was fixed and why it matters

### Uji Kompetensi

Assessment coverage:

* semantic HTML purpose
* heading and landmark structure
* button vs link decision
* tab order
* focus visibility
* skip links
* keyboard traps
* keyboard-only audit process
* explaining accessibility improvements

Readiness criteria:

Learner can inspect a page with keyboard-only navigation, identify semantic and focus issues, add basic skip navigation, avoid keyboard traps, and explain why the changes help real users.

---

## Module: Accessible Components

### Module goal

Learners can build common interactive components with accessible focus behavior, keyboard support, semantic structure, and ARIA only when needed.

### Prerequisite

Learner understands React components, state, events, forms, focus behavior, keyboard navigation, and basic accessibility testing.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role       | Main concept                                           | Activity pattern                                                 | Practice output                             | Bridge / prepares for  |
| ----- | ------------------------------------ | ----------------- | ------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------- | ---------------------- |
| 1     | Modal Accessibility                  | Component pattern | focus management, close behavior, and dialog semantics | text, case study, checklist, practice, summary                   | Improve a modal interaction                 | Dropdown accessibility |
| 2     | Dropdown Accessibility               | Component pattern | button trigger, keyboard behavior, and menu state      | text, good/bad example, practice, troubleshooting, summary       | Build or audit a dropdown pattern           | Tabs                   |
| 3     | Tabs Accessibility                   | Component pattern | tablist, tab, tabpanel, and keyboard expectations      | text, pattern walkthrough, practice, quick-check, summary        | Build or audit a simple tabs component      | Focus management       |
| 4     | Focus Management                     | Practical pattern | move focus intentionally after UI changes              | text, broken flow example, refactor task, checklist, summary     | Fix focus after opening/closing UI          | ARIA                   |
| 5     | ARIA When Needed                     | Decision rule     | use native HTML first, ARIA as support                 | text, native-vs-ARIA examples, decision task, summary            | Decide when ARIA helps or hurts             | Assessment             |
| 6     | Uji Kompetensi Accessible Components | Module assessment | accessible interaction patterns                        | recap, quiz, component audit task, documentation bridge, summary | Audit and improve one interactive component | Accessibility testing  |

### Built-in practice pattern

* Component accessibility case studies.
* Modal focus checklist.
* Dropdown keyboard behavior review.
* Tabs structure inspection.
* Focus management debugging.
* ARIA decision tasks.
* Accessibility self-review.
* Avoid asking learners to build complex fully production-grade widgets from scratch too early.

### Documentation Bridge

Suggested docs:

* WAI-ARIA Authoring Practices Guide: Dialog Modal Pattern
* WAI-ARIA Authoring Practices Guide: Menu Button Pattern
* WAI-ARIA Authoring Practices Guide: Tabs Pattern
* MDN: ARIA basics
* MDN: Keyboard-navigable JavaScript widgets
* React accessibility references when useful

Focus:

* native HTML first
* modal focus behavior
* close behavior with keyboard
* dropdown trigger and menu state
* tabs structure
* focus movement after interaction
* ARIA roles and attributes only when needed
* avoiding ARIA misuse

Ignore for now:

* complex combobox
* tree view
* drag and drop accessibility
* full design system widget library
* advanced screen reader differences
* custom focus trap libraries in depth
* enterprise accessibility certification

### Local Dev Milestone connection

Improve one local React component:

* choose modal, dropdown, tabs, or form field component
* check keyboard behavior
* check focus visibility
* check focus movement
* use semantic HTML where possible
* add ARIA only when needed
* write a short note explaining the accessibility decisions

### Uji Kompetensi

Assessment coverage:

* modal accessibility basics
* dropdown accessibility basics
* tabs accessibility basics
* focus management
* keyboard support
* native HTML before ARIA
* ARIA purpose
* ARIA misuse risks
* explaining accessible component behavior

Readiness criteria:

Learner can audit a common interactive component, identify keyboard and focus problems, apply semantic structure, use ARIA only when appropriate, and explain the interaction in user-centered terms.

---

## Module: Accessibility Testing and Preferences

### Module goal

Learners can test common accessibility issues and support user preferences such as contrast, readable errors, reduced motion, and basic screen reader workflows.

### Prerequisite

Learner understands semantic HTML, keyboard navigation, accessible components, forms, validation UX, React Testing Library, and browser DevTools.

### Planned lesson sequence

| Order | Lesson title                                         | Lesson role                 | Main concept                                               | Activity pattern                                                    | Practice output                                          | Bridge / prepares for |
| ----- | ---------------------------------------------------- | --------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------- | --------------------- |
| 1     | Color Contrast                                       | Visual accessibility lesson | readable text and UI states                                | text, before/after examples, contrast check task, summary           | Fix one contrast issue                                   | Form errors           |
| 2     | Accessible Form Errors                               | Form accessibility lesson   | labels, descriptions, inline errors, and summaries         | text, form audit, practice, checklist, summary                      | Improve form error accessibility                         | Reduced motion        |
| 3     | Reduced Motion                                       | Preference lesson           | respect motion sensitivity                                 | text, CSS example, preference task, quick-check, summary            | Add reduced-motion-safe behavior                         | Screen reader basics  |
| 4     | Screen Reader Basics                                 | Testing introduction        | listen to UI structure and feedback                        | text, guided checklist, local self-review, callout, summary         | Perform a basic screen reader smoke test                 | Testing tools         |
| 5     | Testing Tools                                        | Tooling lesson              | combine browser tools, automated checks, and manual review | text, tools comparison, local checklist, summary                    | Run a basic accessibility test pass                      | Assessment            |
| 6     | Uji Kompetensi Accessibility Testing and Preferences | Module assessment           | accessibility testing readiness                            | recap, quiz, accessibility test plan, documentation bridge, summary | Create and run a beginner accessibility review checklist | Production quality    |

### Built-in practice pattern

* Contrast issue review.
* Accessible form error audit.
* Reduced motion CSS task.
* Screen reader smoke test checklist.
* Browser accessibility tools checklist.
* Testing Library accessible query review.
* Writing practice for an accessibility test report.
* Emphasize automated tools cannot catch everything.

### Documentation Bridge

Suggested docs:

* WCAG references for contrast, keyboard, focus, errors, and motion
* MDN: Accessibility
* MDN: prefers-reduced-motion
* MDN: ARIA live regions when relevant
* WAI: Forms tutorial
* WAI: Easy Checks
* Browser DevTools accessibility tools
* Testing Library: About Queries
* Testing Library: ByRole
* Testing Library: ByLabelText

Focus:

* color contrast
* visible text/readability
* labels and error relationship
* error summaries
* reduced motion
* basic screen reader smoke test
* automated tool limits
* Testing Library queries as accessibility feedback

Ignore for now:

* full WCAG conformance audit
* legal compliance process
* advanced assistive technology matrix
* enterprise audit tooling
* accessibility statement writing
* international accessibility regulations
* complex live region patterns
* advanced media accessibility

### Local Dev Milestone connection

Run an accessibility test pass on one local or deployed project:

* check keyboard navigation
* check focus visibility
* check color contrast
* check form labels and errors
* test reduced motion where animation exists
* run a browser accessibility inspection
* review tests for accessible queries
* write a short accessibility report with issues found, fixes made, and remaining risks

### Uji Kompetensi

Assessment coverage:

* color contrast basics
* form error accessibility
* label and description relationship
* reduced motion preference
* screen reader smoke testing
* keyboard testing
* automated tool limitations
* Testing Library accessible queries
* writing an accessibility test plan

Readiness criteria:

Learner can run a beginner accessibility test pass, fix common contrast/form/motion issues, use accessible queries in tests, and explain what automated tools can and cannot prove.

---

## Level 15 completion readiness

Learner is ready to move into broader production quality or architecture topics when they can:

* review semantic HTML structure
* test keyboard-only navigation
* identify confusing tab order
* ensure focus visibility
* add skip links where useful
* identify keyboard traps
* audit modal, dropdown, and tabs behavior
* manage focus intentionally
* use ARIA only when needed
* check color contrast
* improve accessible form errors
* respect reduced motion preference
* perform a basic screen reader smoke test
* use browser accessibility tools
* write a simple accessibility test plan
* explain accessibility issues in user-centered language

Next level can introduce architecture, design systems, production quality gates, or broader team workflows after the learner can build and test UI that works for keyboard, screen reader, and low-vision users.

# Level 16: Frontend Architecture

## Goal

Structure frontend code so features stay maintainable as the app grows.

At this level, learners move from building individual features to organizing frontend code with clearer boundaries. They learn how to structure feature folders, separate shared code from feature-specific code, organize service/data access layers, choose state boundaries, design reusable component APIs, and document usage patterns.

This level should stay grounded in real project maintenance. Do not introduce architecture as abstract theory. Avoid over-engineering, enterprise architecture jargon, and unnecessary folder layers. Every structure should solve a visible maintenance problem.

---

## Module: Feature-Based Structure and Boundaries

### Module goal

Learners can organize frontend code by feature, separate shared and feature-specific code, define service/type/content boundaries, and avoid unhealthy dependencies between parts of the app.

### Prerequisite

Learner understands React, Next.js App Router, TypeScript, forms, data fetching, testing basics, accessibility, and has worked on local React/Next.js projects.

### Planned lesson sequence

| Order | Lesson title                           | Lesson role              | Main concept                                           | Activity pattern                                                            | Practice output                                           | Bridge / prepares for |
| ----- | -------------------------------------- | ------------------------ | ------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| 1     | Feature Folders                        | Architecture concept     | grouping code by product feature                       | text, before/after folder example, refactor checklist, quick-check, summary | Restructure a small feature into a feature folder         | Shared code           |
| 2     | Shared Components                      | Decision rule            | reusable vs feature-specific components                | text, case study, component classification task, summary                    | Decide what belongs in shared components                  | Service layer         |
| 3     | Service Layer                          | Code organization lesson | isolate data access and external calls                 | text, before/after example, refactor task, checklist, summary               | Move API/backend calls into readable service functions    | Types/content         |
| 4     | Types and Content Boundaries           | Boundary lesson          | keep types, content, and feature logic understandable  | text, examples, sorting task, summary                                       | Place types/content near the right owner                  | Dependency boundaries |
| 5     | Dependency Boundaries                  | Maintainability lesson   | prevent features from depending on each other randomly | text, dependency map example, bad/good import examples, practice, summary   | Identify and fix one unhealthy dependency                 | Assessment            |
| 6     | Uji Kompetensi Feature-Based Structure | Module assessment        | feature architecture readiness                         | recap, quiz, feature refactor task, documentation bridge, summary           | Refactor a small feature structure and explain boundaries | State/data strategy   |

### Built-in practice pattern

* Folder structure reading tasks.
* Before/after architecture examples.
* “Where should this file live?” classification tasks.
* Feature vs shared component decision tasks.
* Service layer refactor tasks.
* Dependency boundary case studies.
* Writing practice for explaining feature boundaries.
* Avoid creating too many folders before the feature needs them.

### Documentation Bridge

Suggested docs:

* Official framework docs for project organization when available.
* Next.js docs: project organization / App Router conventions.
* React docs: component composition and state structure.
* TypeScript docs for organizing types when useful.
* Selected architecture references only when grounded in the module task.

Focus:

* feature folders
* shared vs feature-specific code
* service/data access functions
* type ownership
* content ownership
* dependency direction
* avoiding circular or confusing imports
* keeping structure understandable for future changes

Ignore for now:

* enterprise architecture frameworks
* clean architecture dogma
* domain-driven design depth
* micro-frontends
* monorepos
* package publishing
* advanced dependency graph tooling
* strict layered architecture debates

### Local Dev Milestone connection

Refactor one local React or Next.js feature:

* identify a feature area
* group feature-specific components and helpers
* move repeated generic UI into shared components only if reused
* isolate API/backend calls into a service function
* place types near the feature unless they are truly shared
* write a short note explaining the boundaries

### Uji Kompetensi

Assessment coverage:

* feature folder purpose
* shared vs feature-specific components
* service layer purpose
* type boundaries
* content boundaries
* dependency boundaries
* avoiding over-structure
* explaining why files live where they do

Readiness criteria:

Learner can organize a growing feature into understandable folders, separate shared code from feature code, isolate data access, avoid confusing dependencies, and explain the structure without relying on architecture buzzwords.

---

## Module: State and Data Strategy

### Module goal

Learners can choose the right home for different kinds of state and data: server state, URL state, local UI state, persisted state, and error handling strategy.

### Prerequisite

Learner understands React state, server-state thinking, Next.js routing, forms, data fetching, TypeScript boundaries, and basic production workflows.

### Planned lesson sequence

| Order | Lesson title                           | Lesson role                    | Main concept                                             | Activity pattern                                                  | Practice output                                      | Bridge / prepares for       |
| ----- | -------------------------------------- | ------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------- | --------------------------- |
| 1     | Server State vs Client State           | Review + architecture decision | data owned by backend vs UI-only state                   | text, feature examples, classification task, quick-check, summary | Classify state in a feature                          | URL state                   |
| 2     | URL State                              | Routing/data lesson            | filters, search params, pagination, shareable state      | text, route example, practice, checklist, summary                 | Move shareable filter/search state into URL          | Local state                 |
| 3     | Local State                            | Decision rule                  | keep temporary UI state close to usage                   | text, examples, refactor task, summary                            | Keep modal/input/toggle state local when appropriate | Persistence                 |
| 4     | Persistence Boundaries                 | Data ownership lesson          | decide what should be stored locally, in URL, or backend | text, case study, decision matrix, summary                        | Choose storage location for feature data             | Error strategy              |
| 5     | Error Strategy                         | Resilience lesson              | consistent error handling across data flows              | text, error map example, practice, checklist, summary             | Define error states and recovery paths for a feature | Assessment                  |
| 6     | Uji Kompetensi State and Data Strategy | Module assessment              | state/data ownership readiness                           | recap, quiz, state strategy task, documentation bridge, summary   | Map state/data ownership for a medium feature        | Component API documentation |

### Built-in practice pattern

* State classification tasks.
* URL search param examples.
* Local state refactor tasks.
* Persistence decision case studies.
* Error strategy mapping.
* Feature state diagram/writing practice.
* Avoid introducing global state libraries as the default solution.

### Documentation Bridge

Suggested docs:

* React docs: choosing state structure.
* React docs: sharing state between components.
* Next.js docs: search params and routing.
* Next.js docs: data fetching references when relevant.
* TanStack Query docs only if the project/module uses it.
* Browser storage docs when local persistence is discussed.

Focus:

* server state vs client state
* URL state for shareable filters/search/pagination
* local UI state
* persisted backend data
* localStorage/sessionStorage boundaries
* error ownership
* recovery paths
* avoiding unnecessary global state

Ignore for now:

* Redux architecture
* complex normalized client stores
* offline-first sync
* realtime collaboration
* event sourcing
* advanced cache invalidation strategy
* distributed state machines
* complex statecharts

### Local Dev Milestone connection

Create a state/data strategy note for one local project feature:

* list all state/data in the feature
* mark each item as server state, URL state, local UI state, or persisted state
* explain which state should survive refresh
* explain which state should be shareable via URL
* define loading/error/empty/success behavior
* write one error recovery path

### Uji Kompetensi

Assessment coverage:

* server state vs client state
* URL state use cases
* local UI state use cases
* persistence boundaries
* localStorage vs backend persistence
* error strategy
* recovery behavior
* avoiding global state too early
* explaining state ownership

Readiness criteria:

Learner can map state/data ownership for a feature, decide what belongs in the URL, local component state, backend, or temporary storage, and explain error/recovery strategy clearly.

---

## Module: Component API and Documentation

### Module goal

Learners can design reusable component APIs that are understandable, consistent, content-friendly, and documented with realistic usage examples.

### Prerequisite

Learner understands React components, props, children, TypeScript types, reusable component patterns, forms, accessibility basics, and feature-based organization.

### Planned lesson sequence

| Order | Lesson title                                   | Lesson role               | Main concept                                                | Activity pattern                                                      | Practice output                                    | Bridge / prepares for    |
| ----- | ---------------------------------------------- | ------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ------------------------ |
| 1     | Component API Design                           | Design decision lesson    | component props as a developer-facing API                   | text, good/bad examples, API review task, quick-check, summary        | Improve a component API shape                      | Prop naming              |
| 2     | Prop Naming                                    | Naming and clarity lesson | names should reveal intent and reduce misuse                | text, before/after prop examples, refactor task, summary              | Rename unclear props and explain why               | Content-driven rendering |
| 3     | Content-Driven Rendering                       | Product/content pattern   | render flexible UI from structured content/data             | text, content example, component task, checklist, summary             | Build a component from content data safely         | Usage examples           |
| 4     | Usage Examples                                 | Documentation lesson      | show how a component should be used                         | text, example comparison, writing-practice, summary                   | Write realistic usage examples                     | Documentation notes      |
| 5     | Documentation Notes                            | Maintainability lesson    | document intent, constraints, accessibility, and edge cases | text, component note template, practice, summary                      | Create a short component documentation note        | Assessment               |
| 6     | Uji Kompetensi Component API and Documentation | Module assessment         | reusable component maintainability                          | recap, quiz, component API review task, documentation bridge, summary | Design, use, and document a reusable component API | Design system readiness  |

### Built-in practice pattern

* Component API review tasks.
* Prop naming refactors.
* Content-driven rendering examples.
* Usage example writing.
* Documentation note writing.
* Accessibility and edge-case checklist.
* Avoid building a full Storybook/design system unless a later module requires it.

### Documentation Bridge

Suggested docs:

* React docs: passing props.
* React docs: passing JSX as children.
* React docs: thinking in React.
* TypeScript docs for prop types when useful.
* Storybook docs only as a preview or when relevant.
* Accessibility references for documenting component constraints.

Focus:

* props as API
* prop naming
* children and composition
* content-driven rendering
* usage examples
* documentation notes
* accessibility constraints
* edge cases
* avoiding overly flexible components

Ignore for now:

* full design system architecture
* package publishing
* component versioning
* polymorphic components
* advanced generic component APIs
* Storybook automation
* visual regression infrastructure
* token systems

### Local Dev Milestone connection

Document one reusable component from a local project:

* review prop names
* simplify the API if needed
* add one realistic usage example
* add a short note explaining purpose, constraints, and accessibility considerations
* explain one case where the component should not be used

### Uji Kompetensi

Assessment coverage:

* component API purpose
* prop naming clarity
* children/composition use
* content-driven rendering
* usage examples
* documentation notes
* accessibility constraints
* avoiding over-flexible components
* explaining trade-offs

Readiness criteria:

Learner can design a reusable component API, name props clearly, support content-driven rendering when useful, document usage examples, and explain constraints so future developers can use the component correctly.

---

## Level 16 completion readiness

Learner is ready to move into design systems, larger project architecture, or team workflows when they can:

* organize code by feature without over-engineering
* separate shared and feature-specific components
* isolate data access in readable service functions
* place types and content near the right owner
* avoid confusing dependency boundaries
* classify server state, URL state, local state, and persisted state
* define error and recovery strategy for a feature
* design understandable component APIs
* name props clearly
* render from structured content/data safely
* write useful component usage examples
* document component intent, constraints, and accessibility notes
* explain architecture decisions in practical terms

Next level can introduce design systems, tokens, reusable UI libraries, team conventions, or larger-scale frontend architecture after the learner can keep feature code maintainable as the app grows.

# Level 17: Design System

## Goal

Build consistent UI primitives and product components.

At this level, learners move from building individual components to building reusable UI systems. They learn how design tokens keep visual rules consistent, how variants prevent duplicated styling, how product components should handle accessibility and states, and how Storybook helps document and test components.

This level should stay practical. Do not introduce full enterprise design system governance, complex theming platforms, package publishing workflows, or advanced monorepo architecture yet.

---

## Module: Design Tokens and Variants

### Module goal

Learners can define simple design tokens and use variants to create consistent UI primitives such as buttons and cards.

### Prerequisite

Learner understands CSS fundamentals, responsive visual systems, React components, props, TypeScript types, accessibility basics, and component API design.

### Planned lesson sequence

| Order | Lesson title                              | Lesson role              | Main concept                       | Activity pattern                                                       | Practice output                                                | Bridge / prepares for |
| ----- | ----------------------------------------- | ------------------------ | ---------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------- |
| 1     | Design Tokens                             | Concept                  | reusable design values             | text, visual examples, token identification task, quick-check, summary | Learner can identify repeated values that should become tokens | Color/spacing         |
| 2     | Color and Spacing Tokens                  | Guided practice          | consistent color and spacing rules | text, CSS custom property example, refactor task, checklist, summary   | Create basic color and spacing tokens                          | Radius/typography     |
| 3     | Radius and Typography                     | Visual system lesson     | consistent corners and text styles | text, before/after example, practice, summary                          | Add radius and typography tokens                               | Button variants       |
| 4     | Button Variants                           | Component variant lesson | size, intent, and state variants   | text, code-example, variant practice, accessibility checklist, summary | Build primary/secondary/destructive button variants            | Card variants         |
| 5     | Card Variants                             | Product primitive lesson | reusable surface patterns          | text, card example, refactor task, summary                             | Build simple card variants for product UI                      | Assessment            |
| 6     | Uji Kompetensi Design Tokens and Variants | Module assessment        | token and variant readiness        | recap, quiz, token/variant task, documentation bridge, summary         | Create a small token-driven Button and Card system             | Product components    |

### Built-in practice pattern

* Token identification tasks.
* CSS custom property examples.
* Before/after visual consistency refactors.
* Button variant tasks.
* Card variant tasks.
* Accessibility checklist for focus, disabled, and contrast states.
* TypeScript prop/variant design exercises.
* Avoid complex theming systems too early.

### Documentation Bridge

Suggested docs:

* MDN: CSS custom properties
* MDN: color contrast references when relevant
* W3C Design Tokens Community Group references when useful
* React docs: passing props
* TypeScript docs for union types when variants are typed

Focus:

* design tokens as named reusable values
* CSS custom properties
* color tokens
* spacing tokens
* radius tokens
* typography tokens
* component variants
* variant naming
* avoiding one-off visual values

Ignore for now:

* full token pipelines
* Figma token sync
* multi-brand theming
* advanced dark mode systems
* CSS-in-JS library debates
* enterprise token governance
* package publishing
* visual regression automation

### Local Dev Milestone connection

Upgrade a local React or Next.js project with basic tokens and variants:

* define color tokens
* define spacing tokens
* define radius tokens
* define typography tokens
* refactor one Button component to use variants
* refactor one Card component to use variants
* write a short note explaining how tokens reduced duplicated styling

### Uji Kompetensi

Assessment coverage:

* design token purpose
* CSS custom properties
* color tokens
* spacing tokens
* radius tokens
* typography consistency
* button variants
* card variants
* typed variant props
* avoiding one-off style values

Readiness criteria:

Learner can identify repeated visual values, convert them into simple tokens, build Button and Card variants, and explain how tokens and variants improve consistency without overcomplicating the UI.

---

## Module: Product Components

### Module goal

Learners can build reusable product components such as forms, tables, modals, toasts, tabs, and selects with clear states, accessibility expectations, and practical APIs.

### Prerequisite

Learner understands reusable component APIs, forms, accessibility, validation UX, React state, component composition, and design tokens.

### Planned lesson sequence

| Order | Lesson title                      | Lesson role                  | Main concept                                      | Activity pattern                                                             | Practice output                                                       | Bridge / prepares for |
| ----- | --------------------------------- | ---------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------- |
| 1     | Form Components                   | Product component lesson     | label, input, hint, error, and field layout       | text, before/after example, component task, accessibility checklist, summary | Build reusable FormField/Input components                             | Tables                |
| 2     | Table Components                  | Data display lesson          | readable table structure and empty/loading states | text, table anatomy, practice, checklist, summary                            | Build a reusable data table shell                                     | Modal                 |
| 3     | Modal                             | Interactive component lesson | focus, close behavior, and content structure      | text, modal accessibility case study, practice, troubleshooting, summary     | Build or audit a reusable modal pattern                               | Toast                 |
| 4     | Toast                             | Feedback component lesson    | temporary feedback and status messages            | text, good/bad examples, state task, accessibility callout, summary          | Build a simple toast/status message pattern                           | Tabs/select           |
| 5     | Tabs and Select                   | Complex component review     | choosing native vs custom patterns                | text, comparison examples, audit task, summary                               | Build simple tabs or select-friendly wrapper with accessibility notes | Assessment            |
| 6     | Uji Kompetensi Product Components | Module assessment            | reusable product component readiness              | recap, quiz, product component task, documentation bridge, summary           | Build and document one reusable product component                     | Storybook             |

### Built-in practice pattern

* Product component anatomy tasks.
* Component API review.
* Accessibility checklist.
* State checklist: default, hover/focus, disabled, loading, error, empty.
* Good/bad component examples.
* Component documentation writing practice.
* Avoid requiring production-grade complex widgets from scratch.
* Prefer native elements when they solve the problem.

### Documentation Bridge

Suggested docs:

* React docs: component composition
* React docs: passing props
* WAI-ARIA Authoring Practices: Dialog Modal Pattern
* WAI-ARIA Authoring Practices: Tabs Pattern
* WAI-ARIA Authoring Practices: Listbox/Select references when needed
* MDN: tables
* MDN: forms and labels
* MDN: ARIA live regions when toast/status feedback is discussed

Focus:

* form field structure
* label, hint, and error relationship
* table semantics
* loading/empty table states
* modal focus behavior
* toast feedback purpose
* tabs structure
* native select vs custom select decision
* accessible component APIs

Ignore for now:

* fully custom select implementation complexity
* advanced combobox patterns
* drag and drop components
* virtualized tables
* full data grid systems
* animation systems
* headless component library internals
* design system package publishing

### Local Dev Milestone connection

Build or improve one product component in a local project:

* choose a real component need
* define component props
* handle important states
* use design tokens
* check keyboard/focus behavior
* add accessibility notes
* write one usage example

Recommended component choices:

* `FormField`
* `DataTable`
* `Modal`
* `Toast`
* `Tabs`
* simple `Select` wrapper around native select

### Uji Kompetensi

Assessment coverage:

* form component anatomy
* table structure
* modal accessibility basics
* toast/status feedback
* tabs/select decision-making
* component states
* accessibility expectations
* component API clarity
* when native elements are better than custom components

Readiness criteria:

Learner can build a reusable product component with clear props, consistent tokens, important UI states, basic accessibility behavior, and a short usage note.

---

## Module: Storybook and Package Basics

### Module goal

Learners can use Storybook to document, review, and test components, then understand basic package structure and changelog thinking without jumping into advanced publishing workflows.

### Prerequisite

Learner understands React components, TypeScript prop types, design tokens, product components, accessibility basics, local tooling, and npm basics.

### Planned lesson sequence

| Order | Lesson title                                | Lesson role              | Main concept                                         | Activity pattern                                                                   | Practice output                                              | Bridge / prepares for          |
| ----- | ------------------------------------------- | ------------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| 1     | Storybook Basics                            | Tooling lesson           | component workshop outside app pages                 | tool prerequisite note, code-example, local checklist, troubleshooting, summary    | Run Storybook locally for one component                      | Component stories              |
| 2     | Component Stories                           | Documentation practice   | default, variant, state, and edge-case stories       | text, story examples, writing task, summary                                        | Create stories for Button/Card/FormField                     | Accessibility checks           |
| 3     | Accessibility Checks                        | Quality lesson           | catch common accessibility issues early              | text, addon/tool walkthrough, checklist, summary                                   | Run basic accessibility checks in Storybook                  | Package structure              |
| 4     | Package Structure Basics                    | Code organization lesson | separating component library files from app features | text, folder example, structure task, callout, summary                             | Organize components, tokens, and exports                     | Changelog                      |
| 5     | Changelog Thinking                          | Maintenance lesson       | communicate component changes safely                 | text, examples, writing-practice, summary                                          | Write a simple changelog note for component change           | Assessment                     |
| 6     | Uji Kompetensi Storybook and Package Basics | Module assessment        | documented component system readiness                | recap, quiz, Storybook/component documentation task, documentation bridge, summary | Document one reusable component with stories and change note | Larger design system readiness |

### Built-in practice pattern

* Storybook setup reading.
* Component story writing.
* Variant/state story tasks.
* Accessibility checklist.
* Folder/package structure reading tasks.
* Changelog writing practice.
* Honest local self-review.
* Avoid publishing to npm in this module.

### Tooling guidance

Tools likely introduced:

* Storybook
* Storybook accessibility addon if used
* npm scripts for running Storybook

Authoring guidance:

* Explain why Storybook is useful before installation.
* Use official install/setup docs.
* Make commands one step at a time.
* Do not pretend FluentStack can verify the learner’s local Storybook setup.
* Keep first Storybook examples small.
* Do not require package publishing.

### Documentation Bridge

Suggested docs:

* Storybook docs: Getting Started
* Storybook docs: Writing Stories
* Storybook docs: Args
* Storybook docs: Accessibility testing
* npm docs: package.json
* Semantic Versioning references only as light context if versioning is discussed

Focus:

* Storybook purpose
* component stories
* documenting variants
* documenting states
* accessibility checks
* component exports
* package structure basics
* changelog notes

Ignore for now:

* publishing packages
* monorepo setup
* advanced Storybook configuration
* visual regression services
* design review workflows
* automated release pipelines
* semantic-release
* complex package versioning strategy

### Local Dev Milestone connection

Document one local component system:

* run Storybook locally
* add stories for one primitive component
* add stories for one product component
* include default, variant, disabled/loading/error states where relevant
* run basic accessibility check
* organize exports
* write a short changelog-style note for one component change

### Uji Kompetensi

Assessment coverage:

* Storybook purpose
* component stories
* variant stories
* state stories
* accessibility checks
* package structure basics
* exports
* changelog thinking
* avoiding undocumented breaking changes
* explaining component usage

Readiness criteria:

Learner can document reusable components in Storybook, show important variants and states, run basic accessibility checks, organize component exports, and write clear notes about component changes.

---

## Level 17 completion readiness

Learner is ready to move into larger design system or team-scale UI workflows when they can:

* define basic design tokens
* use CSS custom properties for reusable values
* create color, spacing, radius, and typography tokens
* build Button and Card variants
* avoid one-off visual values
* build reusable product components
* account for loading, error, empty, disabled, and focus states
* use native elements before custom complex widgets
* document component APIs and usage examples
* run Storybook locally
* create component stories for variants and states
* run basic accessibility checks
* organize component exports
* write simple changelog notes for component changes

Next level can introduce backend basics, API contracts, security, or team-scale frontend workflows after the learner can create consistent UI primitives and product components with documentation and accessibility in mind.

# Level 18: Backend Basics for Frontend Engineers

## Goal

Understand enough backend concepts to integrate, debug, and communicate effectively.

At this level, learners build backend literacy for frontend work. They learn how APIs are shaped, how auth and browser security boundaries affect frontend behavior, and how data/infrastructure concepts such as SQL, PostgreSQL, Supabase, Redis, and file uploads influence product flows.

This level should not turn learners into full backend engineers. Keep the focus on frontend integration, debugging, communication, and safe mental models. Avoid deep backend architecture, infrastructure operations, advanced database design, and security exploitation details.

---

## Module: API Fundamentals

### Module goal

Learners can understand common API styles, read request/response shapes, handle status codes, work with pagination, and understand webhook concepts from a frontend integration perspective.

### Prerequisite

Learner understands async JavaScript, fetch, server-state thinking, Next.js route handlers, TypeScript response types, and loading/error/success UI states.

### Planned lesson sequence

| Order | Lesson title                    | Lesson role          | Main concept                                      | Activity pattern                                                      | Practice output                                      | Bridge / prepares for    |
| ----- | ------------------------------- | -------------------- | ------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------ |
| 1     | REST API Basics                 | Concept              | resources, endpoints, methods                     | text, request/response example, quick-check, summary                  | Learner can read a simple REST endpoint              | GraphQL                  |
| 2     | GraphQL Basics                  | Concept comparison   | query shape and requested fields                  | text, REST vs GraphQL example, code reading task, summary             | Learner can explain how GraphQL differs from REST    | Status codes             |
| 3     | Status Codes                    | Debugging lesson     | HTTP status meaning for frontend behavior         | text, status code scenarios, practice, checklist, summary             | Map common status codes to UI states                 | Request/response         |
| 4     | Request and Response Shape      | Data contract lesson | payloads, validation errors, response envelopes   | text, API contract example, type task, summary                        | Type and map an API response safely                  | Pagination/webhooks      |
| 5     | Pagination and Webhooks         | Integration concept  | page/cursor data and backend-to-app notifications | text, examples, decision task, callout, summary                       | Explain pagination strategy and webhook use case     | Assessment               |
| 6     | Uji Kompetensi API Fundamentals | Module assessment    | API integration readiness                         | recap, quiz, API contract reading task, documentation bridge, summary | Analyze an API response and design frontend handling | Auth/security boundaries |

### Built-in practice pattern

* REST endpoint reading.
* REST vs GraphQL comparison tasks.
* Status code to UI state mapping.
* Request/response shape typing.
* API error response reading.
* Pagination response mapping.
* Webhook concept case studies.
* Avoid building a full backend in this module.

### Documentation Bridge

Suggested docs:

* MDN: HTTP overview
* MDN: HTTP request methods
* MDN: HTTP response status codes
* MDN: Fetch API
* GraphQL official docs
* API provider docs in examples, such as Stripe, GitHub, Supabase, or similar

Focus:

* endpoint structure
* request method
* request body
* response body
* status codes
* error payloads
* pagination
* frontend data mapping
* webhook concept as server-to-server notification

Ignore for now:

* designing full backend systems
* API gateway architecture
* gRPC
* OpenAPI generation
* advanced GraphQL schema design
* webhook signature implementation details
* distributed systems
* rate limiting internals

### Local Dev Milestone connection

Review one API integration in a local project:

* identify endpoint and method
* inspect request body
* inspect response shape
* identify success and error status codes
* type the response
* map response into UI-ready data
* write a short note explaining how the frontend handles success, empty, error, and pagination states

### Uji Kompetensi

Assessment coverage:

* REST API basics
* GraphQL basics
* HTTP methods
* common status codes
* request body
* response shape
* error shape
* pagination basics
* webhook concept
* API contract reading

Readiness criteria:

Learner can read API documentation, understand request and response examples, map status codes to frontend behavior, handle paginated data, and explain webhook use cases without needing to build a backend from scratch.

---

## Module: Auth, Cookies, and Browser Security Boundaries

### Module goal

Learners understand common authentication concepts, cookies, sessions, JWTs, CORS, CSRF, and secure cookie behavior well enough to debug frontend auth issues and avoid unsafe assumptions.

### Prerequisite

Learner understands browser requests, API fundamentals, Next.js auth-aware UI, environment variables, Supabase/backend integration basics, and production deployment basics.

### Planned lesson sequence

| Order | Lesson title                                        | Lesson role             | Main concept                               | Activity pattern                                                     | Practice output                                      | Bridge / prepares for |
| ----- | --------------------------------------------------- | ----------------------- | ------------------------------------------ | -------------------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| 1     | Auth Concepts                                       | Concept                 | identity, authentication, authorization    | text, analogy, flow diagram, quick-check, summary                    | Learner can distinguish authn and authz              | Cookies               |
| 2     | Cookies                                             | Browser boundary lesson | browser-managed storage sent with requests | text, cookie example, DevTools inspection task, summary              | Inspect cookies in browser DevTools                  | JWT/session           |
| 3     | JWT vs Session                                      | Concept comparison      | token-based vs session-based mental model  | text, comparison table, case study, summary                          | Explain differences and trade-offs at beginner level | CORS                  |
| 4     | CORS                                                | Browser security lesson | browser blocks unsafe cross-origin reads   | text, broken request case study, debugging checklist, summary        | Identify likely CORS issue from browser error        | CSRF                  |
| 5     | CSRF                                                | Security concept        | unwanted authenticated requests            | text, scenario example, safety callout, quick-check, summary         | Explain why CSRF matters for cookie-based auth       | Secure cookies        |
| 6     | Secure Cookies                                      | Practical safety lesson | `HttpOnly`, `Secure`, `SameSite`, expiry   | text, cookie attributes example, checklist, summary                  | Read cookie attributes and explain their purpose     | Assessment            |
| 7     | Uji Kompetensi Auth and Browser Security Boundaries | Module assessment       | auth and browser boundary readiness        | recap, quiz, auth debugging case task, documentation bridge, summary | Diagnose a beginner auth/browser security issue      | Data/infrastructure   |

### Built-in practice pattern

* Auth flow reading.
* Cookie inspection checklist.
* JWT vs session comparison.
* CORS error case studies.
* CSRF scenario reasoning.
* Cookie attribute reading tasks.
* Auth debugging checklists.
* Keep security discussion defensive and conceptual.

### Documentation Bridge

Suggested docs:

* MDN: HTTP cookies
* MDN: CORS
* MDN: Same-origin policy
* MDN: Secure cookie configuration
* OWASP: CSRF overview
* OWASP: Authentication cheat sheet, selected beginner-safe parts only
* Supabase Auth docs when used in project examples
* Next.js auth/session guidance when relevant

Focus:

* authentication vs authorization
* session concept
* JWT concept
* cookies
* browser origin
* CORS error meaning
* CSRF concept
* secure cookie attributes
* debugging auth problems from the frontend perspective

Ignore for now:

* building custom auth servers
* cryptography internals
* OAuth provider implementation details
* token signing algorithms
* advanced attack payloads
* penetration testing
* enterprise identity providers
* complex RBAC/ABAC systems
* security bypass techniques

### Local Dev Milestone connection

Debug one auth-related frontend flow:

* inspect login request/response
* inspect cookie behavior if cookies are used
* identify whether issue is auth, authorization, CORS, or session state
* check environment variables and callback URLs if relevant
* write a short note explaining the likely cause and frontend-visible symptom

### Uji Kompetensi

Assessment coverage:

* authentication vs authorization
* cookies
* JWT vs session basics
* same-origin concept
* CORS basics
* CSRF concept
* secure cookie attributes
* auth error debugging
* frontend vs backend responsibility boundaries

Readiness criteria:

Learner can explain common auth and browser security boundaries, recognize typical CORS/session/cookie symptoms, communicate issues clearly to backend developers, and avoid unsafe frontend assumptions about authentication.

---

## Module: Data and Infrastructure Basics

### Module goal

Learners understand enough database and infrastructure basics to integrate with backend data, read simple SQL concepts, understand PostgreSQL/Supabase or Prisma roles, recognize Redis use cases, and reason about file upload flows.

### Prerequisite

Learner understands API fundamentals, auth/browser boundaries, Supabase/backend integration basics, TypeScript data modeling, and production environment variables.

### Planned lesson sequence

| Order | Lesson title                                  | Lesson role            | Main concept                                               | Activity pattern                                                    | Practice output                                                     | Bridge / prepares for        |
| ----- | --------------------------------------------- | ---------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------- |
| 1     | SQL Basics                                    | Concept                | tables, rows, columns, select/filter/order                 | text, query reading example, quick-check, summary                   | Learner can read a simple SQL query                                 | PostgreSQL                   |
| 2     | PostgreSQL Basics                             | Database concept       | relational data, constraints, indexes at a high level      | text, table example, relationship case study, summary               | Explain how tables relate to app data                               | Supabase/Prisma              |
| 3     | Supabase or Prisma Basics                     | Integration comparison | backend client vs ORM mental model                         | text, comparison example, decision task, summary                    | Explain when a frontend app may touch Supabase or a backend service | Redis                        |
| 4     | Redis Basics                                  | Infrastructure concept | cache, session store, queue-like use cases at a high level | text, scenario examples, quick-check, summary                       | Identify when Redis-like cache may be used                          | File uploads                 |
| 5     | File Upload Concepts                          | Product flow lesson    | upload path, storage, metadata, limits, preview            | text, upload flow diagram, checklist, summary                       | Explain a safe file upload flow                                     | Assessment                   |
| 6     | Uji Kompetensi Data and Infrastructure Basics | Module assessment      | backend data literacy                                      | recap, quiz, data flow analysis task, documentation bridge, summary | Explain a frontend-to-backend data flow clearly                     | Security/portfolio readiness |

### Built-in practice pattern

* SQL query reading.
* Table/row/column mapping tasks.
* Relationship concept examples.
* Supabase/Prisma boundary comparison.
* Redis use case classification.
* File upload flow mapping.
* Data flow writing practice.
* Keep database work beginner-level and integration-focused.

### Documentation Bridge

Suggested docs:

* PostgreSQL docs: basic SELECT tutorial or beginner references
* Supabase database docs
* Supabase Row Level Security docs as supporting review
* Supabase Storage docs if file uploads are discussed
* Prisma docs: ORM overview, if Prisma is used in examples
* Redis docs: overview, if Redis is discussed
* MDN: FormData and file input references

Focus:

* tables
* rows
* columns
* primary keys
* foreign keys at a beginner level
* reading simple SQL
* Supabase as backend platform
* Prisma as ORM concept
* Redis as cache/session-like infrastructure concept
* file upload flow
* metadata and storage distinction
* frontend responsibility vs backend responsibility

Ignore for now:

* advanced SQL joins
* query planning
* database indexing depth
* migrations strategy
* replication
* Redis internals
* queue systems
* object storage architecture
* antivirus scanning implementation
* signed URL implementation depth
* backend scaling architecture

### Local Dev Milestone connection

Analyze one data flow in a local or deployed app:

* identify the UI action
* identify the API or backend call
* identify the data table or storage destination
* identify user ownership or permission rule
* identify loading/error/success UI states
* identify what data is stored vs what is only displayed
* write a short note explaining the full data flow

### Uji Kompetensi

Assessment coverage:

* SQL basics
* tables, rows, columns
* primary key concept
* foreign key concept
* PostgreSQL role in app data
* Supabase or Prisma concept
* Redis use cases
* file upload flow
* metadata vs file storage
* frontend/backend responsibility boundaries

Readiness criteria:

Learner can read simple database examples, understand how frontend data maps to backend storage, explain common infrastructure pieces at a high level, and communicate integration issues clearly without pretending to be a backend specialist.

---

## Level 18 completion readiness

Learner is ready to move into security, portfolio, or larger production collaboration topics when they can:

* read basic REST API documentation
* compare REST and GraphQL at a high level
* map status codes to frontend behavior
* understand request and response shapes
* handle paginated API responses
* explain what webhooks are for
* distinguish authentication and authorization
* inspect cookies in browser tools
* explain JWT vs session basics
* recognize CORS and CSRF concepts
* understand secure cookie attributes
* read simple SQL concepts
* understand PostgreSQL as relational storage
* explain Supabase or Prisma at a practical level
* identify Redis-like caching use cases
* explain a safe file upload flow
* communicate backend integration issues clearly with frontend-visible evidence

Next level can introduce security basics, production hardening, or portfolio/remote readiness after the learner understands enough backend concepts to integrate, debug, and communicate effectively.

# Level 19: Security Basics

## Goal

Avoid common frontend security mistakes and understand product-level risk.

At this level, learners build practical security awareness for frontend and product work. They learn how browser attacks can affect UI, why secrets and tokens must be handled carefully, how permission UI can mislead users if implemented poorly, and why file uploads or third-party packages introduce real risk.

This level should stay defensive and product-focused. Do not teach exploit development, bypass techniques, payload crafting, or offensive security workflows. Focus on prevention, safe defaults, debugging symptoms, communication, and product risk awareness.

---

## Module: Browser Attack Basics

### Module goal

Learners understand common browser-facing risks such as XSS, CSRF, CORS mistakes, unsafe input handling, and dependency vulnerabilities at a beginner-safe defensive level.

### Prerequisite

Learner understands HTML, forms, JavaScript, React rendering, Next.js basics, auth/session concepts, cookies, CORS, API responses, and package dependencies.

### Planned lesson sequence

| Order | Lesson title                         | Lesson role             | Main concept                                                  | Activity pattern                                             | Practice output                                              | Bridge / prepares for |
| ----- | ------------------------------------ | ----------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| 1     | XSS Basics                           | Defensive concept       | unsafe user content can become dangerous UI                   | text, safe/unsafe rendering examples, quick-check, summary   | Learner can identify unsafe rendering patterns               | CSRF                  |
| 2     | CSRF Basics                          | Defensive concept       | authenticated browser requests can be abused if not protected | text, scenario explanation, case study, checklist, summary   | Learner can explain why CSRF matters for cookie-based auth   | CORS                  |
| 3     | CORS Risks                           | Browser boundary review | CORS is a browser protection, not an auth system              | text, good/bad assumptions, debugging task, summary          | Learner can avoid treating CORS as security permission logic | Input sanitization    |
| 4     | Input Sanitization                   | Safe handling lesson    | validate and sanitize untrusted input/output                  | text, form/content examples, decision task, callout, summary | Learner can decide where validation/sanitization is needed   | Dependencies          |
| 5     | Dependency Vulnerabilities           | Supply chain awareness  | packages can introduce risk                                   | text, package example, audit checklist, summary              | Review dependency risk before adding a package               | Assessment            |
| 6     | Uji Kompetensi Browser Attack Basics | Module assessment       | browser security awareness                                    | recap, quiz, risk review task, documentation bridge, summary | Identify browser-facing risks in a small feature             | Secrets/tokens        |

### Built-in practice pattern

* Safe vs unsafe UI rendering examples.
* Risk identification tasks.
* CORS misconception case studies.
* Input validation/sanitization decision tasks.
* Dependency review checklist.
* Defensive writing practice: explain the risk and safer alternative.
* Avoid exploit payloads and offensive walkthroughs.

### Documentation Bridge

Suggested docs:

* OWASP: Cross Site Scripting prevention guidance
* OWASP: CSRF prevention guidance
* OWASP: Dependency management / software supply chain references
* MDN: Content Security Policy as preview
* MDN: CORS
* MDN: Same-origin policy
* React docs: escaping values in JSX, when relevant
* Next.js security notes when relevant

Focus:

* what XSS risk means for frontend rendering
* never trusting user-generated content
* CSRF mental model
* CORS as browser boundary
* validation vs sanitization
* safe rendering
* dependency review
* reporting risks clearly

Ignore for now:

* exploit payload crafting
* bypass techniques
* offensive scanning
* penetration testing workflow
* advanced CSP policy design
* browser engine internals
* advanced supply chain attacks
* malware analysis

### Local Dev Milestone connection

Review one local React or Next.js feature for browser-facing risk:

* identify untrusted user input
* identify where the data is rendered
* check whether raw HTML rendering is used
* check whether the feature depends on cookies/session
* review whether CORS is being misunderstood
* review recently added packages
* write a short note explaining one risk and one safer alternative

### Uji Kompetensi

Assessment coverage:

* XSS concept
* unsafe rendering patterns
* CSRF concept
* CORS misconception
* validation vs sanitization
* dependency vulnerability awareness
* safe package review
* explaining security risk without exaggeration

Readiness criteria:

Learner can identify common browser-facing risks, avoid unsafe rendering and misleading CORS assumptions, review dependencies cautiously, and explain safer implementation choices at a defensive/product level.

---

## Module: Secrets, Tokens, and Permissions

### Module goal

Learners can avoid exposing secrets, understand token storage trade-offs, use secure cookie concepts, design honest permission UI, and recognize the difference between frontend guards and backend enforcement.

### Prerequisite

Learner understands environment variables, auth/session concepts, cookies, JWT vs session basics, Supabase/backend integration, Next.js server/client boundaries, and protected route concepts.

### Planned lesson sequence

| Order | Lesson title                                    | Lesson role             | Main concept                                        | Activity pattern                                                       | Practice output                                             | Bridge / prepares for |
| ----- | ----------------------------------------------- | ----------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------- |
| 1     | Env Leakage                                     | Safety lesson           | public vs private environment values                | text, good/bad examples, env classification task, quick-check, summary | Classify env values as safe or unsafe for browser exposure  | Token storage         |
| 2     | Token Storage                                   | Defensive concept       | storage choice affects risk                         | text, comparison example, decision checklist, summary                  | Explain token storage trade-offs at beginner level          | Secure cookies        |
| 3     | Secure Cookies                                  | Browser/session lesson  | `HttpOnly`, `Secure`, `SameSite`, expiry            | text, cookie attribute reading, case study, summary                    | Read cookie attributes and explain safety purpose           | Permission UI         |
| 4     | Permission UI                                   | Product security lesson | UI should reflect permissions but not enforce alone | text, role/permission scenarios, practice, summary                     | Design permission-aware UI without false security           | Auth guards           |
| 5     | Auth Guards                                     | Boundary lesson         | frontend guard vs backend authorization             | text, route/data access examples, checklist, summary                   | Explain what frontend guards can and cannot protect         | Assessment            |
| 6     | Uji Kompetensi Secrets, Tokens, and Permissions | Module assessment       | secret and permission safety                        | recap, quiz, permission boundary task, documentation bridge, summary   | Review a feature for secret leakage and permission mistakes | File/third-party risk |

### Built-in practice pattern

* Env variable classification.
* Public/private key examples.
* Token storage trade-off reading.
* Cookie attribute inspection.
* Permission UI case studies.
* Frontend guard vs backend enforcement tasks.
* Security boundary writing practice.
* Avoid teaching credential theft, token abuse, or bypass techniques.

### Documentation Bridge

Suggested docs:

* OWASP: Authentication guidance
* OWASP: Session Management guidance
* OWASP: JWT guidance, selected beginner-safe parts
* Supabase Auth security docs
* Supabase Row Level Security docs
* Next.js environment variable docs
* MDN: Secure cookie configuration
* MDN: HTTP cookies

Focus:

* public env vs private env
* secrets must not be exposed to browser bundles
* token storage risk
* secure cookie attributes
* permission-aware UI
* route guards
* backend authorization
* RLS/backend policies as real enforcement
* safe communication about permissions

Ignore for now:

* token theft techniques
* bypass methods
* cryptography internals
* custom auth implementation
* OAuth internals
* enterprise permission models
* advanced RBAC/ABAC systems
* security testing attacks

### Local Dev Milestone connection

Review one authenticated local or deployed app:

* list environment variables
* identify which values are public and which must stay server-only
* inspect whether UI hides unavailable actions
* confirm backend/RLS/API still enforces permission
* write a short note explaining what the frontend guard does and what the backend must enforce

### Uji Kompetensi

Assessment coverage:

* environment variable leakage
* public vs private config
* token storage trade-offs
* secure cookie attributes
* permission UI
* frontend guards
* backend authorization
* RLS/backend enforcement
* explaining security boundaries clearly

Readiness criteria:

Learner can avoid exposing secrets, explain token and cookie trade-offs, design permission-aware UI honestly, and clearly separate frontend convenience checks from backend security enforcement.

---

## Module: File Upload and Third-Party Risk

### Module goal

Learners understand common risks around file uploads, previews, third-party packages, and embedded content so they can design safer product flows and ask the right backend/security questions.

### Prerequisite

Learner understands forms, file inputs, API fundamentals, backend basics, storage concepts, dependency risks, browser security boundaries, and product component design.

### Planned lesson sequence

| Order | Lesson title                                    | Lesson role                 | Main concept                                        | Activity pattern                                                | Practice output                                         | Bridge / prepares for        |
| ----- | ----------------------------------------------- | --------------------------- | --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------- |
| 1     | File Upload Risks                               | Product risk lesson         | uploaded files are untrusted input                  | text, upload flow example, risk checklist, quick-check, summary | Identify risks in an upload feature                     | File checks                  |
| 2     | File Type and Size Checks                       | Defensive validation lesson | client checks help UX, server checks enforce safety | text, good/bad examples, validation task, summary               | Design client-side file checks without false confidence | Preview risks                |
| 3     | Preview Risks                                   | Browser safety lesson       | previews can expose unsafe content or broken UX     | text, image/document preview case study, checklist, summary     | Choose safer preview behavior for file types            | Packages                     |
| 4     | Third-Party Packages                            | Supply chain lesson         | package choice affects security and maintenance     | text, package review checklist, decision task, summary          | Review a package before adding it                       | iframe                       |
| 5     | iframe Constraints                              | Embedded content lesson     | sandboxing and origin boundaries                    | text, embed examples, safety checklist, summary                 | Explain when iframe constraints are needed              | Assessment                   |
| 6     | Uji Kompetensi File Upload and Third-Party Risk | Module assessment           | upload and third-party risk readiness               | recap, quiz, risk review task, documentation bridge, summary    | Review a feature involving upload/package/embed risk    | Portfolio/security readiness |

### Built-in practice pattern

* Upload flow risk mapping.
* File type/size validation examples.
* Client-side vs server-side enforcement tasks.
* Preview behavior case studies.
* Third-party package review checklist.
* iframe sandbox decision tasks.
* Writing practice for a security review note.
* Avoid exploit examples and unsafe file handling instructions.

### Documentation Bridge

Suggested docs:

* OWASP: File Upload guidance
* OWASP: Third Party JavaScript Management references
* OWASP: Dependency security references
* MDN: File API
* MDN: input type file
* MDN: iframe
* MDN: iframe sandbox
* Framework security notes when relevant
* Supabase Storage docs if storage is used in examples

Focus:

* uploaded files are untrusted
* client-side file checks improve UX but do not enforce security
* server-side validation is required
* file size limits
* allowed file types
* safe preview decisions
* package review before install
* iframe sandbox and origin concept
* communicating upload risk clearly

Ignore for now:

* malware analysis
* file parser vulnerability details
* offensive payloads
* bypass techniques
* advanced content scanning architecture
* enterprise vendor risk programs
* CSP deep configuration
* browser sandbox internals
* advanced iframe attack examples

### Local Dev Milestone connection

Review one upload, package, or embed feature:

* identify untrusted input
* define client-side checks for UX
* define what backend must still verify
* decide whether preview is safe
* review third-party package purpose and maintenance signals
* review iframe constraints if embedding content
* write a short risk note with remaining assumptions

### Uji Kompetensi

Assessment coverage:

* file upload risks
* file type checks
* file size checks
* client validation vs server enforcement
* preview risk
* third-party package risk
* package review checklist
* iframe sandbox basics
* explaining product risk and safer alternatives

Readiness criteria:

Learner can review a file upload or third-party integration flow, identify untrusted boundaries, avoid false security from client-only checks, and communicate remaining risks clearly.

---

## Level 19 completion readiness

Learner is ready to move into portfolio readiness, production review, or team collaboration when they can:

* explain XSS, CSRF, and CORS at a defensive level
* avoid unsafe rendering of untrusted content
* distinguish validation and sanitization
* review dependency risk before adding packages
* classify environment variables as public or private
* avoid exposing secrets in frontend bundles
* explain token storage and secure cookie trade-offs
* design permission-aware UI without pretending it is backend enforcement
* distinguish frontend guards from real authorization
* review upload flows as untrusted input
* explain why client-side file checks are not enough
* choose safer preview behavior
* review third-party package risk
* explain iframe constraints at a high level
* write a simple security risk note for a product feature

Next level can focus on portfolio and remote readiness after the learner can avoid common frontend security mistakes and communicate product-level risk responsibly.

# Level 20: Portfolio and Remote Readiness

## Goal

Turn technical skill into visible proof of work and job-ready communication.

At this level, learners convert their technical skills into portfolio evidence. They choose a realistic capstone project, scope it properly, document technical decisions, prepare demos, explain trade-offs, and practice communication patterns used in remote engineering work.

This level should stay practical and outcome-focused. Do not turn portfolio work into endless feature building. The goal is to produce clear proof of skill: a deployed project, readable repository, thoughtful README, demo notes, technical decision notes, and confident explanations.

---

## Module: Portfolio Project Tracks

### Module goal

Learners can choose a portfolio project that matches their target role, scope it realistically, and plan features that demonstrate frontend engineering skill without becoming too large to finish.

### Prerequisite

Learner has completed production-oriented React/Next.js modules, understands forms, data fetching, testing, performance, accessibility, security basics, and can deploy a project.

### Planned lesson sequence

| Order | Lesson title                                 | Lesson role          | Main concept                                           | Activity pattern                                                   | Practice output                                  | Bridge / prepares for       |
| ----- | -------------------------------------------- | -------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------ | --------------------------- |
| 1     | Choosing a Portfolio Project                 | Decision lesson      | project should prove relevant skill                    | text, project comparison, decision checklist, quick-check, summary | Learner chooses one realistic project direction  | SaaS dashboard              |
| 2     | SaaS Dashboard Project Scope                 | Project scope lesson | auth, dashboard, data states, CRUD-like flows          | text, feature map example, scope checklist, summary                | Draft SaaS dashboard scope                       | Marketplace/e-commerce      |
| 3     | Marketplace or E-commerce Mini Project Scope | Project scope lesson | catalog, filters, product detail, cart or inquiry flow | text, feature map example, trade-off task, summary                 | Draft marketplace/e-commerce scope               | Design system               |
| 4     | Design System Project Scope                  | Project scope lesson | reusable UI primitives and documented components       | text, component inventory example, checklist, summary              | Draft design system project scope                | Feature planning            |
| 5     | Feature Planning                             | Planning lesson      | MVP, nice-to-have, proof-of-skill features             | text, prioritization example, writing-practice, summary            | Create a feature plan with MVP and stretch goals | Assessment                  |
| 6     | Uji Kompetensi Portfolio Project Tracks      | Module assessment    | portfolio project readiness                            | recap, quiz, project scope task, documentation bridge, summary     | Choose and justify a portfolio capstone project  | Documentation and demo prep |

### Built-in practice pattern

* Project idea comparison.
* Scope decision checklist.
* MVP vs nice-to-have sorting.
* Feature planning writing practice.
* Risk and trade-off notes.
* Portfolio project rubric.
* Avoid projects that are too broad, vague, or impossible to finish.

### Documentation Bridge

Suggested docs:

* Official docs for chosen stack, such as Next.js, React, Supabase, Vercel, React Hook Form, Zod, or testing tools.
* Deployment docs for the chosen hosting platform.
* GitHub README references.
* Example portfolio/project README references when appropriate.

Focus:

* choosing a project that proves skill
* matching project scope to target role
* selecting visible frontend features
* defining MVP
* avoiding over-scoping
* planning proof-of-work milestones
* choosing docs based on the stack used

Ignore for now:

* startup-level product strategy
* monetization
* complex multi-role systems
* enterprise-grade infrastructure
* full backend platform building
* perfect design polish before core functionality
* copying clone projects without original explanation

### Local Dev Milestone connection

Portfolio Capstone Project begins here.

Learner should choose one track:

* SaaS dashboard
* marketplace/e-commerce mini project
* design system/component library
* custom project approved by the same criteria

The project should have:

* clear user problem
* small but complete MVP
* deployed version
* GitHub repository
* README
* screenshots
* technical decision notes
* demo script

### Uji Kompetensi

Assessment coverage:

* project selection
* target role alignment
* MVP scope
* feature prioritization
* proof-of-skill features
* technical risk awareness
* avoiding over-scoping
* explaining why the project is worth showing

Readiness criteria:

Learner can choose a realistic portfolio project, explain what skills it proves, define an MVP, separate must-have features from stretch goals, and create a plan that can actually be finished.

---

## Module: Project Documentation and Demo Prep

### Module goal

Learners can document a project clearly, prepare screenshots and feature notes, complete a deployment checklist, explain technical decisions, and create a demo script.

### Prerequisite

Learner has chosen a portfolio project track and understands GitHub, deployment, README writing, testing, accessibility, performance, and security basics.

### Planned lesson sequence

| Order | Lesson title                                       | Lesson role                      | Main concept                                     | Activity pattern                                                    | Practice output                                   | Bridge / prepares for |
| ----- | -------------------------------------------------- | -------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------- | --------------------- |
| 1     | README Structure                                   | Documentation lesson             | repository should explain the project quickly    | text, README template, writing-practice, summary                    | Draft project README structure                    | Screenshots           |
| 2     | Screenshots and Feature Notes                      | Evidence lesson                  | show what the project does visually              | text, screenshot checklist, feature note examples, summary          | Add screenshots and feature explanations          | Deployment            |
| 3     | Deployment Checklist                               | Release readiness lesson         | deployed project should be usable and not broken | text, checklist, troubleshooting callout, summary                   | Complete deployment readiness checklist           | Technical decisions   |
| 4     | Technical Decision Notes                           | Engineering communication lesson | explain why choices were made                    | text, examples, writing-practice, summary                           | Write notes on stack, architecture, trade-offs    | Demo script           |
| 5     | Demo Script                                        | Presentation lesson              | show the project clearly in limited time         | text, demo flow example, practice checklist, summary                | Prepare a 3–5 minute demo script                  | Assessment            |
| 6     | Uji Kompetensi Project Documentation and Demo Prep | Module assessment                | portfolio documentation readiness                | recap, quiz, README/demo review task, documentation bridge, summary | Produce a reviewable project README and demo plan | Interview readiness   |

### Built-in practice pattern

* README writing practice.
* Screenshot checklist.
* Feature note writing.
* Deployment self-review.
* Technical decision note writing.
* Demo script writing.
* Project review checklist.
* Avoid making learners write long essays; documentation should be clear and useful.

### Documentation Bridge

Suggested docs:

* GitHub Docs: README guidance.
* GitHub Docs: repositories.
* Vercel deployment docs.
* Chosen framework docs, such as Next.js or React.
* Chosen backend/docs, such as Supabase, if used.
* Testing, accessibility, or performance docs used in the project.

Focus:

* project overview
* feature list
* screenshots
* tech stack
* setup instructions
* environment variables note without exposing secrets
* deployment link
* known limitations
* technical decisions
* demo flow

Ignore for now:

* long case study writing
* marketing copy perfection
* full product documentation sites
* enterprise release notes
* investor pitch decks
* over-polished personal branding before project clarity

### Local Dev Milestone connection

Portfolio Capstone Project documentation:

* write README
* add screenshots
* confirm deployment link works
* add setup instructions
* document required environment variables safely
* write technical decision notes
* write demo script
* review known limitations

### Uji Kompetensi

Assessment coverage:

* README structure
* project summary
* feature notes
* screenshots
* deployment checklist
* setup instructions
* environment variable safety
* technical decision notes
* demo script
* known limitations

Readiness criteria:

Learner can create a project repository that a reviewer can understand quickly, run or inspect safely, view through deployment, and evaluate through clear screenshots, feature notes, and technical decisions.

---

## Module: Interview and Remote-Work Readiness

### Module goal

Learners can explain what they built, justify technical choices, discuss trade-offs, communicate asynchronously, and prepare for frontend interview conversations.

### Prerequisite

Learner has a portfolio project, README, deployment link, technical decision notes, and experience with GitHub pull requests or commit-based workflow.

### Planned lesson sequence

| Order | Lesson title                                       | Lesson role                    | Main concept                                            | Activity pattern                                                    | Practice output                                          | Bridge / prepares for |
| ----- | -------------------------------------------------- | ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------- | --------------------- |
| 1     | Explaining What You Built                          | Communication lesson           | clear project explanation                               | text, answer framework, speaking/writing practice, summary          | Explain project in 60–90 seconds                         | Technical choices     |
| 2     | Explaining Technical Choices                       | Engineering explanation lesson | why this stack, structure, and tools                    | text, examples, writing-practice, summary                           | Explain stack and architecture decisions                 | Trade-offs            |
| 3     | Explaining Trade-offs                              | Decision communication lesson  | every choice has cost                                   | text, trade-off examples, practice, quick-check, summary            | Explain one trade-off honestly                           | Async work            |
| 4     | PR and Async Work Habits                           | Remote workflow lesson         | communicate work clearly without meetings               | text, PR example, async update template, checklist, summary         | Write a PR summary or async status update                | Interview practice    |
| 5     | Interview Practice                                 | Interview readiness lesson     | answer behavioral and technical questions with evidence | text, question bank, practice, feedback checklist, summary          | Prepare answers from real project experience             | Assessment            |
| 6     | Uji Kompetensi Interview and Remote-Work Readiness | Module assessment              | job-ready communication                                 | recap, quiz, interview response task, documentation bridge, summary | Present project and answer technical/trade-off questions | Career readiness      |

### Built-in practice pattern

* Project explanation writing practice.
* Technical decision explanation.
* Trade-off explanation.
* PR summary writing.
* Async status update writing.
* Interview answer practice.
* Self-review checklist.
* Avoid generic career advice disconnected from the learner’s actual project.

### Documentation Bridge

Suggested docs:

* Project README and technical notes.
* Official stack docs used in the project.
* GitHub Docs: pull requests.
* GitHub Docs: issues and project collaboration.
* Portfolio examples only when grounded and not copied.
* Remote communication references when useful.

Focus:

* explaining project goal
* explaining user flow
* explaining tech stack
* explaining architecture choices
* explaining trade-offs
* discussing bugs and fixes
* writing PR summaries
* writing async progress updates
* answering interview questions with project evidence

Ignore for now:

* generic motivational advice
* fake interview scripts
* memorized answers
* over-polished personal branding
* salary negotiation
* recruiter strategy
* job application automation
* copying other portfolios

### Local Dev Milestone connection

Portfolio Capstone Project becomes interview-ready:

* record or rehearse a 3–5 minute demo
* prepare project explanation
* prepare technical decision explanation
* prepare trade-off notes
* write one PR-style summary
* write one async status update
* prepare answers to likely interview questions
* identify remaining project limitations honestly

### Uji Kompetensi

Assessment coverage:

* project explanation
* technical choice explanation
* trade-off explanation
* bug/fix explanation
* PR summary
* async update
* interview answer structure
* communicating limitations honestly
* using portfolio evidence instead of generic claims

Readiness criteria:

Learner can present a portfolio project clearly, explain technical choices and trade-offs, communicate progress asynchronously, write useful PR-style summaries, and answer interview questions with concrete evidence from their own work.

---

## Level 20 completion readiness

Learner is portfolio and remote-work ready when they can:

* choose a realistic portfolio project
* define MVP and stretch goals
* explain what skill the project proves
* deploy the project
* publish a readable GitHub repository
* write a clear README
* add screenshots and feature notes
* document setup instructions safely
* explain technical decisions
* explain trade-offs honestly
* prepare a short demo script
* write PR-style summaries
* write async progress updates
* answer interview questions using real project evidence
* communicate project limitations without sounding defensive
* show proof of frontend skill through working software, not only claims

Final capstone outcome:

Learner has at least one complete portfolio project with:

* deployed URL
* GitHub repository
* README
* screenshots
* feature notes
* technical decision notes
* known limitations
* demo script
* interview-ready explanation

After this level, the learner can continue improving portfolio depth, applying to roles, contributing to open source, or specializing further in frontend architecture, design systems, performance, accessibility, backend integration, or product engineering.

# First Content Batches

Content should expand in complete module slices.

A complete module slice includes:

* regular lessons
* meaningful examples
* built-in practice when useful
* Documentation Bridge
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

* Active and complete as the first Forms and Basic Accessibility slice.

Includes:

* Link vs Button
* Form, Label, dan Input
* Textarea, Select, dan Required Fields
* Alt Text Dasar
* Keyboard Navigation Dasar
* Basic Accessibility Checklist
* Uji Kompetensi Forms and Basic Accessibility

## Batch 1E: CSS Core Mechanics

Status:

* Active as a separate CSS fundamentals module.
* Prototype CSS content should still not be reused without review.

Includes:

* Apa Itu CSS?
* Selector dan Declaration Dasar
* Cascade dan Specificity Dasar
* Uji Kompetensi CSS Core Mechanics

## Batch 1F: Box Model and Spacing

Status:

* Active as a separate module after CSS Core Mechanics.

Includes:

* Box Model Dasar
* Width, Height, dan box-sizing
* Spacing yang Konsisten
* Uji Kompetensi Box Model and Spacing

## Batch 1G: Local Static Website Project

Status:

* Planned after early CSS basics.

Includes:

* Local Static Website Project

Purpose:

* move learners from built-in browser practice into local static workflow
* teach folder creation, editor workflow, browser preview, DevTools, Git, and GitHub

## Batch 2A: JavaScript Fundamentals

Status:

* Planned.

Includes:

* Values, Types, and Functions
* Arrays, Objects, and Data Modeling
* DOM, Events, Forms, localStorage, and Fetch Basics
* Local Vanilla JavaScript App

## Batch 3A: TypeScript and React Foundations

Status:

* Planned after JavaScript foundations.

Includes:

* Local Tooling and npm Basics
* TypeScript Core Types
* Practical Type Design
* Component Model
* State, Events, and Rendering
* Forms and Composition
* Local React App

# Content That Should Wait

Wait until foundational modules are stable before creating:

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
* Use built-in practice for focused concept practice.
* Use Local Dev Milestone for real workflow practice.
* Use Documentation Bridge to guide learners toward official docs.
* Use coding practice when the learner is ready to apply the concept.
* Use writing practice when the frontend task maps to remote-work communication.
* Use Uji Kompetensi for module-level readiness checks.
* Avoid quiz overload in regular lessons.
* Avoid repetitive lessons.
* Prefer fewer mature lessons over many shallow lessons.
* Do not add the next module until the current module has been browser-tested.
