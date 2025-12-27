import { Recipe } from '@/types/recipe';

export const tartareDeBoeufAuBaconEtOignonsConfits: Recipe = {
  id: 'tartare-de-boeuf-au-bacon-et-oignons-confits',
  title: 'Tartare de boeuf au bacon et oignons confits',
  description: 'Un tartare de boeuf relevé avec des oignons confits, du bacon, et une sauce savoureuse, présenté avec du pain.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Oignons confits',
    '2 petits oignons rouges émincés',
    '45 ml (3 c. à soupe) de sirop d’érable',
    '60 ml (1/4 de tasse) de bière noire',
    'sel et poivre au goût',
    'Sauce',
    '45 ml (3 c. à soupe) d’huile d’olive',
    '30 ml (2 c. à soupe) de persil haché',
    '15 ml (1 c. à soupe) de moutarde à l’ancienne',
    '15 ml (1 c. à soupe) de sauce Worcestershire',
    '2 jaunes d’œufs',
    '1/2 oignon rouge coupé en petits dés',
    'sel et poivre au goût',
    'Tartare',
    '450 g (1 lb) de surlonge de boeuf très fraîche',
    '50 g (1 3/4 oz) de cheddar fort',
    '60 ml (1/4 de tasse) de bacon cuit émietté'
  ],
  instructions: [
    'Dans une casserole, mélanger les oignons rouges avec le sirop d’érable et la bière noire. Saler et poivrer. Porter à ébullition, puis laisser mijoter à feu doux de 10 à 12 minutes, jusqu’à ce que les oignons soient confits. Retirer du feu et laisser tiédir.',
    'Dans un bol, mélanger les ingrédients de la sauce.',
    'Couper le boeuf, le cheddar et la moitié des oignons confits en petits dés. Ajouter dans le bol contenant la sauce avec le bacon émietté et remuer.',
    'Répartir le tartare dans les assiettes ou déposer un emporte-pièce dans une assiette. Remplir de tartare et presser avec le dos d’une cuillère pour égaliser la surface. Démouler délicatement.',
    'Garnir les tartares du reste des oignons confits et garnir avec du pain.'
  ],
  tags: ['bacon', 'oignons confits', 'tartare'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-au-bacon-et-oignons-confits',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-au-bacon-et-oignons-confits',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-au-bacon-et-oignons-confits'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-boeuf-au-bacon-et-oignons-confits'
};
