# FluentStack Content Authoring Guide

## Purpose

This guide explains how to create FluentStack learning content without lowering quality or drifting from the product direction.

Use this document before adding or revising:

* tracks
* modules
* regular lessons
* Uji Kompetensi
* quizzes
* coding challenges
* writing practices
* Documentation Bridge
* Local Dev Milestone
* content batches

This is an authoring guide, not a schema migration plan. Do not change the content schema unless a future product task explicitly requires it.

## Required Reading for Content Work

Before editing learning content, read the relevant documents:

* `docs/11_COPYWRITING_AND_CONTENT_VOICE.md`
* `docs/12_CURRICULUM_PLAN.md`
* `docs/20_FRONTEND_CURRICULUM_DETAIL.md` for Frontend Engineering content
* `docs/21_ENGLISH_CURRICULUM_DETAIL.md` for English for Tech Careers content
* `docs/23_LESSON_FORMAT_STANDARD.md`
* `docs/24_LESSON_QUALITY_RUBRIC.md`

Use this guide for authoring rules, schema alignment, naming, workflow, and review checks.

Use `docs/23_LESSON_FORMAT_STANDARD.md` for lesson structure.

Use `docs/24_LESSON_QUALITY_RUBRIC.md` for quality scoring.

## Core Content Model

FluentStack uses a module-level learning model.

The default flow is:

```txt
Track
→ Level
→ Module
→ Regular lessons
→ Uji Kompetensi
→ Documentation Bridge / Local Dev Milestone when relevant
→ Next module
```

Regular lessons teach and practice.

`Uji Kompetensi` checks readiness at the end of a module.

Built-in practice helps learners practice one focused concept inside FluentStack.

Local Dev Milestone helps learners apply several concepts in a real project workflow on their own device.

Documentation Bridge helps learners build the habit of reading official documentation.

Do not make every regular lesson feel like a test.

## Language Rules

Developer documentation uses English.

Actual lesson content inside the product should be Bahasa Indonesia-first.

Use Bahasa Indonesia for:

* lesson explanations
* quiz questions and explanations
* practice instructions
* summaries
* user-facing learning guidance
* Local Dev Milestone instructions
* Documentation Bridge guidance

Common technical terms may stay in English when natural.

Examples:

* `component`
* `props`
* `state`
* `hook`
* `API`
* `semantic HTML`
* `accessibility`
* `responsive design`
* `debugging`
* `deployment`
* `pull request`
* `daily update`
* `terminal`
* `local project`
* `documentation`

Do not force awkward translations of common technical terms.

English for Tech Careers lessons should use bilingual format:

* Indonesian explanation
* practical English examples
* Indonesian meaning or context when useful
* learner writes their own English response

## Static Content and User Progress

FluentStack content is static learning content stored in the codebase.

User progress is separate.

### Static Learning Content

Static content lives in:

* `src/content/tracks.ts`
* `src/content/modules.ts`
* `src/content/lessons.ts`
* `src/content/quizzes.ts`
* `src/content/challenges.ts`

Static content defines:

* what learners can study
* module and lesson order
* what blocks appear in a lesson
* which quiz belongs to a lesson or Uji Kompetensi
* which coding challenge belongs to a coding-practice block
* which block IDs are required for completion
* which local milestone instructions are shown if local milestone content uses existing block types
* which official docs are referenced if Documentation Bridge content uses existing block types

### User Progress

User progress is not content.

Progress stores:

* completed block IDs
* completed lesson IDs
* quiz scores
* challenge code and checklist state
* writing drafts
* XP
* streak

Do not put user-specific state inside static content files.

## Content Hierarchy

## Track

A track is a long learning path.

Examples:

* `Frontend Engineering`
* `English for Tech Careers`

Track authoring rules:

* Use a stable globally unique `id`.
* Use a stable globally unique `slug`.
* Keep the description specific to what learners will practice.
* Add module IDs in learning order.
* Keep skill tags broad and useful.
* Do not include hidden, empty, or unfinished modules in active track order unless the product intentionally supports that state.
* Do not expose prototype modules as active curriculum.

## Module

A module groups related lessons inside one track.

A module should have:

* clear goal
* prerequisite
* regular lesson sequence
* Uji Kompetensi
* readiness criteria
* Documentation Bridge
* Local Dev Milestone connection when relevant
* bridge to the next module

Module authoring rules:

