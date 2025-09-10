import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon, Loader2, Edit, Clock, Zap } from 'lucide-react';
import { processImageFile, ProcessedImage, scheduleOldImageCleanup } from '@/utils/imageUtils';
import { CloudinaryConfig, getScheduledCleanups } from '@/utils/cloudinaryUtils';
import { showError } from '@/utils/toast';
import { ImageEditor } from './ImageEditor';

interface ImageUploadProps {
  images: ProcessedImage[];
  onImagesChange: (images: ProcessedImage[]) => void;
  maxImages?: number;
  className?: string;
  recipeSlug?: string; // For tracking cleanup
}

export const ImageUpload = ({ 
  images, 
  onImagesChange, 
  maxImages = 5,
  className,
  recipeSlug = 'unknown'
}: ImageUploadProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [cloudinaryConfig, setCloudinaryConfig] = useState<CloudinaryConfig | null>(null);
  const [editingFile, setEditingFile] = useState<File | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [scheduledCleanups, setScheduledCleanups] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load Cloudinary config
    const savedConfig = localStorage.getItem('cloudinary-config');
    if (savedConfig) {
      setCloudinaryConfig(JSON.parse(savedConfig));
    }

    // Load scheduled cleanups count
    const cleanups = getScheduledCleanups();
    setScheduledCleanups(cleanups.length);
  }, []);

  const processAndAddImage = async (file: File) => {
    setIsProcessing(true);
    try {
      const processedImage = await processImageFile(file, cloudinaryConfig || undefined);
      onImagesChange([...images, processedImage]);
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Erreur lors du traitement de l\'image');
    } finally {
      setIsProcessing(false);
    }
  };

  const processAndReplaceImage = async (file: File, index: number) => {
    setIsProcessing(true);
    try {
      // Get the old image for cleanup scheduling
      const oldImage = images[index];
      
      // Process the new image
      const processedImage = await processImageFile(file, cloudinaryConfig || undefined);
      
      // Replace the image in the array
      const newImages = [...images];
      newImages[index] = processedImage;
      onImagesChange(newImages);
      
      // Schedule cleanup of old image (will happen via GitHub Action after PR merge)
      if (oldImage.publicId && cloudinaryConfig) {
        scheduleOldImageCleanup([oldImage.sizes], recipeSlug, 'replaced');
        setScheduledCleanups(prev => prev + 1);
      }
      
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Erreur lors du traitement de l\'image');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileSelect = async (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = maxImages - images.length;
    
    if (fileArray.length > remainingSlots) {
      showError(`Vous ne pouvez ajouter que ${remainingSlots} image(s) supplémentaire(s)`);
      return;
    }

    // For single file, open editor
    if (fileArray.length === 1) {
      setEditingFile(fileArray[0]);
      setEditingIndex(null); // New image, not replacing
      setIsEditorOpen(true);
    } else {
      // For multiple files, process directly
      setIsProcessing(true);
      try {
        const processedImages = await Promise.all(
          fileArray.map(file => processImageFile(file, cloudinaryConfig || undefined))
        );
        onImagesChange([...images, ...processedImages]);
      } catch (error) {
        showError(error instanceof Error ? error.message : 'Erreur lors du traitement des images');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleEditorSave = (editedFile: File) => {
    if (editingIndex !== null) {
      // Replacing existing image
      processAndReplaceImage(editedFile, editingIndex);
    } else {
      // Adding new image
      processAndAddImage(editedFile);
    }
    setEditingFile(null);
    setEditingIndex(null);
  };

  const handleEditorClose = () => {
    setIsEditorOpen(false);
    setEditingFile(null);
    setEditingIndex(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeImage = async (index: number) => {
    const imageToRemove = images[index];
    
    // Remove from array first
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
    
    // Schedule cleanup from Cloudinary (will happen via GitHub Action after PR merge)
    if (imageToRemove.publicId && cloudinaryConfig) {
      scheduleOldImageCleanup([imageToRemove.sizes], recipeSlug, 'removed');
      setScheduledCleanups(prev => prev + 1);
    }
  };

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    onImagesChange(newImages);
  };

  const editImage = (index: number) => {
    const imageToEdit = images[index];
    setEditingFile(imageToEdit.file);
    setEditingIndex(index);
    setIsEditorOpen(true);
  };

  return (
    <div className={className}>
      {/* Cloudinary Status */}
      {cloudinaryConfig ? (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ Images hébergées sur Cloudinary ({cloudinaryConfig.cloudName})
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-green-600">
            <Zap className="w-3 h-3" />
            Les anciennes images seront supprimées automatiquement par GitHub Action
          </div>
          {scheduledCleanups > 0 && (
            <div className="flex items-center gap-1 mt-1 text-xs text-orange-600">
              <Clock className="w-3 h-3" />
              {scheduledCleanups} image(s) programmée(s) pour suppression automatique
            </div>
          )}
        </div>
      ) : (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-700">
            ⚠️ Cloudinary non configuré - les images seront stockées localement
          </p>
        </div>
      )}

      {/* Upload Area */}
      {images.length < maxImages && (
        <Card 
          className={`border-2 border-dashed transition-colors ${
            dragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <CardContent className="p-8 text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />
            
            {isProcessing ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  {cloudinaryConfig ? 'Upload vers Cloudinary...' : 'Traitement des images...'}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    Glissez vos images ici ou{' '}
                    <Button
                      type="button"
                      variant="link"
                      className="p-0 h-auto text-primary"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      parcourez
                    </Button>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, WEBP jusqu'à 10MB • {images.length}/{maxImages} images
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    💡 Sélectionnez une seule image pour l'éditer avant upload
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {images.map((processedImage, index) => (
            <Card key={index} className="relative group">
              <CardContent className="p-2">
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={processedImage.sizes.small}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Controls */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      onClick={() => editImage(index)}
                      className="h-8 w-8 p-0"
                      title="Éditer"
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                    
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      onClick={() => removeImage(index)}
                      className="h-8 w-8 p-0"
                      title="Supprimer"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                    
                    {index > 0 && (
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => moveImage(index, index - 1)}
                        className="h-8 w-8 p-0"
                        title="Déplacer vers la gauche"
                      >
                        ←
                      </Button>
                    )}
                    
                    {index < images.length - 1 && (
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => moveImage(index, index + 1)}
                        className="h-8 w-8 p-0"
                        title="Déplacer vers la droite"
                      >
                        →
                      </Button>
                    )}
                  </div>
                  
                  {/* Primary Image Badge */}
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      Principal
                    </div>
                  )}

                  {/* Cloudinary Badge */}
                  {processedImage.publicId && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                      Cloud
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground mt-2 truncate">
                  {processedImage.file.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Image Editor Modal */}
      {editingFile && (
        <ImageEditor
          file={editingFile}
          isOpen={isEditorOpen}
          onClose={handleEditorClose}
          onSave={handleEditorSave}
        />
      )}
    </div>
  );
};