import { Recipe } from '@/types/recipe';

export const cotesLeveesBatonRouge: Recipe = {
  id: 'cotes-levees-baton-rouge',
  title: 'Côtes levées - Bâton Rouge',
  description: 'Recette de côtes levées de porc à la façon Bâton Rouge, avec plusieurs méthodes de cuisson dont au four, fumoir ou barbecue, et une sauce maison.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: 60,
  cookTime: 240,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de ketchup',
    '1/4 de tasse de mélasse',
    '1/4 de tasse de vinaigre',
    '1/2 c.à thé de sel',
    '1/8 c.à thé de poivre',
    '1/8 c.à thé de sel d\'ail ou de poudre d\'ail',
    '1/8 c.à thé de sel d\'oignon',
    '2 c.à soupe de sucre',
    '2 c.à soupe de flocons d\'oignon ou de ciboulette',
    'Quelques gouttes de Liquid Smoke',
    'Côtes levées de porc'
  ],
  instructions: [
    'Retirer le cartilage à l\'endos des côtes. (utiliser la pointe du thermomètre de cuisson)',
    'Bien mélanger tous les ingrédients de la sauce.',
    'Faire bouillir les côtes levées 1 heure et bien égoutter. (vous ai-je dit que c\'est un crime?)',
    'Bien enrober les côtes levées de sauce ou de préférence, les laisser mariner 20 minutes.',
    'Déposer les côtes levées sur la grille d\'une lèchefrite et les cuire au four à 325°F durant 40 minutes, en les tournant à mi-cuisson.',
    'On peut continuer la cuisson 20 minutes.',
    'Sinon, au fumoir ou BBQ',
    'Faire cuire / fumer selon la méthode 3 -2-1 : soit 3 heures à découvert à 225°F, 2 heures emballé dans du papier aluminium avec du beurre, cassonade et jus de pomme, 1 heure à découvert en recouvrant de sauce aux 20 minutes.'
  ],
  tags: ['barbecue', 'fumoir', 'sauce'],
  slug: 'cotes-levees-baton-rouge'
};
