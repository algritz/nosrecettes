import { Recipe } from '@/types/recipe';

export const pouletTempura: Recipe = {
  id: '1766770208570',
  title: 'Poulet Tempura',
  description: 'Une recette de poulet tempura croustillant, servi avec une sauce de votre choix.',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Poulet',
      items: [
        '4 poitrines de poulet',
        'huile végétale très légère'
      ]
    },
    {
      title: 'Pâte',
      items: [
        '250 ml de farine',
        '250 ml d\'eau bien glacée',
        '1 cuillère à soupe de poudre à pâte',
        '1 cuillère à soupe de fécule de maïs'
      ]
    }
  ],
  instructions: [
    'Combiner dans un bol la farine, la poudre à pâte et la fécule; verser l\'eau glacée, ajouter plus d\'eau au besoin: la texture doit ressembler à celle d\'une pâte à crêpe épaisse.',
    'Couper le poulet en fines lanières; tremper chaque lanière dans la pâte; plonger dans l\'huile bouillante.',
    'Retirer lorsque la pâte devient légèrement dorée et croustillante.',
    'Vérifier le degré de cuisson en coupant une lanière en deux.',
    'Servir avec une sauce de votre choix.'
  ],
  tags: ['tempura', 'croustillant', 'friture'],
  accompaniment: 'servir avec la sauce du Général Tao parfait',
  source: 'David Cloutier',
  notes: 'Pour plus de croustillant, mettre 1/3 de semoule de maïs pour 2/3 de farine.',
  slug: 'poulet-tempura'
};
