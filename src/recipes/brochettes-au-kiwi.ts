import { Recipe } from '@/types/recipe';

export const brochettesAuKiwi: Recipe = {
  id: 'brochettes-au-kiwi',
  title: 'Brochettes au kiwi',
  description: 'Une recette de brochettes marinées au kiwi, viande tendre et parfumée, idéale pour le grill.',
  categories: ['Végétarien'],
  prepTime: 20,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1,5 kg de porcs (mais aussi bon avec de l\'agneau ou du boeuf)',
    '2 oignons',
    'Sel',
    '800 ml de lait',
    'Poivre frais',
    '1 cuillère à soupe de vinaigre',
    '2 c. à thé de pâte de tomate',
    '2 gousses d\'ail hachées',
    '150 ml d\'huile',
    '2 kiwis'
  ],
  instructions: [
    'Couper les oignons en gros grossiers ou en demi-rondelle et mettre dans un sac ziploc.',
    'Ajouter le sel aux oignons dans le sac, puis pétrir le sel dans les oignons.',
    'Ajouter le poivre, l\'ail, la pâte de tomate et le vinaigre. Mélanger brièvement.',
    'Ajouter le lait et l\'huile, puis brasser.',
    'Couper la viande en cubes de 3 x 3 cm et mettre la viande dans la marinade.',
    'Laisser mariner 6 à 24 heures.',
    '2 heures avant la cuisson, éplucher et broyer grossièrement les kiwis et les ajouter à la marinade.',
    'Laisser mariner 2 heures avec les kiwis.',
    'Faire cuire sur le grill et servir.'
  ],
  tags: ['grill', 'marinade sèche', 'fruit'],
  slug: 'brochettes-au-kiwi'
};
