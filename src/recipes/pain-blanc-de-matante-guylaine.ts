import { Recipe } from '@/types/recipe'

export const painBlancDeMatanteGuylaine: Recipe = {
  id: 'pain-blanc-de-matante-guylaine',
  title: 'Pain blanc de matante Guylaine',
  description:
    "Une recette de pain blanc maison, croustillant à l'extérieur et moelleux à l'intérieur, nécessitant environ 4 heures de préparation.",
  categories: ['Pain'],
  prepTime: { min: 240, max: 240 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 sachets de levure active sèche',
    '2 c. à thé de sucre',
    "1/2 tasse d'eau tiède",
    '2 tasses de lait tiède',
    "2 tasses d'eau tiède",
    '1/4 tasse de sucre',
    '5 c. à thé de sel',
    '1/4 tasse de shortening',
    '12 à 13 tasses de farine tout usage Five Roses',
  ],
  instructions: [
    "Dissoudre 2 c. à thé de sucre dans 1/2 tasse d'eau chaude (110°F).",
    'Saupoudrer la levure et laisser reposer 10 minutes; remuer.',
    'Faire frémir le lait.',
    'Dans un grand bol, mesurer le sucre, le sel et le shortening.',
    "Ajouter le lait tiède et brasser jusqu'à ce que le shortening soit fondu.",
    "Ajouter l'eau; laisser tiédir.",
    'Ajouter la levure au mélange de lait tiède.',
    'Ajouter 6 tasses de farine, battre vigoureusement.',
    'Ajouter graduellement de 6 à 7 tasses de farine de plus tout en mélangeant parfaitement.',
    "Pétrir sur une planche légèrement enfarinée jusqu'à consistance lisse et satinée, 8 à 10 minutes environ.",
    'Mettre dans un bol graissé; rouler pour en graisser la surface.',
    'Couvrir; laisser doubler de volume (environ 1 heure) dans un endroit chaud et humide (85°F).',
    "Rompre d'un coup de poing; laisser encore une fois doubler de volume (45 minutes).",
    'Diviser en 4 parties égales et façonner en pâtons; mettre dans des moules graissés de 8 1/2" x 4 1/2" x 2 1/2".',
    'Couvrir; laisser doubler de volume (1 heure environ).',
    'Cuire à 375°F, de 40 à 45 minutes.',
  ],
  tags: ['pain maison', 'levure sèche', 'cuisson au four'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pain-blanc-de-matante-guylaine',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pain-blanc-de-matante-guylaine',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pain-blanc-de-matante-guylaine',
    },
  ],
  source: 'David Cloutier',
  slug: 'pain-blanc-de-matante-guylaine',
}
