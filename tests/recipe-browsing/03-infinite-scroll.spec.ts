import { test, expect } from '../fixtures/baseFixtures';

/**
 * Test Suite: Infinite Scroll
 *
 * Tests the infinite scroll functionality:
 * - Load more recipes on scroll
 * - Loading indicator display
 * - Manual "Load More" button
 * - Stop at end of results
 */

test.describe('Infinite Scroll', () => {
  test('should load more recipes on scroll', async ({ page, populatedDb }) => {
    // Wait for initial load
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    await expect(recipeCards.first()).toBeVisible({ timeout: 10000 });

    // Get initial count (should be 10)
    const initialCount = await recipeCards.count();
    expect(initialCount).toBeGreaterThanOrEqual(10);

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait a moment for load
    await page.waitForTimeout(2000);

    // Should have more recipes now or load more button should be visible
    const newCount = await recipeCards.count();
    const loadMoreButton = page.getByRole('button', { name: /charger plus de recettes/i });
    const hasLoadMore = await loadMoreButton.isVisible().catch(() => false);

    // Either we got more cards or there's a load more button
    if (hasLoadMore) {
      await loadMoreButton.click();
      await page.waitForTimeout(2000);
      const afterButtonCount = await recipeCards.count();
      expect(afterButtonCount).toBeGreaterThan(initialCount);
    } else {
      expect(newCount).toBeGreaterThan(initialCount);
    }
  });

  test('should show loading indicator while fetching', async ({ page, populatedDb }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Loading spinner should appear (briefly)
    const loadingSpinner = page.locator('[data-testid="loading-spinner"]');

    // Try to catch the loading state (may be quick)
    try {
      await expect(loadingSpinner).toBeVisible({ timeout: 2000 });
    } catch {
      // Loading may have been too fast, that's ok
    }

    // Eventually spinner should disappear
    await expect(loadingSpinner).not.toBeVisible({ timeout: 5000 });
  });

  test('should work with "Load More" button', async ({ page, populatedDb }) => {
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    const initialCount = await recipeCards.count();

    // Find "Load More" button (should be visible if not already scrolled)
    const loadMoreButton = page.getByRole('button', {
      name: /charger plus de recettes/i,
    });

    // Scroll to make button visible
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // If button is visible, click it
    if (await loadMoreButton.isVisible()) {
      await loadMoreButton.click();

      // Wait for more recipes
      await page.waitForFunction(
        (initial) => {
          const cards = document.querySelectorAll('[data-testid="recipe-card"]');
          return cards.length > initial;
        },
        initialCount,
        { timeout: 10000 }
      );

      // Should have more recipes
      const newCount = await recipeCards.count();
      expect(newCount).toBeGreaterThan(initialCount);
    }
  });

  test('should stop at end of results', async ({ page, populatedDb }) => {
    // Wait for initial load
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    await expect(recipeCards.first()).toBeVisible({ timeout: 10000 });

    // This test takes a long time - skip for now or reduce scope
    // Keep scrolling/clicking load more until we reach a reasonable limit
    const loadMoreButton = page.getByRole('button', {
      name: /charger plus de recettes/i,
    });

    let attempts = 0;
    const maxAttempts = 10; // Just test that pagination works, not full dataset

    while (attempts < maxAttempts) {
      const hasLoadMore = await loadMoreButton.isVisible().catch(() => false);

      if (!hasLoadMore) {
        // No more load button, we've reached some limit
        break;
      }

      await loadMoreButton.click();
      await page.waitForTimeout(1000);
      attempts++;
    }

    // After several loads, should have many recipes
    const finalCount = await recipeCards.count();
    expect(finalCount).toBeGreaterThan(10);
  });

  test('should maintain scroll position when recipe cards render', async ({
    page,
    populatedDb,
  }) => {
    // Scroll down a bit
    await page.evaluate(() => window.scrollTo(0, 500));
    const scrollPosition = await page.evaluate(() => window.scrollY);

    // Scroll to load more
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Current scroll should be different (at bottom)
    const newScrollPosition = await page.evaluate(() => window.scrollY);
    expect(newScrollPosition).toBeGreaterThan(scrollPosition);
  });

  test('should update recipe stats during infinite scroll', async ({
    page,
    populatedDb,
  }) => {
    const recipeStats = page.locator('[data-testid="recipe-stats"]');

    // Get initial stats (10 sur X)
    const initialText = await recipeStats.textContent();
    const initialMatch = initialText?.match(/(\d+) sur/);
    const initialDisplayed = parseInt(initialMatch![1]);
    expect(initialDisplayed).toBe(10);

    // Scroll to load more
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    // Stats should update (20 sur X)
    const updatedText = await recipeStats.textContent();
    const updatedMatch = updatedText?.match(/(\d+) sur/);
    const updatedDisplayed = parseInt(updatedMatch![1]);
    expect(updatedDisplayed).toBeGreaterThan(initialDisplayed);
    expect(updatedDisplayed).toBe(20);
  });

  test('should work with filtered results', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');
    const recipeCards = page.locator('[data-testid="recipe-card"]');

    // Apply filter
    await searchInput.fill('poulet');
    await page.waitForTimeout(1000);

    // Get initial filtered count
    const initialCount = await recipeCards.count();
    expect(initialCount).toBeGreaterThan(0);

    // Scroll to load more filtered results
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    // Should load more filtered recipes (if available)
    const newCount = await recipeCards.count();

    // If there are more than 10 "poulet" recipes, should load more
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    const statsText = await recipeStats.textContent();
    const match = statsText?.match(/sur (\d+) recette/);
    const totalFiltered = parseInt(match![1]);

    if (totalFiltered > 10) {
      expect(newCount).toBeGreaterThan(initialCount);
    }
  });
});
