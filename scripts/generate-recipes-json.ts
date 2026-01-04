#!/usr/bin/env tsx
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Recipe } from '../src/types/recipe.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to get all recipe files
function getRecipeFiles(): string[] {
  const recipesDir = path.join(__dirname, '..', 'src', 'recipes')
  const files = fs.readdirSync(recipesDir)

  return files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))
}

// Helper function to parse a recipe file and extract full recipe data
function parseRecipeFile(filename: string): Recipe | null {
  try {
    const filePath = path.join(__dirname, '..', 'src', 'recipes', `${filename}.ts`)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Extract the recipe object using a comprehensive regex
    // This matches: export const recipeName: Recipe = { ... }
    // We need to match balanced braces, so we look for the opening brace and find its matching closing brace
    const exportMatch = content.match(/export\s+const\s+\w+\s*:\s*Recipe\s*=\s*\{/)

    if (!exportMatch) {
      console.warn(`Warning: Could not find recipe export in ${filename}.ts`)
      return null
    }

    // Find the start of the object (after the opening brace)
    const startIndex = exportMatch.index! + exportMatch[0].length - 1

    // Find the matching closing brace by counting braces
    let braceCount = 1
    let endIndex = startIndex + 1

    while (braceCount > 0 && endIndex < content.length) {
      const char = content[endIndex]
      if (char === '{') braceCount++
      if (char === '}') braceCount--
      endIndex++
    }

    // Extract the recipe object string
    const recipeString = content.substring(startIndex, endIndex)

    // Parse the recipe object using eval (safe because we control the source files)
    const recipe = eval(`(${recipeString})`) as Recipe

    return recipe
  } catch (error) {
    console.error(`Error parsing recipe file ${filename}.ts:`, error)
    return null
  }
}

export function generateRecipesJson() {
  console.log('Generating recipes.json...')

  // Get git commit hash for versioning
  const gitCommit =
    process.env.GITHUB_SHA ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    'dev'

  // Get all recipe files
  const recipeFiles = getRecipeFiles()
  console.log(`Found ${recipeFiles.length} recipe files`)

  // Parse all recipes
  const recipes: Recipe[] = []
  for (const filename of recipeFiles) {
    const recipe = parseRecipeFile(filename)
    if (recipe) {
      recipes.push(recipe)
    }
  }

  // Sort recipes by title for consistent ordering
  recipes.sort((a, b) => a.title.localeCompare(b.title))

  const recipeData = {
    version: gitCommit,
    timestamp: Date.now(),
    count: recipes.length,
    recipes: recipes,
  }

  const outputPath = path.join(__dirname, '..', 'public', 'recipes.json')
  fs.writeFileSync(outputPath, JSON.stringify(recipeData))

  console.log(`✓ Generated recipes.json with ${recipes.length} recipes (version: ${gitCommit})`)
  console.log(`  Size: ${(JSON.stringify(recipeData).length / 1024 / 1024).toFixed(2)} MB`)
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRecipesJson()
}
