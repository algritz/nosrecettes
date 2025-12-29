import { Recipe } from '@/types/recipe'

export const saladeRusskii: Recipe = {
  id: 'salade-russkii',
  title: 'Salade Russkii',
  description:
    'Une salade froide russe à base de pommes de terre, petits pois, œufs, poivron rouge et vinaigrette crémeuse.',
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 petites pommes de terre, coupées en gros dés',
    '85 ml (1/3 tasse) de petits pois verts surgelés',
    '20 ml (4 c. à thé) de mayonnaise',
    '20 ml (4 c. à thé) de crème sûre',
    '15 ml (1 c. à soupe) de moutarde Dijon',
    '2,5 ml (1/2 c. à thé) d’herbes de Provence',
    '3 œufs cuits durs, tranchés',
    '1 petit poivron rouge, haché finement',
    'Sel et poivre noir, au goût',
  ],
  instructions: [
    'Faire cuire les pommes de terre à la vapeur, dans une marguerite, pendant environ 10 à 15 minutes.',
    'À la toute fin de la cuisson des pommes de terre, ajouter les petits pois.',
    'Déposer tous les légumes dans un grand bol.',
    'Laisser refroidir au réfrigérateur quelques minutes.',
    'Pendant ce temps, mélanger la mayonnaise, la crème sûre, la moutarde et les herbes dans un petit bol.',
    'Verser la vinaigrette sur les légumes, puis ajouter les œufs, et le poivron rouge.',
    'Assaisonner au goût et bien mélanger pour que tous les légumes soient bien couverts de vinaigrette crémeuse.',
  ],
  tags: ['salade', 'crème', 'pommes de terre'],
  slug: 'salade-russkii',
}
