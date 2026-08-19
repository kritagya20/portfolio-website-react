import { test, expect } from '@playwright/test';
import { NavbarPage } from '../pages/NavbarPage.js';
import { Logger } from '../core/logger.js';

test.describe('Navigation & Theme E2E Suite [@module:Navigation]', () => {

  test('TC_NAV_001: [Large 1920px] Desktop floating pill navbar arrives on scroll and navigates smoothly', async ({ page }) => {
    Logger.step('TC_NAV_001: Desktop navbar scroll & navigation (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const nav = new NavbarPage(page);

    // Header is hidden at top of page (scrollY <= 30)
    await expect(nav.desktopHeader).toHaveCSS('opacity', '0');

    // Scroll down past 30px -> Header becomes visible
    await page.evaluate(() => window.scrollTo(0, 150));
    await expect(nav.desktopHeader).toBeVisible();

    // Click links
    await nav.navigateTo('about');
    await expect(page.getByTestId('about__container__section')).toBeInViewport();

    await nav.navigateTo('projects');
    await expect(page.getByTestId('projects__container__section')).toBeInViewport();
  });

  test('TC_NAV_002: [Large 1920px] Desktop theme toggle cycles theme attribute', async ({ page }) => {
    Logger.step('TC_NAV_002: Desktop theme toggle cycle (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await page.evaluate(() => window.scrollTo(0, 150));

    const theme1 = await page.getAttribute('html', 'data-theme') || 'solar';
    await nav.toggleDesktopTheme();
    const theme2 = await page.getAttribute('html', 'data-theme');
    expect(theme2).not.toEqual(theme1);

    await nav.toggleDesktopTheme();
    const theme3 = await page.getAttribute('html', 'data-theme');
    expect(theme3).not.toEqual(theme2);
  });

  test('TC_NAV_003: [Medium 768px] Tablet top bar renders theme & menu buttons', async ({ page }) => {
    Logger.step('TC_NAV_003: Tablet top bar rendering (Medium 768px)');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await expect(nav.mobileBar).toBeVisible();
    await expect(nav.mobileThemeBtn).toBeVisible();
    await expect(nav.hamburgerBtn).toBeVisible();
  });

  test('TC_NAV_004: [Small 375px] Mobile drawer menu opens, locks body scroll, and navigates', async ({ page }) => {
    Logger.step('TC_NAV_004: Mobile drawer menu flow & body scroll lock (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await expect(nav.mobileBar).toBeVisible();

    // Open drawer
    await nav.openMobileMenu();
    await expect(nav.mobileDrawer).toBeVisible();

    // Verify background body scroll is locked
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Click contact link in mobile drawer
    await nav.getMobileNavLink('contact').click();
    await expect(nav.mobileDrawer).toBeHidden();
    await expect(page.getByTestId('contact__container__section')).toBeInViewport();
  });

  test('TC_NAV_EC01: [Edge Case] Mobile drawer open and close sequence protection', async ({ page }) => {
    Logger.step('TC_NAV_EC01: Mobile drawer open and close sequence');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);

    // Open drawer
    await nav.openMobileMenu();
    await expect(nav.mobileDrawer).toBeVisible();

    // Close drawer via close button
    await nav.closeMobileMenu();
    await expect(nav.mobileDrawer).toBeHidden();
  });

  test('TC_NAV_EC02: [Edge Case] Closing drawer restores background body overflow state', async ({ page }) => {
    Logger.step('TC_NAV_EC02: Closing mobile drawer restores body overflow');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await nav.openMobileMenu();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');

    await nav.closeMobileMenu();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  });
});
