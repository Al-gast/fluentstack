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

# Level 3: CSS Fundamentals and Layout

## Goal

Style pages with predictable layout, responsive behavior, and maintainable CSS.

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

Handle async behavior, modules, browser APIs, and debugging with more confidence.

## Module: Scope, Closure, and Modules

Lesson sequence:

1. Scope Dasar
2. Closure dalam Contoh UI
3. ES Modules dan import/export
4. Memecah File JavaScript
5. Uji Kompetensi Scope, Closure, and Modules

Built-in practice:

* small scope prediction tasks
* closure examples
* import/export examples

Documentation Bridge:

* MDN closures
* MDN modules
* MDN import/export

Local milestone connection:

* upgrade Local Vanilla JavaScript App to use modules

Uji Kompetensi coverage:

* scope
* closure
* module boundaries
* import/export
* refactoring script into modules

## Module: Async JavaScript and Error Handling

Lesson sequence:

1. Promise Dasar
2. async / await
3. try / catch
4. Loading, Error, Empty, dan Success State
5. Retry Dasar
6. Uji Kompetensi Async JavaScript and Error Handling

Built-in practice:

* async flow tasks
* error handling tasks
* loading/error UI practice

Documentation Bridge:

* MDN promises
* MDN async functions
* MDN try/catch
* MDN fetch error handling references

Local milestone connection:

* upgrade Local Vanilla JavaScript App with better async states

Uji Kompetensi coverage:

* async flow
* error handling
* loading/error UI
* failed request handling

## Module: Browser APIs, Data Transformation, and Debugging

Lesson sequence:

1. URL dan Timer API Dasar
2. Clipboard dan Storage Patterns
3. Network Debugging
4. Breakpoints dan Console Strategy
5. Uji Kompetensi Browser APIs and Debugging

Built-in practice:

* browser API mini tasks
* debugging case studies
* data transformation exercises

Documentation Bridge:

* MDN URL API
* MDN timers
* Chrome DevTools docs
* MDN storage docs

Local milestone connection:

* debugging pass on local JS app

Uji Kompetensi coverage:

* browser API use
* network debugging
* isolating bugs
* explaining a fix

---

# Level 6: TypeScript

## Goal

Use TypeScript to make frontend code safer without overcomplicating it.

## Module: Local Tooling and npm Basics

### Module goal

Learners understand the local tooling needed before modern TypeScript/React projects.

### Prerequisite

Learner has built simple local HTML/CSS/JS projects.

### Planned lesson sequence

1. Apa Itu Node.js dan npm?
2. Mengecek node -v dan npm -v
3. package.json Dasar
4. npm install dan npm run
5. Dependency vs Dev Dependency secara sederhana
6. Uji Kompetensi Local Tooling and npm Basics

Built-in practice:

* command reading tasks
* package.json inspection

Documentation Bridge:

* Node.js official docs
* npm docs
* Vite docs later when used

Local milestone connection:

* learner confirms local tooling is ready

Uji Kompetensi coverage:

* Node/npm purpose
* package.json
* install command
* run script
* dependency basics

## Module: TypeScript Core Types

Lesson sequence:

1. Apa Itu TypeScript?
2. Primitive Types dan Arrays
3. Object Types
4. Function Types
5. Optional Fields
6. Uji Kompetensi TypeScript Core Types

Built-in practice:

* type editing tasks
* type error reading

Documentation Bridge:

* TypeScript handbook: everyday types
* TypeScript handbook: object types
* TypeScript handbook: functions

Local milestone connection:

* optional local TypeScript playground/project

Uji Kompetensi coverage:

* basic types
* arrays
* objects
* functions
* optional fields

## Module: Practical Type Design

Lesson sequence:

1. Union Types
2. Narrowing
3. Discriminated Union untuk UI State
4. Generics Dasar
5. Utility Types Dasar
6. Uji Kompetensi Practical Type Design

Built-in practice:

* union/narrowing tasks
* UI state modeling

Documentation Bridge:

* TypeScript narrowing
* TypeScript unions
* TypeScript generics
* TypeScript utility types

Local milestone connection:

* model state in local or built-in project

Uji Kompetensi coverage:

* unions
* narrowing
* typed UI states
* generic helper
* avoiding unsafe casts

## Module: Typed Frontend Boundaries

Lesson sequence:

1. Typing API Responses
2. Typed Props
3. Typed Custom Hooks
4. Keeping Types Readable
5. Uji Kompetensi Typed Frontend Boundaries

Built-in practice:

* API type task
* props/hook type task

Documentation Bridge:

* TypeScript handbook
* React TypeScript references when appropriate

Local milestone connection:

* prepares for React

Uji Kompetensi coverage:

* API response types
* component props
* hook return types
* boundary safety

---

# Level 7: React Fundamentals

## Goal

