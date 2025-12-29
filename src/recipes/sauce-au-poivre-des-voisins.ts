import { Recipe } from '@/types/recipe';

export const sauceAuPoivreDesVoisins: Recipe = {
  id: 'sauce-au-poivre-des-voisins',
  title: 'Sauce au poivre des voisins',
  description: 'Sauce au poivre de nos voisin de chalet, elle est excellente.',
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à thé de Bovril au bœuf',
    '1 c. à thé de Bovril au poulet',
    '2 c. à thé de farine',
    '1/8 c. à thé de moutarde sèche',
    '1/4 tasse d’eau tiède',
    '1/4 tasse de Southern Comfort ou autre boisson',
    '1/2 tasse de crème 35%'
  ],
  instructions: [
    'Mélanger les ingrédients secs dans un chaudron et ajouter tous les liquides.',
    'Cuire sur feu doux en brassant continuellement jusqu’à épaississement de la sauce.'
  ],
  tags: ['sauce', 'poivre', 'réconfort'],
  slug: 'sauce-au-poivre-des-voisins'
};
