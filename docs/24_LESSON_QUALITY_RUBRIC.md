# FluentStack Lesson Quality Rubric

## Purpose

This document defines how to evaluate FluentStack learning content quality.

Use it when reviewing:

* regular lessons
* Uji Kompetensi
* built-in practice
* quizzes
* coding practice
* writing practice
* Documentation Bridge
* Local Dev Milestone
* module structure
* content batches

This rubric helps keep FluentStack focused on learning quality, not content volume.

`docs/23_LESSON_FORMAT_STANDARD.md` defines lesson structure.

This document defines quality scoring.

Actual lesson content inside the product should remain Bahasa Indonesia-first.

## Core Quality Principle

A lesson can render correctly and still fail as a learning experience.

Good content should help learners:

* understand the concept
* see a concrete example
* practice at the right time
* avoid common mistakes
* know what to do next
* read relevant official documentation when useful
* build locally when the workflow requires it
* prove readiness at module level

Do not use schema validity as proof of content quality.

## Scoring Mindset

Use a 10-point scoring mindset.

A score is not about perfection. It is a way to decide whether the content is ready, needs revision, or should not be scaled yet.

Recommended interpretation:

| Score      | Meaning                                | Action                                     |
| ---------- | -------------------------------------- | ------------------------------------------ |
| 9 to 10    | Strong benchmark quality               | Can be used as pattern for similar content |
| 8 to 8.9   | Good enough for active module after QA | Can ship, but keep small polish notes      |
| 7 to 7.9   | Usable but not strong                  | Revise before using as benchmark           |
| 6 to 6.9   | Weak learning experience               | Do not scale this pattern                  |
| 5 or below | Not ready                              | Rewrite or rethink scope                   |

Minimum gates:

* Beginner regular lessons should target at least 8/10.
* Golden benchmark lessons should target 9/10 or higher.
* Uji Kompetensi should target at least 8.5/10.
* Documentation Bridge should target at least 8/10.
* Local Dev Milestone should target at least 8.5/10.
* A full module should target at least 8.5/10 before the next module is added.

If beginner friendliness, teaching depth, practice readiness, bridge quality, or module coherence is weak, do not add more content yet.

## What to Review First

Before scoring content, identify what type it is.

Content type:

1. Regular lesson
2. Uji Kompetensi
3. Built-in practice
4. Quiz
5. Coding practice
6. Writing practice
7. Documentation Bridge
8. Local Dev Milestone
9. Module plan
10. Content batch

Do not judge all content with the same expectation.

Regular lessons should teach and practice.

Uji Kompetensi should assess module readiness.

Documentation Bridge should guide learners toward official docs.

Local Dev Milestone should teach real workflow on the learner’s own device.

## Regular Lesson Rubric

Use this section for normal lessons inside a module.

### 1. Learning Flow Clarity

10/10:

* Learner knows where they are in the module.
* The lesson connects naturally to the previous lesson.
* The lesson has one clear objective.
* Sections appear in a helpful order.
* The lesson bridges clearly to the next lesson.

7/10:

* The objective is understandable.
* The lesson mostly flows well.
* Some transitions feel abrupt.
* Bridge copy exists but could be more specific.

5/10 or below:

* The lesson feels like disconnected notes.
* The learner does not know why this topic appears now.
* The lesson tries to teach too many things.
* There is no useful bridge.

Improvement tips:

* Add path context at the start.
* State one main goal.
* Move practice after explanation.
* Make the summary connect to the next lesson.

### 2. Beginner Friendliness

10/10:

* Assumes the learner may start from zero.
* Introduces terms before using them heavily.
* Uses concrete examples.
* Avoids unexplained jargon.
* Calms the learner before code, docs, local setup, or complex examples.

7/10:

* Mostly understandable.
* Some terms appear before explanation.
* Examples help but could be more concrete.

5/10 or below:

* Uses many terms too early.
* Assumes prior knowledge that was not taught.
* Makes simple concepts feel intimidating.
* Pushes learners into practice, official docs, or local setup before understanding.

Improvement tips:

