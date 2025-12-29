import { Recipe } from '@/types/recipe';

export const pouletTikkaALIndienne: Recipe = {
  id: 'poulet-tikka-a-l-indienne',
  title: 'Poulet "tikka" à l\'indienne',
  description: 'Une recette de poulet mariné aux épices indiennes, grillé ou cuit au four, servi avec une sauce aux arachides et du riz.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse yogourt nature 10%',
    '2 c. à soupe de jus de lime fraîche',
    '1 c. à thé gingembre frais, râpé finement',
    '1 gousse ail, haché finement',
    '1 c. à thé poudre de cari',
    '1/4 c. à thé piment de Cayenne',
    '3/4 c. à thé paprika',
    '1/2 c. à thé sel',
    '4 poitrines de poulet, désossées, sans peau, coupées en cubes de 2 cm',
    '1 1/2 c. à soupe huile de canola',
    '12 brochettes en bois ou en bambou'
  ],
  instructions: [
    'Bien mélanger tous les ingrédients, sauf le poulet et l\'huile, dans une assiette creuse ou bol.',
    'Y ajouter les morceaux de poulet, en mélangeant pour bien les recouvrir de marinade.',
    'Couvrir et laisser reposer de 30 min à 1 h au réfrigérateur.',
    'Au moment de la cuisson, enfiler les morceaux de poulet sur les brochettes, sans trop les coller.',
    'Cuire les brochettes à \'moyen-chaud\', sur une grille huilée, jusqu\'à ce qu\'elles soient cuites et colorées, entre 5 et 7 min, en les retournant à l\'occasion.',
    'En alternative, on peut les cuire dans un poêlon à fond épais, huilé ou sous le gril du four.'
  ],
  tags: ['épices', 'grill', 'marinade'],
  accompaniment: 'Servir avec de la sauce aux arachides et un riz',
  marinatingTime: { min: 30, max: 30 },
  slug: 'poulet-tikka-a-l-indienne'
};
