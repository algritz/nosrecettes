import { Recipe } from '@/types/recipe';

export const gateauKetchupHeinz: Recipe = {
  id: 'gateau-ketchup-heinz',
  title: 'Gâteau ketchup Heinz',
  description: 'Un gâteau sucré aromatisé au ketchup Heinz, avec un glaçage crémeux au fromage à la crème et beurre.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 30,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    'Gâteau',
    '2 tasses (500 ml) de farine tout usage',
    '2 c. à thé (10 ml) de poudre à pâte',
    '1 1/2 c. à thé (7 ml) de cannelle moulue',
    '1 c. à thé (5 ml) de bicarbonate de soude',
    '1/2 c. à thé (2 ml) de muscade moulue',
    '1/2 c. à thé (2 ml) de gingembre moulu',
    '1/2 tasse (125 ml) de ketchup aux tomates Heinz',
    '1/2 tasse (125 ml) d\'eau',
    '2 c. à soupe (30 ml) de colorant alimentaire rouge',
    '3/4 tasse (175 ml) de beurre, ramolli',
    '1 1/2 tasse (375 ml) de cassonade brune, bien tassée',
    '2 œufs'
  ],
  instructions: [
    'Préchauffer le four à 350°F (180°C). Graisser deux moules à gâteau ronds de 9 po (23 cm) et tapisser le fond d’une feuille de papier parchemin.',
    'Dans un bol, mélanger la farine avec la poudre à pâte, la cannelle, le bicarbonate de soude, la muscade et le gingembre.',
    'Dans un autre bol, mélanger le ketchup, l’eau et le colorant alimentaire. Mettre de côté.',
    'Dans un grand bol, battre le beurre et y incorporer le sucre jusqu’à obtention d’une consistance homogène.',
    'Incorporer les œufs en battant.',
    'Ajouter le mélange de farine et le mélange de ketchup.',
    'Battre à faible vitesse en grattant les parois du bol jusqu\'à consistance lisse.',
    'Battre ensuite à vitesse moyenne-élevée pendant une minute.',
    'Répartir la pâte également entre les deux moules.',
    'Faire cuire pendant 30 minutes ou jusqu’à ce que le centre du gâteau rebondisse au toucher.',
    'Laisser refroidir les gâteaux pendant 15 minutes avant de les démouler sur une grille.',
    'Laisser refroidir complètement avant d’étendre le glaçage.',
    'Glaçage: Battre le fromage à la crème, le beurre et la vanille à vitesse moyenne pendant 2 minutes ou jusqu’à consistance lisse.',
    'Incorporer graduellement le sucre à glacer en continuant de battre à faible vitesse, en grattant les parois du bol au besoin.',
    'Battre à vitesse élevée jusqu’à obtention d’une consistance mousseuse.',
    'Étendre le glaçage entre les deux gâteaux, sur le dessus et sur les côtés.'
  ],
  tags: ['gâteau', 'ketchup', 'crème'],
  slug: 'gateau-ketchup-heinz'
};
