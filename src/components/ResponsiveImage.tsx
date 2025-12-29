import { useState } from 'react'
import { Utensils } from 'lucide-react'
import { getResponsiveImageSrc, ImageSizes } from '@/utils/imageUtils'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps {
  src: ImageSizes | string | undefined
  alt: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  aspectRatio?: 'square' | 'video' | 'auto'
  showPlaceholder?: boolean
}

export const ResponsiveImage = ({
  src,
  alt,
  className,
  size = 'medium',
  aspectRatio = 'video',
  showPlaceholder = true,
}: ResponsiveImageProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const imageSrc = getResponsiveImageSrc(src, size)

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  }

  // Debug logging
  console.log('ResponsiveImage - Original src:', src)
  console.log('ResponsiveImage - Processed imageSrc:', imageSrc)

  if (imageError || !imageSrc) {
    if (!showPlaceholder) return null

    return (
      <div
        className={cn(
          'bg-muted flex items-center justify-center border-2 border-dashed border-muted-foreground/25',
          aspectRatioClasses[aspectRatio],
          className,
        )}
      >
        <div className="flex flex-col items-center justify-center text-muted-foreground p-4">
          <Utensils className="w-12 h-12 mb-2" />
          <span className="text-sm font-medium">Pas d'image</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        aspectRatioClasses[aspectRatio],
        className,
        'relative overflow-hidden',
      )}
    >
      {!imageLoaded && showPlaceholder && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <Utensils className="w-8 h-8 text-muted-foreground animate-pulse" />
        </div>
      )}

      <picture>
        {typeof src === 'object' && src && (
          <>
            <source
              media="(max-width: 640px)"
              srcSet={getResponsiveImageSrc(src, 'small')}
            />
            <source
              media="(max-width: 1024px)"
              srcSet={getResponsiveImageSrc(src, 'medium')}
            />
            <source
              media="(min-width: 1025px)"
              srcSet={getResponsiveImageSrc(src, 'large')}
            />
          </>
        )}

        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            imageLoaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </picture>
    </div>
  )
}
