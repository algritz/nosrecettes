import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UpdateBanner } from '@/components/UpdateBanner'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { siteConfig } from '@/config/site.config'
import { usePersistentStorage } from '@/hooks/usePersistentStorage'
import { usePwaUpdate } from '@/hooks/usePwaUpdate'
import { checkForRecipeUpdates } from '@/utils/recipeUpdates'
import Admin from './pages/Admin'
import EditRecipe from './pages/EditRecipe'
import Index from './pages/Index'
import ManageCategories from './pages/ManageCategories'
import NewRecipe from './pages/NewRecipe'
import NotFound from './pages/NotFound'
import RecipePage from './pages/RecipePage'

const queryClient = new QueryClient()

const basename = siteConfig.basePath

const App = (): React.ReactElement => {
  const { showUpdateBanner, dismissBanner } = usePwaUpdate()
  const { requestPersistence } = usePersistentStorage()

  useEffect(() => {
    // Request persistent storage on first load
    requestPersistence().catch((_err) => {})

    // Check for recipe updates on app load (if online)
    if (navigator.onLine) {
      // biome-ignore lint/suspicious/noConsole: intentional error logging
      checkForRecipeUpdates().catch(console.error)
    }

    // Check periodically while app is OPEN and ACTIVE
    // This interval is cleared when app unmounts/closes
    const interval = setInterval(
      () => {
        if (navigator.onLine) {
          // biome-ignore lint/suspicious/noConsole: intentional error logging
          checkForRecipeUpdates().catch(console.error)
        }
      },
      30 * 60 * 1000,
    ) // Every 30 minutes WHILE APP IS OPEN

    return (): void => clearInterval(interval) // Clean up when app closes
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
