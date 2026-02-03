// eslint-disable-next-line no-restricted-imports
import { test as base, type Page } from '@playwright/test'

/**
 * Base Fixtures for Nos Recettes E2E Tests
 *
 * Provides reusable fixtures for managing test state:
 * - cleanDb: Clears IndexedDB, localStorage, and service workers
 * - populatedDb: Ensures IndexedDB has recipes loaded
 * - adminConfig: Injects mock GitHub/Cloudinary credentials
 */

type BaseFixtures = {
  cleanDb: void
  populatedDb: void
  adminConfig: void
}

/**
 * Clear all browser storage and service workers
 * Use this fixture for tests that modify data (create/edit/delete)
 */
async function clearBrowserState(page: Page): Promise<void> {
  await page.evaluate(async () => {
    // Clear IndexedDB
    const dbs = await window.indexedDB.databases()
    for (const db of dbs) {
      if (db.name) {
        window.indexedDB.deleteDatabase(db.name)
      }
    }

    // Clear localStorage
    localStorage.clear()

    // Clear sessionStorage
    sessionStorage.clear()

    // Unregister service workers
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((r) => r.unregister()))
  })

  // Clear cookies
  await page.context().clearCookies()
}

/**
 * Wait for IndexedDB to be populated with recipes
 * Critical for tests that read recipe data
 */
async function waitForIndexedDBPopulation(page: Page): Promise<void> {
  await page.waitForFunction(
    () => {
      return new Promise((resolve) => {
        const request = window.indexedDB.open('nosrecettes')

        request.onerror = () => resolve(false)

        request.onsuccess = () => {
          const db = request.result

          // Check if recipes object store exists
          if (!db.objectStoreNames.contains('recipes')) {
            resolve(false)
            return
          }

          const transaction = db.transaction('recipes', 'readonly')
          const store = transaction.objectStore('recipes')
          const countRequest = store.count()

          countRequest.onsuccess = () => {
            // Consider populated if we have at least 1 recipe
            resolve(countRequest.result > 0)
          }

          countRequest.onerror = () => resolve(false)
        }
      })
    },
    { timeout: 60000 }, // 60 seconds for 720+ recipes to load
  )
}


export const test = base.extend<BaseFixtures>({
  /**
   * cleanDb fixture: Clears all browser state before test
   * Use for mutation tests (create, edit, delete)
   */
  cleanDb: async ({ page }, use) => {
    // Navigate to localhost first so we have a secure context for page.evaluate
    await page.goto('/')
    await clearBrowserState(page)
    await use()
    // Cleanup after test (only if page is still open)
    try {
      await clearBrowserState(page)
    } catch {
      // Ignore cleanup errors (page might be closed)
    }
  },

  /**
   * populatedDb fixture: Ensures IndexedDB has recipes
   * Use for read-only tests (browsing, searching, viewing)
   */
  populatedDb: async ({ page }, use) => {
    // Navigate to home page to trigger IndexedDB population
    await page.goto('/')

    // Wait for recipes to load into IndexedDB
    await waitForIndexedDBPopulation(page)

    await use()
  },

  /**
   * adminConfig fixture: Injects admin credentials
   * Use for admin workflow tests (add/edit recipes, manage categories)
   *
   * NOTE: When used with populatedDb, both fixtures share the same page.
   * This fixture will inject localStorage after populatedDb sets up IndexedDB.
   */
  adminConfig: async ({ page, populatedDb: _ }, use) => {
    // Depend on populatedDb to ensure page is navigated and IndexedDB is ready
    // The underscore parameter forces populatedDb to run first

    // Inject admin config into localStorage
    await page.evaluate(() => {
      localStorage.setItem(
        'github-config',
        JSON.stringify({
          owner: 'test-owner',
          repo: 'test-repo',
          token: 'ghp_testtoken12345678901234567890',
        }),
      )
      localStorage.setItem(
        'cloudinary-config',
        JSON.stringify({
          cloudName: 'test-cloud',
          uploadPreset: 'test-preset',
        }),
      )
    })

    await use()
  },
})

export { expect } from '@playwright/test'
