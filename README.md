# Nos Recettes - Recipe Website

A modern, responsive recipe website built with React, TypeScript, and Tailwind CSS. Features a beautiful interface for browsing recipes and an admin panel for adding new recipes via GitHub pull requests.

## 🌟 Features

- **Beautiful Recipe Display**: Clean, card-based layout with search and filtering
- **Smart Search**: Search by recipe name, ingredients, or tags
- **Category Filtering**: Filter by recipe categories and difficulty levels
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **GitHub Integration**: Add new recipes through a web form that creates pull requests
- **Static Hosting**: Deployable to GitHub Pages with automatic CI/CD

## 🚀 Live Demo

Visit the live site: [https://algritz.github.io/nosrecettes](https://algritz.github.io/nosrecettes)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

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

## 📝 Adding New Recipes

### Method 1: Web Interface (Recommended)

1. Visit `/admin` on your deployed site
2. Configure GitHub integration (one-time setup)
3. Fill out the recipe form
4. Submit to automatically create a pull request

### Method 2: Using the Helper Script

```bash
node scripts/create-recipe.js "Recipe Name"
```

Then edit the generated file and add it to `src/recipes/index.ts`.

### Method 3: Manual Creation

1. Create a new file in `src/recipes/` following the pattern: `recipe-name.ts`
2. Use the recipe template (see existing recipes for examples)
3. Add the import and recipe to `src/recipes/index.ts`

## 🖼️ Adding Recipe Images

1. Add images to `public/images/`
2. Use the recipe slug as filename: `recipe-slug.jpg`
3. Recommended size: 800x600px or larger
4. Keep file size under 500KB for best performance

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
├── pages/              # Page components
├── recipes/            # Recipe data files
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── services/           # External service integrations
└── lib/                # Shared libraries
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-recipe
   ```
3. **Add your recipe** using one of the methods above
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
- Ensure you have rights to share the recipe

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you encounter any issues or have questions:

1. Check existing [GitHub Issues](https://github.com/algritz/nosrecettes/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Made with ❤️ for sharing delicious recipes**