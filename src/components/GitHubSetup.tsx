import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, Save, ExternalLink } from 'lucide-react'

interface GitHubSetupProps {
  onConfigSaved: (config: {
    owner: string
    repo: string
    token: string
  }) => void
}

export const GitHubSetup = ({ onConfigSaved }: GitHubSetupProps) => {
  const [config, setConfig] = useState({
    owner: '',
    repo: '',
    token: '',
  })
  const [showToken, setShowToken] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const handleSave = () => {
    if (config.owner && config.repo && config.token) {
      // Store in localStorage (in production, consider more secure storage)
      localStorage.setItem('github-config', JSON.stringify(config))
      onConfigSaved(config)
      setIsValid(true)
    }
  }

  const handleTestConnection = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}`,
        {
          headers: {
            Authorization: `token ${config.token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        },
      )

      if (response.ok) {
        setIsValid(true)
        handleSave()
      } else {
        setIsValid(false)
        alert(
          'Impossible de se connecter au repository. Vérifiez vos informations.',
        )
      }
    } catch {
      setIsValid(false)
      alert('Erreur de connexion. Vérifiez vos informations.')
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Configuration GitHub</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription>
            Pour utiliser la création automatique de pull requests, vous devez
            configurer l'accès à votre repository GitHub.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Propriétaire du repository
            </label>
            <Input
              value={config.owner}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, owner: e.target.value }))
              }
              placeholder="votre-nom-utilisateur"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Nom du repository
            </label>
            <Input
              value={config.repo}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, repo: e.target.value }))
              }
              placeholder="nos-recettes"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Token d'accès GitHub
              <a
                href="https://github.com/settings/tokens/new?scopes=repo&description=Recipe%20Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <ExternalLink className="w-4 h-4 inline" />
                Créer un token
              </a>
            </label>
            <div className="relative">
              <Input
                type={showToken ? 'text' : 'password'}
                value={config.token}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, token: e.target.value }))
                }
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowToken(!showToken)}
              >
                {showToken ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Le token doit avoir les permissions "repo" pour créer des branches
              et pull requests.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleTestConnection}
            disabled={!config.owner || !config.repo || !config.token}
          >
            Tester la connexion
          </Button>
          {isValid && (
            <Button onClick={handleSave} variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          )}
        </div>

        {isValid && (
          <Alert>
            <AlertDescription className="text-green-600">
              ✅ Configuration GitHub sauvegardée avec succès!
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