Build interactive UI with components, props, state, and forms.

## Module: Component Model

Lesson sequence:

1. Apa Itu Component?
2. JSX Dasar
3. Props dan Children
4. Splitting UI into Components
5. Uji Kompetensi Component Model

Built-in practice:

* component editing
* props practice
* small UI preview

Documentation Bridge:

* React Learn: Your First Component
* React Learn: Writing Markup with JSX
* React Learn: Passing Props to a Component

Local milestone connection:

* prepares for Local React App

Uji Kompetensi coverage:

* JSX
* component structure
* props
* children
* reusable card/button components

## Module: State, Events, and Rendering

Lesson sequence:

1. useState Dasar
2. Event Handling
3. Conditional Rendering
4. Lists and Keys
5. Derived Display
6. Uji Kompetensi State, Events, and Rendering

Built-in practice:

* state changes
* event handling
* render list tasks

Documentation Bridge:

* React Learn: State
* React Learn: Responding to Events
* React Learn: Conditional Rendering
* React Learn: Rendering Lists

Local milestone connection:

* prepares for Local React App

Uji Kompetensi coverage:

* state updates
* events
* conditions
* lists
* keys
* derived display

## Module: Forms and Composition

Lesson sequence:

1. Controlled Inputs
2. Form Submit
3. Composition Patterns
4. Lifting State When Needed
5. Uji Kompetensi Forms and Composition

Built-in practice:

* controlled form task
* composition examples

Documentation Bridge:

* React Learn: Sharing State Between Components
* React Learn: Reacting to Input with State
* React Learn: Choosing the State Structure

Local milestone connection:

* leads to Local React App

Uji Kompetensi coverage:

* controlled form
* form submit
* composition
* state boundaries

## Module: Local React App

### Module goal

Learners create and run their first React app locally.

### Prerequisite

Learner understands components, props, state, events, lists, and basic forms.

### Planned lesson sequence

1. Membuat React Project Lokal
2. Menjalankan npm run dev
3. Mengenal Struktur src
4. Membuat Component Pertama di Local Project
5. Menambahkan State dan Event
6. Menyimpan Project ke GitHub
7. Uji Kompetensi Local React App

Built-in practice:

* minimal, mostly local workflow support

Documentation Bridge:

* React Learn
* Vite docs if used
* npm docs
* GitHub docs

Local milestone connection:

* this is a local milestone

Uji Kompetensi coverage:

* create project
* run dev server
* edit component
* use props/state
* commit and push

Readiness criteria:

Learner can run a React project locally and explain the basic file structure.

---

# Level 8: React Intermediate

## Goal

Organize behavior, state, and reusable patterns in medium-sized React features.

## Module: Custom Hooks and Effects

Lesson sequence:

1. Kapan Perlu useEffect?
2. Cleanup dan Dependency Array
3. Custom Hook Dasar
4. Browser Subscription Hook
5. Uji Kompetensi Custom Hooks and Effects

Built-in practice:

* effect and custom hook tasks

Documentation Bridge:

* React Learn: Synchronizing with Effects
* React Learn: Reusing Logic with Custom Hooks

Local milestone connection:

* upgrade Local React App with custom hook

## Module: State Strategy

Lesson sequence:

1. State Colocation
2. Derived State
3. Reducer Pattern
4. Context When Needed
5. Uji Kompetensi State Strategy

Built-in practice:

* state decision case studies
* reducer tasks

Documentation Bridge:

* React state structure docs
* React context docs

Local milestone connection:

* refactor Local React App state

## Module: Reusable UI States

Lesson sequence:

1. Loading State
2. Error State
3. Empty State
4. Retry Pattern
5. Uji Kompetensi Reusable UI States

Built-in practice:

* loading/error/empty UI tasks

Documentation Bridge:

* React docs where relevant
* accessibility refs for status messaging when needed

Local milestone connection:

* upgrade Local React App data states

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

Documentation Bridge:

* React error boundary references
* React Suspense references

Local milestone connection:

* add resilience pattern to local React project

### Module: Performance Awareness

Lesson sequence:

1. Render Cost
2. Measuring Before Optimizing
3. useMemo and useCallback When Useful
4. Expensive Lists
5. Uji Kompetensi Performance Awareness

Documentation Bridge:

* React performance references
* browser performance tools

Local milestone connection:

* measure and improve one local feature

### Module: Advanced Component Patterns

Lesson sequence:

1. Compound Components
2. Slots and Children Patterns
3. Reusable Form Field Pattern
4. Avoiding Over-Abstraction
5. Uji Kompetensi Advanced Component Patterns

Documentation Bridge:

* React composition docs
* design system references when relevant

Local milestone connection:

* build one reusable component pattern locally

---

# Level 10: Next.js App Router

## Goal

Build app-level routes and layouts with the App Router.

## Module: App Directory and Routing

