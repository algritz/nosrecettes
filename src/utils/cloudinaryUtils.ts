export interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
}

export interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

export const getCloudinaryUrl = (publicId: string, cloudName: string, options: {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
  format?: string;
} = {}): string => {
  if (!publicId || !cloudName) return '';
  
  const transformations = [];
  
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  if (options.quality) transformations.push(`q_${options.quality}`);
  if (options.format) transformations.push(`f_${options.format}`);
  
  const transformString = transformations.length > 0 ? `${transformations.join(',')}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}${publicId}`;
};

export const uploadToCloudinary = async (
  file: File, 
  config: CloudinaryConfig,
  folder?: string
): Promise<CloudinaryUploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', config.uploadPreset);
  
  if (folder) {
    formData.append('folder', folder);
  }
  
  // Add automatic optimization
  formData.append('quality', 'auto');
  formData.append('fetch_format', 'auto');
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to upload image to Cloudinary');
  }
  
  return await response.json();
};

export const generateResponsiveImageUrls = (publicId: string, cloudName: string) => {
  return {
    small: getCloudinaryUrl(publicId, cloudName, { 
      width: 400, 
      height: 300, 
      crop: 'fill',
      quality: 'auto',
      format: 'auto'
    }),
    medium: getCloudinaryUrl(publicId, cloudName, { 
      width: 800, 
      height: 600, 
      crop: 'fill',
      quality: 'auto',
      format: 'auto'
    }),
    large: getCloudinaryUrl(publicId, cloudName, { 
      width: 1200, 
      height: 900, 
      crop: 'fill',
      quality: 'auto',
      format: 'auto'
    })
  };
};