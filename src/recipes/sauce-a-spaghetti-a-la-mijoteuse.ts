import { Recipe } from '@/types/recipe';

export const sauceASpaghettiALaMijoteuse: Recipe = {
  id: 'sauce-a-spaghetti-a-la-mijoteuse',
  title: 'Sauce à spaghetti à la mijoteuse',
  description: 'Une sauce à spaghetti savoureuse et facile à préparer à la mijoteuse, utilisant des tomates, champignons, épices et boeuf haché.',
  categories: ['Viande', 'Sauces', 'Mijoteuse'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 480, max: 480 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '2 grosses boîtes de tomates en dés',
    '2 petites boîtes de sauce tomate',
    '4 petites boîtes de pâte de tomate',
    '1/2 tasse de ketchup',
    '1 tasse de champignons tranchés frais (ou 2 boîtes de champignons en conserve, égouttées)',
    '1 piment haché, vert ou rouge',
    '1 oignon jaune émincé',
    '1-1/2 à 2 lbs de boeuf haché extra maigre',
    '2 c. à table de jus de citron',
    '1 c. à thé d\'origan désydraté',
    '1 c. à thé de basilic désydraté',
    '2 à 3 feuilles de laurier',
    '3 c. à thé de poudre de chili',
    '1/2 c. à thé de poudre d\'ail',
    '1 c. à thé de sucre',
    '2 c. à thé de sel',
    '1/4 c. à thé de poivre'
  ],
  instructions: [
    'Dans un poêlon, mettre le boeuf haché et l\'oignon et faire cuire. La cuisson n\'a pas besoin d\'être complète pour le boeuf puisqu\'elle se terminera dans la mijoteuse. Laisser une légère teinte rosée à la viande.',
    'Mettre le boeuf et les oignons, ainsi que tous les ingrédients dans la mijoteuse. Bien mélanger.',
    'Pour une cuisson lente (low), laisser mijoter durant 8h.',
    'Pour une cuisson un peu plus rapide (high), laisser mijoter 5h.'
  ],
  tags: ['mijoteuse', 'tomates', 'bœuf'],
  source: 'David Cloutier',
  notes: 'Source: Isabelle D Garon',
  slug: 'sauce-a-spaghetti-a-la-mijoteuse'
};
