import { Recipe } from '@/types/recipe';

export const hautDeCuisseAuCarviEtPoivreNoir: Recipe = {
  id: 'haut-de-cuisse-au-carvi-et-poivre-noir',
  title: 'Haut de cuisse au carvi et poivre noir',
  description: 'Une recette de hauts de cuisse de poulet marinés aux épices, grillés ou cuits au four, servis avec des quartiers de lime.',
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '10 hauts de cuisse de poulet',
    '1 1/4 c.à thé poivre en grains moulu grossièrement',
    '1 c.à thé graines de carvi moulu grossièrement',
    '2 1/2 c.à soupe gingembre frais haché finement',
    '4 gousses ail haché finement',
    '3 1/2 c.à thé sucre',
    '2 1/2 c.à thé paprika',
    '3 c.à soupe huile d\'Olive',
    '1 pincée sel'
  ],
  instructions: [
    'Entailler avec un couteau les morceaux de poulet, assez en profondeur pour permettre une bonne pénétration de la marinade, puis les déposer dans un sac Ziplok.',
    'Moudre grossièrement les grains de poivre et les graines de carvi dans un mortier ou dans un moulin à café.',
    'Hacher finement le gingembre et l\'ail et les ajouter au mélange.',
    'Ajouter le sucre, le paprika et l\'huile. Continuer à moudre jusqu\'à obtention d\'une pâte.',
    'Verser la pâte sur les morceaux de poulet, en s\'assurant de bien les envelopper.',
    'Fermer le sac ziplock et mettre au réfrigérateur au moins 8 heures ou toute une nuit.',
    'Cuire les morceaux de poulet sur un barbecue moyen-chaud pendant environ 15-20 min, en les badigeonnant de marinade et en les retournant une fois.',
    'Comme alternative, on peut cuire le poulet dans le four sous le gril, en le déposant sur une grille placée dans un plat à rôtir, à 7-10 cm sous l\'élément chauffant.',
    'Salé légèrement et servir avec des quartiers de lime.'
  ],
  tags: ['marinade sèche', 'barbecue', 'poulet'],
  accompaniment: 'Servir avec des quartiers de lime.',
  marinatingTime: { min: 480, max: 480 },
  slug: 'haut-de-cuisse-au-carvi-et-poivre-noir'
};
