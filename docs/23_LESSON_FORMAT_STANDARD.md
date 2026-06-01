# FluentStack Lesson Format Standard

## Purpose

This document defines the standard lesson format for FluentStack.

Use it when creating or revising:

* regular lessons in `src/content/lessons.ts`
* Uji Kompetensi lessons
* Documentation Bridge content
* Local Dev Milestone content
* quizzes in `src/content/quizzes.ts`
* coding challenges in `src/content/challenges.ts`
* writing practice blocks inside lessons

This standard does not introduce new block types and does not require schema changes. It maps FluentStack's teaching model to the current block-based content system.

This document defines lesson structure. `docs/24_LESSON_QUALITY_RUBRIC.md` defines how to score lesson quality.

Actual lesson content inside the product should remain Bahasa Indonesia-first. English documentation can describe the format, but user-facing explanations, quiz questions, practice instructions, local milestone instructions, documentation bridge guidance, and summaries should use natural Bahasa Indonesia.

Common technical terms may stay in English when they are standard in frontend work or remote-work communication.

## Core Principle

FluentStack uses several lesson/content types:

```txt
Regular Lesson
Uji Kompetensi
Documentation Bridge
Local Dev Milestone
```

They serve different purposes.

Regular lessons teach and practice.

Uji Kompetensi assesses module readiness.

Documentation Bridge guides learners toward official docs.

Local Dev Milestone teaches real workflow on the learner’s own device.

Do not make every lesson feel like an exam.

Do not replace built-in practice with local projects.

Do not dump documentation links without guidance.

## Regular Lesson

A regular lesson teaches one clear concept or skill.

It should feel like a guided learning step, not a loose article and not a repeated test.

Use a regular lesson for:

* concept explanation
* guided examples
* small observations
* mini actions
* quick checks
* built-in coding practice when the learner is ready
* writing practice when the task is communication-based
* small guided Documentation Bridge when tightly relevant
* summary and bridge

A regular beginner lesson should not include a quiz by default.

A quiz inside a regular lesson is allowed only when:

* the concept has several common misunderstandings
* the quiz adds learning value beyond a quick check
* the learner has enough explanation before being tested
* the lesson does not become test-heavy

## Uji Kompetensi

`Uji Kompetensi` is the module-end assessment.

Use it to check whether the learner is ready for the next module.

An Uji Kompetensi may include:

* module recap
* quiz
* built-in coding practice
* writing practice
* project task
* case study
* self-review checklist
* Documentation Bridge
* readiness summary
* bridge to the next module

Uji Kompetensi should test what the module already taught.

Do not introduce important new concepts inside Uji Kompetensi.

## Built-in Practice

Built-in practice happens inside FluentStack.

It supports regular lessons and Uji Kompetensi.

Use built-in practice for:

* focused concept practice
* fast feedback
* browser-safe code editing
* visual preview
* rule-based auto validation
* small writing tasks
* deterministic implementation checks

Built-in practice should remain useful across beginner, intermediate, and advanced content.

It is not only for early HTML/CSS lessons.

Examples:

* HTML: write `h1`, `p`, `a`, `img`, and semantic regions
* CSS: adjust Flexbox, Grid, spacing, selectors, and responsive rules
* JavaScript: write functions, transform arrays, handle events
* React: edit component props, state, list rendering, controlled inputs
* Next.js: inspect route structure, server/client boundary examples, loading/error UI patterns
* English: write daily updates, pull request notes, code review replies, and interview answers

## Documentation Bridge

Documentation Bridge teaches learners how to approach official documentation.

FluentStack should not replace official docs. It should make docs easier to use.

Use Documentation Bridge at:

* the end of a module
* Uji Kompetensi
* Local Dev Milestone
* advanced lessons where docs are part of real workflow
* project work
* debugging or deployment tasks

Avoid putting many docs links inside every small regular lesson.

A Documentation Bridge should include:

* official docs source
* specific page or section
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

## Local Dev Milestone

