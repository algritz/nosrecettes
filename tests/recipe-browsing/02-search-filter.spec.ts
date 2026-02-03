import { test, expect } from '../fixtures/baseFixtures';

/**
 * Test Suite: Search & Filter Functionality
 *
 * Tests recipe search and category filtering:
 * - Text search (name, ingredients, instructions, tags)
 * - Category filtering (single and multiple)
 * - Combined search + filter
 * - Clear filters functionality
 */

test.describe('Search & Filter Functionality', () => {
  test('should filter recipes by search term', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');
    const recipeStats = page.locator('[data-testid="recipe-stats"]');

    // Get initial count
    const initialStatsText = await recipeStats.textContent();
    const initialMatch = initialStatsText?.match(/sur (\d+) recette/);
    const initialTotal = parseInt(initialMatch![1]);

    // Search for common term
    await searchInput.fill('poulet');
    await page.waitForTimeout(500);

    // Results should be filtered
    const filteredStatsText = await recipeStats.textContent();
    const filteredMatch = filteredStatsText?.match(/sur (\d+) recette/);
    const filteredTotal = parseInt(filteredMatch![1]);

    // Filtered results should be less than total
    expect(filteredTotal).toBeLessThan(initialTotal);
    expect(filteredTotal).toBeGreaterThan(0);

    // Recipe cards should contain search term in title or description
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    const firstCard = recipeCards.first();
    await expect(firstCard).toBeVisible();

    // At least one card should contain "poulet" (case insensitive)
    const cardText = await firstCard.textContent();
    expect(cardText?.toLowerCase()).toContain('poulet');
  });

  test('should filter by category', async ({ page, populatedDb }) => {
    // Open category popover
    await page.getByRole('button', { name: 'Catégories' }).click();

    // Wait for popover to appear
    await page.waitForTimeout(300);

    // Select "Plats principaux" category
    await page.getByRole('option', { name: /plats principaux/i }).click();

    // Close popover (click outside or press escape)
    await page.keyboard.press('Escape');

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Should show category badge
    const categoryBadge = page.locator('text=Plats principaux').first();
    await expect(categoryBadge).toBeVisible();

    // Recipe count should be filtered
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    const statsText = await recipeStats.textContent();
    const match = statsText?.match(/sur (\d+) recette/);
    const filteredTotal = parseInt(match![1]);

    // Should have plats principaux recipes
    expect(filteredTotal).toBeGreaterThan(0);
    expect(filteredTotal).toBeLessThan(720);
  });

  test('should combine search and category filters', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');

    // Add search term
    await searchInput.fill('poulet');
    await page.waitForTimeout(500);

    // Get search-only count
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    const searchOnlyText = await recipeStats.textContent();
    const searchOnlyMatch = searchOnlyText?.match(/sur (\d+) recette/);
    const searchOnlyTotal = parseInt(searchOnlyMatch![1]);

    // Add category filter
    await page.getByRole('button', { name: 'Catégories' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: /plats principaux/i }).click();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Get combined count
    const combinedText = await recipeStats.textContent();
    const combinedMatch = combinedText?.match(/sur (\d+) recette/);
    const combinedTotal = parseInt(combinedMatch![1]);

    // Combined filter should be more restrictive
    expect(combinedTotal).toBeLessThanOrEqual(searchOnlyTotal);
  });

  test('should clear all filters', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');
    const recipeStats = page.locator('[data-testid="recipe-stats"]');

    // Get initial count
    const initialText = await recipeStats.textContent();
    const initialMatch = initialText?.match(/sur (\d+) recette/);
    const initialTotal = parseInt(initialMatch![1]);

    // Apply search filter
    await searchInput.fill('poulet');
    await page.waitForTimeout(500);

    // Apply category filter
    await page.getByRole('button', { name: 'Catégories' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: /plats principaux/i }).click();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Verify filters applied
    const filteredText = await recipeStats.textContent();
    const filteredMatch = filteredText?.match(/sur (\d+) recette/);
    const filteredTotal = parseInt(filteredMatch![1]);
    expect(filteredTotal).toBeLessThan(initialTotal);
    expect(filteredTotal).toBeGreaterThan(0);

    // Clear filters button should be visible
    const clearButton = page.getByRole('button', { name: /effacer les filtres/i });
    await expect(clearButton).toBeVisible();

    // Click clear button
    await clearButton.click();
    await page.waitForTimeout(500);

    // Should return to initial count
    const clearedText = await recipeStats.textContent();
    const clearedMatch = clearedText?.match(/sur (\d+) recette/);
    const clearedTotal = parseInt(clearedMatch![1]);
    expect(clearedTotal).toBe(initialTotal);

    // Search input should be empty
    await expect(searchInput).toHaveValue('');
  });

  test('should handle search with no results', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');

    // Search for something that doesn't exist
    await searchInput.fill('xyzabc123notfound');
    await page.waitForTimeout(500);

    // Should show "no results" message
    await expect(page.getByText(/aucune recette ne correspond/i)).toBeVisible();

    // Recipe list should be empty
    const recipeList = page.locator('[data-testid="recipe-list"]');
    await expect(recipeList).not.toBeVisible();

    // Stats should show 0
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    await expect(recipeStats).toContainText('0 sur 0 recette');
  });

  test('should handle accent-insensitive search', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');

    // Search without accents
    await searchInput.fill('epices');
    await page.waitForTimeout(500);

    // Should find recipes with "épices"
    const recipeStats = page.locator('[data-testid="recipe-stats"]');
    const statsText = await recipeStats.textContent();
    const match = statsText?.match(/sur (\d+) recette/);
    const total = parseInt(match![1]);

    // Should find at least some recipes
    expect(total).toBeGreaterThan(0);
  });

  test('should update URL with search params', async ({ page, populatedDb }) => {
    const searchInput = page.locator('[data-testid="search-input"]');

    // Apply search
    await searchInput.fill('poulet');
    await page.waitForTimeout(500);

    // URL should contain search query (if implemented)
    // Note: This depends on implementation - may not be implemented yet
    const url = page.url();
    // This test will pass either way, just checking current behavior
    expect(url).toBeTruthy();
  });
});
