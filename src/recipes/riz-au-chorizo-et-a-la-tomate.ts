import { Recipe } from '@/types/recipe';

export const rizAuChorizoEtALaTomate: Recipe = {
  id: 'riz-au-chorizo-et-a-la-tomate',
  title: 'Riz au chorizo et à la tomate',
  description: 'Ce fait aussi en rizotto, voir dans les notes plus bas.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
        '200g de riz Basmati',
        '150g de chorizo, coupé en rondelles',
        '400g de tomates en dés en boîte',
        '1 oignon émincé',
        '2 gousses d\'ail hachées',
        '1 Cuillère à soupe de paprika',
        '1 Cuillère à café de sel',
        '1/2 Cuillère à café de poivre noir',
        '1 Cuillère à soupe d\'huile d\'olive',
        'Quelques feuilles de basilic frais',
        '50g de fromage râpé'
      ]
    },
    {
      title: 'Version risotto',
      items: [
        '1 litre de bouillon de poulet ',
        'Remplacer le riz basmati par 250g de riz arabio (riz à risotto)',
        'remplacer le fromage râpé par 1 tasse de mozzarella râpé'
      ]
    }
  ],
  instructions: [
    'Dans une grande casserole, fais chauffer l’huile d’olive à feu moyen.',
    'Ajoute l’oignon et faire revenir jusqu’à ce qu’il devienne translucide.',
    'Ajoute le chorizo en rondelles et faire cuire jusqu’à ce qu’il soit bien doré.',
    'Ajoute l’ail haché et faire revenir pendant 1 minute jusqu’à ce qu’il dégage son parfum.',
    'Verse les tomates en dés dans la casserole, puis ajoute le paprika, le sel et le poivre.',
    'Mélange bien et laisse mijoter pendant environ 10 minutes.',
    'Ajoute le riz à la préparation et mélange pour bien l’enrober de sauce.',
    'Verse 400 ml d’eau dans la casserole, porte à ébullition, puis réduis le feu et couvre.',
    'Laisse cuire à feu doux pendant 15 à 20 minutes, ou jusqu’à ce que le riz soit tendre et que le liquide soit absorbé.',
    'Ajoute quelques feuilles de basilic frais pour une touche de fraîcheur.',
    'Saupoudre de fromage râpé avant de servir.'
  ],
  tags: ['tomate', 'chorizo', 'riz'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/riz_chorizo_tomates',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/riz_chorizo_tomates',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/riz_chorizo_tomates'
    }
  ],
  source: 'David Cloutier',
  slug: 'riz-au-chorizo-et-a-la-tomate'
};
