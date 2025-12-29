import { Recipe } from '@/types/recipe';

export const biscuitsMousAuChocolat: Recipe = {
  id: 'biscuits-mous-au-chocolat',
  title: 'Biscuits mous au chocolat',
  description: 'Des biscuits moelleux au chocolat faciles à préparer, avec une texture fondante et riche en chocolat.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 12, max: 12 },
  servings: 11,
  difficulty: 'Facile',
  ingredients: [
    '1/2 c.à thé (2 ml) bicarbonate de soude',
    '2 c.à soupe (30 ml) lait',
    '1 tasse (250 ml) cassonade',
    '1 œuf',
    '1/2 tasse (125 ml) beurre',
    '1 tasse (250 ml) pépites de chocolat',
    '1 3/4 tasse (440 ml) farine tout-usage'
  ],
  instructions: [
    'Préchauffer le four à 350°F (180°C).',
    'Beurrer une plaque à biscuits.',
    'Dissoudre le bicarbonate de soude dans le lait. Réserver.',
    'Dans un bol, mélanger la cassonade, l\'œuf et le beurre défait en crème.',
    'Ajouter les pépites de chocolat et le bicarbonate de soude dissous. Mélanger.',
    'Incorporer la farine pour obtenir une pâte ferme.',
    'Déposer à la cuillère sur la plaque à biscuits beurrée.',
    'Cuire au four à 350°F (180°C) pendant environ 12 minutes.'
  ],
  tags: ['chocolat', 'pâtisserie', 'facile'],
  slug: 'biscuits-mous-au-chocolat'
};
