import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site.config'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  structuredData?: object
}

export const SEOHead = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  structuredData,
}: SEOHeadProps): React.ReactElement => {
  const siteName = 'Nos Recettes'
  const baseUrl = siteConfig.baseUrl
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const defaultImage = `${baseUrl}/images/og-default.jpg`
  const ogImage = image || defaultImage

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content="Nos Recettes" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="900" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
