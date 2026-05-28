import type { CodingChallenge } from "@/types/challenge";

export const buildFlexboxNavbarChallenge: CodingChallenge = {
  id: "build-flexbox-navbar",
  lessonId: "css-flexbox-basics",
  title: "Membuat responsive navbar",
  description:
    "Latihan menyusun navbar sederhana menggunakan Flexbox agar elemen brand, menu, dan aksi sejajar dengan rapi.",
  instructions: [
    "Gunakan display flex pada container navbar.",
    "Pastikan brand berada di kiri dan menu utama di tengah/kanan dengan jarak yang nyaman.",
    "Tambahkan tombol aksi seperti Login dan Start Trial di sisi kanan.",
    "Buat layout tetap rapi saat lebar layar mengecil (boleh stack di mobile).",
  ],
  starterCode: {
    html: `<header class="navbar">
  <div class="brand">FluentStack</div>
  <nav class="menu">
    <a href="#">Roadmap</a>
    <a href="#">Lesson</a>
    <a href="#">Progress</a>
  </nav>
  <div class="actions">
    <button class="btn ghost">Login</button>
    <button class="btn solid">Start Trial</button>
  </div>
</header>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  background: #050816;
  color: #f4f5f7;
}

.navbar {
  padding: 14px 20px;
  border-bottom: 1px solid #2a3146;
}

.brand {
  font-weight: 700;
}

.menu a {
  color: #d4d8e4;
  text-decoration: none;
  margin-right: 14px;
}

.btn {
  border-radius: 10px;
  padding: 8px 12px;
  border: 1px solid transparent;
}

.btn.ghost {
  background: transparent;
  color: #d4d8e4;
  border-color: #3a425d;
}

.btn.solid {
  background: #38bdf8;
  color: #07111f;
}`,
    js: `console.log("Flexbox navbar practice");`,
  },
  solutionCode: {
    html: `<header class="navbar">
  <div class="brand">FluentStack</div>
  <nav class="menu">
    <a href="#">Roadmap</a>
    <a href="#">Lesson</a>
    <a href="#">Progress</a>
  </nav>
  <div class="actions">
    <button class="btn ghost">Login</button>
    <button class="btn solid">Start Trial</button>
  </div>
</header>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  background: #050816;
  color: #f4f5f7;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid #2a3146;
}

.brand {
  font-weight: 700;
}

.menu {
  display: flex;
  align-items: center;
  gap: 14px;
}

.menu a {
  color: #d4d8e4;
  text-decoration: none;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn {
  border-radius: 10px;
  padding: 8px 12px;
  border: 1px solid transparent;
}

.btn.ghost {
  background: transparent;
  color: #d4d8e4;
  border-color: #3a425d;
}

.btn.solid {
  background: #38bdf8;
  color: #07111f;
}

@media (max-width: 760px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    width: 100%;
  }
}`,
    js: `console.log("Solution: navbar now uses flexbox layout");`,
  },
  checklist: [
    "Navbar container sudah memakai display flex.",
    "Menu link tersusun sejajar dengan jarak yang konsisten.",
    "Area actions punya tombol yang tetap rapi saat layar mengecil.",
  ],
  skillTags: ["CSS", "Flexbox", "Responsive Design"],
};

export const challenges: CodingChallenge[] = [buildFlexboxNavbarChallenge];
