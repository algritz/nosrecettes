import { Recipe } from '@/types/recipe';

export const casseroleDePommeDeTerreFaconTacos: Recipe = {
  id: 'casserole-de-pomme-de-terre-facon-tacos',
  title: 'Casserole de pomme de terre façon tacos',
  description: '',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 20,
  cookTime: 40,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '750 g de pommes de terre, coupées en dés',
    '1 lb de bœuf hachée (vous pouvez aussi prendre du poulet haché)',
    '1 oignon, haché',
    '1 sachet d\'assaisonnement à tacos',
    '1 tasse de crème 35%',
    '1 tasse de fromage cheddar râpé',
    '1 tasse de salsa',
    '1 1/2 tasse de maïs en grain (congelé ou en canne)',
    '1 poivron, coupé en dés',
    'Sel et poivre au goût',
    'Coriandre fraiche au goût'
  ],
  instructions: [
    'Préchauffez votre four à 350°F.',
    'Faites cuire les pommes de terre dans de l\'eau bouillante jusqu\'à ce qu\'elles soient tendres.',
    'Égouttez et réservez.',
    'Faites revenir l\'oignon dans une poêle, puis ajoutez la viande hachée.',
    'Ajouter l\'assaisonnement à tacos, le maïs et le piment.',
    'Laissez cuire jusqu\'à ce que la viande soit dorée.',
    'Dans un grand plat à gratin, mélangez les pommes de terre cuites, la viande hachée, la crème fraîche, la salsa, Saler et poivrer.',
    'Saupoudrez de fromage râpé.',
    'Enfournez pendant 20 minutes, jusqu\'à ce que le fromage soit fondu et doré.',
    'Parsemer de la coriandre fraiche et laisser reposer 5 minutes.',
    'Servez chaud, accompagné de crème sûre et de guacamole si désiré.'
  ],
  tags: ['tacos', 'gratin', 'pomme de terre'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/casserole-de-pomme-de-terre-facon-tacos',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/casserole-de-pomme-de-terre-facon-tacos',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/casserole-de-pomme-de-terre-facon-tacos'
    }
  ],
  source: 'David Cloutier',
  slug: 'casserole-de-pomme-de-terre-facon-tacos'
};
