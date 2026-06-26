import { RecipeDetail } from '../components/RecipeDetail'
import { SEOHead } from '../components/SEOHead'
import type {
  IngredientSection,
  InstructionSection,
  Recipe,
} from '../types/recipe'

interface RecipePageSSRProps {
  recipe: Recipe
}

function flattenIngredients(ingredients: Recipe['ingredients']): string[] {
  if (ingredients.length === 0) return []
  if (typeof ingredients[0] === 'string') return ingredients as string[]
  return (ingredients as IngredientSection[]).flatMap((s) => s.items)
}

function flattenInstructions(instructions: Recipe['instructions']): string[] {
  if (instructions.length === 0) return []
  if (typeof instructions[0] === 'string') return instructions as string[]
  return (instructions as InstructionSection[]).flatMap((s) => s.steps)
}

export function RecipePageSSR({
  recipe,
}: RecipePageSSRProps): React.JSX.Element {
  const recipeImage = recipe.images?.[0]?.large ?? recipe.image

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: recipeImage ?? '',
    recipeIngredient: flattenIngredients(recipe.ingredients),
    recipeInstructions: flattenInstructions(recipe.instructions).map(
      (step) => ({
        '@type': 'HowToStep',
        text: step,
      }),
    ),
  }

  return (
    <>
      <SEOHead
        title={recipe.title}
        description={recipe.description}
        url={`/recipe/${recipe.slug}`}
        type="article"
        image={recipeImage}
        structuredData={structuredData}
      />
      <RecipeDetail recipe={recipe} />
    </>
  )
}
