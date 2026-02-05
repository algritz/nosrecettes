import { Recipe } from '@/types/recipe';

export const saladeDeChouKaleDivine: Recipe = {
  id: 'salade-de-chou-kale-divine',
  title: 'Salade de chou kale divine',
  description: 'La meilleure façon de manger du kale. Salade de chou kale divine',
  categories: ['Salades'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Vinaigrette',
    '3 cuillères à soupe de vinaigre balsamique blanc (ou vinaigre de cidre de pomme)',
    '2 cuillères à soupe de miel',
    '1 cuillère à café de moutarde de Dijon',
    '1 petite échalote, très finement émincée',
    '1 petite gousse d\'ail, très finement hachée',
    '⅓ tasse d\'huile d\'olive extra vierge',
    'Une pincée de sel et de poivre',
    'Salade',
    '¾ tasse de pacanes',
    '2 cuillères à soupe de sirop d\'érable',
    '4 lanières de bacon',
    '1 gros oignon émincé',
    '4 tasses de chou kale lavé et déchiré en morceaux (environ 4 tiges)',
    '1 boîte de fromage Boursin (à la ciboulette)',
    '1 carotte moyenne, râpée',
    '1 avocat mûr, haché',
    '2 poignées de tomates cerises coupées en deux (de couleur différente si possible)'
  ],
  instructions: [
    'Dans un bol de taille moyenne, mélanger le vinaigre balsamique blanc, le miel, la moutarde de Dijon, l\'échalote et l\'ail. Lentement, verser et fouetter l\'huile afin de faire émulsionner et que le tout devienne crémeux. Assaisonner légèrement avec une pincée de sel et quelques manivelles de poivre fraîchement concassé.',
    'Placer les noix de pécan dans une poêle et faire rôtir pendant 6-7 minutes, ou jusqu\'à ce qu\'elles soient brune claire et parfumée. Surveiller attentivement pour éviter de brûler. À la fin, verser le sirop d\'érable, brasser et retirer du feu.',
    'Couper le bacon en morceaux de 1 pouce et le faire frire dans une grande poêle à feu moyen pendant 7 à 8 minutes, jusqu\'à ce qu\'il soit croustillant. Retirer immédiatement et égoutter. Retirer le surplus de gras.',
    'Dans le gras de bacon, faire revenir les oignons émincés en remuant de temps en temps pendant 10 à 12 minutes jusqu\'à ce qu\'ils soient tendres et légèrement dorés.',
    'Dans un saladier, mettre le chou kale, le fromage Boursin, les noix de pécan, le bacon, les oignons caramélisés, la carotte, l\'avocat, et les tomates cerises. Mélanger avec la vinaigrette et servir.'
  ],
  tags: ['kale', 'vinaigrette', 'croustillant'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade_kale_divine',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade_kale_divine',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade_kale_divine'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-chou-kale-divine'
};
