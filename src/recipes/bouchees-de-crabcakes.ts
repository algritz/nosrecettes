import { Recipe } from '@/types/recipe';

export const boucheesDeCrabcakes: Recipe = {
  id: 'bouchees-de-crabcakes',
  title: 'Bouchées de crabcakes',
  description: 'Recette de bouchées de crabcakes avec garniture de tomate, basilic et mayonnaise, accompagnée de conseils pour congeler et réchauffer.',
  categories: ['Poisson', 'Accompagnements'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 15, max: 15 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Crabcakes',
    '60 ml (¼ tasse) de mayonnaise',
    '1 œuf',
    '12 biscuits soda, émiettés',
    '5 ml (1 c. à thé) de sambal œlek',
    '3 boîtes de 120 g (4 oz) de crabe en morceaux, bien égoutté',
    '125 ml (½ tasse) de farine tout usage non blanchie',
    '60 ml (¼ tasse) d’huile d’olive',
    'Garniture',
    '30 ml (2 c. à soupe) de mayonnaise',
    '10 tomates cerises, tranchées en 3',
    '30 mini-feuilles de basilic frais',
    'Poivre'
  ],
  instructions: [
    'Dans un bol, mélanger la mayonnaise, l’œuf, les biscuits soda et le sambal œlek. Laisser reposer environ 10 minutes.',
    'Ajouter le crabe et mélanger jusqu’à ce qu’il soit effiloché. Saler et poivrer.',
    'Placer la farine sur une plaque ou une grande assiette. Réserver.',
    'Avec les mains, façonner de petites galettes avec environ 15 ml (1 c. à soupe) du mélange de crabe pour chacune et les déposer sur la plaque. Bien les fariner.',
    'Dans une grande poêle antiadhésive, dorer la moitié des galettes à la fois dans l’huile de 3 à 4 minutes de chaque côté.',
    'Égoutter sur du papier absorbant.',
    'Servir immédiatement en déposant les crabcakes sur un plat de service ou une planche. Garnir d’un peu de mayonnaise, d’une tranche de tomate et d’une feuille de basilic. Poivrer.',
    'Servir immédiatement.'
  ],
  tags: ['crabe', 'friture', 'garniture'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/crabcake',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/crabcake',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/crabcake'
    }
  ],
  source: 'David Cloutier',
  notes: 'Pour congeler et réchauffer : Congelez les bouchées cuites sur une plaque tapissée de papier parchemin puis transférez-les dans un sac de plastique hermétique pour congélateur. Au moment de servir, réchauffez-les de 15 à 20 minutes sur une plaque au centre d’un four préchauffé à 180 °C (350 °F).',
  slug: 'bouchees-de-crabcakes'
};
