import { Recipe } from '@/types/recipe';

export const gateauCochon: Recipe = {
  id: 'gateau-cochon',
  title: 'Gâteau cochon',
  description: 'Sans farce, même les gens les plus anti-dessert y trouvent leur compte. Non, sans farce, même les gens les plus anti-dessert y trouvent leur compte.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 30, max: 30 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    'Un gâteau beurre de pacanes de Betty Crocker',
    'lait',
    'oeufs',
    'huile végétale',
    'Une boîte de conserve de lait Eagle Brand',
    'Un plat de cool whip ou crème fouettée si vous préférez',
    '2 à 3 bars de chocolat Crunchy'
  ],
  instructions: [
    'Faire le gâteau selon les instructions sur la boîte et faire cuire dans un grand plat.',
    'Une fois sortie du four, attendre cinq minutes et piquer un peu partout le gâteau avec une fourchette et vider la boîte de lait Eagle Brand dessus.',
    'Laisser refroidir au frigidaire minimum 8 h ou toute la nuit.',
    'Avant de servir, étendre la crème fouettée ou le cool whip.',
    'Égrainer les bars Crunchy dans leur papier, ouvrir et verser sur le gâteau.',
    'Bourrez-vous la face.'
  ],
  tags: ['gâteau', 'lait condensé', 'chocolat'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/gateau-cochon',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/gateau-cochon',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/gateau-cochon'
    }
  ],
  source: 'Gertrude Vertefeuille',
  notes: 'C\'est bien meilleur avec un verre de lait.',
  slug: 'gateau-cochon'
};
