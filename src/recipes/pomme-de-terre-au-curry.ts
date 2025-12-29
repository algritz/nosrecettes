import { Recipe } from '@/types/recipe'

export const pommeDeTerreAuCurry: Recipe = {
  id: '1764531803575',
  title: 'Pomme de terre au curry',
  description:
    'Pommes de terre en curry épicé avec tomate, oignon et épices moulues au mortier, finition crème (ou lait de coco).',
  categories: ['Légumes', 'Végétarien', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 pommes de terre, coupées en gros dés',
    '1 tomate, coupée en dés',
    '1 gros oignon',
    '1 cm de gingembre frais',
    "1 gousse d'ail",
    '1 piment thaï',
    '1 c. à thé de graines de cumin',
    '1/2 c. à thé de graines de moutarde',
    '1 c. à thé de graines de coriandre',
    '1 c. à thé de curcuma',
    '1 c. à thé de curry',
    '1 c. à thé de garam masala',
    '1/4 de tasse de crème 35 %',
    '1 c. à thé de cassonade',
    "Huile d'olive",
    'Sel et poivre noir',
    'Persil et/ou coriandre et/ou menthe fraîche, pour la décoration',
  ],
  instructions: [
    'Couper les pommes de terre en gros dés et les faire bouillir jusqu’à al dente; égoutter et réserver.',
    'Hacher grossièrement l’oignon. Hacher finement l’ail, le gingembre et le piment thaï.',
    'Au mortier, moudre les graines de moutarde, de cumin et de coriandre. Ajouter le curry et le garam masala et mélanger.',
    'Dans un wok, chauffer un filet d’huile d’olive, puis faire revenir l’oignon, l’ail, le gingembre et le piment thaï.',
    'Ajouter la tomate en dés et faire revenir environ 5 minutes.',
    'Ajouter les pommes de terre égouttées et bien mélanger.',
    'Ajouter le mélange d’épices et bien enrober.',
    'Ajouter la crème et la cassonade; mélanger, puis saler et poivrer au besoin.',
    'Avant de servir, ajouter du persil, de la coriandre et/ou de la menthe pour plus de fraîcheur.',
  ],
  tags: ['curry', 'garam masala', 'épices entières'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pomme_terre_curry',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pomme_terre_curry',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pomme_terre_curry',
    },
  ],
  source: 'David Cloutier',
  notes: 'On peut remplacer la crème par du lait de coco.',
  slug: 'pomme-de-terre-au-curry',
}
