import { Logger } from '../core/logger.js';

export class ExperiencePage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('experience__container_section'); }
  get modalDialog() { return this.page.getByTestId('experience__dossier_modal'); }
  get modalCloseBtn() { return this.page.getByTestId('experience__modalClose_btn'); }
  get modalTitle() { return this.page.locator('[test-id="experience__modal_heading"], .exp-modal-title'); }
  get modalCompany() { return this.page.locator('[test-id="experience__modal_heading"], .exp-modal-title'); }
  get modalBullets() { return this.page.locator('.exp-modal-body li'); }

  getTimelineCard(index) {
    return this.page.getByTestId('experience__timeline_card').nth(index);
  }

  getMobileDetailsBtn(index) {
    return this.page.getByTestId('experience__details_btn').nth(index);
  }

  getMobileSummaryWrapper(index) {
    return this.getTimelineCard(index).locator('[test-id="experience__summary_wrapper"], .tl-mobile-summary-wrapper');
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
