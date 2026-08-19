# Kritagya Singh Chouhan — Developer Portfolio

A modern, high-performance personal portfolio website built with **React 18**, **Three.js**, and **Vanilla CSS**. Features a dynamic 3D meteor wave engine, custom dual-cursor tracking system, glassmorphic UI components, and a multi-theme cosmic design system.

---

## Features

- **Dynamic Cosmic Theme Engine**: Handcrafted space theme presets:
  - **Solar [Default]**: Pitch Black Void + Solar Amber Gold (`#f59e0b` / `#fcd34d`).
  - **Cosmic**: Void Black + Starlight Violet (`#c084fc`) & Cyan Aurora (`#38bdf8`).
  - **Starlight**: Deep Sapphire Void + Electric Cyan (`#00f2fe`) & Ice Blue Beam (`#4facfe`).
- **DevHQ Custom Dual Cursor**: 8px glowing pointer dot with a 38px smooth glass ring follower (`cubic-bezier(0.25, 1, 0.5, 1)` 400ms lag) and subtle hover scaling (44px).
- **3D Dynamic Meteor Wave Engine**: Three.js canvas featuring random 5–10s wave intervals, 1–3 meteor cluster spawns, variable speeds (1.1x–2.3x), bi-directional trajectories, and additive color blending.
- **Glassmorphic Floating Socials Dock**: Desktop floating glass dock with glowing vertical Starlight Energy Line and sliding tooltip badges (`GitHub`, `LeetCode`, `LinkedIn`, `Mail`), bounded within a `1440px` max-width container layout.
- **Unified Responsive Mobile Drawer**: Tablet/Mobile breakpoint (`<= 1024px`) rendering a glass top bar (theme toggle & menu hamburger) and a slide-out navigation drawer with embedded social links.
- **Global Cross-Browser Scrollbar Hiding**: Completely hidden scrollbars across Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome while preserving smooth scrolling.

---

## Directory & File Structure

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

## Tech Stack & Dependencies

