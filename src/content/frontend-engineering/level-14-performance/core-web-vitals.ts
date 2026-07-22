import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const coreWebVitalsModule: Module = {
  id: "core-web-vitals",
  trackId: "frontend-engineering",
  title: "Core Web Vitals",
  slug: "core-web-vitals",
  description:
    "Membaca sinyal loading, interaksi, dan stabilitas visual untuk memilih perbaikan performance yang benar-benar terasa oleh user.",
  order: 44,
  lessonIds: [
    "lcp",
    "inp",
    "cls",
    "lighthouse-field-vs-lab-data",
    "performance-budget",
    "core-web-vitals-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Core Web Vitals",
    "LCP",
    "INP",
    "CLS",
    "Lighthouse",
    "Performance Budget",
  ],
};

export const lcpLesson: Lesson = {
  id: "lcp",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Largest Contentful Paint (LCP)",
  slug: "lcp",
  description:
    "Membaca LCP sebagai sinyal kapan konten utama benar-benar terasa hadir bagi user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan pengalaman user yang direpresentasikan LCP",
    "Mengidentifikasi kandidat element LCP pada sebuah halaman",
    "Membaca sinyal LCP dari laporan tanpa langsung menebak solusi",
    "Menyusun langkah diagnosis awal yang berbasis bukti",
  ],
  skillTags: ["LCP", "Loading Performance", "Lighthouse", "Diagnosis"],
  blocks: [
    {
      id: "lcp-intro",
      type: "text",
      title: "User menunggu konten utama, bukan sekadar halaman mulai terbuka",
      content:
        "Largest Contentful Paint atau LCP membantu menjawab satu pertanyaan dari sudut pandang user: kapan konten terbesar yang relevan di viewport awal benar-benar terlihat? Pada halaman detail course, kandidatnya dapat berupa heading utama, hero image, atau kartu informasi besar. Nilai LCP yang lambat belum memberi resep tunggal. Ia adalah sinyal untuk mencari jalur kritis: response server, resource yang memblokir render, ukuran atau prioritas image, font, JavaScript, atau element utama yang baru muncul setelah kerja client. Gunakan target 2.5 detik sebagai panduan pengalaman baik, lalu cari penyebab pada halaman dan kondisi yang benar-benar diukur.",
    },
    {
      id: "lcp-report-example",
      type: "code-example",
      title: "Baca satu sinyal LCP sebelum mengubah kode",
      language: "json",
      code: `{
  "page": "/learn/frontend-engineering",
  "largest-contentful-paint": {
    "displayValue": "3.4 s",
    "candidateElement": "img.course-hero"
  },
  "notes": [
    "Hero image dimuat dari network.",
    "Heading sudah terlihat lebih awal."
  ]
}`,
      explanation:
        "Laporan ini memberi hipotesis awal: image hero adalah kandidat LCP dan waktunya melewati target panduan. Jangan langsung menambah teknik optimasi. Periksa dulu ukuran file, response image, prioritas request, apakah image berada di viewport awal, serta apakah hasil itu konsisten pada kondisi pengukuran yang relevan.",
    },
    {
      id: "lcp-writing-practice",
      type: "writing-practice",
      prompt:
        "Baca laporan LCP di atas. Tulis diagnosis awal untuk halaman tersebut: sebutkan kandidat element LCP, bukti yang sudah tersedia, dua hal yang perlu diperiksa sebelum mengubah kode, dan satu perbaikan yang ingin kamu uji terlebih dahulu. Jelaskan mengapa perbaikan itu relevan dengan jalur konten utama, bukan sekadar menaikkan skor.",
      placeholder:
        "Kandidat LCP adalah hero image karena laporan menyebut img.course-hero dan heading sudah muncul lebih awal. Saya akan memeriksa ukuran serta format image dan melihat kapan request image mulai berjalan. Saya juga akan memastikan image memang berada pada viewport awal. Perbaikan pertama yang ingin saya uji adalah menyediakan image dengan dimensi dan ukuran file yang sesuai area hero, lalu mengukur ulang pada kondisi yang sama.",
      minimumCharacters: 280,
      checklist: [
        "Menyebut kandidat element LCP dan bukti dari laporan.",
        "Memisahkan observasi dari dugaan penyebab.",
        "Menentukan pemeriksaan sebelum mengubah kode.",
        "Mengusulkan satu eksperimen yang terkait konten utama.",
      ],
      modelAnswer:
        "Kandidat LCP adalah img.course-hero karena laporan secara langsung menandainya, sedangkan heading terlihat lebih awal. Bukti saat ini hanya menunjukkan timing dan jenis element, bukan akar masalah. Saya akan memeriksa ukuran, format, serta waktu mulai request image, lalu memastikan image tersebut benar-benar terlihat di viewport awal. Saya juga akan melihat apakah ada resource penting yang menunda request-nya. Eksperimen pertama adalah memakai asset hero yang dimensinya sesuai tampilan dan lebih ringan, lalu menjalankan pengukuran ulang dengan kondisi yang sama. Tujuannya mempercepat konten utama yang ditunggu learner, bukan mengejar angka tanpa memahami jalurnya.",
    },
    {
      id: "lcp-quick-check",
      type: "quick-check",
      question:
        "Saat LCP lambat dan laporan menandai hero image, langkah awal yang paling tepat adalah",
      options: [
        "Memeriksa resource image dan jalur render sebelum memilih perbaikan.",
        "Langsung menghapus seluruh image dari halaman.",
        "Menambah semua library performance yang tersedia.",
        "Mengabaikannya karena heading sudah terlihat.",
      ],
      correctAnswer:
        "Memeriksa resource image dan jalur render sebelum memilih perbaikan.",
      explanation:
        "Kandidat LCP memberi arah diagnosis, bukan solusi otomatis. Periksa bukti seperti ukuran asset, response, timing request, dan posisi element sebelum mengubah implementation.",
    },
    {
      id: "lcp-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menyamakan LCP dengan seluruh waktu halaman selesai",
      content:
        "LCP bukan indikator bahwa semua request, analytics, atau bagian bawah halaman sudah selesai. Fokusnya adalah kapan konten terbesar yang bermakna di viewport awal terlihat. Karena itu, optimasi yang benar biasanya dimulai dari prioritas konten utama dan jalur resource yang membawanya.",
    },
    {
      id: "lcp-summary",
      type: "summary",
      points: [
        "LCP adalah sinyal kapan konten utama di viewport awal terlihat.",
        "Kandidat LCP dapat berupa image, heading, atau blok besar yang benar-benar user lihat.",
        "Nilai lambat adalah awal diagnosis, bukan perintah untuk memakai satu teknik tertentu.",
        "Pisahkan bukti laporan, hipotesis penyebab, dan eksperimen perbaikan.",
        "Berikutnya, INP memeriksa apakah aplikasi tetap merespons ketika user mulai berinteraksi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "lcp-intro",
      "lcp-report-example",
      "lcp-writing-practice",
      "lcp-quick-check",
      "lcp-callout",
      "lcp-summary",
    ],
  },
};

