import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage.js';
import { Logger } from '../core/logger.js';

test.describe('Contact Section & Form E2E Suite [@module:Contact]', () => {

  test('TC_CNT_001: [Large 1920px] Contact channel cards have valid mailto, tel, and PDF targets', async ({ page }) => {
    Logger.step('TC_CNT_001: Contact channel links check (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await expect(contact.emailChannel).toHaveAttribute('href', expect.stringContaining('mailto:'));
    await expect(contact.phoneChannel).toHaveAttribute('href', expect.stringContaining('tel:'));
    await expect(contact.resumeChannel).toHaveAttribute('target', '_blank');
  });

  test('TC_CNT_002: [Small 375px] Typing into Contact form inputs updates fields cleanly on mobile', async ({ page }) => {
    Logger.step('TC_CNT_002: Contact form typing interaction (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await contact.fillContactForm('Sarah SDET', 'sarah.sdet@example.com', 'Automated E2E contact transmission text.');
    await expect(contact.nameInput).toHaveValue('Sarah SDET');
    await expect(contact.emailInput).toHaveValue('sarah.sdet@example.com');
    await expect(contact.messageTextarea).toHaveValue('Automated E2E contact transmission text.');
  });

  test('TC_CNT_EC01: [Edge Case] Submitting empty contact form does not crash page', async ({ page }) => {
    Logger.step('TC_CNT_EC01: Empty contact form submit validation');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await contact.submitForm();
    await expect(contact.nameInput).toBeVisible();
  });
});
