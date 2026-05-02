import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import pkg from './package.json';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0',
  },

  preview: {
    port: 8080,
    strictPort: true,
  },

  logLevel: 'info',
  optimizeDeps: { include: ['react', 'react-dom'] },

  build: {
    minify: 'oxc',
    target: 'esnext',
    sourcemap: false,

    chunkSizeWarningLimit: 800,

    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|react-hook-form)[\\/]/,
            },

            {
              name: 'ui',
              test: /node_modules[\\/]@radix-ui[\\/]/,
            },

            {
              name: 'motion',
              test: /node_modules[\\/]motion[\\/]/,
            },

            {
              name: 'icons',
              test: /node_modules[\\/](lucide-react|@tabler[\\/]icons-react)[\\/]/,
            },

            {
              name: 'date-utils',
              test: /node_modules[\\/](date-fns|react-day-picker)[\\/]/,
            },

            {
              name: 'vendor',
              test: /node_modules/,
            },
          ],
        },
      },
    },
  },
});
