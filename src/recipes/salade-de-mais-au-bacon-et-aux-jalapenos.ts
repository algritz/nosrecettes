import { Recipe } from '@/types/recipe';

export const saladeDeMaisAuBaconEtAuxJalapenos: Recipe = {
  id: 'salade-de-mais-au-bacon-et-aux-jalapenos',
  title: 'Salade de maïs au bacon et aux jalapeños',
  description: 'Une salade fraîche et piquante combinant maïs, bacon croustillant, jalapeños et une vinaigrette citronnée à la coriandre.',
  categories: ['Salades'],
  prepTime: 10,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tasse de maïs',
    '6 tranches de bacon cuit',
    '1 cuillère à soupe de coriandre',
    '1 jalapeño, émincé',
    '1/3 de tasse de mayonnaise',
    'Le jus de 2 lime',
    '1 cuillère à thé de poudre de chili',
    '1 cuillère à thé de poudre d\'ail',
    'sel casher',
    'Poivre noir fraîchement moulu'
  ],
  instructions: [
    'Dans un grand bol, combiner tous les ingrédients.',
    'Remuer jusqu\'à ce que les ingrédients soient complètement mélangés et enrobés de vinaigrette.'
  ],
  tags: ['piquant', 'maïs', 'bacon'],
  slug: 'salade-de-mais-au-bacon-et-aux-jalapenos'
};
