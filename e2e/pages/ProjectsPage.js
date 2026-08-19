import { Logger } from '../core/logger.js';

export class ProjectsPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('projects__container__section'); }
  get prevBtn() { return this.page.getByTestId('projects.carousel__prev__btn'); }
  get nextBtn() { return this.page.getByTestId('projects.carousel__next__btn'); }
  get githubCtaLink() { return this.page.getByTestId('projects.cta__github__link'); }

  getProjectCard(index) {
    return this.page.getByTestId(`projects.carousel__card-item__${index}`);
  }

  getCodeLink(index) {
    return this.page.getByTestId(`projects.card__code__link-${index}`);
  }

  getLiveLink(index) {
    return this.page.getByTestId(`projects.card__live__link-${index}`);
  }

  getDotBtn(index) {
    return this.page.getByTestId(`projects.carousel__dot__btn-${index}`);
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
    Logger.info(`Navigating directly to carousel dot slide #${index}`);
    await this.getDotBtn(index).click();
  }
}
