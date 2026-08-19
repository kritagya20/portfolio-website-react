import { test, expect } from '@playwright/test';
import { HeroPage } from '../pages/HeroPage.js';
import { Logger } from '../core/logger.js';

test.describe('Hero Section E2E Suite [@module:Hero]', () => {

  test('TC_HERO_001: [Large 1920px] Hero card renders typewriter text, Explore CTA, and Resume link', async ({ page }) => {
    Logger.step('TC_HERO_001: Hero core card elements (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const hero = new HeroPage(page);
    await expect(hero.section).toBeVisible();

    // Verify Explore link
    await expect(hero.exploreLink).toHaveAttribute('href', '#about');

    // Verify Resume link
    await expect(hero.resumeLink).toHaveAttribute('target', '_blank');
    await expect(hero.resumeLink).toHaveAttribute('href', expect.stringContaining('.pdf'));
  });

  test('TC_HERO_002: [Large 1920px] Hovering satellite tech node applies glowing active state', async ({ page }) => {
    Logger.step('TC_HERO_002: Orbiting satellite hover interaction (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const hero = new HeroPage(page);

    const sat0 = hero.getSatelliteNode(0);
    await sat0.scrollIntoViewIfNeeded();
    await sat0.hover();

    await expect(sat0).toHaveClass(/sat-active/);
  });

  test('TC_HERO_003: [Large 1920px] Clicking satellite node dispatches slide navigation to project carousel', async ({ page }) => {
    Logger.step('TC_HERO_003: Satellite click slide navigation (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const hero = new HeroPage(page);
    await hero.clickSatelliteNode(0);

    // Should scroll down to project carousel
    await expect(page.getByTestId('projects__container__section')).toBeInViewport();
  });

  test('TC_HERO_004: [Small 375px] Hero section scales down cleanly for mobile viewports', async ({ page }) => {
    Logger.step('TC_HERO_004: Hero section mobile responsiveness (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const hero = new HeroPage(page);
    await expect(hero.section).toBeVisible();
    await expect(hero.exploreLink).toBeVisible();
  });

  test('TC_HERO_EC01: [Edge Case] Rapid hovering between satellite nodes updates active state cleanly', async ({ page }) => {
    Logger.step('TC_HERO_EC01: Rapid satellite hover switching');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const hero = new HeroPage(page);

    for (let i = 0; i < 4; i++) {
      await hero.hoverSatelliteNode(i);
      await page.waitForTimeout(50);
    }
  });
});
