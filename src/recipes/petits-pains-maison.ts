import { Recipe } from '@/types/recipe';

export const petitsPainsMaison: Recipe = {
  id: 'petits-pains-maison',
  title: 'Petits pains maison',
  description: 'Recette de petits pains maison moelleux et faciles à faire, avec une pâte levée, cuits au four et badigeonnés de beurre fondu.',
  categories: ['Pains'],
  prepTime: 20,
  cookTime: 18,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '1 cuillère à soupe de levure sèche',
    '55 g / 1/4 tasse de sucre',
    '1/2 tasse / 125 ml d\'eau tiède',
    '600 g / 4 1/2 tasses de farine + extra pour l\'époussetage',
    '1 1/2 c. À thé de sel',
    '1 tasse / 250 ml de lait tiède',
    '50 g / 3,5 c. À soupe de beurre non salé, fondu et refroidi',
    '2 œufs, à la température ambiante, battus à la fourchette',
    '1 cuillère à soupe de beurre fondu'
  ],
  instructions: [
    'Placez la levure et 2 c. à thé de sucre dans un bol moyen, puis versez l\'eau. Laisser agir 5 minutes jusqu\'à ce qu\'il mousse.',
    'Placez la farine, le sucre restant et le sel dans un bol. Mélanger pour combiner. Faire un trou au centre.',
    'Ajoutez le lait, le beurre, les œufs et versez le liquide de levure, y compris toute la mousse. Mélangez jusqu\'à obtenir une pâte à muffins épaisse.',
    'Laissez la pâte dans le bol, couvrez-la avec un torchon humide (propre) et placez-la dans un endroit chaud pendant environ 1 1/2 à 2 heures ou jusqu\'à ce que le volume ait presque triplé.',
    'Tapisser un papier parchemin sur un plat de 31,5 x 23,5 cm / 9 x 13 pouces.',
    'Donner un coup dans la pâte pour la faire dégonfler, puis mélangez brièvement dans le bol pour éliminer les bulles d\'air de la pâte.',
    'Verser de la farine sur la surface de travail et y déposer la pâte. Mettre un peu de farine sur le dessus de la pâte puis former une bûche.',
    'Couper la pâte en 4 morceaux, puis couper chaque morceau en 3 morceaux (12 au total). Former des boules avec la pâte.',
    'Placez les boules avec le côté lisse vers le haut dans le plat. Répéter avec le reste de la pâte. Alignez-les 3 x 4.',
    'Couvrir de saran wrap enduit d\'huile. Remettre le plat dans un endroit chaud et laisser reposer 30 à 45 minutes, jusqu’à ce que la pâte ait augmenté d’environ 75%.',
    'Préchauffer le four à 390°F (standard) / 350°F (convection).',
    'Cuire au four pendant 15 à 18 minutes ou jusqu\'à ce que la surface soit dorée.',
    'Retirer les petits pains du four. Badigeonner de beurre fondu.'
  ],
  tags: ['pâte levée', 'moelleux', 'cuisson au four'],
  marinatingTime: 120,
  slug: 'petits-pains-maison'
};
