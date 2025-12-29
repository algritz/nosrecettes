import { Recipe } from '@/types/recipe';

export const sauceBbqAuWhiskyLaphroaig: Recipe = {
  id: 'sauce-bbq-au-whisky-laphroaig',
  title: 'Sauce BBQ au Whisky Laphroaig',
  description: 'Une sauce BBQ riche et fumée au whisky Laphroaig, idéale pour accompagner porc ou côtes levées.',
  categories: ['Sauces', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 Tasse de ketchup',
    '60 ml de whisky Laphroaig Quarter Cask Islay',
    '1/3 Tasse de cassonade',
    '1/4 Tasse oignon haché',
    '2 Cuillères à soupe d\'huile d\'olive',
    '2 Cuillères à soupe d\'eau',
    '3 Gousses d\'ail écrasées',
    '1 cuillère à soupe de vinaigre de cidre',
    '1 Cuillère à soupe de pâte de tomate',
    '1 cuillère à soupe de sauce Worcestershire',
    '1 1/2 c. à thé de fumée liquide (liquid smoke)',
    '1 Cuillère à soupe de moutarde au miel',
    '30 ml de sauce Teriyaki',
    '30 ml de sauce HP',
    '1/2 c. à thé de cayenne',
    'Poivre fraîchement moulu au goût'
  ],
  instructions: [
    'Mettre l\'oignon et l\'eau dans un petit broyeur à épices électrique. Broyer le tout jusqu\'à l\'obtention d\'une pâte lisse.',
    'Chauffer l\'huile d\'olive à feu moyen. Ajouter la purée d\'oignon, réduire le feu et laisser mijoter lentement jusqu\'à ce que les oignons soient dorés. Attention de ne pas les brûler.',
    'Ajouter l\'ail écrasé et remuer le tout pendant au moins 30 secondes, soit le temps pour que l\'ail soit cuit.',
    'Ajouter tous les autres ingrédients et laisser mijoter pendant 20 minutes. Remuer de façon continue. Ça va réduire et épaissir.',
    'Rajouter de l\'eau, au besoin, si trop épais.',
    'Après 20 minutes de cuisson laisser tiédir et servir avec du porc ou badigeonner sur vos côtes levées préférées.'
  ],
  tags: ['fumée', 'whisky', 'barbecue'],
  slug: 'sauce-bbq-au-whisky-laphroaig'
};