export const inpLesson: Lesson = {
  id: "inp",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Interaction to Next Paint (INP)",
  slug: "inp",
  description:
    "Mengenali interaksi lambat dari respons yang dirasakan user, bukan hanya dari handler click yang terlihat panjang.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan pengalaman user yang direpresentasikan INP",
    "Menghubungkan interaction lambat dengan kerja di main thread",
    "Membedakan observasi interaction dari asumsi implementasi",
    "Memilih langkah awal diagnosis di browser tools",
  ],
  skillTags: ["INP", "Interaction", "Main Thread", "DevTools"],
  blocks: [
    {
      id: "inp-intro",
      type: "text",
      title: "Click yang diterima belum tentu terasa cepat",
      content:
        "Interaction to Next Paint atau INP mengukur seberapa cepat halaman memberi umpan balik visual setelah user berinteraksi. Pada aplikasi belajar, user dapat menekan Simpan kode, membuka outline, mengetik di filter lesson, atau mengirim form. Bila browser sibuk menjalankan kerja JavaScript besar, layout, atau paint, user dapat merasa tombolnya tidak merespons walaupun event handler akhirnya selesai. INP menilai pengalaman interaksi nyata; target panduan untuk pengalaman baik adalah 200 milidetik atau kurang. Fokus diagnosisnya adalah interaction yang paling mahal dan pekerjaan yang menunda paint berikutnya, bukan sekadar mencari function terpanjang di codebase.",
    },
    {
      id: "inp-example",
      type: "code-example",
      title: "Satu action dapat memicu lebih dari satu jenis kerja",
      language: "ts",
      code: `saveButton.addEventListener("click", () => {
  setSaving(true);
  sortEveryLessonInMemory();
  buildLargeSearchIndex();
  persistDraftsSynchronously();
  setSaving(false);
});`,
      explanation:
        "Contoh ini bukan bukti bahwa seluruh baris pasti menjadi masalah. Ia menunjukkan hipotesis yang layak diuji: kerja sinkron besar dapat menahan main thread sebelum UI sempat menggambar state menyimpan. Rekam interaction yang terasa lambat di Performance panel, lalu lihat task, JavaScript, style, layout, dan paint yang benar-benar terjadi.",
    },
    {
      id: "inp-writing-practice",
      type: "writing-practice",
      prompt:
        "Bayangkan learner menekan Simpan kode dan tombol baru berubah beberapa saat kemudian. Tulis catatan diagnosis awal: jelaskan dampaknya bagi user, observasi yang ingin kamu rekam, dua kemungkinan kategori kerja yang akan diperiksa, dan satu perubahan kecil yang ingin kamu ukur setelahnya. Jangan menyatakan penyebab pasti sebelum ada rekaman.",
      placeholder:
        "Dari sisi learner, action terlihat tidak responsif sehingga ia dapat menekan tombol berulang kali atau mengira jawaban hilang. Saya akan merekam click Simpan di Performance panel dan melihat waktu sampai UI menggambar status menyimpan. Saya akan memeriksa kerja JavaScript sinkron yang besar dan kerja layout atau paint setelah state berubah. Setelah tahu bagian yang dominan, saya akan mencoba memisahkan kerja non-kritis dari feedback visual lalu membandingkan rekamannya.",
      minimumCharacters: 260,
      checklist: [
        "Menjelaskan dampak interaction lambat bagi user.",
        "Menyebut observasi atau alat diagnosis yang akan dipakai.",
        "Menyebut kategori kerja, bukan mengklaim akar masalah tanpa bukti.",
        "Menyebut satu eksperimen yang akan diukur ulang.",
      ],
      modelAnswer:
        "Learner dapat mengira tombol Simpan tidak bekerja dan mengulang click jika feedback visual terlambat. Saya akan merekam interaction itu melalui Performance panel lalu melihat jarak antara click, task di main thread, dan paint yang menampilkan status menyimpan. Saya akan memeriksa apakah ada JavaScript sinkron seperti transformasi data besar serta apakah layout atau paint setelah update state mahal. Setelah membaca rekaman, saya ingin menguji pemisahan kerja non-kritis dari feedback visual awal. Saya akan membandingkan rekaman sebelum dan sesudah perubahan, bukan menganggap perubahan itu berhasil hanya karena kode tampak lebih rapi.",
    },
    {
      id: "inp-quick-check",
      type: "quick-check",
      question:
        "Mengapa Lighthouse tidak dapat memberi nilai INP langsung seperti data interaksi user?",
      options: [
        "Lighthouse tidak menjalankan interaksi user nyata; ia memakai TBT sebagai proxy lab.",
        "INP hanya dapat dihitung dari ukuran image.",
        "Lighthouse tidak pernah mengukur JavaScript.",
        "INP sama dengan waktu halaman pertama dibuka.",
      ],
      correctAnswer:
        "Lighthouse tidak menjalankan interaksi user nyata; ia memakai TBT sebagai proxy lab.",
      explanation:
        "INP adalah field metric yang membutuhkan interaction user. Lighthouse tetap berguna untuk diagnosis lab, termasuk Total Blocking Time sebagai sinyal pendukung, tetapi bukan pengganti pengukuran INP dari pengguna nyata.",
    },
    {
      id: "inp-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menyelesaikan interaction lambat dengan timeout atau debounce acak",
      content:
        "Menunda kerja tanpa memahami urutannya dapat membuat feedback lebih membingungkan atau hanya memindahkan biaya ke waktu lain. Mulai dari interaction yang bisa dirasakan, rekam bukti, lalu pilih perubahan yang menjaga feedback penting tetap cepat dan behavior tetap benar.",
    },
    {
      id: "inp-summary",
      type: "summary",
      points: [
        "INP menghubungkan action user dengan paint umpan balik berikutnya.",
        "Main thread yang sibuk dapat membuat click, input, atau submit terasa terlambat.",
        "Rekaman performance membantu membedakan JavaScript, layout, dan paint yang benar-benar mahal.",
        "Lighthouse memberi proxy lab; data interaction nyata tetap penting untuk memahami INP.",
        "Berikutnya, CLS memeriksa apakah halaman tetap stabil saat konten dan resource datang.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "inp-intro",
      "inp-example",
      "inp-writing-practice",
      "inp-quick-check",
      "inp-callout",
      "inp-summary",
    ],
  },
};

