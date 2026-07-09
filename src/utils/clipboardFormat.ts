import type { IngredientSection, InstructionSection } from '@/types/recipe'

function isSectionedIngredients(
  ingredients: string[] | IngredientSection[],
): ingredients is IngredientSection[] {
  return (
    ingredients.length > 0 &&
    typeof ingredients[0] === 'object' &&
    'title' in ingredients[0]
  )
}

function isSectionedInstructions(
  instructions: string[] | InstructionSection[],
): instructions is InstructionSection[] {
  return (
    instructions.length > 0 &&
    typeof instructions[0] === 'object' &&
    'title' in instructions[0]
  )
}

/**
 * Formats a recipe's ingredients as plain text suitable for copying to the
 * clipboard. Preserves section titles when the ingredients are sectioned.
 */
export function formatIngredientsForClipboard(
  ingredients: string[] | IngredientSection[],
): string {
  if (!isSectionedIngredients(ingredients)) {
    return ingredients.map((item) => `- ${item}`).join('\n')
  }

  return ingredients
    .map((section) => {
      const lines = section.items.map((item) => `- ${item}`).join('\n')
      return section.title ? `${section.title}\n${lines}` : lines
    })
    .join('\n\n')
}

/**
 * Formats a recipe's instructions as plain text suitable for copying to the
 * clipboard. Preserves section titles when the instructions are sectioned,
 * restarting step numbering for each section to match the on-screen display.
 */
export function formatInstructionsForClipboard(
  instructions: string[] | InstructionSection[],
): string {
  if (!isSectionedInstructions(instructions)) {
    return instructions.map((step, index) => `${index + 1}. ${step}`).join('\n')
  }

  return instructions
    .map((section) => {
      const lines = section.steps
        .map((step, index) => `${index + 1}. ${step}`)
        .join('\n')
      return section.title ? `${section.title}\n${lines}` : lines
    })
    .join('\n\n')
}
