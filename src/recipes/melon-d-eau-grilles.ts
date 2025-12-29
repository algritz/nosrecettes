import { Recipe } from '@/types/recipe';

export const melonDEauGrilles: Recipe = {
  id: 'melon-d-eau-grilles',
  title: 'Melon d\'eau grillés',
  description: 'Une recette de melon d\'eau grillé assaisonné de lime et de coriandre, parfait pour une entrée ou une salade rafraîchissante.',
  categories: ['Végétarien', 'Entrées'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 8, max: 8 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 melon d\'eau coupé en tranche',
    '2 cuillères à soupe d\'huile d\'olive extra vierge',
    'Le jus de 2 limes',
    '½ tasse de coriandre fraîche, hachée',
    'Sel, au goût'
  ],
  instructions: [
    'Badigeonner chaque côté des morceaux de melon d\'eau avec de l\'huile d\'olive et la moitié du jus de lime.',
    'Assaisonner avec un peu de sel (environ ½ cuillère à café au total pour 8 morceaux, des deux côtés).',
    'Réserver l\'autre moitié du jus de lime pour la cuisson.',
    'Chauffer un gril à gaz extérieur à feu vif.',
    'Faire griller le melon d\'eau de 3 à 5 minutes de chaque côté, en laissant des marques de gril se former.',
    'Retirer du gril et assaisonner avec le jus de lime restant et saupoudrer de coriandre.',
    'Assaisonner avec du sel au goût.'
  ],
  tags: ['grill', 'lime', 'coriandre'],
  slug: 'melon-d-eau-grilles'
};
