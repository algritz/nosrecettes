import { Recipe } from '@/types/recipe';

export const cariDeBUfHache: Recipe = {
  id: 'cari-de-b-uf-hache',
  title: 'Cari de bœuf haché',
  description: 'Un curry savoureux à base de bœuf haché, légumes et épices, servi avec du riz blanc.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 15,
  cookTime: 40,
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
  slug: 'cari-de-b-uf-hache'
};
