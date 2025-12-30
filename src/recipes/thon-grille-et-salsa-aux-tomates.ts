import { Recipe } from '@/types/recipe';

export const thonGrilleEtSalsaAuxTomates: Recipe = {
  id: '1766770394736',
  title: 'Thon grillé et salsa aux tomates',
  description: 'Un plat simple de thon grillé accompagné d\'une salsa fraîche aux tomates, citron, câpres et persil.',
  categories: ['Plats principaux', 'Poisson'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
        '4 pavés de thon rouge de 150 g (5 oz) chacun',
        '20 ml (4 c. à thé) d’huile d’olive',
        'Sel et poivre du moulin'
      ]
    },
    {
      title: 'Salsa',
      items: [
        '2 tomates rouges mûres, épépinées et coupées en dés',
        '1 gousse d’ail, hachée',
        '125 ml (1/2 tasse) de persil',
        '30 ml (2 c. à soupe) d’huile d’olive',
        '10 ml (2 c. à thé) de câpres',
        'Le zeste et le jus de 1 citron lavé'
      ]
    }
  ],
  instructions: [
    'Mélanger tous les ingrédients de la salsa. Laisser reposer à température ambiante 30 minutes avant de la servir avec les pavés de thon grillés.',
    'Préchauffer le barbecue à feu vif.',
    'Laisser tempérer le thon 20 minutes avant de le griller.',
    'Saler et poivrer les pavés et les déposer sur une grande feuille de papier d’aluminium préalablement badigeonnée d’huile d’olive.',
    'Déposer la feuille directement sur la grill du barbecue et cuire environ 2 minutes de chaque côté.',
    'Servir le thon grillé avec la salsa.'
  ],
  tags: ['barbecue', 'salsa', 'thon'],
  source: 'David Cloutier',
  slug: 'thon-grille-et-salsa-aux-tomates'
};
