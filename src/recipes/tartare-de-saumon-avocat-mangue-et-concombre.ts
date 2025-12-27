import { Recipe } from '@/types/recipe';

export const tartareDeSaumonAvocatMangueEtConcombre: Recipe = {
  id: 'tartare-de-saumon-avocat-mangue-et-concombre',
  title: 'Tartare de saumon, avocat, mangue et concombre',
  description: 'Un tartare frais et coloré combinant saumon, avocat, mangue et concombre, parfait pour une entrée légère.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '3/4 lb filets de saumon',
    '1 avocat',
    '1/2 mangue',
    '1/2 tasse concombre (le centre retiré)',
    '2 limes',
    '1/2 zeste de lime',
    '1/2 échalote française coupée finement',
    '1/4 tasse oignon vert coupé finement',
    'fleur de sel au goût',
    'poivre du moulin au goût',
    'persil frais au goût',
    '1 1/2 cuillère à soupe huile d\'olive'
  ],
  instructions: [
    'Enlever la peau du saumon et couper celui-ci en petits cubes. Réserver au frais dans un cul-de-poule.',
    'Couper tous les aliments et les regrouper avec le saumon frais.',
    'Bien mélanger et laisser reposer une dizaine de minutes au réfrigérateur pour que la préparation prenne du goût.',
    'Servir avec des croûtons coupés en biseau sur une planche ou dans une assiette à l\'aide d\'un emporte-pièce.',
    'Décorer avec des herbes fraîches.'
  ],
  tags: ['frais', 'citron vert', 'entrée'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-avocat-mangue-et-concombre',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-avocat-mangue-et-concombre',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-avocat-mangue-et-concombre'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-saumon-avocat-mangue-et-concombre'
};
