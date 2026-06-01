# FluentStack Lesson Format Standard

## Purpose

This document defines the standard lesson format for FluentStack.

Use it when creating or revising lessons in `src/content/lessons.ts`, quizzes in `src/content/quizzes.ts`, coding challenges in `src/content/challenges.ts`, and writing practice blocks inside lessons.

This standard does not introduce new block types and does not require schema changes. It maps a clear e-learning lesson loop to the existing FluentStack block-based content model.

This document defines the repeatable lesson structure. `docs/24_LESSON_QUALITY_RUBRIC.md` defines the quality scoring rubric used to decide whether a lesson is strong enough to keep or scale.

Actual lesson content inside the product should remain Bahasa Indonesia-first. English documentation can describe the format, but user-facing explanations, quiz questions, practice instructions, and summaries should use natural Bahasa Indonesia. Common technical terms may stay in English when they are standard in frontend work.

## Standard Lesson Loop

Every lesson should feel like a guided learning step, not a loose article.

Use this loop:

1. Lesson goal
2. Position in learning path
3. Core concept
4. Simple example
5. Common mistake or decision rule
6. Quick check
7. Practice or quiz
8. Completion checklist
9. Summary
10. Bridge to next lesson

Not every lesson needs every section as a separate block. The loop is a thinking tool. Keep lessons focused and avoid bloating them.

## Mapping to Current Schema

| Lesson loop section | Current FluentStack structure | Notes |
| --- | --- | --- |
| Lesson goal | Lesson metadata: `title`, `description`, `objectives` | The goal should be visible from metadata. Keep one main objective per lesson. |
| Position in learning path | Lesson metadata, intro `text`, module ordering | Mention what the learner already saw and what this lesson prepares them for. |
| Core concept | `text` | Explain one concept directly. Avoid long definitions before context. |
| Simple example | `code-example` or short example inside `text` | Use code only when it helps. For non-coding concepts, use a concrete scenario. |
| Common mistake or decision rule | `callout` | Use `tip`, `warning`, `common-mistake`, or `important`. |
| Quick check | `quick-check` | One small decision or concept check. No trivia. |
| Practice or quiz | `coding-practice`, `writing-practice`, or `quiz` | Choose the activity that matches the lesson objective. |
| Completion checklist | `coding-practice.checklist`, `writing-practice.checklist`, or `summary` points | Use checklist items that learners can verify. |
| Summary | `summary` | Make it actionable. No motivational filler. |
| Bridge to next lesson | Final summary point or last sentence inside `summary` | Explain what the next lesson will build on. |

## Metadata Rules

Lesson metadata sets the promise.

Use:

- `title`: specific and beginner-readable.
- `description`: one sentence that says what the learner will understand or do.
- `objectives`: 2 to 3 concrete objectives.
- `estimatedMinutes`: realistic time for reading and activity.
- `skillTags`: broad enough to help filtering and progress.
- `completionRule.requiredBlockIds`: include blocks that can actually be completed.

Avoid:

- broad goals such as "Understand everything about HTML"
- duplicate objectives that say the same thing
- objectives that require skills not taught in the lesson

## Beginner-Friendly Writing Rules

For learners who start from zero:

- Introduce the noun before using it heavily.
- Explain what a thing is before explaining why it matters.
- Use one new concept at a time.
- Use concrete examples from a small website, dashboard, lesson page, button, form, or card.
- Prefer short paragraphs.
- Avoid protocol-level details unless the lesson is specifically about that concept.
- Avoid tool names before the learner knows the problem the tool solves.
- Do not mix ecosystem orientation with implementation too early.

Good:

```txt
Website adalah kumpulan halaman yang bisa dibuka lewat browser. Web page adalah satu halaman tertentu di dalam website.
```

Weak:

```txt
Website adalah platform digital komprehensif yang memungkinkan pengguna mengakses berbagai pengalaman interaktif berbasis web.
```

## When to Skip Sections

Do not force every lesson to include every block.

Skip or merge sections when:

- the lesson is a short orientation lesson
- a code example would introduce more confusion than clarity
- a quiz would repeat the quick check without adding value
- the concept is already practiced through coding or writing
- the lesson is a review lesson and does not need new explanation

Minimum useful lesson pattern:

1. `text`
2. `quick-check`
3. `summary`

Most beginner concept lessons should usually include:

1. `text`
2. `callout`
3. `quick-check`
4. `summary`