export const clsLesson: Lesson = {
  id: "cls",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Cumulative Layout Shift (CLS)",
  slug: "cls",
  description:
    "Mencegah konten meloncat saat image, font, banner, atau data async masuk ke halaman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan dampak layout shift bagi user",
    "Mengenali penyebab umum CLS pada UI frontend",
    "Memilih cara menyediakan ruang untuk konten yang datang kemudian",
    "Membedakan perubahan layout akibat action user dari shift yang tidak diharapkan",
  ],
  skillTags: ["CLS", "Layout Stability", "Images", "Async UI"],
  blocks: [
    {
      id: "cls-intro",
      type: "text",
      title: "Halaman yang bergerak tanpa persetujuan user merusak kepercayaan",
      content:
        "Cumulative Layout Shift atau CLS mengukur stabilitas visual ketika element berpindah tanpa diduga. Bayangkan learner hendak menekan Mulai practice, lalu hero image tanpa dimensi selesai dimuat dan mendorong tombol ke bawah. Selain terasa tidak rapi, user dapat menekan control yang salah. Penyebab umum meliputi image atau embed tanpa ruang yang dicadangkan, font yang mengubah ukuran teks setelah dimuat, banner yang disisipkan di atas konten, dan data async yang menggantikan placeholder dengan tinggi sangat berbeda. Target panduan CLS adalah 0.1 atau kurang, tetapi tujuan engineering-nya adalah menjaga posisi action penting dapat diprediksi.",
    },
    {
      id: "cls-example",
      type: "code-example",
      title: "Cadangkan ruang sebelum image tersedia",
      language: "html",
      code: `<img
  src="/course-hero.webp"
  alt="Preview course Frontend Engineering"
  width="1200"
  height="675"
/>`,
      explanation:
        "Dimensi memberi browser informasi rasio area sebelum file image selesai dimuat. Dalam layout responsive, CSS masih dapat mengatur ukuran tampilannya. Intinya bukan angka ini saja, melainkan bahwa ruang visual untuk resource yang datang belakangan sudah direncanakan.",
    },
    {
      id: "cls-writing-practice",
      type: "writing-practice",
      prompt:
        "Sebuah halaman course menampilkan skeleton kecil, lalu setelah data datang judul dua baris, description panjang, dan CTA mendorong daftar lesson jauh ke bawah. Tulis diagnosis CLS singkat: jelaskan apa yang terasa bagi user, penyebab layout yang mungkin, bagaimana kamu akan menyesuaikan placeholder atau ruang layout, dan apa yang akan kamu ukur setelahnya.",
      placeholder:
        "User yang sedang membaca atau mengarahkan pointer ke daftar lesson akan kehilangan posisi karena area atas berubah tinggi. Saya akan membandingkan tinggi skeleton dengan bentuk konten yang paling sering muncul, terutama title, description, dan CTA. Saya akan menyediakan placeholder yang lebih mendekati struktur final atau menjaga area hero memiliki tinggi yang stabil. Setelah itu saya akan merekam halaman ketika data datang dan memeriksa apakah elemen di bawahnya masih berpindah.",
      minimumCharacters: 240,
      checklist: [
        "Menjelaskan dampak shift pada tugas user.",
        "Menyebut perubahan tinggi atau ruang layout sebagai hipotesis.",
        "Mengusulkan perbaikan berupa ruang yang dicadangkan atau struktur placeholder.",
        "Menyebut cara memeriksa hasil setelah perubahan.",
      ],
      modelAnswer:
        "Learner dapat kehilangan posisi baca atau hampir menekan item lain ketika daftar lesson terdorong ke bawah. Saya menduga skeleton tidak mewakili tinggi area hero final: title dapat menjadi dua baris, description lebih tinggi, dan CTA baru muncul setelah data tersedia. Saya akan membuat skeleton mengikuti struktur dan tinggi area hero yang lebih realistis, atau memberi min-height yang sesuai sambil tetap menjaga responsive layout. Sesudahnya saya akan merekam load halaman dan membandingkan layout shift ketika data masuk. Saya tidak akan hanya menambah tinggi secara sembarang tanpa mengecek apakah ruang itu benar-benar mencerminkan konten final.",
    },
    {
      id: "cls-quick-check",
      type: "quick-check",
      question:
        "Perubahan mana yang paling langsung membantu mencegah CLS pada image di viewport awal?",
      options: [
        "Menyediakan dimensi atau rasio ruang sebelum image selesai dimuat.",
        "Menyembunyikan semua image setelah halaman selesai.",
        "Menambah event listener pada setiap image.",
        "Mengubah semua teks menjadi satu baris.",
      ],
      correctAnswer:
        "Menyediakan dimensi atau rasio ruang sebelum image selesai dimuat.",
      explanation:
        "Browser dapat menyusun layout lebih stabil ketika ia mengetahui ruang image sejak awal. Pendekatan ini juga lebih baik daripada menunggu image datang lalu memperbaiki posisi setelah konten sudah bergerak.",
    },
    {
      id: "cls-callout",
      type: "callout",
      variant: "important",
      title: "Tidak semua perubahan layout adalah masalah CLS",
      content:
        "Perubahan yang memang dipicu action user, seperti membuka accordion setelah click, dapat diharapkan bila feedbacknya jelas. Fokus diagnosis CLS adalah perubahan yang mengejutkan user saat halaman memuat atau ketika resource masuk tanpa interaction yang menjelaskannya.",
    },
    {
      id: "cls-summary",
      type: "summary",
      points: [
        "CLS menangkap perpindahan layout yang tidak diharapkan.",
        "Image, embed, font, banner, dan content async dapat menyebabkan shift bila ruangnya tidak dipersiapkan.",
        "Cadangkan ruang berdasarkan struktur final yang realistis.",
        "Nilai stabilitas dari sudut action dan posisi baca user, bukan dari angka semata.",
        "Berikutnya, Lighthouse dan data lapangan akan membantu memilih bukti yang tepat untuk diagnosis.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "cls-intro",
      "cls-example",
      "cls-writing-practice",
      "cls-quick-check",
      "cls-callout",
      "cls-summary",
    ],
  },
};

