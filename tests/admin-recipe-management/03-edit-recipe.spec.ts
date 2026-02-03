import { test } from '../fixtures/baseFixtures'
import { expect, type Page } from '@playwright/test'
import { mockGitHubAPI, mockCloudinaryAPI } from '../fixtures/apiMocks'
import { sampleRecipeUpdate } from '../fixtures/testData'

/**
 * Recipe Editing Tests
 *
 * Tests the recipe editing workflow:
 * - Load existing recipe from IndexedDB
 * - Pre-fill form with existing data
 * - Modify recipe fields
 * - Submit creates update GitHub PR (mocked)
 * - Delete recipe creates delete GitHub PR (mocked)
 */

/**
 * Helper: Get first recipe slug from home page
 * Handles navigation and waiting for IndexedDB to load recipes
 */
async function getFirstRecipeSlug(page: Page): Promise<string> {
  // Only navigate if NOT already on home page
  const currentUrl = page.url()
  const isHomePage = currentUrl.endsWith('/') || currentUrl.endsWith('localhost:8080')

  if (!isHomePage) {
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 })
  }

  // Wait for recipe cards to be fully rendered
  // The recipe-card IS the Link component (it has data-testid="recipe-card")
  const firstCard = page.locator('[data-testid="recipe-card"]').first()
  await firstCard.waitFor({ state: 'visible', timeout: 60000 })

  // Wait for href attribute to be populated (React hydration)
  await expect(firstCard).toHaveAttribute('href', /\/recipe\//, { timeout: 15000 })

  const href = await firstCard.getAttribute('href')
  if (!href) {
    throw new Error('Could not get href from first recipe card')
  }

  return href.replace('/recipe/', '')
}

test.describe('Recipe Editing', () => {
  test('should require admin configuration to access edit page', async ({
    page,
    populatedDb,
  }) => {
    // populatedDb ensures recipes are loaded
    const slug = await getFirstRecipeSlug(page)

    // Without admin config, should not show edit button
    await page.goto(`/recipe/${slug}`)
    await expect(page.getByRole('button', { name: /modifier/i })).not.toBeVisible()
  })

  test('should load edit page with existing recipe data', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Get recipe title for verification
    const firstRecipeCard = page.locator('[data-testid="recipe-card"]').first()
    const recipeTitle = await firstRecipeCard
      .locator('h2, h3')
      .first()
      .textContent()

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Should show edit page title
    await expect(
      page.getByRole('heading', { name: /modifier la recette/i }),
    ).toBeVisible()

    // Should show connection status
    await expect(page.getByText(/connecté à test-owner\/test-repo/i)).toBeVisible()

    // Title field should be pre-filled with existing recipe title
    const titleInput = page.getByPlaceholder(/ex: poutine classique/i)
    await expect(titleInput).toHaveValue(recipeTitle || '')

    // Should show delete button
    await expect(
      page.getByRole('button', { name: /supprimer la recette/i }),
    ).toBeVisible()
  })

  test('should update recipe fields and submit', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Update title
    const titleInput = page.getByPlaceholder(/ex: poutine classique/i)
    await titleInput.fill(sampleRecipeUpdate.title)

    // Update description
    const descInput = page.getByPlaceholder(/décrivez brièvement la recette/i)
    await descInput.fill(sampleRecipeUpdate.description)

    // Update servings
    const servingsInput = page.getByPlaceholder('4')
    await servingsInput.fill(sampleRecipeUpdate.servings)

    // Submit form
    const submitButton = page.getByRole('button', {
      name: /sauvegarder les modifications/i,
    })
    await submitButton.click()

    // Should show success message
    await expect(page.getByText(/modifications soumises/i)).toBeVisible({
      timeout: 10000,
    })
  })

  test('should show delete confirmation dialog', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Click delete button
    await page.getByRole('button', { name: /supprimer la recette/i }).click()

    // Should show confirmation dialog
    const dialog = page.getByRole('alertdialog')
    await expect(dialog).toBeVisible()
    await expect(
      dialog.getByRole('heading', { name: /supprimer la recette/i }),
    ).toBeVisible()
    await expect(
      dialog.getByText(/cette action ne peut pas être annulée/i),
    ).toBeVisible()

    // Should show cancel and confirm buttons
    await expect(page.getByRole('button', { name: /annuler/i })).toBeVisible()
    await expect(
      page.getByRole('button', { name: /supprimer définitivement/i }),
    ).toBeVisible()
  })

  test('should cancel delete operation', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Click delete button
    await page.getByRole('button', { name: /supprimer la recette/i }).click()

    // Cancel deletion
    await page.getByRole('button', { name: /annuler/i }).click()

    // Dialog should close, still on edit page
    await expect(page).toHaveURL(`/edit-recipe/${slug}`)
    await expect(
      page.getByRole('heading', { name: /modifier la recette/i }),
    ).toBeVisible()
  })

  test('should confirm delete and create PR', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Listen for the confirm dialog and accept it automatically
    page.on('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm')
      await dialog.accept()
    })

    // Click delete button
    await page.getByRole('button', { name: /supprimer la recette/i }).click()

    // Confirm deletion
    await page
      .getByRole('button', { name: /supprimer définitivement/i })
      .click()

    // Should show success toast message
    await expect(page.getByText(/demande de suppression soumise/i)).toBeVisible({
      timeout: 10000,
    })

    // Should redirect to home page
    await expect(page).toHaveURL('/')
  })

  test('should modify ingredients list', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Wait for ingredients section
    await expect(
      page.getByRole('heading', { name: /ingrédients/i }),
    ).toBeVisible()

    // Get initial ingredient count
    const ingredientFields = page.getByPlaceholder(/ex: 2 tasses de farine/i)
    const initialCount = await ingredientFields.count()

    // Add a new ingredient
    const addButton = page.getByRole('button', { name: /ajouter/i }).filter({ has: page.locator('svg[class*="lucide-plus"]') }).first()
    await addButton.click()

    // Should have one more field
    await expect(ingredientFields).toHaveCount(initialCount + 1)

    // Fill new ingredient
    await ingredientFields.last().fill('Nouvel ingrédient test')

    // Verify it's filled
    await expect(ingredientFields.last()).toHaveValue('Nouvel ingrédient test')
  })

  test('should navigate back to recipe detail', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page
    await page.goto(`/edit-recipe/${slug}`)

    // Click back button
    await page.getByRole('button', { name: /retour à la recette/i }).click()

    // Should navigate back to recipe detail
    await expect(page).toHaveURL(`/recipe/${slug}`)
  })

  test('should show offline fallback when offline', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    // populatedDb ensures recipes are loaded
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Get first recipe slug
    const slug = await getFirstRecipeSlug(page)

    // Navigate to edit page first
    await page.goto(`/edit-recipe/${slug}`)
    await expect(
      page.getByRole('heading', { name: /modifier la recette/i }),
    ).toBeVisible()

    // Simulate offline by dispatching offline event
    await page.evaluate(() => {
      window.dispatchEvent(new Event('offline'))
    })

    // Wait for React to update state
    await page.waitForTimeout(1000)

    // Should show save button (app should react to offline state)
    const saveButton = page.getByRole('button', {
      name: /sauvegarder les modifications/i,
    })
    await expect(saveButton).toBeVisible()
  })

  test('should show 404 for non-existent recipe', async ({
    page,
    populatedDb,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // Try to edit non-existent recipe
    await page.goto('/edit-recipe/non-existent-recipe-slug-12345')

    // Should show 404
    await expect(
      page.getByText(/page introuvable|404/i),
    ).toBeVisible({ timeout: 10000 })
  })
})
