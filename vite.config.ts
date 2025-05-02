
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Add mainFields to improve module resolution
    mainFields: ['module', 'jsnext:main', 'jsnext', 'main'],
  },
  build: {
    // Enable minification for production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    // Manual chunk splitting for optimal caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into its own chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // UI components in another chunk - reference specific packages
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
          ],
          // Query library in its own chunk
          'vendor-query': ['@tanstack/react-query'],
        },
      },
    },
    // Source maps for production debugging if needed
    sourcemap: mode !== 'production',
    // Ensure consistent chunk sizes
    chunkSizeWarningLimit: 1000,
  },
  // Speed up development builds
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