* Define the first important noun.
* Replace abstract examples with real UI examples.
* Add calming framing.
* Remove advanced details that belong later.
* Delay documentation reading or local setup until the learner has enough context.

### 3. Teaching Depth

10/10:

* Explains what the concept is.
* Explains why it matters now.
* Shows how it appears in real work.
* Includes at least one common mistake or decision rule.
* Gives enough context before practice.

7/10:

* Explanation is correct but a bit thin.
* Common mistakes are missing or generic.
* Learner can follow, but may not feel confident.

5/10 or below:

* The lesson is mostly definitions.
* It jumps from explanation to quiz, practice, docs, or setup too fast.
* It does not explain the reasoning behind examples.

Improvement tips:

* Add “why this matters now”.
* Add “how to read this example”.
* Add one realistic mistake.
* Add one short practice or observation.

### 4. Copy Quality

10/10:

* Bahasa Indonesia is clear and natural.
* Sentences are direct and not stiff.
* Technical terms are used only when helpful.
* The tone is calm, practical, and respectful.
* Copy does not feel AI-generated.

7/10:

* Mostly clear.
* Some parts feel generic.
* A few phrases are too formal or repetitive.

5/10 or below:

* Sounds like a dictionary entry or generic article.
* Uses filler phrases.
* Overexplains simple points but underexplains hard points.
* Feels robotic.

Improvement tips:

* Use specific examples.
* Remove generic motivational filler.
* Prefer concrete learner actions.
* Keep paragraphs short.

### 5. Example Quality

10/10:

* Example is small and relevant.
* Example supports the exact lesson objective.
* Beginner can understand why it is shown.
* Code examples have explanation of important lines.
* Example does not introduce unnecessary extra concepts.

7/10:

* Example is useful but slightly dense.
* Explanation exists but could be clearer.

5/10 or below:

* Example is too abstract.
* Example includes concepts not yet taught.
* Example is shown without explanation.
* Example distracts from the lesson goal.

Improvement tips:

* Shrink the example.
* Explain only the important lines.
* Remove advanced details.
* Tie example directly to the practice.

### 6. Activity and Practice Quality

10/10:

* Practice matches the lesson goal.
* Learner has enough explanation before practicing.
* Task is small and achievable.
* Output is visible, checkable, or reviewable.
* Completion represents real learning activity.

7/10:

* Practice is relevant.
* Some instructions could be clearer.
* Task may be slightly too broad or too guided.

5/10 or below:

* Practice feels unrelated.
* Learner is asked to code, write, or configure before understanding.
* Task is too vague.
* Completion can happen without meaningful effort.

Improvement tips:

* Add pre-practice explanation.
* Make instructions observable.
* Keep one output.
* Use auto validation when deterministic.
* Use manual checklist for subjective review.

### 7. Quick Check Quality

10/10:

* Checks one important concept.
* Catches a likely misconception.
* Feels light and supportive.
* Explanation teaches the rule.

7/10:

* Checks relevant understanding.
* Explanation is correct but basic.

5/10 or below:

* Trivia-like.
* Too easy to guess.
* Tests something not taught.
* Explanation only says correct or incorrect.

Improvement tips:

* Ask about a decision the learner will make soon.
* Use plausible wrong answers.
* Explain why the correct answer works.

### 8. Summary Quality

10/10:

* Recaps the real decision rules.
* Uses concrete bullet points.
* Tells learners what they can now do.
* Bridges clearly to the next lesson, Uji Kompetensi, Documentation Bridge, or Local Dev Milestone.

7/10:

* Recaps the topic.
* Bridge exists but is generic.

5/10 or below:

* Repeats generic phrases.
* Does not tell the learner what to remember.
* No bridge.

Improvement tips:

* Add “you can now...” language.
* Replace vague recap with concrete rules.
* Name the next topic.
* Mention docs or local milestone only when relevant.

### 9. Bridge Quality

10/10:

* Names the previous concept.
* Names the next concept or module.
* Explains the connection.
* Makes the learning path feel intentional.

7/10:

* Points to next lesson but does not explain why.

5/10 or below:

* No bridge.
* Generic “next lesson is important” phrasing.

