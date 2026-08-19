import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage.js';
import { Logger } from '../core/logger.js';

test.describe('About Section & macOS Terminal E2E Suite [@module:About]', () => {

  test('TC_ABT_001: [Large 1920px] Renders terminal window and defaults to profile.json tab', async ({ page }) => {
    Logger.step('TC_ABT_001: Terminal profile.json view (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    await expect(about.section).toBeVisible();
    await expect(about.terminalWindow).toBeVisible();
    await expect(about.profileTabBtn).toHaveClass(/active/);
    await expect(about.terminalBody).toContainText('whoami');
    await expect(about.terminalBody).toContainText('cat profile.json');
  });

  test('TC_ABT_002: [Large 1920px] Switching tabs to architecture.sh displays system architecture specs', async ({ page }) => {
    Logger.step('TC_ABT_002: Terminal tab switching to architecture.sh (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    // Switch to architecture.sh tab
    await about.switchToArchitectureTab();
    await expect(about.architectureTabBtn).toHaveClass(/active/);
    await expect(about.terminalBody).toContainText('./architecture.sh');

    // Switch back to profile.json tab
    await about.switchToProfileTab();
    await expect(about.profileTabBtn).toHaveClass(/active/);
    await expect(about.terminalBody).toContainText('cat profile.json');
  });

  test('TC_ABT_003: [Small 375px] Terminal wraps text cleanly on mobile viewports', async ({ page }) => {
    Logger.step('TC_ABT_003: Mobile terminal responsiveness (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    await expect(about.terminalWindow).toBeVisible();
    await expect(about.terminalBody).toBeVisible();
  });

  test('TC_ABT_EC01: [Edge Case] Rapid tab toggling between profile.json and architecture.sh does not desync active tab state', async ({ page }) => {
    Logger.step('TC_ABT_EC01: Rapid terminal tab toggling');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    for (let i = 0; i < 4; i++) {
      await about.switchToArchitectureTab();
      await about.switchToProfileTab();
    }

    await expect(about.profileTabBtn).toHaveClass(/active/);
  });
});
