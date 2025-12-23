import { Recipe } from '@/types/recipe';

export const boucheesChocolatGuimauveEtArachide: Recipe = {
  id: 'bouchees-chocolat-guimauve-et-arachide',
  title: 'Bouchées chocolat, guimauve et arachide',
  description: 'Une recette de bouchées gourmandes associant chocolat, guimauves et beurre d\'arachide, à préparer rapidement et à congeler pour une texture ferme.',
  categories: ['Végétarien', 'Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 0,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet chipits chocolat au lait',
    '1 paquet chipits au caramel',
    '1/2 tasse beurre d\'arachide',
    '2 tasses guimauve miniature'
  ],
  instructions: [
    'Faire fondre le chocolat, pépites de caramel avec le beurre d\'arachide au micro-ondes 1 minute à la fois en brassant à chaque minute.',
    'Ajouter les guimauves au mélange chocolaté de façon à les enrober complètement. Faire attention, car les guimauves ne doivent pas fondre.',
    'Verser le tout dans un moule carré de 8 po (20 cm) beurré. S\'il reste du liquide qui n\'a pas servi à enrober les guimauves, le verser sur celles-ci.',
    'Mettre au congélateur pour faire durcir pendant environ 30 min.'
  ],
  tags: ['chocolat', 'guimauve', 'arachide'],
  slug: 'bouchees-chocolat-guimauve-et-arachide'
};
