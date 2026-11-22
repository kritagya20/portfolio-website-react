# Kritagya Singh Chouhan — Developer Portfolio

A personal portfolio website built with **React 18**, **Three.js**, and **Vanilla CSS**. Features a dynamic 3D meteor wave engine, custom dual-cursor tracking system, glassmorphic UI components, and a multi-theme cosmic design system.

---

## Features

- **Dynamic Cosmic Theme Engine**: Handcrafted space theme presets:
  - **Solar [Default]**: Pitch Black Void + Solar Amber Gold (`#f59e0b` / `#fcd34d`).
  - **Cosmic**: Void Black + Starlight Violet (`#c084fc`) & Cyan Aurora (`#38bdf8`).
  - **Starlight**: Deep Sapphire Void + Electric Cyan (`#00f2fe`) & Ice Blue Beam (`#4facfe`).
  - *Full persistence via `localStorage` across reloads.*
- **DevHQ Custom Dual Cursor**: 8px glowing pointer dot with a 38px smooth glass ring follower (`cubic-bezier(0.25, 1, 0.5, 1)` 400ms lag) and subtle hover scaling (44px) with transform-based GPU acceleration.
- **3D Dynamic Meteor Wave Engine**: Three.js canvas featuring random 5–10s wave intervals, 1–3 meteor cluster spawns, variable speeds (1.1x–2.3x), bi-directional trajectories, and additive color blending with document visibility change handling.
- **Hero Solar Orbit & Typewriter System**: Centered solar core card with authentic typewriter headline, orbiting satellite tech badges, and responsive pop-up sequence.
- **macOS Terminal with Mobile Peek Mode**: Interactive developer terminal featuring `profile.json` and `architecture.sh` tabs, syntax-highlighted blocks, and responsive mobile peek mode (collapsible with gradient fade, expandable via button or macOS minimize/zoom window controls).
- **Interactive Work Experience Timeline**: Interactive career milestones featuring role dossiers, skill badges, and mobile frosted-glass summary callouts that expand into full modal dossiers with body scroll locking.
- **3D Orbital Projects Carousel & Telemetry Dock**: 3D perspective deck featuring an Orbital Telemetry Dock (`< 01 / 05 >`), bidirectional touch swiping, keyboard arrow navigation (`ArrowLeft` / `ArrowRight`), and direct inactive card selection.
- **Retro Arcade Mini-Games Playground**: Interactive in-browser games with real-time scoring, particle effects, and `localStorage` personal best persistence:
  - **Perfect Circle**: Precision mouse drag circularity tracker with angle-based score calculation.
  - **Typing Test**: Code snippet speed typing with real-time WPM calculation and snippet cycling.
  - **Memory Match**: 24-card flip and match challenge with move counter and match telemetry.
  - **Cosmic Cipher**: Radar-telemetry word puzzle guessing game with letter keyboard.
- **Contact Channel & Validation System**: Direct email, phone, and resume channels paired with an interactive message terminal featuring per-field regex validation, dynamic error clearing, and animated transmission feedback toasts.
- **Glassmorphic Floating Socials Dock**: Desktop floating glass dock with glowing vertical Starlight Energy Line and sliding tooltip badges (`GitHub`, `LeetCode`, `Medium`, `LinkedIn`, `Mail`), bounded within a `1440px` max-width container layout.
- **Unified Responsive Mobile Drawer**: Tablet/Mobile breakpoint (`<= 1024px`) rendering a glass top bar (theme toggle & menu hamburger) and a slide-out navigation drawer with embedded social links and scroll lock.
- **Global Cross-Browser Scrollbar Hiding**: Completely hidden scrollbars across Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome while preserving smooth scrolling.

---

## Directory & File Structure

