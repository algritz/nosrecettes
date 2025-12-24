import { Recipe } from '@/types/recipe';

export const boulettesALAsiatique: Recipe = {
  id: 'boulettes-a-l-asiatique',
  title: 'Boulettes à l\'asiatique',
  description: 'Une recette de boulettes savoureuses à l\'influence asiatique, servies avec une sauce épicée et garnies de coriandre et graines de sésame grillées.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 25,
  cookTime: 45,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '450 g de boeuf haché',
    '450 g de porc haché',
    '65 ml de sauce Frank\'s RedHot Original',
    '6 blancs d\'oignons verts, émincés',
    '45 ml de coriandre fraîche, hachée',
    '2 oeufs, battus',
    '125 ml de chapelure',
    'Farine',
    '30 ml d\'huile de sésame',
    '125 ml de sauce Frank\'s RedHot Original',
    '65 ml de sucre',
    '250 ml de bouillon de poulet',
    '45 ml de sauce hoisin',
    '15 ml d\'ail, hachée',
    '30 ml de gingembre, râpé',
    '10 ml de pâte de tomate',
    'Coriandre, hachée',
    'Graines de sésames, grillées'
  ],
  instructions: [
    'Mélanger tous les ingrédients pour les boulettes et façonner de petites boulettes. Mettre au réfrigérateur pour 30 min.',
    'Fariner et rissoler les boulettes dans l’huile de sésame jusqu\'à l’obtention d’une légère coloration. Réserver.',
    'Verser tous les ingrédients pour la sauce (sauf la coriandre et les graines de sésames) dans une casserole, faire frémir jusqu\'à épaississement et ajouter les boulettes.',
    'Couvrir et réduire le feu. Laisser cuire 15 à 20 min.',
    'Saupoudrer de coriandre et de graines de sésames grillées.',
    'Servir chaud.'
  ],
  tags: ['asiatique', 'sauce épicée', 'grillage'],
  wine: 'Baron de Ley',
  marinatingTime: 30,
  notes: 'Peut aussi être servi en amuse-gueule.',
  slug: 'boulettes-a-l-asiatique'
};