* Use a stable `id` and `slug`.
* Keep `lessonIds` ordered.
* Set realistic `estimatedHours`.
* Keep description focused on the practical output.
* Do not add lessons just to make the module look full.
* Do not include duplicate concept lessons.
* End each mature module with Uji Kompetensi.
* Include Documentation Bridge when official docs can help the learner continue.
* Add Local Dev Milestone only when the learner has enough concepts to combine.

## Regular Lesson

A regular lesson teaches one clear concept or skill.

A regular lesson should usually include:

* learning goal
* path context
* focused explanation
* important terms
* small example
* how to read or use the example
* common mistake or decision rule
* quick check
* built-in coding practice, writing practice, or mini action when useful
* actionable summary
* bridge to the next lesson

Regular lesson authoring rules:

* Teach one main objective.
* Explain terms before using them heavily.
* Do not make the learner practice before they understand the concept.
* Use concrete examples.
* Keep paragraphs short.
* Use quick checks for light understanding checks.
* Use built-in practice when the learner is ready to apply the concept.
* Do not add a quiz by default.
* Add a quiz only when it provides clear learning value.
* End with summary and bridge.
* Avoid sending beginners to broad documentation pages inside every regular lesson.

Good regular lesson objective:

```txt
Write a basic HTML page with head, title, body, heading, and paragraph.
```

Weak regular lesson objective:

```txt
Understand everything about HTML structure completely.
```

## Uji Kompetensi

`Uji Kompetensi` is the module-end assessment.

It checks whether the learner is ready for the next module.

Uji Kompetensi may include:

* module recap
* quiz
* coding practice
* writing practice
* project task
* case study
* self-review checklist
* Documentation Bridge
* readiness summary

Uji Kompetensi authoring rules:

* Cover the whole module.
* Do not introduce important new concepts.
* Do not create random trivia.
* Test practical decisions when possible.
* Use quiz questions that connect to regular lessons.
* Use coding practice when the module teaches implementation.
* Use writing practice when the module teaches communication.
* Include Documentation Bridge when official docs help reinforce the module.
* Include a readiness summary.
* Bridge to the next module when relevant.

Good assessment coverage:

```txt
HTML Basics assessment checks document structure, head vs body, title vs h1, tag/element/attribute, links, images, alt text, and simple relative paths.
```

Weak assessment coverage:

```txt
Ask some random questions about HTML.
```

## Built-in Practice

Built-in practice happens inside FluentStack.

Use built-in practice for focused concept practice.

Good built-in practice tasks:

* write basic HTML structure
* refactor divs into semantic HTML
* adjust CSS spacing
* change Flexbox alignment
* transform an array of objects
* handle a button click
* update React props
* write a daily update
* write a PR note

Built-in practice authoring rules:

* Keep the task focused.
* Explain the concept before practice.
* Make the output visible, checkable, or reviewable.
* Use starter code that helps but does not solve everything.
* Use rule-based auto validation when deterministic.
* Use manual checklist for subjective review.
* Keep instructions Bahasa Indonesia-first.
* Keep CSS/JS empty or minimal when the lesson is HTML-only.
* Do not require local setup for built-in practice.

Built-in practice is useful at every level. It is not only for beginner lessons.

## Local Dev Milestone

Local Dev Milestone happens on the learner’s own device.

Use local milestones when the learner needs to combine several concepts into real workflow.

Use local milestones for:

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

Good timing examples:

* after early HTML, Forms, and CSS:

  * Local Static Website Project

* after JavaScript DOM, events, localStorage, and fetch:

  * Local Vanilla JavaScript App

* before or during TypeScript/React tooling:

  * Local Tooling and npm Basics

* after React Fundamentals:

  * Local React App

* after Next.js App Router:

  * Local Next.js App

* during Production Next.js:

  * Local Next.js App + Deploy to Vercel

Local milestone authoring rules:

* State what the learner will build locally.
* List required tools.
* Give setup steps.
* Show expected folder structure.
* Provide run/open instructions.
* Include common local setup mistakes.
* Include Git/GitHub step when relevant.
* Include Documentation Bridge.
* Include completion checklist.
* Use writing practice for README, project note, or demo note when useful.

Good local milestone output:

```txt
A local static website project with index.html, about.html, styles.css, images folder, Git history, and GitHub repository.
```

Weak local milestone output:

```txt
Install some tools and make a project.
```

## Documentation Bridge

Documentation Bridge teaches learners how to use official documentation.

