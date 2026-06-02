# Practice Workspace Standard

The Practice Workspace is the dedicated coding environment for FluentStack.

It is a core product feature, not a secondary embedded widget. It should be comfortable enough for current HTML/CSS practice and flexible enough for future JavaScript, React, Next.js, testing, and debugging practice where feasible.

## Purpose

The Practice Workspace should support:

* focused coding
* preview inspection
* automatic validation
* clear instructions
* progress and completion actions
* responsive layout testing
* future HTML, CSS, JavaScript, React, and Next.js practices

The workspace should help learners build, test, check, and finish a focused task without losing the surrounding learning context.

## Lesson vs Practice Separation

Lesson pages are reading and concept mode.

Practice pages are building mode.

Rules:

* Lesson pages should not render the full editor inline.
* Lesson pages should show a compact coding practice launcher card.
* Practice pages are where actual coding happens.
* The launcher should make it clear that practice opens a dedicated workspace.

This keeps reading mode clean and practice mode spacious.

## Practice Route Standard

Route:

```txt
/practice/[challengeId]
```

Expected behavior:

* find the challenge by `challengeId`
* show not-found or a safe fallback if the challenge does not exist
* resolve the related lesson when available
* show a clear back link to the related lesson
* render editor, preview, checks, instructions, and actions
* preserve validation behavior
* preserve completion behavior

The practice route should not change curriculum order or progress rules. It is a focused workspace for an existing challenge.

## Workspace Layout Standard

Supported layout templates:

```txt
code-left
preview-left
code-top
preview-top
stacked
```

Behavior:

* `code-left`: editor left, preview right
* `preview-left`: preview left, editor right
* `code-top`: editor top, preview bottom
* `preview-top`: preview top, editor bottom
* `stacked`: vertical fallback for small screens or user preference

Layout choice may be saved in `localStorage` when simple and safe.

Small screens should stack safely. The workspace must avoid horizontal overflow, clipped controls, and unusable fixed-width panels.

Layout controls should be keyboard reachable and clearly labeled.

## Split Adjuster Standard

Non-stacked layouts may use a draggable splitter.

Behavior:

* horizontal split for `code-left` and `preview-left`
* vertical split for `code-top` and `preview-top`
* safe min/max bounds so neither editor nor preview becomes unusably small
* reset layout action to restore a reasonable default
* split ratio may be saved in `localStorage` when simple and safe

The splitter should be visible and accessible enough. It should not rely only on color, and it should have an accessible label.

Keyboard resizing is a future enhancement if it can be added cleanly, but controls must remain reachable and the layout must still work without dragging.

## Preview Viewport Standard

Supported preview viewports:

```txt
mobile
tablet
desktop
full
```

The preview viewport controls simulated page width.

The split adjuster controls how much workspace area the preview panel receives.

These are different concepts and should remain separate.

Rules:

* fixed preview viewport should be centered inside the preview panel
* `max-width: 100%` or equivalent should prevent overflow
* preview should use available height, especially in top/bottom layouts
* responsive CSS lessons should make Mobile, Tablet, Desktop, and Full useful

## Instructions and Checks Standard

Instructions and checks should stay easy to access while coding.

On desktop, instructions/checks should not force learners to scroll far above the editor and preview. Prefer a side panel, compact panel, or tabbed panel.

Checks should show:

* pass/fail status
* validation summary
* failed check details
* beginner-friendly messages

Failed checks should explain what is missing without sounding punitive.

## Actions Standard

Core actions:

* save code
* reset
* view solution when supported
* complete or mark done when supported
* back to lesson

Actions should be easy to reach. Do not hide completion too far below the workspace.

Do not change action behavior without checking progress logic. Practice completion is part of lesson progress and should remain consistent with existing storage behavior.

## Validation Standard

Validation should remain deterministic.

Use automatic validation for beginner-safe checks such as:

* HTML element exists
* HTML attribute exists
* semantic structure exists
* CSS selector exists
* CSS property exists
* CSS property exists inside selector
* forbidden CSS text is absent

The CSS validator should not pretend to be a full CSS parser or layout engine.

Local-device tasks should not be fake auto-validated. Use checklist, self-review, writing practice, or project reflection for work that happens outside FluentStack.

For deterministic coding challenges:

* starter code should usually not pass all checks by default
* solution should pass
* missing required code should fail
* forbidden patterns like `!important` should fail where configured

Manual checklist is still valid for subjective review, visual judgment, accessibility review, and local workflow completion.

## Accessibility and Usability Expectations

The workspace should include:

* clear back link to lesson
* keyboard-reachable controls
* clear labels for layout, viewport, and actions
* visible states that do not rely only on color
* editor navigation hint so users know how to leave the editor focus
* mobile layout that remains usable

Avoid trapping users inside the editor. Keep the navigation hint visible enough for beginners.

## Future Readiness

The Practice Workspace should be able to grow toward:

* HTML practice
* CSS visual practice
* JavaScript DOM practice
* React component practice
* Next.js route or app practice where feasible
* testing or debugging practice where appropriate

Future practice types may need richer previews, test runners, logs, or scenario panels. Add those only when the learning need is clear and the implementation stays safe.

## What To Avoid

Avoid reintroducing large inline editors in lesson pages.

Avoid making the practice workspace a long vertical page by default on desktop.

Avoid removing validation visibility.

Avoid hiding back navigation.

Avoid making fixed preview viewports unusable.

Avoid over-customizing with complex manual layout before preset layouts are stable.

Avoid adding layout dependencies unless the need is clear and the benefit outweighs the maintenance cost.

Avoid changing validation, progress, or completion behavior just to support a visual polish task.
