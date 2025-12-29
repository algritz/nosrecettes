import { Recipe } from '@/types/recipe';

export const nouillesChinoises: Recipe = {
  id: 'nouilles-chinoises',
  title: 'Nouilles Chinoises',
  description: 'Repas de semaine que les enfants aiment',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de restant de poulet ou bœuf, ou porc déjà cuit',
    '2 oignons',
    '1 gousse d\'ail hachés',
    '1 tasse céleri haché',
    '2 cuillères à soupe sauce à côtes levées VH (médium)',
    '2 cuillères à soupe bouillon concentré liquide au bœuf style Bovril',
    '3 cuillères à soupe sauce soya',
    '1 cuillère à soupe mélasse',
    '1/2 piment vert haché',
    'Persil',
    'Poivre',
    '2 tasses nouilles non cuites'
  ],
  instructions: [
    'Faire cuire les nouilles dans l\'eau salée. Ne pas trop faire cuire.',
    'Dans un grand poêlon, mettre 2 c. à soupe d\'huile et faire saisir les oignons, l\'ail, le céleri, 5 environ.',
    'Ajouter la sauce VH, la sauce soya et le bouillon de bœuf. Amener à ébullition et faire mijoter à médium environ 5 minutes.',
    'Égoutter les nouilles cuites.',
    'Ajouter la mélasse, les nouilles cuites et égouttées, le piment vert, le persil et le poivre. Bien brasser et servir.'
  ],
  tags: ['cuisine asiatique', 'sauté', 'rapide'],
  slug: 'nouilles-chinoises'
};
