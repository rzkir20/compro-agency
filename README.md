# Company Profile Website — RIZKI

Website company profile modern dengan arsitektur server-rendered, tampilan clean, dan fokus pada informasi layanan, tim, portfolio, serta alur booking.

---

## Highlights

- Multi-page website dengan halaman Home, Services, Service Details, Pricing, Schedule, Team, Portfolio, About, dan legal pages.
- Dynamic route untuk detail service (`services/:slug`) dan detail profile (`team/:id?`, `portfolio/:id?`, `work-With-us/:id?`).
- SSR aktif via React Router (`react-router.config.ts`) untuk render yang konsisten di server.
- Styling modern menggunakan Tailwind CSS v4 + Vite.
- Struktur data/service terpisah agar komponen tetap rapi dan mudah di-maintain.

---

## Tech stack

| Area      | Choice |
| --------- | ------ |
| Framework | React Router v7 (SSR) + React 19 |
| Styling   | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Runtime   | Node.js (disarankan versi LTS terbaru) |
| Tooling   | TypeScript, Vite, `vite-tsconfig-paths` |
| Animasi   | `motion` |
| Icons     | `react-icons` |

---

## Dependencies yang digunakan

### Core dependencies

- `react`
- `react-dom`
- `react-router`
- `@react-router/node`
- `@react-router/serve`
- `isbot`
- `motion`
- `react-icons`

### Dev dependencies

- `@react-router/dev`
- `tailwindcss`
- `@tailwindcss/vite`
- `vite`
- `vite-tsconfig-paths`
- `typescript`
- `@types/node`
- `@types/react`
- `@types/react-dom`

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) versi LTS
- npm (default dari instalasi Node.js)

### Install & run (development)

```bash
npm install
npm run dev
```

Default dev server biasanya tersedia di `http://localhost:5173` (Vite default), kecuali jika ada konfigurasi port lain.

### Build & run (production mode)

```bash
npm run build
npm run start
```

### Type checking

```bash
npm run typecheck
```

---

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build aplikasi untuk production |
| `npm run start` | Menjalankan server dari hasil build |
| `npm run typecheck` | Generate route types + TypeScript check |

---

## Project structure

```txt
app/
  root.tsx                              # Root document + global app shell
  routes.ts                             # Definisi seluruh route aplikasi
  routes/                               # Route modules (home, services, about, legal, dll)
  home/                                 # Komponen/section halaman home
  services/                             # Halaman layanan dan turunannya
    details/
      pricing/
      schedule/
  about/                                # Halaman about
  team/                                 # Halaman daftar/profil tim
  portofolio/                           # Halaman portfolio/case study
  work-with-us/                         # Halaman karier/work with us
  app.css                               # Global styles

components/
  Header.tsx
  Footer.tsx

service/                                # Layer data/service per domain
  about.service.ts
  services.service.ts
  team.service.ts

lib/
  data.json                             # Sumber data statis
  helper.ts                             # Utility helper
  service-slug.ts                       # Mapping/utility slug service

types/                                  # Type declarations per fitur
  *.d.ts

public/                                 # Aset statis (icon, manifest, OG, dll)

react-router.config.ts                  # Konfigurasi React Router (SSR true)
vite.config.ts                          # Konfigurasi Vite + plugin
Dockerfile                              # Containerization setup
```

---

## Routes utama

- `/`
- `/services`
- `/services/:slug`
- `/services/:slug/pricing`
- `/services/:slug/schedule`
- `/services/:slug/schedule/confirmed`
- `/about`
- `/portfolio/:id?`
- `/team/:id?`
- `/work-With-us/:id?`
- `/privacy-policy`
- `/terms-of-service`
- `/cookie-policy`

---

## Ikuti & dukung

Kalau repo ini membantu atau kamu suka project-nya, jangan lupa kasih **Star** di GitHub.

- [GitHub — @rzkir20](https://github.com/rzkir20)
- [Instagram — @rzkir.20](https://www.instagram.com/rzkir.20/)
- [TikTok — @rzkir.20](https://www.tiktok.com/@rzkir.20)

---

## License

Source code berlisensi [MIT License](LICENSE) (Copyright © 2026 Rizki Ramadhan).