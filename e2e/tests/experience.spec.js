import { test, expect } from '@playwright/test';
import { ExperiencePage } from '../pages/ExperiencePage.js';
import { Logger } from '../core/logger.js';

test.describe('Experience Section E2E Suite [@module:Experience]', () => {

  test('TC_EXP_001: Experience timeline renders cards with role, company, and stack', async ({ page }) => {
    Logger.step('TC_EXP_001: Experience timeline card verification');
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    await expect(exp.section).toBeVisible();
    await expect(exp.getTimelineCard(0)).toBeVisible();
  });

  test('TC_EXP_002: Mobile view details trigger opens dossier modal', async ({ page }) => {
    Logger.step('TC_EXP_002: Mobile dossier modal open & close');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const exp = new ExperiencePage(page);
    await exp.section.scrollIntoViewIfNeeded();

    await exp.openExperienceDetailsModal(0);
    await expect(exp.modalDialog).toBeVisible();

    await exp.closeExperienceDetailsModal();
    await expect(exp.modalDialog).toBeHidden();
  });
});
