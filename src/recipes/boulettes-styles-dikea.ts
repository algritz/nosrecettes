import { Recipe } from '@/types/recipe';

export const boulettesStylesDikea: Recipe = {
  id: 'boulettes-styles-d-ikea',
  title: 'Boulettes styles d\'IKEA',
  description: 'Recette de boulettes de viande à la sauce à la crème, inspirée du style IKEA, pour 4 personnes.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 50, max: 50 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500g de boeuf haché',
    '250g de viande de porc hachée',
    '1 oignon, finement haché',
    '1 gousse d\'ail hachée',
    '100g de chapelure',
    '1 œuf',
    '5 c. à soupe de lait',
    'sel et poivre',
    'Une pincée d\'huile',
    '40g de beurre',
    '40g de farine',
    '150 ml de bouillon de légumes',
    '150 ml de bouillon de bœuf',
    '150 ml de crème 35% ou 40%',
    '2 c. à café de sauce soja',
    '1 c. à café de moutarde de Dijon'
  ],
  instructions: [
    'Mélanger le bœuf et le porc haché et mélanger avec les mains.',
    'Ajouter l\'oignon finement haché, l\'ail, la chapelure, l\'œuf et mélanger.',
    'Ajouter le lait et bien assaisonner de sel et de poivre.',
    'Former le mélange en petites boules rondes.',
    'Placer sur une assiette propre, couvrir et conserver au réfrigérateur pendant deux heures.',
    'Dans une poêle, chauffer l\'huile à feu moyen.',
    'Lorsque l\'huile est chaude, ajouter délicatement les boulettes de viande et faire dorer de tous les côtés.',
    'Une fois doré, transférer dans un plat allant au four et couvrir.',
    'Cuire dans un four chaud à 350°F (convection 325°F) pendant 30 minutes.',
    'Pour la sauce à la crème, faire fondre le beurre dans une casserole.',
    'Incorporer la farine et remuer pendant deux minutes.',
    'Ajouter les bouillons de légumes et de bœuf, continuer à remuer.',
    'Ajouter la crème, la sauce soja et la moutarde, puis laisser mijoter jusqu\'à épaississement.'
  ],
  tags: ['boulettes', 'crème', 'cuisson au four'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/boulettes-styles-d-ikea',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/boulettes-styles-d-ikea',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/boulettes-styles-d-ikea'
    }
  ],
  source: 'David Cloutier',
  notes: 'Temps de préparation : 20 minutes. Temps de cuisson : 40 à 50 minutes. Accompagnement suggéré : pommes de terre, recette de votre choix.',
  slug: 'boulettes-styles-dikea'
};
