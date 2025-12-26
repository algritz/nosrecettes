import { Recipe } from '@/types/recipe';

export const patatesDoucesCheddarEtPacanes: Recipe = {
  id: 'patates-douces-cheddar-et-pacanes',
  title: 'Patates douces cheddar et pacanes',
  description: 'Patates douces garnies d\'un mélange de fromage, ciboulette et pacanes, gratinées au four.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 20,
  cookTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de gros sel',
    '4 grosses patates douces, nettoyées',
    '1/4 tasse de fromage à la crème, tempéré',
    '1 tasse de cheddar jaune fort râpé',
    '1/4 tasse de ciboulette fraîche ciselée',
    '1/4 de c. à thé de sel d\'ail',
    '3/4 tasse de pacanes, hachées grossièrement',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Préchauffer le four à 400°F.',
    'Dans un plat de cuisson, répartir le sel. Y enfoncer les patates.',
    'Cuire au four 45 minutes ou jusqu’à ce qu’elles soient très tendres.',
    'Retirer du four et laisser tiédir 10 minutes.',
    'Faire une incision dans la pelure des pommes de terre et retirer la chair à la cuillère en conservant environ 1 cm de chair au fond des patates.',
    'Déposer la chair dans un bol.',
    'À l’aide d’un pilon, l’écraser avec le fromage à la crème, la moitié du cheddar, la ciboulette et le sel d\'ail.',
    'Ajouter 1/2 tasse de pacanes et bien mélanger.',
    'Saler et poivrer.',
    'Répartir dans les patates douces.',
    'Saupoudrer du reste du fromage cheddar et du 1/4 tasse de pacanes restant.',
    'Cuire au four environ 15 minutes ou jusqu’à ce que le fromage soit doré.',
    'Remettre au four 5 à 10 minutes pour faire fondre le fromage.'
  ],
  tags: ['fromage', 'pacanes', 'gratin'],
  slug: 'patates-douces-cheddar-et-pacanes'
};
