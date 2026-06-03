# FluentStack Copywriting and Content Voice

## Purpose

This guide defines how FluentStack should sound in product UI and learning content.

FluentStack is built for Indonesian learners who want practical technology skills. The writing should help users understand what to do, why it matters, and how to keep moving through the lesson flow.

The goal is not to sound clever. The goal is to be useful, clear, and human.

## Voice Principles

FluentStack should sound:

- Clear: say exactly what the user needs to know.
- Practical: connect explanations to real work and actual usage.
- Friendly: use natural Indonesian without sounding childish.
- Professional: avoid slang that feels unserious or overly casual.
- Direct: avoid long introductions before the main point.
- Specific: name the skill, action, or outcome instead of using vague claims.
- Calm: do not overhype progress, streaks, or achievements.

FluentStack should not sound:

- Generic, like a template landing page.
- Overly formal, like a government form or academic paper.
- Motivational in a vague way.
- Robotic or AI-generated.
- Too casual, sarcastic, or meme-like.

## Language Strategy

Use Bahasa Indonesia as the main experience language for user-facing learning and product guidance.

Keep common technical terms in English when they are natural for developers:

- Track
- Level
- Module
- Lesson
- Practice
- Dashboard
- Roadmap
- Progress
- Checkpoint
- Workspace
- Preview
- HTML
- CSS
- JavaScript
- selector
- property
- value
- semantic HTML
- component
- props
- state
- hook
- route
- layout
- validation
- render
- hydration
- server state
- client state
- accessibility
- responsive design
- API
- deployment
- debugging
- pull request
- daily update

Do not force awkward translations. For example, use "component" instead of "komponen" when the English term is more common in frontend learning.

Do not mix English and Indonesian randomly. Use English terms intentionally when learners will meet those terms in code, official docs, browser errors, workplace communication, or developer tools. In Indonesian UI contexts, keep the sentence structure Indonesian even when some technical terms stay English.

Good:

```txt
Buka practice workspace untuk mengecek preview dan cek otomatis.
```

Weak:

```txt
Open practice workspace untuk check preview dan validation result.
```

For English for Tech Careers content, use bilingual structure:

- Explain the situation in Bahasa Indonesia.
- Show practical English examples.
- Add Indonesian meaning or context when useful.
- Ask learners to write their own version in English.

## Stage-Based Voice

Frontend Engineering uses three curriculum stages:

* Beginner: Levels 1-4
* Intermediate: Levels 5-10
* Advanced: Levels 11-20

Stages guide explanation depth, copywriting tone, practice difficulty, and learner expectations. Stage labels do not change FluentStack's core voice: clear, calm, practical, supportive, and engineering-minded.

### Beginner

Beginner copy should assume low prior knowledge.

Use:

- slower explanation
- more context before practice
- simple examples before rules
- concrete terms before abstraction
- reassuring but honest tone
- small next steps
- fewer unexplained acronyms or tool names

Avoid:

- dumping jargon
- assuming the learner already knows common developer workflow
- making local setup feel like a prerequisite too early
- sounding childish or overly cute

Beginner does not mean childish. It means precise, patient, and safe.

### Intermediate

Intermediate copy can be more direct.

Use:

- shorter reminders for previously learned concepts
- trade-off language
- debugging and decision prompts
- code organization, state, data flow, reusable patterns, and quality standards
- realistic project constraints

Assume the learner understands basic HTML, CSS, and JavaScript patterns, but still explain new frameworks, APIs, or architecture terms before asking for practice.

### Advanced

Advanced copy should sound professional and practical.

Use:

- architecture reasoning
- performance, security, testing, accessibility, maintainability, and production trade-offs
- clear constraints and expected judgment
- direct language about risks and decisions

Avoid:

- academic phrasing for its own sake
- oversimplifying complex engineering decisions
- pretending there is one universal best practice

Advanced does not mean academic. It means higher judgment with clear explanations.

## Core Writing Rules

1. Lead with the user action or learning outcome.
2. Use concrete nouns and verbs.
3. Keep sentences short enough to read while studying.
4. Explain why a concept matters only when it helps the learner make a decision.
5. Avoid repeating the same phrase across pages.
6. Prefer "kamu" over "pengguna" in product UI and lesson content.
7. Use "progres" consistently, not "progress" in Indonesian UI copy.
8. Use "lesson", "module", and "track" consistently because they are product terms.
9. Do not shame users for wrong answers or low scores.
10. Avoid fake certainty such as "pasti bisa", "jaminan mahir", or "siap kerja dalam X hari".

