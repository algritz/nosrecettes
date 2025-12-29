import { Recipe } from '@/types/recipe';

export const tartareDeBoeufAuxEpicesCajunsCacahuetesEtCoriandre: Recipe = {
  id: 'tartare-de-boeuf-aux-epices-cajuns-cacahuetes-et-coriandre',
  title: 'Tartare de boeuf aux épices cajuns, cacahuètes et coriandre',
  description: 'Tartare de boeuf aux épices cajuns, cacahuètes et coriandre',
  categories: ['Entrées'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g de boeuf à tartare',
    'Coriandre fraîche 1/4 de botte',
    '1 oignon rouge haché finement',
    '50 g de cacahuètes',
    '1/2 c. à thé d\'épice cajun',
    '20 ml de Sauce Soja',
    '2 c. à soupe de sauce Chili aigre-douce',
    '3 pincées de sel fin',
    'Poivre du moulin'
  ],
  instructions: [
    'Éplucher et ciseler l\'oignon rouge.',
    'Laver et effeuiller la coriandre et la ciseler finement.',
    'Concasser les cacahuètes.',
    'Tailler le boeuf en petits dés.',
    'Dans un bol, mélanger le boeuf avec l\'oignon ciselé, la sauce soja, la sauce Chili, la coriandre et les cacahuètes.',
    'Assaisonner le tout et ajouter les épices cajuns.',
    'Dresser le tartare en verrines et terminer par des pluches de coriandre.'
  ],
  tags: ['épices cajuns', 'cacahuètes', 'tartare'],
  notes: 'La vedette dans ce tartare, c\'est le profil de saveurs provenant des épices, la viande n\'est qu\'un support. Donc, ne gaspillez pas votre argent en achetant votre viande dans la super boucherie "fancy" de votre coin. Allez-y avec un morceau simple, mais de qualité et FRAIS.',
  slug: 'tartare-de-boeuf-aux-epices-cajuns-cacahuetes-et-coriandre'
};
