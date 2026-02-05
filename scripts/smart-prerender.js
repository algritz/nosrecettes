#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Check if recipe HTML files exist in dist folder
 * Returns true if we have a reasonable number of pre-rendered recipe pages
 */
function hasPrerenderedRecipes() {
  const DIST_DIR = path.join(__dirname, '..', 'dist')

  if (!fs.existsSync(DIST_DIR)) {
    console.log('⚠️  dist/ folder does not exist')
    return false
  }

  // Count HTML files (excluding index.html and 404.html)
  const findHtmlFiles = (dir) => {
    let htmlFiles = []
    const items = fs.readdirSync(dir, { withFileTypes: true })

    for (const item of items) {
      const fullPath = path.join(dir, item.name)
      if (item.isDirectory()) {
        htmlFiles = htmlFiles.concat(findHtmlFiles(fullPath))
      } else if (item.isFile() && item.name.endsWith('.html')) {
        // Don't count index.html or 404.html at root
        const relativePath = path.relative(DIST_DIR, fullPath)
        if (relativePath !== 'index.html' && relativePath !== '404.html') {
          htmlFiles.push(fullPath)
        }
      }
    }
    return htmlFiles
  }

  const htmlFiles = findHtmlFiles(DIST_DIR)
  const count = htmlFiles.length

  // We expect 720+ recipe pages. If we have fewer than 100, something's wrong
  const MIN_EXPECTED_RECIPES = 100

  console.log(`📊 Found ${count} pre-rendered HTML files in dist/`)

  if (count < MIN_EXPECTED_RECIPES) {
    console.log(`⚠️  Expected at least ${MIN_EXPECTED_RECIPES} recipe pages, found ${count}`)
    return false
  }

  return true
}

/**
 * Smart pre-rendering that only processes changed recipes
 */
async function smartPrerender() {
  console.log('🧠 Smart pre-rendering starting...\n')

  // Check if we should do incremental pre-rendering
  const enableIncremental = process.env.INCREMENTAL_PRERENDER !== 'false'

  if (!enableIncremental) {
    console.log('🔄 Incremental pre-rendering disabled, doing full build')
    execSync('node scripts/generate-snap-routes.js && node scripts/prerender.js', {
      stdio: 'inherit'
    })
    return
  }

  // Check if recipe HTML files already exist in dist
  // If they don't, we need to do a full pre-render regardless of git changes
  if (!hasPrerenderedRecipes()) {
    console.log('🔄 No pre-rendered recipes found, forcing full pre-render')
    execSync('node scripts/generate-snap-routes.js && node scripts/prerender.js', {
      stdio: 'inherit'
    })
    return
  }

  // Detect changed recipes
  let exitCode
  try {
    execSync('node scripts/get-changed-recipes.js', { stdio: 'inherit' })
    exitCode = 0
  } catch (error) {
    exitCode = error.status
  }

  if (exitCode === 2) {
    // No changes, skip pre-rendering (safe because we verified HTML files exist)
    console.log('\n✅ Skipping pre-rendering (no recipe changes, existing pre-rendered files found)')
    return
  }

  if (exitCode === 0 || exitCode === null) {
    // Full pre-rendering
    console.log('\n🔄 Running full pre-rendering...')
    execSync('node scripts/generate-snap-routes.js && node scripts/prerender.js', {
      stdio: 'inherit'
    })
    return
  }

  if (exitCode === 1) {
    // Incremental pre-rendering
    console.log('\n⚡ Running incremental pre-rendering...')

    // Read changed recipes
    const changedRecipesPath = path.join(__dirname, '..', 'changed-recipes.json')
    const changedRecipes = JSON.parse(
      fs.readFileSync(changedRecipesPath, 'utf-8')
    )

    // Generate routes for changed recipes only
    const routes = [
      '/', // Always include homepage
      ...changedRecipes.map((slug) => `/recipe/${slug}`)
    ]

    const routesPath = path.join(__dirname, '..', 'snap-routes.json')
    fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2), 'utf-8')

    console.log(`📝 Generated ${routes.length} routes for incremental pre-rendering`)

    // Run pre-rendering
    execSync('node scripts/prerender.js', { stdio: 'inherit' })

    console.log('\n✅ Incremental pre-rendering complete')
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  smartPrerender().catch((error) => {
    console.error('\n❌ Smart pre-rendering failed:', error)
    process.exit(1)
  })
}

export { smartPrerender }