Lesson sequence:

1. app Directory
2. page.tsx and layout.tsx
3. Nested Routes
4. Dynamic Routes
5. Route Groups
6. Uji Kompetensi App Directory and Routing

Built-in practice:

* route structure inspection
* small route examples

Documentation Bridge:

* Next.js docs: App Router
* Next.js docs: Routing
* Learn Next.js routing sections

Local milestone connection:

* prepares for Local Next.js App

## Module: Server Components and Client Components

Lesson sequence:

1. Server Components
2. Client Components
3. use client Boundary
4. Passing Props Across Boundaries
5. Common Boundary Mistakes
6. Uji Kompetensi Server and Client Components

Built-in practice:

* boundary decision tasks
* case studies

Documentation Bridge:

* Next.js docs: Server and Client Components
* React Server Components references when useful

Local milestone connection:

* implement boundaries in Local Next.js App

## Module: Loading, Error UI, Route Handlers, Metadata, and Env

Lesson sequence:

1. loading.tsx
2. error.tsx
3. Route Handlers
4. Metadata
5. Environment Variables
6. Uji Kompetensi Next.js Route Behavior

Built-in practice:

* small route behavior examples
* env/config reading tasks

Documentation Bridge:

* Next.js loading and error docs
* Next.js route handlers
* Next.js metadata
* Next.js environment variables

Local milestone connection:

* leads to Local Next.js App

## Module: Local Next.js App

Lesson sequence:

1. Membuat Next.js Project Lokal
2. Menjalankan npm run dev
3. Membuat Route dan Layout
4. Menambahkan Loading dan Error UI
5. Menambahkan Metadata
6. Push ke GitHub
7. Uji Kompetensi Local Next.js App

Documentation Bridge:

* Next.js official docs
* Learn Next.js
* Vercel docs preview for deployment

Local milestone connection:

* this is a local milestone

Readiness criteria:

Learner can run a basic Next.js App Router project locally and explain routes/layouts.

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

Documentation Bridge:

* Supabase Auth docs
* Next.js auth-related guidance when relevant

Local milestone connection:

* add auth to Local Next.js App

### Module: Supabase or Backend Integration

Lesson sequence:

1. Supabase Client Boundaries
2. RLS Concept
3. Service Layer
4. Persisting User Data
5. Profile Rows
6. Uji Kompetensi Supabase Integration

Documentation Bridge:

* Supabase client docs
* Supabase RLS docs
* Supabase database docs

Local milestone connection:

* save data in Local Next.js App

### Module: Production Operations

Lesson sequence:

1. Vercel Deployment
2. Environment Setup
3. Production Logs
4. Caching Basics
5. Deployment Debugging
6. Uji Kompetensi Production Operations

Documentation Bridge:

* Vercel deployment docs
* Next.js deployment docs
* environment variable docs

Local milestone connection:

* Local Next.js App + Deploy to Vercel

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

Documentation Bridge:

* React Hook Form docs
* Zod docs

### Module: Validation UX and Accessible Errors

Lesson sequence:

1. Inline Errors
2. Summary Errors
3. Focus Management
4. Disabled State
5. Success State
6. Uji Kompetensi Validation UX

Documentation Bridge:

* MDN form accessibility
* WAI form guidance

### Module: Server-State Thinking

Lesson sequence:

1. Server State vs Client State
2. Loading/Error/Empty States
3. Mapping API Responses
4. Optimistic UI Basics
5. Uji Kompetensi Server-State Thinking

Documentation Bridge:

* TanStack Query docs if used
* framework docs for data fetching

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

Documentation Bridge:

* Vitest docs
* Testing Library docs

### Module: Integration and API Mocking

Lesson sequence:

1. Integration Test Scope
2. MSW Basics
3. Loading/Error/Success API States
4. Auth-Adjacent Test Cases
5. Uji Kompetensi Integration and API Mocking

Documentation Bridge:

* MSW docs
* Testing Library docs

### Module: End-to-End Testing Strategy

Lesson sequence:

1. What E2E Should Cover
2. Playwright Basics
3. Critical User Journeys
4. Flaky Test Causes
5. Uji Kompetensi E2E Testing Strategy

Documentation Bridge:

* Playwright docs

Local milestone connection:

* run tests in local project

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

Documentation Bridge:

* web.dev Core Web Vitals
* Chrome DevTools performance docs

### Module: Asset and Bundle Optimization

Lesson sequence:

1. Image Optimization
2. Font Optimization
3. Bundle Awareness
4. Code Splitting
5. Dynamic Imports
6. Uji Kompetensi Asset and Bundle Optimization

Documentation Bridge:

* Next.js image/font docs
* Vercel/Next performance docs

### Module: Rendering Cost and Hydration

Lesson sequence:

