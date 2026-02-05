import { test, expect } from '../fixtures/baseFixtures'

/**
 * Test Suite: Recipe Sorting Functionality
 *
 * Tests that the sort dropdown correctly sorts recipes:
 * - Sort button is visible
 * - All sort options work correctly
 * - Sort persists with search/filter
 * - Default sort is alphabetical
 */

test.describe('Recipe Sorting', () => {
  test('should display sort button with default option', async ({
    page,
    populatedDb,
  }) => {
    // Wait for recipes to load
    const recipeList = page.locator('[data-testid="recipe-list"]')
    await expect(recipeList).toBeVisible()

    // Check that sort button is visible
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await expect(sortButton).toBeVisible()

    // Default should be alphabetical
    await expect(sortButton).toContainText('Alphabétique')
  })

  test('should sort recipes alphabetically (A-Z)', async ({
    page,
    populatedDb,
  }) => {
    // Get first few recipe titles
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    await expect(recipeCards.first()).toBeVisible()

    const getFirstThreeTitles = async () => {
      const titles: string[] = []
      for (let i = 0; i < 3; i++) {
        // Look for h3 (CardTitle uses h3 by default) within the card
        const title = await recipeCards
          .nth(i)
          .locator('h3, h2, [class*="CardTitle"]')
          .first()
          .textContent()
        if (title) titles.push(title.trim())
      }
      return titles
    }

    const titles = await getFirstThreeTitles()

    // Verify they're in alphabetical order (French locale)
    const sorted = [...titles].sort((a, b) => a.localeCompare(b, 'fr-CA'))
    expect(titles).toEqual(sorted)
  })

  test('should open dropdown menu when clicking sort button', async ({
    page,
    populatedDb,
  }) => {
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()

    // Check that dropdown menu appears
    const menu = page.locator('[role="menu"]')
    await expect(menu).toBeVisible()

    // Verify all sort options are present
    await expect(page.getByRole('menuitem', { name: /Alphabétique/i })).toBeVisible()
    await expect(page.getByRole('menuitem', { name: /Plus récentes/i })).toBeVisible()
    await expect(page.getByRole('menuitem', { name: /Plus anciennes/i })).toBeVisible()
    await expect(page.getByRole('menuitem', { name: /Avec images/i })).toBeVisible()
    await expect(page.getByRole('menuitem', { name: /Sans images/i })).toBeVisible()
    await expect(page.getByRole('menuitem', { name: /Par catégorie/i })).toBeVisible()
  })

  test('should sort by "Has Images" and show images first', async ({
    page,
    populatedDb,
  }) => {
    // Open sort menu
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()

    // Select "Avec images"
    await page.getByRole('menuitem', { name: /Avec images/i }).click()

    // Wait for re-sort and close dropdown
    await page.waitForTimeout(800)

    // Verify button label changed
    await expect(sortButton).toContainText('Avec images')

    // Check that first few recipes have images (not placeholder text)
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    const firstCard = recipeCards.first()

    // Should have an image element (img tag, not just placeholder)
    const hasRealImage = await firstCard.locator('img').count()
    expect(hasRealImage).toBeGreaterThan(0)

    // Should NOT have the placeholder text
    const hasPlaceholder = await firstCard
      .locator('text="Pas d\'image"')
      .count()
    expect(hasPlaceholder).toBe(0)
  })

  test('should sort by "No Images" and show recipes without images first', async ({
    page,
    populatedDb,
  }) => {
    // Open sort menu
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()

    // Select "Sans images"
    await page.getByRole('menuitem', { name: /Sans images/i }).click()

    // Wait for re-sort
    await page.waitForTimeout(500)

    // Verify button label changed
    await expect(sortButton).toContainText('Sans images')

    // Check that first recipe either has placeholder or no image
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    const firstCard = recipeCards.first()

    // Should either show placeholder or no image section
    const hasPlaceholder = await firstCard
      .locator('text="Pas d\'image"')
      .isVisible()
      .catch(() => false)

    // If not a placeholder, verify there's still an image container (could be using default)
    if (!hasPlaceholder) {
      const imageContainer = firstCard.locator('[class*="aspect"]')
      await expect(imageContainer).toBeVisible()
    }
  })

  test('should sort by category and group recipes', async ({
    page,
    populatedDb,
  }) => {
    // Open sort menu
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()

    // Select "Par catégorie"
    await page.getByRole('menuitem', { name: /Par catégorie/i }).click()

    // Wait for re-sort
    await page.waitForTimeout(800)

    // Verify button label changed
    await expect(sortButton).toContainText('Par catégorie')

    // Get categories of first 3 recipes
    const recipeCards = page.locator('[data-testid="recipe-card"]')

    const getCategories = async () => {
      const categories: string[] = []
      for (let i = 0; i < 3; i++) {
        // Find badge elements (they have data-slot="label" or class contains badge)
        const card = recipeCards.nth(i)
        await card.waitFor({ state: 'visible' })

        const badge = card
          .locator('[class*="inline-flex"][class*="badge"], [data-slot="label"]')
          .first()
        const text = await badge.textContent({ timeout: 5000 })
        if (text) categories.push(text.trim())
      }
      return categories
    }

    const categories = await getCategories()

    // Verify categories are in alphabetical order
    const sorted = [...categories].sort((a, b) => a.localeCompare(b, 'fr-CA'))
    expect(categories).toEqual(sorted)
  })

  test('should maintain sort when searching', async ({ page, populatedDb }) => {
    // Set sort to "Avec images"
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()
    await page.getByRole('menuitem', { name: /Avec images/i }).click()
    await page.waitForTimeout(500)

    // Now search for something
    const searchInput = page.locator('[data-testid="search-input"]')
    await searchInput.fill('poulet')
    await page.waitForTimeout(500)

    // Sort should still be "Avec images"
    await expect(sortButton).toContainText('Avec images')

    // Results should still prioritize recipes with images
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    const firstCard = recipeCards.first()
    const image = firstCard.locator('img, picture')

    // First result should ideally have an image (if any poulet recipes have images)
    const hasAnyImages = await image.count() > 0
    if (hasAnyImages) {
      await expect(image.first()).toBeVisible()
    }
  })

  test('should reset recipes to first page when changing sort', async ({
    page,
    populatedDb,
  }) => {
    // Scroll down to load more recipes
    const recipeList = page.locator('[data-testid="recipe-list"]')
    await expect(recipeList).toBeVisible()

    // Load more recipes by scrolling
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(1000)

    // Get current recipe count
    const recipeCards = page.locator('[data-testid="recipe-card"]')
    const initialCount = await recipeCards.count()
    expect(initialCount).toBeGreaterThan(10) // Should have loaded more than initial batch

    // Change sort
    const sortButton = page.getByRole('button', { name: /Tri:/i })
    await sortButton.click()
    await page.getByRole('menuitem', { name: /Par catégorie/i }).click()
    await page.waitForTimeout(500)

    // Should reset to first page (10 recipes)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(500)

    const newCount = await recipeCards.count()
    // After changing sort, we should be back at the initial batch size or close to it
    expect(newCount).toBeLessThanOrEqual(15) // Allow some buffer for loading
  })
})