Improvement tips:

* Use one sentence that connects old and new.
* Avoid hype.
* Be specific.

### 10. Engagement and Motivation

10/10:

* Learner feels guided and capable.
* Lesson includes small wins.
* Practice feels useful.
* Tone is encouraging without being childish.
* The learner understands why the work matters.

7/10:

* Lesson is clear but a little dry.
* Practice exists but could feel more rewarding.

5/10 or below:

* Lesson feels like homework.
* Learner is tested too often.
* No active observation or practice.
* No sense of progress.

Improvement tips:

* Add a mini action.
* Use an example from a real product page.
* Show the learner what they produced.
* Move large tests to Uji Kompetensi.

## Uji Kompetensi Rubric

Use this section for module-end assessments.

### 1. Module Coverage

10/10:

* Covers the whole module.
* Each regular lesson contributes at least one coverage point.
* Assessment matches module goal and readiness criteria.

7/10:

* Covers most module topics.
* A few lesson concepts are underrepresented.

5/10 or below:

* Only checks one lesson.
* Ignores important module skills.
* Feels disconnected from the module.

Improvement tips:

* List all regular lessons.
* Map each lesson to quiz/practice coverage.
* Remove questions that do not support readiness.

### 2. Assessment Relevance

10/10:

* Tests what learners already studied.
* Uses realistic decisions or tasks.
* Does not introduce important new concepts.
* Prepares learner for next module.

7/10:

* Mostly relevant.
* Some questions are recall-heavy.
* Practice task could be more realistic.

5/10 or below:

* Tests concepts not taught.
* Feels like random trivia.
* Has no clear relationship to next module.

Improvement tips:

* Replace trivia with practical decisions.
* Use examples similar to regular lessons.
* Add readiness summary.

### 3. Quiz Quality

10/10:

* Questions are focused.
* Wrong answers are plausible.
* No trick wording.
* Explanations teach the rule behind the answer.
* Correct answer positions are varied.

7/10:

* Quiz is mostly useful.
* Some explanations are thin.
* Some wrong answers are too obvious.

5/10 or below:

* Quiz feels punitive.
* Questions are vague.
* Correct answer is always same position.
* Explanations do not teach.

Improvement tips:

* Rewrite each question around one decision.
* Vary correct answer position.
* Explain common misconception.
* Remove joke answers.

### 4. Practice or Project Quality

10/10:

* Practice proves applied skill.
* Task combines important module concepts.
* Output is visible, checkable, or reviewable.
* Checklist or validation matches assessment goals.

7/10:

* Practice is useful but could cover more module concepts.
* Instructions are understandable but not polished.

5/10 or below:

* Practice is too easy or unrelated.
* Validation/checklist does not match the goal.
* Learner can complete without applying module skills.

Improvement tips:

* Combine 2 to 4 core module concepts.
* Keep scope realistic.
* Use deterministic validation when possible.
* Add self-review for subjective quality.

### 5. Documentation Bridge Quality inside Uji Kompetensi

10/10:

* Points to official docs that support the module.
* Focus points match what the learner already studied.
* Tells learner what to ignore for now.
* Includes one useful follow-up action.

7/10:

* Uses official docs.
* Focus guidance exists but could be sharper.

5/10 or below:

* Dumps links without guidance.
* Sends beginners to broad or advanced docs.
* Follow-up action is missing.

Improvement tips:

* Use one to three docs references.
* Add focus points.
* Add ignore-for-now notes.
* Add one action tied to the assessment.

### 6. Readiness Summary

10/10:

* Tells learner what they proved.
* Tells what to review if they struggled.
* Bridges clearly to the next module.
* Encourages continuation without fake hype.

7/10:

* States completion.
* Bridge is present but generic.

5/10 or below:

* Ends abruptly.
* No review guidance.
* No connection to next module.

Improvement tips:

* Add review guidance.
* Name the next module.
* Tie readiness to concrete skills.

## Built-in Practice Rubric

Use this for coding practice and writing practice inside FluentStack.

### 1. Practice Goal

10/10:

* Practice has one clear output.
* Output matches lesson or assessment goal.
* Learner understands what to edit or write.

7/10:

* Goal is understandable.
* Some instructions could be clearer.

5/10 or below:

* Practice goal is vague.
* Learner may not know what action is expected.

Improvement tips:

* State the expected output.
* Remove unrelated tasks.
* Add short “focus on this” guidance.

### 2. Starter Content Quality

10/10:

* Starter code or prompt helps the learner begin.
* It does not solve the full task by default.
* It avoids unrelated complexity.
* Beginner tasks include enough scaffolding.

7/10:

* Starter content works.
* It may be slightly too complete or too sparse.

5/10 or below:

* Starter content is confusing.
* It already passes everything without real work.
* It includes concepts not taught yet.

Improvement tips:

* Leave meaningful gaps.
* Remove unrelated CSS/JS from HTML-only tasks.
* Add comments sparingly when helpful.

### 3. Feedback and Validation

10/10:

* Auto validation checks deterministic requirements when possible.
* Manual checklist is used for subjective review.
* Labels are observable and specific.
* Learner can understand what to fix.

7/10:

* Feedback is useful.
* Some labels are too broad.

5/10 or below:

* Validation checks the wrong thing.
* Checklist is vague.
* Learner can complete without applying skill.

Improvement tips:

* Use labels such as “Ada elemen h1.”
* Avoid labels such as “Kode sudah bagus.”
* Use manual review for subjective quality.

### 4. Preview or Review Value

10/10:

* Learner can see, test, or review output clearly.
* Preview reinforces the lesson concept.
* The practice feels connected to the final skill.

7/10:

* Preview/review exists but could be clearer.

5/10 or below:

* Output is hard to see.
* Practice completion feels disconnected from learning.

Improvement tips:

* Make preview area useful.
* Add small visual output.
* Add self-review checklist.

## Documentation Bridge Rubric

Use this for module docs guidance, assessment docs links, local milestone docs reading, and advanced docs references.

### 1. Source Quality

10/10:

* Uses official or highly trusted documentation.
* Source matches the current module goal.
* Docs are appropriate for learner level.

7/10:

* Source is credible.
* It may be slightly broad for the learner.

5/10 or below:

* Uses random blog posts when official docs exist.
* Source is too advanced.
* Source is not relevant to the current module.

Improvement tips:

* Prefer MDN, React docs, Next.js docs, TypeScript handbook, Supabase docs, Vercel docs, Testing Library docs, Playwright docs, or WCAG/WAI resources when relevant.
* Use non-official sources only when they clearly add value and are not replacing official docs.

### 2. Guidance Quality

10/10:

* Names the exact page or section.
* Lists 2 to 4 focus points.
* Tells what to ignore for now.
* Uses beginner-safe wording.

7/10:

* Has a specific docs source.
* Focus points exist but could be clearer.

5/10 or below:

* Says “read the docs” with no guidance.
* Sends learner to broad docs pages.
* No ignore-for-now guidance.

Improvement tips:

* Add exact docs page title.
* Add “focus on” bullets.
* Add “ignore for now” bullets.
* Keep it short.

### 3. Follow-up Action

10/10:

* Includes one small action after reading.
* Action connects docs reading to FluentStack practice, local project, or Uji Kompetensi.
* Learner knows what to do next.

7/10:

* Action exists but is generic.

5/10 or below:

* No action.
* Learner is sent away and not brought back.

Improvement tips:

* Ask learner to identify, edit, compare, summarize, or apply one small thing.
* Connect the action to the current module output.

## Local Dev Milestone Rubric

Use this for local setup lessons, local project modules, and portfolio milestones.

### 1. Timing and Readiness

10/10:

* Milestone appears after enough built-in practice.
* Learner has the concepts needed to build locally.
* Local setup does not appear too early.

7/10:

* Timing is mostly reasonable.
* Some learners may need more preparation.

5/10 or below:

* Local setup appears before the learner understands the core concepts.
* Milestone overwhelms beginners.
* It replaces basic learning instead of extending it.

Improvement tips:

* Move milestone later.
* Add built-in practice first.
* Add prerequisite recap.