Local Dev Milestone teaches real engineering workflow on the learner’s own device.

Use it when learners need to combine several concepts outside the built-in editor.

Use Local Dev Milestone for:

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

Do not replace regular built-in practice with local projects.

A good local milestone has:

* clear project goal
* required tools
* setup steps
* expected folder structure
* run/open instruction
* common setup mistakes
* Documentation Bridge
* completion checklist
* Git/GitHub step when relevant
* writing practice for README, project note, or demo note when useful

## Standard Regular Lesson Loop

Use this loop for most regular lessons:

1. Lesson goal
2. Position in learning path
3. Core concept
4. Important terms
5. Simple example
6. How to read or use the example
7. Common mistake or decision rule
8. Quick check
9. Built-in practice when useful
10. Summary
11. Bridge to next lesson

Not every section needs a separate block. The loop is a thinking tool. Keep lessons focused and avoid bloating them.

## Standard Uji Kompetensi Loop

Use this loop for module assessments:

1. Module recap
2. What will be checked
3. Quiz
4. Built-in practice, writing task, project task, case study, or self-review checklist
5. Documentation Bridge when useful
6. Readiness summary
7. Bridge to the next module

Uji Kompetensi should feel more serious than a regular lesson, but still supportive.

It should help the learner understand what they are ready for and what they may need to review.

## Standard Documentation Bridge Loop

Use this loop for Documentation Bridge sections or lessons:

1. Why this docs page matters now
2. Official docs source
3. Specific page or section
4. Focus points
5. Ignore-for-now notes
6. Follow-up action
7. Bridge back to FluentStack practice or next module

Documentation Bridge should make learners more independent, not send them away without direction.

## Standard Local Dev Milestone Loop

Use this loop for local workflow lessons or modules:

1. Milestone goal
2. Required tools
3. What the learner will build
4. Setup steps
5. Expected folder or project structure
6. Run/open instruction
7. Common setup mistakes
8. Built-in support task or checklist when useful
9. Documentation Bridge
10. Git/GitHub step when relevant
11. Completion checklist
12. Readiness summary

Local milestones may use existing lesson block types. They do not require a new schema by default.

## Standard Tooling Lesson Pattern

Use this pattern when a lesson requires local installation, external accounts, CLI commands, browser tools, code editors, deployment tools, backend services, or cloud dashboards.

1. Tool prerequisite note
   * State what is required, recommended, and optional.
   * Do not assume the tool is installed unless a previous lesson taught it.

2. Why this tool is needed
   * Explain the problem the tool solves in plain language.
   * Avoid naming many tools before the learner knows why they matter.

3. Official resource link
   * Use a `resource-links` block for important tool links.
   * Link the official download/docs page.
   * Tell learners what section to focus on and what to ignore for now.
   * Do not bury raw URLs inside prose.

4. Small setup checklist
   * Keep setup steps short and observable.
   * Use checklist/self-review when FluentStack cannot inspect the learner’s device.

5. First safe action
   * Ask for one small action first, such as opening a folder, inspecting one element, running `git status`, or creating one repository.

6. Command or UI walkthrough
   * Explain commands one by one.
   * Explain placeholders such as `<your-repository-url>`.
   * Do not bundle many commands without context.

7. Troubleshooting callout
   * Include likely beginner failure points.
   * Explain how to check whether the tool action worked.

8. Local/self-review task
   * Make completion honest.
   * Do not claim FluentStack can automatically verify local files, terminal state, external accounts, deployment state, or cloud resources unless that feature exists.

9. Summary
   * State what the learner can now do with the tool.
   * Bridge to the next lesson or module.

Regular lessons should stay focused. A tooling lesson should not become a full installation manual. Link official docs for full setup details and teach only what the current module needs.

Place `resource-links` after the tool prerequisite note or before the local checklist. Use it for official resources that learners may need to open, such as editor downloads, DevTools docs, Git install pages, GitHub getting started docs, deployment docs, or cloud provider setup pages.

## Mapping to Current Schema

