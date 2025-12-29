import { Recipe } from '@/types/recipe';

export const cremeDeLegumeGrilles: Recipe = {
  id: 'creme-de-legume-grilles',
  title: 'Crème de légume grillés',
  description: 'Une soupe crémeuse à base de légumes grillés, parfumée aux épices, et enrichie de bouillon de poulet ou légumes.',
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 50, max: 50 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'une patate douce',
    'un oignon',
    '3 carottes',
    'huile d’olive',
    '1/8 de c. à thé de muscade',
    '1/4 de c. à thé de cannelle',
    '1/4 de c. à thé de cumin',
    '1/4 de c. à thé de curcuma',
    '1 litre de bouillon de poulet ou légume',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Préchauffer un four à 350°F.',
    'Couper grossièrement les légumes et les déposer dans un grand bol.',
    'Ajouter l’huile d’olive, la muscade, la cannelle, le cumin, le curcuma, le sel, le poivre et bien mélanger.',
    'Étaler les légumes sur une plaque à pâtisserie ou dans un plat allant au four.',
    'Faire griller 30 minutes.',
    'Retirer les légumes du four, débarrasser l\'huile en trop et les mettre dans une marmite.',
    'Ajouter le bouillon de légumes et porter à ébullition.',
    'Couvrir et laisser mijoter 15 minutes ou jusqu’à ce que les légumes soient tendres.',
    'Passer au pied mélangeur ou au blender.'
  ],
  tags: ['épicé', 'grillé', 'soupe'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-legume-grilles',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-legume-grilles',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-legume-grilles'
    }
  ],
  source: 'David Cloutier',
  slug: 'creme-de-legume-grilles'
};
