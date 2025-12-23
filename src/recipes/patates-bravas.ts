import { Recipe } from '@/types/recipe';

export const patatesBravas: Recipe = {
  id: 'patates-bravas',
  title: 'Patates bravas',
  description: 'Patates bravas',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 20,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '3 pommes de terre',
    '45 ml d\'huile d\'olive',
    'Sel',
    '5 ml de paprika fumé',
    'Persil frais, haché',
    '[object Object]'
  ],
  instructions: [
    'Préchauffer le four à 350 °F (180 °C).',
    'Couper les pommes de terre en cubes.',
    'Les placer dans un plat allant au four et asperger d’huile d’olive.',
    'Ajouter du sel, bien mélanger et cuire au four 15 min.',
    'Mettre de l’huile d’olive dans une casserole sur un feu moyen.',
    'Ajouter l’oignon, l’ail, le piment en flocons, les tomates broyées et le poivron.',
    'Assaisonner et laisser mijoter.',
    'Lorsque les pommes de terre sont cuites, les transférer dans un bol et ajouter du persil et du paprika fumé.',
    'Bien mélanger.',
    'Servir avec la sauce napolitaine.'
  ],
  tags: ['friture', 'tomates', 'mijoteuse'],
  notes: 'Excellentes patates même sans la sauce',
  slug: 'patates-bravas'
};
