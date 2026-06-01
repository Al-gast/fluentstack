# FluentStack Content Authoring Guide

## Purpose

This guide explains how to create FluentStack learning content without lowering quality or drifting from the product direction.

Use this document before adding new tracks, modules, lessons, quizzes, coding challenges, or writing practices to `src/content`.

This is an authoring guide, not a schema migration plan. Do not change the content schema unless a future product task explicitly requires it.

## Language Rules

Developer documentation uses English.

Actual lesson content inside the product should be Bahasa Indonesia-first:

- Lesson explanations use Bahasa Indonesia.
- Quiz questions and explanations use Bahasa Indonesia.
- Practice instructions use Bahasa Indonesia.
- Common technical terms may stay in English when natural.

English for Tech Careers lessons should use bilingual format:

- Indonesian explanation.
- Practical English examples.
- Indonesian meaning or context when useful.
- Learner writes their own English response.

Avoid forcing awkward translations of common tech terms such as `component`, `props`, `state`, `API`, `pull request`, `daily update`, `debugging`, and `deployment`.

## Content Architecture

FluentStack content is static learning content stored in the codebase. User progress is separate and stored in localStorage for guests or Supabase for logged-in users.

### Static Learning Content

Static content lives in:

- `src/content/tracks.ts`
- `src/content/modules.ts`
- `src/content/lessons.ts`
- `src/content/quizzes.ts`
- `src/content/challenges.ts`

Static content defines:

- what learners can study
- what blocks appear in a lesson
- which quiz belongs to a lesson
- which coding challenge belongs to a coding-practice block
- which block IDs are required for lesson completion

### User Progress

User progress is not content.

Progress stores:

- completed block IDs
- completed lesson IDs
- quiz scores
- challenge code and checklist state
- writing drafts
- XP
- streak

Do not put user-specific state inside static content files.

## Content Hierarchy

### Track

A track is a long learning path.

Examples:

- `Frontend Engineering`
- `English for Tech Careers`

Track authoring rules:

- Use a stable globally unique `id`.
- Use a stable globally unique `slug`.
- Keep the description specific to what learners will practice.
- Add module IDs in learning order.
- Keep skill tags broad and useful.

### Module

A module groups related lessons inside one track.

Module authoring rules:

- Use a stable `id` and `slug`.
- Keep `lessonIds` ordered.
- Set realistic `estimatedHours`.
- Keep description focused on the practical output.

### Lesson

A lesson is the main learning unit.

Lesson authoring rules:

- Teach one clear objective.
- Keep `estimatedMinutes` realistic.
- Use `contentLanguage: "id"` for frontend lessons.
- Use `contentLanguage: "bilingual"` for English for Tech Careers lessons.
- Define required blocks in `completionRule.requiredBlockIds`.
- Make progress depend on meaningful actions, not page views.

New or revised lessons should also follow `docs/23_LESSON_FORMAT_STANDARD.md` and be scored with `docs/24_LESSON_QUALITY_RUBRIC.md`.

Use this guide (`docs/22_CONTENT_AUTHORING_GUIDE.md`) for content rules, schema alignment, naming, workflow, and review checks. Use `docs/23_LESSON_FORMAT_STANDARD.md` for the repeatable lesson structure: goal, path position, core concept, example, check, activity, summary, and bridge to the next lesson. Use `docs/24_LESSON_QUALITY_RUBRIC.md` for lesson quality scoring, especially before scaling beginner content.

### Block

A block is one learning or activity section inside a lesson.

Supported block types:

- `text`
- `callout`
- `code-example`
- `quick-check`
- `coding-practice`
- `writing-practice`
- `quiz`
- `summary`

### Quiz

A quiz checks understanding after learners have seen the concept.

Quiz data lives in `src/content/quizzes.ts`.

### Coding Challenge

A coding challenge powers a `coding-practice` block.

Challenge data lives in `src/content/challenges.ts`.

### Writing Practice

A writing practice block lives directly inside a lesson.

It stores the prompt, placeholder, optional checklist, optional minimum character count, and optional model answer.

## Content Quality Rules

Use these rules for every lesson:

- One clear objective per lesson.
- No filler introductions.
- No generic motivation.
- No fake promises such as "master this in one day."
- Use practical examples tied to real frontend or remote-work situations.
- Add active learning when useful.
- Keep explanations short enough to read during practice.
- Use concrete verbs: build, fix, explain, compare, debug, validate, review.
- Avoid AI-sounding copy such as "this comprehensive module will empower learners."
- Write for a learner who wants to know what to do next.

