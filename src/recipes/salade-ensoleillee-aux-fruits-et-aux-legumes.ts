import { Recipe } from '@/types/recipe';

export const saladeEnsoleilleeAuxFruitsEtAuxLegumes: Recipe = {
  id: 'salade-ensoleillee-aux-fruits-et-aux-legumes',
  title: 'Salade ensoleillée aux fruits et aux légumes',
  description: 'Une salade fraîche et colorée combinant fruits et légumes, idéale pour une dégustation estivale.',
  categories: ['Salades'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 concombres',
    '1 piment vert',
    '1 piment rouge ou jaune ou orange',
    '1/2 oignon rouge',
    'Quelques feuilles de basilic',
    '1/2 paquet de fraises',
    '1/2 paquet de bleuets ou de mûres',
    '200 ml de mayonnaise',
    '6 à 8 c. à soupe de vinaigre de vin rouge',
    'Sucre au goût',
    'Une pincée de sel',
    'Poivre rose'
  ],
  instructions: [
    'Couper tous les fruits et légumes en petits morceaux, sauf les bleuets et les mûres.',
    'Ajouter tout le reste des ingrédients et mélanger.',
    'Déguster.'
  ],
  tags: ['frais', 'coloré', 'rapide'],
  notes: 'Source: Recette que ma fille à fait au terrain de jeu.',
  slug: 'salade-ensoleillee-aux-fruits-et-aux-legumes'
};
