import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SEOHead } from '@/components/SEOHead'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    )
  }, [location.pathname])

  return (
    <>
      <SEOHead
        title="Page non trouvée (404) - Nos Recettes"
        description="La page que vous recherchez n'existe pas. Découvrez notre collection de recettes québécoises authentiques sur la page d'accueil."
        url={location.pathname}
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  )
}

export default NotFound