### 2. Local Workflow Clarity

10/10:

* Required tools are clear.
* Setup steps are specific.
* Expected folder/project structure is shown.
* Run/open instruction is clear.
* Common setup mistakes are included.

7/10:

* Workflow is understandable.
* Some steps need more detail.

5/10 or below:

* Learner may not know what to install, run, or open.
* Folder structure is missing.
* No troubleshooting guidance.

Improvement tips:

* Add required tools list.
* Add file tree.
* Add exact command or open instruction.
* Add common mistakes.

### 3. Real Engineering Value

10/10:

* Milestone teaches workflow used by engineers.
* Includes editor, terminal, browser, DevTools, Git/GitHub, npm, or deploy when relevant.
* Output can become part of portfolio or project history.

7/10:

* Milestone has real workflow value.
* Some steps feel checklist-only.

5/10 or below:

* Milestone is only a vague “try locally” instruction.
* No Git, debugging, docs, or project explanation when relevant.

Improvement tips:

* Add Git/GitHub step.
* Add DevTools or debugging task.
* Add README/project note.
* Add docs reading tied to the task.

### 4. Verification Honesty

10/10:

* Checklist is clear about what FluentStack can and cannot verify.
* Completion uses self-review when needed.
* Learner knows how to confirm success locally.

7/10:

* Checklist is useful.
* Verification limitation could be clearer.

5/10 or below:

* Claims automatic verification for local device work that the app cannot actually check.
* Completion criteria are vague.

Improvement tips:

* Use honest checklist items.
* Add “you should see...” expected output.
* Use writing practice for proof or reflection when system cannot inspect local files.

### 5. Documentation Use

10/10:

* Milestone includes relevant official docs.
* Docs are used to solve real setup/build/debug tasks.
* Follow-up action connects docs to local project.

7/10:

* Docs are relevant.
* Guidance could be more specific.

5/10 or below:

* Docs are missing.
* Docs are broad or unrelated.
* Learner is not taught how to use docs during the local task.

Improvement tips:

* Add official docs source.
* Add exact section and focus points.
* Tie docs to one local project action.

## Module Coherence Rubric

Use this section when reviewing a full module.

### 1. Learning Arc

10/10:

* Module starts with prerequisite-friendly concepts.
* Lessons build on each other.
* Practice appears at the right time.
* Documentation Bridge appears when useful.
* Uji Kompetensi checks the full arc.

7/10:

* Order is mostly good.
* One or two transitions need improvement.

5/10 or below:

* Lessons feel random.
* Assessment does not match lessons.
* Documentation links feel unrelated.
* Learner may not know why topics appear.

Improvement tips:

* Reorder lessons.
* Add bridge copy.
* Move advanced topics later.
* Add missing practice before assessment.
* Move docs bridge to assessment or module end.

### 2. Lesson Role Uniqueness

10/10:

* Every lesson has a distinct role.
* No repeated concept lessons.
* Reinforcement lessons practice, not repeat.
* Common mistake lessons add a new angle.

7/10:

* Mostly distinct.
* Some overlap exists but is manageable.

5/10 or below:

* Two or more lessons teach the same thing.
* Module feels padded.
* Learner sees repetition without deeper practice.

Improvement tips:

* Label each lesson role.
* Merge repeated explanations.
* Convert one lesson into practice or assessment.
* Remove low-value lessons from active order.

### 3. Quiz Load

10/10:

* Regular lessons are not quiz-heavy.
* Quick checks support learning.
* Main quiz lives in Uji Kompetensi.
* Learner does not feel tested after every small section.

7/10:

* Some regular quizzes exist but are justified.
* Overall flow is still manageable.

5/10 or below:

* Almost every lesson has a quiz.
* Learner feels interrupted by tests.
* Quiz exists because of habit, not learning need.

Improvement tips:

* Remove regular lesson quizzes.
* Move coverage into Uji Kompetensi.
* Use quick checks instead.
* Strengthen practice.

### 4. Practice Progression

10/10:

* Built-in practice starts small.
* Each task builds on the previous task.
* Assessment practice combines module skills.
* Local milestone appears only when learners are ready.
* Learner sees visible progress.

