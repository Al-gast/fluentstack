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

Use Bahasa Indonesia for user-facing learning and product guidance.

Keep common technical terms in English when they are natural for developers:

- semantic HTML
- component
- props
- state
- hook
- route
- layout
- accessibility
- responsive design
- API
- deployment
- debugging
- pull request
- daily update

Do not force awkward translations. For example, use "component" instead of "komponen" when the English term is more common in frontend learning.

For English for Tech Careers content, use bilingual structure:

- Explain the situation in Bahasa Indonesia.
- Show practical English examples.
- Add Indonesian meaning or context when useful.
- Ask learners to write their own version in English.

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
- Checklist for self-review.
- Manual completion language for MVP.

Instruction pattern:

```txt
Buat [output] dengan [technical requirement]. Gunakan preview untuk mengecek hasil sebelum menandai selesai.
```

Checklist pattern:

- "Navbar memiliki brand dan minimal dua link."
- "Layout berubah rapi di layar kecil."
- "Spacing antar item konsisten."

Avoid:

- "Buat tampilan yang bagus."
- "Gunakan kreativitasmu."
- "Pastikan semuanya sempurna."

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
- "Lanjut lesson"
- "Buka roadmap"
- "Buka module"
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

- "Progres lesson"
- "Skor terbaik"
- "Target lulus"
- "3 dari 5 blok wajib selesai"
- "Progres tersimpan di browser ini"
- "Progres tersimpan di akun kamu"

Loading:

- "Memuat..."
- "Memuat progres..."
- "Memuat sesi..."
- "Memuat editor..."

Errors:

- "Data tidak ditemukan."
- "Cek email dan password kamu."
- "Coba lagi beberapa saat lagi."

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