Add a `quiz` only when it adds learning value, such as when the concept has several parts, common misconceptions, or a meaningful application check beyond the quick check.

Regular beginner lessons should not include a quiz by default. They should focus on explanation, examples, mini actions, quick checks, and practice. Use quiz blocks inside regular lessons only when the quiz adds clear learning value and does not make the lesson feel test-heavy.

## Template 1: Beginner Concept Lesson

Use for zero-to-one concepts such as website, web page, URL, browser, HTML, CSS, JavaScript, or basic HTML terms.

Recommended structure:

1. Metadata
   - Title names the concept.
   - Description says what distinction or idea the learner will understand.
   - Objectives stay narrow.
2. `text`
   - Explain the concept in plain language.
   - Use one concrete example.
3. `callout`
   - Add a decision rule or common confusion.
4. `quick-check`
   - Ask the learner to distinguish two similar concepts.
5. Optional `quiz`
   - Use 4 focused questions only when the concept has multiple parts or common misconceptions.
   - Skip the quiz when it would only repeat the quick check or make a light orientation lesson feel heavy.
6. `summary`
   - Restate the decision rule.
   - Add a bridge to the next lesson.

Add a mini action when useful, especially in beginner concept lessons. The action can be small: observe a UI, compare two choices, identify a page part, predict what a browser does next, or choose which file/element fits a situation.

Use when:

- the learner needs vocabulary before practice
- the lesson is early in the track
- the concept is foundational for later lessons

## Template 2: Technical Coding Lesson

Use for lessons where the learner should build or modify code.

Recommended structure:

1. Metadata
   - Objective names the code outcome.
2. `text`
   - Explain the concept and when to use it.
3. `code-example`
   - Show the smallest useful version.
   - Explain only the important lines.
4. `callout`
   - Add a common mistake or decision rule.
5. `quick-check`
   - Check one implementation decision.
6. `coding-practice`
   - Provide starter code, instructions, checklist, and optional solution through challenge data.
7. `summary`
   - Recap what was built and what to inspect next.

Use when:

- the skill requires implementation
- the learner can verify the result visually or behaviorally
- the lesson should produce a small working output

### Beginner Coding Lesson Guidance

For beginner coding lessons, do not send learners into practice before they understand what they are about to write.

Use this pre-practice teaching flow:

1. Orientation: what the lesson teaches and why it appears now.
2. Core concept: explain the main idea in plain language.
3. New terms: introduce important terms before using them heavily.
4. Small example: show the smallest useful code example.
5. How to read the example: explain the important lines, not every character.
6. Common mistake: explain one realistic mistake to avoid.
7. Quick check: check one concept before practice.
8. Practice: start only after the learner has enough context.

More explanation does not mean long walls of text. Use short focused blocks. Do not make learners code from a template they do not understand.

## Template 3: Review or Quiz Lesson

Use after a group of related lessons.

Recommended structure:

1. `text`
   - Tell learners what concepts are being reviewed.
2. `callout`
   - Remind the key decision rule.
3. `quick-check`
   - Warm up with one focused question.
4. `quiz`
   - Check the set of related concepts.
5. `summary`
   - Explain what the learner is ready for next.

Rules:

- Do not add new concepts in a review lesson unless necessary.
- Quiz explanations should teach, not only mark answers.
- Wrong answers should be plausible.

## Template 3A: Module Assessment Lesson

Use as the final lesson in a module when learners need a readiness check before moving forward.

Recommended structure:

1. `text`
   - Recap the concepts being assessed.
2. `quiz`
   - Check readiness across the module, not only recall from one lesson.
3. `coding-practice`, `writing-practice`, or self-review checklist
   - Ask the learner to apply the module skills in a small realistic task.
4. `summary`
   - Explain what the learner is ready for next.

Rules:

- Module assessments can include recap, quiz, coding practice or project task, self-review checklist, and readiness summary.
- Avoid duplicate lessons. Every lesson in a module should have a unique purpose: concept, guided example, practice, common mistakes, or assessment.
- Prefer one module-level assessment over quizzes in every regular lesson.

## Template 4: English Writing Lesson

Use for English for Tech Careers lessons.

Recommended structure:

1. Metadata
   - `contentLanguage: "bilingual"`.
   - Objective names the work artifact.
2. `text`
   - Explain the work situation in Bahasa Indonesia.
3. `callout`
   - Add tone guidance or a common mistake.
4. `quick-check`
   - Choose the clearer sentence or identify missing context.
