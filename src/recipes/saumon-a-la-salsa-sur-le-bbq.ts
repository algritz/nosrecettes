import { Recipe } from '@/types/recipe';

export const saumonALaSalsaSurLeBbq: Recipe = {
  id: 'saumon-a-la-salsa-sur-le-bbq',
  title: 'Saumon à la salsa sur le BBQ',
  description: '',
  categories: ['Poisson', 'Barbecue'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 15, max: 15 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 filet de saumon d’environ 600 g',
    '8 tomates cerises tranchées en 2',
    '2 échalotes vertes ciselées',
    '2 c. à soupe de persil haché',
    '1 c. à soupe de câpres',
    '75 ml d’huile d’olive',
    '2 c. à soupe de vinaigre balsamique',
    '1 c. à soupe de jus de citron',
    'Sel, poivre au goût'
  ],
  instructions: [
    'Salsa: Dans un bol, mélanger les tomates, les échalotes, le persil, les câpres, le jus de citron, le vinaigre balsamique, l’huile et assaisonner de sel et de poivre.',
    'Poisson: Assaisonner le saumon de sel et de poivre et cuire sur le grill. Saisir la pièce du côté de la peau sur l’endroit le plus chaud du grill. Quand elle se décolle facilement, au lieu de la retourner, faire pivoter la pièce de 45 degrés afin de lui donner un beau quadrillage. Couvrir le grill et poursuivre la cuisson 5 à 7 minutes. Servir le poisson côté peau sur le dessus et napper de sauce vierge.'
  ],
  tags: ['grill', 'salsa', 'saumon'],
  slug: 'saumon-a-la-salsa-sur-le-bbq'
};
