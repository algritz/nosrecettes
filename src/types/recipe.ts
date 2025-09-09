export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  ingredients: string[];
  instructions: string[];
  tags: string[];
  image?: string;
  slug: string;
}

export interface RecipeCategory {
  id: string;
  name: string;
  count: number;
}