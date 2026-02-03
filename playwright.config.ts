import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E Test Configuration for Nos Recettes PWA
 *
 * Key Design Decisions:
 * - Single worker execution prevents IndexedDB race conditions
 * - Service Worker support enabled for PWA testing
 * - Extended timeouts for 720+ recipe IndexedDB population
 * - Dev server automatically started on port 8080
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Single worker to prevent IndexedDB conflicts */
  workers: 1,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter to use */
  reporter: [
    ['html'],
    ['list']
  ],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: 'http://127.0.0.1:8080',

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Screenshots on failure */
    screenshot: 'only-on-failure',

    /* Video on failure */
    video: 'retain-on-failure',

    /* Default timeout for actions (click, fill, etc.) */
    actionTimeout: 30000,

    /* Navigation timeout for page loads (extended for IndexedDB population) */
    navigationTimeout: 60000,

    /* Enable service worker for PWA testing */
    serviceWorkers: 'allow',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment to test on more browsers later
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm dev',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes to start dev server
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
