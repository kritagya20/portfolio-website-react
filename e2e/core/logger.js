export class Logger {
  static info(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`\x1b[36m[INFO]\x1b[0m \x1b[90m[${timestamp}]\x1b[0m ${message}`);
  }

  static step(stepName) {
    console.log(`\n\x1b[33m[STEP]\x1b[0m ----------------> ${stepName}`);
  }

  static pass(message) {
    console.log(`\x1b[32m[PASS]\x1b[0m ${message}`);
  }

  static fail(message, error) {
    console.error(`\x1b[31m[FAIL]\x1b[0m ${message}`, error || '');
  }
}