7/10:

* Practice exists but progression could be clearer.

5/10 or below:

* Practice is missing.
* Practice jumps too fast.
* Local milestone appears too early.
* Assessment practice is unrelated.

Improvement tips:

* Add one small output per lesson.
* Use auto validation for simple code requirements.
* Add final assessment task.
* Delay local milestone until the learner has enough concepts.

### 5. Documentation Progression

10/10:

* Documentation Bridge is introduced gradually.
* Beginners get guided docs references.
* Advanced modules expect more docs independence.
* Docs references match the module goal.

7/10:

* Docs references are useful.
* Some could be more specific.

5/10 or below:

* No docs references in modules that need them.
* Docs are dumped without guidance.
* Beginners are sent to broad docs too early.

Improvement tips:

* Add guided docs bridge at module end.
* Give focus points.
* Add ignore-for-now notes.
* Tie docs reading to a follow-up action.

## Quiz Rubric

Use this for any quiz, whether regular lesson quiz or Uji Kompetensi quiz.

### 10/10 Quiz

* Every question has one clear purpose.
* Questions match taught material.
* Wrong answers are plausible beginner misconceptions.
* No joke answers.
* No trick wording.
* Explanations teach the rule.
* Correct answer positions vary.
* Passing score is reasonable.
* Quiz feels like learning feedback, not punishment.

### 7/10 Quiz

* Mostly relevant questions.
* A few answers are too obvious.
* Explanations are correct but short.
* Answer positions are somewhat varied.

### 5/10 or below Quiz

* Tests untaught concepts.
* Has vague questions.
* Uses trick wording.
* Correct answer is usually option A.
* Explanations are not helpful.
* Feels like trivia.

Improvement tips:

* Rewrite questions around practical decisions.
* Add explanations for wrong-answer misconceptions.
* Audit correct answer positions.
* Remove questions that do not support readiness.

## Coding Practice Rubric

### 10/10 Coding Practice

* Task matches lesson or assessment goal.
* Starter code is helpful but not fully complete.
* Instructions are clear.
* Learner knows what to edit.
* Output can be seen in preview or checked.
* Checklist or auto validation is meaningful.
* Completion reflects real work.

### 7/10 Coding Practice

* Task is relevant.
* Starter code works.
* Instructions need small polish.
* Validation/checklist is useful but incomplete.

### 5/10 or below Coding Practice

* Task is unclear.
* Starter code already solves everything.
* Learner can complete without understanding.
* Validation checks the wrong things.
* Preview does not help.

Improvement tips:

* Make one clear output.
* Keep starter code partially incomplete.
* Add deterministic checks when possible.
* Add helper copy for beginner tasks.
* Remove unrelated CSS/JS from HTML-only tasks.

## Writing Practice Rubric

### 10/10 Writing Practice

* Scenario is realistic.
* Prompt is specific.
* Learner knows audience and purpose.
* Checklist guides tone and content.
* Model answer teaches structure.
* Output is reusable for real work.

### 7/10 Writing Practice

* Prompt is useful.
* Scenario could be more specific.
* Checklist is present but generic.

### 5/10 or below Writing Practice

* Prompt is vague.
* No audience or context.
* Checklist does not guide quality.
* Model answer is missing when it would help.

Improvement tips:

* Add work situation.
* Define audience.
* Use realistic constraints.
* Add model answer.
* Keep tone guidance practical.

## Golden Regular Lesson Standard

A flagship early regular lesson should include:

* clear goal
* previous/next context
* plain explanation
* concrete example
* mini action or observation
* common confusion
* quick check
* built-in practice when useful
* actionable summary
* clear bridge to the next lesson

It does not need a quiz by default.

A golden lesson should feel like a learner is being guided, not tested.

## Strong Uji Kompetensi Standard

A strong Uji Kompetensi should include:

* module recap
* clear list of what will be checked
* quiz that covers the module
* built-in practice, project, writing task, or checklist when the module teaches an applied skill
* Documentation Bridge when useful
* feedback that teaches
* readiness summary
* next module bridge

