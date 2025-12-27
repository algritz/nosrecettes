import { Recipe } from '@/types/recipe';

export const truitePiquante: Recipe = {
  id: 'truite-piquante',
  title: 'Truite piquante',
  description: '',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 20,
  cookTime: 20,
  marinatingTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de sauce pour fruits de mer',
    '3/4 tasse de vin blanc',
    '1 c. à soupe d’huile végétale',
    '1 c. à thé de zeste de citron râpé finement',
    'Le jus d’un citron',
    '1 gousse d’ail',
    '1 c. à thé d’origan séché',
    '2 c. à thé de gingembre frais',
    '1 c. à thé de poudre de cari',
    '1 c. à thé de Sambal Oelek',
    'Sel et poivre, au goût',
    '4 filets de truite'
  ],
  instructions: [
    'Dans un grand plat peu profond, mélanger la sauce pour fruits de mer, le vin, l\'huile, le zeste, le jus de citron, l\'ail, l\'origan, le gingembre, le cari, le sambal Oelek, le sel et le poivre.',
    'Ajouter les filets de truite. Retourner les filets afin de bien les enrober de marinade.',
    'Couvrir et laisser macérer au réfrigérateur pendant 30 minutes.',
    'Égoutter les filets et réserver la marinade.',
    'Préparer le BBQ à intensité moyenne-vive.',
    'Cuire les filets à découvert pendant environ 3 minutes de chaque côté ou jusqu\'à ce que la chair soit opaque, mais encore humide à l\'intérieur.',
    'Dans une petite casserole, faire mijoter la marinade réservée à feu moyen-vif pendant 10 minutes en brassant de temps à autres.',
    'Servir la marinade comme sauce d\'accompagnement.'
  ],
  tags: ['barbecue', 'marinade', 'poisson'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/truite-piquante',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/truite-piquante',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/truite-piquante'
    }
  ],
  accompaniment: 'Riz',
  source: 'David Cloutier',
  slug: 'truite-piquante'
};
