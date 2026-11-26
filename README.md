# Personal Website — Hansen Vernandez

Website portfolio berbasis template **[Starfolio](https://github.com/webrating/starfolio)** (MIT, lihat `LICENSE`), dinaikkan ke **Astro 7** dan diubah jadi situs statis biasa.

Isinya: About, Work Experience, Education, Skills, Projects (dengan screenshot asli), Certifications & awards, Contact, plus Blog (siap dipakai, belum ada tulisan). Ada dark mode yang mengikuti setelan perangkat dan menu dock di bawah layar.

## Menjalankan di laptop

Butuh Node.js 22.23.4 atau lebih baru.

```bash
npm install        # sekali saja (atau setelah package.json berubah)
npm run dev        # buka http://localhost:4321
npm run build      # hasil akhir ke folder dist/
npm run preview    # cek hasil build
```

## Mengubah isi

Hampir semua isi ada di **`src/data/resume.tsx`**:

| Mau ubah | Bagian di `resume.tsx` |
| --- | --- |
| Nama, kalimat di bawah nama, paragraf About | `name`, `description`, `summary` |
| Foto profil | `avatarUrl` (sekarang `public/me.webp`). Kalau dikosongkan, tampil inisial "HV". |
| Galeri foto kegiatan | `photos` (`src`, `alt`, `caption`) — file di `public/photos/` |
| Urutan / sembunyikan section, judul section | `sections` (`order`, `enabled`, `heading`) |
| Pengalaman kerja | `work` |
| Pendidikan | `education` |
| Tools I've used (logo per kategori) | `tools` — logo di `public/tools/` (lihat di bawah) |
| Project | `projects` — gambar sampul di `public/projects/` |
| Sertifikasi & penghargaan | `hackathons` (nama bawaan template; tampil sebagai "Certifications & awards") |
| Menu dock di bawah | `navbar` dan `contact.social` |

Pengaturan situs (URL, warna tema, ukuran font) ada di `src/data/config.ts`.

Logo institusi ada di `public/logos/`.

### Menambah tool

1. Cari logonya di [simpleicons.org](https://simpleicons.org) (CC0). Unduh SVG-nya ke `public/tools/<nama>.svg`, lalu tambahkan ke `tools`:
   `{ name: "DuckDB", logo: "/tools/duckdb.svg", color: "#FFF000", onLight: false }`
   `color` = warna brand dari situs itu. Pakai `onLight: false` kalau warnanya terlalu pucat di latar putih, atau `onDark: false` kalau terlalu gelap di dark mode.
2. Kalau tidak ada di Simple Icons, pakai logo berwarna (PNG/SVG resmi, ±64–128 px) **tanpa** `color`:
   `{ name: "dbt", logo: "/tools/dbt.png" }`
3. Tanpa `logo` sama sekali, yang tampil ikon database generik.

### Menambah video demo di kartu project

Kartu project bisa memutar video pendek (otomatis, tanpa suara, berulang) menggantikan gambar sampul.

1. Rekam layar 15–45 detik yang menunjukkan software-nya benar-benar jalan, misalnya:
   - **PayLater:** jalankan `pdp fault loader_stall`, lalu tunjukkan check `freshness` berubah gagal di dashboard;
   - **LLM Document Extractor:** antrean review Streamlit (dokumen di kiri, field yang ditandai di kanan, approve/koreksi).
2. Export ke MP4 (H.264), 720p, tanpa audio, usahakan di bawah 5 MB.
3. Simpan di `public/projects/`, lalu di `resume.tsx` isi `video: "/projects/nama-file.mp4"` pada project itu.
   Selama `video` terisi, video yang tampil; `image` tetap dipakai sebagai cadangan.

### Menambah foto

Foto asli disimpan di folder `png/` (tidak ikut ke GitHub, lihat `.gitignore`). Sebelum dipasang, foto di-crop dan dikompres ke WebP (lebar ±1000 px) supaya website tetap cepat. Hal yang sudah dilakukan:

- Sertifikat Lulusan Terbaik: **NIM disensor**.
- Foto BUSED: diambil dari Instagram story, **username, balasan, dan UI Instagram dibuang**.
- Logo Insignia: hanya ikon matanya (wordmark tidak terbaca di lingkaran 40 px).

Untuk foto baru, pastikan tidak ada data pribadi (NIM, nomor HP, alamat) yang terlihat, lalu taruh di `public/photos/` dan tambahkan ke `photos` di `resume.tsx`.

## Menulis blog

1. Buat file `src/content/blog/nama-tulisan.mdx`:
   ```mdx
   ---
   title: "Migrasi 2 TB dari BigQuery ke ClickHouse"
   publishedAt: "2026-11-20"
   summary: "Apa yang kami pelajari saat memindahkan ratusan tabel."
   ---

   Isi tulisan dalam Markdown. Blok kode otomatis diberi warna.
   ```
2. Munculkan menu Blog di dock: buka `src/data/resume.tsx`, aktifkan baris `{ href: "/blog", ... }` di `navbar` dan import `Library` dari `lucide-react`.

## Meng-online-kan (gratis, Cloudflare Pages)

1. Push folder ini ke repo GitHub baru. File `CV_*` di root (berisi nomor HP) sudah di-`.gitignore`.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → hubungkan repo.
3. Beri nama project **`hansen-vernandez`** supaya URL-nya `https://hansen-vernandez.pages.dev` (sudah dipakai di config). Kalau nama itu tidak tersedia, ganti `url` di `src/data/config.ts` **dan** `src/data/resume.tsx` dengan URL yang kamu dapat.
4. Build settings: framework **Astro**, build command `npm run build`, output `dist`, environment variable `NODE_VERSION` = `22.23.4`.
5. Setiap `git push` berikutnya otomatis meng-update website.

Bisa juga di Netlify atau Vercel dengan setting yang sama. File `public/_headers` berisi header keamanan untuk Cloudflare Pages/Netlify.

## Perubahan dari template asli

- Astro 6 → 7 (React 7.x, MDX 8.x integration); pemrosesan Markdown memakai `unified()` dari `@astrojs/markdown-remark`.
- Mode server Cloudflare Workers → situs statis; middleware header → `public/_headers`.
- Halaman utama dirender ke HTML saat build (`client:load`), jadi isinya terbaca mesin pencari.
- Dark mode mengikuti setelan perangkat (template asli memaksa terang).
- Work Experience: dua posisi di perusahaan yang sama tidak lagi bentrok, posisi terbaru terbuka otomatis.
- Contact: teks mendukung link (Markdown).
- Semua konten demo (foto, blog contoh, data "Alex Mercer") dihapus.
