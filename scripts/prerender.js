#!/usr/bin/env node

import { chromium, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DIST_DIR = path.join(__dirname, '..', 'dist')
const ROUTES_FILE = path.join(__dirname, '..', 'snap-routes.json')

/**
 * Remove duplicate meta tags when React Helmet versions exist.
 * React Helmet adds data-rh="true" to its tags. When both static (from index.html)
 * and dynamic (from React Helmet) meta tags exist, Facebook's scraper takes the first one,
 * which causes it to show the default image instead of recipe-specific images.
 *
 * This function removes static meta tags that have React Helmet equivalents.
 */
function cleanupDuplicateMetaTags(html) {
  // Properties to deduplicate (remove static version when React Helmet version exists)
  const metaProperties = [
    'og:title',
    'og:description',
    'og:image',
    'og:type',
    'og:url',
    'og:site_name',
    'og:locale',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image',
    'twitter:url',
  ]

  const metaNames = [
    'description',
    'keywords',
    'author',
    'robots',
    'language',
    'revisit-after',
  ]

  let cleanedHtml = html

  // Remove static property meta tags if React Helmet version exists
  for (const property of metaProperties) {
    const escapedProperty = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Check if React Helmet version exists (has data-rh="true")
    const hasReactHelmetVersion =
      cleanedHtml.includes(`property="${property}" `) &&
      cleanedHtml.includes(`data-rh="true"`)

    if (hasReactHelmetVersion) {
      // Remove static version (without data-rh attribute)
      // Match meta tags without data-rh that have this property
      const staticMetaRegex = new RegExp(
        `<meta\\s+property="${escapedProperty}"(?![^>]*data-rh)[^>]*>\\s*`,
        'g',
      )
      cleanedHtml = cleanedHtml.replace(staticMetaRegex, '')
    }
  }

  // Remove static name meta tags if React Helmet version exists
  for (const name of metaNames) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const hasReactHelmetVersion =
      cleanedHtml.includes(`name="${name}" `) &&
      cleanedHtml.includes(`data-rh="true"`)

    if (hasReactHelmetVersion) {
      const staticMetaRegex = new RegExp(
        `<meta\\s+name="${escapedName}"(?![^>]*data-rh)[^>]*>\\s*`,
        'g',
      )
      cleanedHtml = cleanedHtml.replace(staticMetaRegex, '')
    }
  }

  // Also remove og:image:width and og:image:height static tags as they're not set by React Helmet
  // and can confuse scrapers if the recipe image has different dimensions
  if (
    cleanedHtml.includes('og:image') &&
    cleanedHtml.includes('data-rh="true"')
  ) {
    cleanedHtml = cleanedHtml.replace(
      /<meta\s+property="og:image:(width|height)"(?![^>]*data-rh)[^>]*>\s*/g,
      '',
    )
  }

  return cleanedHtml
}

