import { Recipe } from '@/types/recipe';

export const saladeDeChouxCremeuseAuxPacanes: Recipe = {
  id: '1766771285320',
  title: 'Salade de choux crémeuse aux pacanes',
  description: 'Excellente dans un sandwich de porc effiloché. Salade de choux crémeuse aux pacanes',
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Salade',
      items: [
        'Un demi petit chou blanc, finement haché',
        'Une petite carotte râpée',
        '1 oignon vert, finement haché',
        'Une grosse poignée de pacanes grossièrement hachées'
      ]
    },
    {
      title: 'Vinaigrette',
      items: [
        '125 ml (1/2 tasse) de mayonnaise régulière ou allégée',
        '3 C. à soupe (30 ml) de sirop d’érable',
        '1 C. à soupe (15 ml) de vinaigre de vin blanc',
        '1/2 c. à thé d’herbes de Provence',
        '60 ml (1/4 de tasse) d’eau',
        'Sel et poivre du moulin'
      ]
    }
  ],
  instructions: [
    'Dans un grand bol, mélanger le chou, l’oignon vert, la carotte et les pécanes.',
    'Mélanger tous les ingrédients de la vinaigrette, en arroser la salade et bien la répartir partout sur le chou.',
    'Ajouter du poivre au besoin.'
  ],
  tags: ['crémé', 'pécanes', 'vinaigrette'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-choux-cremeuse-aux-pacanes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-choux-cremeuse-aux-pacanes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-choux-cremeuse-aux-pacanes'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-choux-cremeuse-aux-pacanes'
};
