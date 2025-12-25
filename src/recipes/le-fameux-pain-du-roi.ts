import { Recipe } from '@/types/recipe';

export const leFameuxPainDuRoi: Recipe = {
  id: 'le-fameux-pain-du-roi',
  title: 'Le fameux pain du roi',
  description: 'Bon au déjeuner ou comme dessert',
  categories: ['Pâtisseries et desserts'],
  prepTime: 45,
  cookTime: 35,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '150 ml de lait tiède',
    '150 ml d\'eau tiède',
    '90 g de beurre fondu',
    '1/2 tasse de sucre',
    '10 g de levure à pain instantané',
    '2 œufs',
    '690 g de farine',
    '1 pincée de sel',
    'Cacao amère, environ 3 ou 4 c. à soupe',
    'Caramel Dulce de Leche (ou Nutella si non disponible)',
    'Pépites de chocolat',
    'Un jaune d\'œuf battu avec un peu de lait'
  ],
  instructions: [
    'Dans un bol, mettre le lait et l\'eau tiède. Ajouter le beurre fondu, le sucre, la levure instantanée et les 2 œufs. Bien mélanger.',
    'En deux fois, ajouter la farine et une pincée de sel. Mélanger jusqu\'à obtenir une bonne consistance.',
    'Diviser la pâte en deux.',
    'Dans une des deux parties, ajouter du cacao et bien mélanger.',
    'Couvrir les deux pâtes, laisser reposer jusqu\'à ce qu\'elles doublent de volume, environ 45 minutes.',
    'Étaler la pâte nature au rouleau. Faire de même avec la pâte au chocolat (les deux doivent être de même taille).',
    'Superposer les deux pâtes, une par-dessus l\'autre.',
    'Ajouter environ trois grosses cuillères à soupe de Dulce de Leche sur la base des pâtes et saupoudrer de pépites de chocolat.',
    'Rouler sur la moitié, en lanière, l\'autre moitié.',
    'Enrouler chaque lanière, former une couronne et la poser dans un moule beurré.',
    'Laisser lever environ 30 minutes pour qu\'elle gonfle.',
    'Badigeonner au jaune d\'œuf avec un peu de lait.',
    'Cuire à 350°F (180°C) pendant environ 35 minutes.'
  ],
  tags: ['pâtisserie', 'couronne', 'chocolat'],
  slug: 'le-fameux-pain-du-roi'
};
