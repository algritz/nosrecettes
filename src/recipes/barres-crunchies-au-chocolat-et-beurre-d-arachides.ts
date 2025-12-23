import { Recipe } from '@/types/recipe';

export const barresCrunchiesAuChocolatEtBeurreDArachides: Recipe = {
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
  slug: 'barres-crunchies-au-chocolat-et-beurre-d-arachides'
};
