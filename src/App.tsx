import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { siteConfig } from '@/config/site.config'
import { UpdateBanner } from '@/components/UpdateBanner'
import { usePwaUpdate } from '@/hooks/usePwaUpdate'
import { usePersistentStorage } from '@/hooks/usePersistentStorage'
import { checkForRecipeUpdates } from '@/utils/recipeUpdates'
import Index from './pages/Index'
import RecipePage from './pages/RecipePage'
import Admin from './pages/Admin'
import NewRecipe from './pages/NewRecipe'
import EditRecipe from './pages/EditRecipe'
import ManageCategories from './pages/ManageCategories'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const basename = siteConfig.basePath

const App = () => {
  const { showUpdateBanner, dismissBanner } = usePwaUpdate()
  const { requestPersistence } = usePersistentStorage()

  useEffect(() => {
    // Request persistent storage on first load
    requestPersistence().catch((err) =>
      console.error('Persistence request failed:', err),
    )

    // Check for recipe updates on app load (if online)
    if (navigator.onLine) {
      checkForRecipeUpdates().catch(console.error)
    }

    // Check periodically while app is OPEN and ACTIVE
    // This interval is cleared when app unmounts/closes
    const interval = setInterval(
      () => {
        if (navigator.onLine) {
          checkForRecipeUpdates().catch(console.error)
        }
      },
      30 * 60 * 1000,
    ) // Every 30 minutes WHILE APP IS OPEN

    return () => clearInterval(interval) // Clean up when app closes
  }, [requestPersistence])

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showUpdateBanner && <UpdateBanner onDismiss={dismissBanner} />}
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/recipe/:slug" element={<RecipePage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/new-recipe" element={<NewRecipe />} />
              <Route path="/edit-recipe/:slug" element={<EditRecipe />} />
              <Route path="/manage-categories" element={<ManageCategories />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
