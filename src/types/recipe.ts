export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: number;
  cookTime: number;
  marinatingTime?: number; // Optional marinating time in minutes
  servings: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  ingredients: string[] | IngredientSection[];
  instructions: string[] | InstructionSection[];
  tags: string[];
  images?: ImageSizes[]; // New: multiple images with different sizes
  image?: string; // Deprecated: keep for backward compatibility
  slug: string;
  accompaniment?: string; // Optional accompaniment suggestion
  wine?: string; // Optional wine pairing
  source?: string; // Recipe source/author
  notes?: string; // Optional additional notes
}

export interface ImageSizes {
  small: string;
  medium: string;
  large: string;
}

export interface RecipeCategory {
  id: string;
  name: string;
  count: number;
}

export interface IngredientSection {
  title: string;
  items: string[];
}

export interface InstructionSection {
  title: string;
  steps: string[];
}