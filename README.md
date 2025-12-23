# Developer Portfolio

A professional, high-performance portfolio website built with React, Vite, and Tailwind CSS.
Designed to attract high-value freelance clients and founders.

## Features
- ⚡ **Blazing Fast**: Built with Vite and optimized for performance.
- 🎨 **Modern Design**: Clean aesthetics using Tailwind CSS.
- 🌙 **Dark Mode**: Fully supported system and manual theme toggling.
- 📱 **Responsive**: Mobile-first approach.
- ♿ **Accessible**: Semantic HTML and keyboard navigation support.

## Project Structure
```
src/
├── components/   # Reusable UI components (Navbar, Footer, Buttons)
├── sections/     # Page sections (Hero, About, Projects, etc.)
├── data/         # Content data (Skills, Project details)
├── hooks/        # Custom React hooks (useTheme)
└── utils/        # Utility functions (clsx, twMerge)
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization
- **Theme**: Edit `tailwind.config.js` to change primary colors.
- **Content**: Update files in `src/data/` to change skills and projects without touching the UI code.

## Tech Stack
- React 18+
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React
