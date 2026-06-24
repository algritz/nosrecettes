import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import type { Recipe } from './types/recipe'
import { RecipePageSSR } from './pages/RecipePageSSR'

export type { HelmetServerState }

export interface RenderResult {
  html: string
  helmet: HelmetServerState
}

export function render(url: string, recipe: Recipe): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <RecipePageSSR recipe={recipe} />
      </StaticRouter>
    </HelmetProvider>
  )
  const helmet = helmetContext.helmet!
  return { html, helmet }
}
