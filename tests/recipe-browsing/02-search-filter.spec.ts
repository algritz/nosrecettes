import { test, expect } from '../fixtures/baseFixtures'

/**
 * Test Suite: Search and Filter Functionality
 *
 * Tests that search properly filters recipes and displays correct counts:
 * - Search by term updates recipe count
 * - Search stats show filtered count, not total
 * - Search filters recipes correctly
 */

test.describe('Search and Filter Functionality', () => {
  test('should show filtered recipe count when searching', async ({
    page,
    populatedDb,
  }) => {
    // Get initial recipe stats
    const recipeStats = page.locator('[data-testid="recipe-stats"]')
    await expect(recipeStats).toBeVisible()

    const initialStatsText = await recipeStats.textContent()
    const initialMatch = initialStatsText?.match(/(\d+) sur (\d+) recette/)
    const initialTotal = parseInt(initialMatch![2])

    // Should start with 720+ recipes
    expect(initialTotal).toBeGreaterThan(700)

    // Search for "bacon"
    const searchInput = page.locator('[data-testid="search-input"]')
    await searchInput.fill('bacon')

    // Wait for the search to filter
    await page.waitForTimeout(500)

    // Get updated stats
    await expect(async () => {
      const statsText = await recipeStats.textContent()
      const match = statsText?.match(/(\d+) sur (\d+) recette/)
      const filteredTotal = parseInt(match![2])

      // The filtered count should be much less than the initial count
      expect(filteredTotal).toBeLessThan(initialTotal)
      // Should have some bacon recipes
      expect(filteredTotal).toBeGreaterThan(0)
    }).toPass()

    // Verify the filtered total is reasonable (should be around 40 like production)
    const finalStatsText = await recipeStats.textContent()
    const finalMatch = finalStatsText?.match(/(\d+) sur (\d+) recette/)
    const finalTotal = parseInt(finalMatch![2])

    console.log(`Bacon search results: ${finalTotal} recipes (was ${initialTotal})`)
    expect(finalTotal).toBeLessThan(100) // Should be much less than total
    expect(finalTotal).toBeGreaterThan(5) // Should have some results
  })

  test('should display only filtered recipes in the list', async ({
    page,
    populatedDb,
  }) => {
    // Search for a specific term
    const searchInput = page.locator('[data-testid="search-input"]')
    await searchInput.fill('poulet')

    await page.waitForTimeout(500)

    // Get displayed recipes
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    const count = await recipeCards.count()

    // Should have some poulet recipes but not all 720
    expect(count).toBeGreaterThan(0)
    expect(count).toBeLessThanOrEqual(10) // Initial batch is 10

    // Get the stats to verify total
    const recipeStats = page.locator('[data-testid="recipe-stats"]')
    const statsText = await recipeStats.textContent()
    const match = statsText?.match(/(\d+) sur (\d+) recette/)
    const totalFiltered = parseInt(match![2])

    // The total should be much less than 720
    expect(totalFiltered).toBeLessThan(720)
    expect(totalFiltered).toBeGreaterThan(0)
  })

  test('should reset to full count when clearing search', async ({
    page,
    populatedDb,
  }) => {
    // Get initial count
    const recipeStats = page.locator('[data-testid="recipe-stats"]')
    const initialStatsText = await recipeStats.textContent()
    const initialMatch = initialStatsText?.match(/(\d+) sur (\d+) recette/)
    const initialTotal = parseInt(initialMatch![2])

    // Search for something
    const searchInput = page.locator('[data-testid="search-input"]')
    await searchInput.fill('bacon')
    await page.waitForTimeout(500)

    // Clear the search
    await searchInput.clear()
    await page.waitForTimeout(500)

    // Should return to initial count
    await expect(async () => {
      const statsText = await recipeStats.textContent()
      const match = statsText?.match(/(\d+) sur (\d+) recette/)
      const totalCount = parseInt(match![2])
      expect(totalCount).toBe(initialTotal)
    }).toPass()
  })
})
