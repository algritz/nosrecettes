import { Recipe } from '@/types/recipe';

export const sauteDeCanard: Recipe = {
  id: 'saute-de-canard',
  title: 'Sauté de canard',
  description: 'Sauté de canard avec légumes sautés et sauce soja au miel, servi avec pâtes ou riz thaï.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 beaux magrets (filets) de canard',
    '1 oignon',
    '2 carottes',
    '2 tiges d\'oignon vert',
    '1 Zucchini',
    '1 gousse d\'ail',
    '4 cuillères à soupe de sauce soja',
    '3 cuillères à soupe de miel liquide',
    '1 cuillère à café de mélange d\'épices 5 parfums',
    '2 cuillères à soupe de jus de lime',
    '1 cuillère à soupe d\'huile végétale neutre',
    '1/2 cuillère à café de gingembre',
    'Un petit bouquet de coriandre (ou persil plat)',
    'Sel, poivre',
    'Nouille au œuf ou riz thaï'
  ],
  instructions: [
    'Enlevez la peau des magrets de canard et détaillez-les en tranches fines. Salez, poivrez.',
    'Épluchez l\'oignon et émincez-le finement.',
    'Épluchez les carottes et détaillez-les en fins bâtonnets.',
    'Couper le zucchini en fines tranches.',
    'Émincez les oignons verts et hachez finement l\'ail.',
    'Dans un petit chaudron, mélangez la sauce soja, le miel, le mélange cinq-parfums, le gingembre et le jus de lime et faites bouillir.',
    'Faites chauffer l\'huile dans le wok.',
    'Mettez tous les légumes émincés et faites-les revenir environ 3 minutes.',
    'Ajoutez les morceaux de canard et faites revenir encore 2 minutes en mélangeant bien.',
    'Ajoutez la sauce chaude et prolongez la cuisson encore 1 minute environ.',
    'Servez sans attendre avec des pâtes chinoises aux œufs ou du riz thaï. Garnissez de coriandre ou persil plat.'
  ],
  tags: ['sauté', 'canard', 'asiatique'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/saute-de-canard',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/saute-de-canard',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/saute-de-canard'
    }
  ],
  source: 'David Cloutier',
  slug: 'saute-de-canard'
};
