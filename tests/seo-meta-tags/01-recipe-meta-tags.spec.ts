import { test, expect } from '../fixtures/baseFixtures'

/**
 * Test Suite: SEO Meta Tags for Recipe Pages
 *
 * Tests that recipe pages have proper meta tags for social media sharing:
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Structured Data (Schema.org)
 * - Basic SEO meta tags
 */

test.describe('Recipe SEO Meta Tags', () => {
  test('should have Open Graph meta tags for recipe page', async ({
    page,
    populatedDb,
  }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Get recipe title from page
    const recipeTitle = await page.locator('h1').textContent()

    // Check Open Graph type (use data-rh to target React Helmet meta tags)
    const ogType = await page.locator('meta[property="og:type"][data-rh="true"][data-rh="true"]').getAttribute('content')
    expect(ogType).toBe('article')

    // Check Open Graph title - should include recipe name (use data-rh to target React Helmet meta tags)
    const ogTitle = await page.locator('meta[property="og:title"][data-rh="true"][data-rh="true"]').getAttribute('content')
    expect(ogTitle).toBeTruthy()
    expect(ogTitle).toContain(recipeTitle?.trim() ?? '')

    // Check Open Graph description
    const ogDescription = await page
      .locator('meta[property="og:description"][data-rh="true"][data-rh="true"]')
      .getAttribute('content')
    expect(ogDescription).toBeTruthy()
    expect(ogDescription!.length).toBeGreaterThan(10)

    // Check Open Graph URL
    const ogUrl = await page.locator('meta[property="og:url"][data-rh="true"]').getAttribute('content')
    expect(ogUrl).toBeTruthy()
    expect(ogUrl).toContain('/recipe/')

    // Check Open Graph site name
    const ogSiteName = await page
      .locator('meta[property="og:site_name"][data-rh="true"]')
      .getAttribute('content')
    expect(ogSiteName).toBe('Nos Recettes')

    // Check Open Graph locale
    const ogLocale = await page
      .locator('meta[property="og:locale"][data-rh="true"]')
      .getAttribute('content')
    expect(ogLocale).toBe('fr_CA')
  })

  test('should have Twitter Card meta tags for recipe page', async ({
    page,
    populatedDb,
  }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Get recipe title from page
    const recipeTitle = await page.locator('h1').textContent()

    // Check Twitter card type
    const twitterCard = await page
      .locator('meta[name="twitter:card"][data-rh="true"]')
      .getAttribute('content')
    expect(twitterCard).toBe('summary_large_image')

    // Check Twitter title
    const twitterTitle = await page
      .locator('meta[name="twitter:title"][data-rh="true"]')
      .getAttribute('content')
    expect(twitterTitle).toBeTruthy()
    expect(twitterTitle).toContain(recipeTitle?.trim() ?? '')

    // Check Twitter description
    const twitterDescription = await page
      .locator('meta[name="twitter:description"][data-rh="true"]')
      .getAttribute('content')
    expect(twitterDescription).toBeTruthy()
    expect(twitterDescription!.length).toBeGreaterThan(10)

    // Check Twitter URL
    const twitterUrl = await page
      .locator('meta[name="twitter:url"][data-rh="true"]')
      .getAttribute('content')
    expect(twitterUrl).toBeTruthy()
    expect(twitterUrl).toContain('/recipe/')
  })

  test('should have recipe structured data (Schema.org)', async ({
    page,
    populatedDb,
  }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Get all structured data scripts
    const structuredDataElements = await page
      .locator('script[type="application/ld+json"]')
      .all()

    expect(structuredDataElements.length).toBeGreaterThan(0)

    // Find the one with Recipe schema
    let recipeSchema: { '@context'?: string; '@type'?: string; name?: string; description?: string; recipeIngredient?: string[]; recipeInstructions?: unknown[] } | null = null

    for (const element of structuredDataElements) {
      const content = await element.textContent()
      if (!content) continue

      try {
        const data = JSON.parse(content)

        // Check if this is the recipe data
        if (Array.isArray(data)) {
          const found = data.find((item) => item['@type'] === 'Recipe')
          if (found) {
            recipeSchema = found
            break
          }
        } else if (data['@type'] === 'Recipe') {
          recipeSchema = data
          break
        }
      } catch {
        // Skip malformed JSON
        continue
      }
    }

    expect(recipeSchema).toBeTruthy()
    expect(recipeSchema!['@context']).toMatch(/^https:\/\/schema\.org\/?$/)
    expect(recipeSchema!['@type']).toBe('Recipe')
    expect(recipeSchema!.name).toBeTruthy()
    expect(recipeSchema!.description).toBeTruthy()

    // Check for ingredients
    expect(recipeSchema!.recipeIngredient).toBeTruthy()
    expect(Array.isArray(recipeSchema!.recipeIngredient)).toBeTruthy()
    expect(recipeSchema!.recipeIngredient.length).toBeGreaterThan(0)

    // Check for instructions
    expect(recipeSchema!.recipeInstructions).toBeTruthy()
    expect(Array.isArray(recipeSchema!.recipeInstructions)).toBeTruthy()
    expect(recipeSchema!.recipeInstructions.length).toBeGreaterThan(0)
  })

  test('should have basic SEO meta tags', async ({ page, populatedDb }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Check meta description
    const metaDescription = await page
      .locator('meta[name="description"][data-rh="true"]')
      .getAttribute('content')
    expect(metaDescription).toBeTruthy()
    expect(metaDescription!.length).toBeGreaterThan(10)

    // Check meta keywords
    const metaKeywords = await page
      .locator('meta[name="keywords"][data-rh="true"]')
      .getAttribute('content')
    expect(metaKeywords).toBeTruthy()

    // Check canonical URL
    const canonical = await page.locator('link[rel="canonical"][data-rh="true"]').getAttribute('href')
    expect(canonical).toBeTruthy()
    expect(canonical).toContain('/recipe/')

    // Check robots meta tag
    const robots = await page.locator('meta[name="robots"][data-rh="true"]').getAttribute('content')
    expect(robots).toContain('index')
    expect(robots).toContain('follow')

    // Check language meta tag
    const language = await page.locator('meta[name="language"][data-rh="true"]').getAttribute('content')
    expect(language).toBe('French')
  })

  test('should have different meta tags for different recipes', async ({
    page,
    populatedDb,
  }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    const firstRecipeTitle = await page.locator('h1').textContent()
    const firstOgTitle = await page
      .locator('meta[property="og:title"][data-rh="true"]')
      .getAttribute('content')
    const firstOgUrl = await page
      .locator('meta[property="og:url"][data-rh="true"]')
      .getAttribute('content')

    // Go back and navigate to second recipe
    await page.goto('/')
    await page.locator('[data-testid="recipe-card"]').nth(1).click()
    await page.waitForLoadState('networkidle')

    const secondRecipeTitle = await page.locator('h1').textContent()
    const secondOgTitle = await page
      .locator('meta[property="og:title"][data-rh="true"]')
      .getAttribute('content')
    const secondOgUrl = await page
      .locator('meta[property="og:url"][data-rh="true"]')
      .getAttribute('content')

    // Titles should be different
    expect(firstRecipeTitle).not.toBe(secondRecipeTitle)
    expect(firstOgTitle).not.toBe(secondOgTitle)
    expect(firstOgUrl).not.toBe(secondOgUrl)

    // Each should contain their respective recipe names
    expect(firstOgTitle).toContain(firstRecipeTitle?.trim() ?? '')
    expect(secondOgTitle).toContain(secondRecipeTitle?.trim() ?? '')
  })

  test('should have Open Graph image tag', async ({ page, populatedDb }) => {
    // Navigate to first recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Check for og:image
    const ogImage = await page
      .locator('meta[property="og:image"][data-rh="true"]')
      .getAttribute('content')
    expect(ogImage).toBeTruthy()

    // Should be a valid URL
    expect(ogImage).toMatch(/^https?:\/\//)
  })

  test('should update document title on navigation', async ({
    page,
    populatedDb,
  }) => {
    // Start at homepage
    await page.goto('/')
    const homeTitle = await page.title()

    // Navigate to recipe
    await page.locator('[data-testid="recipe-card"]').first().click()
    await page.waitForLoadState('networkidle')

    // Wait for React Helmet to update the document title
    // The title should change from the homepage title to the recipe-specific title
    await page.waitForFunction(
      (expectedHomeTitle) => document.title !== expectedHomeTitle,
      homeTitle,
      { timeout: 10000 }
    )

    const recipePageTitle = await page.title()

    // Titles should be different
    expect(homeTitle).not.toBe(recipePageTitle)

    // Recipe page title should contain recipe name
    const recipeName = await page.locator('h1').textContent()
    expect(recipePageTitle).toContain(recipeName?.trim() ?? '')
  })
})
