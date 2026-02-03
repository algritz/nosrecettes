#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Get list of changed recipe files from git
 * Returns slugs of changed recipes
 */
function getChangedRecipes() {
  try {
    // Get changed files in the last commit
    const changedFiles = execSync('git diff --name-only HEAD~1 HEAD', {
      encoding: 'utf-8'
    })
      .trim()
      .split('\n')
      .filter(Boolean)

    console.log('📝 Changed files:', changedFiles)

    // Find recipe files that changed
    const changedRecipes = changedFiles
      .filter((file) => file.startsWith('src/recipes/') && file.endsWith('.ts'))
      .filter((file) => file !== 'src/recipes/index.ts')
      .map((file) => {
        const filename = path.basename(file, '.ts')
        return filename
      })

    // Also check if recipes.json was generated (indicates recipe data changed)
    const recipesJsonChanged = changedFiles.includes('public/recipes.json')

    if (recipesJsonChanged) {
      console.log('🔄 public/recipes.json changed - will pre-render all recipes')
      return null // Return null to indicate "render all"
    }

    return changedRecipes
  } catch (error) {
    // If git command fails or we're in a shallow clone, fall back to rendering all
    console.log('⚠️  Could not detect changed files, will pre-render all routes')
    return null
  }
}

function main() {
  const changedRecipes = getChangedRecipes()

  if (changedRecipes === null) {
    console.log('🚀 Pre-rendering all routes (full build)')
    process.exit(0) // Exit code 0 means "render all"
  }

  if (changedRecipes.length === 0) {
    console.log('✅ No recipe changes detected, skipping pre-rendering')
    process.exit(2) // Exit code 2 means "skip pre-rendering"
  }

  console.log(`📋 Found ${changedRecipes.length} changed recipes:`)
  changedRecipes.forEach((slug) => console.log(`   - ${slug}`))

  // Output changed recipes to a file
  const outputPath = path.join(__dirname, '..', 'changed-recipes.json')
  fs.writeFileSync(
    outputPath,
    JSON.stringify(changedRecipes, null, 2),
    'utf-8'
  )

  console.log(`✅ Saved changed recipes to ${outputPath}`)
  process.exit(1) // Exit code 1 means "render changed only"
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { getChangedRecipes }
