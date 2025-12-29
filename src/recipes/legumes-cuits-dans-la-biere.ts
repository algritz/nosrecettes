import { Recipe } from '@/types/recipe'

export const legumesCuitsDansLaBiere: Recipe = {
  id: 'legumes-cuits-dans-la-biere',
  title: 'Légumes cuits dans la bière',
  description:
    "Une recette simple de légumes d'hiver cuits dans la bière noire avec des épices et du thym.",
  categories: ['Légumes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Légumes d’hiver (carottes, pommes de terre, oignons) coupés en gros bâtonnets',
    '3/4 d’une bouteille de bière noire',
    '1 branche de thym coupée en morceaux',
    '1 pincée de paprika en poudre',
    'Sel',
    'Poivre',
  ],
  instructions: [
    'Mettez vos légumes crus coupés dans un saladier.',
    'Ajoutez le paprika, le sel, le poivre et le thym.',
    'Mélangez.',
    'Versez les légumes dans un plat creux allant au four, puis versez la bière dessus.',
    'Cuisez 30 minutes à 350 degrés F.',
    'Surveillez la cuisson en arrosant de temps en temps vos légumes avec la bière.',
  ],
  tags: ['bière noire', 'légumes rôtis', 'épices'],
  slug: 'legumes-cuits-dans-la-biere',
}
