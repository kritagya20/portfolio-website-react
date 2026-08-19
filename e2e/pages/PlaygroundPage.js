import { Logger } from '../core/logger.js';

export class PlaygroundPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('playground__container__section'); }
  get gameModal() { return this.page.getByTestId('playground.modal__game__dialog'); }
  get modalCloseBtn() { return this.page.getByTestId('playground.modal__close__btn'); }

  getGameTile(gameId) {
    return this.page.getByTestId(`playground__tile__btn-${gameId}`);
  }

  // Actions
  async launchGame(gameId) {
    Logger.info(`Launching interactive game #${gameId}`);
    await this.getGameTile(gameId).click();
    await this.gameModal.waitFor({ state: 'visible' });
  }

  async closeGameModal() {
    Logger.info('Closing active game modal');
    await this.modalCloseBtn.click();
    await this.gameModal.waitFor({ state: 'hidden' });
  }
}