| Lesson section                  | Current FluentStack structure                                                                       | Notes                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Lesson goal                     | Lesson metadata: `title`, `description`, `objectives`                                               | The goal should be visible from metadata. Keep one main objective per regular lesson. |
| Position in learning path       | Lesson metadata, intro `text`, module ordering                                                      | Mention what the learner already saw and what this lesson prepares them for.          |
| Core concept                    | `text`                                                                                              | Explain one concept directly. Avoid long definitions before context.                  |
| Important terms                 | `text`, `callout`, or example explanation                                                           | Introduce terms before using them heavily.                                            |
| Simple example                  | `code-example` or short example inside `text`                                                       | Use code only when it helps. For non-coding concepts, use a concrete scenario.        |
| How to read or use the example  | `text` after `code-example`                                                                         | Especially important for beginner coding lessons.                                     |
| Common mistake or decision rule | `callout`                                                                                           | Use `tip`, `warning`, `common-mistake`, or `important`.                               |
| Quick check                     | `quick-check`                                                                                       | One small decision or concept check. No trivia.                                       |
| Built-in practice               | `coding-practice` or `writing-practice`                                                             | Use when learners should apply the concept.                                           |
| Quiz                            | `quiz`                                                                                              | Mainly for Uji Kompetensi. Use in regular lessons only when justified.                |
| Documentation Bridge            | `text`, `callout`, `summary`, or future docs block                                                  | Use guided docs reading. Do not dump links.                                           |
| External tool resources         | `resource-links`                                                                                    | Use for official required/recommended/optional tool links. Avoid raw URLs in prose.   |
| Local Dev Milestone             | `text`, `callout`, `code-example`, `writing-practice`, `summary`, checklist-style content           | Use existing blocks until a dedicated feature exists.                                 |
| Completion checklist            | `coding-practice.checklist`, validation metadata, `writing-practice.checklist`, or `summary` points | Use checklist items that learners can verify.                                         |
| Summary                         | `summary`                                                                                           | Make it actionable. No motivational filler.                                           |
| Bridge                          | Final summary point or last sentence inside `summary`                                               | Explain what the next lesson or module will build on.                                 |

## Metadata Rules

Lesson metadata sets the promise.

Use:

* `title`: specific and learner-readable
* `description`: one sentence that says what the learner will understand or do
* `objectives`: 2 to 3 concrete objectives
* `estimatedMinutes`: realistic time for reading and activity
* `skillTags`: broad enough to help filtering and progress
* `completionRule.requiredBlockIds`: include blocks that can actually be completed

For Uji Kompetensi metadata:

* title should start with `Uji Kompetensi`
* description should say what module readiness is being checked
* objectives should cover assessment outcomes
* estimatedMinutes should include quiz and practice time
* required blocks should include quiz/practice/checklist when they are part of readiness

For Documentation Bridge content:

* title should name the docs topic clearly
* description should say why the docs are useful now
* objectives should focus on reading and applying documentation
* completion should require a small follow-up action when possible

For Local Dev Milestone content:

* title should describe the local workflow or project
* description should say what the learner will build or run locally
* objectives should include setup, run/open, and verification
* estimatedMinutes should be realistic and include setup time
* completion should use checklist, writing practice, or guided self-report when the system cannot verify local device work

Avoid:

* broad goals such as "Understand everything about HTML"
* duplicate objectives that say the same thing
* objectives that require skills not taught in the lesson
* assessment objectives that introduce new concepts
* local milestone objectives that assume tools were already installed unless they were taught

## Beginner-Friendly Writing Rules

For learners who start from zero:

* Introduce the noun before using it heavily.
* Explain what a thing is before explaining why it matters.
* Use one new concept at a time.
* Use concrete examples from a small website, dashboard, lesson page, button, form, or card.
* Prefer short paragraphs.
* Avoid protocol-level details unless the lesson is specifically about that concept.
* Avoid tool names before the learner knows the problem the tool solves.
* Do not mix ecosystem orientation with implementation too early.
* Add calming framing before code when needed.
* Do not force local setup before the learner has enough context.
* Use official docs only with guidance.

