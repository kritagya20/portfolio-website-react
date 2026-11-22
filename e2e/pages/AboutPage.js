import { Logger } from '../core/logger.js';

export class AboutPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('about__container_section'); }
  get terminalWindow() { return this.page.getByTestId('about__terminal_window'); }
  get profileTabBtn() { return this.page.getByTestId('about__profile_tab'); }
  get architectureTabBtn() { return this.page.getByTestId('about__architecture_tab'); }
  get terminalBody() { return this.page.getByTestId('about__terminal_body'); }
  get expandBtn() { return this.page.getByTestId('about__terminalExpand_btn'); }
  get minimizeBtn() { return this.page.getByTestId('about__terminalMinimize_btn'); }
  get zoomBtn() { return this.page.getByTestId('about__terminalZoom_btn'); }
  get statusBar() { return this.page.getByTestId('about__status_bar'); }
  get storyColumn() { return this.page.getByTestId('about__story_column'); }

  // Actions
  async toggleExpand() {
    Logger.info('Toggling mobile terminal expand/collapse state');
    await this.expandBtn.click();
  }

  async switchToProfileTab() {
    Logger.info('Switching terminal tab to profile.json');
    await this.terminalWindow.waitFor({ state: 'visible' });
    await this.profileTabBtn.click();
  }

  async switchToArchitectureTab() {
    Logger.info('Switching terminal tab to architecture.sh');
    await this.terminalWindow.waitFor({ state: 'visible' });
    await this.architectureTabBtn.click();
  }
}
