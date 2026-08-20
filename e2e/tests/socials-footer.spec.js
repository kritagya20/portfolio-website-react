import { test, expect } from '@playwright/test';
import { SocialsFooterPage } from '../pages/SocialsFooterPage.js';
import { Logger } from '../core/logger.js';

test.describe('Socials Dock & Footer E2E Suite [@module:SocialsFooter]', () => {

  test('TC_SOC_001: [Large 1920px] Floating glass socials dock becomes visible on scroll', async ({ page }) => {
    Logger.step('TC_SOC_001: Desktop floating socials dock visibility (Large 1920px)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const sf = new SocialsFooterPage(page);

    // Scroll down > 60px
    await page.evaluate(() => window.scrollTo(0, 150));
    await expect(sf.socialsAside).toHaveClass(/visible/);

    // Verify individual social profile links
    await expect(sf.getSocialLink('github')).toHaveAttribute('href', expect.stringContaining('github.com'));
    await expect(sf.getSocialLink('linkedin')).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    await expect(sf.getSocialLink('leetcode')).toHaveAttribute('href', expect.stringContaining('leetcode.com'));
    await expect(sf.getSocialLink('medium')).toHaveAttribute('href', expect.stringContaining('medium.com'));
    await expect(sf.getSocialLink('mail')).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });

  test('TC_FTR_001: [All Viewports] Footer renders visitor count text and dynamic current year', async ({ page }) => {
    Logger.step('TC_FTR_001: Footer visitor count text & current year check');
    await page.goto('/');

    const sf = new SocialsFooterPage(page);
    await sf.footerSection.scrollIntoViewIfNeeded();

    const currentYear = String(new Date().getFullYear());
    await expect(sf.footerSection).toContainText('visitor to my site in');
    await expect(sf.footerSection).toContainText(currentYear);
  });
});
