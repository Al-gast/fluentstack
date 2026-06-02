# docs/10_IMPLEMENTATION_DECISIONS.md

# Implementation Decisions

## Purpose

This document finalizes implementation decisions that should guide Codex before coding starts.

These decisions are intentionally simple for the MVP.

---

## 1. Progress Weighting

For the MVP, lesson progress uses equal weight per required block.

Formula:

lessonProgress = completedRequiredBlocks / totalRequiredBlocks

Do not implement complex 30/40/30 weighting in the first version.

The schema may support optional block weights later, but the first implementation should use equal weights.

---

## 2. Quick Check Completion

A quick check block is completed only after the user selects the correct answer.

Wrong answers should:

* show feedback
* show explanation
* allow retry
* not reduce XP
* not shame the user

Correct answers should:

* show success feedback
* show explanation
* mark the block as completed
* add XP if XP is already implemented

---

## 3. Quiz Passing Score

The default quiz passing score is 70.

Each quiz may override this using its own passingScore field.

If a quiz does not define passingScore, use 70.

A quiz block is completed only when the user reaches the passing score.

---

## 4. Guest-to-Account Behavior

For the MVP:

* guest progress stays in localStorage
* logged-in progress uses Supabase
* no automatic guest-to-account merge is required

Do not implement progress import or merge during MVP unless explicitly requested later.

A future version may add optional guest progress import after login.

---

## 5. Slug and ID Rules

All content IDs must be globally unique.

Rules:

* track.slug must be globally unique
* lesson.slug must be globally unique because the route is /lesson/[lessonSlug]
* module.slug should be unique within a track
* globally unique module slugs are preferred when practical
* block IDs should be unique inside a lesson
* quiz IDs should be globally unique
* challenge IDs should be globally unique

Use clear slugs such as:

* frontend-engineering
* html-basics
* html-semantic-basics
* build-navbar-with-flexbox
* build-flexbox-navbar

---

## 6. Track Gating

Do not implement hard locking in the MVP.

Users should be able to open lessons freely.

Recommended order and lock states may be shown visually, but access should not be blocked.

For MVP, track and module gating is visual-only.

---

## 7. XP and Streak

For the MVP, persist denormalized totals in user_stats for logged-in users.

For guest users, persist totals in localStorage.

Do not build a complex event log system yet.

XP and streak should update after meaningful activities.

Meaningful activities include:

* completing a quick check
* passing a quiz
* completing a coding practice
* completing a writing practice
* completing a full lesson

Opening the app or viewing a page should not increase streak.

A streak increases when the user completes at least one meaningful activity in a calendar day.

If streak logic becomes complex, keep the MVP simple and avoid overengineering.

---

## 8. Writing Practice Completion

Default minimum character count is 80.

Checklist items are guidance only and are not required for MVP completion.

A writing practice block is completed when:

* the response meets the minimum character count
* the user clicks Mark as completed

Do not add AI grading in the MVP.

---

## 9. Coding Challenge Completion

Manual checklist plus Mark as completed is sufficient for MVP.

Do not implement automated code validation yet.

Do not execute user code on the server.

For MVP, coding challenge completion requires:

* the user has interacted with the editor or reviewed the challenge
* the user can check checklist items manually
* the user clicks Mark as completed

---

## 10. First Implementation Slice

The first complete implementation slice is:

Track: Frontend Engineering

Module: HTML & Web Fundamentals

Lesson: Dasar Semantic HTML

Slug: html-semantic-basics

Route: /lesson/html-semantic-basics

The first lesson should include:

* text block
* callout block
* code-example block
* quick-check block
* quiz block
* summary block

Do not add coding practice to the first lesson.

Coding practice should be introduced later in a CSS Flexbox lesson.

---

## 11. First Navigation Path

The first slice should support this navigation path:

* /dashboard
* /roadmap
* /learn/frontend-engineering
* /learn/frontend-engineering/html-basics
* /lesson/html-semantic-basics

The first implementation can use placeholder progress where needed.

Real localStorage progress should come after the static content and lesson renderer are working.

---

## 12. MVP Content Language

Frontend Engineering lessons should use Bahasa Indonesia as the main explanation language.

Common technical terms may remain in English when that is clearer.

Quiz questions and explanations should use Bahasa Indonesia.

Practice instructions should use Bahasa Indonesia.

English for Tech Careers lessons should use bilingual format:

* Indonesian explanation
* practical English examples
* Indonesian meaning or context
* writing practice

Do not implement a full i18n language switcher in the MVP.

---

## 13. First Build Priority

Build in this order:

1. Project structure
2. Visual app shell
3. Static content model
4. Roadmap, track, and module pages
5. Lesson reader and block renderer
6. Local progress
7. Quiz engine
8. Supabase Auth
9. Supabase progress persistence
10. Coding practice
11. Writing practice
12. Profile page
13. Content expansion
14. Polish and deploy

## 14. Typography Decision

Use Montserrat as the main UI font.

Use Geist Mono only for code-like text.

Do not use serif fonts in the app UI.

Avoid editorial typography, newspaper-style headings, excessive uppercase labels, and excessive letter spacing.

The visual direction should feel like a modern SaaS learning platform for Indonesian tech learners.

Do not skip directly to Supabase, Monaco, or AI features before the first lesson flow works.
