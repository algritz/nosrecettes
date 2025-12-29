import { Recipe } from '@/types/recipe';

export const peluresDePommesDeTerreAux3Fromages: Recipe = {
  id: 'pelures-de-pommes-de-terre-aux-3-fromages',
  title: 'Pelures de pommes de terre aux 3 fromages',
  description: 'Une recette savoureuse de pelures de pommes de terre garnies de trois fromages, parfaites en accompagnement de steaks.',
  categories: ['Végétarien', 'Accompagnements'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 pommes de terre Russet moyennes, bien lavées et piquées à la fourchette',
    '125 ml (½ tasse) de fromage mascarpone ou fromage à la crème, ramolli',
    '250 ml (1 tasse) de fromage cheddar jaune râpé',
    '125 ml (½ tasse) de fromage parmigiano reggiano râpé',
    'Sel et poivre'
  ],
  instructions: [
    'Dans un four à micro-ondes, cuire les pommes de terre, à puissance maximale, de 8 à 10 minutes ou jusqu’à ce qu’elles soient tendres.',
    'Laisser tiédir.',
    'Couper chaque pomme de terre en deux sur la longueur.',
    'Retirer la chair des pommes de terre en laissant un pourtour d’environ ½ cm (¼ po). Réserver la chair pour un autre usage.',
    'Huiler l’intérieur. Saler et poivrer.',
    'Mettre les pelures de pommes de terre dans un contenant hermétique. Réfrigérer.',
    'Préchauffer la moitié du barbecue à puissance moyenne. Huiler la grille.',
    'Dorer les pelures de pommes de terre, côté chair vers le bas. Réserver sur une plaque.',
    'Répartir le mascarpone à l’intérieur des pelures de pommes de terre.',
    'Parsemer de fromage cheddar et de parmesan.',
    'Déposer les pelures de pommes de terre sur la section éteinte du barbecue.',
    'Fermer le couvercle et cuire environ 10 minutes jusqu’à ce que le fromage soit bien fondu.'
  ],
  tags: ['fromage', 'barbecue', 'garniture'],
  notes: 'Préparation totale : 50 minutes. Accompagnement recommandé pour steaks.',
  slug: 'pelures-de-pommes-de-terre-aux-3-fromages'
};