Good:

```txt
Website adalah kumpulan halaman yang bisa dibuka lewat browser. Web page adalah satu halaman tertentu di dalam website.
```

Weak:

```txt
Website adalah platform digital komprehensif yang memungkinkan pengguna mengakses berbagai pengalaman interaktif berbasis web.
```

Good calming framing:

```txt
Kamu belum perlu menghafal semua tag ini. Fokus dulu pada fungsi besarnya: head menyimpan informasi halaman, body menyimpan isi yang terlihat.
```

## Beginner Coding Lesson Flow

Beginner coding lessons need enough explanation before practice.

Use this pre-practice teaching flow:

1. Orientation

   * what this lesson teaches
   * why it appears now

2. Core concept

   * explain the main idea in plain language

3. New terms

   * introduce important terms before using them heavily

4. Small example

   * show the smallest useful code example

5. How to read the example

   * explain the important lines, not every character

6. Common mistake

   * explain one realistic mistake to avoid

7. Quick check

   * check one concept before practice

8. Practice

   * let the learner apply the concept after they have enough context

More explanation does not mean long walls of text. Use short focused blocks.

Do not make learners code from a template they do not understand.

## When to Skip Sections

Do not force every lesson to include every block.

Skip or merge sections when:

* the lesson is a short orientation lesson
* a code example would introduce more confusion than clarity
* a quiz would repeat the quick check without adding value
* the concept is already practiced through coding or writing
* the lesson is a review/reinforcement lesson and does not need new explanation
* documentation bridge would interrupt a small beginner concept
* local setup would distract from the core concept

Minimum useful regular lesson pattern:

1. `text`
2. `quick-check`
3. `summary`

Most beginner concept lessons usually include:

1. `text`
2. `callout`
3. `quick-check`
4. `summary`

Quiz is optional for beginner concept lessons. Use it only when it adds learning value. Skip the quiz when it would repeat the quick check or make a light orientation lesson feel heavy.

## Template 1: Beginner Concept Lesson

Use for zero-to-one concepts such as website, web page, URL, browser, HTML, CSS, JavaScript, or basic HTML terms.

Recommended structure:

1. Metadata

   * Title names the concept.
   * Description says what distinction or idea the learner will understand.
   * Objectives stay narrow.

2. `text`

   * Explain the concept in plain language.
   * Use one concrete example.

3. `callout`

   * Add a decision rule or common confusion.

4. `quick-check`

   * Ask the learner to distinguish two similar concepts.

5. `summary`

   * Restate the decision rule.
   * Add a bridge to the next lesson.

Optional:

* `quiz` only when the concept has multiple parts or common misunderstandings.
* `mini action` inside text or callout when the learner can observe something directly.
* Documentation Bridge only if it is guided, short, and not distracting.

Use when:

* the learner needs vocabulary before practice
* the lesson is early in the track
* the concept is foundational for later lessons

## Template 2: Beginner Coding Lesson

Use when the learner writes code for the first time in a topic.

Recommended structure:

1. Metadata

   * Objective names the code outcome.

2. `text`

   * Explain why this coding concept appears now.

3. `text`

   * Introduce important terms.

4. `code-example`

   * Show the smallest useful version.

5. `text`

   * Explain how to read the important lines.

6. `callout`

   * Add a common mistake or decision rule.

7. `quick-check`

   * Check one concept before practice.

8. `coding-practice`

   * Provide starter code, instructions, checklist or validation, and optional solution.

9. `summary`

   * Recap what was built and bridge to the next lesson.

Use when:

* the skill requires implementation
* the learner can verify the result visually or behaviorally
* the lesson should produce a small working output

Do not add a quiz by default. Use Uji Kompetensi for the main quiz.

## Template 3: Guided Practice or Reinforcement Lesson

Use when the learner already saw the concept and now needs to apply it.

Recommended structure:

