import { Recipe } from '@/types/recipe';

export const sauteDePouletEtDeLegumes: Recipe = {
  id: 'saute-de-poulet-et-de-legumes',
  title: 'Sauté de poulet et de légumes',
  description: 'Un sauté savoureux de poulet et légumes, parfumé de sauces asiatiques et agrémenté de coriandre fraîche.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 poitrines de poulet coupé en dés',
    '30 ml (2 c. à soupe) huile végétale',
    '2 gousses d\'ail, hachées finement',
    '1 oignon blanc, en gros morceaux',
    '250 ml (1 tasse) fleurons de brocoli',
    '2 poivrons, coupés en lanières de couleur différente',
    'Une branche de céleri tranché',
    '5 ml (1 c. à thé) de gingembre frais rapé',
    '60 ml (1/4 tasse) sauce soya',
    '80 ml (1/3 tasse) jus d\'orange',
    '30 ml (2 c. à soupe) miel',
    '15 ml (1 c. à soupe) sauce Mirin',
    '3 ml (1/2 c. à thé) sauce Hoisin',
    '3 ml (1/2 c. à thé) sauce à poisson',
    'Fécule de maïs (pour épaissir)',
    'Jus d\'orange (pour épaissir)',
    'Coriandre hachée'
  ],
  instructions: [
    'Faire cuire le céleri et le brocoli à la vapeur, mais pas trop longtemps.',
    'Dans un grand poêlon ou un wok, chauffer la moitié de l\'huile et faire revenir le poulet 4 min ou jusqu\'à ce qu\'il soit cuit.',
    'Retirer le poulet du poêlon et réserver.',
    'Dans le même poêlon, chauffer le reste de l\'huile et cuire l\'oignon, l\'ail, les piments et le gingembre 2 min.',
    'Ajouter le poulet et bien brasser.',
    'Ajouter tous les autres ingrédients sauf la fécule de maïs délayée dans du jus d\'orange.',
    'Chauffer 6 min. Si c\'est encore liquide, ajouter de la fécule de maïs délayée dans du jus d\'orange.',
    'Juste avant de servir, ajouter le brocoli, le céleri vapeur et la coriandre ciselée, bien brasser.'
  ],
  tags: ['asiatique', 'sauté', 'coriandre'],
  slug: 'saute-de-poulet-et-de-legumes'
};
