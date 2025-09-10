import { uploadToCloudinary, generateResponsiveImageUrls, CloudinaryConfig, scheduleImageCleanup, extractPublicIdFromUrl } from './cloudinaryUtils';

export interface ImageSizes {
  small: string;
  medium: string;
  large: string;
}

export interface ProcessedImage {
  file: File;
  publicId?: string; // Cloudinary public ID
  sizes: ImageSizes;
  preview: string;
}

// Get the base path for the current environment (for backward compatibility with local images)
export const getBasePath = (): string => {
  const basePath = import.meta.env.PROD ? "/nosrecettes" : "";
  return basePath;
};

// Add base path to image URL if it's a relative path (for backward compatibility)
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) {
    return '';
  }
  
  // If it's already an absolute URL or data URL, return as is
  if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('blob:')) {
    return imagePath;
  }
  
  // If it already includes the base path, return as is
  const basePath = getBasePath();
  if (basePath && imagePath.startsWith(basePath)) {
    return imagePath;
  }
  
  // Add base path to relative URLs
  return `${basePath}${imagePath}`;
};

export const processImageFile = async (file: File, cloudinaryConfig?: CloudinaryConfig): Promise<ProcessedImage> => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Le fichier doit être une image');
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    throw new Error('L\'image ne peut pas dépasser 10MB');
  }

  // If Cloudinary is configured, upload to Cloudinary
  if (cloudinaryConfig) {
    try {
      const uploadResult = await uploadToCloudinary(file, cloudinaryConfig, 'recipes');
      const responsiveUrls = generateResponsiveImageUrls(uploadResult.public_id, cloudinaryConfig.cloudName);
      
      return {
        file,
        publicId: uploadResult.public_id,
        sizes: responsiveUrls,
        preview: responsiveUrls.medium
      };
    } catch (error) {
      console.error('Cloudinary upload failed:', error);
      throw new Error('Échec de l\'upload vers Cloudinary');
    }
  }

  // Fallback: create local preview (for development or if Cloudinary fails)
  const preview = await createImagePreview(file);
  
  return {
    file,
    sizes: { small: preview, medium: preview, large: preview },
    preview
  };
};

export const scheduleOldImageCleanup = (
  oldImages: (ImageSizes | string)[], 
  recipeSlug: string,
  reason: 'replaced' | 'removed' = 'replaced'
): void => {
  if (!oldImages.length) return;

  const publicIdsToCleanup: string[] = [];

  for (const oldImage of oldImages) {
    let publicId: string | null = null;

    if (typeof oldImage === 'string') {
      // Old format - single URL
      publicId = extractPublicIdFromUrl(oldImage);
    } else if (oldImage && typeof oldImage === 'object') {
      // New format - extract from any of the URLs
      publicId = extractPublicIdFromUrl(oldImage.small) || 
                extractPublicIdFromUrl(oldImage.medium) || 
                extractPublicIdFromUrl(oldImage.large);
    }

    if (publicId) {
      publicIdsToCleanup.push(publicId);
    }
  }

  if (publicIdsToCleanup.length > 0) {
    scheduleImageCleanup(publicIdsToCleanup, recipeSlug, reason);
  }
};

const createImagePreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const getResponsiveImageSrc = (imageSizes: ImageSizes | string | undefined, size: 'small' | 'medium' | 'large' = 'medium'): string => {
  if (!imageSizes) {
    return '';
  }
  
  if (typeof imageSizes === 'string') {
    return getImageUrl(imageSizes); // Apply base path to old format
  }
  
  // New format with multiple sizes - these should already be full Cloudinary URLs
  const selectedImage = imageSizes[size] || imageSizes.medium || imageSizes.small || '';
  
  // If it's already a full URL (Cloudinary), return as is
  if (selectedImage.startsWith('http')) {
    return selectedImage;
  }
  
  // Otherwise, apply base path (for backward compatibility)
  return getImageUrl(selectedImage);
};

export const generateImageFileName = (recipeSlug: string, index: number = 0): string => {
  return index === 0 ? `${recipeSlug}` : `${recipeSlug}-${index + 1}`;
};