Good lesson objective:

```txt
Use semantic HTML to structure a basic article page.
```

Weak lesson objective:

```txt
Understand everything about HTML in a complete and comprehensive way.
```

## When to Use Each Block

### `text`

Use for the main explanation.

Use when:

- introducing a concept
- explaining a work situation
- connecting a concept to a real use case

Keep it short. If the explanation needs many paragraphs, split the lesson or add a callout/code example.

### `callout`

Use for a focused note.

Good callout variants:

- `tip`: practical advice
- `warning`: risk or caveat
- `common-mistake`: common learner mistake
- `important`: concept that affects completion or real work

Use callouts to prevent mistakes, not to repeat the text block.

### `code-example`

Use when learners need to see a concrete implementation.

Use for:

- HTML structure
- CSS layout
- JavaScript behavior
- TypeScript types
- React component examples
- JSON/API examples
- bash commands when setup is part of the lesson

Every code example should have a short explanation of the important part.

### `quick-check`

Use for one small concept check.

Use when:

- the learner should decide between two similar concepts
- there is a common mistake to catch early
- the answer can be explained in one short paragraph

Do not use quick checks for trivia.

### `quiz`

Use near the end of a lesson or module.

Use when:

- the learner has seen enough material to be checked
- there are several related concepts to confirm
- passing the quiz should count toward lesson completion

Quiz blocks reference `quizId`.

### `coding-practice`

Use when the skill needs implementation practice.

Use for:

- layout
- forms
- JavaScript behavior
- React components
- data loading states
- frontend refactoring

Coding practice should have a clear challenge and a checklist.

### `writing-practice`

Use when the learner should write a work artifact.

Use for:

- daily update
- blocker note
- bug report
- PR description
- code review comment
- implementation note
- demo script
- interview answer

Writing practice is especially important for English for Tech Careers.

### `summary`

Use at the end of a lesson.

Keep it concrete:

- what the learner should remember
- what decision rule they can apply
- what they can do next

Avoid motivational summary filler.

## Recommended Lesson Patterns

### Conceptual Lesson

Use for one concept that needs understanding before practice.

Recommended pattern:

1. `text`
2. `callout`
3. `code-example` when useful
4. `quick-check`
5. `summary`

Example use:

- semantic HTML landmarks
- CSS specificity
- server vs client components

### Technical Coding Lesson

Use when the lesson should produce working code.

Recommended pattern:

1. `text`
2. `code-example`
3. `quick-check`
4. `coding-practice`
5. `summary`

Add a `quiz` if the concept has several rules or common mistakes.

Example use:

- Flexbox navbar
- controlled React form
- loading/error state component

### Review or Quiz Lesson

Use after a group of related lessons.

Recommended pattern:

1. `text`
2. `callout`
3. `quick-check`
4. `quiz`
5. `summary`

Do not make review lessons a wall of questions. Include short explanation and feedback.

### English Writing Lesson

Use for English for Tech Careers.

Recommended pattern:

1. `text` in Bahasa Indonesia
2. `callout` for tone or common mistake
3. practical English examples inside text or callout
4. `quick-check`
5. `writing-practice`
6. `summary`

Example use:

- daily update
- blocker explanation
- PR note
- code review comment

### Project Milestone Lesson

Use when a learner combines multiple skills.

Recommended pattern:

1. `text`
2. `callout`
3. `code-example` when needed
4. `coding-practice` or `writing-practice`
5. `summary`

Add a self-review checklist through the challenge or writing practice checklist.

### Case Study Lesson

Use when learners should evaluate a scenario.

Recommended pattern:

1. `text`
2. `callout`
3. `quick-check`
4. `writing-practice` or `quiz`
5. `summary`

Example use:

- choose an error state
- review an unclear PR description
- explain a trade-off

## Quiz Authoring Rules

Use quizzes to teach after the answer, not to trap the learner.

Rules:

- Test one concept per question.
- Make wrong answers plausible.
- Avoid joke answers.
- Avoid trick wording.
- Keep explanations clear and supportive.
- Explain why the correct answer works.
- Explain the common misconception when useful.
- Vary correct answer positions in multiple-choice options so learners cannot guess from position.
- Do not make option ordering tricky; vary position while keeping wording clear.
- Use Bahasa Indonesia for frontend quizzes.
- Use bilingual context only when the quiz belongs to English for Tech Careers.

