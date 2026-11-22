import { Logger } from '../core/logger.js';

export class NavbarPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get desktopHeader() { return this.page.getByTestId('navbar__main_header'); }
  get desktopPill() { return this.page.getByTestId('navbar__nav_pill'); }
  get themeToggleBtn() { return this.page.getByTestId('socials__themeToggle_btn'); }
  get mobileBar() { return this.page.getByTestId('navbar__mobile_bar'); }
  get mobileThemeBtn() { return this.page.getByTestId('navbar__mobileTheme_btn'); }
  get hamburgerBtn() { return this.page.getByTestId('navbar__hamburger_btn'); }
  get mobileDrawer() { return this.page.getByTestId('navbar__menu_drawer'); }
  get mobileCloseBtn() { return this.page.getByTestId('navbar__drawerClose_btn'); }
  get drawerThemeBtn() { return this.page.getByTestId('navbar__drawerTheme_btn'); }

  getNavLink(linkId) {
    const linkMap = { home: 0, about: 1, experience: 2, projects: 3, playground: 4, contact: 5 };
    const index = typeof linkId === 'number' ? linkId : linkMap[linkId];
    return index !== undefined
      ? this.page.getByTestId('navbar__nav_link').nth(index)
      : this.page.locator(`[test-id="navbar__nav_link"][href="#${linkId}"]`);
  }

  getMobileNavLink(linkId) {
    const linkMap = { home: 0, about: 1, experience: 2, projects: 3, playground: 4, contact: 5 };
    const index = typeof linkId === 'number' ? linkId : linkMap[linkId];
    return index !== undefined
      ? this.page.getByTestId('navbar__drawer_link').nth(index)
      : this.page.locator(`[test-id="navbar__drawer_link"][href="#${linkId}"]`);
  }

  // Actions
  async toggleDesktopTheme() {
    Logger.info('Toggling desktop theme');
    await this.themeToggleBtn.click();
  }

  async openMobileMenu() {
    Logger.info('Opening mobile navigation drawer');
    await this.hamburgerBtn.click();
    await this.mobileDrawer.waitFor({ state: 'visible' });
  }

  async closeMobileMenu() {
    Logger.info('Closing mobile navigation drawer');
    await this.mobileCloseBtn.click();
    await this.mobileDrawer.waitFor({ state: 'hidden' });
  }

  async navigateTo(linkId) {
    Logger.info(`Navigating to section #${linkId}`);
    await this.getNavLink(linkId).click();
  }

  async navigateMobileTo(linkId) {
    Logger.info(`Navigating via mobile drawer to #${linkId}`);
    await this.openMobileMenu();
    await this.getMobileNavLink(linkId).click();
  }
}
