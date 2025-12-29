import { Recipe } from '@/types/recipe';

export const vinaigretteCesarMaison: Recipe = {
  id: 'vinaigrette-cesar-maison',
  title: 'Vinaigrette César maison',
  description: 'Une vinaigrette classique César faite maison, crémeuse et savoureuse, idéale pour accompagner vos salades.',
  categories: ['Sauces'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 jaunes d’œufs',
    '1 c. à soupe de jus de citron',
    '1 c. à soupe de moutarde de Dijon',
    '1 gousse d’ail',
    '2 filets d’anchois (facultatif)',
    '1 c. à soupe de câpres hachés',
    '1 tasse d’huile végétale',
    '1 c. à thé de vinaigre de vin blanc',
    '1/2 tasse de fromage parmesan frais, râpé',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Au robot culinaire ou au pied-mélangeur ou même à la main, au fouet, battre les jaunes d’œufs, le jus de citron, la moutarde, l’ail, les anchois et les câpres pendant 1 minute.',
    'En laissant le robot en marche, verser l’huile végétale en filet afin d’obtenir une sauce crémeuse.',
    'À la fin, verser le vinaigre de vin blanc et fouetter.',
    'Terminer en ajoutant le parmesan, puis assaisonner et bien brasser.'
  ],
  tags: ['vinaigrette', 'césar', 'maison'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/vinaigrette-cesar-maison',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/vinaigrette-cesar-maison',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/vinaigrette-cesar-maison'
    }
  ],
  source: 'David Cloutier',
  slug: 'vinaigrette-cesar-maison'
};
