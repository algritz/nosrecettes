import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { processImageFile, ProcessedImage } from '@/utils/imageUtils';
import { showError } from '@/utils/toast';

interface ImageUploadProps {
  images: ProcessedImage[];
  onImagesChange: (images: ProcessedImage[]) => void;
  maxImages?: number;
  className?: string;
}

export const ImageUpload = ({ 
  images, 
  onImagesChange, 
  maxImages = 5,
  className 
}: ImageUploadProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = maxImages - images.length;
    
    if (fileArray.length > remainingSlots) {
      showError(`Vous ne pouvez ajouter que ${remainingSlots} image(s) supplémentaire(s)`);
      return;
    }

    setIsProcessing(true);

    try {
      const processedImages = await Promise.all(
        fileArray.map(file => processImageFile(file))
      );
      
      onImagesChange([...images, ...processedImages]);
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Erreur lors du traitement de l\'image');
    } finally {
      setIsProcessing(false);
    }
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

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    onImagesChange(newImages);
  };

  return (
    <div className={className}>
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
                <p className="text-sm text-muted-foreground">Traitement des images...</p>
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
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      onClick={() => removeImage(index)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    
                    {index > 0 && (
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => moveImage(index, index - 1)}
                        className="h-8 w-8 p-0"
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
                </div>
                
                <p className="text-xs text-muted-foreground mt-2 truncate">
                  {processedImage.file.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};