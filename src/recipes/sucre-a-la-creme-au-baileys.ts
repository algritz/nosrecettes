import { Recipe } from '@/types/recipe';

export const sucreALaCremeAuBaileys: Recipe = {
  id: 'sucre-a-la-creme-au-baileys',
  title: 'Sucre à la crème au baileys',
  description: 'Une douceur crémeuse au Baileys, facile à préparer au micro-ondes, idéale pour une gourmandise rapide.',
  categories: ['Desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 9, max: 9 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '14 onces de lait condensé (environ 1 1/2 boîtes)',
    '1/3 de livre de beurre',
    '1 1/4 tasse de cassonade',
    '1 1/4 tasse de sucre brun',
    '1 1/2 c à thé vanille',
    '2 c à soupe Baileys'
  ],
  instructions: [
    'Prenez le plus grand bol allant au micro-ondes et ajoutez le lait condensé, le beurre et les sucres. Pas besoin de mélanger, simplement veiller à ce que le contenu ne bouillonne pas et n\'éclabousse pas partout.',
    'Pour micro-ondes 900W, cuire le mélange à pleine puissance pendant 9 minutes, retirer le bol pour remuer toutes les 3 minutes.',
    'Si votre micro-ondes a une puissance inférieure, vous aurez besoin de faire cuire le mélange plus longtemps. Ajouter le temps de cuisson de 1 minute pour chaque 50W de moins de puissance.',
    'Une fois le temps de cuisson terminé, ajouter l\'extrait de vanille et le Baileys, puis battre le mélange jusqu\'à ce qu\'il commence à être lisse et brillant.',
    'Transférer le mélange dans un moule carré de 9 pouces graissé et laisser refroidir.',
    'Une fois refroidi à température ambiante, réfrigérer.'
  ],
  tags: ['micro-ondes', 'crémeux', 'gourmandise'],
  slug: 'sucre-a-la-creme-au-baileys'
};
