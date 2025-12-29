import { Recipe } from '@/types/recipe'

export const cotelettesDePorcAvecSauceSucree: Recipe = {
  id: 'cotelettes-de-porc-avec-sauce-sucree',
  title: 'Côtelettes de porc avec sauce sucrée',
  description:
    'Une recette simple de côtelettes de porc avec une sauce sucrée, idéale pour un repas rapide en semaine.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4-6 côtelettes de porc',
    'Sel et poivre au goût',
    '1/2 tasse (125 ml) cassonade',
    '1 oignon, haché',
    '1/2 tasse (125 ml) eau',
    '1 c.à thé (5 ml) jus de citron',
    '1 c.à thé (5 ml) sauce Worcestershire',
    '3/4 tasse (190 ml) ketchup',
  ],
  instructions: [
    'Saler et poivrer les côtelettes de porc sur tous les côtés.',
    'Faire revenir les côtelettes dans une poêle légèrement graissée.',
    'Mélanger tous les autres ingrédients dans un bol et verser sur les côtelettes.',
    'Couvrir et cuire 30 minutes au four à 350°F.',
  ],
  tags: ['sauce sucrée', 'porc', 'cuisson au four'],
  notes: 'Excellent dépanneur la semaine.',
  slug: 'cotelettes-de-porc-avec-sauce-sucree',
}