FluentStack should not replace official documentation. It should make documentation easier to approach.

Use Documentation Bridge at:

* the end of a module
* Uji Kompetensi
* Local Dev Milestone
* advanced lessons where official docs are part of real workflow
* project work
* debugging or deployment tasks

Do not overload every small regular lesson with many links.

For beginners, Documentation Bridge must be guided and specific.

A Documentation Bridge should include:

* official docs source
* specific page or section
* what to focus on
* what to ignore for now
* one small follow-up action

Weak Documentation Bridge:

```txt
Read the React docs.
```

Strong Documentation Bridge:

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

Do not use random blog posts as primary references when official docs are available.

Do not dump broad docs links without guidance.

## Lesson Roles

Before writing lessons, define each lesson’s role.

Common regular lesson roles:

* beginner concept lesson
* concept + guided practice lesson
* guided example lesson
* practice lesson
* reinforcement lesson
* common mistakes lesson
* case study lesson
* Documentation Bridge lesson
* Local Dev Milestone lesson

Assessment role:

* Uji Kompetensi / module assessment

Every lesson in a module must have a unique role.

Do not create two lessons that explain the same concept in different words.

If two lessons overlap:

* merge the repeated explanation
* convert one lesson into guided practice
* convert one lesson into reinforcement
* convert one lesson into common mistakes or case study
* move the check into Uji Kompetensi
* remove the lesson from the active module order if it does not add value

## Block Types

Supported block types:

* `text`
* `callout`
* `code-example`
* `quick-check`
* `coding-practice`
* `writing-practice`
* `quiz`
* `summary`

Do not add new block types unless a future product task explicitly requires it.

Documentation Bridge and Local Dev Milestone can be represented with existing block types for now:

* `text`
* `callout`
* `code-example`
* `writing-practice`
* `summary`
* `self-review checklist` style content where supported
* coding-practice only when it fits the current system

## When to Use Each Block

### `text`

Use for focused explanation.

Use when:

* introducing a concept
* explaining a work situation
* connecting a concept to a real use case
* explaining how to read a code example
* guiding official documentation reading
* explaining local setup steps

Keep it focused. If one text block becomes too large, split the explanation into multiple focused blocks or revise the lesson scope.

### `callout`

Use for a focused note.

Good callout variants:

* `tip`
* `warning`
* `common-mistake`
* `important`

Use callouts to prevent mistakes or give decision rules.

Do not use callouts to repeat the main text.

### `code-example`

Use when learners need to see a concrete implementation.

Use for:

* HTML structure
* CSS rules
* JavaScript behavior
* TypeScript types
* React components
* JSON/API examples
* bash commands when setup is part of the lesson
* file tree examples

Every code example should have a short explanation of the important lines.

For beginner coding lessons, add a “how to read this code” explanation before practice.

### `quick-check`

Use for one small understanding check.

Use when:

* the learner should distinguish two similar concepts
* there is a common mistake to catch early
* the answer can be explained in one short paragraph
* the check prepares the learner for practice

Do not use quick checks for trivia.

### `quiz`

Use mainly inside Uji Kompetensi.

Use a quiz in a regular lesson only when:

* the concept has several common misunderstandings
* the quiz adds learning value beyond the quick check
* the lesson does not become test-heavy
* the learner has enough explanation before being tested

Do not add quizzes to regular lessons by default.

### `coding-practice`

Use when the learner should build, edit, refactor, inspect, or debug code.

Use for:

* HTML structure
* CSS layout
* JavaScript behavior
* React components
* data loading states
* frontend refactoring
* module assessment practice

Coding practice should have:

* clear goal
* beginner-friendly instructions
* starter code
* checklist or auto validation
* optional solution code
* completion that maps to a real learning action

For deterministic tasks, prefer simple rule-based auto validation.

Manual checklist remains acceptable for subjective review.

### `writing-practice`

Use when the learner should write a realistic work artifact.

Use for:

* daily update
* blocker note
* bug report
* pull request description
* code review comment
* implementation note
* docs summary
* README section
* demo script
* interview answer

Writing practice is especially important for English for Tech Careers and local milestone documentation.

### `summary`

Use at the end of a lesson or Uji Kompetensi.

Keep it concrete:

* what the learner should remember
* what decision rule they can apply
* what they can do next
* what docs they can read next if relevant
* what the next lesson or module will build on

Avoid generic motivational filler.

## Quiz Authoring Rules

