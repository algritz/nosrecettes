import { Recipe } from '@/types/recipe'

export const fudgeFacileAFaire: Recipe = {
  id: 'fudge-facile-a-faire',
  title: 'Fudge facile à faire',
  description: 'Dessert super facile à faire quand on manque de temps.',
  categories: ['Desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 4, max: 4 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '450g de chocolat (moi je prends chocolat au lait et amandes et du noir, mais prenez celui de votre choix)',
    '1 boîte de lait eagle brand',
    "1 c. à thé d'extrait de vanille",
  ],
  instructions: [
    'Faire fondre le chocolat au four micro-ondes dans une tasse à mesurer de 4 tasses.',
    'Une fois fondu, ajouter le reste des ingrédients et bien brasser.',
    'Verser dans un moule 9 x 9 en silicone et laisser refroidir au froid au moins 4h.',
    'Démouler et couper en petit cube.',
  ],
  tags: ['micro-ondes', 'chocolat', 'facile'],
  slug: 'fudge-facile-a-faire',
}
