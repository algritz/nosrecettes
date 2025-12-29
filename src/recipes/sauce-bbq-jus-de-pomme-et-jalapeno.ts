import { Recipe } from '@/types/recipe'

export const sauceBbqJusDePommeEtJalapeno: Recipe = {
  id: 'sauce-bbq-jus-de-pomme-et-jalapeno',
  title: 'Sauce BBQ jus de pomme et Jalapeno',
  description:
    'Une sauce BBQ savoureuse à base de jus de pomme et jalapeno, idéale pour accompagner vos grillades.',
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 tasse de ketchup',
    '1 tasse de jus de pomme',
    '1/3 de tasse de vinaigre de cidre de pomme',
    '1/4 de tasse de cassonade',
    '2 c. à soupe de mélasse',
    '1 c. à soupe de poivre noir concassé',
    "1 c. à soupe de poudre d'ail",
    "1 c. à soupe de flocons d'oignon ou poudre d'oignon",
    '1 c. à thé de graines de céleri',
    '1 c. à thé de coriandre en poudre',
    '1 c. à thé de sel',
    '1 piment jalapeno coupé en très petits morceaux',
  ],
  instructions: ['Mettre tout dans un chaudron et faire mijoter 20 minutes.'],
  tags: ['jambon', 'fumée', 'marinade'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sauce-bbq-jus-de-pomme-et-jalapeno',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sauce-bbq-jus-de-pomme-et-jalapeno',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sauce-bbq-jus-de-pomme-et-jalapeno',
    },
  ],
  source: 'David Cloutier',
  slug: 'sauce-bbq-jus-de-pomme-et-jalapeno',
}