async function prerender() {
  console.log('🎬 Starting pre-rendering...\n')

  // Read routes from snap-routes.json
  let routes = []
  try {
    const routesContent = fs.readFileSync(ROUTES_FILE, 'utf-8')
    routes = JSON.parse(routesContent)
    console.log(`📋 Found ${routes.length} routes to pre-render`)
  } catch (error) {
    console.error('❌ Error reading snap-routes.json:', error.message)
    process.exit(1)
  }

  // Start Vite preview server
  console.log('\n🚀 Starting preview server...')
  const server = await preview({
    preview: {
      port: 3001,
    },
  })

  const baseUrl = `http://localhost:3001`
  console.log(`✅ Server running at ${baseUrl}`)

  // Launch Playwright browser with persistent context to share IndexedDB
  console.log('\n🎭 Launching browser with persistent context...')
  const browserContext = await chromium.launchPersistentContext(
    path.join(__dirname, '..', '.browser-data'),
    {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  )

  // Pre-populate IndexedDB by visiting homepage first
  console.log('\n📦 Pre-populating IndexedDB with recipe data...')
  const initPage = await browserContext.newPage()
  await initPage.goto(`${baseUrl}/`, {
    waitUntil: 'networkidle',
    timeout: 30000,
  })

  // Wait for IndexedDB to be fully populated with all recipes
  // The homepage loads all recipes into IndexedDB, so we wait for that to complete
  await initPage.waitForFunction(
    async () => {
      try {
        // Open the database
        const dbName = 'nosrecettes'
        const request = indexedDB.open(dbName)

        return new Promise((resolve) => {
          request.onsuccess = async () => {
            const db = request.result

            // Check if recipes store exists
            if (!db.objectStoreNames.contains('recipes')) {
              resolve(false)
              return
            }

            // Count recipes in the store
            const transaction = db.transaction(['recipes'], 'readonly')
            const store = transaction.objectStore('recipes')
            const countRequest = store.count()

            countRequest.onsuccess = () => {
              const count = countRequest.result
              // We expect 720+ recipes. If we have at least 700, consider it fully loaded
              // (accounting for potential minor variations)
              resolve(count >= 700)
            }

            countRequest.onerror = () => resolve(false)
          }

          request.onerror = () => resolve(false)
        })
      } catch (error) {
        return false
      }
    },
    { timeout: 60000 },
  ) // Increase timeout to 60s for full data load

  console.log('✅ IndexedDB fully populated with all recipes')
  await initPage.close()

  let successCount = 0
  let errorCount = 0

  try {
    // Pre-render routes in parallel batches
    const CONCURRENCY = parseInt(process.env.PRERENDER_CONCURRENCY || '10', 10)
    const batches = []

    for (let i = 0; i < routes.length; i += CONCURRENCY) {
      batches.push(routes.slice(i, i + CONCURRENCY))
    }

    console.log(
      `\n🚀 Processing ${routes.length} routes in ${batches.length} batches (${CONCURRENCY} concurrent)...\n`,
    )

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex]

      console.log(
        `\n📦 Batch ${batchIndex + 1}/${batches.length} (${batch.length} routes)`,
      )

      const batchPromises = batch.map(async (route, index) => {
        const routeNumber = batchIndex * CONCURRENCY + index + 1

        try {
          const page = await browserContext.newPage()

          // Set shorter default timeout for recipe pages since IndexedDB is pre-populated
          if (route.includes('/recipe/')) {
            page.setDefaultTimeout(10000) // 10s instead of 30s default
          }

          // Set viewport
          await page.setViewportSize({ width: 1280, height: 720 })
          await page.goto(`${baseUrl}${route}`)
          console.log(`Navigated to ${baseUrl}${route}`)
          await page.waitForTimeout(1_000)
          // For recipe pages, wait for recipe-specific content to load
          // Since IndexedDB is pre-populated, recipes should load almost instantly
          if (route.includes('/recipe/')) {
            console.log(
              '  ⏳ Waiting for recipe content to render... for ' + route,
            )

            try {
              await expect(
                page.locator('[data-testid="recipe-skeleton"]'),
              ).toBeHidden()

              // Now wait for React Helmet to update meta tags with recipe-specific data
              // This should happen quickly once recipe is rendered
              await expect(async () => {
                expect(
                  page.getByRole('heading', { name: 'Instructions' }),
                ).toBeVisible()
              }).toPass({ timeout: 10_000 }) // Reduced from 5s to 2s
              console.log('  ✅ Meta tags updated for ' + route)
              // Small buffer for any final DOM updates
              await page.waitForTimeout(100) // Reduced from 200ms to 100ms
            } catch (error) {
              console.warn(
                `  ⚠️  Recipe content wait failed for ${route}: ${error.message}`,
              )
              // Fall back to basic timeout
              await page.waitForTimeout(1000)
            }
          } else {
            // For non-recipe pages, use basic timeout
            await page.waitForTimeout(500)
          }

          // Get the rendered HTML
          let html = await page.content()

          // Clean up duplicate meta tags for recipe pages
          // React Helmet adds tags with data-rh="true", but the static tags from index.html remain
          // Facebook scraper takes the first og:image it finds, so we need to remove duplicates
          if (route.includes('/recipe/')) {
            html = cleanupDuplicateMetaTags(html)
          }

          // Determine output file path
          let outputPath
          if (route === '/') {
            outputPath = path.join(DIST_DIR, 'index.html')
          } else if (route.endsWith('/')) {
            outputPath = path.join(DIST_DIR, route.slice(1), 'index.html')
          } else {
            outputPath = path.join(DIST_DIR, `${route.slice(1)}.html`)
          }

          // Create directories if needed
          const outputDir = path.dirname(outputPath)
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
          }

          // Write the HTML file
          fs.writeFileSync(outputPath, html, 'utf-8')

          console.log(`  ✅ [${routeNumber}/${routes.length}] ${route}`)
          await page.close()
          return { success: true, route }
        } catch (error) {
          console.error(
            `  ❌ [${routeNumber}/${routes.length}] ${route}: ${error.message}`,
          )
          return { success: false, route, error: error.message }
        }
      })

      const results = await Promise.all(batchPromises)
      successCount += results.filter((r) => r.success).length
      errorCount += results.filter((r) => !r.success).length
    }
  } finally {
    await browserContext.close()
    server.httpServer.close()
  }

  console.log(`\n\n📊 Pre-rendering complete!`)
  console.log(`✅ Success: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)

  if (errorCount > 0) {
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prerender().catch((error) => {
    console.error('\n❌ Fatal error:', error)
    process.exit(1)
  })
}

export { prerender }
