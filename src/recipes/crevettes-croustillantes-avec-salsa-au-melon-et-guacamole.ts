import { Recipe } from '@/types/recipe';

export const crevettesCroustillantesAvecSalsaAuMelonEtGuacamole: Recipe = {
  id: 'crevettes-croustillantes-avec-salsa-au-melon-et-guacamole',
  title: 'Crevettes croustillantes avec salsa au melon et guacamole',
  description: '',
  categories: ['Végétarien', 'Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 14,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Protéines',
      items: [
        'Ingrédient pour montage 14 crevettes en papillon panées non cuites (nos compliments IGA)',
        '7 tranches de Saumon fumé frais, coupées en deux'
      ]
    },
    {
      title: 'Salsa au melon',
      items: [
        '1 tasse de melon miel pelé et épépiné puis coupé en petits dés',
        '1 tomate italienne, épépinée et coupée en petits dés',
        '1 oignons verts, finement hachés',
        '1 lime, zestée et 1/2 jus',
        '1 c. à soupe (15 ml) d’huile d’olive',
        '1/4 c. à thé (1 ml) de sel',
        '1/4 c. à thé (1 ml) de poivre fraichement moulu'
      ]
    },
    {
      title: 'Guacamole',
      items: [
        '1 avocat en purée',
        'sauce piquante au goût',
        '1 lime, zestée et 1/2 jus',
        '1 oignons verts, finement hachés',
        '1 c. à soupe (15 ml) d’huile d’olive',
        'sel au goût'
      ]
    }
  ],
  instructions: [
    'Préchauffer le four à 425°F',
    'Cuire les crevettes selon les directives sur l’emballage',
    'Dans un bol, combiner le melon, la tomate, l\'oignons verts, la moitié du jus et le zeste d\'une lime et l’huile d\'olive. Saler et poivrer. Réserver.',
    'Dans un autre bol, combiner l’avocat, l\'oignons verts, l’huile d\'olive, la moitié du jus et le zeste d\'une lime. Ajouter de la sauce piquante et du sel au goût.',
    'Garnir chaque crevette tiède d’une demi-tranche de saumon fumé, de 1 c. à thé de chacun de guacamole et de salsa au melon. Garnir d’une feuille de coriandre.',
    'Servir immédiatement.'
  ],
  tags: ['salsa melon', 'guacamole', 'friture'],
  source: 'David Cloutier',
  slug: 'crevettes-croustillantes-avec-salsa-au-melon-et-guacamole'
};
