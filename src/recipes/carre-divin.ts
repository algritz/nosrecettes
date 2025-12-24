import { Recipe } from '@/types/recipe';

export const carreDivin: Recipe = {
  id: 'carre-divin',
  title: 'Carré divin',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 10,
  servings: 16,
  difficulty: 'Facile',
  ingredients: [
    {
      title: '1ère préparation',
      items: [
      '1/2 tasse de farine',
      '1/4 c. à thé bicarbonate de soude',
      '1/3 tasse de cassonade',
      '1 pincée de sel',
      '3/4 tasse de Rice Krispies',
      '1/3 tasse de beurre fondu'
      ]
    },
    {
      title: '2ème préparation',
      items: [
      '1 boîte de lait Eagle Brand',
      '1/2 tasse de beurre',
      '1/2 tasse de cassonade'
      ]
    },
    {
      title: '3ème préparation',
      items: [
      '1 1/2 tasse de chipits de chocolat',
      '1 1/2 tasse de Rice Krispies'
      ]
    }
  ],
  instructions: [
    '1ère préparation: Bien mélanger les six premiers ingrédients. Presser dans un moule de 8 po carré et graisser. Cuire au four à 350°F pendant 10 minutes ou jusqu\'à ce que le tout commence à dorer.',
    '2ème préparation: Dans une autre casserole épaisse, mélanger le lait, le beurre et la cassonade. Amener à grande ébullition à feu moyen et laisser bouillir 5 minutes en remuant constamment. Retirer du feu. Verser le mélange sur la croûte cuite et laisser refroidir.',
    '3ème préparation: Faire fondre les brisures de chocolat et y incorporer les céréales en les enrobant bien à l\'aide de 2 fourchettes. Étendre le mélange sur le caramel. Refroidir 2 heures jusqu\'à consistance ferme avant de couper.'
  ],
  tags: ['chocolat', 'céréales', 'gâteau'],
  slug: 'carre-divin'
};
