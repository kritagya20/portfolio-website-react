import { Logger } from '../core/logger.js';

export class HeroPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('hero__container__section'); }
  get exploreLink() { return this.page.getByTestId('hero__explore__link'); }
  get resumeLink() { return this.page.getByTestId('hero__resume__link'); }

  getSatelliteNode(index) {
    return this.page.getByTestId(`hero__satellite__node-${index}`);
  }

  // Actions
  async hoverSatelliteNode(index) {
    Logger.info(`Hovering hero satellite node #${index}`);
    await this.getSatelliteNode(index).hover();
  }

  async clickSatelliteNode(index) {
    Logger.info(`Clicking hero satellite node #${index}`);
    await this.getSatelliteNode(index).click();
  }

  async triggerMouseMove(x = 100, y = 100) {
    Logger.info(`Triggering mouse move over hero stage at (${x}, ${y})`);
    await this.section.mouse.move(x, y);
  }
}
