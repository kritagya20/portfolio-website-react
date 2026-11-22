import { Logger } from '../core/logger.js';

export class ProjectsPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('projects__container_section'); }
  get carouselContainer() { return this.page.locator('[test-id="projects__carousel_container"], .projects-carousel-container'); }
  get prevBtn() { return this.page.getByTestId('projects__prev_btn'); }
  get nextBtn() { return this.page.getByTestId('projects__next_btn'); }
  get githubCtaLink() { return this.page.getByTestId('projects__githubCta_link'); }
  get counterPill() { return this.page.locator('[test-id="projects__counter_pill"], .orbital-counter-pill'); }
  get counterCurrent() { return this.page.locator('[test-id="projects__counter_current"], .orbital-counter-current'); }
  get counterTotal() { return this.page.locator('[test-id="projects__counter_total"], .orbital-counter-total'); }
  get activeCard() { return this.page.locator('.orbital-card-frame.active-frame'); }

  getProjectCard(index) {
    return this.page.getByTestId('projects__project_card').nth(index);
  }

  getCodeLink(index) {
    return this.getProjectCard(index).locator('[test-id="projects__code_link"]');
  }

  getLiveLink(index) {
    return this.getProjectCard(index).locator('[test-id="projects__live_link"]');
  }

  getInternalBadge(index) {
    return this.getProjectCard(index).locator('[test-id="projects__internal_badge"]');
  }

  getDotBtn(index) {
    return this.page.locator('.orbital-dot').nth(index);
  }

  // Actions
  async nextSlide() {
    Logger.info('Clicking next slide button on project carousel');
    await this.nextBtn.click();
  }

  async prevSlide() {
    Logger.info('Clicking previous slide button on project carousel');
    await this.prevBtn.click();
  }

  async goToSlide(index) {
    Logger.info(`Navigating directly to carousel slide #${index}`);
    await this.clickCard(index);
  }

  async clickCard(index) {
    Logger.info(`Clicking project card #${index} directly`);
    await this.getProjectCard(index).dispatchEvent('click');
  }

  async getCurrentSlideNumber() {
    return (await this.counterCurrent.innerText()).trim();
  }

  async swipeLeft(distance = 100) {
    Logger.info(`Simulating touch swipe left by ${distance}px`);
    await this.carouselContainer.evaluate((el, dist) => {
      const startX = 300;
      const endX = startX - dist;
      
      const touchStart = new Touch({ identifier: Date.now(), target: el, clientX: startX, clientY: 100 });
      const touchMove = new Touch({ identifier: Date.now(), target: el, clientX: endX, clientY: 100 });

      el.dispatchEvent(new TouchEvent('touchstart', { touches: [touchStart], targetTouches: [touchStart], changedTouches: [touchStart], bubbles: true, cancelable: true }));
      el.dispatchEvent(new TouchEvent('touchmove', { touches: [touchMove], targetTouches: [touchMove], changedTouches: [touchMove], bubbles: true, cancelable: true }));
      el.dispatchEvent(new TouchEvent('touchend', { touches: [], targetTouches: [], changedTouches: [touchMove], bubbles: true, cancelable: true }));
    }, distance);
  }

  async swipeRight(distance = 100) {
    Logger.info(`Simulating touch swipe right by ${distance}px`);
    await this.carouselContainer.evaluate((el, dist) => {
      const startX = 100;
      const endX = startX + dist;

      const touchStart = new Touch({ identifier: Date.now(), target: el, clientX: startX, clientY: 100 });
      const touchMove = new Touch({ identifier: Date.now(), target: el, clientX: endX, clientY: 100 });

      el.dispatchEvent(new TouchEvent('touchstart', { touches: [touchStart], targetTouches: [touchStart], changedTouches: [touchStart], bubbles: true, cancelable: true }));
      el.dispatchEvent(new TouchEvent('touchmove', { touches: [touchMove], targetTouches: [touchMove], changedTouches: [touchMove], bubbles: true, cancelable: true }));
      el.dispatchEvent(new TouchEvent('touchend', { touches: [], targetTouches: [], changedTouches: [touchMove], bubbles: true, cancelable: true }));
    }, distance);
  }
}
