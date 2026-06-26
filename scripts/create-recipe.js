#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')

// Helper function to create a slug from a title
function createSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-') // Remove leading/trailing hyphens
}

// Get recipe title from command line arguments
const recipeTitle = process.argv[2]

if (!recipeTitle) {
  console.log('Usage: node scripts/create-recipe.js "Recipe Title"')
  console.log('Example: node scripts/create-recipe.js "Pouding Chômeur"')
  process.exit(1)
}

const slug = createSlug(recipeTitle)
const fileName = `${slug}.ts`
const filePath = path.join(__dirname, '..', 'src', 'recipes', fileName)

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.log(`Recipe file already exists: ${fileName}`)
  process.exit(1)
}

// Generate a simple ID (you might want to use a UUID library for production)
const id = Date.now().toString()

// Template for new recipe file
const template = `import { Recipe } from '@/types/recipe';

export const ${slug.replace(/-/g, '')}Recipe: Recipe = {
  id: '${id}',
  title: '${recipeTitle}',
  description: 'Description de la recette...',
  category: 'Plats principaux', // ou 'Desserts', 'Entrées', etc.
  prepTime: 15, // minutes
  cookTime: 30, // minutes
  servings: 4,
  difficulty: 'Facile', // 'Facile', 'Moyen', ou 'Difficile'
  ingredients: [
    // Ajoutez vos ingrédients ici
    'Ingrédient 1',
    'Ingrédient 2'
  ],
  instructions: [
    // Ajoutez vos instructions ici
    'Étape 1: ...',
    'Étape 2: ...'
  ],
  tags: ['tag1', 'tag2'], // Tags pour la recherche
  image: '/images/${slug}.jpg', // Optionnel
  slug: '${slug}'
};
`

// Create the file
fs.writeFileSync(filePath, template)

console.log(`✅ Created new recipe file: src/recipes/${fileName}`)
console.log(`📝 Don't forget to:`)
console.log(`   1. Edit the recipe details in ${fileName}`)
console.log(`   2. Add the import to src/recipes/index.ts`)
console.log(`   3. Add the recipe to the recipes array`)
console.log(`   4. Add an image to public/images/${slug}.jpg (optional)`)
