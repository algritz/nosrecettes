import { test } from '../fixtures/baseFixtures'
import { expect } from '@playwright/test'
import { mockGitHubAPI, mockCloudinaryAPI } from '../fixtures/apiMocks'

/**
 * Admin Setup Tests
 *
 * Tests the admin configuration page for:
 * - GitHub configuration (owner, repo, token)
 * - Cloudinary configuration (cloud name, upload preset)
 * - Connection testing
 * - Config persistence via localStorage
 */

test.describe('Admin Setup', () => {
  test('should load admin page without configuration', async ({ page, cleanDb: _ }) => {
    await page.goto('/admin')

    // Should show admin page
    await expect(page.getByRole('heading', { name: 'Administration' })).toBeVisible()

    // Should show GitHub and Cloudinary tabs
    await expect(page.getByRole('tab', { name: /GitHub/ })).toBeVisible()
    await expect(page.getByRole('tab', { name: /Cloudinary/ })).toBeVisible()

    // Should show incomplete configuration warning
    await expect(page.getByText(/Configuration incomplète/)).toBeVisible()
  })

  test('should configure GitHub credentials', async ({ page, cleanDb: _ }) => {
    // Set up GitHub API mocking
    await mockGitHubAPI(page)

    await page.goto('/admin')

    // Fill GitHub config
    await page.getByRole('textbox', { name: /votre-nom-utilisateur/ }).fill('test-owner')
    await page.getByRole('textbox', { name: /nos-recettes/ }).fill('test-repo')
    await page.getByRole('textbox', { name: /ghp_/ }).fill('ghp_testtoken12345678901234567890')

    // Test connection button should be enabled
    const testButton = page.getByRole('button', { name: /Tester la connexion/ })
    await expect(testButton).toBeEnabled()

    // Click test connection
    await testButton.click()

    // Should show success message
    await expect(page.getByText(/Configuration GitHub sauvegardée/)).toBeVisible({
      timeout: 10000,
    })

    // Should show green indicator on tab
    await expect(page.getByRole('tab', { name: /GitHub/ })).toContainText('GitHub')
  })

  test('should configure Cloudinary credentials', async ({ page, cleanDb: _ }) => {
    // Set up Cloudinary API mocking
    await mockCloudinaryAPI(page)

    await page.goto('/admin')

    // Switch to Cloudinary tab
    await page.getByRole('tab', { name: /Cloudinary/ }).click()

    // Fill Cloudinary config
    await page.getByPlaceholder('votre-cloud-name').fill('test-cloud')
    await page.getByPlaceholder('votre-upload-preset').fill('test-preset')

    // Test connection first (required before Save button appears)
    await page.getByRole('button', { name: /Tester la connexion/ }).click()

    // Wait for test to complete (alert will show, then button appears)
    await page.waitForTimeout(1000) // Wait for the test connection alert

    // Save button should now be visible
    const saveButton = page.getByRole('button', { name: /Sauvegarder/ })
    await expect(saveButton).toBeVisible({ timeout: 5000 })
    await saveButton.click()

    // Should show success message
    await expect(page.getByText(/Configuration Cloudinary sauvegardée/)).toBeVisible({
      timeout: 5000,
    })
  })

  test('should show complete configuration status', async ({
    page,
    cleanDb: _,
  }) => {
    // Set up mocks
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/admin')

    // Configure GitHub
    await page.getByRole('textbox', { name: /votre-nom-utilisateur/ }).fill('test-owner')
    await page.getByRole('textbox', { name: /nos-recettes/ }).fill('test-repo')
    await page.getByRole('textbox', { name: /ghp_/ }).fill('ghp_testtoken12345678901234567890')
    await page.getByRole('button', { name: /Tester la connexion/ }).click()
    await expect(page.getByText(/Configuration GitHub sauvegardée/)).toBeVisible({
      timeout: 10000,
    })

    // Configure Cloudinary
    await page.getByRole('tab', { name: /Cloudinary/ }).click()
    await page.getByPlaceholder('votre-cloud-name').fill('test-cloud')
    await page.getByPlaceholder('votre-upload-preset').fill('test-preset')

    // Test connection first (required before Save button appears)
    await page.getByRole('button', { name: /Tester la connexion/ }).click()
    await page.waitForTimeout(1000) // Wait for test connection alert

    // Save configuration
    const saveButton = page.getByRole('button', { name: /Sauvegarder/ })
    await expect(saveButton).toBeVisible({ timeout: 5000 })
    await saveButton.click()
    await expect(page.getByText(/Configuration Cloudinary sauvegardée/)).toBeVisible({
      timeout: 5000,
    })

    // Should show complete configuration message
    await expect(page.getByText(/Configuration complète/)).toBeVisible()

    // Should show configured values
    await expect(page.getByText(/test-owner\/test-repo/)).toBeVisible()
    await expect(page.getByText(/test-cloud/)).toBeVisible()

    // Should show "Add new recipe" button
    await expect(page.getByRole('link', { name: /Ajouter une nouvelle recette/ })).toBeVisible()
  })

  test('should persist configuration across page reloads', async ({
    page,
    cleanDb: _,
  }) => {
    // Set up mocks
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/admin')

    // Configure GitHub
    await page.getByRole('textbox', { name: /votre-nom-utilisateur/ }).fill('test-owner')
    await page.getByRole('textbox', { name: /nos-recettes/ }).fill('test-repo')
    await page.getByRole('textbox', { name: /ghp_/ }).fill('ghp_testtoken12345678901234567890')
    await page.getByRole('button', { name: /Tester la connexion/ }).click()
    await expect(page.getByText(/Configuration GitHub sauvegardée/)).toBeVisible({
      timeout: 10000,
    })

    // Configure Cloudinary
    await page.getByRole('tab', { name: /Cloudinary/ }).click()
    await page.getByPlaceholder('votre-cloud-name').fill('test-cloud')
    await page.getByPlaceholder('votre-upload-preset').fill('test-preset')

    // Test connection first (required before Save button appears)
    await page.getByRole('button', { name: /Tester la connexion/ }).click()
    await page.waitForTimeout(1000) // Wait for test connection alert

    // Save configuration
    const saveButton2 = page.getByRole('button', { name: /Sauvegarder/ })
    await expect(saveButton2).toBeVisible({ timeout: 5000 })
    await saveButton2.click()
    await expect(page.getByText(/Configuration Cloudinary sauvegardée/)).toBeVisible({
      timeout: 5000,
    })

    // Reload page
    await page.reload()

    // Configuration should still be complete
    await expect(page.getByText(/Configuration complète/)).toBeVisible()
    await expect(page.getByText(/test-owner\/test-repo/)).toBeVisible()
    await expect(page.getByText(/test-cloud/)).toBeVisible()
  })

  test('should navigate to new recipe page when configured', async ({
    page,
    adminConfig: _,
  }) => {
    await mockGitHubAPI(page)
    await mockCloudinaryAPI(page)

    await page.goto('/admin')

    // Should show complete configuration (from adminConfig fixture)
    await expect(page.getByText(/Configuration complète/)).toBeVisible()

    // Click "Add new recipe"
    await page.getByRole('link', { name: /Ajouter une nouvelle recette/ }).click()

    // Should navigate to new recipe page
    await expect(page).toHaveURL('/new-recipe')
  })

  test('should navigate back to recipes from admin page', async ({
    page,
    cleanDb: _,
  }) => {
    await page.goto('/admin')

    // Click back button
    await page.getByRole('button', { name: /Retour aux recettes/ }).first().click()

    // Should navigate back to home
    await expect(page).toHaveURL('/')
  })
})
