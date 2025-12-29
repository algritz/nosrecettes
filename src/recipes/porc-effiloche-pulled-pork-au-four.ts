import { Recipe } from '@/types/recipe'

export const porcEffilochePulledPorkAuFour: Recipe = {
  id: '1765124321555',
  title: 'Porc effiloché (pulled pork) au four',
  description:
    'Épaule de porc dorée puis braisée longuement au four dans une sauce ketchup–vinaigre de cidre, épices et aromates, effilochée et mélangée à la sauce.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 360, max: 360 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe d’huile de canola (colza) ou de tournesol',
    '1 rôti d’épaule de porc de 1,8 kg (4 lb), sans os, déficelé',
    '1 gros oignon, grossièrement haché',
    '500 ml (2 tasses) de ketchup',
    '125 ml (1/2 tasse) de vinaigre de cidre de pomme',
    '125 ml (1/2 tasse) d’eau (ou de bouillon de poulet)',
    '100 g (1/2 tasse) de cassonade ou de sirop d’érable',
    '1 c. à soupe de grains de moutarde jaune',
    '1 1/2 c. à soupe de sauce Worcestershire',
    '2 c.c. de poudre de chili',
    '1/2 c.c. de paprika fumé',
    '1/2 c.c. de poudre d’oignon',
    '2 grosses gousses d’ail, dégermées et finement hachées',
    '2 feuilles de laurier',
    '1/2 c.c. de marjolaine',
    '1/2 à 1 c.c. de paprika fort (au goût)',
    'Sel et poivre',
  ],
  instructions: [
    'Préchauffer le four à 275°F.',
    'Dans une cocotte allant au four, chauffer l’huile et dorer l’épaule sur tous les côtés. Saler, poivrer, ajouter l’oignon et faire revenir jusqu’à doré.',
    'Dans un saladier, mélanger le reste des ingrédients et verser sur l’épaule.',
    'Couvrir et cuire au four 6 heures, en retournant le porc et en l’arrosant de sauce à mi-cuisson.',
    'Retirer la viande, l’effilocher à la fourchette, puis mélanger l’effiloché avec la sauce.',
  ],
  tags: ['effiloché', 'vinaigre de cidre', 'Worcestershire'],
  accompaniment:
    'Petits pains style hamburger, fromage Tex-Mex, salade de choux, cornichons',
  source: 'David Cloutier',
  slug: 'porc-effiloche-pulled-pork-au-four',
}
