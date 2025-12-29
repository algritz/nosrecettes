import { Recipe } from '@/types/recipe';

export const tartareDeDuoDeSaumonCroustillantEtGrenade: Recipe = {
  id: 'tartare-de-duo-de-saumon-croustillant-et-grenade',
  title: 'Tartare de duo de saumon, croustillant et grenade',
  description: 'Tartare de duo de saumon, croustillant et grenade',
  categories: ['Entrées'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '225 g de filet de saumon très frais sans la peau, coupé en petits dés',
    '3 tranches de saumon fumé, coupées en petits dés',
    '1 petit oignon rouge, haché finement',
    '1/2 grenade pour les graines',
    '1 oignon vert, haché',
    '15 ml de câpres, hachées finement',
    '15 ml d’huile d’olive',
    '15 ml de mayonnaise',
    '15 ml de moutarde de Dijon à l\'ancienne',
    '15 ml de tempura',
    'Fleur de sel au goût',
    'Sauce sriracha au goût'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients.',
    'Servir.'
  ],
  tags: ['saumon', 'cru', 'grenade'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-duo-de-saumon-croustillant-et-grenade',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-duo-de-saumon-croustillant-et-grenade',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-duo-de-saumon-croustillant-et-grenade'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-duo-de-saumon-croustillant-et-grenade'
};
