# Nos Recettes - Recipe Website

A modern recipe website built with React, TypeScript, and Tailwind CSS, designed for easy management through Git.

## Adding New Recipes

### Method 1: Using the Helper Script (Recommended)

1. Run the recipe creation script:
```bash
node scripts/create-recipe.js "Nom de la Recette"
```

2. Edit the generated file in `src/recipes/[recipe-slug].ts`

3. Add the import and recipe to `src/recipes/index.ts`:
```typescript
import { newRecipe } from './recipe-slug';

export const recipes: Recipe[] = [
  // ... existing recipes
  newRecipe,
];
```

### Method 2: Manual Creation

1. Create a new file in `src/recipes/` following the naming pattern: `recipe-name.ts`

2. Use this template:
```typescript
import { Recipe } from '@/types/recipe';

export const recipeName: Recipe = {
  id: 'unique-id',
  title: 'Recipe Title',
  description: 'Recipe description...',
  category: 'Plats principaux',
  prepTime: 15,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Ingredient 1',
    'Ingredient 2'
  ],
  instructions: [
    'Step 1...',
    'Step 2...'
  ],
  tags: ['tag1', 'tag2'],
  image: '/images/recipe-slug.jpg',
  slug: 'recipe-slug'
};
```

3. Add to `src/recipes/index.ts`

## Adding Images

1. Add your recipe image to `public/images/`
2. Use the recipe slug as the filename: `recipe-slug.jpg`
3. Recommended size: 800x600px or larger
4. Keep file size under 500KB for best performance

## Deployment

This site is designed for GitHub Pages:

1. Push your changes to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io/repository-name`

## Recipe Structure

Each recipe file contains:
- **Basic info**: title, description, category, difficulty
- **Timing**: prep time, cook time, servings
- **Content**: ingredients list, step-by-step instructions
- **Metadata**: tags for search, image URL, URL slug