It should feel like a fair checkpoint.

It should not feel like a surprise exam.

## Strong Documentation Bridge Standard

A strong Documentation Bridge should include:

* official docs source
* exact page or section
* focus points
* ignore-for-now notes
* follow-up action
* connection back to FluentStack lesson, practice, Uji Kompetensi, or local milestone

It should make learners more independent.

It should not send learners away without direction.

## Strong Local Dev Milestone Standard

A strong Local Dev Milestone should include:

* reason why local workflow appears now
* required tools
* clear project goal
* setup steps
* expected folder/project structure
* run/open instruction
* common setup mistakes
* official docs references
* Git/GitHub step when relevant
* completion checklist
* writing task for README, project note, or demo note when useful

It should feel like a supported transition from built-in practice to real engineering workflow.

It should not feel like “good luck, install everything yourself.”

## Beginner Lesson Red Flags

Revise when you see:

* too many new terms at once
* code before the learner knows why it exists
* definitions without examples
* examples that are too abstract
* quiz inside every regular lesson
* regular lesson feels like a mini exam
* practice appears before enough explanation
* summary only repeats generic phrases
* no bridge to the next lesson
* no mini action or concrete observation
* using technical terms before introducing them
* broad docs links appear too early
* local setup appears before learner is ready

## Module Red Flags

Revise when you see:

* module has no Uji Kompetensi
* every lesson has a quiz
* two lessons explain the same concept
* assessment checks concepts not taught
* module has many shallow lessons
* lesson order feels arbitrary
* hidden/prototype modules appear in active track
* assessment does not bridge to next module
* documentation bridge is link dumping
* local milestone replaces built-in concept practice
* local milestone appears too early
* local milestone has no clear verification path

## Review Workflow

Use this workflow when reviewing a lesson:

1. Identify content type:

   * regular lesson
   * Uji Kompetensi
   * built-in practice
   * Documentation Bridge
   * Local Dev Milestone
   * quiz
   * coding practice
   * writing practice
   * module

2. Read as a first-time learner.

3. Check whether each new term is introduced.

4. Check whether the example is concrete.

5. Check whether the learner gets a small action, quick check, built-in practice, docs action, or local task.

6. Check whether the lesson is quiz-heavy.

7. Complete the quick check, quiz, practice, docs action, or local checklist.

8. Check the summary and bridge.

9. Score using the relevant rubric section.

10. Revise before adding more content.

Use this workflow when reviewing a module:

1. List all lessons in order.
2. Write the role of each lesson.
3. Mark any repeated concepts.
4. Check if regular lessons teach and practice.
5. Check if Documentation Bridge is guided and placed well.
6. Check if Local Dev Milestone appears at the right time.
7. Check if Uji Kompetensi covers the full module.
8. Test the module in browser.
9. Revise before moving to the next module.

## Minimum Quality Gate

Use these gates before scaling content.

Regular lesson:

* At least 8/10 before active use.
* At least 9/10 if used as benchmark.

Uji Kompetensi:

* At least 8.5/10 before active use.

Documentation Bridge:

* At least 8/10 before active use.
* At least 8.5/10 for beginner modules.

Local Dev Milestone:

* At least 8.5/10 before active use.

Module:

* At least 8.5/10 before adding the next module.

Do not scale weak patterns.

If a beginner lesson is weak, improve it before writing similar lessons.

If a module feels repetitive, fix the module structure before adding content.

If learners feel tested too often, move quizzes into Uji Kompetensi and strengthen practice.

If learners are not ready for local setup, delay Local Dev Milestone and add more built-in practice first.

If docs guidance feels vague, rewrite the Documentation Bridge with official source, focus points, ignore-for-now notes, and follow-up action.

## Final Quality Rule

FluentStack should optimize for durable understanding, not content volume.

A smaller module with mature lessons, focused built-in practice, guided official docs, meaningful Uji Kompetensi, and well-timed local milestone is better than a large module filled with shallow lessons.

If content does not help the learner understand, practice, communicate, read documentation, build locally, or prove a real skill, revise it or remove it from the active path.
