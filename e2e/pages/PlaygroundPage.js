import { Logger } from '../core/logger.js';

export class PlaygroundPage {
  constructor(page) {
    this.page = page;
  }

  // Section Locators
  get section() { return this.page.getByTestId('playground__container_section'); }
  get gameModal() { return this.page.getByTestId('playground__game_modal'); }
  get modalCloseBtn() { return this.page.getByTestId('playground__modalClose_btn'); }

  getGameTile(gameId) {
    const gameMap = { circle: 0, typing: 1, memory: 2, hangman: 3 };
    const index = typeof gameId === 'number' ? gameId : gameMap[gameId];
    return this.page.getByTestId('playground__game_tile').nth(index);
  }

  // Game 1: Perfect Circle Locators & Actions
  get pcCanvas() { return this.page.locator('[test-id="playground__circle_canvas"], .pc-stage canvas'); }
  get pcScoreBadge() { return this.page.locator('[test-id="playground__circleScore_badge"], .pc-badge'); }
  get pcScoreNum() { return this.page.locator('[test-id="playground__circleScore_text"], .pc-num'); }
  get pcTryAgainBtn() { return this.page.locator('[test-id="playground__circleReset_btn"], .game.pc .game-actions button'); }

  async drawCircleOnCanvas() {
    Logger.info('Drawing circle on Perfect Circle canvas via mouse drag');
    await this.pcCanvas.waitFor({ state: 'visible' });
    const box = await this.pcCanvas.boundingBox();
    if (!box) return;

    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    const radius = Math.min(box.width, box.height) / 3;

    await this.page.mouse.move(cx + radius, cy);
    await this.page.mouse.down();

    const pointsCount = 12;
    for (let i = 1; i <= pointsCount; i++) {
      const angle = (i / pointsCount) * 2 * Math.PI;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      await this.page.mouse.move(x, y);
    }

    await this.page.mouse.up();
  }

  // Game 2: Typing Test Locators & Actions
  get ttTargetPre() { return this.page.locator('[test-id="playground__typingTarget_code"], pre.tt-target'); }
  get ttInput() { return this.page.locator('[test-id="playground__typing_textarea"], textarea.tt-input'); }
  get ttResultDiv() { return this.page.locator('[test-id="playground__typingResult_text"], .tt-result'); }
  get ttNewSnippetBtn() { return this.page.locator('[test-id="playground__typingReset_btn"], .game.tt .game-actions button'); }

  async typeTargetSnippet(text) {
    Logger.info(`Typing text into Typing Test input: "${text.substring(0, 20)}..."`);
    await this.ttInput.fill(text);
  }

  // Game 3: Memory Match Locators & Actions
  get mmCards() { return this.page.locator('[test-id="playground__memory_card"], .mm-card'); }
  get mmMovesCount() { return this.page.locator('.mm-stats span').first(); }
  get mmRestartBtn() { return this.page.locator('[test-id="playground__memoryReset_btn"], .game.mm .game-actions button'); }

  async clickCard(index) {
    Logger.info(`Flipping Memory Match card #${index}`);
    await this.mmCards.nth(index).click();
  }

  // Game 4: Cosmic Cipher Locators & Actions
  get ccRadarSvg() { return this.page.locator('[test-id="playground__cipher_radar"], .cosmic-radar-svg'); }
  get ccWordDisplay() { return this.page.locator('.hm-word'); }
  get ccHintText() { return this.page.locator('.hm-hint-text'); }
  get ccKeys() { return this.page.locator('[test-id="playground__cipherLetter_btn"], .hm-key'); }
  get ccNextWordBtn() { return this.page.locator('[test-id="playground__cipherReset_btn"], .game.hm .game-actions button, .game-actions button'); }

  async pressKeyLetter(letter) {
    Logger.info(`Pressing Cosmic Cipher key letter: ${letter}`);
    const keyBtn = this.page.locator(`.hm-key:has-text("${letter.toUpperCase()}")`).first();
    if (await keyBtn.isVisible()) {
      await keyBtn.click();
    }
  }

  // General Modal Actions
  async launchGame(gameId) {
    Logger.info(`Launching interactive game #${gameId}`);
    const tile = this.getGameTile(gameId);
    await tile.scrollIntoViewIfNeeded();
    await tile.click();
    await this.gameModal.waitFor({ state: 'visible' });
  }

  async closeGameModal() {
    Logger.info('Closing active game modal');
    await this.modalCloseBtn.click({ force: true });
    await this.gameModal.waitFor({ state: 'hidden' });
  }
}
