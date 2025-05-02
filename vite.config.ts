
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
    // Add mainFields to ensure proper module resolution
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
          // UI components in another chunk - specify individual radix packages instead of @radix-ui
          'vendor-ui': [
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-popover',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-label',
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
