# Nos Recettes - Recipe Website

A modern, responsive recipe website built with React, TypeScript, and Tailwind CSS. Features a beautiful interface for browsing recipes and a comprehensive admin panel for managing recipes and categories via GitHub pull requests with automatic Cloudinary image management.

## 🌟 Features

### Recipe Management
- **Beautiful Recipe Display**: Clean, card-based layout with responsive images
- **Advanced Search & Filtering**: Search by recipe name, ingredients, tags, or categories
- **Category Management**: Organize recipes with multiple categories per recipe
- **Infinite Scroll**: Smooth loading of recipes with pagination
- **Recipe Details**: Comprehensive recipe pages with ingredients, instructions, timing, and notes

### Content Management
- **Web-Based Recipe Editor**: Add and edit recipes through intuitive forms
- **GitHub Integration**: All changes create pull requests for review and collaboration
- **CSV Import**: Bulk import recipes from CSV files with intelligent parsing
- **Category Management**: Add, remove, and organize recipe categories
- **Sectioned Content**: Organize ingredients and instructions into logical sections

### Image Management
- **Advanced Image Editor**: Crop, rotate, zoom, and adjust images before upload
- **Cloudinary Integration**: Automatic image hosting with responsive sizing (small, medium, large)
- **Multiple Images**: Support for multiple images per recipe with gallery view
- **Automatic Cleanup**: GitHub Actions automatically clean up old images when replaced
- **Image Optimization**: Automatic format conversion and quality optimization

### Technical Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Static Hosting**: Deployable to GitHub Pages with automatic CI/CD
- **Dynamic Index**: Automatic recipe discovery eliminates merge conflicts
- **Backward Compatibility**: Supports both old and new recipe formats
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions

## 🚀 Live Demo

Visit the live site: [https://algritz.github.io/nosrecettes](https://algritz.github.io/nosrecettes)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router with GitHub Pages support
- **Icons**: Lucide React
- **Image Management**: Cloudinary + React Image Crop
- **Forms**: React Hook Form with Zod validation
- **State Management**: React hooks with custom hooks for complex state
- **Build Tool**: Vite with optimized production builds
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

### GitHub Action Setup (Required for automatic image cleanup)

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
4. Fill out the comprehensive recipe form:
   - Basic information (title, description, categories)
   - Timing (prep, cook, marinating time)
   - Images with built-in editor
   - Sectioned ingredients and instructions
   - Additional info (accompaniment, wine pairing, source, notes)
5. Submit to automatically create a pull request
6. When the PR is merged, old images are automatically cleaned up

### Method 2: CSV Import

1. Visit `/admin` → "Import from CSV"
2. Upload a CSV file with recipe data
3. Review and select recipes to import
4. Apply selected recipes to the form for editing
5. Submit as normal

### Method 3: Manual Creation

1. Create a new file in `src/recipes/` following the pattern: `recipe-name.ts`
2. Use the recipe template (see existing recipes for examples)
3. The recipe will be automatically discovered on next build

## 🖼️ Image Management

### Automatic Features
- **Image Editing**: Crop, zoom, rotate, and adjust aspect ratios before upload
- **Responsive Images**: Automatically generates small (400px), medium (800px), and large (1200px) versions
- **Cloudinary Hosting**: Images are hosted on Cloudinary CDN with automatic optimization
- **Format Optimization**: Automatic WebP conversion and quality optimization
- **Automatic Cleanup**: Old images are automatically deleted when replaced via GitHub Actions

### Image Workflow
1. **Upload**: Drag & drop or select images (supports PNG, JPG, WebP up to 10MB)
2. **Edit**: Use the built-in editor to crop and adjust images
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
│   ├── ImageEditor.tsx # Advanced image cropping/editing
│   ├── CSVImporter.tsx # CSV recipe import functionality
│   └── CategorySelector.tsx # Multi-category selection
├── pages/              # Page components
│   ├── Index.tsx       # Home page with infinite scroll
│   ├── NewRecipe.tsx   # Recipe creation form
│   ├── EditRecipe.tsx  # Recipe editing form
│   ├── Admin.tsx       # Admin configuration
│   └── ManageCategories.tsx # Category management
├── recipes/            # Recipe data files (auto-discovered)
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
│   ├── useInfiniteRecipes.ts # Infinite scroll logic
│   ├── useRecipeSearch.ts    # Search and filtering
│   └── useCategoryManager.ts # Category management
├── utils/              # Utility functions
│   ├── imageUtils.ts   # Image processing utilities
│   ├── cloudinaryUtils.ts # Cloudinary integration
│   └── csvParser.ts    # CSV parsing logic
├── services/           # External service integrations
│   └── github.ts       # GitHub API integration
└── data/               # Static data
    └── categories.ts   # Default recipe categories

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

## 🔧 Advanced Features

### Recipe Categories
- **Multiple Categories**: Each recipe can belong to multiple categories
- **Dynamic Categories**: Add new categories through the web interface
- **Category Management**: Dedicated page for adding/removing categories
- **Backward Compatibility**: Supports both old single-category and new multi-category formats

### Sectioned Content
- **Sectioned Ingredients**: Organize ingredients into logical groups (e.g., "For the sauce", "For the meat")
- **Sectioned Instructions**: Break instructions into phases (e.g., "Preparation", "Cooking", "Assembly")
- **Flexible Format**: Switch between simple lists and sectioned content as needed

### Search & Discovery
- **Advanced Search**: Search across titles, descriptions, ingredients, and tags
- **Category Filtering**: Filter by one or multiple categories
- **Infinite Scroll**: Smooth loading of large recipe collections
- **Performance Optimized**: Efficient filtering and pagination

### Content Import
- **CSV Import**: Bulk import recipes from spreadsheets or other systems
- **Intelligent Parsing**: Automatically extracts ingredients, instructions, timing, and metadata
- **Preview & Edit**: Review imported recipes before adding to the collection
- **Flexible Format**: Supports various CSV formats and structures

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
- Include accurate prep/cook times and marinating time if applicable
- List ingredients in order of use, consider using sections for complex recipes
- Write step-by-step instructions, use sections for multi-phase recipes
- Add relevant tags for searchability
- Use high-quality images (will be automatically optimized)
- Include accompaniment suggestions and wine pairings when appropriate
- Add source attribution and personal notes
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