import { Logger } from '../core/logger.js';

export class ExperiencePage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('experience__container__section'); }
  get modalDialog() { return this.page.getByTestId('experience.modal__dossier__dialog'); }
  get modalCloseBtn() { return this.page.getByTestId('experience.modal__close__btn'); }

  getTimelineCard(index) {
    return this.page.getByTestId(`experience.timeline__card-item__${index}`);
  }

  getMobileDetailsBtn(index) {
    return this.page.getByTestId(`experience.timeline__details__btn-${index}`);
  }

  // Actions
  async openExperienceDetailsModal(index = 0) {
    Logger.info(`Opening experience details dossier modal for index ${index}`);
    await this.getMobileDetailsBtn(index).click();
    await this.modalDialog.waitFor({ state: 'visible' });
  }

  async closeExperienceDetailsModal() {
    Logger.info('Closing experience details dossier modal');
    await this.modalCloseBtn.click();
    await this.modalDialog.waitFor({ state: 'hidden' });
  }
}
