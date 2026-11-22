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
    await expect(about.statusBar).toBeVisible();
    await expect(about.statusBar).toContainText('zsh 5.9');
  });

  test('TC_ABT_004: [Small 375px] Terminal starts in collapsed peek mode and expands on toggle button click', async ({ page }) => {
    Logger.step('TC_ABT_004: Mobile terminal peek mode and expand toggle (Small 375px)');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    // Default mobile state should be collapsed peek mode
    await expect(about.terminalBody).toHaveClass(/collapsed/);
    await expect(about.expandBtn).toBeVisible();
    await expect(about.expandBtn).toContainText('Expand Full Terminal');

    // Click to expand
    await about.toggleExpand();
    await expect(about.terminalBody).toHaveClass(/expanded/);
    await expect(about.expandBtn).toContainText('Collapse Terminal');

    // Click again to collapse
    await about.toggleExpand();
    await expect(about.terminalBody).toHaveClass(/collapsed/);
    await expect(about.expandBtn).toContainText('Expand Full Terminal');
  });

  test('TC_ABT_005: [Small 375px] macOS window minimize and zoom buttons toggle terminal expansion', async ({ page }) => {
    Logger.step('TC_ABT_005: Mobile window controls toggle terminal expansion');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    await expect(about.terminalBody).toHaveClass(/collapsed/);

    // Click yellow minimize button to expand
    await about.minimizeBtn.click();
    await expect(about.terminalBody).toHaveClass(/expanded/);

    // Click green zoom button to collapse back
    await about.zoomBtn.click();
    await expect(about.terminalBody).toHaveClass(/collapsed/);
  });

  test('TC_ABT_EC01: [Edge Case] Rapid tab toggling between profile.json and architecture.sh does not desync active tab state', async ({ page }) => {
    Logger.step('TC_ABT_EC01: Rapid terminal tab toggling');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const about = new AboutPage(page);
    await about.section.scrollIntoViewIfNeeded();

    for (let i = 0; i < 2; i++) {
      await about.switchToArchitectureTab();
      await expect(about.architectureTabBtn).toHaveClass(/active/);
      await about.switchToProfileTab();
      await expect(about.profileTabBtn).toHaveClass(/active/);
    }

    await expect(about.profileTabBtn).toHaveClass(/active/);
  });
});