1. `text`

   * Remind the previous concept briefly.
   * State the practice goal.

2. `code-example` or case example

   * Show the before/after or target pattern.

3. `callout`

   * Add a decision rule or common mistake.

4. `coding-practice` or `writing-practice`

   * Focus on applying the concept.

5. `summary`

   * Explain what the learner can now do.
   * Bridge to assessment or next lesson.

Use when:

* two lessons would otherwise explain the same concept
* the module needs practice before assessment
* learners need confidence through repetition without repeated theory

## Template 4: Uji Kompetensi

Use at the end of a module.

Recommended structure:

1. Metadata

   * Title starts with `Uji Kompetensi`.
   * Description states the module readiness being checked.

2. `text`

   * Recap what the module covered.

3. `text` or `callout`

   * Explain what will be checked.

4. `quiz`

   * Check the module concepts.
   * Questions should teach through explanations.

5. `coding-practice`, `writing-practice`, project task, case study, or self-review checklist

   * Use the activity that matches the module skill.

6. Documentation Bridge

   * Guide the learner to official docs when useful.

7. `summary`

   * State readiness.
   * Tell the learner what to review if needed.
   * Bridge to the next module.

Rules:

* Do not introduce important new concepts.
* Do not use random trivia.
* Cover the module, not one tiny lesson.
* Use practical decisions where possible.
* Keep feedback helpful.

## Template 5: Documentation Bridge

Use when learners should read official docs with guidance.

Recommended structure:

1. `text`

   * Explain why this documentation matters now.

2. Docs reference

   * Name official source.
   * Name specific page or section.

3. Focus points

   * List 2 to 4 things to pay attention to.

4. Ignore-for-now notes

   * List advanced parts learners can skip.

5. Follow-up action

   * Ask learner to apply one small thing after reading.

6. `summary`

   * Connect docs reading back to FluentStack path.

Rules:

* Prefer official docs.
* Avoid broad link dumping.
* Do not send beginners into advanced docs without guardrails.
* Keep the action small.

Example:

```txt
Baca MDN: Creating hyperlinks.

Fokus pada:
1. fungsi href
2. perbedaan link relatif dan absolut
3. teks link yang jelas

Abaikan dulu:
- download attribute
- ping
- advanced URL patterns

Aksi:
Kembali ke latihan HTML Basics dan cek apakah link kamu sudah memakai href yang jelas.
```

## Template 6: Local Dev Milestone Lesson

Use when learners need to work on their own device.

Recommended structure:

1. Metadata

   * Title states the local workflow.
   * Description says what the learner will build or run.

2. `text`

   * Explain why this milestone appears now.

3. Required tools

   * List what should already be installed or what will be installed.

4. `code-example`

   * Use for folder structure, commands, or config snippets.

5. `callout`

   * Common setup mistake.

6. Local task checklist

   * What the learner should do on their device.

7. Documentation Bridge

   * Official docs that support the local task.

8. `writing-practice` when useful

   * README section, project note, or demo note.

9. `summary`

   * Explain what the learner can now do.
   * Bridge to the next module.

Rules:

* Do not assume local tools are installed unless a previous lesson covered them.
* Do not require local setup too early.
* Keep commands clear.
* Include expected output or verification.
* Make it clear when FluentStack cannot automatically verify local device work.

## Template 7: English Writing Lesson

Use for English for Tech Careers lessons.

Recommended structure:

1. Metadata

   * `contentLanguage: "bilingual"`.
   * Objective names the work artifact.

2. `text`

   * Explain the work situation in Bahasa Indonesia.

3. `callout`

   * Add tone guidance or a common mistake.

4. `quick-check`

   * Choose the clearer sentence or identify missing context.

5. `writing-practice`

   * Provide realistic prompt, placeholder, checklist, and model answer.

6. `summary`

   * Recap the message structure and next workplace use case.

Rules:

* Indonesian explanation first.
* Practical English examples.
* Indonesian context when tone or meaning needs explanation.
* The learner writes their own English response.