1. Hydration Cost
2. Server vs Client Rendering Decisions
3. Client Component Boundaries
4. Expensive Re-renders
5. Uji Kompetensi Rendering Cost and Hydration

Documentation Bridge:

* React/Next rendering docs

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

Documentation Bridge:

* MDN accessibility
* WAI tutorials
* WCAG quick references

### Module: Accessible Components

Lesson sequence:

1. Modal Accessibility
2. Dropdown Accessibility
3. Tabs Accessibility
4. Focus Management
5. ARIA When Needed
6. Uji Kompetensi Accessible Components

Documentation Bridge:

* WAI-ARIA Authoring Practices
* MDN ARIA basics

### Module: Accessibility Testing and Preferences

Lesson sequence:

1. Color Contrast
2. Accessible Form Errors
3. Reduced Motion
4. Screen Reader Basics
5. Testing Tools
6. Uji Kompetensi Accessibility Testing and Preferences

Documentation Bridge:

* WCAG references
* browser accessibility tools
* Testing Library accessibility query guidance

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

Documentation Bridge:

* official framework docs
* selected architecture references only when grounded in module task

### Module: State and Data Strategy

Lesson sequence:

1. Server State vs Client State
2. URL State
3. Local State
4. Persistence Boundaries
5. Error Strategy
6. Uji Kompetensi State and Data Strategy

Documentation Bridge:

* framework docs
* TanStack Query docs if used

### Module: Component API and Documentation

Lesson sequence:

1. Component API Design
2. Prop Naming
3. Content-Driven Rendering
4. Usage Examples
5. Documentation Notes
6. Uji Kompetensi Component API and Documentation

Documentation Bridge:

* React docs
* Storybook docs when relevant

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

Documentation Bridge:

* MDN CSS custom properties
* design token references when useful

### Module: Product Components

Lesson sequence:

1. Form Components
2. Table Components
3. Modal
4. Toast
5. Tabs and Select
6. Uji Kompetensi Product Components

Documentation Bridge:

* React docs
* WAI component patterns

### Module: Storybook and Package Basics

Lesson sequence:

1. Storybook Basics
2. Component Stories
3. Accessibility Checks
4. Package Structure Basics
5. Changelog Thinking
6. Uji Kompetensi Storybook and Package Basics

Documentation Bridge:

* Storybook docs

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

Documentation Bridge:

* MDN HTTP docs
* API provider docs in examples

### Module: Auth, Cookies, and Browser Security Boundaries

Lesson sequence:

1. Auth Concepts
2. Cookies
3. JWT vs Session
4. CORS
5. CSRF
6. Secure Cookies
7. Uji Kompetensi Auth and Browser Security Boundaries

Documentation Bridge:

* MDN cookies
* MDN CORS
* OWASP references when appropriate

### Module: Data and Infrastructure Basics

Lesson sequence:

1. SQL Basics
2. PostgreSQL Basics
3. Supabase or Prisma Basics
4. Redis Basics
5. File Upload Concepts
6. Uji Kompetensi Data and Infrastructure Basics

Documentation Bridge:

* PostgreSQL docs
* Supabase docs
* Prisma docs if used

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

Documentation Bridge:

* OWASP references
* MDN security references

### Module: Secrets, Tokens, and Permissions

Lesson sequence:

1. Env Leakage
2. Token Storage
3. Secure Cookies
4. Permission UI
5. Auth Guards
6. Uji Kompetensi Secrets, Tokens, and Permissions

Documentation Bridge:

* OWASP references
* Supabase security docs
* Next.js env docs

### Module: File Upload and Third-Party Risk

Lesson sequence:

1. File Upload Risks
2. File Type and Size Checks
3. Preview Risks
4. Third-Party Packages
5. iframe Constraints
6. Uji Kompetensi File Upload and Third-Party Risk

Documentation Bridge:

* OWASP references
* framework security notes

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

Documentation Bridge:

* official docs for chosen stack
* deployment docs
* README references

Local milestone connection:

* Portfolio Capstone Project

### Module: Project Documentation and Demo Prep

Lesson sequence:

1. README Structure
2. Screenshots and Feature Notes
3. Deployment Checklist
4. Technical Decision Notes
5. Demo Script
6. Uji Kompetensi Project Documentation and Demo Prep

Documentation Bridge:

* GitHub README references
* Vercel deployment docs
* chosen framework docs

### Module: Interview and Remote-Work Readiness

Lesson sequence:

1. Explaining What You Built
2. Explaining Technical Choices
3. Explaining Trade-offs
4. PR and Async Work Habits
5. Interview Practice
6. Uji Kompetensi Interview and Remote-Work Readiness

Documentation Bridge:

* project docs
* official stack docs
* portfolio references

---

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

## Batch 1F: Early CSS + Local Static Website Project

Status:

* Planned after early CSS basics.

Includes:

* Box Model and Spacing
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
