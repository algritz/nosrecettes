import { Recipe } from '@/types/recipe';

export const boeufEnCrouteDeCacao72: Recipe = {
  id: 'boeuf-en-croute-de-cacao-72',
  title: 'Boeuf en croûte de cacao 72%',
  description: 'Un plat sophistiqué de filet de bœuf en croûte de cacao, accompagné d\'une sauce à la liqueur de cassis et demi-glace.',
  categories: ['Boeuf'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '800 g de filet de boeuf, bien nettoyé',
    '65 ml de cacao 72%',
    '30 ml de cèpes déshydratés',
    '15 ml de beurre',
    '15 ml d\'huile d\'olive',
    'Sel et poivre, au goût',
    '2 échalotes françaises, hachées',
    '15 ml de beurre',
    '15 ml de liqueur de cassis de l\'île d\'Orléans',
    '250 ml de sauce demi-glace'
  ],
  instructions: [
    'Dans un moulin à café, moudre les cèpes jusqu’à l’obtention d’une poudre fine.',
    'Placer le filet de bœuf, les poudres de cacao et de cèpes dans un sac refermable de type Ziplock et laisser mariner au réfrigérateur au moins 4 heures ou jusqu’à 12 heures.',
    'Préchauffer le four à 375 °F (190 °C).',
    'Dans une poêle allant au four, faire fondre le beurre et l’huile.',
    'Lorsque la poêle est bien chaude, faire dorer le filet de bœuf de tous les côtés pour former une légère croûte.',
    'Cuire au four environ 25 min pour une cuisson mi-saignante.',
    'Un thermomètre à cuisson inséré au centre de la pièce de viande devrait indiquer 150 °F (65 °C).',
    'Lorsque le filet de bœuf est cuit, retirer de la poêle, couvrir de papier d’aluminium et laisser reposer environ 12 min dans une assiette.',
    'Faire fondre le beurre dans une casserole puis ajouter les échalotes et faire revenir jusqu’à coloration dorée.',
    'Déglacer avec la liqueur de cassis puis laisser réduire jusqu’à évaporation complète.',
    'Incorporer la sauce demi-glace, laisser réduire 2 min puis saler et poivrer.',
    'Trancher le filet de bœuf, napper de sauce et servir.'
  ],
  tags: ['cacao', 'sauce cassis', 'bœuf'],
  slug: 'boeuf-en-croute-de-cacao-72'
};
