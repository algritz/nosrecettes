import { Recipe } from '@/types/recipe';

export const sucreALaCremeAuCaramilk: Recipe = {
  id: 'sucre-a-la-creme-au-caramilk',
  title: 'Sucre à la crème au Caramilk',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  marinatingTime: { min: 30, max: 30 },
  servings: 40,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse cassonade',
    '1 boîte lait Eagle Brand',
    '1/2 lb beurre',
    'vanille au goût',
    '2 tasses sucre à glacer',
    '8 tablettes de chocolat Caramilk'
  ],
  instructions: [
    'Mettre la cassonade, le lait Eagle Brand et le beurre dans un grand bol allant au micro-ondes.',
    'Faire chauffer 8 minutes à puissance maximale, en mélangeant bien tous les 2 minutes. Attention vers la fin pour ne pas que ça déborde.',
    'Ajouter la vanille, le sucre à glacer et mélanger au malaxeur 4 minutes à puissance maximale.',
    'Étendre la moitié du mélange dans un plat en pyrex.',
    'Étendre les Caramilk par-dessus.',
    'Mettre le reste du mélange.',
    'Laisser refroidir 30 minutes à température ambiante puis réfrigérer.'
  ],
  tags: ['caramilk', 'micro-ondes', 'dessert'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sucre_a_la_creme_caramilk',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sucre_a_la_creme_caramilk',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sucre_a_la_creme_caramilk'
    }
  ],
  source: 'David Cloutier',
  slug: 'sucre-a-la-creme-au-caramilk'
};