Use quizzes to teach after the answer, not to trap the learner.

Rules:

* Prefer quiz in Uji Kompetensi.
* Use quiz in regular lessons only when clearly useful.
* Test one concept per question.
* Make wrong answers plausible.
* Avoid joke answers.
* Avoid trick wording.
* Keep explanations clear and supportive.
* Explain why the correct answer works.
* Explain common misconceptions when useful.
* Use Bahasa Indonesia for frontend quizzes.
* Use bilingual context only when the quiz belongs to English for Tech Careers.
* Do not always put the correct answer in the first option.
* Vary correct answer positions within a quiz.

Supported question types:

* `multiple-choice`
* `true-false`
* `fill-blank`
* `code-output`

Passing score guidance:

* Default passing score is `70`.
* Use `70` for most Uji Kompetensi quizzes.
* Use a higher score only when the assessment is intentionally strict.
* Do not use quiz scores as punishment.

## Coding Challenge Authoring Rules

Coding challenges should be practical and safe.

Rules:

* Provide starter code for `html`, `css`, and `js` when the current challenge model expects them.
* Keep the task small enough for one lesson or assessment.
* Write instructions in Bahasa Indonesia.
* Include a clear checklist or validation metadata.
* Include solution code when useful.
* Do not require server execution.
* Do not use AI grading in MVP content.
* Do not rely on unsafe code execution.
* Completion should map to real practice.

### Auto Validation

Use auto validation when requirements can be checked deterministically.

Good use cases:

* HTML element exists
* attribute exists
* required text exists
* semantic region exists
* simple CSS property exists
* simple code pattern exists

Manual checklist is better for:

* subjective code quality
* visual judgment
* accessibility review
* project completeness
* writing quality
* self-review tasks
* local project completion

Good validation label:

```txt
Ada elemen h1.
```

Weak validation label:

```txt
HTML sudah bagus.
```

## Writing Practice Authoring Rules

Writing practice should produce a realistic work artifact.

Rules:

* Start from a realistic scenario.
* Use a clear prompt.
* Include a useful placeholder.
* Use the default minimum character count of `80` unless the task needs a different length.
* Keep checklist items guidance-only.
* Provide a model answer when it helps learners compare structure and tone.
* For English track lessons, include bilingual explanation before the writing task.
* Do not add AI grading in MVP content.

Good writing prompt:

```txt
Tulis daily update singkat dalam English untuk task memperbaiki form validation. Gunakan format Yesterday / Today / Blockers.
```

Weak writing prompt:

```txt
Tuliskan sesuatu tentang pekerjaan kamu.
```

## Naming and ID Rules

IDs and slugs must stay stable after release because progress depends on them.

Rules:

* Use globally unique track IDs.
* Use stable module IDs.
* Use stable lesson IDs and slugs.
* Prefer globally unique module slugs.
* Use readable IDs.
* Use lowercase kebab-case.
* Avoid renaming IDs after content is released.
* Do not reuse old IDs for different content.
* Keep block IDs unique inside a lesson.
* Keep quiz IDs globally unique.
* Keep challenge IDs globally unique.

Recommended patterns:

```txt
track id: frontend-engineering
module id: html-basics
lesson id: html-basic-structure
lesson slug: html-basic-structure
assessment id: html-basics-assessment
quiz id: html-basics-assessment-quiz
challenge id: build-basic-html-page
local milestone id: local-static-website-project
docs bridge block id: html-basics-docs-bridge
```

## Module Planning Workflow

Use this workflow before writing module content:

1. Choose curriculum module.
2. Confirm module goal.
3. Confirm prerequisite knowledge.
4. Define regular lesson sequence.
5. Define each lesson role.
6. Define built-in practice pattern for each lesson.
7. Define Uji Kompetensi coverage.
8. Define Documentation Bridge.
9. Define Local Dev Milestone connection if relevant.
10. Define readiness criteria.
11. Check for overlap between lessons.
12. Remove, merge, or reposition repeated concepts.

Do not start by writing lesson content.

Start by planning the module arc.

## Content Batch Workflow

Use this workflow for every content batch:

