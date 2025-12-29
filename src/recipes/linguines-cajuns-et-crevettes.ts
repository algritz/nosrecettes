import { Recipe } from '@/types/recipe';

export const linguinesCajunsEtCrevettes: Recipe = {
  id: 'linguines-cajuns-et-crevettes',
  title: 'Linguines cajuns et crevettes',
  description: 'Une recette de linguines aux crevettes épicées et sauce crémeuse, facile à préparer en environ 30 minutes.',
  categories: ['Pâtes', 'Fruits de mer'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '340g Linguines',
    '340g de petites crevettes surgelées et décortiquées, décongelées et bien épongées',
    '30 ml d\'huile d’olive',
    '1 oignon haché',
    '1 gousse d’ail hachée',
    '5 ml de mélange d’épices cajun ou plus au goût',
    '1 boîte de 398 ml de tomate en dés',
    '½ tasse d\'eau de cuisson des pâtes',
    '¾ tasse de crème 35 %',
    '¼ tasse de fromage à la crème, coupé en dés et ramolli (65 g)',
    '45 ml de persil ciselé et plus pour la décoration'
  ],
  instructions: [
    'Dans une casserole d’eau bouillante salée, faites cuire les pâtes. Prélevez ½ tasse d’eau de cuisson. Égouttez les pâtes.',
    'Entre-temps, dans une grande poêle à feu moyen-élevé, faites cuire les crevettes de 2 à 3 minutes dans 1 c. à soupe d\'huile. Salez-les et poivrez-les. Réservez les crevettes sur une assiette.',
    'Dans la même poêle à feu moyen, attendrissez l’oignon dans le reste de l’huile. Ajoutez l’ail et les épices. Faites cuire le tout 1 minute en remuant.',
    'Ajoutez les tomates en remuant et poursuivez la cuisson jusqu’à ce que le liquide des tomates soit évaporé.',
    'Ajoutez l’eau de cuisson, la crème, le fromage à la crème et le persil. Salez, poivrez et mélangez bien la sauce jusqu’à ce qu’elle soit homogène.',
    'Ajoutez les crevettes et les pâtes. Mélangez-les pour les enrober de sauce.'
  ],
  tags: ['épices cajun', 'crémeux', 'pâtes'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/linguines-cajuns-et-crevettes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/linguines-cajuns-et-crevettes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/linguines-cajuns-et-crevettes'
    }
  ],
  source: 'David Cloutier',
  slug: 'linguines-cajuns-et-crevettes'
};
