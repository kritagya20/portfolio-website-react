import { Logger } from '../core/logger.js';

export class SocialsFooterPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get socialsAside() { return this.page.getByTestId('socials__container__aside'); }
  get footerSection() { return this.page.getByTestId('footer__container__footer'); }

  getSocialLink(iconName) {
    return this.page.getByTestId(`socials__link__a-${iconName}`);
  }
}
