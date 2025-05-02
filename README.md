
# Optimized React Project

A high-performance React application with TypeScript and Vite, featuring:

- Code splitting with React.lazy and Suspense
- Manual chunk optimization for vendor libraries
- Performance-focused CSS with system fonts
- Strict Mode for improved development

## Performance Optimizations

- **React.lazy and Suspense**: Components are loaded only when needed
- **Manual Chunk Splitting**: Separates vendor code (React, UI components) for better caching
- **System Font Stack**: Uses fast-loading system fonts for better performance
- **Optimized CSS**: Minimal styling with performance in mind
- **Strict Mode**: Helps catch potential issues during development
- **Terser Minification**: Removes comments and console logs in production
- **Optimized Development Builds**: Faster HMR with pre-bundling

## Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

- `/src` - Application source code
  - `/components` - Reusable React components
  - `/pages` - Page components lazy loaded by React Router
- `/public` - Static assets

## Browser Support

This project targets modern browsers with good ES6+ support.
