import { Recipe } from '@/types/recipe';

export const patesAuxPoireauxEtJambonTresCremeuse: Recipe = {
  id: 'pates-aux-poireaux-et-jambon-tres-cremeuse',
  title: 'Pâtes aux poireaux et jambon très crémeuse',
  description: 'Une recette de pâtes crémeuses aux poireaux et jambon, idéale pour utiliser des restes de jambon.',
  categories: ['Pâtes', 'Végétarien'],
  prepTime: 15,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à table de beurre non salé',
    '3 gros blancs de poireaux coupés en tranches fines',
    '1 boîte de farfalles ou autres pâtes courtes',
    '1 1/2 tasse de crème à cuisson 35%',
    '2 cuillères à table de moutarde à l\'ancienne',
    '1 1/2 tasse de jambon fumé coupé en cubes',
    'Environ 1 tasse d\'eau de cuisson des pâtes',
    'Fromage suisse râpé',
    'Sel et poivre'
  ],
  instructions: [
    'Dans un grand poêlon profond, faire fondre le beurre à feu moyen. Ajouter les poireaux. Couvrir et cuire, en brassant de temps en temps, 10 minutes ou jusqu\'à ce que les poireaux soient tendres. Saler et poivrer.',
    'Entre-temps, dans une grande casserole d’eau bouillante salée, cuire les pâtes de 8 à 10 minutes ou jusqu’à ce qu’elles soient al dente. Égoutter en réservant 1 tasse de l’eau de cuisson.',
    'Dans le poêlon, ajouter la crème et la moutarde, et mélanger. Ajouter le jambon, les pâtes, saler et poivrer, puis ajouter suffisamment d’eau de cuisson réservée pour bien enrober. Rechauffer 2 minutes.',
    'Au moment de servir, parsemer les pâtes de fromage.'
  ],
  tags: ['crème', 'jambon', 'pâtes'],
  slug: 'pates-aux-poireaux-et-jambon-tres-cremeuse'
};