Supported question types:

- `multiple-choice`
- `true-false`
- `fill-blank`
- `code-output`

Passing score guidance:

- Default passing score is `70`.
- Use `70` for most lesson quizzes.
- Use a higher score only when the lesson is a review gate.
- Do not use quiz scores as punishment.

## Coding Challenge Authoring Rules

Coding challenges should be practical and safe.

Rules:

- Provide starter code for `html`, `css`, and `js`.
- Keep the task small enough for one lesson.
- Write instructions in Bahasa Indonesia.
- Include a clear checklist.
- Include solution code when useful.
- Do not require server execution.
- Use simple auto validation when requirements can be checked deterministically.
- Keep manual checklist review for subjective output quality or older challenges without validation metadata.
- For beginner HTML lessons, prefer rule-based checks for structure such as doctype, required elements, and required attributes.

Challenge checklist items should be observable:

Good:

```txt
Navbar container sudah memakai display flex.
```

Weak:

```txt
Kode sudah bagus.
```

## Writing Practice Authoring Rules

Writing practice should produce a realistic work artifact.

Rules:

- Start from a realistic scenario.
- Use a clear prompt.
- Include a useful placeholder.
- Use the default minimum character count of `80` unless the task needs a different length.
- Keep checklist items guidance-only.
- Provide a model answer when it helps learners compare structure and tone.
- For English track lessons, include bilingual explanation before the writing task.
- Do not add AI grading in MVP content.

Good writing prompt:

```txt
Tulis daily update singkat dalam English untuk task memperbaiki form validation.
Gunakan format Yesterday / Today / Blockers.
```

Weak writing prompt:

```txt
Tuliskan sesuatu tentang pekerjaan kamu.
```

## Naming and ID Rules

IDs and slugs must stay stable after release because progress depends on them.

Rules:

- Use globally unique track IDs.
- Use globally unique lesson slugs.
- Prefer globally unique module slugs.
- Use readable IDs.
- Use lowercase kebab-case.
- Avoid renaming IDs after content is released.
- Do not reuse old IDs for different content.
- Keep block IDs unique inside a lesson.
- Keep quiz IDs globally unique.
- Keep challenge IDs globally unique.

Recommended patterns:

```txt
track id: frontend-engineering
module id: css-fundamentals
lesson id: css-flexbox-basics
lesson slug: css-flexbox-basics
block id: css-flexbox-intro
quiz id: css-flexbox-quiz
challenge id: build-flexbox-navbar
```

## Content Batch Workflow

Use this workflow for every content batch:

1. Choose curriculum module.
2. Define lesson objectives.
3. Choose block pattern.
4. Draft one representative lesson.
5. Score the representative lesson with `docs/24_LESSON_QUALITY_RUBRIC.md` before scaling the batch.
6. Write the remaining content only after the representative lesson meets the quality gate.
7. Add quizzes, challenges, or writing practices.
8. Update module lesson IDs.
9. Run lint/build.
10. Test routes.
11. Review in browser.
12. Commit.

Batch size guidance:

- Prefer 3 to 7 lessons per batch.
- Add only the quizzes and practices needed for those lessons.
- Keep one batch focused on one module or closely related modules.

## Review Checklist Before Merge

Content quality:

- Each lesson has one clear objective.
- Copy follows `docs/11_COPYWRITING_AND_CONTENT_VOICE.md`.
- Representative beginner lessons meet the quality gate in `docs/24_LESSON_QUALITY_RUBRIC.md`.
- No filler or generic motivation.
- Bahasa Indonesia is natural and direct.
- Technical terms stay English when natural.
- English lessons use bilingual format.

Schema and linking:

- Track, module, lesson, quiz, and challenge IDs are stable and readable.
- Module `lessonIds` includes new lessons in the right order.
- Lesson `completionRule.requiredBlockIds` includes all required blocks.
- Quiz block references an existing quiz.
- Coding practice block references an existing challenge.
- Challenge `lessonId` matches the lesson that uses it.

Interaction:

- Required blocks can realistically be completed.
- Quick check has one correct answer.
- Quiz passing score is reasonable.
- Writing practice has a clear prompt and checklist.
- Coding challenge has starter code, checklist, and optional solution.

