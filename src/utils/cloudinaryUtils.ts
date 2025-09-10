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

export interface ImageCleanupRecord {
  publicId: string;
  reason: 'replaced' | 'removed';
  recipeSlug: string;
  timestamp: number;
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

export const scheduleImageCleanup = (
  publicIds: string[], 
  recipeSlug: string, 
  reason: 'replaced' | 'removed' = 'replaced'
): void => {
  try {
    // Get existing cleanup records
    const existingRecords = getScheduledCleanups();
    
    // Add new records
    const newRecords: ImageCleanupRecord[] = publicIds.map(publicId => ({
      publicId,
      reason,
      recipeSlug,
      timestamp: Date.now()
    }));
    
    // Store updated records
    const allRecords = [...existingRecords, ...newRecords];
    localStorage.setItem('cloudinary-cleanup-queue', JSON.stringify(allRecords));
    
    console.log(`Scheduled ${publicIds.length} image(s) for cleanup via GitHub Action:`, publicIds);
  } catch (error) {
    console.error('Error scheduling image cleanup:', error);
  }
};

export const getScheduledCleanups = (): ImageCleanupRecord[] => {
  try {
    const stored = localStorage.getItem('cloudinary-cleanup-queue');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading cleanup queue:', error);
    return [];
  }
};

export const clearScheduledCleanups = (publicIds?: string[]): void => {
  try {
    if (!publicIds) {
      // Clear all
      localStorage.removeItem('cloudinary-cleanup-queue');
      console.log('Cleared all scheduled cleanups');
      return;
    }
    
    // Clear specific IDs
    const existingRecords = getScheduledCleanups();
    const filteredRecords = existingRecords.filter(record => !publicIds.includes(record.publicId));
    
    if (filteredRecords.length === 0) {
      localStorage.removeItem('cloudinary-cleanup-queue');
    } else {
      localStorage.setItem('cloudinary-cleanup-queue', JSON.stringify(filteredRecords));
    }
    
    console.log(`Cleared ${publicIds.length} cleanup record(s)`);
  } catch (error) {
    console.error('Error clearing cleanup queue:', error);
  }
};

export const generateCleanupInstructions = (): string => {
  const records = getScheduledCleanups();
  
  if (records.length === 0) {
    return '';
  }
  
  const groupedByReason = records.reduce((acc, record) => {
    if (!acc[record.reason]) acc[record.reason] = [];
    acc[record.reason].push(record.publicId);
    return acc;
  }, {} as Record<string, string[]>);
  
  let instructions = '\n## 🧹 Cloudinary Cleanup Instructions\n\n';
  instructions += 'The following images will be automatically cleaned up by GitHub Action after this PR is merged:\n\n';
  
  Object.entries(groupedByReason).forEach(([reason, publicIds]) => {
    instructions += `### ${reason === 'replaced' ? 'Replaced Images' : 'Removed Images'}\n`;
    publicIds.forEach(publicId => {
      instructions += `- \`${publicId}\`\n`;
    });
    instructions += '\n';
  });
  
  instructions += '**Automatic Cleanup:**\n';
  instructions += '- ✅ GitHub Action will run automatically when this PR is merged\n';
  instructions += '- 🤖 No manual intervention required\n';
  instructions += '- 💬 Results will be posted as a comment on this PR\n\n';
  
  instructions += `*Total images scheduled for cleanup: ${records.length}*\n`;
  
  return instructions;
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

// Helper function to extract public ID from Cloudinary URL
export const extractPublicIdFromUrl = (url: string): string | null => {
  try {
    // Match Cloudinary URL pattern and extract public ID
    const match = url.match(/\/v\d+\/(.+)\.(jpg|jpeg|png|gif|webp)$/i);
    if (match) {
      return match[1];
    }
    
    // Alternative pattern for URLs with transformations
    const transformMatch = url.match(/\/image\/upload\/[^/]+\/(.+)\.(jpg|jpeg|png|gif|webp)$/i);
    if (transformMatch) {
      return transformMatch[1];
    }
    
    // Pattern for URLs with multiple transformations
    const multiTransformMatch = url.match(/\/image\/upload\/.*?\/([^/]+)\.(jpg|jpeg|png|gif|webp)$/i);
    if (multiTransformMatch) {
      return multiTransformMatch[1];
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting public ID from URL:', error);
    return null;
  }
};