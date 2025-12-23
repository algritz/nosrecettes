import { Recipe } from '@/types/recipe';

export const sandwichAuCrabCakeSurPainBaguette: Recipe = {
  id: 'sandwich-au-crab-cake-sur-pain-baguette',
  title: 'Sandwich au crab cake sur pain baguette',
  description: 'Un vrai délire je vous dis! Sandwich au crab cake sur pain baguette',
  categories: ['Sandwichs'],
  prepTime: 20,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '400 g. de chair de crabe (fraîche ou en conserve)',
    '1/2 poivron rouge, en petits dés',
    '2 grosses c. à soupe de mayonnaise légère',
    '1/2 tasse de panko',
    '1/3 tasse de Corn Flakes émietté',
    '6 biscuits Ritz réduit en chapelure',
    '2 oignons verts, finement hachés',
    'Zeste d\'un citron',
    'Jus d\'un demi citron',
    '1 c. à soupe de sambal oelek (ou au goût)',
    'Sel et poivre du moulin'
  ],
  instructions: [
    'Préchauffer le four à 450F.',
    'Réduire les Corn Flakes et les biscuits Ritz en chapelure grossière avec les mains.',
    'Mélanger tous les ingrédients secs et ajouter la mayonnaise.',
    'Si vous trouvez la mixture encore trop sèche, rajouter de la mayo ou du yogourt grec nature.',
    'Assaisonner.',
    'Façonner des galettes selon vos désirs. Ici, j\'ai fait trois énormes galettes afin de nourrir trois affamés. On pourrait très facilement faire 4 sandwiches.',
    'Cuire au four à 450F, de 20 à 30 minutes dépendamment de la grosseur des galettes. Retourner à mi-cuisson.',
    'Servir sur un pain baguette, avec des feuilles de roquette et une sauce au yogourt au sambal oelek et au citron.'
  ],
  tags: ['crabe', 'sandwich', 'four'],
  slug: 'sandwich-au-crab-cake-sur-pain-baguette'
};
