import fs from 'node:fs'
import path from 'node:path'
import type { Recipe } from '../../src/types/recipe'
import {
  formatIngredientsForClipboard,
  formatInstructionsForClipboard,
} from '../../src/utils/clipboardFormat'
import { expect, test } from '../fixtures/baseFixtures'

/**
 * Test Suite: Copy Ingredients/Instructions to Clipboard
 *
 * Tests the ability to copy a recipe's ingredients or instructions to the
 * clipboard, including recipes whose ingredients/instructions are split
 * into titled sections (section titles must be preserved in the copy).
 */

const recipesData: { recipes: Recipe[] } = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'public', 'recipes.json'), 'utf-8'),
)
const recipes = recipesData.recipes

function isSectioned(value: unknown[]): boolean {
  return (
    value.length > 0 &&
    typeof value[0] === 'object' &&
    value[0] !== null &&
    'title' in value[0]
  )
}

const flatRecipe = recipes.find(
  (recipe) =>
    !isSectioned(recipe.ingredients) && !isSectioned(recipe.instructions),
)

const sectionedRecipe = recipes.find(
  (recipe) =>
    isSectioned(recipe.ingredients) && isSectioned(recipe.instructions),
)

if (!flatRecipe || !sectionedRecipe) {
  throw new Error(
    'Test setup error: could not find both a flat and a sectioned recipe in public/recipes.json',
  )
}

test.describe('Copy to Clipboard', () => {
  test.beforeEach(async ({ context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  })

  test('should copy flat ingredients to clipboard preserving order', async ({
    page,
    populatedDb,
  }) => {
    await page.goto(`/recipe/${flatRecipe.slug}`)
    await page.locator('h1').waitFor({ state: 'visible', timeout: 10000 })

    await page.locator('[data-testid="copy-ingredients-button"]').click()

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    )
    expect(clipboardText).toBe(
      formatIngredientsForClipboard(flatRecipe.ingredients),
    )
  })

  test('should copy flat instructions to clipboard preserving order', async ({
    page,
    populatedDb,
  }) => {
    await page.goto(`/recipe/${flatRecipe.slug}`)
    await page.locator('h1').waitFor({ state: 'visible', timeout: 10000 })

    await page.locator('[data-testid="copy-instructions-button"]').click()

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    )
    expect(clipboardText).toBe(
      formatInstructionsForClipboard(flatRecipe.instructions),
    )
  })

  test('should preserve section titles when copying sectioned ingredients', async ({
    page,
    populatedDb,
  }) => {
    await page.goto(`/recipe/${sectionedRecipe.slug}`)
    await page.locator('h1').waitFor({ state: 'visible', timeout: 10000 })

    await page.locator('[data-testid="copy-ingredients-button"]').click()

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    )
    const expectedText = formatIngredientsForClipboard(
      sectionedRecipe.ingredients,
    )
    expect(clipboardText).toBe(expectedText)

    // Sanity check: every section title actually made it into the copy
    for (const section of sectionedRecipe.ingredients as {
      title: string
    }[]) {
      if (section.title) {
        expect(clipboardText).toContain(section.title)
      }
    }
  })

  test('should preserve section titles when copying sectioned instructions', async ({
    page,
    populatedDb,
  }) => {
    await page.goto(`/recipe/${sectionedRecipe.slug}`)
    await page.locator('h1').waitFor({ state: 'visible', timeout: 10000 })

    await page.locator('[data-testid="copy-instructions-button"]').click()

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    )
    const expectedText = formatInstructionsForClipboard(
      sectionedRecipe.instructions,
    )
    expect(clipboardText).toBe(expectedText)

    for (const section of sectionedRecipe.instructions as {
      title: string
    }[]) {
      if (section.title) {
        expect(clipboardText).toContain(section.title)
      }
    }
  })

  test('should show a confirmation toast after copying', async ({
    page,
    populatedDb,
  }) => {
    await page.goto(`/recipe/${flatRecipe.slug}`)
    await page.locator('h1').waitFor({ state: 'visible', timeout: 10000 })

    await page.locator('[data-testid="copy-ingredients-button"]').click()

    await expect(page.getByText('Ingrédients copiés')).toBeVisible()
  })
})
