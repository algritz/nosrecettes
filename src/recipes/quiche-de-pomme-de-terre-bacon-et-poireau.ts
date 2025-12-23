import { Recipe } from '@/types/recipe';

export const quicheDePommeDeTerreBaconEtPoireau: Recipe = {
  id: 'quiche-de-pomme-de-terre-bacon-et-poireau',
  title: 'Quiche de pomme de terre, bacon et poireau',
  description: 'Une quiche qui sort de l\'ordinaire',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 25,
  cookTime: 80,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    'environ 700 g de pomme de terres',
    '50 ml d’huile d’olive + 1 filet',
    '200 g yogourt grec',
    '2 œufs',
    '1 cuillère à soupe de moutarde douce',
    '50 g de parmesan',
    '50 ml de lait',
    'environ 1 gros poireau',
    '150 g de bacon haché en petit morceau',
    '1 demi oignon blanc',
    'Un peu de fromage râpé'
  ],
  instructions: [
    'Cuire les pommes de terre environ 30 minutes dans l\'eau bouillante salée.',
    'Place les pommes de terre cuites dans un moule à tarte et écrase-les avec le fond d’un verre.',
    'Badigeonner avec les 50 ml d’huile d’olive avec un pinceau.',
    'Enfourner 40 min à 350F (en surveillant et en modifiant en fonction de l’épaisseur du fond de tarte en pomme de terre, et en fonction du four).',
    'Faire sauter le bacon haché.',
    'Couper le poireau et le demi oignon et ajouter au bacon qui cuit.',
    'Verser sur la croûte.',
    'Mélanger dans un récipient le yogourt grec, les œufs, la moutarde, le parmesan et le lait.',
    'Ajouter ce mélange sur la quiche.',
    'Ajouter un peu de fromage râpé puis enfourner environ 30 à 40 minutes à 350F.',
    'Laisser reposer quelques minutes et servir.'
  ],
  tags: ['quiche', 'pomme de terre', 'bacon'],
  slug: 'quiche-de-pomme-de-terre-bacon-et-poireau'
};
