import { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RotateCcw, ZoomIn, ZoomOut, Move, Check, X } from 'lucide-react';
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface ImageEditorProps {
  file: File;
  isOpen: boolean;
  onClose: () => void;
  onSave: (editedFile: File) => void;
}

export const ImageEditor = ({ file, isOpen, onClose, onSave }: ImageEditorProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load image when file changes
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  // Initialize crop when image loads
  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect || 16 / 9,
        width,
        height
      ),
      width,
      height
    );
    
    setCrop(crop);
  }, [aspect]);

  const handleZoomChange = (value: number[]) => {
    setZoom(value[0]);
  };

  const handleRotationChange = (value: number[]) => {
    setRotation(value[0]);
  };

  const resetTransforms = () => {
    setZoom(1);
    setRotation(0);
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      const newCrop = centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 90,
          },
          aspect || 16 / 9,
          width,
          height
        ),
        width,
        height
      );
      setCrop(newCrop);
    }
  };

  const setAspectRatio = (newAspect: number | undefined) => {
    setAspect(newAspect);
    if (imgRef.current && newAspect) {
      const { width, height } = imgRef.current;
      const newCrop = centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 90,
          },
          newAspect,
          width,
          height
        ),
        width,
        height
      );
      setCrop(newCrop);
    }
  };

  const generateEditedImage = useCallback(async (): Promise<File> => {
    const image = imgRef.current;
    const canvas = canvasRef.current;
    
    if (!image || !canvas || !completedCrop) {
      throw new Error('Missing required elements for image processing');
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    // Calculate dimensions
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;

    // Set canvas size
    canvas.width = cropWidth;
    canvas.height = cropHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply transformations
    ctx.save();
    
    // Move to center for rotation
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Apply rotation
    if (rotation !== 0) {
      ctx.rotate((rotation * Math.PI) / 180);
    }
    
    // Apply zoom and draw image
    const drawWidth = cropWidth * zoom;
    const drawHeight = cropHeight * zoom;
    
    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      -drawWidth / 2,
      -drawHeight / 2,
      drawWidth,
      drawHeight
    );
    
    ctx.restore();

    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to create blob from canvas'));
            return;
          }
          
          // Create new file with same name and type
          const editedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          });
          
          resolve(editedFile);
        },
        file.type,
        0.9 // Quality
      );
    });
  }, [completedCrop, zoom, rotation, file]);

  const handleSave = async () => {
    if (!completedCrop) return;
    
    setIsProcessing(true);
    try {
      const editedFile = await generateEditedImage();
      onSave(editedFile);
      onClose();
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Erreur lors du traitement de l\'image');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Éditer l'image</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Aspect Ratio Controls */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={aspect === 16/9 ? "default" : "outline"}
              size="sm"
              onClick={() => setAspectRatio(16/9)}
            >
              16:9
            </Button>
            <Button
              variant={aspect === 4/3 ? "default" : "outline"}
              size="sm"
              onClick={() => setAspectRatio(4/3)}
            >
              4:3
            </Button>
            <Button
              variant={aspect === 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setAspectRatio(1)}
            >
              1:1
            </Button>
            <Button
              variant={aspect === undefined ? "default" : "outline"}
              size="sm"
              onClick={() => setAspectRatio(undefined)}
            >
              Libre
            </Button>
          </div>

          {/* Image Crop Area */}
          <Card>
            <CardContent className="p-4">
              <div className="relative max-h-96 overflow-auto">
                {imageSrc && (
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                    minWidth={50}
                    minHeight={50}
                  >
                    <img
                      ref={imgRef}
                      src={imageSrc}
                      alt="Crop preview"
                      onLoad={onImageLoad}
                      style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                        transformOrigin: 'center',
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </ReactCrop>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Zoom Control */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  Zoom: {zoom.toFixed(1)}x
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={[zoom]}
                  onValueChange={handleZoomChange}
                  min={0.5}
                  max={3}
                  step={0.1}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Rotation Control */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Rotation: {rotation}°
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={[rotation]}
                  onValueChange={handleRotationChange}
                  min={-180}
                  max={180}
                  step={1}
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={resetTransforms}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Réinitialiser
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                <X className="w-4 h-4 mr-2" />
                Annuler
              </Button>
              <Button 
                onClick={handleSave} 
                disabled={!completedCrop || isProcessing}
              >
                <Check className="w-4 h-4 mr-2" />
                {isProcessing ? 'Traitement...' : 'Appliquer'}
              </Button>
            </div>
          </div>

          {/* Hidden canvas for processing */}
          <canvas
            ref={canvasRef}
            style={{ display: 'none' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};