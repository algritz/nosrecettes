import {
  uploadToCloudinary,
  generateResponsiveImageUrls,
  CloudinaryConfig,
  scheduleImageCleanup,
  extractPublicIdFromUrl,
} from './cloudinaryUtils'
import { siteConfig } from '@/config/site.config'
import imageCompression from 'browser-image-compression'

export interface ImageSizes {
  small: string
  medium: string
  large: string
}

export interface ProcessedImage {
  file: File
  publicId?: string // Cloudinary public ID
  sizes: ImageSizes
  preview: string
}

// Get the base path for the current environment (for backward compatibility with local images)
export const getBasePath = (): string => {
  const basePath = siteConfig.basePath
  return basePath
}

// Add base path to image URL if it's a relative path (for backward compatibility)
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) {
    return ''
  }

  // If it's already an absolute URL or data URL, return as is
  if (
    imagePath.startsWith('http') ||
    imagePath.startsWith('data:') ||
    imagePath.startsWith('blob:')
  ) {
    return imagePath
  }

  // If it already includes the base path, return as is
  const basePath = getBasePath()
  if (basePath && imagePath.startsWith(basePath)) {
    return imagePath
  }

  // Add base path to relative URLs
  return `${basePath}${imagePath}`
}

/**
 * Compresses an image file if it exceeds the target size threshold.
 * Files under 8MB are returned unchanged. Larger files are compressed
 * to approximately 8MB using Web Worker to keep UI responsive.
 *
 * @param file - The image file to potentially compress
 * @returns The original file if under 8MB, or a compressed version
 * @throws Error if compression fails
 */
async function compressImageIfNeeded(file: File): Promise<File> {
  const SIZE_THRESHOLD_MB = 8
  const SIZE_THRESHOLD_BYTES = SIZE_THRESHOLD_MB * 1024 * 1024
  const originalSizeMB = (file.size / (1024 * 1024)).toFixed(2)

  // Skip compression if file is already under threshold
  if (file.size <= SIZE_THRESHOLD_BYTES) {
    console.log(`[ImageCompression] File "${file.name}" is ${originalSizeMB}MB, skipping compression`)
    return file
  }

  console.log(`[ImageCompression] Starting compression for "${file.name}" (${originalSizeMB}MB)`)

  try {
    const options = {
      maxSizeMB: SIZE_THRESHOLD_MB,          // Target file size
      maxWidthOrHeight: 4096,                 // Max dimension to prevent excessive resolution
      useWebWorker: true,                     // Run compression in Web Worker
      fileType: 'image/jpeg',                 // Output format (best compression)
      initialQuality: 0.9,                    // Starting quality (90%)
    }

    const compressedFile = await imageCompression(file, options)
    const compressedSizeMB = (compressedFile.size / (1024 * 1024)).toFixed(2)
    const reductionPercent = (((file.size - compressedFile.size) / file.size) * 100).toFixed(1)

    console.log(
      `[ImageCompression] Compressed "${file.name}" from ${originalSizeMB}MB to ${compressedSizeMB}MB ` +
      `(${reductionPercent}% reduction)`
    )

    return compressedFile
  } catch (error) {
    console.error(`[ImageCompression] Failed to compress "${file.name}":`, error)
    throw new Error(`Échec de la compression de l'image: ${error instanceof Error ? error.message : 'Erreur inconnue'}`)
  }
}

export const processImageFile = async (
  file: File,
  cloudinaryConfig?: CloudinaryConfig,
): Promise<ProcessedImage> => {
  // Compress large images before validation
  const compressedFile = await compressImageIfNeeded(file)

  // Validate image type
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  if (!validTypes.includes(compressedFile.type)) {
    throw new Error('Type d\'image non supporté. Utilisez JPG, PNG, GIF ou WebP.')
  }

  // Validate file size (10MB limit - compressed files should be under 8MB)
  const maxSize = 10 * 1024 * 1024 // 10MB in bytes
  if (compressedFile.size > maxSize) {
    throw new Error('L\'image ne peut pas dépasser 10MB')
  }

  // If Cloudinary is configured, upload to Cloudinary
  if (cloudinaryConfig) {
    try {
      const uploadResult = await uploadToCloudinary(
        compressedFile,
        cloudinaryConfig,
        'recipes',
      )
      const responsiveUrls = generateResponsiveImageUrls(
        uploadResult.public_id,
        cloudinaryConfig.cloudName,
      )

      return {
        file: compressedFile,
        publicId: uploadResult.public_id,
        sizes: responsiveUrls,
        preview: responsiveUrls.medium,
      }
    } catch (error) {
      console.error('Cloudinary upload failed:', error)
      throw new Error("Échec de l'upload vers Cloudinary")
    }
  }

  // Fallback: create local preview (for development or if Cloudinary fails)
  const preview = await createImagePreview(compressedFile)

  return {
    file: compressedFile,
    sizes: { small: preview, medium: preview, large: preview },
    preview,
  }
}

export const scheduleOldImageCleanup = (
  oldImages: (ImageSizes | string)[],
  recipeSlug: string,
  reason: 'replaced' | 'removed' = 'replaced',
): void => {
  if (!oldImages.length) return

  const publicIdsToCleanup: string[] = []

  for (const oldImage of oldImages) {
    let publicId: string | null = null

    if (typeof oldImage === 'string') {
      // Old format - single URL
      publicId = extractPublicIdFromUrl(oldImage)
    } else if (oldImage && typeof oldImage === 'object') {
      // New format - extract from any of the URLs
      publicId =
        extractPublicIdFromUrl(oldImage.small) ||
        extractPublicIdFromUrl(oldImage.medium) ||
        extractPublicIdFromUrl(oldImage.large)
    }

    if (publicId) {
      publicIdsToCleanup.push(publicId)
    }
  }

  if (publicIdsToCleanup.length > 0) {
    scheduleImageCleanup(publicIdsToCleanup, recipeSlug, reason)
  }
}

const createImagePreview = async (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

export const getResponsiveImageSrc = (
  imageSizes: ImageSizes | string | undefined,
  size: 'small' | 'medium' | 'large' = 'medium',
): string => {
  if (!imageSizes) {
    return ''
  }

  if (typeof imageSizes === 'string') {
    return getImageUrl(imageSizes) // Apply base path to old format
  }

  // New format with multiple sizes - these should already be full Cloudinary URLs
  const selectedImage =
    imageSizes[size] || imageSizes.medium || imageSizes.small || ''

  // If it's already a full URL (Cloudinary), return as is
  if (selectedImage.startsWith('http')) {
    return selectedImage
  }

  // Otherwise, apply base path (for backward compatibility)
  return getImageUrl(selectedImage)
}

export const generateImageFileName = (recipeSlug: string, index = 0): string =>
  index === 0 ? `${recipeSlug}` : `${recipeSlug}-${index + 1}`
