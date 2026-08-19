import { Logger } from '../core/logger.js';

export class ContactPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('contact__container__section'); }
  get emailChannel() { return this.page.getByTestId('contact.channel__email__link'); }
  get phoneChannel() { return this.page.getByTestId('contact.channel__phone__link'); }
  get resumeChannel() { return this.page.getByTestId('contact.channel__resume__link'); }
  get form() { return this.page.getByTestId('contact.form__container__form'); }
  get nameInput() { return this.page.getByTestId('contact.form__name__input'); }
  get emailInput() { return this.page.getByTestId('contact.form__email__input'); }
  get messageTextarea() { return this.page.getByTestId('contact.form__message__textarea'); }
  get submitBtn() { return this.page.getByTestId('contact.form__submit__btn'); }

  // Actions
  async fillContactForm(name, email, message) {
    Logger.info(`Filling contact form: name=${name}, email=${email}`);
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageTextarea.fill(message);
  }

  async submitForm() {
    Logger.info('Submitting contact form');
    await this.submitBtn.click();
  }
}
