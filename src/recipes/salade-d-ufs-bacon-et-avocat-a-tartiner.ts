import { Recipe } from '@/types/recipe';

export const saladeDUfsBaconEtAvocatATartiner: Recipe = {
  id: 'salade-d-ufs-bacon-et-avocat-a-tartiner',
  title: 'Salade d\'œufs, bacon et avocat à tartiner',
  description: 'Excellent avec un bon pain frais',
  categories: ['Salades', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 œufs',
    '1 avocat',
    '6 tranches de bacon',
    '1 cuillère à café de miel',
    '3 cuillères à soupe de mayonnaise',
    'Jus d\'un demi-citron',
    '2 cuillères à soupe de ciboulette ciselée',
    'Sel au goût',
    'Poivre au goût',
    '1 pain baguette coupée en tranches',
    'Huile d\'olive'
  ],
  instructions: [
    'Placez les œufs dans une casserole et couvrez-les d\'eau. Portez l\'eau à ébullition à feu moyen-vif. Une fois à ébullition, baissez le feu et laissez mijoter 10 minutes.',
    'Transférez les œufs dans un bol d\'eau glacée pendant 5 minutes pour les refroidir, puis épluchez-les et coupez-les en petits morceaux.',
    'Dans une poêle à feu moyen, faites cuire le bacon jusqu\'à ce qu\'il soit croustillant, environ 8 à 10 minutes.',
    'Transférez-le sur une assiette recouverte d\'essuie-tout, laissez-le refroidir et émiettez-le en petits morceaux.',
    'Dans un grand saladier, ajoutez les œufs hachés. Ajoutez ensuite l\'avocat coupé en dés, le bacon émietté, la ciboulette, la mayonnaise, le jus de citron, le miel, le sel et le poivre.',
    'Remuez délicatement pour mélanger les ingrédients, en veillant à conserver les morceaux d\'avocat intacts.',
    'Coupez la baguette en tranches et faites-les griller dans une poêle avec de l\'huile d\'olive à feu moyen pendant 2 à 3 minutes de chaque côté jusqu\'à ce qu\'elles soient dorées.',
    'Servez la salade d\'œufs, d\'avocat et de bacon avec les tranches de baguette grillées.'
  ],
  tags: ['avocat', 'bacon', 'salade'],
  slug: 'salade-d-ufs-bacon-et-avocat-a-tartiner'
};
