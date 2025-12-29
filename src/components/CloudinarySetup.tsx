import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Save, ExternalLink, TestTube } from 'lucide-react'
import { uploadToCloudinary } from '@/utils/cloudinaryUtils'

interface CloudinarySetupProps {
  onConfigSaved: (config: { cloudName: string; uploadPreset: string }) => void
}

export const CloudinarySetup = ({ onConfigSaved }: CloudinarySetupProps) => {
  const [config, setConfig] = useState({
    cloudName: '',
    uploadPreset: '',
  })
  const [isValid, setIsValid] = useState(false)
  const [isTesting, setIsTesting] = useState(false)

  const handleSave = () => {
    if (config.cloudName && config.uploadPreset) {
      localStorage.setItem('cloudinary-config', JSON.stringify(config))
      onConfigSaved(config)
      setIsValid(true)
    }
  }

  const testConnection = () => {
    if (!config.cloudName || !config.uploadPreset) {
      alert('Veuillez remplir tous les champs avant de tester.')
      return
    }

    setIsTesting(true)

    try {
      // Create a small test image (1x1 pixel transparent PNG)
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1

      canvas.toBlob(async (blob) => {
        if (!blob) {
          throw new Error('Failed to create test image')
        }

        const testFile = new File([blob], 'test.png', { type: 'image/png' })

        try {
          await uploadToCloudinary(testFile, config, 'recipe-manager-test')
          setIsValid(true)
          alert(
            '✅ Configuration Cloudinary valide! Vous pouvez maintenant sauvegarder.',
          )
        } catch (error) {
          setIsValid(false)
          alert(
            '❌ Erreur de configuration. Vérifiez votre Cloud Name et Upload Preset.',
          )
          console.error('Cloudinary test error:', error)
        } finally {
          setIsTesting(false)
        }
      }, 'image/png')
    } catch (error) {
      setIsValid(false)
      alert('❌ Erreur lors du test de connexion.')
      console.error('Test error:', error)
      setIsTesting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Configuration Cloudinary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription>
            Pour héberger les images de vos recettes, vous devez configurer un
            compte Cloudinary gratuit.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Cloud Name
              <a
                href="https://cloudinary.com/console"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <ExternalLink className="w-4 h-4 inline" />
                Trouver dans votre dashboard
              </a>
            </label>
            <Input
              value={config.cloudName}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, cloudName: e.target.value }))
              }
              placeholder="votre-cloud-name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Preset (unsigned)
              <a
                href="https://cloudinary.com/console/settings/upload"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <ExternalLink className="w-4 h-4 inline" />
                Créer un preset
              </a>
            </label>
            <Input
              value={config.uploadPreset}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, uploadPreset: e.target.value }))
              }
              placeholder="votre-upload-preset"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Créez un "unsigned upload preset" dans les paramètres de
              Cloudinary.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Instructions rapides:</h4>
          <ol className="text-sm space-y-1 list-decimal list-inside">
            <li>
              Créez un compte gratuit sur{' '}
              <a
                href="https://cloudinary.com"
                target="_blank"
                className="text-blue-500"
              >
                cloudinary.com
              </a>
            </li>
            <li>Copiez votre "Cloud Name" depuis le dashboard</li>
            <li>Allez dans Settings → Upload → Add upload preset</li>
            <li>Créez un preset "Unsigned" et copiez son nom</li>
          </ol>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={testConnection}
            disabled={!config.cloudName || !config.uploadPreset || isTesting}
            variant="outline"
          >
            <TestTube className="w-4 h-4 mr-2" />
            {isTesting ? 'Test en cours...' : 'Tester la connexion'}
          </Button>

          {isValid && (
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          )}
        </div>

        {isValid && (
          <Alert>
            <AlertDescription className="text-green-600">
              ✅ Configuration Cloudinary sauvegardée avec succès!
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
