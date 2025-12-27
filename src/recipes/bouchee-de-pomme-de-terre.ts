import { Recipe } from '@/types/recipe';

export const boucheeDePommeDeTerre: Recipe = {
  id: 'bouchee-de-pomme-de-terre',
  title: 'Bouchée de pomme de terre',
  description: 'Surprenante recette de patate douce Bouchée de pomme de terre',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 40,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 pommes de terre nettoyées à la brosse',
    '2 cuillères à soupe d\'huile d\'olive',
    'Sel',
    'Poivre noir fraichement moulu',
    'Pincée de poivre de cayenne',
    'Paprika',
    '1 c. à thé de poudre d\'ail',
    '1 1/2 tasse de cheddar râpé',
    '6 tranches de bacon cuites et émiettées',
    'Crème sure',
    '3 oignons verts, émincés'
  ],
  instructions: [
    'Préchauffer le four à 400 °C.',
    'Trancher les pommes de terre en pièces de 1 1/2 cm.',
    'Dans un grand bol, mélanger les rondelles de pommes de terre à l\'huile d\'olive.',
    'Assaisonner avec du sel, du poivre, paprika, poivre de Cayenne et de la poudre d\'ail et mélanger jusqu\'à consistance homogène.',
    'Placer en une seule couche sur une grande plaque à pâtisserie.',
    'Cuire au four pendant 30 à 40 minutes, jusqu\'à ce qu\'ils soient légèrement dorés et tendres, en les retournant à mi-cuisson.',
    'Garnir chaque pomme de terre ronde de fromage et de bacon.',
    'Faire griller jusqu\'à ce que le fromage soit fondu, environ 2 minutes.',
    'Verser 1/4 c. à thé de crème sure sur chaque pomme de terre et garnir d\'oignons verts.',
    'Servir.'
  ],
  tags: ['four', 'fromage', 'bacon'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/bouchee-de-pomme-de-terre',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/bouchee-de-pomme-de-terre',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/bouchee-de-pomme-de-terre'
    }
  ],
  source: 'David Cloutier',
  slug: 'bouchee-de-pomme-de-terre'
};