## Template 8: Project Milestone Lesson

Use when learners combine multiple earlier skills.

Recommended structure:

1. `text`

   * Define the milestone and expected output.

2. `callout`

   * Clarify scope and quality bar.

3. `code-example`

   * Optional. Use only for a key pattern, not a full solution.

4. `coding-practice`, local task checklist, or `writing-practice`

   * Use checklist-based completion.

5. Documentation Bridge

   * Guide learner to official docs relevant to the project.

6. `summary`

   * Tell learners what they now have and what to improve next.

Use when:

* several previous lessons lead to one output
* the learner can review their result with a checklist
* the project output can be reused later

## Writing Bridge Copy

Bridge copy helps lessons feel connected.

Place bridge copy in:

* the last summary point
* the lesson description
* the first text block of the next lesson

Good bridge copy:

```txt
Setelah tahu perbedaan website dan web page, berikutnya kamu akan melihat apa yang terjadi saat browser membuka sebuah URL.
```

```txt
Sekarang kamu sudah tahu fungsi HTML, CSS, dan JavaScript. Lesson berikutnya akan menunjukkan bagaimana ketiganya bekerja bersama dalam satu halaman.
```

```txt
Kamu sudah memahami heading, paragraf, link, dan gambar. Berikutnya, kamu akan belajar bagaimana href dan src menunjuk ke file lain di project kecil.
```

Weak bridge copy:

```txt
Selanjutnya kita akan mempelajari materi yang tidak kalah penting.
```

Bridge copy should:

* name the previous concept
* name the next concept or module
* explain the connection in one sentence
* avoid hype

## Completion Checklist Guidance

Use completion checklists when the learner produces something.

Good checklist item:

```txt
Heading utama hanya memakai satu h1.
```

Weak checklist item:

```txt
HTML sudah bagus.
```

Checklist items should be:

* visible or verifiable
* tied to the lesson objective
* short enough to scan
* not dependent on hidden grading

For Local Dev Milestone, checklist items should be honest about what FluentStack can and cannot verify.

Good local checklist item:

```txt
Project bisa dibuka di browser dari file index.html.
```

Weak local checklist item:

```txt
Local project sudah benar.
```

## Auto Validation Guidance

Use auto validation when a requirement can be checked deterministically.

Good use cases:

* element exists
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
* local device work

Auto validation should help learners, not punish them.

Good validation label:

```txt
Ada elemen h1.
```

Weak validation label:

```txt
Struktur HTML sudah benar.
```

For beginner CSS coding practice, use CSS auto validation when the task checks deterministic requirements:

* selector exists, such as `h1`, `p`, `.card`, `.intro`, `.card-title`, or `.card-description`
* property exists anywhere
* property exists inside a selector
* property value includes an expected value
* forbidden text such as `!important` is absent

Keep manual checklist items for subjective review, visual quality, explanation quality, accessibility judgment, or local device work.

CSS validation is not a full CSS parser. Keep checks simple and beginner-safe; do not rely on it for advanced selectors, complex cascade behavior, full layout correctness, or JavaScript execution.

See `docs/22_CONTENT_AUTHORING_GUIDE.md` for a complete CSS validation metadata example.

## Example: Apa Itu Website dan Web Page?

Lesson type:

* Beginner concept lesson

Goal:

```txt
Learner understands the difference between website and web page.
```

Suggested structure:

1. Metadata

   * Title: `Apa Itu Website dan Web Page?`
   * Description: `Bedakan website dan web page sebelum masuk ke cara browser membuka halaman.`

2. `text`

   * Explain website as a collection of related pages.
   * Explain web page as one page inside a website.
   * Use FluentStack dashboard and roadmap as examples.

3. Mini action

   * Ask learner to look at the browser address bar.

4. `callout`

   * Explain that website and web page are related but not the same.
   * Introduce URL as page address.

5. `quick-check`

   * Ask whether dashboard and roadmap are pages inside one website.

