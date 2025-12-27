import { Recipe } from '@/types/recipe';

export const boulettesDePouletAuxOignonsFrancais: Recipe = {
  id: 'boulettes-de-poulet-aux-oignons-francais',
  title: 'Boulettes de poulet aux oignons français',
  description: 'Une recette de boulettes de poulet parfumées aux oignons caramélisés, servies avec une sauce au bouillon et au thym, garnies de Gruyère fondu.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: 20,
  cookTime: 75,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe d\'huile d\'olive extra-vierge, pour plaque à pâtisserie',
    '1 lb de poulet haché',
    '1/2 tasse gruyère râpé',
    '1/4 tasse chapelure',
    '2 cuillères à soupe de persil fraîchement haché',
    '1 gros oeuf, battu',
    '2 gousses d\'ail, hachées',
    '1 cuillère à thé sel casher',
    'Poivre noir fraîchement moulu',
    '4 cuillères à soupe beurre',
    '2 gros oignons, tranchés finement',
    '2 gousses d\'ail, hachées',
    '2 tasses bouillon de bœuf faible en sodium',
    '2 cuillères à thé de thym fraîchement haché, et plus pour la garniture',
    'Sel casher',
    'Poivre noir fraîchement moulu',
    '1 1/2 tasse gruyère râpé'
  ],
  instructions: [
    'Préchauffer le four à 425°. Tapisser une grande plaque à pâtisserie de papier d\'aluminium et badigeonner d\'huile.',
    'Faire des boulettes de viande : dans un grand bol, mélanger le poulet haché, le gruyère, la chapelure, le persil, l\'œuf et l\'ail. Assaisonner avec du sel et du poivre.',
    'Former les boulettes de viande, puis les placer sur la plaque à pâtisserie préparée et cuire jusqu\'à ce qu\'elles soient dorées et bien cuites, soit environ 25 minutes.',
    'Pendant ce temps faire la sauce : dans une grande poêle à feu moyen, faire fondre le beurre. Ajouter les oignons et cuire jusqu\'à ce qu\'ils soient très tendres et dorés, 25 minutes, en remuant souvent.',
    'Ajouter l\'ail et cuire jusqu\'à ce qu\'il soit parfumé, 1 minute de plus.',
    'Ajouter le bouillon et le thym et assaisonner de sel et de poivre. Porter à ébullition, puis réduire le feu et laisser mijoter jusqu\'à léger épaississement, 10 minutes.',
    'Ajouter les boulettes de viande dans la poêle et saupoudrer de Gruyère. Couvrir et cuire jusqu\'à ce que les boulettes soient chaudes et que le fromage soit fondu, 5 minutes.'
  ],
  tags: ['fromage', 'sauce', 'poulet'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/boulettes-de-poulet-aux-oignons-francais',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/boulettes-de-poulet-aux-oignons-francais',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/boulettes-de-poulet-aux-oignons-francais'
    }
  ],
  source: 'David Cloutier',
  slug: 'boulettes-de-poulet-aux-oignons-francais'
};
