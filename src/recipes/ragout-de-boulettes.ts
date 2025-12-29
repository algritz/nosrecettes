import { Recipe } from '@/types/recipe';

export const ragoutDeBoulettes: Recipe = {
  id: '1764522294393',
  title: 'Ragoût de boulettes',
  description: 'Ragoût de boulettes bœuf-porc avec légumes, bouillon épaissi à la farine grillée, cuisson au four.',
  categories: ['Boeuf', 'Porc', 'Plats principaux'],
  prepTime: { min: 40, max: 40 },
  cookTime: { min: 90, max: 90 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Boulettes',
      items: [
        '1 lb de bœuf haché',
        '1 lb de porc haché',
        '1 oignon, haché finement',
        'Chapelure ou gruau',
        '2 œufs',
        'Pincée de thym',
        'Pincée de fines herbes',
        'Pincée d\'épices mélangées',
        'Sel et poivre'
      ]
    },
    {
      title: 'Bouillon',
      items: [
        'Farine grillée',
        'Beurre',
        'Huile',
        'Consommé de bœuf + eau',
        '4 à 5 carottes, en bâtonnets',
        'Environ 6 pommes de terre',
        '1 petite boîte de pois verts'
      ]
    }
  ],
  instructions: [
    'Mélanger tous les ingrédients des boulettes et façonner de petites boules.',
    'Rouler les boulettes dans la farine grillée.',
    'Dans un plat allant au four, rôtir les boulettes dans le beurre et l\'huile.',
    'Ajouter le consommé de bœuf (avec eau au besoin).',
    'Ajouter les carottes, les pommes de terre et les pois verts.',
    'Jeter le reste de la farine grillée dans le bouillon pour épaissir.',
    'Cuire 1 h 30.'
  ],
  tags: ['farine grillée', 'ragoût', 'boulettes'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/ragout_de_boulettes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/ragout_de_boulettes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/ragout_de_boulettes'
    }
  ],
  source: 'David Cloutier',
  notes: 'Quantités approximatives; parfois sans pois verts.',
  slug: 'ragout-de-boulettes'
};
