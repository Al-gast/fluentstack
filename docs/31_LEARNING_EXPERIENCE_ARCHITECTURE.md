# Learning Experience Architecture

FluentStack's learning experience is organized as a guided flow:

```txt
Track
→ Level
→ Module
→ Lesson
→ Practice
→ Assessment
→ Project / Milestone
```

Each page and feature has a specific role. Keeping these roles clear prevents FluentStack from becoming a flat course reader or a collection of disconnected practice screens.

## Page Roles

### Dashboard

The dashboard is the learner cockpit.

It should answer:

* what should I continue next?
* what level am I currently in?
* what module am I working on?
* what checkpoint or practice needs attention?
* how far am I in the active track?

The dashboard should not be only generic stats. Stats are useful only when they help learners decide what to do next.

### Roadmap

The roadmap is the high-level overview of available tracks and curriculum direction.

It should use active ordered curriculum data, not broad module filtering. Counts should reflect the same active modules and lessons shown in `/learn` and track pages.

### Track Page

The track page is the curriculum journey.

For Frontend Engineering, modules are grouped by curriculum level. This helps learners see the shape of the path instead of reading a flat list.

Track pages should show active implemented levels and modules only. Future levels may be mentioned as planned direction where appropriate, but they should not appear as active curriculum until implemented.

### Module Page

The module page is a guided learning path.

It should explain:

* what the module teaches
* current progress
* where to start or continue
* ordered lessons
* which lesson is the final assessment checkpoint
* previous and next module context

The module page should make the sequence feel intentional, not like a plain lesson list.

### Lesson Page

The lesson page is reading and concept mode.

It should focus on:

* explanation
* examples
* callouts
* quick checks
* summaries
* launchers into practice when useful

The lesson page should not become a cramped coding workspace. It should prepare learners to practice, then send them to the dedicated workspace.

### Practice Page

The practice page is the dedicated coding workspace.

It should provide:

* editor
* preview
* validation checks
* instructions and checklist
* layout controls
* responsive preview controls
* save, reset, solution, and completion actions

Practice is where learners build. It can be more tool-like than the lesson reader.

### Profile Page

The profile page is for learner identity, account state, progress summary, and settings.

It should not replace the dashboard. Dashboard is for deciding what to do next; profile is for reviewing learner/account information.

### Docs and Content Authoring

Docs and content authoring standards keep the learning experience coherent.

Authoring guidance should ensure lessons are beginner-friendly, structured, connected to official docs, and aligned with the module-level assessment model.

## Why Lesson and Practice Are Separated

Lesson pages and practice pages serve different learning modes.

Lesson pages reduce cognitive load. They help the learner understand one concept, read examples, answer quick checks, and see the next step.

Practice pages increase workspace comfort. They give code, preview, validation, and completion actions enough room to be useful.

Combining both into one cramped page makes reading worse and coding worse. Separating them lets each mode do its job.

## Why Modules Are Grouped By Level

Curriculum levels make the track scalable.

Without levels, a long track becomes a flat module list. With levels, learners can see the bigger arc:

```txt
Level 1: Web Foundations
Level 2: HTML and Accessibility Foundations
Level 3: CSS Fundamentals and Layout
Level 4+: planned future areas
```

Levels should show active implemented curriculum only. They are not a place to expose unfinished future modules as active work.

## Why Module Pages Must Feel Guided

After a learner clicks a module, they need a local path:

* why this module matters
* what lessons are included
* which lesson comes next
* how progress is going
* where the assessment checkpoint is
* what comes after

This keeps a module from feeling like a folder of pages.

## Why Dashboard Is Not Just Generic Stats

Dashboard should prioritize next action.

Generic stats like XP, streak, or total completed lessons can be useful, but they should not hide the primary question:

```txt
What should I do next?
```

The dashboard should surface the current track, level, module, lesson, and checkpoint using existing progress data.

## Active Curriculum Source Of Truth

Counts and navigation must use the active ordered curriculum source:

* `track.moduleIds`
* `getOrderedTrackModules(track)`
* `getOrderedModuleLessons(module)`
* `getOrderedTrackLessons(track)`

Do not count modules by filtering every module with the same `trackId`. That can accidentally include hidden, prototype, deleted, or future modules.

## Future Modules

Future modules should not appear as active until they have implemented content and are intentionally added to the track order.

Planned areas can be referenced as next direction, but they must be visually and semantically separate from active curriculum.

## Adding New Features

When adding a new page or feature, decide which role it serves:

* dashboard: next action and learning cockpit
* roadmap: high-level track overview
* track page: level-grouped curriculum journey
* module page: guided module path
* lesson page: concept learning
* practice page: building and validation workspace
* profile page: learner/account summary
* local milestone: real workflow outside FluentStack

If a feature does not clearly fit one of these roles, define its learning purpose before implementing it.
