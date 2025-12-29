import { Recipe } from '@/types/recipe'

export const filetsDePoissonALaFlorentine: Recipe = {
  id: 'filets-de-poisson-a-la-florentine',
  title: 'Filets de poisson à la florentine',
  description:
    'Une recette de poisson blanc cuit avec des épinards, légumes sautés et fromage mozzarella, gratiné au four.',
  categories: ['Poisson', 'Plats principaux', 'Végétarien'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 tasses (1 L) épinards fraîches',
    '1 c. à thé (5 ml) beurre',
    '4 filets de doré, brochet, sole ou tout autre poisson blanc',
    '1 oignon, haché',
    '1 carotte, râpée',
    '1 branche de céleri en petit cube',
    "1 gousse d'ail",
    "1 c. à thé (5 ml) d'huile d'olive",
    '1/2 tasse (125 ml) fromage mozzarella, râpé',
    'Sel, au goût',
    'Poivre, au goût',
  ],
  instructions: [
    'Dans une casserole, faire fondre le beurre et faire sauter les épinards pour les faire faner et étendre dans un plat allant au four (pyrex).',
    'Étendre les filets de poisson sur les épinards et saler, poivrer au goût.',
    "Rajouter de l'huile d'olive dans la casserole et la faire chauffer.",
    "Faire sauter la carotte, l'oignon, le céleri et l'ail.",
    'Puis étendre le mélange de légumes sur le poisson pour le couvrir.',
    'Parsemer de fromage et cuire au four à 400°F (200°C) de 20 à 25 minutes.',
  ],
  tags: ['épinards', 'fromage', 'gratin'],
  slug: 'filets-de-poisson-a-la-florentine',
}
