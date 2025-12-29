import { Recipe } from '@/types/recipe';

export const saucePourMordusDeRibs: Recipe = {
  id: 'sauce-pour-mordus-de-ribs',
  title: 'Sauce pour mordus de Ribs',
  description: 'Une sauce savoureuse idéale pour accompagner les ribs ou le porc éfiloché.',
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 petite bouteille de Coca-Cola',
    '1 tasse de ketchup',
    '1/4 tasse de vinaigre de cidre',
    '2 c. à soupe de mélasse',
    '1 à 2 c. à soupe de sauce chili chinoise (Sriracha Hot Chili Sauce), au goût',
    '1 à 2 c. à thé de mélange en poudre pour sauce BBQ',
    '1 c. à thé de café instantané (facultatif)',
    'Sel et poivre du moulin'
  ],
  instructions: [
    'Dans une casserole, mélanger tous les ingrédients',
    'Poivrer généreusement',
    'Faire chauffer à feu doux pendant 30 minutes'
  ],
  tags: ['sauce', 'barbecue', 'épicé'],
  notes: 'Excellent avec du porc éfiloché.',
  slug: 'sauce-pour-mordus-de-ribs'
};
