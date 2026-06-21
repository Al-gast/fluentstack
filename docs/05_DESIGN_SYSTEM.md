# docs/05_DESIGN_SYSTEM.md

# Design System

## Purpose

This document defines the visual and interaction direction for FluentStack.

The goal is to keep the app consistent, polished, readable, and comfortable for long learning sessions.

FluentStack should feel like a premium developer learning platform, not a generic course template.

## Visual Direction

FluentStack should feel:

* modern
* focused
* calm
* technical
* premium
* readable
* motivating
* not childish
* not overly playful
* not visually noisy

The UI should support learning. It should not distract from the lesson content.

## Design Keywords

Use these ideas as direction:

* dark mode first
* clean dashboard
* focused reading layout
* subtle gradients
* soft glass surfaces
* smooth micro-interactions
* clear progress states
* comfortable spacing
* strong typography
* premium SaaS feel
* practical developer tool feel

## Color Direction

Use a dark-first palette.

For the planned dark, light, and paper modes, use `docs/33_THEME_MODES_SYSTEM.md` as the implementation reference. That document defines the semantic `--fs-*` theme tokens, migration order, and QA matrix.

Suggested direction:

```txt
Background:
deep dark navy / near black

Surface:
slightly lighter dark panels

Primary accent:
electric blue, cyan, violet, or indigo

Secondary accent:
emerald or soft green for completion states

Warning:
amber

Error:
red or rose

Text:
high-contrast white / off-white for primary text
muted gray for secondary text
```

Avoid:

* too many bright colors
* low contrast text
* childish gradients
* random accent colors
* heavy neon everywhere

## Suggested Color Tokens

These are conceptual tokens. Exact values can be adjusted during implementation.

```txt
background.base
background.surface
background.elevated
background.glass

text.primary
text.secondary
text.muted
text.inverse

border.subtle
border.strong

accent.primary
accent.secondary
accent.success
accent.warning
accent.error

state.completed
state.inProgress
state.locked
state.active
```

## Typography

FluentStack should use Montserrat as the main app font.

Typography should feel:
- modern
- clean
- friendly
- technical
- comfortable for long learning sessions

Use Montserrat for:
- page titles
- section titles
- card titles
- body text
- buttons
- navigation
- lesson content
- quiz content
- practice instructions

Use monospace only for:
- code blocks
- inline code
- pre
- kbd
- samp
- code-like labels

Do not use serif fonts.

Avoid:
- `font-serif`
- serif fallbacks for UI text
- editorial-style headings
- newspaper-like title styling
- excessive letter spacing
- too many uppercase labels
- decorative typography

Recommended font setup:

```ts
import { Montserrat, Geist_Mono } from "next/font/google";

## Layout Principles

Use spacious layouts.

General rules:

* avoid cramped cards
* use consistent padding
* keep lesson reading width comfortable
* dashboard can be wider
* lesson content should not stretch too wide
* use responsive grids
* preserve breathing room on mobile

Recommended widths:

```txt
Lesson content:
max-width around 760px to 860px

Dashboard content:
max-width around 1180px to 1280px

Roadmap content:
max-width around 1180px to 1280px
```

## Spacing

Use consistent spacing.

Suggested rhythm:

```txt
Small gap:
8px

Default gap:
16px

Section gap:
24px to 32px

Page section gap:
48px to 72px
```

Avoid random spacing.

## Border Radius

Use rounded corners to make the app feel polished.

Suggested direction:

```txt
Small controls:
rounded-lg

Cards:
rounded-2xl

Large panels:
rounded-3xl
```

Avoid mixing too many radius styles.

## Shadows and Surfaces

Use soft shadows and subtle borders.

Dark mode surfaces should rely on:

* subtle border
* slight background contrast
* soft shadow
* gradient only when useful

Avoid heavy shadows that make the app feel messy.

## Motion and Animation

Use Framer Motion for polished interactions.

Animation should be subtle and helpful.

Use animation for:

* page transitions
* card entrance
* card hover
* progress update
* quiz feedback
* block reveal
* active navigation state

Avoid:

* slow animations
* excessive bounce
* animation on every small element
* motion that delays learning tasks

Suggested timing:

```txt
Fast interaction:
120ms to 180ms

Default transition:
200ms to 300ms

Large page transition:
300ms to 450ms
```

Respect reduced motion when possible.

## App Shell

Desktop layout:

* sidebar navigation
* topbar
* main content area
* optional right panel for lesson outline or progress

Mobile layout:

* compact topbar
* bottom navigation or drawer navigation
* single-column content
* sticky lesson progress if useful

## Navigation Design

Primary navigation should include:

* Dashboard
* Roadmap
* Tracks
* Profile

Optional later:

* Practice Review
* Settings
* Case Study

Navigation states:

```txt
Active:
strong accent and clear background

