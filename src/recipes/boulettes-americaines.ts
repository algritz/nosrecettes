import { Recipe } from '@/types/recipe'

export const boulettesAmericaines: Recipe = {
  id: 'boulettes-americaines',
  title: 'Boulettes américaines',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 45, max: 45 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1½ lb de steak haché',
    'Sel',
    'Poivre',
    'Thym',
    'Oignons hachés',
    'Fromage mozzarela en cube',
    '2 c. à table de gras (beurre ou huile)',
    '2 c. à table de farine',
    '1 tasse de jus de tomate',
  ],
  instructions: [
    'Mettre dans un bol le steak haché.',
    'Assaisonner de sel, poivre, thym et oignons hachés.',
    'Façonner en boulettes la viande en y déposant une tranche de fromage au centre de la boulette.',
    'Déposer dans une sauce tomate.',
    'Faire cuire à 350 F durant 1 heure.',
  ],
  tags: ['bœuf', 'sauce tomate', 'boulette'],
  slug: 'boulettes-americaines',
}