- **Core Framework**: [React 18](https://react.dev/)
- **3D Graphics & Animations**: [Three.js](https://threejs.org/) & [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Properties, Glassmorphism, CSS Grid & Flexbox)
- **Icons & Typography**: Google Fonts (*Space Grotesk*, *Inter*, *JetBrains Mono*)

---

## Testing & Test Identifiers Convention (Thumb Rules)

This project adopts a strict, standardized **Thumb Rules System** for element test attributes (`data-testid`). This allows automated End-to-End (E2E) frameworks (such as **Playwright**) and unit testing utilities (**Vitest + React Testing Library**) to reliably locate and interact with UI elements across any viewport size or theme state.

### Standard `data-testid` Thumb Rule Pattern

```text
[sectionName].[componentName]__[elementName]__[elementType]-[index]
```

#### Rule Schema Breakdown:
- **`[sectionName]`**: Primary section ID or domain (`navbar`, `hero`, `about`, `experience`, `projects`, `playground`, `contact`, `socials`, `footer`).
- **`.[componentName]`** *(Optional)*: Sub-component name if distinct from section (`.mobile`, `.terminal`, `.timeline`, `.carousel`, `.modal`).
- **`__[elementName]`**: Specific function or content designation (`__theme-toggle`, `__hamburger`, `__profile-tab`, `__submit`).
- **`__[elementType]`**: HTML/UI element role (`__section`, `__nav`, `__btn`, `__card`, `__input`, `__link`, `__dialog`, `__drawer`).
- **`-[index]`** *(Optional)*: Index suffix or slug for mapped items (`-0`, `-1`, `-react`, `-github`).

### Example Test Identifiers Across Components

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

### Executable Playwright E2E Test Suite (52 Tests)

Run with `npm run test:e2e`:

#### 1. Link & Button Health Check (`e2e/tests/link-button-health.spec.js`)
- `TC_LNK_001`: Validate all page anchors and navigation links have valid hrefs
- `TC_LNK_002`: Verify external profile & social links have `target="_blank"` and `rel="noopener"`
- `TC_LNK_003`: Verify Contact channel links (`mailto:`, `tel:`, PDF resume)
- `TC_LNK_004`: Verify GitHub Code links and CTA button targets in Projects section
- `TC_LNK_005`: Verify Desktop floating glass social icons links (GitHub, LeetCode, Medium, LinkedIn, Mail)
- `TC_LNK_006`: Verify Mobile drawer embedded social icons links (GitHub, LeetCode, Medium, LinkedIn, Mail)
- `TC_BTN_001`: Desktop & Mobile Theme Toggle buttons function correctly
- `TC_BTN_002`: Mobile Hamburger menu button and close button function correctly
- `TC_BTN_003`: macOS Terminal tab buttons toggle correctly
- `TC_BTN_004`: Experience dossier modal trigger and close button function correctly
- `TC_BTN_005`: Projects carousel Prev, Next, and Pagination dot buttons function correctly
- `TC_BTN_006`: Playground game tiles and game close button function correctly
- `TC_BTN_007`: Contact Form Submit button functions correctly

#### 2. Navigation & Theme Engine (`e2e/tests/navigation.spec.js`)
- `TC_NAV_001`: [Large 1920px] Desktop floating pill navbar arrives on scroll and navigates smoothly
- `TC_NAV_002`: [Large 1920px] Desktop theme toggle cycles theme attribute
- `TC_NAV_003`: [Medium 768px] Tablet top bar renders theme & menu buttons
- `TC_NAV_004`: [Small 375px] Mobile drawer menu opens, locks body scroll, and navigates
- `TC_NAV_EC01`: [Edge Case] Mobile drawer open and close sequence protection
- `TC_NAV_EC02`: [Edge Case] Closing drawer restores background body overflow state

#### 3. Hero Solar Orbit System (`e2e/tests/hero.spec.js`)
- `TC_HERO_001`: [Large 1920px] Hero card renders typewriter text, Explore CTA, and Resume link
- `TC_HERO_002`: [Large 1920px] Hovering satellite tech node applies glowing active state
- `TC_HERO_003`: [Large 1920px] Clicking satellite node dispatches slide navigation to project carousel
- `TC_HERO_004`: [Small 375px] Hero section scales down cleanly for mobile viewports
- `TC_HERO_EC01`: [Edge Case] Rapid hovering between satellite nodes updates active state cleanly

#### 4. About & macOS Terminal (`e2e/tests/about.spec.js`)
- `TC_ABT_001`: [Large 1920px] Renders terminal window and defaults to profile.json tab
- `TC_ABT_002`: [Large 1920px] Switching tabs to architecture.sh displays system architecture specs
- `TC_ABT_003`: [Small 375px] Terminal wraps text cleanly on mobile viewports
- `TC_ABT_EC01`: [Edge Case] Rapid tab toggling between profile.json and architecture.sh does not desync active tab state

#### 5. Experience Timeline & Dossier Modal (`e2e/tests/experience.spec.js`)
- `TC_EXP_001`: [Large 1920px] Timeline renders cards with full bullet details on desktop
- `TC_EXP_002`: [Small 375px] Mobile timeline shows top 2 bullets preview and renders "View details" trigger hyperlink
- `TC_EXP_003`: [Small 375px] Opening dossier modal locks body scroll & restoring on close
- `TC_EXP_EC01`: [Edge Case] Pressing Escape key closes open dossier modal
- `TC_EXP_EC02`: [Edge Case] Pressing Escape key when modal is closed causes zero errors

#### 6. Projects Responsive Carousel (`e2e/tests/projects.spec.js`)
- `TC_PRJ_001`: [Large 1920px] Carousel renders 3 visible project cards and GitHub profile CTA
- `TC_PRJ_002`: [Medium 768px] Carousel adapts responsive layout for tablet (2 visible cards)
- `TC_PRJ_003`: [Small 375px] Carousel adapts responsive layout for mobile (1 visible card)
- `TC_PRJ_004`: [Large 1920px] Carousel Prev & Next buttons navigate slides cleanly
- `TC_PRJ_005`: [Large 1920px] Pagination dot buttons navigate directly to project slides
- `TC_PRJ_006`: [Small 375px] Touch swipe left advances slide on mobile
- `TC_PRJ_EC01`: [Edge Case] Swiping below 40px threshold does not change slide index

#### 7. Playground Mini-Games (`e2e/tests/playground.spec.js`)
- `TC_PLG_001`: [Large 1920px] Renders game tiles for Perfect Circle, Typing Test, Memory Match, and Cosmic Cipher
- `TC_PLG_002`: [In-Depth Perfect Circle] Canvas drawing score calculation and reset
- `TC_PLG_003`: [In-Depth Typing Test] Target text typing, WPM stats, and snippet cycling
- `TC_PLG_004`: [In-Depth Memory Match] Card grid rendering, flipping cards, and restart
- `TC_PLG_005`: [In-Depth Cosmic Cipher] Radar SVG, hint display, letter key guesses, and new puzzle
- `TC_PLG_006`: [Small 375px] Launching game tile opens interactive game modal & locks scroll
- `TC_PLG_EC01`: [Edge Case] Pressing Escape key closes active game modal

#### 8. Contact Form & Channels (`e2e/tests/contact.spec.js`)
- `TC_CNT_001`: [Large 1920px] Contact channel cards have valid mailto, tel, and PDF targets
- `TC_CNT_002`: [Small 375px] Typing into Contact form inputs updates fields cleanly on mobile
- `TC_CNT_EC01`: [Edge Case] Submitting empty contact form does not crash page

#### 9. Socials Dock & Footer (`e2e/tests/socials-footer.spec.js`)
- `TC_SOC_001`: [Large 1920px] Floating glass socials dock becomes visible on scroll
- `TC_FTR_001`: [All Viewports] Footer renders developer name and dynamic current year

---

## Emergency Test Bypass (GitHub Actions CI/CD)

If you need to make an emergency hotfix deployment and **bypass the Playwright E2E test execution step in GitHub Actions**, add `[skip tests]` (or `[skip-tests]`) anywhere in your Git commit message:

```bash
git commit -m "hotfix: update critical contact link [skip tests]"
```

> **How it works:** GitHub Actions will detect `[skip tests]`, evaluate the test condition to `false`, skip test execution, and immediately build and deploy your project to GitHub Pages.

---

## Essential Project & Testing Commands

### Development & Build Commands

| Action | Command |
| :--- | :--- |
| **Start Dev Server** | `npm run dev` *(Launches app at `http://localhost:5173`)* |
| **Build Production Bundle** | `npm run build` *(Generates optimized output in `dist/`)* |
| **Preview Production Build** | `npm run preview` *(Serves production bundle locally)* |

### Playwright E2E Testing Commands

| Action | Command |
| :--- | :--- |
| **Run All E2E Tests (Headless)** | `npm run test:e2e` or `npx playwright test` |
| **Run Interactive UI Runner** | `npm run test:e2e:ui` or `npx playwright test --ui` |
| **Run Specific Test Spec File** | `npx playwright test e2e/tests/playground.spec.js` |
| **Run Tests in Headed Browser** | `npx playwright test --headed` |
| **Run Playwright Inspector Debugger** | `npx playwright test --debug` |
| **View Interactive HTML Report** | `npx playwright show-report` |

---

## Project Setup & Installation

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

### 3. Install Playwright Browsers (for E2E Testing)

```bash
npx playwright install chromium
```

---

## Author

**Kritagya Singh Chouhan**
- **Role**: Full Stack Software Developer (Golang, Java, React, Docker)
- **Location**: Ahmedabad, Gujarat, India
- **GitHub**: [@kritagya20](https://github.com/kritagya20)
- **LinkedIn**: [Kritagya Singh Chouhan](https://linkedin.com/in/kritagyasinghchouhan/)
