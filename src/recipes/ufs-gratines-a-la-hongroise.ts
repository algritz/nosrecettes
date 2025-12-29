import { Recipe } from '@/types/recipe';

export const ufsGratinesALaHongroise: Recipe = {
  id: 'ufs-gratines-a-la-hongroise',
  title: 'Œufs gratinés à la hongroise',
  description: 'Parfait pour un bon petit diner Œufs gratinés à la hongroise.',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 œufs',
    '1 petit oignon haché finement',
    '2 c. à soupe de pâte de tomate',
    '1 tasse de vin blanc ou de bouillon de légume',
    '180 ml de crème 35%',
    '120 g de fromage râpé, de préférence du gouda',
    'Sel et poivre',
    'Huile d\'olive'
  ],
  instructions: [
    'Faire cuire les œufs 10 minutes dans l\'eau bouillante pour qu\'ils soient durs. Après la cuisson, les tremper dans l\'eau glacée pour qu\'il soit facile à écaler.',
    'Dans un poêlon faire revenir l\'oignon dans de l\'huile d\'olive. Une fois l\'oignon translucide, ajouter la pâte de tomate et le vin blanc et laisser mijoter 5 minutes.',
    'Ajouter la crème, le sel et le poivre et laisser mijoter environ 20 minutes.',
    'Préchauffer le four à 350F.',
    'Écaler les œufs durs et couper les en deux.',
    'Mettre les œufs côté jaune d\'œuf vers le bas dans un plat graissé allant au four.',
    'Verser la sauce sur les œufs.',
    'Gratiner de fromage.',
    'Faire cuire environ 10 minutes.'
  ],
  tags: ['fromage', 'mijoteuse', 'gratin'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/ufs-gratines-a-la-hongroise',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/ufs-gratines-a-la-hongroise',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/ufs-gratines-a-la-hongroise'
    }
  ],
  source: 'David Cloutier',
  slug: 'ufs-gratines-a-la-hongroise'
};
