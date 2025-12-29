import { Recipe } from '@/types/recipe';

export const poivronsFarcisALAgneau: Recipe = {
  id: 'poivrons-farcis-a-l-agneau',
  title: 'Poivrons farcis à l\'agneau',
  description: 'Une recette de poivrons farcis à l\'agneau, parfumée et savoureuse, idéale pour un plat principal convivial.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '250 ml de riz blanc',
    '250 ml de bouillon de poulet',
    '4 poivrons rouges, jaunes ou oranges',
    '60 ml de noix de pin',
    '455 g d\'agneau haché',
    '60 ml d\'huile d\'olive',
    '1 oignon haché',
    '215 ml de sauce aux tomates en boîte',
    '65 ml de raisins secs',
    '45 ml de persil frais, haché',
    '45 ml de menthe fraîche, hachée',
    '3 ml de cannelle moulue',
    'Sel et poivre, au goût',
    '125 ml d\'eau bouillante'
  ],
  instructions: [
    'Dans une casserole, porter à ébullition le bouillon de poulet. Ajouter le riz, réduire le feu, couvrir et laisser cuire 15 minutes. Retirer du feu et réserver sans enlever le couvercle.',
    'Porter une grande casserole d’eau à ébullition. Couper le dessus des poivrons, de manière à former de petits couvercles, et retirer les graines. Plonger les poivrons dans l’eau bouillante et les blanchir 2 minutes. Égoutter et laisser reposer, tête renversée, sur un papier absorbant.',
    'Dans une poêle, faire griller les noix de pin à feu doux. Réserver.',
    'Chauffer les 3/4 de l’huile et faire revenir les oignons 10 min, jusqu’à ce qu’ils soient ramollis.',
    'Ajouter l’agneau haché et cuire jusqu’à ce que la viande perde sa couleur rosée.',
    'Ajouter la sauce aux tomates, les raisins secs, le persil, la menthe, la cannelle, le riz cuit et les noix de pin grillées. Remuer le tout 2 minutes. Saler et poivrer.',
    'Disposer les poivrons dans un plat allant au four. Répartir la farce dans les poivrons et replacer les couvercles.',
    'Badigeonner les poivrons avec l’huile d’olive restante. Verser de l’eau bouillante dans le fond du plat.',
    'Cuire au four à 350 °F (175 °C) pendant 40 minutes.'
  ],
  tags: ['agneau', 'farce', 'cuisson au four'],
  slug: 'poivrons-farcis-a-l-agneau'
};