export const lighthouseFieldVsLabDataLesson: Lesson = {
  id: "lighthouse-field-vs-lab-data",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Lighthouse, Lab Data, dan Field Data",
  slug: "lighthouse-field-vs-lab-data",
  description:
    "Memakai Lighthouse untuk diagnosis yang dapat diulang tanpa menganggapnya sebagai seluruh pengalaman pengguna.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan tujuan lab data dan field data",
    "Membaca Lighthouse sebagai input diagnosis",
    "Menjelaskan mengapa hasil lab dan field dapat berbeda",
    "Menentukan langkah investigasi ketika sinyal tidak selaras",
  ],
  skillTags: ["Lighthouse", "Field Data", "Lab Data", "Performance Diagnosis"],
  blocks: [
    {
      id: "lighthouse-field-vs-lab-data-intro",
      type: "text",
      title: "Gunakan dua jenis bukti untuk dua pertanyaan yang berbeda",
      content:
        "Lab data berasal dari kondisi pengujian yang dikendalikan. Lighthouse berguna untuk menjalankan audit berulang saat development, menemukan opportunity, dan memeriksa regression sebelum release. Field data datang dari pengalaman user nyata dengan device, network, cache, dan interaction yang beragam. Karena itu, nilai keduanya dapat berbeda tanpa berarti salah satu harus diabaikan. Gunakan field data untuk memahami pengalaman yang benar-benar terjadi secara luas, lalu gunakan lab untuk mereproduksi, mempersempit, dan menguji perbaikan. Lighthouse juga tidak mensimulasikan interaction nyata, sehingga Total Blocking Time adalah proxy lab untuk problem interactivity, bukan nilai INP pengganti.",
    },
    {
      id: "lighthouse-field-vs-lab-data-example",
      type: "code-example",
      title: "Contoh laporan yang meminta investigasi, bukan kepanikan",
      language: "json",
      code: `{
  "field": {
    "LCP p75 mobile": "3.1 s",
    "INP p75 mobile": "170 ms",
    "CLS p75 mobile": "0.04"
  },
  "lighthouse": {
    "LCP": "2.0 s",
    "TBT": "180 ms",
    "CLS": "0.02"
  }
}`,
      explanation:
        "Field LCP mobile lebih lambat dari audit lab ini. Langkah yang tepat bukan mengumumkan Lighthouse salah. Periksa segment device dan network, route yang diukur, cache, waktu pengambilan data, kandidat LCP, serta apakah kondisi audit cukup mewakili jalur user. Lab dapat menjadi tempat menguji hipotesis setelah konteks tersebut jelas.",
    },
    {
      id: "lighthouse-field-vs-lab-data-writing-practice",
      type: "writing-practice",
      prompt:
        "Analisis laporan di atas dalam sebuah investigation note. Jelaskan metrik mana yang perlu diprioritaskan, mengapa field dan lab dapat berbeda dalam kasus ini, tiga pertanyaan yang akan kamu jawab sebelum mengubah code, dan bagaimana Lighthouse akan kamu pakai setelahnya. Jangan menyimpulkan bahwa score Lighthouse satu kali adalah release decision tunggal.",
      placeholder:
        "Saya akan memprioritaskan LCP mobile dari field data karena ia menunjukkan user nyata masih menunggu konten utama lebih lama. Hasil lab dapat lebih cepat karena device dan network simulasi tidak sama dengan pengguna, atau audit tidak memuat kondisi route dan cache yang sama. Sebelum mengubah code saya akan memeriksa kandidat LCP, segment device/network, dan resource yang masuk pada page load nyata. Setelah punya hipotesis, saya menjalankan Lighthouse pada kondisi yang konsisten untuk membandingkan eksperimen sebelum dan sesudah.",
      minimumCharacters: 340,
      checklist: [
        "Memilih prioritas berdasarkan sinyal user dan menjelaskan alasannya.",
        "Menjelaskan perbedaan peran field serta lab data.",
        "Menyusun pertanyaan investigasi yang konkret.",
        "Menempatkan Lighthouse sebagai alat diagnosis atau verifikasi eksperimen.",
      ],
      modelAnswer:
        "Saya akan memprioritaskan LCP mobile dari field data karena p75 user nyata menunjukkan konten utama tetap lambat pada kondisi yang paling relevan bagi banyak learner. Audit Lighthouse yang lebih baik tidak membatalkan sinyal itu; environment lab, network, device, cache, serta route yang diuji dapat berbeda dari populasi user. Sebelum mengubah code saya akan mencari kandidat LCP di route tersebut, memeriksa segment device dan jaringan yang memburuk, lalu melihat request resource utama serta apakah route memakai data atau image berbeda. Sesudah ada hipotesis, saya akan memakai Lighthouse dalam kondisi yang konsisten untuk mencoba satu perbaikan dan membandingkan hasilnya. Field data tetap dipantau untuk melihat apakah perbaikan benar-benar terasa di penggunaan nyata.",
    },
    {
      id: "lighthouse-field-vs-lab-data-quick-check",
      type: "quick-check",
      question:
        "Pernyataan yang paling tepat tentang lab dan field data adalah",
      options: [
        "Field menunjukkan pengalaman nyata; lab membantu diagnosis dan eksperimen yang dapat diulang.",
        "Lighthouse satu kali selalu lebih penting daripada semua pengalaman user.",
        "Field data tidak berguna karena device user berbeda-beda.",
        "Lab dan field harus selalu menghasilkan angka yang sama.",
      ],
      correctAnswer:
        "Field menunjukkan pengalaman nyata; lab membantu diagnosis dan eksperimen yang dapat diulang.",
      explanation:
        "Dua sumber ini saling melengkapi. Perbedaan kondisi user adalah alasan field data bernilai, sedangkan kondisi yang dikendalikan membuat lab data efektif untuk diagnosis serta membandingkan eksperimen.",
    },
    {
      id: "lighthouse-field-vs-lab-data-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan mengubah banyak hal dari satu audit",
      content:
        "Bila setiap recommendation Lighthouse diubah sekaligus, kamu kehilangan hubungan antara perubahan dan hasil. Pilih satu masalah yang relevan dengan user, catat baseline dan kondisi audit, lakukan perubahan kecil, lalu ukur ulang. Perubahan yang tidak dibuktikan dapat menambah complexity tanpa memperbaiki pengalaman.",
    },
    {
      id: "lighthouse-field-vs-lab-data-summary",
      type: "summary",
      points: [
        "Field data menangkap kondisi user nyata; lab data memberi lingkungan diagnosis yang dapat diulang.",
        "Lighthouse adalah alat audit dan eksperimen, bukan satu-satunya keputusan release.",
        "INP membutuhkan interaction nyata; TBT adalah sinyal lab pendukung.",
        "Perbedaan hasil perlu dibaca melalui route, device, network, cache, dan waktu data.",
        "Berikutnya, performance budget mengubah sinyal ini menjadi keputusan tim yang dapat diprioritaskan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "lighthouse-field-vs-lab-data-intro",
      "lighthouse-field-vs-lab-data-example",
      "lighthouse-field-vs-lab-data-writing-practice",
      "lighthouse-field-vs-lab-data-quick-check",
      "lighthouse-field-vs-lab-data-callout",
      "lighthouse-field-vs-lab-data-summary",
    ],
  },
};