Inactive:
muted text

Completed:
success indicator

Locked:
muted and disabled state
```

## Component List

Core components:

```txt
AppShell
Sidebar
Topbar
BottomNav
PageHeader
SectionHeader
TrackCard
ModuleCard
LessonCard
ProgressBar
CircularProgress
XPBadge
StreakCard
SkillTag
StatusBadge
ActivityBlockShell
TextBlock
CalloutBlock
CodeExampleBlock
QuickCheckBlock
QuizBlock
CodingPracticeBlock
WritingPracticeBlock
SummaryBlock
CodeEditor
PreviewPanel
AuthCard
EmptyState
LoadingSkeleton
```

## Cards

Cards should be clean, readable, and interactive when clickable.

Card requirements:

* clear title
* short description
* useful metadata
* consistent padding
* hover state for clickable cards
* visible focus state
* responsive layout

Card examples:

* TrackCard
* ModuleCard
* LessonCard
* DashboardStatCard
* ContinueLearningCard

## Progress UI

Progress should feel clear and motivating.

Use progress for:

* lesson progress
* module progress
* track progress
* XP
* streak
* skill progress

Progress rules:

* show percentage when useful
* show completed count when useful
* avoid fake progress
* progress should update after meaningful activity

Example labels:

```txt
3 of 8 lessons completed
70% lesson progress
120 XP earned
4-day streak
```

## Lesson Page Design

Lesson pages should prioritize reading and focus.

Recommended layout:

Desktop:

```txt
Left:
lesson content

Right:
sticky outline / progress panel
```

Mobile:

```txt
Single column
sticky progress summary if useful
```

Lesson page should include:

* title
* description
* objectives
* estimated time
* level
* progress
* activity blocks
* next lesson action

## Lesson Block Design

Each block should feel connected to the lesson, not like a separate page.

Block requirements:

* clear block title
* enough spacing
* clear action button
* completion state
* accessible interaction
* consistent styling

Activity blocks should have stronger visual treatment than plain text blocks.

## Quiz Design

Quiz should feel helpful, not intimidating.

Quiz UI should include:

* current question number
* clear question text
* answer options
* submit button
* feedback state
* explanation
* retry option
* final score

Feedback should use:

* text explanation
* icon or label
* color as secondary signal only

## Coding Practice Design

The coding practice block should feel like a mini lab.

Recommended layout:

Desktop:

```txt
Left:
instructions and checklist

Center:
editor

Right or bottom:
preview
```

Mobile:

```txt
Tabs or stacked layout
instructions
editor
preview
```

Coding practice UI should include:

* challenge title
* instructions
* checklist
* HTML/CSS/JS tabs
* Monaco editor
* preview iframe
* reset button
* show solution button
* mark completed button

## Writing Practice Design

Writing practice should feel simple and focused.

UI should include:

* prompt
* textarea
* checklist
* save draft
* show model answer
* mark completed

The writing area should be comfortable and not cramped.

## Empty States

Empty states should guide the user.

Examples:

```txt
No progress yet:
Start with your first lesson.

No quiz attempts:
Complete a quiz to see your scores here.

No completed challenges:
Try your first coding practice inside a lesson.
```

Avoid empty blank screens.

## Loading States

Use skeleton loading when content is loading.

Use simple loading states for:

* dashboard progress
* auth state
* lesson content
* Monaco editor
* Supabase data

Do not overuse spinners.

## Accessibility Rules

Core rules:

* use semantic HTML
* buttons must be buttons
* inputs must have labels
* focus states must be visible
* color contrast must be readable
* keyboard navigation should work
* quiz feedback should not rely only on color
* coding practice controls should be reachable by keyboard

## Responsive Rules

The app must work well on:

* mobile
* tablet
* desktop
* large desktop

Important responsive behavior:

* cards stack on mobile
* sidebar becomes bottom nav or drawer on mobile
* lesson outline should not crowd mobile
* editor and preview should adapt to smaller screens

## UI Quality Checklist

Before finishing a UI task, check:

* Is the layout responsive?
* Is text readable?
* Is spacing consistent?
* Are actions clear?
* Are empty states handled?
* Are loading states handled?
* Are hover and focus states visible?
* Is the UI consistent with the dark premium direction?
* Does the interaction help learning?
