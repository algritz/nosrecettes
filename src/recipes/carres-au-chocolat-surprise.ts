import { Recipe } from '@/types/recipe'

export const carresAuChocolatSurprise: Recipe = {
  id: 'carres-au-chocolat-surprise',
  title: 'Carrés au chocolat surprise',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '½ barre de paraffine',
    '1 sac de 6 once de brisures de chocolat (ou de butterscotch, caramel)',
    '¾ de tasse de beurre d’arachides',
    '1 tasse de sucre en poudre tamisé',
    '4 tasses de flocons de maïs, Rice Krispies',
  ],
  instructions: [
    'Faire fondre au bain-marie la paraffine, le sac de brisures de chocolat, le beurre d’arachide et le sucre en poudre.',
    'Une fois fondu, retirer du feu, et ajouter graduellement les flocons de maïs et brasser jusqu’à ce que les céréales soient complètement enrobées de chocolat.',
    'Étendre dans une lèchefrite beurrée.',
    'Mettre au réfrigérateur environ 30 minutes.',
    'Couper en carrés.',
  ],
  tags: ['chocolat', 'céréales', 'réfrigération'],
  notes:
    'Temps de préparation total: 15 à 20 minutes, cuisson: 5 à 10 minutes, source: Lynda Morin',
  slug: 'carres-au-chocolat-surprise',
}
