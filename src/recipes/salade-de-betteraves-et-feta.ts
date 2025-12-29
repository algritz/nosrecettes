import { Recipe } from '@/types/recipe'

export const saladeDeBetteravesEtFeta: Recipe = {
  id: 'salade-de-betteraves-et-feta',
  title: 'Salade de betteraves et feta',
  description: 'Salade de betteraves rafraîchissante',
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 lbs de petites betteraves',
    '1 cuillère à soupe d’huile d’olive',
    '2 cuillères à thé de vinaigre de vin blanc',
    '1 pincée de sel',
    '1 pincée de poivre noir du moulin',
    '1 pincée de sucre',
    '1/4 tasse de fromage féta émietté',
    '1 cuillère à soupe de menthe fraîche hachée',
  ],
  instructions: [
    'Dans une casserole d’eau bouillante salée, cuire les betteraves à couvert pendant environ 20 minutes ou jusqu’à ce qu’elles soient tendres.',
    'Égoutter et passer sous l’eau froide pour les refroidir.',
    'À l’aide d’un couteau, enlever la peau. Couper en deux ou en quartiers.',
    'Entre-temps, dans un bol, mélanger l’huile, le vinaigre de vin, le sel, le poivre et le sucre.',
    'Disposer les betteraves sur une assiette de service et les arroser de la vinaigrette.',
    'Parsemer du fromage feta et de la menthe.',
  ],
  tags: ['salade', 'betteraves', 'feta'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-betteraves-et-feta',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-betteraves-et-feta',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-betteraves-et-feta',
    },
  ],
  source: 'David Cloutier',
  slug: 'salade-de-betteraves-et-feta',
}