```text
Portfolio-main/
├── index.html                           # HTML entry point with SEO metadata & preloaded fonts
├── package.json                         # Dependencies, scripts, and build configuration
├── playwright.config.js                 # Playwright E2E configuration & webServer runners
├── vite.config.js                       # Vite build configuration & chunk splitting
├── README.md                            # Comprehensive project & testing documentation
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml                   # CI/CD: Automated Playwright E2E testing & GitHub Pages deployment
│   │   └── traffic-collector.yml        # Daily cron workflow collecting GitHub traffic statistics
│   └── scripts/
│       └── update-visitor-stats.js      # Visitor statistics data aggregator & rolling average fallback
├── public/                              # Static public assets
│   ├── Resume_Kritagya_Singh_Chouhan.pdf # Downloadable resume PDF
│   ├── visitor-stats.json               # Aggregated traffic metrics & historical views
│   ├── robots.txt                       # Search engine crawler policies
│   ├── sitemap.xml                      # Canonical URL index
│   └── sw.js                            # Offline service worker cache
├── src/                                 # React application source code
│   ├── main.jsx                         # Application root mount & provider registration
│   ├── App.jsx                          # Root layout, theme context wrapping & component assembly
│   ├── components/                      # Feature UI components
│   │   ├── Navbar.jsx                   # Floating desktop pill navbar & mobile slide drawer
│   │   ├── Hero.jsx                     # Hero solar orbit system, typewriter badge & CTA links
│   │   ├── About.jsx                    # macOS terminal window with peek mode & typography story
│   │   ├── Experience.jsx               # Work history timeline & dossier detail modal
│   │   ├── Projects.jsx                 # 3D orbital carousel & telemetry counter dock
│   │   ├── Socials.jsx                  # Floating glass socials dock & sidebar theme toggle
│   │   ├── Contact.jsx                  # Direct contact channels & interactive message form
│   │   ├── Footer.jsx                   # Visitor counter display & copyright footer
│   │   ├── CustomCursor.jsx             # Dual-ring cursor tracker with smooth spring lag
│   │   ├── StarfieldCanvas.jsx          # Three.js 3D cosmic starfield & meteor engine
│   │   ├── ScrambleText.jsx             # Hacker-style text deciphering animation
│   │   └── games/                       # Retro arcade mini-games
│   │       ├── Playground.jsx           # Arcade showcase section & game modal container
│   │       ├── CosmicCipher.jsx         # Word-cipher puzzle guessing game
│   │       ├── MemoryMatch.jsx          # 24-card space memory matching game
│   │       ├── PerfectCircle.jsx        # Canvas-based circle precision test
│   │       └── TypingTest.jsx           # Developer code typing speed benchmark
│   ├── context/                         # React context providers
│   │   ├── ThemeContext.jsx             # Theme state engine (Solar, Cosmic, Starlight)
│   │   └── ToastContext.jsx             # Animated feedback toast notification system
│   ├── hooks/                           # Custom React hooks
│   │   └── useScrollLock.js             # Viewport-safe background scroll lock hook
│   ├── utils/                           # Helper utilities
│   │   ├── formatters.js                # Number and string formatting helpers
│   │   └── dateFormatter.jsx            # Dynamic date and time presentation
│   ├── icon_jsx/                        # Reusable SVG vector icon components
│   │   ├── GithubSvg.jsx
│   │   ├── LeetCodeSvg.jsx
│   │   ├── LinkedinSvg.jsx
│   │   ├── MediumSvg.jsx
│   │   ├── MailSvg.jsx
│   │   └── index.js
│   ├── data/                            # Content datasets
│   │   ├── portfolio.js                 # Personal bio, milestones, projects & contact metadata
│   │   └── games.js                     # Mini-game catalogs, snippets & high-score configurations
│   └── styles/
│       └── index.css                    # Unified CSS design tokens, themes & responsive layouts
└── e2e/                                 # Playwright End-to-End Automated Test Framework
    ├── core/
    │   └── logger.js                    # Standardized ANSI logging & test step reporter
    ├── pages/                           # Page Object Models (POM)
    │   ├── NavbarPage.js                # Locators & actions for navigation and mobile drawer
    │   ├── HeroPage.js                  # Locators & actions for hero orbits and CTAs
    │   ├── AboutPage.js                 # Locators & actions for macOS terminal & peek toggle
    │   ├── ExperiencePage.js            # Locators & actions for timeline and dossier modals
    │   ├── ProjectsPage.js              # Locators & actions for 3D carousel & telemetry dock
    │   ├── PlaygroundPage.js            # Locators & actions for arcade tiles and canvas games
    │   ├── ContactPage.js               # Locators & actions for contact channels and form
    │   └── SocialsFooterPage.js         # Locators & actions for floating dock and footer
    └── tests/                           # Executable Playwright test specifications
        ├── link-button-health.spec.js   # 13 tests: Link targets, buttons, and anchor integrity
        ├── navigation.spec.js           # 6 tests: Desktop pill, mobile drawer, scroll lock & theme persistence
        ├── hero.spec.js                 # 5 tests: Typewriter, solar satellites, and CTA links
        ├── about.spec.js                # 6 tests: Terminal tabs, mobile peek mode, and window buttons
        ├── experience.spec.js           # 6 tests: Desktop timeline, mobile summary card, and dossier modal
        ├── projects.spec.js             # 9 tests: 3D carousel, telemetry dock, swipe, and keyboard navigation
        ├── playground.spec.js           # 8 tests: Mini-games gameplay, canvas drag, and score persistence
        ├── contact.spec.js              # 5 tests: Form validation, error clearing, and toast dispatch
        └── socials-footer.spec.js       # 4 tests: Floating dock visibility and footer visit counter
```