5. `writing-practice`
   - Provide realistic prompt, placeholder, checklist, and model answer.
6. `summary`
   - Recap the message structure and next workplace use case.

Rules:

- Indonesian explanation first.
- Practical English examples.
- Indonesian context when tone or meaning needs explanation.
- The learner writes their own English response.

## Template 5: Project Milestone Lesson

Use when learners combine multiple earlier skills.

Recommended structure:

1. `text`
   - Define the milestone and expected output.
2. `callout`
   - Clarify scope and quality bar.
3. `code-example`
   - Optional. Use only for a key pattern, not a full solution.
4. `coding-practice` or `writing-practice`
   - Use checklist-based completion.
5. `summary`
   - Tell learners what they now have and what to improve next.

Use when:

- several previous lessons lead to one output
- the learner can review their result with a checklist
- the project output can be reused later

## Writing Bridge Copy

Bridge copy helps lessons feel connected.

Place bridge copy in:

- the last summary point
- the lesson description
- the first text block of the next lesson

Good bridge copy:

```txt
Setelah tahu perbedaan website dan web page, berikutnya kamu akan melihat apa yang terjadi saat browser membuka sebuah URL.
```

```txt
Sekarang kamu sudah tahu fungsi HTML, CSS, dan JavaScript. Lesson berikutnya akan menunjukkan bagaimana ketiganya bekerja bersama dalam satu halaman.
```

Weak bridge copy:

```txt
Selanjutnya kita akan mempelajari materi yang tidak kalah penting.
```

Bridge copy should:

- name the previous concept
- name the next concept
- explain the connection in one sentence
- avoid hype

## Example: Apa Itu Website dan Web Page?

Lesson type: beginner concept lesson.

Goal:

```txt
Learner understands the difference between website and web page.
```

Suggested structure:

1. Metadata
   - Title: `Apa Itu Website dan Web Page?`
   - Description: `Bedakan website dan web page sebelum masuk ke cara browser membuka halaman.`
2. `text`
   - Explain website as a collection of pages.
   - Explain web page as one page inside a website.
   - Use FluentStack dashboard and roadmap as examples.
3. `callout`
   - `URL adalah alamat halaman.`
4. `quick-check`
   - Ask whether dashboard and roadmap are pages inside one website.
5. `quiz`
   - 4 questions: website vs page, browser, URL, example page.
6. `summary`
   - Website = collection.
   - Web page = one page.
   - URL = address.
   - Bridge: next lesson explains what happens when the browser opens a URL.

## Example: Apa Itu HTML, CSS, dan JavaScript?

Lesson type: beginner concept lesson with simple example.

Goal:

```txt
Learner understands HTML, CSS, and JavaScript as three different parts of a web page.
```

Suggested structure:

1. `text`
   - HTML gives structure.
   - CSS controls visual style.
   - JavaScript adds interaction.
2. `callout`
   - `Pahami perannya dulu sebelum menghafal file.`
3. `code-example`
   - One button with HTML, simple CSS, and simple click behavior.
4. `quick-check`
   - Ask which part controls button color.
5. `quiz`
   - 4 questions about structure, style, interaction, and role differences.
6. `summary`
   - HTML = structure.
   - CSS = visual style.
   - JavaScript = interaction.
   - Bridge: next lesson shows how they work together in one page.

## Example: Struktur HTML Dasar

Lesson type: HTML foundations lesson.

Goal:

```txt
Learner can identify the basic parts of an HTML document and simple page body.
```

Suggested structure:

1. `text`
   - Explain that HTML has a basic document structure.
   - Explain `head` and `body` without going into advanced metadata.
2. `code-example`
   - Minimal HTML document with `doctype`, `html`, `head`, `title`, `body`, `h1`, and `p`.
3. `quick-check`
   - Ask where visible page content belongs.
4. `quiz`
   - 4 questions about `head`, `body`, `title`, and visible content.
5. `summary`
   - `head` gives information to the browser.
   - `body` contains visible content.
   - Bridge: next lesson explains tag, element, and attribute.

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

- visible or verifiable
- tied to the lesson objective
- short enough to scan
- not dependent on hidden grading

## Final Rule

Use this standard to shape the lesson. Use `docs/24_LESSON_QUALITY_RUBRIC.md` to score whether the lesson teaches well enough.

If a lesson cannot answer these three questions, revise it before adding it:

1. What should the learner understand or do after this lesson?
2. What is the smallest useful example?
3. How does this lesson prepare the next lesson?
