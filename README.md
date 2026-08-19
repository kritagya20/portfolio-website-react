# 🌌 Kritagya Singh Chouhan — Developer Portfolio

A modern, high-performance personal portfolio website built with **React 18**, **Three.js**, and **Vanilla CSS**. Features a dynamic 3D meteor wave engine, custom dual-cursor tracking system, glassmorphic UI components, and a multi-theme cosmic design system.

---

## ✨ Features

- **☀️ Dynamic Cosmic Theme Engine**: Handcrafted space theme presets:
  - **Solar (`☀️`) [Default]**: Pitch Black Void + Solar Amber Gold (`#f59e0b` / `#fcd34d`).
  - **Cosmic (`✨`)**: Void Black + Starlight Violet (`#c084fc`) & Cyan Aurora (`#38bdf8`).
  - **Starlight (`💫`)**: Deep Sapphire Void + Electric Cyan (`#00f2fe`) & Ice Blue Beam (`#4facfe`).
- **🎯 DevHQ Custom Dual Cursor**: 8px glowing pointer dot with a 38px smooth glass ring follower (`cubic-bezier(0.25, 1, 0.5, 1)` 400ms lag) and subtle hover scaling (44px).
- **🌠 3D Dynamic Meteor Wave Engine**: Three.js canvas featuring random 5–10s wave intervals, 1–3 meteor cluster spawns, variable speeds (1.1x–2.3x), bi-directional trajectories, and additive color blending.
- **🛸 Glassmorphic Floating Socials Dock**: Desktop floating glass dock with glowing vertical Starlight Energy Line and sliding tooltip badges (`GitHub`, `LeetCode`, `LinkedIn`, `Mail`), bounded within a `1440px` max-width container layout.
- **📱 Unified Responsive Mobile Drawer**: Tablet/Mobile breakpoint (`≤ 1024px`) rendering a glass top bar (theme toggle & menu hamburger) and a slide-out navigation drawer with embedded social links.
- **🙈 Global Cross-Browser Scrollbar Hiding**: Completely hidden scrollbars across Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome while preserving smooth scrolling.

---

## 📁 Directory & File Structure

```text
Portfolio-main/
├── index.html                  # HTML entry point with SEO metadata
├── package.json                # Dependencies and script definitions
├── README.md                   # Project documentation
├── public/                     # Static assets (favicons, PDFs, images)
│   ├── favicon.svg
│   └── Resume - Kritagya Singh Chouhan.pdf
└── src/
    ├── main.jsx                # React app root & provider mounting
    ├── App.jsx                 # Main layout & component assembly
    ├── components/             # UI Components
    │   ├── Navbar.jsx          # Desktop floating nav pill & mobile drawer
    │   ├── Hero.jsx            # Hero section with typewriter effect
    │   ├── About.jsx           # About summary & highlight cards
    │   ├── Experience.jsx      # Interactive work experience timeline
    │   ├── Projects.jsx        # Featured & archive project cards
    │   ├── Socials.jsx         # Floating glass socials dock & mobile bar
    │   ├── Footer.jsx          # Page footer with visit tracker & quick links
    │   ├── CustomCursor.jsx    # DevHQ Dot + Smooth Glass Ring follower
    │   ├── StarfieldCanvas.jsx # Three.js 3D meteor wave canvas engine
    │   └── games/              # Interactive mini-games (MemoryMatch, Hangman)
    ├── context/
    │   └── ThemeContext.jsx    # Cosmic theme context state & localStorage persistence
    ├── data/
    │   └── portfolio.js        # Personal profile, stats, experience, & projects data
    └── styles/
        └── index.css           # Core CSS design system, themes, & responsive media queries
```

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework**: [React 18](https://react.dev/)
- **3D Graphics & Animations**: [Three.js](https://threejs.org/) & [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Properties, Glassmorphism, CSS Grid & Flexbox)
- **Icons & Typography**: Google Fonts (*Space Grotesk*, *Inter*, *JetBrains Mono*)

---

## 🧪 Testing & Test Identifiers Convention (Thumb Rules)

This project adopts a strict, standardized **Thumb Rules System** for element test attributes (`data-testid`). This allows automated End-to-End (E2E) frameworks (such as **Playwright**) and unit testing utilities (**Vitest + React Testing Library**) to reliably locate and interact with UI elements across any viewport size or theme state.

### 📐 Standard `data-testid` Thumb Rule Pattern

```text
[sectionName].[componentName]__[elementName]__[elementType]-[index]
```

#### Rule Schema Breakdown:
- **`[sectionName]`**: Primary section ID or domain (`navbar`, `hero`, `about`, `experience`, `projects`, `playground`, `contact`, `socials`, `footer`).
- **`.[componentName]`** *(Optional)*: Sub-component name if distinct from section (`.mobile`, `.terminal`, `.timeline`, `.carousel`, `.modal`).
- **`__[elementName]`**: Specific function or content designation (`__theme-toggle`, `__hamburger`, `__profile-tab`, `__submit`).
- **`__[elementType]`**: HTML/UI element role (`__section`, `__nav`, `__btn`, `__card`, `__input`, `__link`, `__dialog`, `__drawer`).
- **`-[index]`** *(Optional)*: Index suffix or slug for mapped items (`-0`, `-1`, `-react`, `-github`).

### 📌 Example Test Identifiers Across Components

| Component / Element | `data-testid` Attribute |
| :--- | :--- |
| **Navbar Header (Desktop)** | `navbar__header__nav` |
| **Desktop Nav Link** | `navbar__link__a-home`, `navbar__link__a-projects` |
| **Desktop Theme Toggle** | `navbar__theme-toggle__btn` |
| **Mobile Drawer Hamburger** | `navbar.mobile__hamburger__btn` |
| **Mobile Drawer Container** | `navbar.mobile__drawer__dialog` |
| **Hero Section Container** | `hero__container__section` |
| **Hero "Explore" Link** | `hero__explore__link` |
| **About Terminal Tab** | `about.terminal__tab-profile__btn` |
| **Experience Timeline Item** | `experience.timeline__card-item__0` |
| **Experience Modal Dossier** | `experience.modal__dossier__dialog` |
| **Projects Carousel Next** | `projects.carousel__next__btn` |
| **Project Code / Live Links** | `projects.card__code__link-0`, `projects.card__live__link-0` |
| **Playground Game Tile** | `playground__tile__btn-circle`, `playground__tile__btn-typing` |
| **Contact Form & Inputs** | `contact.form__container__form`, `contact.form__email__input` |
| **Contact Submit Button** | `contact.form__submit__btn` |
| **Floating Social Links** | `socials__link__a-github`, `socials__link__a-linkedin` |

---

## 🚀 Project Setup & Installation

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/kritagya20/portfolio-website-react.git
cd portfolio-website-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will launch at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 👤 Author

**Kritagya Singh Chouhan**
- **Role**: Full Stack Software Developer (Golang, Java, React, Docker)
- **Location**: Ahmedabad, Gujarat, India
- **GitHub**: [@kritagya20](https://github.com/kritagya20)
- **LinkedIn**: [Kritagya Singh Chouhan](https://linkedin.com/in/kritagyasinghchouhan/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
