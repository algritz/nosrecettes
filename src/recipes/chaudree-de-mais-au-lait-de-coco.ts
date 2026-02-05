import { Recipe } from '@/types/recipe';

export const chaudreeDeMaisAuLaitDeCoco: Recipe = {
  id: 'chaudree-de-mais-au-lait-de-coco',
  title: 'Chaudrée de maïs au lait de coco',
  description: 'Une soupe crémeuse de maïs et chou kale au lait de coco, garnie de bacon croustillant.',
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à café d’huile d’olive',
    '1 petit oignon jaune haché',
    '1 gousse d’ail émincée',
    '2 pincée de poivre de Cayenne',
    '2 pommes de terre jaunes pelées et coupées en dés',
    '1 1/2 tasses de grains de maïs surgelés',
    '500 ml de lait de coco',
    '250 ml d’eau',
    '1 c. à soupe de fécule de maïs',
    '1 tasse de chou kale émincé finement',
    'Sel et poivre, au goût',
    '4 tranches de bacon cuit, émietté'
  ],
  instructions: [
    'Dans une casserole, à feu vif, chauffer l’huile.',
    'Ajouter l’oignon et cuire 5 minutes.',
    'Ajouter l’ail, le poivre de Cayenne, les pommes de terre, le maïs, le lait de coco et l’eau.',
    'Réduire le feu à moyen, couvrir et cuire 15 minutes.',
    'À l’aide d’une louche, prélever un peu de bouillon et le verser dans un bol.',
    'Ajouter la fécule de maïs et bien mélanger.',
    'Reverser dans la casserole et bien brasser.',
    'Ajouter le chou kale.',
    'Saler et poivrer.',
    'Mélanger, éteindre le feu et couvrir.',
    'Laisser reposer le temps que le chou kale tombe.',
    'Au moment de servir, garnir de bacon émietté.'
  ],
  tags: ['soupe', 'coco', 'maïs'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/chaudree_mais_coco',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/chaudree_mais_coco',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/chaudree_mais_coco'
    }
  ],
  source: 'David Cloutier',
  slug: 'chaudree-de-mais-au-lait-de-coco'
};
