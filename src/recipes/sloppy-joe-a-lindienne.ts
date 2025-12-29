import { Recipe } from '@/types/recipe';

export const sloppyJoeALindienne: Recipe = {
  id: 'sloppy-joe-a-l-indienne',
  title: 'Sloppy Joe à l\'indienne',
  description: 'Un plat épicé de viande de dindon hachée servi dans des mini-pains naans, accompagné d\'une sauce au yogourt et aux herbes.',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe d’huile',
    '1 oignon finement haché',
    '1 c. à soupe de gingembre frais finement haché',
    '1 c. à soupe de curcuma',
    '1 c. à soupe de poudre de cari',
    '1 lb de dindon haché',
    '½ tasse de pâte de tomate',
    '½ c. à thé de Sambal Oelek ou plus au goût',
    '1 tasse de lait de coco',
    '¼ de tasse de raisins secs dorés',
    '¼ de tasse de pistaches hachées grossièrement',
    '4 mini-pains naans',
    '2 branches de coriandre fraîche'
  ],
  instructions: [
    'Dans une grande poêle, faire revenir l’oignon, le gingembre et les épices (curcuma et poudre de cari) à feu moyen pendant 3 minutes.',
    'Ajouter le dindon et bien faire dorer la viande.',
    'Ajouter la pâte de tomates, le lait de coco, le sambal oelek, les raisins et les pistaches.',
    'Laisser mijoter à feu doux pendant environ 10 minutes.',
    'Pendant ce temps, mélanger les ingrédients de la sauce au yogourt et à la crème sure. Réserver au réfrigérateur.',
    'Faire griller les pains naans au four à 400 °F pendant 2 minutes.',
    'Garnir le pain avec le mélange de dindon et quelques feuilles de coriandre fraîche.',
    'Servir accompagné de la sauce au yogourt.'
  ],
  tags: ['épicé', 'curry', 'naan'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sloppy-joe-a-l-indienne',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sloppy-joe-a-l-indienne',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sloppy-joe-a-l-indienne'
    }
  ],
  source: 'David Cloutier',
  slug: 'sloppy-joe-a-lindienne'
};
