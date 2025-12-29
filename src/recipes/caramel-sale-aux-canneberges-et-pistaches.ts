import { Recipe } from '@/types/recipe'

export const caramelSaleAuxCannebergesEtPistaches: Recipe = {
  id: 'caramel-sale-aux-canneberges-et-pistaches',
  title: 'Caramel salé aux canneberges et pistaches',
  description:
    'Une recette de caramel salé garni de canneberges séchées et pistaches, parfait pour offrir en cadeau ou savourer en bouchées.',
  categories: ['Desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 17,
  difficulty: 'Facile',
  ingredients: [
    '250 ml (1 tasse) beurre salé',
    '250 ml (1 tasse) sucre',
    '5 ml (1 c. à thé) essence de vanille (facultative)',
    '90 g (3 oz) chocolat noir haché',
    '90 g (3 oz) chocolat blanc haché',
    '60 ml (¼ tasse) canneberges séchées hachées',
    '60 ml (¼ tasse) pistaches écalées non salées, hachées',
  ],
  instructions: [
    'Dans une grande casserole, chauffer le beurre et le sucre en remuant fréquemment jusqu’à ce que le thermomètre à bonbon indique 147 °C (295 °F). Cela peut prendre jusqu’à 20 minutes.',
    'Ajouter l’essence de vanille à la fin de la cuisson seulement.',
    'Étaler le caramel sur une grande plaque à pâtisserie recouverte de papier parchemin.',
    'Sur une moitié, répartir le chocolat noir et sur l’autre, le chocolat blanc.',
    'Laisser fondre et étendre à l’aide d’une spatule.',
    'Parsemer le chocolat de canneberges et de pistaches avant qu’il ne durcisse.',
    'Laisser refroidir complètement.',
    'Casser en morceaux et disposer dans des pots pour les offrir en cadeaux.',
  ],
  tags: ['caramel', 'salé', 'chocolat'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/caramel-sale-aux-canneberges-et-pistaches',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/caramel-sale-aux-canneberges-et-pistaches',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/caramel-sale-aux-canneberges-et-pistaches',
    },
  ],
  source: 'David Cloutier',
  slug: 'caramel-sale-aux-canneberges-et-pistaches',
}
