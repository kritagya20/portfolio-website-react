import { Logger } from '../core/logger.js';

export class ContactPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get section() { return this.page.getByTestId('contact__container_section'); }
  get emailChannel() { return this.page.getByTestId('contact__email_link'); }
  get phoneChannel() { return this.page.getByTestId('contact__phone_link'); }
  get resumeChannel() { return this.page.getByTestId('contact__resume_link'); }
  get form() { return this.page.getByTestId('contact__message_form'); }
  get nameInput() { return this.page.getByTestId('contact__name_input'); }
  get emailInput() { return this.page.getByTestId('contact__email_input'); }
  get messageTextarea() { return this.page.getByTestId('contact__message_textarea'); }
  get submitBtn() { return this.page.getByTestId('contact__submit_btn'); }
  get nameError() { return this.page.locator('#contact-name-error'); }
  get emailError() { return this.page.locator('#contact-email-error'); }
  get msgError() { return this.page.locator('#contact-msg-error'); }
  get toast() { return this.page.locator('[test-id="toast__feedback_toast"], .toast'); }

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
