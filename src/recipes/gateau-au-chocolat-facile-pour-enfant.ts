import { Recipe } from '@/types/recipe';

export const gateauAuChocolatFacilePourEnfant: Recipe = {
  id: '1761495167746',
  title: 'gateau au chocolat facile pour enfant',
  description: 'Gâteau au chocolat fondant, simple et rapide, idéal à préparer avec des enfants.',
  categories: ['Pâtisseries et desserts', 'Desserts'],
  prepTime: 20,
  cookTime: 20,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '200 g de chocolat noir',
    '100 g de beurre',
    'Beurre pour le moule',
    '3 oeufs',
    '50 g de farine',
    '100 g de sucre en poudre'
  ],
  instructions: [
    'Préchauffer le four à 350°F (180°C).',
    'Dans une casserole, faire fondre le chocolat et le beurre à feu doux.',
    'Dans un saladier, mélanger le sucre, les oeufs et la farine au fouet.',
    'Ajouter le mélange chocolat-beurre et bien mélanger.',
    'Beurrer et fariner un petit moule à charnière, puis verser la pâte.',
    'Cuire au four environ 20 minutes.',
    'À la sortie du four, le gâteau peut paraître insuffisamment cuit : laisser refroidir puis démouler.'
  ],
  tags: ['chocolat noir', 'fondant', 'moule à charnière'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/gateau_chocolat',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/gateau_chocolat',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/gateau_chocolat'
    }
  ],
  source: 'David Cloutier',
  notes: 'Facile à faire avec des enfants.',
  slug: 'gateau-au-chocolat-facile-pour-enfant'
};
