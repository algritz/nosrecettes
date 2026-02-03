#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

  // Detect changed recipes
  let exitCode
  try {
    execSync('node scripts/get-changed-recipes.js', { stdio: 'inherit' })
    exitCode = 0
  } catch (error) {
    exitCode = error.status
  }

  if (exitCode === 2) {
    // No changes, skip pre-rendering
    console.log('\n✅ Skipping pre-rendering (no recipe changes)')
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