6. `summary`

   * Website = collection.
   * Web page = one page.
   * URL = address.
   * Bridge: next lesson explains what happens when browser opens a URL.

No regular quiz needed by default. Check this in Uji Kompetensi Web Foundations.

## Example: Struktur HTML Dasar

Lesson type:

* Beginner coding lesson

Goal:

```txt
Learner can write a basic HTML document structure.
```

Suggested structure:

1. `text`

   * Explain that HTML is written as a document.

2. `text`

   * Introduce `doctype`, `html`, `head`, `title`, `body`, `h1`, and `p`.

3. `code-example`

   * Minimal HTML document.

4. `text`

   * Explain how to read the code:

     * `doctype` tells browser this is modern HTML
     * `head` stores page information
     * `title` appears in browser tab
     * `body` stores visible content
     * `h1` is main heading
     * `p` is paragraph

5. `callout`

   * Common mistake: confusing `title` and `h1`, or putting visible content in `head`.

6. `quick-check`

   * Ask where visible content belongs.

7. `coding-practice`

   * Build a basic HTML page.

8. `summary`

   * Recap `head`, `body`, `h1`, `p`.
   * Bridge: next lesson explains tag, element, and attribute.

No regular quiz needed by default if the module has Uji Kompetensi HTML Basics.

## Example: Uji Kompetensi HTML Basics

Lesson type:

* Module assessment

Goal:

```txt
Learner proves readiness for Semantic HTML.
```

Suggested structure:

1. `text`

   * Recap HTML Basics.

2. `text` or `callout`

   * Explain what will be checked:

     * document structure
     * head vs body
     * title vs h1
     * tag, element, attribute
     * h1, p, a, img
     * href, src, alt
     * simple relative paths

3. `quiz`

   * 8 to 10 focused questions.
   * Explanations teach the rule.

4. `coding-practice`

   * Build a small HTML content page.

5. Documentation Bridge

   * Guide learner to MDN HTML pages with focus points.

6. `summary`

   * State readiness and bridge to Semantic HTML.

## Example: Local Static Website Project

Lesson type:

* Local Dev Milestone

Goal:

```txt
Learner creates and opens a small static website on their own device.
```

Suggested structure:

1. `text`

   * Explain why local workflow appears after HTML/CSS basics.

2. Required tools

   * Code editor
   * Browser
   * Git if the Git lesson is part of this milestone

3. `code-example`

   * Expected folder structure:

```txt
my-first-website/
  index.html
  about.html
  styles.css
  images/
```

4. `callout`

   * Common mistake: file path in HTML does not match the actual folder name.

5. Local task checklist

   * Create folder.
   * Add index.html.
   * Add styles.css.
   * Open index.html in browser.
   * Inspect one element in DevTools.
   * Commit to Git.

6. Documentation Bridge

   * MDN Getting started with the web
   * GitHub Docs repository basics

7. `writing-practice`

   * Write a short README section explaining the project.

8. `summary`

   * Learner can now move from built-in practice to local static workflow.

## Final Rule

Use this standard to shape lesson structure.

Use `docs/24_LESSON_QUALITY_RUBRIC.md` to score whether the lesson teaches well enough.

If a regular lesson cannot answer these questions, revise it before adding it:

1. What should the learner understand or do after this lesson?
2. What is the smallest useful example?
3. What practice or quick check helps the learner apply it?
4. How does this lesson prepare the next lesson?

If an Uji Kompetensi cannot answer these questions, revise it before adding it:

1. What module is being assessed?
2. Which regular lessons does it cover?
3. What practical readiness does it prove?
4. What should the learner review if they are not ready?
5. What module comes next?

If a Documentation Bridge cannot answer these questions, revise it:

1. Which official docs should the learner read?
2. What should they focus on?
3. What should they ignore for now?
4. What action should they take after reading?

If a Local Dev Milestone cannot answer these questions, revise it:

1. What will the learner build locally?
2. What tools are required?
3. How will they run or open it?
4. What common setup mistakes should they avoid?
5. How will they save or share the work?
