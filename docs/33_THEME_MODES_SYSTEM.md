# FluentStack Theme Modes System

## Purpose

FluentStack will support three comfortable visual modes:

* `dark`: the current premium developer learning feel.
* `light`: a clean SaaS learning interface with high contrast and low glare.
* `paper`: a warm long-form reading mode for lessons and assessments.

The goal is not only changing colors. The goal is preserving learning comfort across dashboard, lesson reader, assessments, and the dedicated practice workspace.

## Current Audit

The app already has shadcn-style base tokens in `src/app/globals.css`:

* `--background`
* `--foreground`
* `--card`
* `--border`
* `--primary`
* `--muted`
* `--sidebar-*`

Those tokens are currently not enough for FluentStack's actual UI. Most product components still use hardcoded Tailwind colors such as:

* `bg-zinc-950/45`
* `border-zinc-800/80`
* `text-zinc-100`
* `text-zinc-300`
* `bg-cyan-400`
* `bg-cyan-500/10`
* `bg-emerald-500/10`
* `bg-amber-500/10`
* `bg-rose-500/10`
* custom `radial-gradient(...)`
* custom `shadow-[...]`

High-impact hardcoded areas:

* `src/components/layout/app-shell.tsx`
* `src/components/layout/sidebar.tsx`
* `src/components/layout/topbar.tsx`
* `src/app/dashboard/page.tsx`
* `src/components/progress/profile-overview.tsx`
* `src/components/learning/lesson-reader.tsx`
* `src/components/learning/lesson-outline.tsx`
* `src/components/learning/blocks/*`
* `src/components/practice/practice-workspace.tsx`
* `src/components/playground/coding-lab.tsx`
* `src/components/quiz/*`
* shared controls in `src/components/ui/*`

The largest risks are lesson readability and practice workspace contrast. These must be handled before final visual polish.

## Token Contract

Theme-specific FluentStack tokens are prefixed with `--fs-*`.

Core page tokens:

```txt
--fs-background
--fs-background-subtle
--fs-surface
--fs-surface-soft
--fs-surface-strong
--fs-border
--fs-border-strong
```

Text tokens:

```txt
--fs-text
--fs-text-soft
--fs-text-muted
--fs-text-inverse
```

Accent and state tokens:

```txt
--fs-accent
--fs-accent-strong
--fs-accent-soft
--fs-success
--fs-success-soft
--fs-warning
--fs-warning-soft
--fs-danger
--fs-danger-soft
--fs-info
--fs-info-soft
```

Practice and code tokens:

```txt
--fs-code-background
--fs-code-surface
--fs-code-border
--fs-focus
--fs-progress-from
--fs-progress-to
--fs-app-gradient
```

Tailwind color aliases are exposed through `@theme inline`, for example:

```txt
bg-fs-background
bg-fs-surface
text-fs-text
text-fs-text-muted
border-fs-border
bg-fs-accent
bg-fs-success-soft
```

For gradients and shadows, use CSS variables in arbitrary values when needed:

```txt
bg-[var(--fs-app-gradient)]
from-[var(--fs-progress-from)]
to-[var(--fs-progress-to)]
```

## Theme Personality

### Dark

Dark mode should stay close to the current visual identity:

* near-black navy background
* glassy panels
* cyan primary action
* violet/cyan progress energy
* emerald completion
* amber warning
* rose error

This mode is the default and should remain the most developer-focused mode.

### Light

Light mode should feel like a clean SaaS learning workspace:

* off-white background, not pure white everywhere
* white cards with clear borders
* calm cyan/blue accent
* stronger text contrast than typical gray UI
* reduced glow and shadow intensity

Light mode should not become a plain documentation website.

### Paper

Paper mode is a reading comfort mode:

* warm off-white background
* warm surfaces
* restrained blue accent
* lower visual glare than light mode
* code areas remain clearly separated

Paper mode should not become beige-heavy or old editorial styling. It still needs to feel like FluentStack, not a blog or academic document.

## Refactor Order

Use this order to reduce regression risk.

1. Foundation controls:
   * `button`
   * `input`
   * `textarea`
   * `badge`
   * `progress`
   * common card/surface helpers if added

2. Layout shell:
   * `app-shell`
   * `sidebar`
   * `topbar`
   * `bottom-nav`

3. Learning reader:
   * `lesson-reader`
   * `lesson-outline`
   * `lesson-progress`
   * `read-only-block-completion`
   * `block-requirement-badge`

4. Lesson blocks:
   * text
   * callout
   * code example
   * quick check
   * quiz
   * coding practice launcher
   * writing practice
   * documentation bridge
   * resource links
   * summary

5. Practice workspace:
   * `practice-workspace`
   * `coding-lab`
   * `code-editor`
   * `preview-panel`
   * validation state UI
   * sticky action panel

6. Dashboard and profile:
   * dashboard cockpit
   * progress cards
   * profile overview
   * XP/streak widgets

7. Learn, track, module, roadmap, auth, and landing routes.

8. Theme switcher:
   * default to dark
   * persist in localStorage
   * avoid flash before hydration
   * expose Dark, Light, Paper with accessible labels

## Migration Rules

Do:

* Replace repeated surface styles with semantic tokens.
* Keep status colors semantic and consistent.
* Keep code/editor surfaces distinct from normal cards.
* Keep focus rings visible in all three modes.
* Use `paper` especially to improve long-form lesson readability.

Do not:

* Convert everything mechanically if contrast becomes worse.
* Leave `zinc-*` surface classes in shared components after refactor.
* Use dark-only shadows in light and paper modes.
* Make paper mode dominated by yellow or brown.
* Hide completion states behind color alone.
* Change progress or validation behavior during visual refactor.

## QA Matrix

Desktop:

* `1440px` lesson page
* `1440px` practice workspace
* `1440px` dashboard
* `1440px` profile

Tablet:

* `768px` lesson page
* `768px` practice workspace
* `768px` module page

Mobile:

* `375px` lesson page
* `375px` quick check and quiz
* `375px` writing practice
* `375px` practice workspace stacked layout

Required manual flow per theme:

```txt
/learn
-> module page
-> lesson
-> quick check
-> practice workspace
-> back to lesson
-> Uji Kompetensi
-> dashboard
-> profile
```

Checks:

* text remains readable
* no text overlaps inside buttons/cards
* active sidebar item is clear
* lesson outline remains scannable
* required/optional badges remain legible
* progress bar is visible
* practice validation states are clear
* editor/preview are not visually cramped
* sticky action panels do not cover content
* focus ring is visible
* disabled buttons remain understandable

## Current Implementation Status

Initial theme tokens are defined in `src/app/globals.css`.

Current app rendering still uses hardcoded dark classes in most components, so light and paper are not ready for user switching yet.

The next implementation step is refactoring foundation controls and layout shell to use `--fs-*` tokens while preserving current dark appearance.
