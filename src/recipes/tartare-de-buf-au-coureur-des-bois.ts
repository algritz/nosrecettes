import { Recipe } from '@/types/recipe';

export const tartareDeBufAuCoureurDesBois: Recipe = {
  id: 'tartare-de-b-uf-au-coureur-des-bois',
  title: 'Tartare de bœuf au Coureur des bois',
  description: 'Tartare de bœuf au Coureur des bois',
  categories: ['Plats principaux', 'Tartares', 'Boeuf'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de boeuf à tartare coupé en cube',
    '1 c. à soupe de câpres hachées',
    '1 c. à soupe d\'échalotes françaises hachées finement',
    '1 c. à soupe de cornichons vinaigrés hachés finement',
    '1 c. à soupe ou plus au besoin de Wisky à l\'érable style Coureur des bois',
    '1 c. à thé de tabasco',
    '1 c. à thé de sauce Worcestershire',
    '1 c. à thé d\'huile d\'olive',
    '1/2 c. à thé de moutarde de dijon',
    '1/2 jaune d\'oeuf',
    'Sel et poivre',
    'Sambal olek au goût'
  ],
  instructions: [
    'Préparer la viande et garder au frais.',
    'Mélanger tous les autres ingrédients.',
    'Ajouter le boeuf.',
    'Rectifier le goût épicé avec le sambal Olek au besoin.'
  ],
  tags: ['bœuf', 'tartare', 'piquant'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-b-uf-au-coureur-des-bois',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-b-uf-au-coureur-des-bois',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-b-uf-au-coureur-des-bois'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-buf-au-coureur-des-bois'
};