export const performanceBudgetLesson: Lesson = {
  id: "performance-budget",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Performance Budget",
  slug: "performance-budget",
  description:
    "Menerjemahkan sinyal performance menjadi batas dan keputusan produk yang bisa ditinjau bersama tim.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan peran performance budget dalam keputusan frontend",
    "Menyusun budget yang berhubungan dengan user journey",
    "Membedakan target, baseline, dan guardrail release",
    "Memilih respons ketika budget terlewati tanpa memblokir kerja secara buta",
  ],
  skillTags: ["Performance Budget", "Product Quality", "Prioritization", "Regression"],
  blocks: [
    {
      id: "performance-budget-intro",
      type: "text",
      title: "Budget membuat performance menjadi keputusan yang terlihat",
      content:
        "Performance budget adalah batas atau target yang disepakati untuk menjaga biaya pengalaman user tetap terkendali saat product bertambah. Budget bukan daftar angka universal dan bukan alat menghukum developer. Ia harus terkait journey, perangkat, serta risiko produk. Misalnya halaman track mobile perlu menjaga LCP field p75 dalam target, CTA utama tidak boleh terdorong layout shift, dan perubahan route baru perlu diperiksa bila JavaScript atau image cost naik tajam. Budget yang berguna juga punya owner dan respons: kapan tim menelusuri regression, kapan trade-off dicatat, dan kapan perubahan perlu dipecah atau ditunda.",
    },
    {
      id: "performance-budget-example",
      type: "code-example",
      title: "Budget ringkas untuk journey membuka track",
      language: "json",
      code: `{
  "journey": "Learner opens a track on mobile",
  "guardrails": [
    "Monitor field LCP p75 against the agreed target.",
    "Keep field INP p75 responsive for primary actions.",
    "Keep field CLS p75 stable around primary CTAs."
  ],
  "releaseCheck": [
    "Compare the route before and after a large asset or dependency change.",
    "Record the trade-off and follow-up owner when a guardrail is exceeded."
  ]
}`,
      explanation:
        "Contoh ini sengaja tidak memperlakukan angka sebagai mantra. Team perlu melengkapi target yang sesuai baseline dan user journey mereka. Yang penting, budget menyebut pengalaman yang dijaga, sinyal yang dipantau, titik perubahan berisiko, serta tindakan ketika ada regression.",
    },
    {
      id: "performance-budget-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis performance budget mini untuk journey learner membuka lesson di mobile. Sertakan: user journey, tiga guardrail yang mengaitkan LCP, INP, atau CLS dengan pengalaman user, satu jenis perubahan yang harus dibandingkan sebelum dan sesudah, siapa yang meninjau hasil, dan respons bila satu guardrail terlewati. Budget boleh sederhana, tetapi harus bisa ditindaklanjuti.",
      placeholder:
        "Journey: learner membuka lesson dari track pada mobile. Guardrail: konten lesson utama harus muncul dalam target LCP yang disepakati; action Mulai practice harus tetap memberi feedback responsif; outline dan CTA tidak boleh meloncat ketika image atau data hadir. Check: bandingkan route sebelum dan sesudah menambah hero media atau dependency besar. Owner: frontend engineer dan reviewer PR melihat hasil audit serta sinyal field yang tersedia. Response: bila guardrail LCP terlewati, catat kandidat penyebab, pecah perubahan bila perlu, lalu ukur ulang setelah satu perbaikan.",
      minimumCharacters: 360,
      checklist: [
        "Menyebut journey dan kondisi user yang dijaga.",
        "Menghubungkan guardrail ke LCP, INP, atau CLS secara bermakna.",
        "Menyebut perubahan berisiko dan cara membandingkannya.",
        "Menentukan owner serta respons ketika ada regression.",
      ],
      modelAnswer:
        "Journey yang saya jaga adalah learner membuka lesson dari halaman track pada mobile. Guardrail pertama: konten utama lesson perlu mencapai target LCP tim agar learner tidak menunggu hero atau heading terlalu lama. Kedua: action Mulai practice harus memberi feedback responsif agar learner tidak menekan tombol berulang kali. Ketiga: outline dan CTA harus tetap stabil ketika data atau media masuk sehingga learner tidak salah click. Sebelum dan sesudah menambah image hero, embed, atau dependency besar, saya membandingkan audit route pada kondisi yang sama dan melihat sinyal field yang tersedia. Frontend engineer menyiapkan catatan, lalu reviewer PR meninjau trade-off. Bila satu guardrail terlewati, kami catat kandidat penyebab, memilih satu eksperimen perbaikan, dan mengukur ulang sebelum menerima kenaikan biaya tanpa alasan.",
    },
    {
      id: "performance-budget-quick-check",
      type: "quick-check",
      question:
        "Komponen penting dari performance budget yang sehat adalah",
      options: [
        "Journey user, guardrail yang jelas, dan respons ketika ada regression.",
        "Satu score Lighthouse sempurna untuk semua halaman.",
        "Larangan memakai image atau JavaScript di seluruh product.",
        "Target angka tanpa pemilik atau langkah tindak lanjut.",
      ],
      correctAnswer:
        "Journey user, guardrail yang jelas, dan respons ketika ada regression.",
      explanation:
        "Budget membantu tim mengambil keputusan saat product berubah. Karena itu ia perlu mengaitkan sinyal dengan pengalaman user dan menjelaskan apa yang dilakukan ketika biaya atau regression terdeteksi.",
    },
    {
      id: "performance-budget-callout",
      type: "callout",
      variant: "tip",
      title: "Mulai dari guardrail yang dapat dijaga",
      content:
        "Budget pertama tidak perlu mencakup semua route, semua device, dan setiap resource. Mulai dari satu journey bernilai seperti membuka track atau lesson di mobile. Setelah baseline, ownership, dan review loop-nya berjalan, budget dapat diperluas berdasarkan bukti.",
    },
    {
      id: "performance-budget-summary",
      type: "summary",
      points: [
        "Performance budget mengubah perhatian performance menjadi keputusan tim yang eksplisit.",
        "Budget yang baik terkait journey, kondisi user, guardrail, owner, dan respons regression.",
        "Jangan memakai score tunggal atau target tanpa konteks sebagai pengganti keputusan engineering.",
        "Bandingkan perubahan berisiko dengan baseline yang dicatat.",
        "Selanjutnya, Uji Kompetensi menggabungkan pembacaan metric, laporan, dan budget menjadi checkpoint kesiapan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "performance-budget-intro",
      "performance-budget-example",
      "performance-budget-writing-practice",
      "performance-budget-quick-check",
      "performance-budget-callout",
      "performance-budget-summary",
    ],
  },
};

