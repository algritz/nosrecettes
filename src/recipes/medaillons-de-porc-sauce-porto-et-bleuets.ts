import { Recipe } from '@/types/recipe';

export const medaillonsDePorcSaucePortoEtBleuets: Recipe = {
  id: 'medaillons-de-porc-sauce-porto-et-bleuets',
  title: 'Médaillons de porc, sauce porto et bleuets',
  description: 'Une recette savoureuse de médaillons de porc accompagnés d\'une sauce au porto et aux bleuets, parfaits pour un repas élégant.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml (2 c. à soupe) de sucre',
    '30 ml (2 c. à soupe) de vinaigre distillé',
    '300 ml (1 1/4 tasse) de demi-glace ou 600 ml (2 1/2 tasses) de fond de veau réduit de moitié',
    '60 ml (1/4 tasse) de porto',
    'Sel et poivre noir du moulin',
    '250 ml (1 tasse) de bleuets',
    '15 ml (1 c. à soupe) d’huile végétale',
    '15 ml (1 c. à soupe) de beurre',
    '800 g (1 3/4 lb) de filet de porc, paré et coupé en médaillons de 100 g (3 1/2 oz)'
  ],
  instructions: [
    'Préchauffer le four à 190 °C (375 °F).',
    'Dans une casserole, chauffer le sucre et le vinaigre à feu moyen-vif. Surveiller attentivement l’ébullition, sans brasser, jusqu’à ce que le sirop prenne une couleur ambrée.',
    'Ajouter la demi-glace et le porto. Mijoter lentement et laisser réduire jusqu’à consistance désirée. Rectifier l’assaisonnement. Ajouter les bleuets au dernier moment.',
    'Pendant ce temps, dans une poêle, chauffer l’huile et le beurre à feu moyen-vif.',
    'Saler et poivrer les médaillons. Une fois que le beurre mousse bien, saisir la viande de chaque côté.',
    'Disposer les médaillons sur une plaque de cuisson. Enfourner de 15 à 17 minutes afin d’obtenir une cuisson rosée.',
    'Retirer du four et couvrir de papier aluminium. Laisser reposer environ 5 minutes.',
    'Disposer les médaillons dans les assiettes. Napper de sauce.'
  ],
  tags: ['porto', 'bleuets', 'sauce'],
  slug: 'medaillons-de-porc-sauce-porto-et-bleuets'
};
