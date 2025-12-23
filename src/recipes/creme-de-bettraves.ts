import { Recipe } from '@/types/recipe';

export const cremeDeBettraves: Recipe = {
  id: 'creme-de-bettraves',
  title: 'Crème de bettraves',
  description: 'Une soupe de betteraves crémeuse et parfumée, idéale pour une entrée ou un repas léger.',
  categories: ['Soupes'],
  prepTime: 15,
  cookTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 oignons, hachés',
    '1 gousse d\'ail, hachée',
    '45 ml (3 c. à soupe) de beurre',
    '15 ml (1 c. à soupe) de gingembre frais râpé',
    '1 kg (2 lb) de betteraves, pelées et tranchées',
    '1,2 litre (4 1/2 tasses) de bouillon de poulet',
    'Crème sure ou Yogourt nature (pour servir)',
    'Ciboulette fraîche ciselée (pour garnir)'
  ],
  instructions: [
    'Dans une casserole, attendrir les oignons et l\'ail dans le beurre.',
    'Ajouter le gingembre et les betteraves.',
    'Cuire 1 minute.',
    'Ajouter le bouillon, couvrir et laisser mijoter environ 1 heure.',
    'Saler et poivrer.',
    'Réduire le mélange en purée au mélangeur.',
    'Rectifier l\'assaisonnement.',
    'Au moment de servir, garnir de crème sure, de ciboulette.'
  ],
  tags: ['betteraves', 'soupe', 'crémeuse'],
  slug: 'creme-de-bettraves'
};
