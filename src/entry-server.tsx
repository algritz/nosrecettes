import { renderToString } from 'react-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server'
import { RecipePageSSR } from './pages/RecipePageSSR'
import type { Recipe } from './types/recipe'

export type { HelmetServerState }

export interface RenderResult {
  html: string
  helmet: HelmetServerState
}

export function render(url: string, recipe: Recipe): RenderResult {
  const helmetContext = {} as { helmet: HelmetServerState }
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <RecipePageSSR recipe={recipe} />
      </StaticRouter>
    </HelmetProvider>,
  )
  return { html, helmet: helmetContext.helmet }
}
