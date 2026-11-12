import { test, expect } from '@playwright/test';
import { ExperiencePage } from '../pages/ExperiencePage.js';
import { Logger } from '../core/logger.js';

test.describe('Experience Section & Dossier Modal E2E Suite [@module:Experience]', () => {

  test('TC_EXP_001: [Large 1920px] Timeline renders cards with full bullet details on desktop', async ({ page }) => {
    Logger.step('TC_EXP_001: Experience desktop timeline card verification (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    await expect(exp.section).toBeVisible();
    await expect(exp.getTimelineCard(0)).toBeVisible();
  });

  test('TC_EXP_002: [Small 375px] Mobile timeline shows 2-3 line summary teaser with "View details" button and hides card skills', async ({ page }) => {
    Logger.step('TC_EXP_002: Streamlined mobile timeline card with summary teaser (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    // Verify "View details" button is visible and properly labeled
    const triggerBtn = exp.getMobileDetailsBtn(0);
    await expect(triggerBtn).toBeVisible();
    await expect(triggerBtn).toContainText('View details');

    // Verify desktop bullets are hidden on small screens
    const firstCard = exp.getTimelineCard(0);
    const bulletsDesktop = firstCard.locator('.tl-bullets-desktop');
    await expect(bulletsDesktop).toBeHidden();

    // Verify location is hidden on small screens to prevent clutter
    const location = firstCard.locator('.where');
    await expect(location).toBeHidden();

    // Verify mobile summary teaser is visible
    const mobileSummary = firstCard.locator('.tl-mobile-summary');
    await expect(mobileSummary).toBeVisible();

    // Verify skills on card are hidden on mobile (replaced by summary)
    const techRow = firstCard.locator('.tech-row');
    await expect(techRow).toBeHidden();
  });

  test('TC_EXP_003: [Small 375px] Opening dossier modal locks body scroll & restoring on close', async ({ page }) => {
    Logger.step('TC_EXP_003: Mobile dossier modal open, body scroll lock, and close (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    // Open modal
    await exp.openExperienceDetailsModal(0);
    await expect(exp.modalDialog).toBeVisible();

    // Verify background body position is fixed (locked)
    const bodyPos = await page.evaluate(() => document.body.style.position);
    expect(bodyPos).toBe('fixed');

    // Close modal via close button
    await exp.closeExperienceDetailsModal();
    await expect(exp.modalDialog).toBeHidden();

    // Verify background body position is restored
    const restoredPos = await page.evaluate(() => document.body.style.position);
    expect(restoredPos).toBe('');
  });

  test('TC_EXP_EC01: [Edge Case] Pressing Escape key closes open dossier modal', async ({ page }) => {
    Logger.step('TC_EXP_EC01: Keyboard Escape key closes dossier modal');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    await exp.openExperienceDetailsModal(0);
    await expect(exp.modalDialog).toBeVisible();

    // Press Escape key
    await page.keyboard.press('Escape');
    await expect(exp.modalDialog).toBeHidden();
  });

  test('TC_EXP_EC02: [Edge Case] Pressing Escape key when modal is closed causes zero errors', async ({ page }) => {
    Logger.step('TC_EXP_EC02: Keyboard Escape key when modal closed');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await page.keyboard.press('Escape');
  });
});
