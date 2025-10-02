# Site Personalize Jalecos

## Overview
This is a modern institutional website for "Personalize Jalecos", a store specializing in customized medical lab coats and scrubs. The site features a professional e-commerce-like experience with product showcases, collections catalog, and contact information.

## Technologies
- **React 18**: UI library
- **Vite 5**: Build tool and development server
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion 11**: Animation library
- **Lucide React**: Icon library

## Project Structure
```
/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind directives
├── public/
│   └── placeholder/     # Product and hero images
├── index.html           # HTML template
├── vite.config.js       # Vite configuration (configured for Replit)
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts

```

## Features
- Hero section with call-to-action
- Product collections showcase (Premium, Surgical, Academic, Scrubs)
- Feature cards highlighting quality, customization, and delivery
- Responsive design with dark theme
- Smooth animations with Framer Motion

## Development
The server runs on port 5000 and is configured to work with Replit's proxy system.

### Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Configuration Notes
- Vite is configured to bind to `0.0.0.0:5000` for Replit compatibility
- HMR (Hot Module Reload) is configured for WebSocket connections
- Tailwind is set up to scan all JSX/TSX files in src/

## Recent Changes
- 2025-10-02: Initial project setup from GitHub import
- Configured Vite, Tailwind CSS, and React
- Added stock images for product showcase
- Set up proper file structure and workflows
