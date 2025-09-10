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
  ingredients: string[];
  instructions: string[];
  tags: string[];
  image?: string;
  slug: string;
  accompaniment?: string; // Optional accompaniment suggestion
  wine?: string; // Optional wine pairing
  source?: string; // Recipe source/author
}

export interface RecipeCategory {
  id: string;
  name: string;
  count: number;
}