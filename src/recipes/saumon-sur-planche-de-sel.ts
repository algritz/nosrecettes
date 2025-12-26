import { Recipe } from '@/types/recipe';

export const saumonSurPlancheDeSel: Recipe = {
  id: 'saumon-sur-planche-de-sel',
  title: 'Saumon sur planche de sel',
  description: 'Une recette de saumon grillé sur une planche de sel, parfumé aux herbes et servi avec une sauce tomate à l\'huile d\'olive et citron.',
  categories: ['Poisson', 'Barbecue'],
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml (1 c. à soupe) de beurre non salé, ramolli',
    '15 ml (1 c. à soupe) de ciboulette fraîche, ciselée',
    '15 ml (1 c. à soupe) d’estragon frais, ciselé',
    '½ citron, le zeste râpé seulement',
    '675 g (1 ½ lb) de filet de saumon avec la peau, coupé en quatre pavés',
    '1 grosse planche de sel pour la cuisson',
    '1 petite tomate, coupée en dés',
    '60 ml (¼ tasse) d’huile d’olive',
    '15 ml (1 c. à soupe) de jus de citron',
    '15 ml (1 c. à soupe) de ciboulette fraîche, ciselée',
    '15 ml (1 c. à soupe) d’estragon frais, ciselé',
    'Sel et poivre'
  ],
  instructions: [
    'Dans un petit bol, mélanger le beurre, les herbes et le zeste de citron. Tartiner le saumon de ce mélange côté chair.',
    'Placer les filets de saumon, côté peau, sur la pierre de sel.',
    'Déposer la pierre de sel sur la grille du barbecue.',
    'Préchauffer le barbecue à puissance élevée.',
    'Cuire de 12 à 15 minutes ou jusqu’à la cuisson désirée.',
    'Entre-temps, dans un bol, mélanger tous les ingrédients de la sauce.',
    'Servir avec le saumon.'
  ],
  tags: ['barbecue', 'saumon', 'herbes'],
  slug: 'saumon-sur-planche-de-sel'
};
