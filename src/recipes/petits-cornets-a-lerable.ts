import { Recipe } from '@/types/recipe';

export const petitsCornetsALerable: Recipe = {
  id: 'petits-cornets-a-l-erable',
  title: 'Petits cornets à l\'érable',
  description: 'Petits cornets à l\'érable',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
  servings: 60,
  difficulty: 'Facile',
  ingredients: [
    '1/2 lb beurre',
    '1 1/2 tasse cassonade',
    '1/2 tasse sirop d\'érable',
    '1 boîte lait Eagle Brand condensé sucré',
    '1 1/2 tasse guimauves miniatures',
    '60 cornets miniatures'
  ],
  instructions: [
    'Dans une casserole faire fondre le beurre à feu doux.',
    'Ajouter la cassonade, le sirop d\'érable et le lait condensé sucré.',
    'Bien mélanger et cuire à feu moyen-vif 5 minutes en remuant constamment.',
    'Retirer du feu.',
    'Ajouter les guimauves miniatures et bien mélanger pour les faire fondre.',
    'Remplir les mini cornets à la cuillère, vous pouvez utiliser un petit entonoir.',
    'Laisser reposer au réfrigérateur.'
  ],
  tags: ['érable', 'caramel', 'gourmandise'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/petits_cornets_a_l_erable',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/petits_cornets_a_l_erable',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/petits_cornets_a_l_erable'
    }
  ],
  source: 'David Cloutier',
  slug: 'petits-cornets-a-lerable'
};
