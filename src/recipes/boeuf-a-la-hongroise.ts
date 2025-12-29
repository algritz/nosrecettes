import { Recipe } from '@/types/recipe'

export const boeufALaHongroise: Recipe = {
  id: 'boeuf-a-la-hongroise',
  title: 'Boeuf à la hongroise',
  description:
    'Un plat de boeuf mijoté aux saveurs hongroises, avec légumes, vin rouge et épices, préparé au four, à la mijoteuse ou à la poêle.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 420, max: 420 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Sel et poivre, au goût',
    '5 pommes de terre grelots, pelées et coupées en deux',
    '1 de chacun : poivron jaune, rouge et orange, coupés en lanières de taille moyenne',
    '2 tomates, épépinées et coupées en dés',
    '250 ml (1 tasse) de bouillon de boeuf',
    '375 ml (1 ½ tasse) de vin rouge corsé Caballero de Chile',
    '30 ml (2 c. à soupe) de farine',
    '110 ml (2 c. à thé) de cumin en poudre',
    '20 ml (4 c. à thé) de paprika',
    '675 g (1 ½ lb) de palette de boeuf',
    '1 gousse d’ail, hachée',
    '2 oignons, coupés en rondelles',
    '30 ml (2 c. à soupe) d’huile d’olive',
  ],
  instructions: [
    'Avant la cuisson : Dans une grande poêle antiadhésive à feu moyen, faire revenir les oignons 2 minutes dans l’huile d’olive. Ajouter le boeuf et l’ail. Saupoudrer de paprika et de cumin. Faire dorer pendant 2 à 3 minutes par côté. Ajouter la farine et poursuivre la cuisson 2 minutes en brassant continuellement autour de la viande. Déglacer avec le vin rouge et porter à ébullition.',
    'À la mijoteuse : Déposer le tout dans la mijoteuse et ajouter les autres ingrédients. Assaisonner au goût. Couvrir et cuire à basse température de 6 à 7 heures. Rectifier l’assaisonnement au moment de servir.',
    'Au four : Préchauffer le four à 180 °C (350 °F). Dans un récipient allant au four, y déposer la palette de boeuf saisie et ajouter tous les autres ingrédients. Incorporer 250 ml (1 tasse) de vin rouge. Assaisonner au goût. Couvrir et cuire de 2 à 3 heures en brassant à l’occasion. Surveiller la quantité de liquide et en ajouter au besoin. Rectifier l’assaisonnement au moment de servir.',
  ],
  tags: ['vin rouge', 'épices hongroises', 'mijoteuse'],
  slug: 'boeuf-a-la-hongroise',
}
