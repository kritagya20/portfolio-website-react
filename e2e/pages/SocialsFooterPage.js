import { Logger } from '../core/logger.js';

export class SocialsFooterPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get socialsAside() { return this.page.getByTestId('socials__container_aside'); }
  get footerSection() { return this.page.getByTestId('footer__container_footer'); }

  getSocialLink(iconName) {
    const socialMap = { github: 0, leetcode: 1, medium: 2, linkedin: 3, mail: 4 };
    const index = typeof iconName === 'number' ? iconName : socialMap[iconName];
    return index !== undefined
      ? this.page.getByTestId('socials__dock_link').nth(index)
      : this.page.locator(`[test-id="socials__dock_link"][aria-label*="${iconName}" i]`);
  }
}
