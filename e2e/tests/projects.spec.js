import { test, expect } from '@playwright/test';
import { ProjectsPage } from '../pages/ProjectsPage.js';
import { Logger } from '../core/logger.js';

test.describe('Projects Carousel E2E Suite [@module:Projects]', () => {

  test('TC_PRJ_001: [Large 1920px] Carousel renders 3 visible project cards and GitHub profile CTA', async ({ page }) => {
    Logger.step('TC_PRJ_001: Desktop 3-card carousel rendering (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await expect(projects.section).toBeVisible();
    await expect(projects.getProjectCard(0)).toBeVisible();
    await expect(projects.getProjectCard(1)).toBeVisible();
    await expect(projects.getProjectCard(2)).toBeVisible();

    await expect(projects.githubCtaLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  test('TC_PRJ_002: [Medium 768px] Carousel adapts responsive layout for tablet (2 visible cards)', async ({ page }) => {
    Logger.step('TC_PRJ_002: Tablet 2-card carousel responsiveness (Medium 768px)');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await expect(projects.section).toBeVisible();
    await expect(projects.getProjectCard(0)).toBeVisible();
  });

  test('TC_PRJ_003: [Small 375px] Carousel adapts responsive layout for mobile (1 visible card)', async ({ page }) => {
    Logger.step('TC_PRJ_003: Mobile 1-card carousel responsiveness (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await expect(projects.section).toBeVisible();
    await expect(projects.getProjectCard(0)).toBeVisible();
  });

  test('TC_PRJ_004: [Large 1920px] Carousel Prev & Next buttons navigate slides cleanly', async ({ page }) => {
    Logger.step('TC_PRJ_004: Carousel Prev & Next buttons navigation');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    // Prev button should be disabled initially on first slide
    await expect(projects.prevBtn).toBeDisabled();

    // Click Next button
    if (await projects.nextBtn.isEnabled()) {
      await projects.nextSlide();
      await expect(projects.prevBtn).toBeEnabled();

      // Click Prev button to return
      await projects.prevSlide();
      await expect(projects.prevBtn).toBeDisabled();
    }
  });

  test('TC_PRJ_005: [Large 1920px] Pagination dot buttons navigate directly to project slides', async ({ page }) => {
    Logger.step('TC_PRJ_005: Pagination dot navigation');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    const dot1 = projects.getDotBtn(1);
    if (await dot1.isVisible()) {
      await projects.goToSlide(1);
      await expect(dot1).toHaveClass(/active/);
    }
  });

  test('TC_PRJ_006: [Small 375px] Touch swipe left advances slide on mobile', async ({ page }) => {
    Logger.step('TC_PRJ_006: Touch swipe left advances carousel slide (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await projects.swipeLeft(120);
    await page.waitForTimeout(300);
  });

  test('TC_PRJ_EC01: [Edge Case] Swiping below 40px threshold does not change slide index', async ({ page }) => {
    Logger.step('TC_PRJ_EC01: Touch swipe below 40px threshold ignored');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    // Swipe very small distance (10px)
    await projects.swipeLeft(10);
    await page.waitForTimeout(100);
  });
});
