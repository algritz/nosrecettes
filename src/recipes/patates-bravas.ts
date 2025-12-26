import { Recipe } from '@/types/recipe';

export const patatesBravas: Recipe = {
  id: '1766771017858',
  title: 'Patates bravas',
  description: 'Patates bravas',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 20,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
        '3 pommes de terre',
        '45 ml d\'huile d\'olive',
        'Sel',
        '5 ml de paprika fumé',
        'Persil frais, haché'
      ]
    },
    {
      title: 'Sauce Napolitaine',
      items: [
        '30 ml d\'huile d\'olive',
        '1/2 oignon rouge, coupé en dés',
        '2 gousses d\'ail, broyées',
        '5 ml de piments en flocons',
        '1 boîte de tomates broyées',
        '1/2 poivron vert, coupé en dés',
        '1/2 poivron rouge, coupé en dés'
      ]
    }
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
  source: 'David Cloutier',
  notes: 'Excellentes patates même sans la sauce',
  slug: 'patates-bravas'
};
