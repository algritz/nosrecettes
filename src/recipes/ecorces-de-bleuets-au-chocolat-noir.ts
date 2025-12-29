import { Recipe } from '@/types/recipe'

export const ecorcesDeBleuetsAuChocolatNoir: Recipe = {
  id: 'ecorces-de-bleuets-au-chocolat-noir',
  title: 'Écorces de bleuets au chocolat noir',
  description:
    'Une gourmandise croquante et fruitée, combinant du chocolat noir et des bleuets frais pour une texture et un goût riches.',
  categories: ['Végétarien', 'Desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 12, max: 12 },
  servings: 25,
  difficulty: 'Facile',
  ingredients: [
    '500 g (3 tasses) de chocolat noir de bonne qualité, grossièrement haché',
    '30 g (2 c. à soupe) de beurre non salé',
    '350 g (1 tasse) de bleuets frais',
  ],
  instructions: [
    'Tapisser une plaque à biscuit d’environ 10 po x 14 po d’une feuille de papier parchemin ou d’un tapis de silicone.',
    'Au bain-marie ou au four à micro-ondes, faire fondre le chocolat et le beurre.',
    'Incorporer la moitié des bleuets et mélanger délicatement.',
    'À l’aide d’une spatule, répartir la préparation de chocolat uniformément sur la plaque à cuisson, en prenant garde de ne pas écraser les bleuets.',
    'Verser le reste des bleuets sur la préparation au chocolat et presser délicatement pour enfoncer les bleuets dans le chocolat.',
    'Réfrigérer la préparation 1 heure ou jusqu’à ce que le chocolat soit dur.',
    'Casser grossièrement en morceaux de la grosseur désirée.',
    'Sortir du frigo 30 minutes à 1 heure avant de servir.',
  ],
  tags: ['chocolat noir', 'bleuets frais', 'réfrigération'],
  slug: 'ecorces-de-bleuets-au-chocolat-noir',
}
