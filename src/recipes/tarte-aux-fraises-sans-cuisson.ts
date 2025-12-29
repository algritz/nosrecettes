import { Recipe } from '@/types/recipe';

export const tarteAuxFraisesSansCuisson: Recipe = {
  id: 'tarte-aux-fraises-sans-cuisson',
  title: 'Tarte aux fraises sans cuisson',
  description: 'Une tarte aux fraises sans cuisson avec une croûte Oreo, une garniture au chocolat et des fraises fraîches, à préparer rapidement et à réfrigérer avant de servir.',
  categories: ['Desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 11,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Croûte',
      items: [
      '32 (330g) biscuits Oreo',
      '1/2 tasse (110g) de beurre fondu'
      ]
    },
    {
      title: 'Garniture au chocolat',
      items: [
      '7 oz (200 g) de chocolat au lait',
      '3,5 oz (100 g) de chocolat mi-amer',
      '7 oz (200 ml) de crème épaisse'
      ]
    },
    {
      title: 'Garniture',
      items: [
      '10 oz (300 g) de fraises fraîches',
      'Noix hachées (amandes, pistaches, etc.), en option'
      ]
    }
  ],
  instructions: [
    'Placez les biscuits Oreo dans le bol d\'un robot culinaire et mélangez jusqu\'à obtenir une chapelure.',
    'Faites fondre le beurre et versez-le sur les biscuits écrasés. Mélangez à nouveau jusqu\'à ce que le mélange soit bien humecté.',
    'Presser le mélange à biscuits avec le dos d\'une cuillère et vos doigts dans le fond et les bords d\'un moule à tarte rectangulaire de 5x14 pouces (12 x 36 cm). Congeler le temps de préparer le reste, soit quelques minutes.',
    'Dans une petite casserole, placer la crème à feu moyen-doux et faire chauffer jusqu\'à ce qu\'elle frémisse à peine. Retirer du feu, verser sur le chocolat haché et laisser reposer 1-2 minutes. Remuer jusqu\'à dissolution.',
    'Verser la garniture au chocolat sur la croûte Oreo, puis garnir de fraises fraîches. Réfrigérer pendant au moins 2 heures ou toute la nuit avant de servir.'
  ],
  tags: ['sans cuisson', 'chocolat', 'fraises'],
  marinatingTime: { min: 120, max: 120 },
  slug: 'tarte-aux-fraises-sans-cuisson'
};
