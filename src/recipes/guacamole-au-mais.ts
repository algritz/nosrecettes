import { Recipe } from '@/types/recipe';

export const guacamoleAuMais: Recipe = {
  id: 'guacamole-au-mais',
  title: 'Guacamole au maïs',
  description: 'Une recette simple de guacamole avec du maïs grillé, des avocats, et des épices, parfaite pour accompagner vos apéritifs.',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '3 gros avocats',
    '2 épis de maïs grillés',
    '1/2 oignon rouge',
    '1/2 tasse de coriandre hachée',
    '3 cuillères à soupe de jus de lime',
    '1/2 cuillère à café de sel ou au goût',
    '1/4 cuillère à café de poivre noir ou au goût',
    '1/2 cuillère à café de cumin'
  ],
  instructions: [
    'Couper les avocats en deux dans le sens de la longueur et retirer les noyaux.',
    'Utiliser une cuillère pour gratter l\'avocat dans un bol moyen.',
    'Écraser les avocats pour obtenir une consistance épaisse.',
    'Presser 3 cuillères à soupe de jus de lime frais sur la purée d\'avocats.',
    'Couper les grains de maïs des épis et les ajouter au bol avec l\'oignon en dés et la coriandre hachée.',
    'Assaisonner avec sel, poivre noir et cumin.',
    'Remuer jusqu\'à ce que le tout soit bien mélangé et servir.'
  ],
  tags: ['avocat', 'maïs grillé', 'entrée'],
  slug: 'guacamole-au-mais'
};
