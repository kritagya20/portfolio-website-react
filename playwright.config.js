import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0, // Max 1 retry on CI (fails fast)
  timeout: 20 * 1000, // 20s headroom per test (accommodates canvas drawing tests)
  globalTimeout: process.env.CI ? 3 * 60 * 1000 : undefined, // Hard cap of 3 minutes total for entire suite on CI
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 8 * 1000, // 8s timeout for individual actions (clicks/types)
    navigationTimeout: 10 * 1000, // 10s timeout for page navigation
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000, // 30s max timeout for Vite server launch
  },
});
