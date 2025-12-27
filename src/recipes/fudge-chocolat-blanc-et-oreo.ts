import { Recipe } from '@/types/recipe';

export const fudgeChocolatBlancEtOreo: Recipe = {
  id: 'fudge-chocolat-blanc-et-oreo',
  title: 'Fudge chocolat blanc et Oréo',
  description: 'Fudge chocolat blanc et Oréo',
  categories: ['Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 10,
  servings: 40,
  difficulty: 'Facile',
  ingredients: [
    '450g de chocolat blanc',
    '1 boite de lait Eagle Brand',
    '1 c. à soupe de beurre',
    '1 c. à thé de vanille',
    '13 Oréo écrasés grossièrement'
  ],
  instructions: [
    'Faire fondre le chocolat blanc au bain-marie avec le beurre',
    'Ajouter le lait Eagle Brand et la vanille et bien mélanger',
    'Ajouter les Oréo concassés',
    'Bien brasser et verser dans un moule 9 x 9 en silicone',
    'Réfrigérer 4h, démouler et couper en petits morceaux'
  ],
  tags: ['chocolat blanc', 'Oréo', 'fudge'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/fudge-chocolat-blanc-et-oreo',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/fudge-chocolat-blanc-et-oreo',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/fudge-chocolat-blanc-et-oreo'
    }
  ],
  source: 'David Cloutier',
  slug: 'fudge-chocolat-blanc-et-oreo'
};
