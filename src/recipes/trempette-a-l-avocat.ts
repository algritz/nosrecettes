import { Recipe } from '@/types/recipe';

export const trempetteALAvocat: Recipe = {
  id: 'trempette-a-l-avocat',
  title: 'Trempette à l\'avocat',
  description: 'Pour rehausser le goût de vos crudités.',
  categories: ['Végétarien', 'Trempettes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de babeurre',
    '4 cuillères à soupe de crème sure',
    '3 cuillères à soupe de mayonnaise',
    '1 petit avocat',
    '1 cuillère à soupe de coriandre',
    '1/2 cuillère à café de moutarde de Dijon',
    '1/2 cuillère à café de sauce Tabasco',
    '1 gousse d\'ail, hachée ou pressée',
    '3/4 cuillère à café de sel, ou au goût',
    '1/4 cuillère à café de poivre noir'
  ],
  instructions: [
    'Mélanger tous les ingrédients dans un robot culinaire, mélanger par impulsions puis mélanger jusqu\'à consistance lisse, en raclant le bol si nécessaire.',
    'Assaisonner avec plus de sel et de poivre au goût si désiré et servir comme trempette ou vinaigrette.',
    'Réfrigérez toute portion inutilisée dans un petit contenant hermétique ce conserve jusqu\'à 3 jours.'
  ],
  tags: ['avocat', 'trempette', 'crudités'],
  slug: 'trempette-a-l-avocat'
};
