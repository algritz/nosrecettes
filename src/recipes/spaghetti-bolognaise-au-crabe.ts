import { Recipe } from '@/types/recipe';

export const spaghettiBolognaiseAuCrabe: Recipe = {
  id: 'spaghetti-bolognaise-au-crabe',
  title: 'Spaghetti bolognaise au crabe',
  description: 'Un plat de spaghetti avec une sauce au crabe parfumée aux anchois, basilic et fenouil, simple et savoureux.',
  categories: ['Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 piment rouge frais',
    '1 carotte',
    '2 oignons verts',
    '2 gousses d\'ail',
    '1 c à café bombée de graines de fenouil',
    '2 filets d\'anchois',
    '1/2 bouquet de basilic frais',
    '2 bulbes de fenouil (tiges et feuilles)',
    '1 c à soupe d\'huile d\'olive',
    '1 citron',
    '300 g de chair de crabe (chair et pinces)',
    'Vin blanc',
    '700 g de passata (sauce tomate)',
    'Sel et poivre du moulin',
    '320 g de spaghetti'
  ],
  instructions: [
    'Couper le piment en 2 et retirer les graines.',
    'Éplucher la carotte.',
    'Couper en morceaux la carotte et l\'oignon vert et les mettre dans un mélangeur avec les graines de fenouil, les anchois et les tiges de basilic.',
    'Mixer puis ajouter les tiges et les feuilles de fenouil, hacher finement et mettre ce mélange dans une cocotte et le faire revenir à l\'huile d\'olive en remuant régulièrement.',
    'Cuire les spaghettis à l\'eau bouillante salée le temps indiqué sur le paquet.',
    'Râper finement le zeste du citron sur les légumes et ajouter la chair de crabe, un trait de vin blanc et la passata.',
    'Mélanger, couvrir et cuire à frémissement.',
    'Hacher grossièrement les feuilles de basilic et les incorporer dans la sauce en même temps que les pinces de crabe et le jus du citron.',
    'Délayer la sauce avec un peu d\'eau de cuisson des spaghettis.',
    'Égoutter les spaghettis et les mettre dans un grand plat, les recouvrir de sauce au crabe et décorer avec les feuilles de basilic restantes.',
    'Servir sans attendre.'
  ],
  tags: ['crabe', 'basilic', 'piment'],
  slug: 'spaghetti-bolognaise-au-crabe'
};
