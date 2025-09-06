# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Gurkirat Singh Sandhu's personal portfolio website built with React (Create React App). It showcases experience, projects, skills, certifications, and education in a single-page application format with smooth scrolling navigation.

## Development Commands

### Core Commands
```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm start

# Run tests
npm test

# Run a specific test file
npm test -- --testNamePattern="App"

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Testing Commands
```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests without watch mode
npm test -- --watchAll=false
```

## Architecture Overview

### Component Structure
The application follows a modular component architecture with a single-page layout:

- **App.js**: Main application shell with sticky navigation and component orchestration
- **Components**: Self-contained section components that represent different portfolio sections
  - `Hero.jsx`: Landing section with profile image and contact actions
  - `About.jsx`: Brief bio and background information
  - `Experience.jsx`: Professional experience with company cards
  - `Projects.jsx`: Featured projects with descriptions
  - `Certifications.jsx`: Professional certifications display
  - `Skills.jsx`: Technical skills showcase
  - `Education.jsx`: Educational background
  - `Footer.jsx`: Contact information and links

### Styling Architecture
- **CSS Custom Properties**: Consistent design system using CSS variables in `index.css`
  - Dark theme with gold accent colors (`--accent`, `--gold-*` gradient stops)
  - Monochrome base colors (`--bg`, `--text`, `--muted`)
- **Component-Specific Styles**: `App.css` contains layout and component-specific styles
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Visual Effects**: Backdrop filters, gradients, and box shadows for modern aesthetics

### Key Design Patterns
- **CSS Grid Layouts**: Used extensively for responsive card layouts and section structure
- **Gradient Text Effects**: Gold gradients applied to headings and accent elements using `background-clip: text`
- **Card Components**: Consistent card styling with backdrop blur effects and subtle borders
- **Icon Integration**: React Icons library used throughout for consistent iconography

### Navigation System
- Sticky navigation with smooth scrolling to section anchors
- Hash-based routing using `href="#section-id"` for internal navigation
- Visual navigation indicators with separator pipes

### Asset Management
- Static assets stored in `public/` directory
- Profile images and resume PDF served via `process.env.PUBLIC_URL`
- Favicon and PWA manifest configured

### Reusable Components
- **Carousel.jsx**: Generic carousel component with smooth scrolling and navigation controls
- **Button styling**: Consistent `.btn` class with hover states and icon alignment

## Development Notes

### Component Development
- Components use functional React with hooks where needed (useRef in Carousel)
- Props are passed down for data and rendering functions
- Semantic HTML with proper ARIA labels for accessibility

### Styling Guidelines
- Use existing CSS custom properties for consistent theming
- Follow the established card layout patterns for new sections
- Maintain responsive design with CSS Grid `minmax()` and `clamp()` functions
- Apply the gold gradient pattern to new headings and accent elements

### Content Management
- Portfolio data is hardcoded within components (projects array in Projects.jsx)
- External links use `target="_blank"` with `rel="noreferrer"` for security
- Contact information and social links centralized in Hero component

### Deployment
- Configured for GitHub Pages deployment via `gh-pages` package
- Homepage URL set to `https://gurkiratsingh.me` in package.json
- Build artifacts excluded from version control via .gitignore
