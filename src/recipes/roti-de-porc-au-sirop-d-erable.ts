import { Recipe } from '@/types/recipe';

export const rotiDePorcAuSiropDErable: Recipe = {
  id: 'roti-de-porc-au-sirop-d-erable',
  title: 'Rôti de porc au sirop d\'érable',
  description: 'Une recette de rôti de porc cuit lentement avec un mélange de sirop d\'érable, sauce soja, oignons, ail et citron, pour une saveur sucrée-salée.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 480, max: 480 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 rôti de porc dans la fesse ou longe avec la couenne',
    '1/2 tasse de sirop d\'érable',
    '1/3 tasse de sauce soya',
    '2 oignons finement hachés',
    '1 gousse d\'ail hachée',
    '1 c. soupe de jus de citron'
  ],
  instructions: [
    'Mélanger ensemble les ingrédients ci-haut mentionnés',
    'Verser ce mélange sur le rôti que l\'on aura mis dans la casserole',
    'Faire cuire au four préchauffé à 250 F pendant 6 à 8 heures selon la grosseur du rôti'
  ],
  tags: ['sucré-salé', 'four', 'longue cuisson'],
  slug: 'roti-de-porc-au-sirop-d-erable'
};
