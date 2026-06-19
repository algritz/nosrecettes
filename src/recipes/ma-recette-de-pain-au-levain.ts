import { Recipe } from '@/types/recipe';

export const maRecetteDePainAuLevain: Recipe = {
  id: '1781897068211',
  title: 'Ma recette de pain au levain',
  description: 'Après plusieurs test, c\'est la meilleure version de pain au levain.',
  categories: ['Pain', 'Pâtisseries et desserts', 'Déjeuners'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 45, max: 45 },
  marinatingTime: { min: 720, max: 1080 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '125 gr de levain rafraichit',
    '10 gr de sel',
    '325 gr eau sans chlore à environ 30°C',
    '500 gr de farine à pain'
  ],
  instructions: [
    'Dans un bol mélanger la farine et le sel.',
    'Peser le levain dans un saladier. Y ajouter l\'eau et bien brasser jusqu\'à obtenir une texture laiteuse.',
    'Ajouter la farine et le sel et bien mélanger. Couvrir d\'une pellicule de plastique et laisser reposer 1 heure.',
    'Après 1 heure, faire 3 séries de rabats à tous les 45 minutes.',
    'Après les 3 séries de rabats, laisser reposer 2 heures.',
    'Transférer le pain dans le banneton couvrir d\'un linge humide et le laisser lever un autre 2 heures.',
    'Mettre le banneton couvert d\'un linge humide dans un sac de plastique et mettre au réfrigérateur pour la nuit.',
    'Le lendemain matin,, mettre la cocotte et son couvercle au four et chauffer le four à 450°F.',
    'Démouler le pain su un papier',
    'Sur en papier-parchemin, démouler le pain.  Le fariner et le scarifier.',
    'Mettre le pain dans la cocotte avec 2-3 cubes de glace dans la cocote, sous le papier-parchemin. Remettre le couvercle et enfourner 35 minutes.',
    'Après 35 minutes, retirer le couvercle et laisser cuire un autre 10 minutes sans couvercle.',
    'Sortir du four et laisser complètement refroidir sur un grille, soit environ deux heure  Il est important de le laisser refroidir, car il continue à cuire durant cette étape.'
  ],
  tags: ['levain'],
  source: 'yerishan',
  slug: 'ma-recette-de-pain-au-levain'
};
