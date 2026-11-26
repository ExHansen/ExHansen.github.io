# Stack Recommendation — Personal Website

## Pilihan utama

**Astro + TypeScript + Anime.js + CSS View Transitions**

Kenapa ini paling cocok:

- **Astro**: cepat, SEO bagus, cocok untuk portfolio + notes.
- **TypeScript**: aman untuk data project, repo, notes, dan config.
- **Anime.js**: cocok dengan selera animasi UI kamu; ringan untuk stagger, reveal, hover, counter, dan motion detail.
- **CSS View Transitions**: transisi antar halaman tanpa library berat.
- **MD/MDX**: gampang buat isi notes dan project case study.

## Tambahan opsional

- **Lenis**: smooth scroll kalau mau feel premium.
- **GSAP**: hanya kalau nanti animasinya kompleks banget/parallax berat.
- **Three.js**: hanya kalau mau WebGL background atau lab visual 3D.

## Struktur konten yang disarankan

```text
src/
  pages/
    index.astro
    projects.astro
    now.astro
    notes/
  content/
    projects/
    notes/
  components/
    Hero.astro
    ProjectCard.astro
    MotionSection.astro
  scripts/
    motion.ts
```

## Animasi MVP

- Hero stagger reveal
- Text line reveal
- Card hover sweep
- Section reveal on scroll
- Project cards stagger
- Background grid drift halus
- Mini terminal typing effect
- Smooth anchor scroll

## Rekomendasi final

Mulai dari **Astro + Anime.js** dulu. Jangan langsung pakai GSAP/Three.js kecuali memang sudah perlu. Website pribadi harus tetap cepat dan ringan.
