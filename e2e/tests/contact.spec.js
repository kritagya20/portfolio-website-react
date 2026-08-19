import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage.js';
import { Logger } from '../core/logger.js';

test.describe('Contact Section E2E Suite [@module:Contact]', () => {

  test('TC_CNT_001: Contact channel links are visible with correct targets', async ({ page }) => {
    Logger.step('TC_CNT_001: Contact info channels check');
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await expect(contact.emailChannel).toHaveAttribute('href', expect.stringContaining('mailto:'));
    await expect(contact.phoneChannel).toHaveAttribute('href', expect.stringContaining('tel:'));
    await expect(contact.resumeChannel).toHaveAttribute('target', '_blank');
  });

  test('TC_CNT_002: Contact form input interaction', async ({ page }) => {
    Logger.step('TC_CNT_002: Form typing check');
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await contact.fillContactForm('Alex QA', 'alex@example.com', 'Testing automation contact flow.');
    await expect(contact.nameInput).toHaveValue('Alex QA');
    await expect(contact.emailInput).toHaveValue('alex@example.com');
  });
});