---

## Tech Stack & Dependencies

- **Core Framework**: [React 18](https://react.dev/) (`react`, `react-dom`)
- **3D Graphics & Animations**: [Three.js](https://threejs.org/) & [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite 5](https://vitejs.dev/) with manual vendor chunk optimization
- **Automated Testing**: [Playwright](https://playwright.dev/) with custom Page Object Models
- **Styling**: Vanilla CSS3 (CSS Variables, Glassmorphism, CSS Grid & Flexbox)
- **Typography**: Google Fonts (*Space Grotesk*, *Inter*, *JetBrains Mono*)

---

## Testing & Test Identifiers Convention

This project adopts a standardized `test-id` attribute convention for automated End-to-End (E2E) testing with **Playwright**. The attribute name is globally registered via `testIdAttribute: 'test-id'` in `playwright.config.js`.

### Standard `test-id` Formula

```text
section__elementName_elementType
```

#### Rule Schema Breakdown:
- **`section`**: Lowercase primary section or domain (`navbar`, `hero`, `about`, `experience`, `projects`, `playground`, `contact`, `socials`, `footer`, `toast`).
- **`__`**: Double underscore separating the section namespace from the element identifier.
- **`elementName`**: Clean semantic identifier free of duplicate type names (e.g. `architecture`, `timeline`, `explore`, `dossier`, `memory`, `circle`, `typing`, `message`, `name`, `email`).
- **`_`**: Single underscore separating the element name from the element type.
- **`elementType`**: Element type descriptor (`btn`, `link`, `input`, `textarea`, `card`, `tab`, `modal`, `overlay`, `drawer`, `section`, `container`, `canvas`, `badge`, `pill`, `dock`, `grid`, `toast`, `heading`).

### Multi-Element Indexing & Relative Scoping Convention
Where multiple sibling elements share the same semantic role (e.g., navigation links, satellite tech nodes, project cards, mini-game tiles, or social icons):
- All items share the standard semantic `test-id` (e.g., `test-id="projects__project_card"`, `test-id="navbar__nav_link"`, `test-id="hero__satellite_node"`).
- Playwright Page Object Models access individual elements via zero-based indexing (`.nth(index)`) or relative scoped child locators (e.g. `this.getProjectCard(i).locator('[test-id="projects__code_link"]')`), preventing artificial ID inflation and ensuring maintainable locators.

## Executable Playwright E2E Test Suite (62 Tests)

The full test suite can be executed locally via `npm run test:e2e`. All 62 test specifications are categorized below:

### 1. Link & Button Health Check (`e2e/tests/link-button-health.spec.js` — 13 Tests)
- `TC_LNK_001`: Validate all page anchors and navigation links have valid href targets.
- `TC_LNK_002`: Verify external profile & social links have `target="_blank"` and `rel="noopener"`.
- `TC_LNK_003`: Verify Contact channel links (`mailto:`, `tel:`, PDF resume).
- `TC_LNK_004`: Verify GitHub Code links and CTA button targets in Projects section.
- `TC_LNK_005`: Verify Desktop floating glass social icons links (GitHub, LeetCode, Medium, LinkedIn, Mail).
- `TC_LNK_006`: Verify Mobile drawer embedded social icons links (GitHub, LeetCode, Medium, LinkedIn, Mail).
- `TC_BTN_001`: Desktop & Mobile Theme Toggle buttons function correctly.
- `TC_BTN_002`: Mobile Hamburger menu button and close button function correctly.
- `TC_BTN_003`: macOS Terminal tab buttons toggle correctly.
- `TC_BTN_004`: Experience dossier modal trigger and close button function correctly.
- `TC_BTN_005`: Projects carousel Prev and Next buttons function correctly.
- `TC_BTN_006`: Playground game tiles and game close button function correctly.
- `TC_BTN_007`: Contact Form Submit button functions correctly.

### 2. Navigation & Theme Engine (`e2e/tests/navigation.spec.js` — 6 Tests)
- `TC_NAV_001`: [Large 1920px] Desktop floating pill navbar arrives on scroll and navigates smoothly.
- `TC_NAV_002`: [Large 1920px] Desktop theme toggle cycles theme attribute.
- `TC_NAV_003`: [Medium 768px] Tablet top bar renders theme & menu buttons.
- `TC_NAV_004`: [Small 375px] Mobile drawer menu opens, locks body scroll, and navigates.
- `TC_NAV_005`: Theme preference persists in `localStorage` across page reloads.
- `TC_NAV_EC01`: [Edge Case] Mobile drawer open and close sequence protection.
- `TC_NAV_EC02`: [Edge Case] Closing drawer restores background body overflow state.

### 3. Hero Solar Orbit System (`e2e/tests/hero.spec.js` — 5 Tests)
- `TC_HERO_001`: [Large 1920px] Hero card renders typewriter text, Explore CTA, and Resume link.
- `TC_HERO_002`: [Large 1920px] Hovering satellite tech node applies glowing active state.
- `TC_HERO_003`: [Large 1920px] Clicking satellite node dispatches slide navigation to project carousel.
- `TC_HERO_004`: [Small 375px] Hero section scales down cleanly for mobile viewports.
- `TC_HERO_EC01`: [Edge Case] Rapid hovering between satellite nodes updates active state cleanly.

### 4. About & macOS Terminal (`e2e/tests/about.spec.js` — 6 Tests)
- `TC_ABT_001`: [Large 1920px] Renders terminal window and defaults to profile.json tab.
- `TC_ABT_002`: [Large 1920px] Switching tabs to architecture.sh displays system architecture specs.
- `TC_ABT_003`: [Small 375px] Terminal wraps text cleanly on mobile viewports.
- `TC_ABT_004`: [Small 375px] Terminal starts in collapsed peek mode and expands on toggle button click.
- `TC_ABT_005`: [Small 375px] macOS window minimize and zoom buttons toggle terminal expansion.
- `TC_ABT_EC01`: [Edge Case] Rapid tab toggling between profile.json and architecture.sh does not desync active tab state.

### 5. Experience Timeline & Dossier Modal (`e2e/tests/experience.spec.js` — 6 Tests)
- `TC_EXP_001`: [Large 1920px] Timeline renders cards with full bullet details on desktop.
- `TC_EXP_002`: [Small 375px] Mobile timeline shows summary teaser with "View details" button and hides card skills.
- `TC_EXP_003`: [Small 375px] Opening dossier modal locks body scroll & restores on close.
- `TC_EXP_004`: [Small 375px] Clicking frosted glass summary card opens detailed dossier modal with full content.
- `TC_EXP_EC01`: [Edge Case] Pressing Escape key closes open dossier modal.
- `TC_EXP_EC02`: [Edge Case] Pressing Escape key when modal is closed causes zero errors.

### 6. Projects 3D Carousel & Telemetry Dock (`e2e/tests/projects.spec.js` — 9 Tests)
- `TC_PRJ_001`: [Large 1920px] Carousel renders 3 visible project cards and GitHub profile CTA.
- `TC_PRJ_002`: [Medium 768px] Carousel adapts responsive layout for tablet (2 visible cards).
- `TC_PRJ_003`: [Small 375px] Carousel adapts responsive layout for mobile (1 visible card).
- `TC_PRJ_004`: [Large 1920px] Carousel Prev & Next buttons navigate slides cleanly.
- `TC_PRJ_005`: [Large 1920px] Orbital Telemetry dock updates slide counter (`01 / 05` $\to$ `02 / 05`) on navigation.
- `TC_PRJ_006`: [Small 375px] Touch swipe left advances slide on mobile.
- `TC_PRJ_007`: [Large 1920px] Keyboard ArrowRight and ArrowLeft keys navigate carousel slides.
- `TC_PRJ_008`: [Large 1920px] Clicking an inactive side card selects and centers it.
- `TC_PRJ_009`: [Small 375px] Touch swipe right returns to previous carousel slide.
- `TC_PRJ_EC01`: [Edge Case] Swiping below 40px threshold does not change slide index.

### 7. Playground Mini-Games Arcade (`e2e/tests/playground.spec.js` — 8 Tests)
- `TC_PLG_001`: [Large 1920px] Renders game tiles for Perfect Circle, Typing Test, Memory Match, and Cosmic Cipher.
- `TC_PLG_002`: [In-Depth Perfect Circle] Canvas drawing score calculation and reset.
- `TC_PLG_003`: [In-Depth Typing Test] Target text typing, WPM stats, and snippet cycling.
- `TC_PLG_004`: [In-Depth Memory Match] Card grid rendering, flipping cards, and restart.
- `TC_PLG_005`: [In-Depth Cosmic Cipher] Radar SVG, hint display, letter key guesses, and new puzzle.
- `TC_PLG_006`: [Small 375px] Launching game tile opens interactive game modal & locks scroll.
- `TC_PLG_007`: Personal best scores persist in `localStorage` across browser page reload.
- `TC_PLG_EC01`: [Edge Case] Pressing Escape key closes active game modal.

### 8. Contact Form & Channels (`e2e/tests/contact.spec.js` — 5 Tests)
- `TC_CNT_001`: [Large 1920px] Contact channel cards have valid mailto, tel, and PDF targets.
- `TC_CNT_002`: [Small 375px] Typing into Contact form inputs updates fields cleanly on mobile.
- `TC_CNT_003`: Inline validation errors display per-field and clear dynamically on input.
- `TC_CNT_004`: Valid form submit triggers transmission toast notification.
- `TC_CNT_EC01`: [Edge Case] Submitting empty contact form triggers inline field errors and auto-focuses first invalid input.

### 9. Socials Dock & Footer (`e2e/tests/socials-footer.spec.js` — 4 Tests)
- `TC_SOC_001`: [Large 1920px] Floating glass socials dock becomes visible on scroll.
- `TC_FTR_001`: [All Viewports] Footer renders visitor count text and dynamic current year.

---

## Persistent Visitor Counter & Traffic Collector

This project implements an automated persistent visitor counter system to overcome GitHub Pages 14-day traffic view retention limit.

### Architecture Overview

1. **Data Persistence (`public/visitor-stats.json`)**: Tracks totalViews and totalUniques along with daily historical breakdowns.
2. **Collector Script (`.github/scripts/update-visitor-stats.js`)**: Fetches GitHub REST API (`GET /repos/{owner}/{repo}/traffic/views`). If the API call fails or token expires, a fallback algorithm calculates rolling daily averages from past weeks and backfills missing days.
3. **Daily Cron Collector (`.github/workflows/traffic-collector.yml`)**: Runs automatically at midnight UTC (`cron: '0 0 * * *'`), updating `public/visitor-stats.json` and committing changes to `main`.
4. **CI/CD Quality Gate (`.github/workflows/deploy.yml`)**: Playwright Chromium is installed and all 62 E2E tests are executed on **every push to `main`**, preventing deployment if tests fail.

### How to Run the Collector Manually

You can manually trigger the visitor traffic update at any time:

#### Option A: Manual Trigger via GitHub Actions (Recommended)
1. Navigate to the **Actions** tab in GitHub.
2. Select **Update Visitor Traffic Stats** from the workflow list.
3. Click the **Run workflow** dropdown, choose branch **main**, and trigger execution.

#### Option B: Local Command Execution
```bash
# Run with local GitHub Personal Access Token
TRAFFIC_TOKEN=github_pat_your_token node .github/scripts/update-visitor-stats.js
```

---

## Playwright E2E Test Execution (CI/CD Pipeline)

The GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) runs the full Playwright E2E test suite automatically on **every push to `main`**. If any test fails, deployment to GitHub Pages is automatically blocked.

Artifacts and full HTML test reports are uploaded on every workflow run for inspection under the GitHub Actions job run summary.

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
npx playwright install --with-deps chromium
```

---

## Author

**Kritagya Singh Chouhan**
- **Role**: Software Engineer — Backend Systems (Go, Java, PostgreSQL, Redis, Docker)
- **Location**: Ahmedabad, Gujarat, India
- **GitHub**: [@kritagya20](https://github.com/kritagya20)
- **LinkedIn**: [Kritagya Singh Chouhan](https://www.linkedin.com/in/kritagyachouhan/)
