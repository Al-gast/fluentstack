# docs/09_QA_CHECKLIST.md

# QA Checklist

## Purpose

Use this checklist before finishing a task, making a commit, or deploying FluentStack.

The goal is to catch obvious product, UI, technical, accessibility, and learning experience issues.

---

# 1. Product Direction Checklist

Check:

* Does the change support FluentStack as an interactive learning platform?
* Does it keep quiz and practice inside the learning flow?
* Does it avoid unrelated features?
* Does it preserve the MVP scope?
* Does it support future tracks beyond frontend and English?
* Does it avoid turning the app into a static blog?

If the answer is no, revise the implementation.

---

# 2. Learning Experience Checklist

Check:

* Does the user know what they are learning?
* Does the user know what to do next?
* Does the lesson flow feel clear?
* Are practice and quiz blocks connected to the lesson?
* Does progress update after meaningful activity?
* Are instructions clear enough?
* Are explanations useful after quiz or quick-check answers?
* Does the user receive feedback when they complete something?

Avoid:

* disconnected quiz pages
* unclear practice instructions
* progress based only on opening pages
* placeholder content pretending to be real lessons

---

# 3. UI Checklist

Check:

* Is the layout responsive?
* Is spacing consistent?
* Is the page readable?
* Are cards visually consistent?
* Are buttons clear?
* Are hover states visible?
* Are focus states visible?
* Are empty states handled?
* Are loading states handled?
* Is the dark mode comfortable?
* Does the design match the premium developer learning direction?

Important pages:

* Landing page
* Dashboard
* Roadmap
* Track page
* Module page
* Lesson page
* Profile page
* Login page
* Register page

---

# 4. Mobile Checklist

Check:

* Does navigation work on mobile?
* Do cards stack cleanly?
* Is lesson text readable?
* Are buttons easy to tap?
* Does the coding editor have a usable mobile layout?
* Does the quiz work on mobile?
* Does the writing textarea work on mobile?
* Does content avoid horizontal overflow?

---

# 5. Accessibility Checklist

Check:

* Semantic HTML is used.
* Buttons use button elements.
* Inputs have labels.
* Focus states are visible.
* Keyboard navigation works.
* Color contrast is readable.
* Quiz feedback does not rely only on color.
* Form errors are shown as text.
* Interactive elements have clear names.
* Motion does not make core tasks harder.
* Reduced motion is respected where practical.

Specific checks:

* Can a user tab through quiz answers?
* Can a user submit a quick check with keyboard?
* Can a user access auth forms with keyboard?
* Are coding practice buttons reachable by keyboard?

---

# 6. Content Checklist

Check:

* Lesson content is useful.
* Lesson content is not just filler text.
* Objectives are clear.
* Examples are relevant.
* Practice tasks match the lesson topic.
* Quiz questions test real understanding.
* Explanations teach something.
* English lessons focus on practical tech communication.
* Frontend lessons focus on practical production skills.
* No broken references between tracks, modules, lessons, quizzes, and challenges.

---

# 7. Technical Checklist

Check:

* TypeScript has no errors.
* ESLint has no major issues.
* App runs locally.
* No obvious console errors.
* No broken imports.
* No unused large dependencies.
* Components are reusable.
* Logic is not duplicated unnecessarily.
* UI components are not overloaded with business logic.
* Supabase is not called from random components.
* Environment variables are not hardcoded.
* Secrets are not committed.

---

# 8. Data and Progress Checklist

Check:

* Guest progress works with localStorage.
* Logged-in progress works with Supabase when implemented.
* Progress is based on meaningful activity.
* Completed blocks are tracked.
* Completed lessons are tracked.
* Quiz scores are saved.
* Challenge progress is saved.
* Writing drafts are saved.
* XP updates correctly.
* Streak does not increase just because the app opened.
* Refreshing the browser does not lose saved progress.

---

# 9. Supabase Checklist

Check:

* Environment variables exist.
* Supabase client is configured correctly.
* Auth works.
* Logout works.
* User-specific tables have Row Level Security enabled.
* Policies prevent users from reading other users' data.
* Service role key is not used in client-side code.
* Failed Supabase requests are handled gracefully.
* Guest mode still works if user is not logged in.

Required environment variables:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

# 10. Coding Playground Checklist

Check:

* Monaco loads correctly.
* Loading state exists while editor loads.
* HTML tab works.
* CSS tab works.
* JS tab works.
* Preview iframe works.
* Preview iframe is sandboxed.
* Reset code works.
* Show solution works.
* Checklist works.
* Mark as completed works.
* User code is not executed on the server.
* App does not crash if editor fails to load.

---

# 11. Quiz Checklist

Check:

* Multiple-choice questions work.
* True-false questions work.
* Fill-blank questions work.
* Code-output questions work.
* Score calculation is correct.
* Explanations show after answers.
* Passing score is respected.
* Retry works.
* Best score is saved.
* Quiz block completion updates lesson progress.
* Quiz feels part of the lesson, not disconnected.

---

# 12. Writing Practice Checklist

Check:

* Prompt is clear.
* Textarea works.
* Draft saves.
* Minimum character rule works when configured.
* Checklist is visible.
* Model answer can be revealed.
* Mark as completed works.
* Completion updates progress.
* No AI grading is added in MVP.

---

# 13. Auth Checklist

Check:

* Register page works.
* Login page works.
* Logout works.
* Auth state is reflected in navigation.
* Logged-in users can access dashboard.
* Guest users can still explore.
* Redirects are not confusing.
* Auth forms show errors clearly.

---

# 14. Deployment Checklist

Before deploying to Vercel:

* Production build passes.
* Supabase env variables are set in Vercel.
* No secrets are committed.
* Landing page works.
* Dashboard works.
* Roadmap works.
* Lesson page works.
* Login works.
* Register works.
* Guest progress works.
* Logged-in progress works when implemented.
* No obvious console errors in production.
* Links are not broken.

---

# 15. Review Checklist After Codex Changes

After Codex completes a task, check:

* Did it stay within scope?
* Did it modify unrelated files?
* Did it add unnecessary dependencies?
* Did it create duplicate components?
* Did it hardcode content that should be data-driven?
* Did it ignore docs?
* Did it break existing routes?
* Did it add fake placeholder features?
* Did it leave TODOs that block the flow?

If the diff is too large or messy, ask Codex to explain the changes before accepting them.

---

# 16. Commit Checklist

Before commit:

* App runs locally.
* Main route works.
* Changed feature works.
* No obvious console errors.
* TypeScript is okay.
* Commit message is clear.

Suggested commit style:

```txt
feat: add lesson block renderer
fix: handle missing lesson state
docs: update implementation phases
chore: configure supabase client
content: add html semantic lesson
```
