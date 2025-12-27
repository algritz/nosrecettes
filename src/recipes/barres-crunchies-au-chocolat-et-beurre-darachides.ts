import { Recipe } from '@/types/recipe';

export const barresCrunchiesAuChocolatEtBeurreDarachides: Recipe = {
  id: 'barres-crunchies-au-chocolat-et-beurre-d-arachides',
  title: 'Barres crunchies au chocolat et beurre d’arachides',
  description: 'Recette de barres crunchies au chocolat et beurre d’arachides avec ingrédients simples et préparation rapide.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 5,
  cookTime: 10,
  servings: 25,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses (750 ml) de Rice Krispies',
    '1 tasse et demie (375 ml) de pépites de chocolat',
    '1 tasse (250 ml) de beurre d’arachides',
    '1/2 tasse (125 ml) de sirop d’érable',
    '1/4 de tasse (65 ml) d’huile de noix de coco'
  ],
  instructions: [
    'Tapissez un plat pyrex de 8 x 8 d’une feuille de papier parchemin et mettre de côté.',
    'Dans un grand bol, mettre les Rice Krispies.',
    'Dans un chaudron, combinez le restant des ingrédients et faites chauffer jusqu’à ce que tout soit fondu. Mélanger.',
    'Verser par dessus les céréales et bien mélanger.',
    'Verser dans le plat pyrex et réfrigérer jusqu’à ce que ça soit ferme.',
    'Retirez et coupez en barres!'
  ],
  tags: ['chocolat', 'beurre d’arachides', 'rapide'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/barres-crunchies-au-chocolat-et-beurre-d-arachides',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/barres-crunchies-au-chocolat-et-beurre-d-arachides',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/barres-crunchies-au-chocolat-et-beurre-d-arachides'
    }
  ],
  source: 'David Cloutier',
  slug: 'barres-crunchies-au-chocolat-et-beurre-darachides'
};