Verification:

- `npm run lint` passes.
- `npm run build` passes.
- Main learning route works.
- Lesson page renders every block.
- Quiz can be completed.
- Coding practice preview runs client-side only.
- Writing draft can be saved.

## Sample Lesson Blueprint: Frontend Coding Lesson

Purpose: plan a lesson before writing `src/content`.

```txt
Track:
Frontend Engineering

Module:
CSS Fundamentals

Lesson:
Dasar Grid Layout

Objective:
Use CSS Grid to build a responsive card layout.

Suggested blocks:
1. text
   Explain when Grid is useful compared to Flexbox.

2. code-example
   Show a simple grid container with repeat, minmax, and gap.

3. quick-check
   Ask when Grid is a better choice than Flexbox.

4. coding-practice
   Challenge: build a responsive feature card grid.

5. summary
   Recap the decision rule and key properties.

Required blocks:
text, code-example, quick-check, coding-practice, summary

Suggested output:
Responsive card grid that works on mobile and desktop.
```

## Sample Lesson Blueprint: English Writing Lesson

```txt
Track:
English for Tech Careers

Module:
Daily Remote Communication

Lesson:
Asking Clarification About UI Behavior

Objective:
Write a clear clarification message before starting an unclear UI task.

Suggested blocks:
1. text
   Explain in Bahasa Indonesia why clarification saves time in remote work.

2. callout
   Common mistake: asking "Can you explain?" without specific context.

3. quick-check
   Choose the clearer clarification question.

4. writing-practice
   Prompt learner to write an English clarification message for an unclear modal behavior.

5. summary
   Recap: context, question, expected outcome.

Required blocks:
text, callout, quick-check, writing-practice, summary

Suggested output:
Short English clarification message with context and one specific question.
```

## Sample Quiz Blueprint

```txt
Quiz ID:
css-grid-basics-quiz

Lesson ID:
css-grid-basics

Title:
Quiz Dasar CSS Grid

Passing score:
70

Question mix:
1. multiple-choice
   Concept: when to use Grid.

2. true-false
   Concept: Grid only works for fixed-width layouts.

3. fill-blank
   Concept: property name for spacing between grid items.

4. code-output
   Concept: identify what repeat(auto-fit, minmax(...)) does.

Explanation rule:
Each explanation should teach the decision rule, not just say the answer is correct.
```

## Sample Coding Challenge Blueprint

```txt
Challenge ID:
build-responsive-card-grid

Lesson ID:
css-grid-basics

Title:
Membuat responsive card grid

Description:
Latihan membuat grid kartu yang menyesuaikan jumlah kolom berdasarkan lebar layar.

Instructions:
1. Gunakan display grid pada container.
2. Gunakan gap yang konsisten.
3. Buat kolom responsif dengan repeat dan minmax.
4. Pastikan kartu tetap mudah dibaca di layar kecil.

Starter code:
HTML: container dengan 4 card sederhana.
CSS: style dasar card tanpa grid.
JS: optional console log or empty string.

Checklist:
- Container memakai display grid.
- Kolom menyesuaikan lebar layar.
- Gap antar card konsisten.
- Layout tetap rapi di mobile.

Solution code:
Include final HTML/CSS/JS when useful for comparison.
```

## Sample Writing Practice Blueprint

```txt
Block ID:
clarify-modal-behavior-writing-practice

Scenario:
Designer memberikan mockup modal, tetapi tidak jelas apakah modal bisa ditutup dengan Escape.

Prompt:
Tulis pesan klarifikasi dalam English untuk menanyakan expected behavior modal.
Sertakan context singkat dan satu pertanyaan spesifik.

Placeholder:
Hi [name], I noticed that ...
Could you confirm whether ...?

Minimum characters:
80

Checklist:
- Menjelaskan context singkat.
- Menanyakan satu hal yang spesifik.
- Nada tetap sopan dan langsung.
- Ada next action yang jelas.

Model answer:
Hi Rina, I noticed that the modal design shows a close button, but I do not see the expected keyboard behavior. Could you confirm whether users should be able to close it with the Escape key? I can update the implementation after this is confirmed.
```

## Final Authoring Rule

If a lesson does not help the learner understand, practice, or communicate a real skill, do not add it.