export const coreWebVitalsAssessmentLesson: Lesson = {
  id: "core-web-vitals-assessment",
  trackId: "frontend-engineering",
  moduleId: "core-web-vitals",
  title: "Uji Kompetensi Core Web Vitals",
  slug: "core-web-vitals-assessment",
  description:
    "Checkpoint untuk membaca sinyal performance, memilih diagnosis yang terukur, dan mengusulkan perbaikan yang menjaga pengalaman user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Membedakan peran LCP, INP, dan CLS",
    "Membaca perbedaan lab serta field data secara tepat",
    "Menyusun investigation note berbasis laporan",
    "Membuat performance budget awal yang dapat ditindaklanjuti",
  ],
  skillTags: [
    "Core Web Vitals",
    "Performance Diagnosis",
    "Lighthouse",
    "Performance Budget",
    "Readiness Checkpoint",
  ],
  blocks: [
    {
      id: "core-web-vitals-assessment-recap",
      type: "text",
      title: "Checkpoint: ukur pengalaman, lalu pilih perubahan yang dapat dibuktikan",
      content:
        "LCP membantu membaca kapan konten utama terlihat, INP membaca respons setelah interaction, dan CLS membaca stabilitas layout. Ketiganya adalah sinyal pengalaman user yang berbeda. Field data memperlihatkan kondisi user nyata, sedangkan Lighthouse serta browser tools membantu mengulang diagnosis dan membandingkan eksperimen. Cara kerja yang matang bukan mengejar score sempurna: tentukan journey, baca bukti, nyatakan hipotesis, lakukan satu perubahan yang relevan, ukur ulang, dan catat trade-off. Performance budget menjaga agar keputusan ini tetap terlihat ketika feature, asset, serta dependency bertambah.",
    },
    {
      id: "core-web-vitals-assessment-quiz",
      type: "quiz",
      quizId: "core-web-vitals-assessment-quiz",
    },
    {
      id: "core-web-vitals-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis performance investigation note untuk halaman lesson mobile dengan kondisi berikut: field LCP p75 adalah 3.3 s dan laporan menandai hero image sebagai kandidat LCP; user melaporkan tombol Simpan terasa terlambat; ketika data lesson datang, CTA bergeser ke bawah. Jelaskan metrik dan pengalaman user yang diprioritaskan, bukti serta hipotesis yang kamu pisahkan, langkah diagnosis untuk LCP, INP, dan CLS, satu eksperimen perbaikan yang akan diukur ulang, peran Lighthouse dibanding field data, dan satu performance budget guardrail untuk journey ini.",
      placeholder:
        "Saya memprioritaskan LCP mobile karena konten utama terlambat hadir, tetapi laporan tombol Simpan dan CTA yang bergeser juga berarti INP serta CLS perlu ditelusuri. Bukti LCP adalah field p75 3.3 s dan kandidat hero image; saya belum menganggap ukuran image sebagai penyebab pasti. Saya akan memeriksa request, ukuran, format, dan posisi hero image. Untuk tombol, saya merekam interaction di Performance panel dan melihat kerja main thread sampai paint feedback. Untuk CTA, saya memeriksa perubahan tinggi area hero dan placeholder saat data masuk. Saya menguji satu perbaikan pada asset hero, kemudian mengukur ulang lab pada kondisi sama dan memantau field. Guardrail saya: CTA utama harus stabil dan konten lesson utama pada mobile harus memenuhi target LCP tim yang disepakati.",
      minimumCharacters: 620,
      checklist: [
        "Membedakan LCP, INP, dan CLS dari pengalaman user yang dilaporkan.",
        "Memisahkan bukti, hipotesis, dan langkah diagnosis.",
        "Menjelaskan penggunaan Lighthouse serta field data secara tepat.",
        "Menyebut eksperimen yang akan diukur ulang, bukan solusi acak.",
        "Menyertakan guardrail performance budget untuk journey mobile.",
      ],
      modelAnswer:
        "Saya memprioritaskan LCP mobile karena field p75 3.3 detik menunjukkan banyak learner menunggu konten utama lebih lama dari target pengalaman yang diinginkan. Namun, laporan tombol Simpan yang terasa terlambat dan CTA yang bergeser menunjukkan INP serta CLS juga memengaruhi journey. Bukti LCP saat ini adalah metrik field dan kandidat hero image; saya belum menyimpulkan ukuran file adalah akar masalah. Saya akan memeriksa kapan request hero dimulai, ukuran serta format asset, prioritasnya, dan apakah image benar-benar berada di viewport awal. Untuk interaction Simpan, saya merekam click dengan Performance panel lalu melihat task JavaScript, layout, dan paint hingga feedback visual muncul. Untuk CTA yang bergerak, saya membandingkan tinggi placeholder dengan konten final dan mencari media atau data yang masuk tanpa ruang dicadangkan. Saya memilih satu eksperimen pertama: menyediakan hero asset yang sesuai area tampilan dan mengukur ulang route pada kondisi lab yang sama. Lighthouse membantu membandingkan eksperimen serta memberi diagnostic detail, tetapi field data tetap menunjukkan dampak pada user nyata. Guardrail budget saya: pada journey membuka lesson mobile, konten utama harus memenuhi target LCP tim dan CTA utama tidak boleh bergeser saat lesson data atau media hadir. Jika guardrail terlewati, frontend engineer mencatat bukti dan owner follow-up sebelum kenaikan biaya diterima.",
    },
    {
      id: "core-web-vitals-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan dokumentasi untuk mengukur satu halaman yang benar-benar kamu miliki",
      description:
        "Pilih satu route local atau deployed yang dapat kamu buka, lalu gunakan docs sesuai pertanyaan diagnosis. Mulai dari satu journey, satu baseline, dan satu perubahan yang dapat dibandingkan. Jangan mengklaim FluentStack menjalankan Lighthouse atau membaca field data project-mu.",
      links: [
        {
          source: "web.dev",
          title: "Web Vitals",
          url: "https://web.dev/articles/vitals",
          focus: [
            "Peran LCP, INP, dan CLS terhadap loading, interactivity, serta visual stability.",
            "Perbedaan pengukuran field dan lab.",
            "Mengapa target metrik perlu dibaca pada konteks user nyata.",
          ],
          ignoreForNow: [
            "Implementasi real-user monitoring dan analytics pipeline penuh.",
            "Optimasi infra tingkat lanjut untuk semua metric sekaligus.",
          ],
        },
        {
          source: "Chrome for Developers",
          title: "Introduction to Lighthouse",
          url: "https://developer.chrome.com/docs/lighthouse/overview/",
          focus: [
            "Menjalankan audit pada satu halaman dan membaca report dasar.",
            "Mencatat kondisi audit sebelum membandingkan hasil.",
            "Menggunakan opportunities sebagai arah investigasi, bukan checklist buta.",
          ],
          ignoreForNow: [
            "Mengejar score sempurna sebagai tujuan release.",
            "Mengubah seluruh recommendation dalam satu perubahan besar.",
          ],
        },
        {
          source: "Chrome DevTools",
          title: "Analyze runtime performance",
          url: "https://developer.chrome.com/docs/devtools/performance/",
          focus: [
            "Merekam satu interaction yang terasa lambat.",
            "Membaca main thread, task, rendering, serta paint di sekitar interaction.",
            "Membandingkan rekaman sebelum dan sesudah satu eksperimen.",
          ],
          ignoreForNow: [
            "Trace analysis lanjutan sebelum satu recording dasar dapat dibaca.",
            "Optimasi mikro tanpa interaction user yang jelas.",
          ],
        },
      ],
      followUpAction:
        "Pada Local React App atau Local Next.js App, pilih satu route, jalankan Lighthouse atau buka DevTools Performance panel, catat baseline serta satu kandidat masalah, lakukan satu perubahan kecil bila relevan, lalu bandingkan hasil pada kondisi yang sama. Tulis apa yang belum kamu ketahui; jangan tandai milestone hanya karena sebuah score terlihat baik.",
    },
    {
      id: "core-web-vitals-assessment-summary",
      type: "summary",
      points: [
        "LCP, INP, dan CLS memeriksa tiga pengalaman berbeda: konten utama hadir, interaction merespons, dan layout tetap stabil.",
        "Mulai dari journey dan bukti; jangan mengoptimasi resource atau code secara acak.",
        "Field data memperlihatkan pengalaman user nyata, sedangkan Lighthouse serta DevTools membantu diagnosis yang dapat diulang.",
        "Performance budget memberi guardrail, owner, dan respons ketika biaya pengalaman meningkat.",
        "Kamu siap melanjutkan ke Asset and Bundle Optimization untuk mengurangi biaya resource berdasarkan bukti dari route dan user journey.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "core-web-vitals-assessment-recap",
      "core-web-vitals-assessment-quiz",
      "core-web-vitals-assessment-writing-practice",
      "core-web-vitals-assessment-documentation-bridge",
      "core-web-vitals-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const coreWebVitalsAssessmentQuiz: Quiz = {
  id: "core-web-vitals-assessment-quiz",
  lessonId: "core-web-vitals-assessment",
  title: "Uji Kompetensi Core Web Vitals",
  passingScore: 70,
  questions: [
    {
      id: "core-web-vitals-lcp",
      type: "multiple-choice",
      question:
        "Manakah pertanyaan yang paling tepat dijawab oleh LCP pada halaman lesson?",
      options: [
        "Kapan konten utama di viewport awal terlihat bagi learner.",
        "Berapa banyak click yang dilakukan learner pada tombol Simpan.",
        "Apakah semua request halaman sudah selesai.",
        "Apakah URL route memakai slug yang benar.",
      ],
      correctAnswer:
        "Kapan konten utama di viewport awal terlihat bagi learner.",
      explanation:
        "LCP berfokus pada waktu render konten terbesar yang relevan di viewport awal, bukan seluruh waktu halaman selesai atau jumlah interaction user.",
    },
    {
      id: "core-web-vitals-inp",
      type: "multiple-choice",
      question:
        "Saat tombol terasa tidak responsif, bukti awal yang paling berguna untuk diagnosis INP adalah",
      options: [
        "Recording interaction yang memperlihatkan kerja sampai paint feedback berikutnya.",
        "Jumlah file CSS dalam repository.",
        "Score color palette halaman.",
        "Nama component yang paling panjang.",
      ],
      correctAnswer:
        "Recording interaction yang memperlihatkan kerja sampai paint feedback berikutnya.",
      explanation:
        "INP terkait pengalaman setelah user berinteraksi. Recording membantu membaca task JavaScript, rendering, dan paint yang benar-benar terjadi di sekitar action itu.",
    },
    {
      id: "core-web-vitals-cls",
      type: "multiple-choice",
      question:
        "Perubahan mana yang paling mungkin mengurangi CLS pada hero image?",
      options: [
        "Mencadangkan ruang lewat dimensi atau rasio image sebelum file selesai dimuat.",
        "Membuat image dimuat setelah semua interaction user selesai.",
        "Menghapus semua text dari area hero.",
        "Mengganti setiap button menjadi link.",
      ],
      correctAnswer:
        "Mencadangkan ruang lewat dimensi atau rasio image sebelum file selesai dimuat.",
      explanation:
        "Ruang yang diketahui sejak awal membantu browser menyusun layout stabil dan mencegah konten di bawah hero terdorong ketika image hadir.",
    },
    {
      id: "core-web-vitals-lab-field",
      type: "multiple-choice",
      question:
        "Bagaimana menggunakan Lighthouse ketika field LCP mobile lebih lambat daripada hasil audit lab?",
      options: [
        "Gunakan field untuk memahami dampak user dan lab untuk mempersempit serta menguji hipotesis.",
        "Abaikan field karena Lighthouse selalu menentukan pengalaman user.",
        "Abaikan Lighthouse karena semua audit lab tidak berguna.",
        "Ubah semua recommendation audit sekaligus.",
      ],
      correctAnswer:
        "Gunakan field untuk memahami dampak user dan lab untuk mempersempit serta menguji hipotesis.",
      explanation:
        "Kedua jenis data melayani tujuan berbeda. Perbedaan device, network, cache, route, dan interaction dapat menjelaskan perbedaan hasil.",
    },
    {
      id: "core-web-vitals-budget",
      type: "multiple-choice",
      question:
        "Apa yang membuat performance budget berguna bagi tim?",
      options: [
        "Ia menghubungkan journey user, guardrail, owner, dan respons terhadap regression.",
        "Ia menjamin score sempurna untuk setiap route.",
        "Ia menghapus kebutuhan mengukur performance setelah release.",
        "Ia hanya berisi satu angka tanpa konteks.",
      ],
      correctAnswer:
        "Ia menghubungkan journey user, guardrail, owner, dan respons terhadap regression.",
      explanation:
        "Budget menjadi alat keputusan ketika menjelaskan pengalaman yang dijaga, sinyal yang dipantau, serta tindakan saat perubahan meningkatkan biaya pengalaman.",
    },
  ],
};
