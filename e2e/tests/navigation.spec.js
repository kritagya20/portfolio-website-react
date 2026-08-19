import { test, expect } from '@playwright/test';
import { NavbarPage } from '../pages/NavbarPage.js';
import { Logger } from '../core/logger.js';

test.describe('Navigation & Header E2E Suite [@module:Navigation]', () => {

  test('TC_NAV_001: Desktop navigation header becomes visible on scroll and navigates to section', async ({ page }) => {
    Logger.step('TC_NAV_001: Desktop navbar scroll & navigation');
    await page.goto('/');

    const nav = new NavbarPage(page);

    // Scroll down to make pill navbar visible
    await page.evaluate(() => window.scrollTo(0, 150));
    await expect(nav.desktopHeader).toBeVisible();

    // Click projects link
    await nav.navigateTo('projects');
    await expect(page.getByTestId('projects__container__section')).toBeInViewport();
  });

  test('TC_NAV_002: Mobile top bar theme toggle & drawer navigation flow', async ({ page }) => {
    Logger.step('TC_NAV_002: Mobile drawer menu flow');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const nav = new NavbarPage(page);
    await expect(nav.mobileBar).toBeVisible();

    // Open mobile drawer
    await nav.openMobileMenu();
    await expect(nav.mobileDrawer).toBeVisible();

    // Click contact link in mobile drawer
    await nav.getMobileNavLink('contact').click();
    await expect(page.getByTestId('contact__container__section')).toBeInViewport();
  });

  test('TC_NAV_003: Desktop theme toggle cycles theme attribute', async ({ page }) => {
    Logger.step('TC_NAV_003: Desktop theme toggle cycle');
    await page.goto('/');

    const nav = new NavbarPage(page);
    await page.evaluate(() => window.scrollTo(0, 150));

    const initialTheme = await page.getAttribute('html', 'data-theme') || 'solar';
    await nav.toggleDesktopTheme();
    const nextTheme = await page.getAttribute('html', 'data-theme');

    expect(nextTheme).not.toEqual(initialTheme);
  });
});
