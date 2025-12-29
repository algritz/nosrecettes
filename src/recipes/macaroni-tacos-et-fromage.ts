import { Recipe } from '@/types/recipe'

export const macaroniTacosEtFromage: Recipe = {
  id: 'macaroni-tacos-et-fromage',
  title: 'Macaroni tacos et fromage',
  description: 'Excellent souper de semaine',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 11,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de bœuf haché',
    "1 paquet d'assaisonnement à tacos en poudre",
    "2 tasses d'eau",
    '1 (15 oz) canne de tomates en dés',
    '1 (15 oz) canne de sauce tomate',
    '1 (15 oz) canne de maïs en grains entiers',
    '2 tasses de macaroni non cuits',
    'Poivre et sel',
    '3 tasses de fromage Montery Jack épicé',
  ],
  instructions: [
    'Brunir le boeuf dans un grande casserole à moyenne/haute intensité.',
    'Égouter la viande.',
    "Ajouter assaisonnement pour tacos, l'eau, les tomates, la sauce tomate et le maïs égouté.",
    'Porter à ébullition.',
    'Ajouter les pâtes non cuites et réduire la chaleur à basse température.',
    "Couvrir et laisser mijoter pendant 10-15 minutes (Jusqu'à ce que les pâtes sont cuites).",
    'Remuer de temps en temps.',
    'Retirer du feu.',
    'Saupoudrer de fromage sur le dessus et couvrir.',
    'Servir une fois le fromage est fondu !',
  ],
  tags: ['tacos', 'fromage', 'mijoteuse'],
  notes:
    'Note: Excellent souper de semaine. Accompagnement: La prochaine fois je metterai du Tex Mex comme fromage. Je les servirai aussi avec de la coriandre, des oignons vert et de la crème sûre.',
  slug: 'macaroni-tacos-et-fromage',
}
