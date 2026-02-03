import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

/**
 * Test Suite: Pre-rendered Static HTML Meta Tags
 *
 * Tests that pre-rendered HTML files have proper meta tags baked in.
 * This is critical for Facebook/social media crawlers that don't execute JavaScript.
 *
 * NOTE: These tests run against the built dist/ files, not the dev server.
 */

test.describe('Pre-rendered Static HTML', () => {
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'Static HTML tests only need to run on one browser'
  )

  test.beforeEach(async () => {
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist')
    if (!fs.existsSync(distPath)) {
      test.skip(true, 'Dist folder not found - run `pnpm build` first')
    }
  })

  test('should have pre-rendered homepage', async () => {
    const indexPath = path.join(process.cwd(), 'dist', 'index.html')
    expect(fs.existsSync(indexPath)).toBeTruthy()

    const html = fs.readFileSync(indexPath, 'utf-8')

    // Should have Open Graph tags
    expect(html).toContain('property="og:title"')
    expect(html).toContain('property="og:type"')
    expect(html).toContain('property="og:url"')
    expect(html).toContain('property="og:site_name"')
  })

  test('should have pre-rendered recipe pages with recipe-specific meta tags', async () => {
    const recipePath = path.join(process.cwd(), 'dist', 'recipe')

    // Check that recipe folder exists
    if (!fs.existsSync(recipePath)) {
      test.skip(true, 'No pre-rendered recipe pages found')
    }

    // Get first recipe HTML file
    const recipeFiles = fs
      .readdirSync(recipePath)
      .filter((file) => file.endsWith('.html'))

    expect(recipeFiles.length).toBeGreaterThan(0)

    const firstRecipeFile = recipeFiles[0]
    const firstRecipePath = path.join(recipePath, firstRecipeFile)
    const html = fs.readFileSync(firstRecipePath, 'utf-8')

    // Should have Open Graph tags with data-rh attribute (from React Helmet)
    expect(html).toMatch(/property="og:title".*data-rh="true"/)
    expect(html).toMatch(/property="og:description".*data-rh="true"/)
    expect(html).toMatch(/property="og:type".*content="article"/)

    // Should have Twitter Card tags
    expect(html).toMatch(/name="twitter:card"/)
    expect(html).toMatch(/name="twitter:title"/)

    // Should have structured data (Schema.org Recipe)
    expect(html).toContain('application/ld+json')
    expect(html).toContain('"@type":"Recipe"')

    // Should have canonical URL
    expect(html).toContain('rel="canonical"')
  })

  test('should have different meta tags for different recipes', async () => {
    const recipePath = path.join(process.cwd(), 'dist', 'recipe')

    if (!fs.existsSync(recipePath)) {
      test.skip(true, 'No pre-rendered recipe pages found')
    }

    const recipeFiles = fs
      .readdirSync(recipePath)
      .filter((file) => file.endsWith('.html'))
      .slice(0, 2) // Get first 2 recipes

    if (recipeFiles.length < 2) {
      test.skip(true, 'Need at least 2 pre-rendered recipes')
    }

    const html1 = fs.readFileSync(
      path.join(recipePath, recipeFiles[0]),
      'utf-8'
    )
    const html2 = fs.readFileSync(
      path.join(recipePath, recipeFiles[1]),
      'utf-8'
    )

    // Extract og:title from both
    const ogTitleMatch1 = html1.match(/property="og:title".*?content="([^"]+)"/)
    const ogTitleMatch2 = html2.match(/property="og:title".*?content="([^"]+)"/)

    expect(ogTitleMatch1).toBeTruthy()
    expect(ogTitleMatch2).toBeTruthy()

    const ogTitle1 = ogTitleMatch1![1]
    const ogTitle2 = ogTitleMatch2![1]

    // Titles should be different (recipe-specific)
    expect(ogTitle1).not.toBe(ogTitle2)

    // Neither should be the generic homepage title
    expect(ogTitle1).not.toContain('720 Recettes')
    expect(ogTitle2).not.toContain('720 Recettes')
  })

  test('should have recipe structured data in pre-rendered HTML', async () => {
    const recipePath = path.join(process.cwd(), 'dist', 'recipe')

    if (!fs.existsSync(recipePath)) {
      test.skip(true, 'No pre-rendered recipe pages found')
    }

    const recipeFiles = fs
      .readdirSync(recipePath)
      .filter((file) => file.endsWith('.html'))

    const firstRecipeFile = recipeFiles[0]
    const html = fs.readFileSync(
      path.join(recipePath, firstRecipeFile),
      'utf-8'
    )

    // Extract structured data
    const jsonLdMatch = html.match(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/
    )
    expect(jsonLdMatch).toBeTruthy()

    const structuredData = JSON.parse(jsonLdMatch![1])

    // Should have Recipe schema
    const recipeSchema = Array.isArray(structuredData)
      ? structuredData.find((item) => item['@type'] === 'Recipe')
      : structuredData['@type'] === 'Recipe'
        ? structuredData
        : null

    expect(recipeSchema).toBeTruthy()
    expect(recipeSchema!.name).toBeTruthy()
    expect(recipeSchema!.description).toBeTruthy()
    expect(recipeSchema!.recipeIngredient).toBeTruthy()
    expect(recipeSchema!.recipeInstructions).toBeTruthy()
  })

  test('should have readable HTML (not minified beyond recognition)', async () => {
    const recipePath = path.join(process.cwd(), 'dist', 'recipe')

    if (!fs.existsSync(recipePath)) {
      test.skip(true, 'No pre-rendered recipe pages found')
    }

    const recipeFiles = fs
      .readdirSync(recipePath)
      .filter((file) => file.endsWith('.html'))

    const html = fs.readFileSync(
      path.join(recipePath, recipeFiles[0]),
      'utf-8'
    )

    // Should have meta tags
    expect(html).toContain('<meta')
    expect(html).toContain('<head>')
    expect(html).toContain('</head>')
    expect(html).toContain('<body>')

    // Should not be empty
    expect(html.length).toBeGreaterThan(1000)
  })

  test('pre-rendered HTML should have content in #root', async () => {
    const recipePath = path.join(process.cwd(), 'dist', 'recipe')

    if (!fs.existsSync(recipePath)) {
      test.skip(true, 'No pre-rendered recipe pages found')
    }

    const recipeFiles = fs
      .readdirSync(recipePath)
      .filter((file) => file.endsWith('.html'))

    const html = fs.readFileSync(
      path.join(recipePath, recipeFiles[0]),
      'utf-8'
    )

    // Extract content between <div id="root"> and </div>
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/)

    expect(rootMatch).toBeTruthy()

    const rootContent = rootMatch![1]

    // Should have content (not empty)
    expect(rootContent.length).toBeGreaterThan(100)

    // Should have typical recipe page elements
    expect(rootContent).toContain('<h1') // Recipe title
  })
})
