import { Recipe } from '@/types/recipe';

export const cariDeBufHache: Recipe = {
  id: 'cari-de-b-uf-hache',
  title: 'Cari de bœuf haché',
  description: 'Un curry savoureux à base de bœuf haché, légumes et épices, servi avec du riz blanc.',
  categories: ['Plats principaux', 'Boeuf'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de bœuf haché',
    '200 ml coulis de tomates',
    '2 carottes',
    '2 à 3 pommes de terre',
    '1 oignon jaune',
    '1 gousse ail',
    'quantité suffisante d\'eau',
    '1 cuillère à soupe cassonade',
    '4 cuillères à café cari',
    '1 cuillère à café curcuma',
    '1 cuillère à soupe farine',
    'huile d\'olive',
    'sel et poivre'
  ],
  instructions: [
    'Pelez et ciselez finement l\'oignon et l\'ail.',
    'Pelez les pommes de terre et les carottes puis coupez-les en petits dés.',
    'Dans une cocotte, faites revenir l\'oignon et l\'ail dans un peu d\'huile d\'olive.',
    'Ajoutez le boeuf haché, salez et poivrez puis laissez dorer en remuant régulièrement.',
    'Couvrez à hauteur avec de l\'eau puis couvrez et laissez cuire à frémissement pendant 10 minutes en remuant de temps en temps.',
    'Ajoutez les pommes de terre et les carottes dans la cocotte.',
    'Couvrez à nouveau et poursuivez la cuisson 10 minutes, jusqu\'à ce que les légumes deviennent tendres.',
    'Ajoutez le coulis de tomates, la cassonade, les épices et la farine.',
    'Mélangez bien, rectifiez l\'assaisonnement et laissez cuire encore 10 minutes à découvert.',
    'Servez bien chaud avec du riz blanc.'
  ],
  tags: ['curry', 'épices', 'légumes'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/cari-de-b-uf-hache',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/cari-de-b-uf-hache',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/cari-de-b-uf-hache'
    }
  ],
  source: 'David Cloutier',
  slug: 'cari-de-buf-hache'
};
