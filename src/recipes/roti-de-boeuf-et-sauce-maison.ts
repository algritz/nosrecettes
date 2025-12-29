import { Recipe } from '@/types/recipe';

export const rotiDeBoeufEtSauceMaison: Recipe = {
  id: 'roti-de-boeuf-et-sauce-maison',
  title: 'Rôti de boeuf et sauce maison',
  description: '',
  categories: ['Boeuf', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Roast beef de 3 kg',
    'huile d\'olive',
    '½ tête de céleri',
    '2 carottes',
    '1 oignon',
    '3 gousses d\'ail',
    '3 feuilles de laurier fraîches',
    '3 brins de romarin frais',
    '1 cuillère à soupe de farine',
    '1 cuillère à soupe de confiture de mûres ou de cassis',
    '125 ml de vin rouge',
    '1 litre de bouillon de bœuf'
  ],
  instructions: [
    'Sortez le bœuf du réfrigérateur 1 heure avant de le faire cuire pour le laisser remonter à température ambiante.',
    'Préchauffez le four à 350 °F.',
    'Arrosez le bœuf avec 1½ cuillère à soupe d\'huile, assaisonnez avec une pincée de sel et une bonne pincée de poivre noir, puis frottez sur toute la viande.',
    'Hachez grossièrement le céleri et les carottes en gros morceaux, épluchez et hachez l\'oignon en quartiers, et coupez en deux chaque gousse d\'ail. Mettez les légumes de côté.',
    'Placez un plateau à rôtir de 25 cm x 35 cm sur le rond de cuisson à feu vif, arrosez d\'une cuillère à soupe d\'huile, puis saisissez le bœuf pendant quelques minutes, jusqu\'à ce qu\'il soit doré.',
    'Mettez le roast beef de côté dans une assiette.',
    'Déposez les légumes dans le plateau à rôtir avec le romarin et les feuilles de laurier.',
    'Faites sauter les légumes 2-3 minutes et bien mélangez pour enrober les légumes des jus de cuisson.',
    'Remettez la pièce de viande avec les légumes puis faites rôtir au four pendant 1 heure et 15 minutes pour une cuisson moyenne et rosée, ou selon votre préférence.',
    'Arrosez le bœuf à mi-cuisson et, si les légumes semblent secs, ajoutez un filet d\'eau sur le plateau pour éviter qu\'ils ne brûlent.',
    'Retirez le bœuf dans un plat, couvrez de papier d\'aluminium et laissez reposer pendant que vous préparez la sauce.',
    'Dans un chaudron, placez les légumes et le jus de cuisson, faites cuire à feu moyen.',
    'Saupoudrez de farine les légumes, incorporez la confiture, puis versez le vin et laissez bouillir 1-2 minutes.',
    'Ajoutez le bouillon de bœuf, portez à ébullition, puis baissez le feu à doux et laissez mijoter environ 30 minutes ou jusqu\'à épaississement, en remuant de temps en temps.',
    'Écrasez le tout avec un pilon à pommes de terre.',
    'Lorsque la sauce a la consistance désirée, filtrez-la à travers un tamis dans une casserole, en poussant avec le dos d\'une cuillère pour récupérer le maximum.',
    'Découpez le bœuf en fines tranches et servez avec la sauce et des pommes de terre.'
  ],
  tags: ['rôti', 'sauce maison', 'bœuf'],
  slug: 'roti-de-boeuf-et-sauce-maison'
};
