import { test, expect } from '@playwright/test';
import { ProjectsPage } from '../pages/ProjectsPage.js';
import { Logger } from '../core/logger.js';

test.describe('Projects Carousel E2E Suite [@module:Projects]', () => {

  test('TC_PRJ_001: Projects section renders project cards and GitHub CTA link', async ({ page }) => {
    Logger.step('TC_PRJ_001: Project cards rendering check');
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    await expect(projects.section).toBeVisible();
    await expect(projects.getProjectCard(0)).toBeVisible();
    await expect(projects.githubCtaLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  test('TC_PRJ_002: Project carousel navigation next and prev buttons', async ({ page }) => {
    Logger.step('TC_PRJ_002: Carousel next and prev interaction');
    await page.goto('/');

    const projects = new ProjectsPage(page);
    await projects.section.scrollIntoViewIfNeeded();

    if (await projects.nextBtn.isVisible()) {
      await projects.nextSlide();
      await projects.prevSlide();
    }
  });
});
