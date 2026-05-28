# docs/02_LEARNING_FLOW.md

# Learning Flow

## Main User Flow

The main learning flow is:

```txt
Landing Page
→ Register / Login or Continue as Guest
→ Dashboard
→ Roadmap
→ Track
→ Module
→ Lesson
→ Activity Blocks
→ Completion
→ Progress Updated
```

## Core Learning Model

A lesson is made from blocks.

Possible block types:

* text
* callout
* code-example
* quick-check
* coding-practice
* writing-practice
* quiz
* summary

The user should not feel like quiz and practice are separate products.

They should feel like natural parts of the lesson.

## Example Frontend Lesson Flow

Lesson: CSS Flexbox Basics

1. Text block: What Flexbox is
2. Code example block: Basic flex container
3. Quick check block: justify-content question
4. Coding practice block: Build a navbar
5. Quiz block: 5 short questions
6. Summary block

## Example English Lesson Flow

Lesson: Writing Daily Updates

1. Text block: Why daily updates matter in remote work
2. Example block: Good and bad updates
3. Vocabulary or callout block: blocker, progress, shipped, fixed
4. Writing practice block: Write your own update
5. Quiz block: Choose the clearest update
6. Summary block

## Lesson Completion

A lesson should not be completed only because the user opened the page.

Completion should be based on required blocks.

Example:

```txt
Read required text blocks: 30%
Complete practice block: 40%
Pass quiz block: 30%

Total: 100%
```

## Required Blocks

Each lesson can define required blocks.

Example:

```txt
Required blocks:
- intro-text
- quick-check-1
- coding-practice-navbar
- final-quiz
```

The lesson is completed only when the required blocks are completed.

## Optional Blocks

Some blocks can be optional.

Examples:

* extra reading
* bonus challenge
* reflection prompt
* additional examples

Optional blocks can give extra XP, but should not block lesson completion.

## Progress Levels

### 1. Lesson Progress

Progress inside a single lesson.

Example:

```txt
CSS Flexbox Basics: 70%
```

### 2. Module Progress

Based on completed lessons inside a module.

Example:

```txt
CSS Fundamentals: 4 of 7 lessons completed
```

### 3. Track Progress

Based on completed modules and lessons inside a track.

Example:

```txt
Frontend Engineering: 18%
English for Tech Careers: 12%
```

### 4. Skill Progress

Based on skill tags connected to lessons and challenges.

Example skills:

* HTML
* CSS Layout
* JavaScript Basics
* Technical English
* Remote Communication
* Code Review English
* Interview English

## Guest User Flow

Guest users can learn without creating an account.

Guest flow:

```txt
Open app
→ Continue as guest
→ Learn lessons
→ Complete activities
→ Progress saved in localStorage
```

Guest mode should be useful, but not as permanent as logged-in mode.

Guest users should be encouraged to create an account if they want to save progress across devices.

## Logged-In User Flow

Logged-in users have progress saved to Supabase.

Logged-in flow:

```txt
Open app
→ Login
→ Dashboard loads saved progress
→ Continue learning
→ Activity completed
→ Progress saved to Supabase
```

## Activity Completion Rules

### Text Block

A text block can be marked completed when:

* the user reaches the block
* or the user clicks continue
* or the user scrolls past the block

For MVP, prefer simple and reliable logic.

### Quick Check Block

A quick check block is completed when:

* the user submits an answer

Correct answers may give XP.

Wrong answers should show an explanation and allow retry.

### Quiz Block

A quiz block is completed when:

* the user finishes the quiz
* and reaches the required passing score

If the user fails, allow retry.

Save best score.

### Coding Practice Block

A coding practice block is completed when:

* the user edits or reviews code
* completes checklist items
* and clicks mark as completed

For MVP, checklist completion can be manual.

Later, automated checks may be added.

### Writing Practice Block

A writing practice block is completed when:

* the user writes a response
* response meets minimum length
* and user clicks submit or mark as completed

For MVP, do not use AI grading.

## XP Rules

XP should reward real activity.

Example:

```txt
Complete text block: 5 XP
Answer quick check correctly: 10 XP
Complete quiz: 25 XP
Pass quiz with 80% or higher: 40 XP
Complete coding practice: 50 XP
Complete writing practice: 30 XP
Complete full lesson: 100 XP
```

Exact XP numbers can be adjusted during implementation.

## Streak Rules

A streak increases when the user completes at least one meaningful activity in a day.

Meaningful activity examples:

* completes a lesson block
* passes a quiz
* completes a coding practice
* completes a writing practice

Opening the app should not increase streak.

## Learning UX Rules

The user should always understand:

* where they are
* what they are learning
* what they need to do
* how much progress they have made
* what comes next

Avoid confusing flows.

Avoid sending users to disconnected quiz or practice pages unless the page is clearly part of the current lesson.

## Recommended First Complete Flow

The first implementation should build one complete vertical slice:

```txt
Dashboard
→ Frontend Engineering track
→ HTML & Web Fundamentals module
→ HTML Semantic Basics lesson
→ Text block
→ Code example block
→ Quick check block
→ Quiz block
→ Summary block
→ Progress saved
```

After that works, add:

```txt
Coding practice block
Writing practice block
Supabase Auth
Supabase progress persistence
```

## Future Learning Enhancements

Possible future additions:

* AI feedback for writing practice
* automated coding checks
* project submissions
* portfolio builder
* spaced repetition
* weak area recommendations
* personalized roadmap
* learning analytics
* interview simulator

These are not required for MVP.
