import { Recipe } from '@/types/recipe';

export const brochettesDePouletALaCoriandre: Recipe = {
  id: 'brochettes-de-poulet-a-la-coriandre',
  title: 'Brochettes de poulet à la coriandre',
  description: 'Brochettes de poulet marinées à la coriandre, servies avec une trempette à la coriandre et à la menthe.',
  categories: ['Vollaille', 'Barbecue'],
  prepTime: 20,
  cookTime: 10,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Marinade',
      items: [
      '45 ml (3 c. à soupe) de jus de citron',
      '250 ml (1 tasse) de yogourt nature 6 % M.G.',
      '15 ml (1 c. à soupe) d’huile d’olive',
      '2 oignons verts, émincés',
      '15 ml (1 c. à soupe) de graines de coriandre, broyées',
      '2 ml (1/2 c. à thé) de curcuma en poudre',
      '2 ml (1/2 c. à thé) de cari',
      '2 ml (1/2 c. à thé) de sel',
      '750 g (1 1/2 lb) de cuisses de poulet désossées, coupées en cubes d’environ 4 cm (1 1/2 po)'
      ]
    },
    {
      title: 'Trempette à la coriandre et à la menthe',
      items: [
      '250 ml (1 tasse) de yogourt nature 6 % ou 10 % M.G.',
      '15 ml (1 c. à soupe) d’huile d’olive',
      '15 ml (1 c. à soupe) de jus de citron',
      '30 ml (2 c. à soupe) de coriandre fraîche, hachée finement',
      '30 ml (2 c. à soupe) de menthe fraîche, hachée finement',
      'Sel et poivre noir du moulin'
      ]
    }
  ],
  instructions: [
    'Dans un grand bol, mélanger les ingrédients de la marinade et le poulet.',
    'Transférer le tout dans un plat ou un sac fermant hermétiquement et réfrigérer 6 heures.',
    'Retirer la viande du réfrigérateur 25 minutes avant la cuisson et laisser tremper les brochettes de bambou dans l’eau durant 15 minutes.',
    'Entre-temps, dans un bol, mélanger les ingrédients de la trempette et réfrigérer.',
    'Sortir 10 minutes avant de servir.',
    'Enfiler 2 ou 3 cubes de viande par brochette pour une entrée et 5 ou 6 cubes pour un repas principal.',
    'Préchauffer le barbecue à intensité moyenne−élevée.',
    'Déposer les brochettes de poulet sur la grille bien chaude du barbecue, directement au-dessus du feu, et cuire de 3 à 5 minutes.',
    'Tourner les brochettes régulièrement afin d’obtenir une cuisson uniforme.',
    'Servir les brochettes de poulet avec la trempette à la coriandre et à la menthe.'
  ],
  tags: ['barbecue', 'coriandre', 'grill'],
  slug: 'brochettes-de-poulet-a-la-coriandre'
};
