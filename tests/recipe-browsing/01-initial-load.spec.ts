import { test, expect } from '../fixtures/baseFixtures';

/**
 * Test Suite: Initial Load & Recipe Display
 *
 * Tests the critical first-time user journey:
 * - Home page loads successfully
 * - IndexedDB gets populated with recipes
 * - Recipe cards are displayed
 * - Recipe stats show correct counts
 */

test.describe('Initial Load & Recipe Display', () => {
  test('should load home page and populate IndexedDB', async ({ page, populatedDb }) => {
    // populatedDb fixture already navigated to '/' and waited for IndexedDB population

    // Verify page loaded
    await expect(page).toHaveTitle(/Nos Recettes/);
    await expect(page.locator('h1')).toContainText('Nos Recettes');

    // Verify IndexedDB has recipes
    const recipeCount = await page.evaluate(async () => {
      const db = await new Promise<IDBDatabase>((resolve) => {
        const request = indexedDB.open('nosrecettes');
        request.onsuccess = () => resolve(request.result);
      });

      const transaction = db.transaction('recipes', 'readonly');
      const store = transaction.objectStore('recipes');
      const countRequest = store.count();

      return await new Promise<number>((resolve) => {
        countRequest.onsuccess = () => resolve(countRequest.result);
      });
    });

    // Should have 720+ recipes
    expect(recipeCount).toBeGreaterThan(700);
  });

  test('should display recipe cards after load', async ({ page, populatedDb }) => {
    // Recipe cards should be visible
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    await expect(recipeCards.first()).toBeVisible({ timeout: 10000 });

    // Should display at least 10 recipes initially (first batch)
    const count = await recipeCards.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('should show recipe count stats', async ({ page, populatedDb }) => {
    // Recipe stats component should be visible
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    await expect(recipeStats).toBeVisible();

    // Should show "X sur Y recettes" format
    await expect(recipeStats).toContainText(/\d+ sur \d+ recette/);

    // Extract numbers from stats
    const statsText = await recipeStats.textContent();
    const match = statsText?.match(/(\d+) sur (\d+) recette/);

    expect(match).toBeTruthy();
    const displayed = parseInt(match![1]);
    const total = parseInt(match![2]);

    // Initial display should be 10 recipes
    expect(displayed).toBe(10);
    // Total should be 720+
    expect(total).toBeGreaterThan(700);
  });

  test('should handle large dataset (720+ recipes)', async ({ page, populatedDb }) => {
    // Verify search bar is functional with large dataset
    const searchInput = page.locator('[data-testid="search-input"]');
    await expect(searchInput).toBeVisible();

    // Type search term
    await searchInput.fill('poulet');

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Should show filtered results
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    const count = await recipeCards.count();

    // Should have at least some poulet recipes
    expect(count).toBeGreaterThan(0);

    // Stats should update to show filtered count
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    const statsText = await recipeStats.textContent();
    const match = statsText?.match(/(\d+) sur (\d+) recette/);

    expect(match).toBeTruthy();
    const total = parseInt(match![2]);

    // Total filtered results should be less than full dataset
    expect(total).toBeLessThan(720);
    expect(total).toBeGreaterThan(0);
  });

  test('should display recipe card information', async ({ page, populatedDb }) => {
    // Get first recipe card
    const firstCard = page.locator('[data-testid="recipe-card"]').first();
    await expect(firstCard).toBeVisible();

    // Should have title (CardTitle element)
    const title = firstCard.locator('.text-lg');
    await expect(title).toBeVisible();
    const titleText = await title.textContent();
    expect(titleText?.length).toBeGreaterThan(0);

    // Should have description
    const description = firstCard.locator('.line-clamp-2');
    await expect(description).toBeVisible();

    // Should have time indicator (Clock icon + time)
    const timeIndicator = firstCard.locator('svg.lucide-clock').locator('..');
    await expect(timeIndicator).toBeVisible();

    // Should have servings indicator (Users icon + servings)
    const servingsIndicator = firstCard.locator('svg.lucide-users').locator('..');
    await expect(servingsIndicator).toBeVisible();

    // Should have at least one category badge (Badge uses rounded-full class)
    const badges = firstCard.locator('.rounded-full');
    expect(await badges.count()).toBeGreaterThan(0);
  });

  test('should be clickable and navigate to recipe detail', async ({ page, populatedDb }) => {
    // Get first recipe card link
    const firstCard = page.locator('[data-testid="recipe-card"]').first();
    const href = await firstCard.getAttribute('href');

    // Should have href to /recipe/:slug
    expect(href).toMatch(/^\/recipe\/.+/);

    // Click should navigate
    await firstCard.click();

    // Should navigate to recipe detail page
    await expect(page).toHaveURL(/\/recipe\/.+/);

    // Recipe page should load
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
  });
});
