import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

const rootElement = document.getElementById('root')!

// Use hydrate for pre-rendered content from react-snap
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />)
} else {
  createRoot(rootElement).render(<App />)
}
