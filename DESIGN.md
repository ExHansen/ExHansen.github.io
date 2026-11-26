# Design

Website memakai desain bawaan template **Starfolio** (port Astro dari portfolio Magic UI): satu kolom sempit di tengah, font Outfit + Geist Mono, warna netral hitam-putih ala shadcn/ui, efek grid berkedip di bagian atas, dan menu dock melayang di bawah layar. Dark mode mengikuti setelan perangkat dan bisa diganti lewat tombol di dock.

## Prinsip isi

- **Bukti nyata, bukan hiasan.** Sampul project memakai screenshot asli: dashboard Metabase dari repo FMCG dan aplikasi Streamlit dari repo BBC. Foto profil dan galeri "Moments along the way" memakai foto kegiatan asli dengan caption singkat.
- **Suara sendiri.** Bagian About ditulis sebagai orang pertama.
- **Angka spesifik.** 200 GB/hari, 2 TB, 60% lebih cepat, ≥95% akurasi, 98% test accuracy.
- **Privasi.** Nomor HP tidak ditampilkan; CV yang bisa diunduh adalah versi publik tanpa nomor HP.

## Mengubah tampilan

- Warna tema: `src/data/config.ts` → `theme` (bisa tempel tema dari ui.shadcn.com/themes atau tweakcn.com).
- Ukuran font global: `config.ts` → `typography.baseFontSize`.
- Font: lihat komentar di `config.ts` dan `src/styles/global.css`.

## Yang masih bisa ditambah

- Tulisan blog, misalnya cerita migrasi BigQuery ke ClickHouse
- Foto kegiatan baru di galeri (`photos` di `src/data/resume.tsx`)