## Tone by Product Area

Use page copy according to the page's role in the learning flow.

### Dashboard

Dashboard copy should help the learner know what to continue next.

It should answer:

- What should I do now?
- Which track, level, module, or lesson am I currently in?
- Is there a checkpoint or practice that needs attention?

Avoid turning the dashboard into generic statistics without a next action.

### Track Page

Track page copy should show the curriculum journey and level progression.

Use:

- active levels and modules
- where the learner is in the path
- why this sequence matters

Keep future levels visually and semantically separate from active curriculum.

### Module Page

Module page copy should show the guided path inside one module.

Use:

- module goal
- ordered lessons
- what each lesson prepares for
- final Uji Kompetensi checkpoint
- previous and next module context

### Lesson Page

Lesson page copy is reading and concept mode.

Use:

- what the concept is
- why it matters
- small example
- common mistake or decision rule
- summary
- next step

The lesson page should launch practice, not become the practice workspace.

### Practice Page

Practice page copy is build, check, and fix mode.

Instructions should stand alone inside the workspace because the learner may not keep the lesson page open.

Use:

- what to build
- what to change
- what checks will validate
- what to avoid
- how to finish or return to the lesson

### Profile Page

Profile page copy should explain learner identity, progress summary, preferences, and account or storage context.

Use:

- clear progress summaries
- storage mode language
- safe account guidance
- links back to Dashboard, Roadmap, Track, or current learning

Avoid claiming badges, cloud sync, certificates, or account features that are not implemented.

### Landing Page Copy

Landing copy should explain what FluentStack is and what users can do next.

Use:

- Clear promise.
- Specific learning mechanics.
- Calm confidence.
- Direct CTA.

Avoid:

- "Platform ini membantu..." repeated many times.
- Broad claims like "revolusioner", "terbaik", or "masa depan pembelajaran".
- Long abstract positioning.

Better patterns:

- "Belajar frontend dan English for Tech Careers lewat lesson, quiz, dan praktik langsung."
- "Mulai dari track pertama, lalu lanjutkan progres kamu di dashboard."
- "Coba lesson sebagai guest. Login nanti kalau ingin simpan progres lintas device."

### Dashboard Copy

Dashboard copy should answer: "What should I do now?"

Use:

- "Lanjutkan lesson terakhir."
- "Mulai dari Dasar Semantic HTML."
- "Progres tersimpan di browser ini."
- "Progres tersimpan di akun kamu."

Avoid:

- Empty motivation without direction.
- Too many CTAs with equal priority.
- Generic recommendations.

### Roadmap, Track, and Module Copy

Roadmap copy should make the learning path feel structured.

Use:

- What the track/module covers.
- Who it is for.
- What learners will practice.
- Estimated effort when useful.

Track description pattern:

```txt
Belajar [skill area] dari fondasi sampai praktik lewat [types of activities].
```

Module description pattern:

```txt
Pahami [concept] dan praktikkan lewat [activity or output].
```

Avoid:

- "Modul komprehensif yang dirancang untuk..."
- "Pelajari semua hal tentang..."
- "Tingkatkan kemampuan secara maksimal..."

### Lesson Explanations

Lesson explanations should teach one clear idea at a time.

Use:

- Short paragraphs.
- Practical examples.
- Direct explanation before analogy.
- Real web development context.

Lesson paragraph pattern:

```txt
[Concept] dipakai untuk [practical purpose]. Di project nyata, ini membantu [specific benefit].
```

Example:

```txt
Semantic HTML dipakai untuk memberi arti pada struktur halaman. Di project nyata, ini membantu browser, screen reader, dan developer lain memahami bagian halaman dengan lebih jelas.
```

Avoid:

- Starting every lesson with "Pada lesson ini, kita akan mempelajari..."
- Long definitions before context.
- Overexplaining basic terms in one paragraph.
- Abstract learning goals that do not connect to practice.

### Quiz Questions

Quiz questions should check understanding, not trick the learner.

Use:

- One concept per question.
- Clear options.
- Plausible wrong answers.
- Bahasa Indonesia with technical terms in English when natural.

Question pattern:

```txt
Kapan kamu sebaiknya memakai [concept]?
```

Better:

```txt
Kapan kamu sebaiknya memakai elemen <main>?
```