1. Pick one module slice.
2. Confirm the lesson sequence.
3. Confirm whether this module needs built-in practice only, Documentation Bridge, Local Dev Milestone, or a combination.
4. Write or revise one representative regular lesson.
5. Score it with `docs/24_LESSON_QUALITY_RUBRIC.md`.
6. Improve it before scaling.
7. Write or revise the remaining regular lessons.
8. Add coding practice or writing practice where useful.
9. Add or update Uji Kompetensi.
10. Add or update assessment quiz/practice coverage.
11. Add Documentation Bridge when relevant.
12. Add Local Dev Milestone only when the learner is ready for real workflow.
13. Update module `lessonIds`.
14. Run lint/build.
15. Test the module in browser.
16. Commit.

A complete module slice includes:

* regular lessons
* meaningful examples
* built-in practice when useful
* Documentation Bridge when useful
* Uji Kompetensi
* quiz/practice coverage
* bridge to the next module
* browser testing

A complete local milestone slice includes:

* setup guidance
* local project goal
* expected folder structure
* run/open instructions
* common setup mistakes
* Git/GitHub step when relevant
* Documentation Bridge
* completion checklist
* optional writing practice for README or project note

Do not add the next module until the current module feels coherent.

Batch size guidance:

* Prefer one complete module slice.
* Keep batches small enough to review.
* Do not add many shallow lessons at once.
* Quality matters more than lesson count.

## Review Checklist Before Merge

### Module quality

* Module has a clear goal.
* Module has clear prerequisite knowledge.
* Lesson order is logical.
* Each lesson has a unique role.
* No two lessons explain the same concept in different words.
* Built-in practice appears where useful.
* Documentation Bridge is specific and guided when used.
* Local Dev Milestone appears only when the learner is ready.
* Uji Kompetensi covers the module.
* Assessment does not introduce important new concepts.
* Module bridges to the next module.

### Lesson quality

* Each regular lesson has one clear objective.
* Copy follows `docs/11_COPYWRITING_AND_CONTENT_VOICE.md`.
* Beginner lessons introduce terms before using them heavily.
* Explanations are mature enough before practice.
* Examples are concrete.
* Quick checks are useful.
* Practice is meaningful.
* Regular lessons are not quiz-heavy.
* Documentation links are not dumped without guidance.
* Summary is actionable.
* Bridge copy is specific.

### Assessment quality

* Uji Kompetensi checks the whole module.
* Quiz questions match the regular lessons.
* Practice task matches module goals.
* Feedback explains the rule behind answers.
* Correct answer positions are varied.
* Readiness summary is clear.
* Documentation Bridge supports the module goal if included.

### Documentation Bridge quality

* Uses official or trusted docs.
* Names the specific source and section.
* Gives focus points.
* Tells learner what to ignore for now.
* Includes one follow-up action.
* Does not overwhelm beginners with broad docs.

### Local Dev Milestone quality

* Learner knows what to build locally.
* Required tools are clear.
* Setup steps are specific.
* Expected folder structure is shown.
* Run/open instruction is clear.
* Common mistakes are listed.
* Git/GitHub step exists when relevant.
* Documentation Bridge is included.
* Completion checklist is realistic.

### Schema and linking

* Track, module, lesson, quiz, and challenge IDs are stable and readable.
* Module `lessonIds` includes lessons in the right order.
* Lesson `completionRule.requiredBlockIds` includes all required blocks.
* Quiz block references an existing quiz.
* Coding practice block references an existing challenge.
* Challenge `lessonId` matches the lesson that uses it.
* Hidden modules are not included in active track order.
* Prototype modules are not treated as active curriculum.

### Interaction

* Required blocks can realistically be completed.
* Quick check has one correct answer.
* Quiz passing score is reasonable.
* Writing practice has a clear prompt and checklist.
* Coding challenge has starter code, validation/checklist, and optional solution.
* Auto validation does not pass everything by default unless intentional.
* Local milestone checklist does not claim the app can verify local device work automatically unless that feature exists.

### Verification

* `npm run lint` passes.
* `npm run build` passes.
* Main learning route works.
* Module page renders in the correct order.
* Lesson page renders every block.
* Coding practice preview works.
* Auto validation works when used.
* Quiz can be completed.
* Writing draft can be saved.
* Guest localStorage progress works.
* Logged-in Supabase progress works.

## Sample Module Blueprint: HTML Basics

