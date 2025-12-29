import { Recipe } from '@/types/recipe';

export const saumonSauceAuxBleuetsEtVinRouge: Recipe = {
  id: 'saumon-sauce-aux-bleuets-et-vin-rouge',
  title: 'Saumon sauce aux bleuets et vin rouge',
  description: 'Un plat de saumon avec une sauce aux bleuets, vin rouge et sirop d\'érable, servi avec un accompagnement vert.',
  categories: ['Poisson', 'Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 12, max: 12 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 pavés de saumon avec peau d’environ 200g chacun',
    '2 c. à table de farine (facultatif)',
    '¼ tasse d’huile d’olive',
    'Sel & poivre, au goût',
    '1 échalote française, ciselée finement',
    '½ tasse de vin rouge',
    '1 c. à table de sirop d’érable',
    '1 c. à table de vinaigre balsamique',
    '2 c. à table de crème 35%',
    '¼ tasse de bleuets'
  ],
  instructions: [
    'Fariner le côté peau des pavés et retirer l’excédent de farine. Assaisonner.',
    'Dans un poêlon, chauffer l’huile d’olive à feu mi-vif. Déposer les pavés côté peau vers le bas et laisser cuire à feu moyen. Les pavés sont prêts lorsqu’ils sont cuits jusqu’à mi-hauteur ou plus. La peau doit être bien croustillante et colorée.',
    'Pendant la cuisson des pavés de saumon, suer l’échalote dans l’huile d’olive dans un autre poêlon.',
    'Déglacer au vin rouge puis réduire presque à sec.',
    'Ajouter le sirop d’érable, le balsamique et la crème. Porter à ébullition, ajouter les bleuets puis fermer le feu.',
    'Goûter et assaisonner.',
    'Servir le saumon avec de la roquette, des épinards ou tout autre accompagnement puis napper de sauce.'
  ],
  tags: ['saumon', 'sauce aux bleuets', 'vin rouge'],
  slug: 'saumon-sauce-aux-bleuets-et-vin-rouge'
};
