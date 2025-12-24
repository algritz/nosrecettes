import { Recipe } from '@/types/recipe';

export const pimentsFarcisALaMexicaine: Recipe = {
  id: 'piments-farcis-a-la-mexicaine',
  title: 'Piments farcis à la mexicaine',
  description: 'Excellente recette pour passer des restants. Faire blanchir les piments, les farcir avec un mélange de boeuf, riz, maïs, puis cuire au four. Servir avec crème sure, guacamole et coriandre.',
  categories: ['Entrées'],
  prepTime: 15,
  cookTime: 30,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Piments',
    'Restant de mélange de boeuf haché à Tacos, buritos, enchiladas ou chili',
    'Un restant de riz blanc',
    'Fromage Philadelphia en tranche',
    'Crème sure',
    'Maïs surgelé en grain (facultatif)',
    'Fromage Tex-Mex',
    'Guacamole',
    'Coriandre'
  ],
  instructions: [
    'Faire blanchir les piments 4 minutes et laisser refroidir.',
    'Mélanger votre restant de boeuf haché avec votre riz et maïs en grain.',
    'Couper les piments en deux, de haut en bas de façon égale.',
    'Mettre une tranche de Philadelphia dans chaque moitié de piment.',
    'Ajouter le mélange de boeuf haché et riz, la crème sure et le fromage Tex-Mex.',
    'Faire cuire au four 20-30 minutes à 350F.',
    'Servir avec de la crème sure et de la guacamole et parsemer de coriandre.'
  ],
  tags: ['mexicain', 'farce', 'four'],
  slug: 'piments-farcis-a-la-mexicaine'
};
