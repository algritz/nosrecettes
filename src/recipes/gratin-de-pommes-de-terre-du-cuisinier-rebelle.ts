import { Recipe } from '@/types/recipe';

export const gratinDePommesDeTerreDuCuisinierRebelle: Recipe = {
  id: 'gratin-de-pommes-de-terre-du-cuisinier-rebelle',
  title: 'Gratin de pommes de terre du Cuisinier rebelle',
  description: 'Un gratin de pommes de terre savoureux avec oignons caramélisés, crème, fromage et ciboulette, doré au grill.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml d\'huile d\'olive',
    '6 oignons tranchés en demi-rondelles',
    '15 ml de sucre de canne',
    '4 pommes de terre Yukon Gold, lavées et épluchées',
    '65 ml de vin blanc sec',
    '125 ml de crème sure',
    '2 oignons verts hachés',
    '30 à 45 ml de ciboulette fraîche hachée',
    '30 ml de beurre',
    'Sel et poivre',
    '200 g de gruyère râpé'
  ],
  instructions: [
    'Dans une poêle, verser l\'huile et caraméliser les oignons. Saupoudrer de sucre de canne.',
    'Dans une casserole d\'eau bouillante, cuire les pommes de terre. Égoutter et piler grossièrement.',
    'Incorporer le vin, la crème sure, les oignons verts, le beurre, le sel, le poivre et la moitié du fromage.',
    'Déposer le mélange de pommes de terre dans des ramequins. Recouvrir d\'oignons caramélisés et du reste de fromage.',
    'Dorer sous le gril environ 5 min en surveillant bien.',
    'Décorer de ciboulette et servir.'
  ],
  tags: ['caramelisé', 'fromage', 'gril'],
  slug: 'gratin-de-pommes-de-terre-du-cuisinier-rebelle'
};
