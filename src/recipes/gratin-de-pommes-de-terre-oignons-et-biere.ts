import { Recipe } from '@/types/recipe'

export const gratinDePommesDeTerreOignonsEtBiere: Recipe = {
  id: 'gratin-de-pommes-de-terre-oignons-et-biere',
  title: 'Gratin de pommes de terre oignons et bière',
  description: '',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 75, max: 75 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 ou 7 de pommes de terre',
    '2 gros oignons pelés et coupés en rondelles',
    '1 bouteille de bière',
    '2 c. à soupe de beurre',
    '2 c. à soupe de farine',
    '250 ml de crème 35%',
    'noix de muscade',
    'Sel et poivre',
    '200g de fromage râpé',
  ],
  instructions: [
    'Préparez la sauce. Dans un poêlon, faites fondre le beurre. Ajoutez la farine, mélanger. Mouillez avec la crème. Portez à ébullition, laissez épaissir à petit feu. Salez, poivrez et muscadez.',
    'Epluchez et coupez les pommes de terre en tranches. Tapissez-en un plat à gratin beurré.',
    'Faites revenir les oignons dans un morceau de beurre. Versez la bière, portez à ébullition et faites réduire de moitié.',
    'Ajoutez les oignons dans le plat et nappez le tout de sauce blanche. Saupoudrez de fromage.',
    'Enfournez à 350°F pendant 1h à 1h 15.',
  ],
  tags: ['bière', 'gratin', 'fromage'],
  slug: 'gratin-de-pommes-de-terre-oignons-et-biere',
}
