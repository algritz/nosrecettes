#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Generate list of routes for react-snap to pre-render
 */
function generateRoutes() {
  const recipesDir = path.join(__dirname, '..', 'src', 'recipes')

  // Get all recipe files
  const recipeFiles = fs.readdirSync(recipesDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')

  console.log(`Found ${recipeFiles.length} recipe files`)

  // Generate routes
  const routes = [
    '/', // Homepage
    '/admin', // Admin page
  ]

  // Add all recipe routes
  recipeFiles.forEach((file) => {
    const slug = file.replace('.ts', '')
    routes.push(`/recipe/${slug}`)
  })

  return routes
}

function main() {
  try {
    console.log('Generating routes for react-snap...')

    const routes = generateRoutes()
    const outputPath = path.join(__dirname, '..', 'snap-routes.json')

    fs.writeFileSync(outputPath, JSON.stringify(routes, null, 2), 'utf-8')

    console.log(`✅ Generated ${routes.length} routes at ${outputPath}`)
  } catch (error) {
    console.error('❌ Error generating routes:', error)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
