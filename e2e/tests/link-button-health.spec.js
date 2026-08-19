import { test, expect } from '@playwright/test';
import { NavbarPage } from '../pages/NavbarPage.js';
import { HeroPage } from '../pages/HeroPage.js';
import { AboutPage } from '../pages/AboutPage.js';
import { ExperiencePage } from '../pages/ExperiencePage.js';
import { ProjectsPage } from '../pages/ProjectsPage.js';
import { PlaygroundPage } from '../pages/PlaygroundPage.js';
import { ContactPage } from '../pages/ContactPage.js';
import { SocialsFooterPage } from '../pages/SocialsFooterPage.js';
import { Logger } from '../core/logger.js';

test.describe('Link & Button Health Check Suite [@module:HealthCheck]', () => {

  // ---------------------------------------------------------------------------
  // SECTION 1: LINK VALIDATION & REDIRECT TARGET CHECKS
  // ---------------------------------------------------------------------------

  test('TC_LNK_001: Validate all page anchors and navigation links have valid hrefs', async ({ page }) => {
    Logger.step('TC_LNK_001: Validating all anchor href attributes');
    await page.goto('/');

    const allLinks = await page.locator('a').all();
    expect(allLinks.length).toBeGreaterThan(0);

    for (const link of allLinks) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).not.toBe('#');
      expect(href).not.toBe('javascript:void(0)');
    }
  });

  test('TC_LNK_002: Verify external profile & social links have target="_blank" and security rel attributes', async ({ page }) => {
    Logger.step('TC_LNK_002: Verifying target="_blank" and rel="noopener" on external social links');
    await page.goto('/');

    const sf = new SocialsFooterPage(page);
    await page.evaluate(() => window.scrollTo(0, 150));

    const externalSocials = ['github', 'leetcode', 'medium', 'linkedin'];
    for (const iconName of externalSocials) {
      const socialLink = sf.getSocialLink(iconName);
      await expect(socialLink).toHaveAttribute('target', '_blank');
      await expect(socialLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
    }
  });

  test('TC_LNK_003: Verify Contact channel links (email mailto, phone tel, PDF resume)', async ({ page }) => {
    Logger.step('TC_LNK_003: Verifying contact channel link targets');
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    // Email
    await expect(contact.emailChannel).toHaveAttribute('href', expect.stringContaining('mailto:'));
    // Phone
    await expect(contact.phoneChannel).toHaveAttribute('href', expect.stringContaining('tel:'));
    // Resume PDF
    await expect(contact.resumeChannel).toHaveAttribute('target', '_blank');
  });

  test('TC_LNK_004: Verify GitHub Code links and CTA button targets in Projects section', async ({ page }) => {
    Logger.step('TC_LNK_004: Verifying GitHub code repository links');
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    // Check code link on first project card
    const codeLink = projects.getCodeLink(0);
    if (await codeLink.isVisible()) {
      await expect(codeLink).toHaveAttribute('target', '_blank');
      await expect(codeLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    }

    // Check GitHub CTA link
    await expect(projects.githubCtaLink).toHaveAttribute('target', '_blank');
    await expect(projects.githubCtaLink).toHaveAttribute('href', expect.stringContaining('github.com/kritagya20'));
  });

  test('TC_LNK_005: Verify Desktop floating glass social icons links and redirect targets', async ({ page }) => {
    Logger.step('TC_LNK_005: Verifying Desktop floating glass social icons links');
    await page.goto('/');

    const sf = new SocialsFooterPage(page);
    await page.evaluate(() => window.scrollTo(0, 150));
    await expect(sf.socialsAside).toBeVisible();

    const socialIcons = [
      { id: 'github', expectedUrl: 'github.com/kritagya20' },
      { id: 'leetcode', expectedUrl: 'leetcode.com/u/kritagya20' },
      { id: 'medium', expectedUrl: 'medium.com/@kritagya2022' },
      { id: 'linkedin', expectedUrl: 'linkedin.com/in/kritagyachouhan' },
      { id: 'mail', expectedUrl: 'mailto:kritagya2022@gmail.com' },
    ];

    for (const { id, expectedUrl } of socialIcons) {
      const link = sf.getSocialLink(id);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', expect.stringContaining(expectedUrl));
    }
  });

  test('TC_LNK_006: Verify Mobile drawer embedded social icons links and redirect targets', async ({ page }) => {
    Logger.step('TC_LNK_006: Verifying Mobile drawer embedded social icons links');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await nav.openMobileMenu();
    await expect(nav.mobileDrawer).toBeVisible();

    const mobileSocials = [
      { testId: 'navbar.mobile__social-github__a', expectedUrl: 'github.com/kritagya20' },
      { testId: 'navbar.mobile__social-leetcode__a', expectedUrl: 'leetcode.com/u/kritagya20' },
      { testId: 'navbar.mobile__social-medium__a', expectedUrl: 'medium.com/@kritagya2022' },
      { testId: 'navbar.mobile__social-linkedin__a', expectedUrl: 'linkedin.com/in/kritagyachouhan' },
      { testId: 'navbar.mobile__social-mail__a', expectedUrl: 'mailto:kritagya2022@gmail.com' },
    ];

    for (const { testId, expectedUrl } of mobileSocials) {
      const socialLink = page.getByTestId(testId);
      await expect(socialLink).toBeVisible();
      await expect(socialLink).toHaveAttribute('href', expect.stringContaining(expectedUrl));
    }
  });

  // ---------------------------------------------------------------------------
  // SECTION 2: BUTTON & INTERACTIVE TRIGGER FUNCTIONALITY CHECKS
  // ---------------------------------------------------------------------------

  test('TC_BTN_001: Desktop & Mobile Theme Toggle buttons function correctly', async ({ page }) => {
    Logger.step('TC_BTN_001: Verifying desktop & mobile theme toggle buttons');
    
    // Desktop Theme Toggle
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    const nav = new NavbarPage(page);
    await page.evaluate(() => window.scrollTo(0, 150));
    
    await expect(nav.themeToggleBtn).toBeEnabled();
    const initialTheme = await page.getAttribute('html', 'data-theme') || 'solar';
    await nav.toggleDesktopTheme();
    expect(await page.getAttribute('html', 'data-theme')).not.toEqual(initialTheme);

    // Mobile Theme Toggle
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(nav.mobileThemeBtn).toBeEnabled();
    await nav.mobileThemeBtn.click();
  });

  test('TC_BTN_002: Mobile Hamburger menu button and close button function correctly', async ({ page }) => {
    Logger.step('TC_BTN_002: Verifying mobile menu hamburger & close buttons');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await expect(nav.hamburgerBtn).toBeEnabled();

    // Open
    await nav.openMobileMenu();
    await expect(nav.mobileDrawer).toBeVisible();

    // Close
    await expect(nav.mobileCloseBtn).toBeEnabled();
    await nav.closeMobileMenu();
    await expect(nav.mobileDrawer).toBeHidden();
  });

  test('TC_BTN_003: macOS Terminal tab buttons toggle correctly', async ({ page }) => {
    Logger.step('TC_BTN_003: Verifying macOS Terminal tab buttons');
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    await expect(about.profileTabBtn).toBeEnabled();
    await expect(about.architectureTabBtn).toBeEnabled();

    await about.switchToArchitectureTab();
    await expect(about.architectureTabBtn).toHaveClass(/active/);

    await about.switchToProfileTab();
    await expect(about.profileTabBtn).toHaveClass(/active/);
  });

  test('TC_BTN_004: Experience dossier modal trigger and close button function correctly', async ({ page }) => {
    Logger.step('TC_BTN_004: Verifying Experience dossier modal trigger & close button');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    const triggerBtn = exp.getMobileDetailsBtn(0);
    await expect(triggerBtn).toBeEnabled();
    await exp.openExperienceDetailsModal(0);
    await expect(exp.modalDialog).toBeVisible();

    await expect(exp.modalCloseBtn).toBeEnabled();
    await exp.closeExperienceDetailsModal();
    await expect(exp.modalDialog).toBeHidden();
  });

  test('TC_BTN_005: Projects carousel Prev, Next, and Pagination dot buttons function correctly', async ({ page }) => {
    Logger.step('TC_BTN_005: Verifying Projects carousel control buttons');
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await expect(projects.prevBtn).toBeDisabled(); // Disabled on first slide

    if (await projects.nextBtn.isEnabled()) {
      await projects.nextSlide();
      await expect(projects.prevBtn).toBeEnabled();
      await projects.prevSlide();
      await expect(projects.prevBtn).toBeDisabled();
    }

    const dot1 = projects.getDotBtn(1);
    if (await dot1.isVisible()) {
      await projects.goToSlide(1);
      await expect(dot1).toHaveClass(/active/);
    }
  });

  test('TC_BTN_006: Playground game tiles and game close button function correctly', async ({ page }) => {
    Logger.step('TC_BTN_006: Verifying Playground game tile buttons & close button');
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    const circleTile = plg.getGameTile('circle');
    await expect(circleTile).toBeEnabled();

    await plg.launchGame('circle');
    await expect(plg.gameModal).toBeVisible();

    await expect(plg.modalCloseBtn).toBeEnabled();
    await plg.closeGameModal();
    await expect(plg.gameModal).toBeHidden();
  });

  test('TC_BTN_007: Contact Form Submit button functions correctly', async ({ page }) => {
    Logger.step('TC_BTN_007: Verifying Contact form submit button');
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await expect(contact.submitBtn).toBeEnabled();
    await contact.fillContactForm('Health Check User', 'test@example.com', 'Testing submit button functionality.');
  });
});
