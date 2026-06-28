# Yashaswi Srivastava — Portfolio

A modern, animated personal portfolio built with **React + Vite + Framer Motion**.
Pure frontend, deployable to **Netlify** in one click.

## ✨ Features

- **3 themes** with one-click cycle (Midnight 🌙 / Daylight ☀️ / Ocean 🌊) — preference persisted in `localStorage`
- **Animated hero** with typewriter effect and a fake terminal "profile.json" card
- **Animated stats** sourced from your real resume metrics
- **Experience timeline** with hover micro-interactions
- **Skills tabs** with filterable categories and animated proficiency bars
- **Filterable projects grid** (All / Featured / Enterprise / Full Stack / Web App)
- **Visitor reviews & ratings wall** — seeded from `src/data/reviews.json`, with new reviews persisted to a local "temp database" (`localStorage`). Avg rating is auto-calculated.
- **Contact section** that opens the visitor's mail client pre-filled
- **Visitor counter pill** in the footer
- **Scroll progress bar**, smooth scroll, sticky navbar with active-section highlighting
- **Responsive** down to mobile, with hamburger nav
- Clean **CSS variables** so adding more themes is a 10-line job

## 🛠 Tech

- React 18 + Vite 5
- Framer Motion 11
- Vanilla CSS (custom-properties theme system, no Tailwind required)
- No backend — all data lives in `src/data/*` (your "temp database file")

## 🚀 Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## 📦 Production build

```bash
npm run build
npm run preview
```

The compiled site goes to `dist/`.

## ☁️ Deploy to Netlify

A `netlify.toml` is included, so deploying is one click:

**Option A — Git-based (recommended)**
1. Push this folder to a GitHub/GitLab repo.
2. On Netlify → *Add new site → Import an existing project*.
3. Pick the repo. Netlify will read `netlify.toml` and:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Done.

**Option B — Drag & drop**
1. Run `npm run build`.
2. Drag the generated `dist/` folder into Netlify's deploy area.

## 🗂 Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── Yashaswi_Srivastava_Resume.pdf   ← served at /Yashaswi_Srivastava_Resume.pdf
├── src/
│   ├── components/    # Navbar, Hero, About, Experience, Skills, Projects, Reviews, Contact, Footer
│   ├── context/       # ThemeContext.jsx (3-theme switcher)
│   ├── data/          # portfolio.js (single source of truth) + reviews.json (seed db)
│   ├── styles/        # index.css (theme tokens + all section styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
└── package.json
```

## ✏️ Personalize

Edit **`src/data/portfolio.js`** to update everything that the user sees:
- Name, role, tagline, email, phone, location
- Social links (GitHub, LinkedIn, Twitter, LeetCode)
- Stats (numbers shown under the hero)
- About-me highlights
- Experience timeline
- Skill categories & proficiency levels
- Projects (with type, tech stack, code/live links, `featured: true` to surface them)

Edit **`src/data/reviews.json`** to seed initial visitor reviews.
Edit **`src/styles/index.css`** to tweak themes — just change the `--primary`, `--bg`, etc. variables under each `[data-theme='...']` block.

## 💾 About the "temp database"

Since Netlify hosts a static site, there is no real backend.
- **Seed reviews** live in `src/data/reviews.json` (committed to the repo).
- **New reviews** users submit are saved to the visitor's `localStorage` — they persist across reloads on that device.
- Same model is used for theme preference and the visitor counter.

If you later want a real shared review wall, you can swap `loadReviews/saveReviews` in `Reviews.jsx` for a Firebase/Supabase/Netlify-Functions backend without changing any UI.
