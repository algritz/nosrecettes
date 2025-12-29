import { Recipe } from '@/types/recipe';

export const boucheesDeBiscuitAuGateauAuFromage: Recipe = {
  id: 'bouchees-de-biscuit-au-gateau-au-fromage',
  title: 'Bouchées de biscuit au gâteau au fromage',
  description: 'Une recette de bouchées de biscuit au gâteau au fromage, combinant une base de pâte chocolatée avec une garniture crémeuse au fromage, à cuire et réfrigérer avant de servir.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Pâte',
      items: [
      '1/2 tasse de beurre, ramolli',
      '1/2 tasse de lait condensé sucré Eagle Brand',
      '1/4 tasse de cassonade, tassée',
      '1 œuf',
      '1 c. à thé d\'extrait de vanille',
      '1 3/4 tasse de farine',
      '1 c. à thé de poudre à pâte',
      '1 tasse de grains de chocolat mi-sucré'
      ]
    },
    {
      title: 'Garniture',
      items: [
      '8 oz de fromage à la crème, ramolli',
      '2/3 tasse de lait condensé sucré Eagle Brand (provenant du reste de la boîte de 300 ml)',
      '1/4 tasse de yogourt nature',
      '1 œuf',
      '2 c. à table de farine',
      '1 c. à thé d\'extrait de vanille'
      ]
    }
  ],
  instructions: [
    'Préchauffer le four à 350 ºF (180 ºC).',
    'Tapisser un moule à pâtisserie carré de 9 po (2 L) de papier parchemin, en chevauchant deux côtés afin de faciliter le démoulage.',
    'Pâte: Battre le beurre, le lait condensé sucré et la cassonade jusqu\'à homogénéité.',
    'Ajouter l\'œuf et la vanille et bien battre.',
    'Ajouter la farine et la poudre à pâte en battant seulement jusqu\'à l\'obtention d\'une pâte.',
    'Incorporer les grains de chocolat.',
    'Presser 1 ½ tasse (375 ml) de la pâte dans le moule préparé. Réserver le reste de pâte pour la garniture.',
    'Garniture: Battre le fromage à la crème et le lait condensé sucré jusqu\'à l\'obtention d\'une texture lisse.',
    'Incorporer le reste des ingrédients en battant.',
    'Verser le mélange de fromage à la crème sur la base.',
    'Recouvrir du reste de pâte. Il est possible que le mélange de fromage à la crème ne soit pas complètement couvert.',
    'Faire cuire au four préchauffé pendant 30 minutes ou jusqu\'à ce que la garniture soit dorée et que le gâteau soit ferme au toucher.',
    'Réfrigérer au moins 6 heures ou toute la nuit avant de servir.'
  ],
  tags: ['gâteau au fromage', 'chocolat', 'cuisson'],
  notes: 'Temps total de préparation et cuisson: 40 minutes. Temps de refroidissement recommandé: au moins 6 heures ou toute la nuit.',
  slug: 'bouchees-de-biscuit-au-gateau-au-fromage'
};
