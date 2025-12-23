import { Recipe } from '@/types/recipe';

export const poudingChomeurAuxPommes: Recipe = {
  id: 'pouding-chomeur-aux-pommes',
  title: 'Pouding chômeur aux pommes',
  description: 'Un dessert classique québécois combinant un sirop aux pommes chaud avec un gâteau moelleux à la vanille, servi tiède ou froid.',
  categories: ['Desserts'],
  prepTime: 25,
  cookTime: 40,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Sirop aux pommes',
      items: [
      '2 c à thé de fécule de maïs',
      '1 tasse de jus de pomme',
      '1 tasse de sirop d’érable',
      '1 tasse de crème 35%',
      '2 tasse de pommes spartan pelées, épépinées et coupées en dés'
      ]
    },
    {
      title: 'Gâteau',
      items: [
      '1 1/4 tasse de farine tout usage non blanchie',
      '1 c à thé de poudre à pâte',
      '1/4 c à thé de bicarbonate de soude',
      '1/4 tasse de beurre non salé, ramolli',
      '1/2 tasse de sucre',
      '1 œuf',
      '1/2 c. à thé de vanille',
      '1/2 tasse de jus de pomme'
      ]
    }
  ],
  instructions: [
    'Sirop aux pommes: Dans une casserole hors du feu, mélanger la fécule, le jus, le sirop d’érable et la crème à l’aide d’un fouet. Ajouter les pommes et porter à ébullition. Verser dans un moule carré de 8 po (20cm) ou d’une contenance de 8 tasses (2 litres). Réserver.',
    'Gâteau: Placer la grille au centre du four. Préchauffer le four à 350°F (180°C). Dans un bol, mélanger la farine, la poudre à pâte et le bicarbonate de soude. Réserver. Dans un autre bol, crémer le beurre avec le sucre au batteur électrique. Ajouter l’œuf et la vanille, battre jusqu’à homogénéité. À basse vitesse, incorporer les ingrédients secs en alternant avec le jus de pomme. À l’aide d’une cuillère à crème glacée ou d’une grosse cuillère, répartir la pâte sur le sirop chaud. Déposer le moule sur une plaque à cuisson. Cuire au four de 30 à 35 minutes ou jusqu’à ce qu’un cure-dent inséré au centre en ressorte propre. Servir tiède ou froid.'
  ],
  tags: ['pomme', 'sirop d'érable', 'gâteau'],
  notes: 'Si le sirop est trop liquide, mettre 4 c à thé de fécule de maïs au lieu de 2.',
  slug: 'pouding-chomeur-aux-pommes'
};
