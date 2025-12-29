import { Recipe } from '@/types/recipe';

export const ramenThaiCariCoco: Recipe = {
  id: 'ramen-thai-cari-coco',
  title: 'Ramen thai cari-coco',
  description: 'Une soupe de ramen parfumée au curry rouge, lait de coco et porc haché, garnie d\'œufs pochés et de coriandre fraîche.',
  categories: ['Soupes', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 25, max: 25 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 paquets de nouilles ramen instantanée, jeter la saveur',
    '1 ½ cuillères à soupe d\'huile de canola',
    '2 échalotes moyennes, coupées en dés',
    '3 cuillères à soupe de pâte de curry rouge',
    '2 cuillères à soupe de concentré de tomate',
    '2 gousses d\'ail, hachées',
    '1 cuillère à soupe de gingembre fraîchement râpé',
    '1 boîte de lait de coco',
    '4 tasses de bouillon de poulet',
    '2 cuillères à café d\'huile de sésame grillé',
    '1 livre de porc haché',
    '2 gousses d\'ail, hachées',
    '1 piment Fresno, épépiné et émincé',
    '2 cuillères à soupe de sauce de poisson',
    'Sel casher et poivre noir fraîchement moulu, au goût',
    '2 œufs pochés, coupés en deux',
    '½ tasse de feuilles de coriandre fraîche',
    '2 oignons verts, tranchés finement',
    '1 cuillère à soupe de graines de sésame grillées'
  ],
  instructions: [
    'Dans une grande casserole d\'eau bouillante, cuire les nouilles jusqu\'à ce qu\'elles soient juste tendres, environ 2-3 minutes. Rincer sous l\'eau froide et égoutter; mettre de côté.',
    'Chauffer l\'huile de canola dans une grande marmite ou une cocotte à feu moyen. Ajouter l\'échalote et cuire, en remuant fréquemment, jusqu\'à ce qu\'elle soit tendre, environ 3 minutes.',
    'Incorporer la pâte de curry, la pâte de tomate, l\'ail et le gingembre jusqu\'à ce qu\'ils soient parfumés, environ 2 minutes.',
    'Incorporer le lait de coco et le bouillon de poulet. Porter à ébullition; réduire le feu, couvrir et laisser mijoter jusqu\'à ce que les saveurs se mélangent, environ 8 à 10 minutes.',
    'Chauffer l\'huile de sésame dans une grande poêle en fonte à feu moyen-vif. Ajouter le porc, l\'ail et le piment Fresno. Cuire jusqu\'à ce que le porc soit doré, environ 3 à 5 minutes, en veillant à émietter le porc pendant la cuisson.',
    'Incorporer la sauce poisson; Assaisonner avec du sel et du poivre selon votre goût.',
    'Répartir les nouilles et le bouillon dans des bols. Garnir de porc, d\'un œuf poché, de coriandre, d\'oignons verts et de graines de sésame.'
  ],
  tags: ['curry', 'lait de coco', 'ramen'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/ramen-thai-cari-coco',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/ramen-thai-cari-coco',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/ramen-thai-cari-coco'
    }
  ],
  source: 'David Cloutier',
  slug: 'ramen-thai-cari-coco'
};
