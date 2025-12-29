import { Recipe } from '@/types/recipe';

export const saladePasDeSalade: Recipe = {
  id: 'salade-pas-de-salade',
  title: 'Salade pas de salade',
  description: 'Cette salade est excellente en été avec des fines herbes de votre jardin.',
  categories: ['Salades'],
  prepTime: { min: 45, max: 45 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 botte de persil frais, ordinaire plat ou les deux',
    '1 botte de basilic',
    '1 botte de ciboulette',
    'Tout autre épice fraiche que vous avez sous la main (corriande, origan, sauge, etc.)',
    '1 paquet de tomates cerises coupé en 8 (si vous avez des tomates de différente sorte et couleur c’est encore meilleur)',
    '1 comcombre coupé en cube',
    '1 gros plat de bocconcini coupé en 8',
    'Huile d’olive',
    'Vinaigre balsamique',
    'Moutarde de Dijon ordinaire',
    'Moutarde de Dijon à l’ancienne',
    'Sirop d’érable',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Prendre les fines herbes fraiche, hachez-les grossièrement et mettre dans un saladier.',
    'Ajouter les tomates, le comcombre et le fromage bocconcini.',
    'Mélanger et si vous avez le temps laisser reposer un peu.',
    'Mélanger les ingrédients de la sauce à votre goût en mettant la même quantité pour les deux sortes de moutarde.',
    'Avant de mettre la sauce dans la salade, prendre le temps d’égoutter la salade pour enlever le jus des tomates, si non la salade sera trop liquide.',
    'Verser la sauce à salade dans le saladier, saler, poivrer et bien brasser.',
    'Si vous avez le temps laisser reposer un peu.'
  ],
  tags: ['fines herbes', 'tomates cerises', 'sauce'],
  slug: 'salade-pas-de-salade'
};
