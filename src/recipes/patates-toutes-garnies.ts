import { Recipe } from '@/types/recipe';

export const patatesToutesGarnies: Recipe = {
  id: 'patates-toutes-garnies',
  title: 'Patates toutes garnies',
  description: 'Des patates surprises !',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 40, max: 40 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 grosses pommes de terre bien lavées',
    '4 tranches de bacon',
    '2 oignons verts',
    '1/4 tasse de beurre mou',
    '1 tasse de crème sure',
    '1 1/2 tasse de fromage cheddar jaune ou blanc râpé',
    'Sel et poivre'
  ],
  instructions: [
    'Préchauffer le barbecue à puissance élevée.',
    'Envelopper individuellement chaque pomme de terre de papier d’aluminium.',
    'Cuire au barbecue de 30 à 40 minutes ou jusqu’à ce qu’elles soient tendres.',
    'Laisser tiédir légèrement.',
    'Faire cuire le bacon jusqu’à ce qu’il soit croustillant. Égoutter sur du papier absorbant. Hacher finement.',
    'Hacher le blanc des oignons verts puis émincer le vert. Réserver séparément.',
    'Sur un plan de travail, placer les pommes de terre à l’horizontale et couper le dessus.',
    'Retirer la chair des pommes de terre en laissant un contour de 1 cm. Réserver la chair et les pommes de terre évidées.',
    'Dans un bol, piler la chair des pommes de terre au pilon à pommes de terre.',
    'Ajouter le beurre, la crème sure, le blanc des oignons, 1 tasse de fromage et la moitié du bacon. Bien mélanger.',
    'Saler et poivrer.',
    'Farcir généreusement les pommes de terre avec la préparation.',
    'Parsemer du reste de fromage, de bacon et d’oignons verts.',
    'Réduire l’intensité du barbecue à feu moyen.',
    'Déposer les pommes de terre farcies directement sur la grille et poursuivre la cuisson de 15 à 20 minutes ou jusqu’à ce que le fromage soit fondu.'
  ],
  tags: ['barbecue', 'fromage', 'bacon'],
  slug: 'patates-toutes-garnies'
};
