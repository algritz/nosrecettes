export interface ImageSizes {
  small: string;
  medium: string;
  large: string;
}

export interface ProcessedImage {
  file: File;
  sizes: ImageSizes;
  preview: string;
}

export const IMAGE_SIZES = {
  small: { width: 400, height: 300, quality: 0.8 },
  medium: { width: 800, height: 600, quality: 0.85 },
  large: { width: 1200, height: 900, quality: 0.9 }
} as const;

export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality: number = 0.8
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/jpeg',
        quality
      );
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const processImageFile = async (file: File): Promise<ProcessedImage> => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Le fichier doit être une image');
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    throw new Error('L\'image ne peut pas dépasser 10MB');
  }

  const [small, medium, large] = await Promise.all([
    resizeImage(file, IMAGE_SIZES.small.width, IMAGE_SIZES.small.height, IMAGE_SIZES.small.quality),
    resizeImage(file, IMAGE_SIZES.medium.width, IMAGE_SIZES.medium.height, IMAGE_SIZES.medium.quality),
    resizeImage(file, IMAGE_SIZES.large.width, IMAGE_SIZES.large.height, IMAGE_SIZES.large.quality)
  ]);

  return {
    file,
    sizes: { small, medium, large },
    preview: medium // Use medium for preview
  };
};

export const getResponsiveImageSrc = (imageSizes: ImageSizes | string, size: 'small' | 'medium' | 'large' = 'medium'): string => {
  if (typeof imageSizes === 'string') {
    return imageSizes; // Fallback for old format
  }
  return imageSizes[size];
};

export const generateImageFileName = (recipeSlug: string, index: number = 0): string => {
  return index === 0 ? `${recipeSlug}.jpg` : `${recipeSlug}-${index + 1}.jpg`;
};