import { test, expect } from '@playwright/test';
import { PlaygroundPage } from '../pages/PlaygroundPage.js';
import { Logger } from '../core/logger.js';

test.describe('Playground Mini-Games In-Depth E2E Suite [@module:Playground]', () => {

  test('TC_PLG_001: [Large 1920px] Renders game tiles for Perfect Circle, Typing Test, Memory Match, and Cosmic Cipher', async ({ page }) => {
    Logger.step('TC_PLG_001: Playground game tiles rendering check (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await expect(plg.section).toBeVisible();
    await expect(plg.getGameTile('circle')).toBeVisible();
    await expect(plg.getGameTile('typing')).toBeVisible();
    await expect(plg.getGameTile('memory')).toBeVisible();
    await expect(plg.getGameTile('hangman')).toBeVisible();
  });

  test('TC_PLG_002: [In-Depth Perfect Circle] Canvas drawing score calculation and reset', async ({ page }) => {
    Logger.step('TC_PLG_002: Testing Perfect Circle canvas drawing & scoring');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await plg.launchGame('circle');
    await expect(plg.pcCanvas).toBeVisible();

    // Draw circle on canvas
    await plg.drawCircleOnCanvas();

    // Verify score badge is generated and rendered
    await expect(plg.pcScoreBadge).toBeVisible();
    await expect(plg.pcScoreNum).toContainText('%');

    // Click Try Again button
    await plg.pcTryAgainBtn.click();
    await expect(plg.pcScoreBadge).toBeHidden();

    await plg.closeGameModal();
  });

  test('TC_PLG_003: [In-Depth Typing Test] Target text typing, WPM stats, and snippet cycling', async ({ page }) => {
    Logger.step('TC_PLG_003: Testing Typing Test real-time typing & WPM calculation');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await plg.launchGame('typing');
    await expect(plg.ttTargetPre).toBeVisible();
    await expect(plg.ttInput).toBeVisible();

    // Type characters into textarea
    await plg.ttInput.focus();
    await plg.ttInput.type('SELECT u.id, u.email FROM users u;', { delay: 10 });

    // Verify stats pills render WPM and Accuracy
    const wpmStat = page.locator('.tt-stat').first();
    await expect(wpmStat).toBeVisible();
    await expect(wpmStat).toContainText('WPM');

    // Click New Snippet button
    await plg.ttNewSnippetBtn.click();
    await expect(plg.ttInput).toBeFocused();

    await plg.closeGameModal();
  });

  test('TC_PLG_004: [In-Depth Memory Match] Card grid rendering, flipping cards, and restart', async ({ page }) => {
    Logger.step('TC_PLG_004: Testing Memory Match 24-card grid flipping & move tracking');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await plg.launchGame('memory');
    await expect(plg.mmCards.first()).toBeVisible();

    // Verify 24 cards (12 pairs) in grid
    const cardCount = await plg.mmCards.count();
    expect(cardCount).toBe(24);

    // Flip card #0 and card #1
    await plg.clickCard(0);
    await plg.clickCard(1);

    // Verify moves counter increments to 1
    await expect(plg.mmMovesCount).toContainText('1');

    // Click Shuffle & Restart button
    await plg.mmRestartBtn.click();
    await expect(plg.mmMovesCount).toContainText('0');

    await plg.closeGameModal();
  });

  test('TC_PLG_005: [In-Depth Cosmic Cipher] Radar SVG, hint display, letter key guesses, and new puzzle', async ({ page }) => {
    Logger.step('TC_PLG_005: Testing Cosmic Cipher radar telemetry, hint display, & letter guessing');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await plg.launchGame('hangman');
    await expect(plg.ccRadarSvg).toBeVisible();
    await expect(plg.ccHintText).toBeVisible();
    await expect(plg.ccWordDisplay).toBeVisible();

    // Click a letter key e.g., 'E'
    await plg.pressKeyLetter('E');
    await page.waitForTimeout(200);

    // Click New Word button to cycle word puzzle
    await plg.ccNextWordBtn.click();
    await expect(plg.ccWordDisplay).toBeVisible();

    await plg.closeGameModal();
  });

  test('TC_PLG_006: [Small 375px] Launching game tile opens interactive game modal & locks scroll', async ({ page }) => {
    Logger.step('TC_PLG_006: Mobile game modal launch & scroll lock (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    // Launch Perfect Circle game
    await plg.launchGame('circle');
    await expect(plg.gameModal).toBeVisible();

    // Verify background body scroll is locked
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe('hidden');

    // Close game modal
    await plg.closeGameModal();
    await expect(plg.gameModal).toBeHidden();

    // Verify background body scroll is restored
    const restoredOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(restoredOverflow).toBe('');
  });

  test('TC_PLG_EC01: [Edge Case] Pressing Escape key closes active game modal', async ({ page }) => {
    Logger.step('TC_PLG_EC01: Keyboard Escape key closes game modal');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const plg = new PlaygroundPage(page);
    await plg.section.scrollIntoViewIfNeeded();

    await plg.launchGame('typing');
    await expect(plg.gameModal).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(plg.gameModal).toBeHidden();
  });
});
