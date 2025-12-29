import { Recipe } from '@/types/recipe';

export const boulettesStyleGeneralTao: Recipe = {
  id: 'boulettes-style-general-tao',
  title: 'Boulettes style général tao',
  description: 'Une recette de boulettes de veau avec une sauce asiatique savoureuse, idéale pour un plat principal pour deux personnes.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '340 g de veau haché maigre',
    '1/2 tasse de chapelure panko',
    '1/4 de tasse d’oignons verts émincés',
    '1/4 de tasse de coriandre',
    '1 c. à thé d’huile de sésame',
    '1/2 c. à thé de gingembre haché',
    '2 œufs',
    '2 gousses d’ail hachées',
    'sel et poivre au goût',
    '1 c. à soupe d’échalote',
    '1/2 c. à thé d’huile de sésame grillé',
    '1 gousse d’ail hachée',
    '1 c. à soupe de gingembre haché',
    '1/2 tasse de bouillon de poulet',
    '1/4 de tasse de sauce hoisin',
    '2 c. à soupe de sauce soya',
    '2 c. à soupe de vinaigre de riz',
    '2 c. à soupe de cassonade',
    '1/2 c. à thé de paprika',
    '1/2 c. à thé de sambal oelek',
    '2 c. à thé de fécule de maïs',
    '15 ml (1 c. à soupe) d’eau'
  ],
  instructions: [
    'Préchauffer le four à 400 °F.',
    'Mélanger les ingrédients pour les boulettes.',
    'Former des boulettes en utilisant 2 c. à soupe de préparation pour chacune d’elles.',
    'Déposer sur une plaque de cuisson tapissée de papier parchemin.',
    'Cuire au four de 10 à 12 minutes, en retournant à mi-cuisson, jusqu’à ce que l’intérieur des boulettes ait perdu sa teinte rosée.',
    'Pendant ce temps, cuire l’échalote dans l’huile de sésame 2 minutes à feu moyen dans une casserole.',
    'Ajouter l’ail et le gingembre. Cuire 1 minute.',
    'Ajouter le reste des ingrédients, à l’exception de la fécule de maïs. Porter à ébullition en remuant.',
    'Délayer la fécule de maïs dans 15 ml (1 c. à soupe) d’eau et incorporer à la sauce.',
    'Laisser mijoter à feu doux de 3 à 5 minutes, jusqu’à épaississement.',
    'Répartir les boulettes dans les assiettes.',
    'Napper chacune d’elles de sauce.',
    'Garnir de graines de sésame grillées, d’oignon vert.'
  ],
  tags: ['sésame', 'sauce hoisin', 'cuisine asiatique'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/boulettes-style-general-tao',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/boulettes-style-general-tao',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/boulettes-style-general-tao'
    }
  ],
  source: 'David Cloutier',
  slug: 'boulettes-style-general-tao'
};
