import { Recipe } from '@/types/recipe';

export const maisAuLaitDeCocoPiquant: Recipe = {
  id: 'mais-au-lait-de-coco-piquant',
  title: 'Maïs au lait de coco piquant',
  description: 'Une recette de maïs épicé et crémeux au lait de coco, parfait pour une entrée ou un accompagnement.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 30,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '6 épis de maïs',
    '2 boîtes de lait de coco',
    '2 cuillères à soupe de Sambal Oelek',
    '1 tasse 1/2 (375ml) de coriandre finement hachée',
    '2 cuillères à thé (10ml) de sel',
    '1 cuillère à thé (5ml) de poivre'
  ],
  instructions: [
    'Éplucher les épis de maïs et les couper en 2.',
    'Faire cuire dans une grande casserole d\'eau bouillante pendant environ 10 minutes.',
    'Pendant ce temps, dans une autre casserole, mélanger le lait de coco, le Sambal Oelek, la coriandre, le sel et le poivre.',
    'Porter à ébullition et ajouter les maïs, puis réduire le feu et laisser mijoter doucement pendant 10 minutes.',
    'Quand le maïs est cuit, laisser reposer 10-12 minutes dans la sauce.',
    'Servir les maïs bien chauds et nappés de sauce.'
  ],
  tags: ['épicé', 'coco', 'maïs'],
  slug: 'mais-au-lait-de-coco-piquant'
};
