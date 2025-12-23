import { Recipe } from '@/types/recipe';

export const popsBueno: Recipe = {
  id: 'pops-bueno',
  title: 'Pops Bueno',
  description: 'Pops Bueno Ingrédients: 4 bars de chocolat Bueno 3/4 de tasse de crème champêtre 35% 3/4 de tasse de crème champêtre 15% 2 c. à soupe de Bailey\'s 4 moules à pop\'s cycle 4 baton de bois 3-4 tasses de chocolat à fondu Instructions: Casser les bars de chocolat Bueno grossièrement et en mettre 1 1/2 par moule à Pop\'s cycle. Mélanger les crèmes et le Bailey\'s et faire mousser au pied mélangeur. Verser la crème dans le moule à pop\'s, insèrer un baton au milieux et faire congeler 10h. Une fois congelé, démouler les pop\'s. Faire fondre le chocolat à fondu et enrouber les pop\'s de chocolat. Congeler 15 minute et déguster.',
  categories: ['Végétarien'],
  prepTime: 30,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 bars de chocolat Bueno',
    '3/4 de tasse de crème champêtre 35%',
    '3/4 de tasse de crème champêtre 15%',
    '2 c. à soupe de Bailey\'s',
    '4 moules à pop\'s cycle',
    '4 baton de bois',
    '3-4 tasses de chocolat à fondu'
  ],
  instructions: [
    'Casser les bars de chocolat Bueno grossièrement et en mettre 1 1/2 par moule à Pop\'s cycle.',
    'Mélanger les crèmes et le Bailey\'s et faire mousser au pied mélangeur.',
    'Verser la crème dans le moule à pop\'s, insèrer un baton au milieux et faire congeler 10h.',
    'Une fois congelé, démouler les pop\'s.',
    'Faire fondre le chocolat à fondu et enrouber les pop\'s de chocolat.',
    'Congeler 15 minute et déguster.'
  ],
  tags: ['chocolat', 'glace', 'moule'],
  marinatingTime: 600,
  notes: 'On peut mettre du lait au chocolat au lieu de la crème 15%',
  slug: 'pops-bueno'
};
