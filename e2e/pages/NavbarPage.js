import { Logger } from '../core/logger.js';

export class NavbarPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get desktopHeader() { return this.page.getByTestId('navbar__header__nav'); }
  get desktopPill() { return this.page.getByTestId('navbar__pill__div'); }
  get themeToggleBtn() { return this.page.getByTestId('navbar__theme-toggle__btn'); }
  get mobileBar() { return this.page.getByTestId('navbar.mobile__bar__container'); }
  get mobileThemeBtn() { return this.page.getByTestId('navbar.mobile__theme-toggle__btn'); }
  get hamburgerBtn() { return this.page.getByTestId('navbar.mobile__hamburger__btn'); }
  get mobileDrawer() { return this.page.getByTestId('navbar.mobile__drawer__dialog'); }
  get mobileCloseBtn() { return this.page.getByTestId('navbar.mobile__close__btn'); }
  get drawerThemeBtn() { return this.page.getByTestId('navbar.mobile__drawer-theme-toggle__btn'); }

  getNavLink(linkId) {
    return this.page.getByTestId(`navbar__link__a-${linkId}`);
  }

  getMobileNavLink(linkId) {
    return this.page.getByTestId(`navbar.mobile__link__a-${linkId}`);
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