```txt
Track:
Frontend Engineering

Module:
HTML Basics

Module goal:
Learner can write a simple HTML page with valid structure, visible content, links, images, and simple relative paths.

Prerequisite:
Learner understands what HTML is and where index.html fits in a small frontend project.

Regular lessons:
1. Struktur HTML Dasar
   Role: concept + guided practice
   Practice: built-in HTML editor
   Docs bridge: no broad docs yet, mention MDN HTML basics at assessment

2. Tag, Element, dan Attribute
   Role: concept + guided practice
   Practice: edit link and image attributes

3. Heading, Paragraf, Link, dan Gambar
   Role: content elements practice
   Practice: build a basic content page

4. Relative Paths Dasar
   Role: file reference practice
   Practice: use href and src with local-like paths in built-in editor

Uji Kompetensi:
Uji Kompetensi HTML Basics

Assessment coverage:
- document structure
- head vs body
- title vs h1
- tag, element, attribute
- h1, p, a, img
- href, src, alt
- simple relative paths

Assessment blocks:
- recap
- quiz
- coding-practice
- Documentation Bridge
- summary

Local milestone connection:
HTML Basics prepares learners for Local Static Website Project after early CSS.
```

## Sample Regular Lesson Blueprint

```txt
Lesson:
Relative Paths Dasar

Role:
file reference practice

Objective:
Use simple relative paths in href and src.

Suggested blocks:
1. text
   Explain why href and src point to files or pages.

2. code-example
   Show a small file tree and HTML usage.

3. callout
   Common mistake: path does not match the actual folder/file location.

4. quick-check
   Ask which path points to an image inside images folder.

5. coding-practice
   Learner edits href and src in built-in editor.

6. summary
   Recap path rule and bridge to Uji Kompetensi.

No regular quiz by default.
```

## Sample Uji Kompetensi Blueprint

```txt
Lesson:
Uji Kompetensi HTML Basics

Role:
module assessment

Purpose:
Check whether learner is ready for Semantic HTML.

Suggested blocks:
1. text recap
   List what the module covered.

2. quiz
   Check module concepts.

3. coding-practice
   Build a small HTML content page.

4. Documentation Bridge
   Guide learner to MDN HTML pages with focus points.

5. summary
   Explain readiness and bridge to Semantic HTML.

Assessment coverage:
- document structure
- tag, element, attribute
- visible content
- links
- images
- relative paths
```

## Sample Local Dev Milestone Blueprint

```txt
Module:
Local Static Website Project

Role:
local development milestone

Purpose:
Move learner from built-in browser practice into local device workflow.

Prerequisite:
Learner has learned HTML, semantic HTML, forms basics, and early CSS.

Suggested lessons:
1. Menyiapkan Folder Project Lokal
2. Membuka Project di Code Editor
3. Menjalankan HTML di Browser
4. DevTools Dasar untuk Static Page
5. Menyimpan Project dengan Git dan GitHub
6. Uji Kompetensi Local Static Website Project

Expected output:
A local static website repository.

Documentation Bridge:
- MDN Getting started with the web
- GitHub Docs repository basics
- MDN DevTools basics

Completion checklist:
- project folder exists
- index.html exists
- styles.css exists
- page opens in browser
- Git commit exists
- GitHub repository exists
- learner writes short project note
```

## Sample Documentation Bridge Blueprint

```txt
Documentation Bridge:
MDN HTML basics

Read:
MDN: HTML basics
MDN: Creating hyperlinks
MDN: Images in HTML

Focus on:
1. how HTML elements are written
2. how href points to another page
3. how src and alt work on images

Ignore for now:
- advanced metadata
- responsive images
- browser compatibility tables

Follow-up action:
Open your HTML Basics practice and identify one tag, one attribute, one link, and one image.
```

## Sample English Writing Lesson Blueprint

```txt
Track:
English for Tech Careers

Module:
Daily Remote Communication

Lesson:
Writing a Daily Update

Role:
work communication practice

Objective:
Write a clear daily update using Yesterday / Today / Blockers.

Suggested blocks:
1. text
   Explain the work situation in Bahasa Indonesia.

2. callout
   Common mistake: writing vague updates.

3. quick-check
   Choose the clearer update.

4. writing-practice
   Learner writes an English daily update.

5. summary
   Recap structure and bridge to blocker explanation.
```

## Final Authoring Rule

If a lesson does not help the learner understand, practice, communicate, read documentation, build locally, or prove a real skill, do not add it.

If a module does not have a clear learning arc and Uji Kompetensi, do not scale it yet.

If a local milestone would overwhelm the learner, delay it until enough built-in practice has prepared them.

If a Documentation Bridge feels like link dumping, rewrite it with specific focus points and a follow-up action.
