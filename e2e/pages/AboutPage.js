import { Logger } from '../core/logger.js';

export class AboutPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('about__container__section'); }
  get terminalWindow() { return this.page.getByTestId('about.terminal__window__container'); }
  get profileTabBtn() { return this.page.getByTestId('about.terminal__tab-profile__btn'); }
  get architectureTabBtn() { return this.page.getByTestId('about.terminal__tab-architecture__btn'); }
  get terminalBody() { return this.page.getByTestId('about.terminal__body__div'); }

  // Actions
  async switchToProfileTab() {
    Logger.info('Switching terminal tab to profile.json');
    await this.profileTabBtn.click();
  }

  async switchToArchitectureTab() {
    Logger.info('Switching terminal tab to architecture.sh');
    await this.architectureTabBtn.click();
  }
}
