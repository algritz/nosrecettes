import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

const rootElement = document.getElementById('root')

// Only hydrate genuinely pre-rendered React output (marked by build-ssg.ts).
// Other entry points (dev server, non-prerendered routes) ship a loading
// skeleton inside #root that never matches React's output. Hydrating that
// under React 19's strict hydration throws a mismatch and re-renders the root,
// which interacts badly with Radix FocusScope's callback ref and produces an
// unbounded "Maximum update depth exceeded" loop. createRoot avoids it.
if (rootElement.dataset.prerendered === 'true') {
  hydrateRoot(rootElement, <App />)
} else {
  createRoot(rootElement).render(<App />)
}
