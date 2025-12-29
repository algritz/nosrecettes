import { Recipe } from '@/types/recipe';

export const minibrochettesDananasEtDePoulet: Recipe = {
  id: '1766684683146',
  title: 'Minibrochettes d’ananas et de poulet',
  description: 'Brochettes de poulet et d\'ananas marinés, servies avec une sauce au yogourt et garam masala.',
  categories: ['Entrées', 'Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Pour servir',
      items: [
        '12 branches de romarin effeuillées'
      ]
    },
    {
      title: 'Poulet mariné',
      items: [
        '65 ml d\'huile d\'olive',
        '4 graines de cardamome broyées',
        '15 ml de miel de trèfle',
        'Sel et poivre, au goût',
        '3 poitrines de poulet coupées en cubes'
      ]
    },
    {
      title: 'Ananas marinés',
      items: [
        '3 ml de sambal oelek',
        '1 citron vert',
        '5 ml de miel de trèfle',
        '1/2 ananas coupé en cubes'
      ]
    },
    {
      title: 'Sauce',
      items: [
        '125 ml de yogourt nature',
        '15 ml de garam masala',
        '30 ml de miel',
        '30 ml de persil haché'
      ]
    }
  ],
  instructions: [
    'Dans un bol, mélanger les ingrédients de la marinade pour le poulet.',
    'Dans un autre bol, mélanger les ingrédients de la marinade d’ananas.',
    'Faire mariner le poulet 4 h et faire mariner les ananas 2 h au réfrigérateur.',
    'Embrocher les cubes de poulet et d’ananas en alternance sur les branches de romarin.',
    'Faire cuire 3 min de chaque côté à la poêle ou au barbecue.',
    'Dans un récipient, mélanger les ingrédients de la sauce et la servir avec les mini-brochettes.'
  ],
  tags: ['barbecue', 'marinade sèche', 'ananas'],
  source: 'David Cloutier',
  slug: 'minibrochettes-dananas-et-de-poulet'
};
