// eslint-disable-next-line no-restricted-imports
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

    // Should have Open Graph tags (pre-rendered)
    expect(html).toMatch(/property="og:title"/)
    expect(html).toMatch(/property="og:description"/)
    expect(html).toMatch(/property="og:type"/)

    // Should have Twitter Card tags
    expect(html).toMatch(/name="twitter:card"/)
    expect(html).toMatch(/name="twitter:title"/)

    // Should have structured data
    expect(html).toContain('application/ld+json')

    // Should have canonical URL
    expect(html).toContain('rel="canonical"')
  })

  test('should have different meta tags for different recipes', async () => {
    // Verifies that pre-rendered HTML captures recipe-specific meta tags from React Helmet.
    // The pre-rendering script now uses persistent browser context to share IndexedDB
    // and waits for React Helmet to update the DOM.

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

    // Extract og:title from React Helmet meta tags (marked with data-rh="true")
    // Use a more specific regex that matches the React Helmet version
    const ogTitleMatch1 = html1.match(
      /property="og:title"\s+content="([^"]+)"\s+data-rh="true"/
    )
    const ogTitleMatch2 = html2.match(
      /property="og:title"\s+content="([^"]+)"\s+data-rh="true"/
    )

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
    // Verifies that pre-rendered HTML includes Recipe structured data (JSON-LD).
    // The pre-rendering script now captures React Helmet's structured data.

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

    // Extract structured data from pre-rendered HTML
    const jsonLdMatches = Array.from(
      html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)
    )
    expect(jsonLdMatches.length).toBeGreaterThan(0)

    let recipeSchema = null
    for (const match of jsonLdMatches) {
      try {
        const structuredData = JSON.parse(match[1] as string)
        // Check if this is a Recipe or contains a Recipe
        if (Array.isArray(structuredData)) {
          recipeSchema = structuredData.find((item) => item['@type'] === 'Recipe')
        } else if (structuredData['@type'] === 'Recipe') {
          recipeSchema = structuredData
        }
        if (recipeSchema) break
      } catch {
        // Skip invalid JSON
      }
    }

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
    // Verifies that pre-rendered HTML contains actual recipe content, not loading skeletons.
    // The pre-rendering script now waits for recipe content to render before capturing.

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

    // Check that #root div exists and has content
    const rootIndex = html.indexOf('<div id="root">')
    expect(rootIndex).toBeGreaterThan(-1)

    // Get everything after the root div opening tag
    const afterRoot = html.substring(rootIndex + '<div id="root">'.length)

    // Should have substantial content (more than just closing tag)
    expect(afterRoot.length).toBeGreaterThan(1000)

    // Should have typical recipe page elements
    expect(afterRoot).toContain('<h1') // Recipe title
    expect(afterRoot).toContain('class="container') // Container wrapper
  })
})
