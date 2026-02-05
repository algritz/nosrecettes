import { Recipe } from '@/types/recipe';

export const spaghettiAuxPoireauxEtBacon: Recipe = {
  id: 'spaghetti-aux-poireaux-et-bacon',
  title: 'Spaghetti aux poireaux et bacon',
  description: 'Super recette pour manger des spaghettis de façon différente',
  categories: ['Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 20, max: 20 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '300 gr de spaghetti',
    '1 poireau',
    '4 tranches de bacon',
    '1 c. à thé de beurre',
    '1 tasse de crème 35%',
    'Parmesan',
    'Eau de cuisson des pâtes',
    '2 œufs pochés',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Faire cuire les pâte dans de l\'eau bouillante salée.',
    'Séparer la partie blanche du poireau du vert.',
    'Couper le blanc en fines tranches et mettre de côté.',
    'Couper le vert sur le sens de la longueur en julienne pour qu\'il ressemble à de long spaghetti et bien les laver.',
    'Plonger les poireaux verts dans de l\'eau bouillante 3 minutes et par la suite mettre dans de l\'eau glacée pour fixer la chlorophylle.',
    'Couper le bacon en fine tranche et faire revenir dans une casserole avec le beurre.',
    'Une fois le bacon cuit, ajouter le blanc de poireau et faire revenir jusqu\'à ce qu\'ils tombent.',
    'Ajouter la crème et bien brasser.',
    'Ajouter les pâtes cuites et environ une louche d\'eau de cuisson des pâtes et bien mélanger.',
    'Saler et poivrer.',
    'Servir dans des bols, garnir de parmesan et d\'un œuf poché coulant.'
  ],
  tags: ['pâtes', 'poireaux', 'bacon'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/spaghetti_poireaux_et_bacon',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/spaghetti_poireaux_et_bacon',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/spaghetti_poireaux_et_bacon'
    }
  ],
  source: 'David Cloutier',
  notes: 'La prochaine fois au lieu des œufs pochés, je vais mettre une burrata.',
  slug: 'spaghetti-aux-poireaux-et-bacon'
};
