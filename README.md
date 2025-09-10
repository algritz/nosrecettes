# Nos Recettes - Recipe Website

A modern, responsive recipe website built with React, TypeScript, and Tailwind CSS. Features a beautiful interface for browsing recipes and an admin panel for adding new recipes via GitHub pull requests with automatic Cloudinary image cleanup.

## 🌟 Features

- **Beautiful Recipe Display**: Clean, card-based layout with search and filtering
- **Smart Search**: Search by recipe name, ingredients, or tags
- **Category Filtering**: Filter by recipe categories and difficulty levels
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **GitHub Integration**: Add new recipes through a web form that creates pull requests
- **Image Management**: Upload and edit images with automatic Cloudinary hosting
- **Automatic Cleanup**: GitHub Action automatically cleans up old Cloudinary images
- **Static Hosting**: Deployable to GitHub Pages with automatic CI/CD

## 🚀 Live Demo

Visit the live site: [https://algritz.github.io/nosrecettes](https://algritz.github.io/nosrecettes)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router
- **Icons**: Lucide React
- **Image Hosting**: Cloudinary
- **Image Editing**: React Image Crop
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Cloudinary account (for image hosting)
- GitHub repository with Actions enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/algritz/nosrecettes.git
   cd nosrecettes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## ⚙️ Configuration

### GitHub Integration Setup

1. **Create a Personal Access Token**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Create a token with `repo` permissions
   - Copy the token for later use

2. **Configure in the app**
   - Visit `/admin` on your deployed site
   - Enter your GitHub repository details and token
   - Test the connection

### Cloudinary Setup

1. **Create a Cloudinary account**
   - Sign up at [cloudinary.com](https://cloudinary.com)
   - Note your Cloud Name from the dashboard

2. **Create an Upload Preset**
   - Go to Settings → Upload → Add upload preset
   - Create an "unsigned" preset
   - Note the preset name

3. **Configure in the app**
   - Visit `/admin` on your deployed site
   - Enter your Cloudinary details
   - Test the connection

### GitHub Action Setup (Required for automatic cleanup)

1. **Add Cloudinary URL to GitHub Secrets**
   ```bash
   # Go to your repository Settings → Secrets and variables → Actions
   # Add a new secret named CLOUDINARY_URL with the value:
   cloudinary://API_Key:API_Secret@Cloud_Name
   ```
   
   You can find these values in your Cloudinary dashboard under "API Keys".

2. **Enable GitHub Actions**
   - Ensure GitHub Actions are enabled in your repository settings
   - The cleanup workflow will run automatically when PRs are merged

## 📝 Adding New Recipes

### Method 1: Web Interface (Recommended)

1. Visit `/admin` on your deployed site
2. Configure GitHub and Cloudinary integration (one-time setup)
3. Click "Add New Recipe"
4. Fill out the recipe form with images
5. Submit to automatically create a pull request
6. When the PR is merged, old images are automatically cleaned up

### Method 2: Using the Helper Script

```bash
node scripts/create-recipe.js "Recipe Name"
```

Then edit the generated file and add it to `src/recipes/index.ts`.

### Method 3: Manual Creation

1. Create a new file in `src/recipes/` following the pattern: `recipe-name.ts`
2. Use the recipe template (see existing recipes for examples)
3. Add the import and recipe to `src/recipes/index.ts`

## 🖼️ Image Management

### Automatic Features
- **Image Editing**: Crop, zoom, and rotate images before upload
- **Responsive Images**: Automatically generates multiple sizes (small, medium, large)
- **Cloudinary Hosting**: Images are hosted on Cloudinary CDN
- **Automatic Cleanup**: Old images are automatically deleted when replaced

### Image Workflow
1. **Upload**: Drag & drop or select images
2. **Edit**: Crop and adjust images with built-in editor
3. **Process**: Images are uploaded to Cloudinary in multiple sizes
4. **Replace**: When updating images, old ones are scheduled for cleanup
5. **Cleanup**: GitHub Action automatically deletes old images after PR merge

## 🚀 Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Update base path**
   - Edit `vite.config.ts`
   - Change `/nosrecettes/` to match your repository name

3. **Push to main branch**
   - GitHub Actions will automatically build and deploy

### Manual Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ImageUpload.tsx # Image upload with editing
│   └── ImageEditor.tsx # Image cropping/editing
├── pages/              # Page components
├── recipes/            # Recipe data files
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── services/           # External service integrations
└── lib/                # Shared libraries

.github/
└── workflows/
    ├── deploy.yml      # Deployment workflow
    └── cleanup-cloudinary.yml  # Image cleanup workflow
```

## 🤖 GitHub Actions

### Deployment Action
Automatically builds and deploys the site when changes are pushed to main.

### Cloudinary Cleanup Action
Automatically cleans up old Cloudinary images when PRs are merged:
- Extracts image IDs from PR descriptions
- Deletes old images using Cloudinary CLI
- Posts cleanup results as PR comments
- Requires `CLOUDINARY_URL` secret to be configured

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-recipe
   ```
3. **Add your recipe** using the web interface or manual methods
4. **Commit your changes**
   ```bash
   git commit -m "Add: Pouding Chômeur recipe"
   ```
5. **Push and create a pull request**

### Recipe Guidelines

- Use clear, descriptive titles
- Include accurate prep/cook times
- List ingredients in order of use
- Write step-by-step instructions
- Add relevant tags for searchability
- Use high-quality images (will be automatically optimized)
- Ensure you have rights to share the recipe

## 🔧 Environment Variables

For production deployment, you may want to set:

```bash
# GitHub Repository (for PR creation)
GITHUB_OWNER=your-username
GITHUB_REPO=your-repo-name

# Cloudinary (for image hosting)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_UPLOAD_PRESET=your-preset-name

# GitHub Actions Secret (for cleanup)
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
- Image editing with [React Image Crop](https://github.com/DominicTobias/react-image-crop)
- Image hosting by [Cloudinary](https://cloudinary.com/)
- Powered by [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you encounter any issues or have questions:

1. Check existing [GitHub Issues](https://github.com/algritz/nosrecettes/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Made with ❤️ for sharing delicious recipes**