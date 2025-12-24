import { Recipe } from '@/types/recipe';

export const spaghettiAuBUfTomateEtBasilic: Recipe = {
  id: 'spaghetti-au-b-uf-tomate-et-basilic',
  title: 'Spaghetti au bœuf, tomate et basilic',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 5,
  cookTime: 20,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1/2 lb de boeuf haché',
    '1/2 oignon, coupé en dés',
    '1 cuillère à café de sel',
    '1 cuillère à café de poivre',
    '2 tasses de sauce marinara',
    '1 tasse de lait',
    '1/2 tasse de basilic frais haché',
    '1/2 lb de spaghetti cuits'
  ],
  instructions: [
    'Chauffer la casserole à feu moyen-vif.',
    'Faites cuire dans un peu d\'huile d\'olive le bœuf haché et égoutter.',
    'Ajouter les oignons, le sel et le poivre, en cuisant jusqu’à ce que les oignons soient translucides et que le boeuf haché soit brunir.',
    'Ajouter la marinara, le lait et le basilic en cuire jusqu’à ce que la sauce ait légèrement épaissi.',
    'Ajouter les spaghettis et mélanger jusqu’à ce qu’ils soient uniformément enrobés et que la sauce colle aux nouilles.'
  ],
  tags: ['tomate', 'basilic', 'pâtes'],
  notes: 'Vous pouvez remplacer le bœuf haché par de la chair de saucisse',
  slug: 'spaghetti-au-b-uf-tomate-et-basilic'
};
