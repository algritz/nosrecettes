import { Recipe } from '@/types/recipe';

export const pouletEnDeuxEtapesALaDijonnaise: Recipe = {
  id: 'poulet-en-deux-etapes-a-la-dijonnaise',
  title: 'Poulet en deux étapes à la dijonnaise',
  description: 'Une recette simple de poulet mijoté avec une sauce à la moutarde de Dijon et miel, mijotée jusqu\'à cuisson parfaite.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet sans peau et désossées, coupées en deux (environ 1 lb/500 g)',
    '1 c. à s. (15 mL) huile',
    '1 boîte (10 oz/284 mL) soupe condensée Crème de poulet à faible teneur en gras, de CAMPBELL®',
    '1/2 tasse (125 mL) eau',
    '3 c. à s. (45 mL) moutarde de Dijon',
    '1 c. à s. (15 mL) miel'
  ],
  instructions: [
    'Faire revenir les 4 poitrines de poulet coupées en deux dans 1 c. à s. d\'huile chaude, dans une grande poêle.',
    'Ajouter 1 boîte de soupe mélangée à ½ tasse (125 mL) d\'eau, 3 c. à s. (45 mL) de moutarde de Dijon et 1 c. à s. (15 mL) de miel.',
    'Couvrir et laisser mijoter jusqu\'à ce que le poulet soit bien cuit.'
  ],
  tags: ['mijoté', 'moutarde', 'miel'],
  slug: 'poulet-en-deux-etapes-a-la-dijonnaise'
};
