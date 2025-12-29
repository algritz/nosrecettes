import { Recipe } from '@/types/recipe';

export const lasagneCremeuseAuFromageALaCreme: Recipe = {
  id: '1758811126984',
  title: 'Lasagne crémeuse au fromage à la crème',
  description: '',
  categories: ['Pâtes'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 60, max: 60 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '2 livre de bœuf haché',
    '1 d\'oignon haché',
    '1 boîte (9 oz) de tomates en dés',
    '1 boîte de pâte de tomate',
    '1/3 tasse d\'eau',
    '1 gousse d\'ail émincée',
    '1 c. à thé d\'origan',
    '1 c. à thé de basilic',
    '1 c. à thé d\'épices italiennes',
    '1 c. à thé de sucre ',
    '1/2 c. à thé de sel',
    '1/4 c. à thé de poivre',
    '1 paquets de fromage à la crème, coupé en cubes ',
    '1/4 tasse de lait',
    '9 lasagnes, cuites, égouttées',
    '400 g de mozzarella râpé'
  ],
  instructions: [
    'Faire revenir le bœuf haché dans un poêlon, égoutter.',
    'Ajouter les oignons, cuire jusqu’à ce qu’ils soient tendres.',
    'Incorporer les tomates, la pâte de tomate, l’eau, l’ail et les assaisonnements.',
    'Couvrir; laisser mijoter 30 minutes.',
    'Mélanger le fromage à la crème et le lait dans une casserole; remuer à feu doux jusqu’à ce que le mélange soit crémeux.',
    'Dans un moule de 13 x 9 pouces, étendre 3 cuillères à soupe de viande. Étendre 3 lanières de pâte à lasagne 1/2 de la viande, 1/2 du fromage à la crème, 1/3 du fromage râpé.',
    'Répéter.',
    'Garnir de fromage rapé.',
    'Cuire à 350°F, 30 minutes et passer à grill pour gratiner la lasagne.',
    'Laisser reposer 5-10 minutes avant de servir.'
  ],
  tags: [],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/lasagne',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/lasagne',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/lasagne'
    }
  ],
  source: 'David Cloutier',
  slug: 'lasagne-cremeuse-au-fromage-a-la-creme'
};