Avoid:

- "Manakah pernyataan berikut yang paling benar menurut standar..."
- Overly long scenario questions unless needed.
- Options that are obviously wrong or jokes.

### Quiz Explanations

Quiz explanations should teach after the answer.

Use:

- Explain why the correct answer works.
- Mention why the common wrong assumption is risky.
- Keep it supportive.

Good pattern:

```txt
Jawaban ini tepat karena <main> menandai konten utama halaman. Elemen ini sebaiknya tidak dipakai untuk sidebar, navbar, atau footer.
```

Avoid:

- "Salah, karena..."
- "Jawaban yang benar tentu saja..."
- Explanations that only repeat the answer.

### Uji Kompetensi and Assessment Tone

Uji Kompetensi should feel like a readiness checkpoint, not a scary exam.

Use:

- "Uji Kompetensi membantu mengecek apakah kamu siap lanjut."
- "Jika belum lulus, review lagi bagian..."
- "Kerjakan ulang setelah kamu memperbaiki latihan."
- "Checkpoint akhir module"

Avoid:

- blaming the learner
- making one failed attempt feel final
- trivia questions disconnected from module readiness
- overclaiming mastery after one passing score

If the learner is not ready, guide them toward the relevant lesson, practice, or concept instead of only showing failure.

### Quick Check Feedback

Quick check feedback should be short and non-intimidating.

Correct answer:

- "Benar. Elemen ini cocok karena..."
- "Tepat. Dalam kasus ini, ..."

Wrong answer:

- "Belum tepat. Coba perhatikan..."
- "Belum pas. Jawaban ini kurang cocok karena..."

Avoid:

- "Salah."
- "Kamu gagal."
- "Jawaban kamu tidak benar."

### Coding Practice Instructions

Coding practice copy should make the task concrete.

Use:

- What to build.
- Files or tabs involved: HTML, CSS, JS.
- What checks will validate.
- Checklist for self-review when validation is subjective.
- What to avoid, such as `!important` or fake local validation when relevant.

Instruction pattern:

```txt
Buat [output] dengan [technical requirement]. Gunakan preview dan cek otomatis untuk melihat bagian yang sudah lengkap.
```

Checklist pattern:

- "Navbar memiliki brand dan minimal dua link."
- "Layout berubah rapi di layar kecil."
- "Spacing antar item konsisten."

Avoid:

- "Buat tampilan yang bagus."
- "Gunakan kreativitasmu."
- "Pastikan semuanya sempurna."
- "Lihat editor di bawah" because the editor opens in the dedicated practice workspace.
- Claims that FluentStack can validate local device files, GitHub repositories, or deployment state when it cannot.

Practice instructions should still make sense when the learner opens `/practice/[challengeId]` directly.

### Writing Practice Prompts

Writing practice should feel like workplace communication practice.

Use:

- Realistic remote-work scenario.
- A clear role or situation.
- A practical English template.
- Minimum character requirement as a simple constraint.

Prompt pattern:

```txt
Bayangkan kamu sedang memberi update harian ke tim remote. Tulis 3-4 kalimat dalam English: what you worked on, what changed, and whether you have blockers.
```

Checklist pattern:

- "Mention what you finished."
- "Mention current progress."
- "Mention blockers clearly, if any."

Avoid:

- Abstract prompts like "Write about your learning journey."
- Grammar-heavy tasks without work context.
- Asking for long essays.

### Auth, Profile, and Progress Copy

Auth and progress copy should be clear and trust-building.

Use:

- "Progres tersimpan di browser ini."
- "Progres tersimpan di akun kamu."
- "Login untuk menyimpan progres lintas device."
- "Logout"
- "Masuk"
- "Daftar"

Avoid:

- Pressure-heavy copy.
- Fear-based copy about losing progress.
- Long explanations inside small UI states.

### Empty States

Empty states should tell users what is missing and what to do next.

Pattern:

```txt
Belum ada [data]. Mulai dari [next action].
```

Examples:

- "Belum ada lesson yang selesai. Mulai dari Dasar Semantic HTML."
- "Belum ada skor quiz tersimpan. Kerjakan quiz di dalam lesson untuk melihat skor terbaik."

Avoid:

- "Tidak ada data."
- "Data kosong."
- Empty states with no next step.

### Loading States

Loading copy should be short.

Use:

- "Memuat progres..."
- "Memuat lesson..."
- "Memuat sesi..."
- "Memuat editor..."

Avoid:

- "Mohon tunggu sebentar sementara kami..."
- Long loading sentences.
- Loading copy that promises a result.

### Success and Error States

Success copy should confirm what happened.

Use:

- "Draft tersimpan."
- "Lesson selesai."
- "Quiz selesai."
- "Code tersimpan."
- "Progres tersimpan di akun."

Error copy should explain the problem and next action when possible.

Use:

- "Login gagal. Cek email dan password kamu."
- "Data quiz tidak ditemukan."
- "Konfigurasi Supabase belum tersedia."

Avoid:

- "Oops!"
- "Something went wrong" for Indonesian UI.
- Technical stack traces in UI.

## Before and After Examples

### Landing Page

Before:

```txt
Platform ini membantu kamu meningkatkan kemampuan teknologi melalui pembelajaran interaktif yang menyenangkan dan efektif.
```

After:

```txt
Belajar skill teknologi lewat lesson singkat, quiz, coding practice, dan progres yang jelas.
```

### Dashboard

Before:

```txt
Selamat datang kembali di platform pembelajaran terbaik untuk perjalanan karier teknologi kamu.
```

After:

```txt
Lanjutkan lesson terakhir kamu atau mulai dari track pertama.
```

### Roadmap

Before:

```txt
Jelajahi berbagai materi yang telah dirancang secara komprehensif untuk membantu kamu berkembang.
```

After:

```txt
Pilih track, buka module, lalu kerjakan lesson sesuai urutan belajar.
```

### Lesson Explanation

Before:

```txt
Semantic HTML merupakan salah satu aspek yang sangat penting dalam pengembangan website modern karena dapat memberikan banyak manfaat.
```

After:

```txt
Semantic HTML memberi arti pada struktur halaman. Ini membantu browser, screen reader, dan developer lain memahami bagian halaman dengan lebih jelas.
```

### Quick Check Feedback

Before:

```txt
Jawaban kamu salah. Silakan coba lagi untuk mendapatkan hasil yang lebih baik.
```

After:

```txt
Belum tepat. Coba perhatikan fungsi elemen ini di struktur halaman.
```

### Quiz Explanation

Before:

```txt
Jawaban yang benar adalah B karena B merupakan jawaban yang paling sesuai.
```

After:

```txt
Jawaban ini tepat karena <main> menandai konten utama halaman, bukan navigasi atau footer.
```

### Coding Practice

Before:

```txt
Buatlah navbar yang menarik dan responsif menggunakan kemampuan terbaikmu.
```

After:

```txt
Buat navbar sederhana dengan brand, link navigasi, dan layout yang tetap rapi di layar kecil.
```

### Writing Practice

Before:

```txt
Tuliskan daily update yang baik dan profesional dalam bahasa Inggris.
```

After:

```txt
Tulis daily update untuk tim remote: apa yang sudah kamu kerjakan, progres saat ini, dan apakah ada blocker.
```

### Progress Copy

Before:

```txt
Kamu telah membuat kemajuan luar biasa dalam perjalanan belajar ini.
```

After:

```txt
3 dari 5 blok wajib selesai.
```

## Words and Patterns to Avoid

Avoid overly formal wording:

- "dalam rangka"
- "guna menunjang"
- "secara optimal"
- "merupakan salah satu aspek"
- "dapat memberikan manfaat"
- "dirancang secara komprehensif"

Avoid vague claims:

- "belajar lebih efektif"
- "meningkatkan skill secara maksimal"
- "materi berkualitas tinggi"
- "pengalaman belajar terbaik"
- "siap menghadapi masa depan"

Avoid excessive hype:

- "revolusioner"
- "luar biasa"
- "terbaik"
- "super mudah"
- "pasti mahir"
- "jadi expert dalam waktu singkat"

Avoid repeated phrases:

- "platform ini membantu..."
- "di era digital saat ini..."
- "seiring berkembangnya teknologi..."
- "pada kesempatan kali ini..."
- "mari kita mulai perjalanan..."

Avoid long abstract sentences:

- If a sentence has more than one idea, split it.
- If the sentence does not tell the learner what something means or what to do, rewrite it.

## Recommended Microcopy Patterns

Primary actions:

- "Mulai belajar"
- "Lanjutkan belajar"
- "Lanjutkan lesson"
- "Mulai latihan"
- "Buka roadmap"
- "Buka module"
- "Buka checkpoint"
- "Review module"
- "Kerjakan quiz"
- "Simpan draft"
- "Simpan code"

Secondary actions:

- "Lihat roadmap"
- "Lihat contoh jawaban"
- "Lihat solusi"
- "Coba lagi"
- "Ulang quiz"

Completion:

- "Selesai"
- "Lesson selesai"
- "Quiz selesai"
- "Draft tersimpan"
- "Code tersimpan"

Progress:

- "Level saat ini"
- "Module saat ini"
- "Checkpoint berikutnya"
- "Latihan yang perlu dilanjutkan"
- "Progress track"
- "Progres lesson"
- "Skor terbaik"
- "Target lulus"
- "3 dari 5 blok wajib selesai"
- "Progres tersimpan di browser ini"
- "Progres tersimpan di akun kamu"
- "Cek otomatis"
- "Uji Kompetensi"

Loading:

- "Memuat..."
- "Memuat progres..."
- "Memuat sesi..."
- "Memuat editor..."

Errors:

- "Data tidak ditemukan."
- "Cek email dan password kamu."
- "Coba lagi beberapa saat lagi."

Future UI copy passes should replace inconsistent English labels when they appear inside Indonesian UI contexts, for example:

- "Current level" -> "Level saat ini"
- "Current module" -> "Module saat ini"
- "Next checkpoint" -> "Checkpoint berikutnya"

Do not force this rewrite during unrelated feature work. Apply it during a focused copywriting polish pass.

## Content Writing Principles for Future Lessons

### Start from the learner's task

Every lesson should answer:

- What skill is this?
- When will the learner use it?
- What mistake should they avoid?
- What will they practice?

### Teach one concept per block

Do not use one text block to explain too many ideas. Split concepts into smaller blocks when needed.

### Use examples before theory gets too long

If a concept needs more than two paragraphs, add a code example, callout, quick check, or practice block.

### Make practice match the explanation

If the lesson explains Flexbox, the practice should use Flexbox. If the lesson explains daily updates, the writing prompt should ask for a daily update.

### Keep quizzes useful

A quiz should test whether the learner can apply the concept, not whether they memorized wording from the lesson.

### Explain wrong answers with respect

Wrong answers are part of learning. Feedback should guide the next attempt.

### Prefer realistic work context

Use scenarios from real projects:

- building a navbar
- reviewing semantic HTML
- writing a daily update
- explaining a bug
- preparing a pull request note
- checking responsive layout

### Keep summaries actionable

A summary should remind learners what they can now do.

Good summary points:

- "Gunakan <main> untuk konten utama halaman."
- "Pakai <nav> untuk kumpulan link navigasi."
- "Cek preview sebelum menandai coding practice selesai."

Weak summary points:

- "Semantic HTML sangat penting."
- "Teruslah belajar dan berkembang."
- "HTML adalah fondasi web."

## Review Checklist for New Copy

Before adding or polishing copy, check:

- Is the main action clear?
- Is the sentence specific?
- Does it avoid hype?
- Does it sound natural in Bahasa Indonesia?
- Are technical terms left in English when that is clearer?
- Does feedback help the learner recover or continue?
- Does the copy match the current product behavior?
- Does the copy avoid promising future features that do not exist yet?
- Does the copy match the learner's current stage?

## Red Flags

Revise copy when it has any of these problems:

- too academic for the task
- too casual, slang-heavy, sarcastic, or meme-like
- mixed English and Indonesian without a clear reason
- overclaiming mastery, job readiness, or production readiness
- blaming the learner for mistakes
- vague CTA, such as "Lanjut" without saying where or why
- instructions that only make sense in the old inline editor layout
- practice copy that claims fake validation for local files, GitHub, deployment, or device state
- advanced content written as if the learner is still in beginner onboarding
- beginner content that assumes too much prior knowledge
- generic success copy that hides the real progress state

## Related Standards

Use this guide together with:

- `docs/30_PRODUCT_DIRECTION.md` for product principles and what FluentStack should avoid.
- `docs/31_LEARNING_EXPERIENCE_ARCHITECTURE.md` for page roles and the lesson/practice split.
- `docs/32_PRACTICE_WORKSPACE_STANDARD.md` for dedicated practice workspace behavior.
- `docs/24_LESSON_QUALITY_RUBRIC.md` for content quality scoring and review gates.
