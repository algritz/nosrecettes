import { Recipe } from '@/types/recipe'

export const marinadeALaGrecque: Recipe = {
  id: 'marinade-a-la-grecque',
  title: 'Marinade à la grecque',
  description: 'Une marinade passe-partout Marinade à la grecque',
  categories: ['Marinade'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse (125 ml) huile',
    '1 1/2 c.à soupe (22 ml) jus de citron',
    '1/2 oignon, haché finement',
    '1 c.à thé (5 ml) moutarde',
    '1/4 c.à thé (1 ml) épices à steak',
    '2 feuilles laurier',
    '1 c.à soupe (15 ml) base de poulet',
    '2 gousses ail',
    '1 c.à soupe (15 ml) sauce soya',
    '1 c.à soupe (15 ml) vinaigre blanc',
    '1/4 c.à thé (1 ml) origan',
  ],
  instructions: [
    'Mêler ensemble tous les ingrédient des la marinade.',
    'Laisser reposer le porc ou poulet dans cette marinade au réfrigérateur pendant 2 heures minimum puis faire cuire selon son choix, mais idéale sur le BBQ',
  ],
  tags: ['marinade sèche', 'grill'],
  slug: 'marinade-a-la-grecque',
}
