import { test } from '../fixtures/baseFixtures'
import { expect } from '@playwright/test'
import { mockGitHubAPI, mockCloudinaryAPI } from '../fixtures/apiMocks'
import { sampleRecipeData } from '../fixtures/testData'

/**
 * Recipe Creation Tests
 *
 * Tests the recipe creation workflow:
 * - Access new recipe page (requires admin config)
 * - Fill form with recipe data
 * - Upload images (mocked Cloudinary)
 * - Submit creates GitHub PR (mocked)
 */

test.describe('Recipe Creation', () => {
  test('should require admin configuration to access new recipe page', async ({
    page,
    populatedDb: _,
  }) => {
    // Without admin config, should redirect to 404
    await page.goto('/new-recipe')

    // Should show 404 or redirect
    await expect(
      page.getByText(/page introuvable|404/i),
    ).toBeVisible({ timeout: 10000 })
  })

  test('should load new recipe page with admin config', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Should show page title
    await expect(
      page.getByRole('heading', { name: /ajouter une nouvelle recette/i }),
    ).toBeVisible()

    // Should show connection status
    await expect(page.getByText(/connecté à test-owner\/test-repo/i)).toBeVisible()

    // Should show form sections
    await expect(
      page.getByRole('heading', { name: /informations de base/i }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /ingrédients/i }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /instructions/i }),
    ).toBeVisible()
  })

  test('should fill and submit basic recipe form', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Fill basic information
    await page.getByPlaceholder(/ex: poutine classique/i).fill(sampleRecipeData.title)
    await page
      .getByPlaceholder(/décrivez brièvement la recette/i)
      .fill(sampleRecipeData.description)

    // Select categories - it's a combobox, not a button
    const categorySelector = page.getByRole('combobox')
    await categorySelector.click()
    for (const category of sampleRecipeData.categories) {
      await page.getByRole('option', { name: category }).click()
    }
    // Close dropdown by pressing Escape
    await page.keyboard.press('Escape')

    // Fill servings
    await page.getByPlaceholder('4').fill(sampleRecipeData.servings)

    // Fill first ingredient
    await page
      .getByPlaceholder(/ex: 2 tasses de farine/i)
      .first()
      .fill(sampleRecipeData.ingredients[0])

    // Fill first instruction
    await page
      .getByPlaceholder(/décrivez cette étape/i)
      .first()
      .fill(sampleRecipeData.instructions[0])

    // Submit form
    const submitButton = page.getByRole('button', {
      name: /soumettre la recette/i,
    })
    await submitButton.click()

    // Should show success message
    await expect(page.getByText(/recette soumise/i)).toBeVisible({
      timeout: 10000,
    })
  })

  test('should add and remove ingredients', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Wait for page to load
    await expect(
      page.getByRole('heading', { name: /ingrédients/i }),
    ).toBeVisible()

    // Should have 1 ingredient field initially
    const ingredientFields = page.getByPlaceholder(/ex: 2 tasses de farine/i)
    await expect(ingredientFields).toHaveCount(1)

    // Add ingredient - find button near Ingrédients heading
    const addIngredientButton = page.getByRole('button', { name: /ajouter/i }).filter({ has: page.locator('svg[class*="lucide-plus"]') }).first()
    await addIngredientButton.click()

    // Should now have 2 fields
    await expect(ingredientFields).toHaveCount(2)

    // Fill both
    await ingredientFields.nth(0).fill('Ingredient 1')
    await ingredientFields.nth(1).fill('Ingredient 2')

    // Remove second ingredient - find minus button
    const minusButtons = page.getByRole('button').filter({ has: page.locator('svg[class*="lucide-minus"]') })
    await minusButtons.nth(1).click()

    // Should be back to 1 field
    await expect(ingredientFields).toHaveCount(1)
    await expect(ingredientFields.first()).toHaveValue('Ingredient 1')
  })

  test('should add and remove instructions', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Wait for page to load
    await expect(
      page.getByRole('heading', { name: /instructions/i }),
    ).toBeVisible()

    // Should have 1 instruction field initially
    const instructionFields = page.getByPlaceholder(/décrivez cette étape/i)
    await expect(instructionFields).toHaveCount(1)

    // Add instruction
    const addInstructionButton = page.getByRole('button', { name: /ajouter/i }).filter({ has: page.locator('svg[class*="lucide-plus"]') }).nth(1)
    await addInstructionButton.click()

    // Should now have 2 fields
    await expect(instructionFields).toHaveCount(2)

    // Fill both
    await instructionFields.nth(0).fill('Step 1')
    await instructionFields.nth(1).fill('Step 2')

    // Remove second instruction
    const minusButtonsInst = page.getByRole('button').filter({ has: page.locator('svg[class*="lucide-minus"]') })
    await minusButtonsInst.nth(1).click()

    // Should be back to 1 field
    await expect(instructionFields).toHaveCount(1)
    await expect(instructionFields.first()).toHaveValue('Step 1')
  })

  test('should validate required fields', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Try to submit without filling required fields
    const submitButton = page.getByRole('button', {
      name: /soumettre la recette/i,
    })
    await submitButton.click()

    // Browser uses HTML5 validation - required field gets focus
    // The title field should be focused after failed validation
    const titleField = page.getByPlaceholder(/ex: poutine classique/i)
    await expect(titleField).toBeFocused({ timeout: 5000 })
  })

  test('should toggle sectioned ingredients', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Wait for ingredients section
    await expect(
      page.getByRole('heading', { name: /ingrédients/i }),
    ).toBeVisible()

    // Initially should show simple ingredient fields
    await expect(page.getByPlaceholder(/ex: 2 tasses de farine/i)).toBeVisible()

    // Toggle to sectioned mode
    const sectionButton = page.getByRole('button', { name: /sections/i }).first()
    await sectionButton.click()

    // Should show sectioned mode message
    await expect(
      page.getByText(/organisez vos ingrédients en sections/i),
    ).toBeVisible()

    // Should not show simple fields anymore
    await expect(
      page.getByPlaceholder(/ex: 2 tasses de farine/i),
    ).not.toBeVisible()

    // Toggle back
    await sectionButton.click()

    // Should show simple fields again
    await expect(page.getByPlaceholder(/ex: 2 tasses de farine/i)).toBeVisible()
  })

  test('should navigate back to recipes', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/new-recipe')

    // Click back button
    await page.getByRole('button', { name: /retour aux recettes/i }).click()

    // Should navigate back to home
    await expect(page).toHaveURL('/')
  })

  test('should show offline fallback when offline', async ({
    page,
    populatedDb: _,
    adminConfig: _adminConfig,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    // First load the page normally
    await page.goto('/new-recipe')
    await expect(
      page.getByRole('heading', { name: /ajouter une nouvelle recette/i }),
    ).toBeVisible()

    // Simulate offline by dispatching offline event
    // The app should detect offline state via useOnlineStatus hook
    await page.evaluate(() => {
      window.dispatchEvent(new Event('offline'))
    })

    // Wait a moment for React to update state
    await page.waitForTimeout(500)

    // Should show offline fallback component
    await expect(
      page.getByRole('heading', { name: /connexion requise/i }),
    ).toBeVisible()

    // Should show retry and home buttons
    await expect(
      page.getByRole('button', { name: /réessayer/i }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /retour aux recettes/i }),
    ).toBeVisible()

    // Submit button should NOT be visible (form is replaced with offline fallback)
    await expect(
      page.getByRole('button', { name: /soumettre la recette/i }),
    ).not.toBeVisible()
  })
})
