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

  test('TC_CNT_EC01: [Edge Case] Submitting empty contact form triggers inline field errors and auto-focuses first invalid input', async ({ page }) => {
    Logger.step('TC_CNT_EC01: Empty contact form submit validation');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await contact.submitForm();
    await expect(contact.nameError).toBeVisible();
    await expect(contact.nameError).toContainText('Your name is required');
    await expect(contact.emailError).toBeVisible();
    await expect(contact.emailError).toContainText('Your email address is required');
    await expect(contact.msgError).toBeVisible();
    await expect(contact.msgError).toContainText('Message is required');

    // First invalid field (name) should receive auto-focus
    await expect(contact.nameInput).toBeFocused();
  });

  test('TC_CNT_003: Inline validation errors display per-field and clear dynamically on input', async ({ page }) => {
    Logger.step('TC_CNT_003: Field-level validation rules & dynamic error clearing');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    // Trigger validation
    await contact.submitForm();
    await expect(contact.nameError).toContainText('Your name is required');

    // Type 1 char -> name must be at least 2 chars
    await contact.nameInput.fill('K');
    await contact.submitForm();
    await expect(contact.nameError).toContainText('Name must be at least 2 characters');

    // Type valid name -> error clears
    await contact.nameInput.fill('Kritagya');
    await expect(contact.nameError).toBeHidden();

    // Invalid email format
    await contact.emailInput.fill('not-an-email');
    await contact.submitForm();
    await expect(contact.emailError).toContainText('Please enter a valid email');

    // Type valid email -> error clears
    await contact.emailInput.fill('test@example.com');
    await expect(contact.emailError).toBeHidden();
  });

  test('TC_CNT_004: Valid form submit triggers transmission toast notification', async ({ page }) => {
    Logger.step('TC_CNT_004: Valid contact submit triggers toast feedback');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const contact = new ContactPage(page);
    await contact.section.scrollIntoViewIfNeeded();

    await contact.fillContactForm('Engineer Recruiter', 'recruiter@company.com', 'Exciting backend platform engineering opportunity.');
    await contact.submitForm();

    await expect(contact.toast).toBeVisible();
    await expect(contact.toast).toContainText('Opening mail client to transmit signal');
  });
});
