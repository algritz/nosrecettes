import { Recipe } from '@/types/recipe';

export const saumonBalsamique: Recipe = {
  id: 'saumon-balsamique',
  title: 'Saumon balsamique',
  description: '',
  categories: ['Vollaille'],
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de cassonade tassée',
    '2 c. à soupe de vinaigre balsamique',
    '1 c. à soupe d’huile d’olive',
    '1/4 c. à thé de romarin séché',
    '1 gousse d’ail émincée',
    '1/4 c. à thé de poivre',
    '1 ½ lb de filets de saumon',
    '1/2 c. à thé de sel'
  ],
  instructions: [
    'Fouetter ensemble la cassonade, le vinaigre balsamique, l\'huile d\'olive, le romarin, l\'ail et le poivre dans un bol.',
    'Réserver 1 c. à soupe de ce mélange dans un autre bol.',
    'Ajouter le saumon et brasser doucement pour le couvrir de marinade.',
    'Couvrir le plat et laisser mariner au réfrigérateur pendant 30 minutes.',
    'Retirer le saumon de la marinade et jeter celle-ci.',
    'Placer le saumon sur une feuille de papier d\'aluminium et saupoudrer de sel.',
    'Préchauffer le four à 450°F (230°C).',
    'Faire griller le saumon au four jusqu\'à ce qu\'il s\'effiloche facilement à la fourchette, environ 10 minutes.',
    'Badigeonner le saumon avec la marinade préalablement mise de côté et remettre au four 1 minute, le temps de caraméliser la marinade sur le dessus.'
  ],
  tags: ['balsamique', 'marinade', 'grill'],
  slug: 'saumon-balsamique'
};
