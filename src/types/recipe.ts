// Add TimeRange interface
export interface TimeRange {
  min: number // minimum time in minutes
  max: number // maximum time in minutes
}

export interface Recipe {
  id: string
  title: string
  description: string
  categories: string[] // Primary field for categories
  prepTime: TimeRange
  cookTime: TimeRange
  marinatingTime?: TimeRange // Optional marinating time in minutes
  servings: number
  difficulty: 'Facile' | 'Moyen' | 'Difficile'
  ingredients: string[] | IngredientSection[]
  instructions: string[] | InstructionSection[]
  tags: string[]
  images?: ImageSizes[] // New: multiple images with different sizes
  image?: string // Deprecated: keep for backward compatibility
  slug: string
  accompaniment?: string // Optional accompaniment suggestion
  wine?: string // Optional wine pairing
  source?: string // Recipe source/author
  notes?: string // Optional additional notes

  // Backward compatibility - keep category field for migration
  category?: string
}

export interface ImageSizes {
  small: string
  medium: string
  large: string
}

export interface RecipeCategory {
  id: string
  name: string
  count: number
}

export interface IngredientSection {
  title: string
  items: string[]
}

export interface InstructionSection {
  title: string
  steps: string[]
}
