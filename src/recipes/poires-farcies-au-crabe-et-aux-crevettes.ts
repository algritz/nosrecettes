import { Recipe } from '@/types/recipe'

export const poiresFarciesAuCrabeEtAuxCrevettes: Recipe = {
  id: 'poires-farcies-au-crabe-et-aux-crevettes',
  title: 'Poires farçies au crabe et aux crevettes',
  description:
    'Une recette de poires farcies au crabe et aux crevettes, servies sur une salade composée avec décoration de fleurs comestibles.',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '1 conserve de 1/2 poires',
    '250 gr. fromage à la crème Philadelphia (ne pas prendre sans gras)',
    '2 échalotes hachées finement',
    '1 c. à soupe de jus de citron',
    '1/2 c. à thé (2 ml) sel de céleri',
    '1/2 c. à thé (2 ml) poivre noir et poivre de cayenne',
    '1 c. à thé (5 ml) persil et coriandre',
    '1 conserve de crabe bien égouttée',
    '1 paquet crevettes cuites',
  ],
  instructions: [
    'Battre le fromage en crème',
    'Ajouter le reste des ingrédients sauf les poires',
    'Réfrigérer 1 heure',
    'Farcir les poires avec le mélange',
    'Servir une ou deux moitié de poires farçies sur de la salade composée',
    'Accompagner de craquelins',
    'Décorer de fleurs comestibles',
  ],
  tags: ['crabe', 'crevettes', 'salade'],
  marinatingTime: { min: 60, max: 60 },
  notes:
    'Attendre que le fromage soit à la température de la pièce avant de le battre en crème.',
  slug: 'poires-farcies-au-crabe-et-aux-crevettes',
}
