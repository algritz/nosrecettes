import { Recipe } from '@/types/recipe';

export const saumonALAnanas: Recipe = {
  id: 'saumon-a-l-ananas',
  title: 'Saumon à l\'ananas',
  description: 'Saumon à l\'ananas',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 10,
  cookTime: 50,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '8 rondelles d\'ananas, fraîches ou en conserve',
    '1 gros filet de saumon (environ 3 lb)',
    'Sel casher',
    'Poivre noir fraichement moulu',
    '3 cuillères à soupe beurre fondu',
    '3 cuillères à soupe sauce chili douce',
    '2 cuillères à soupe coriandre fraîchement hachée',
    '3 gousses d\'ail, émincées',
    '2 cuillères à café gingembre fraîchement râpé',
    '2 cuillères à soupe huile de sésame grillée',
    '1/2 cuillère à café flocons de piment rouge broyés',
    'Garniture : graines de sésame grillées, oignons verts émincés',
    'Pour servir : quartiers de lime'
  ],
  instructions: [
    'Préchauffer le four à 350°C.',
    'Tapisser une grande plaque à pâtisserie d\'un papier parchemin.',
    'Au centre de la feuille, déposer des tranches d\'ananas en une couche uniforme.',
    'Saler et poivrer les deux côtés du filet de saumon et le déposer sur les tranches d\'ananas.',
    'Dans un petit bol, mélanger le beurre, la sauce chili, la coriandre, l\'ail, le gingembre, l\'huile de sésame et les flocons de piment rouge.',
    'Badigeonner le filet de saumon avec cette marinade.',
    'Cuire au four jusqu\'à ce que le saumon soit bien cuit, environ 50 minutes.',
    'Garnir de graines de sésame et d\'oignons verts.',
    'Servir avec des quartiers de lime.'
  ],
  tags: ['ananas', 'marinade', 'grill'],
  slug: 'saumon-a-l-ananas'
};
