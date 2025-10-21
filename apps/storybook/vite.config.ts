/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/storybook',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [vue()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@/storybook': path.resolve(__dirname, './src'),
      '@monorepo-frontend/core': path.resolve(__dirname, '../../libs/core/src'),
      '@monorepo-frontend/icons': path.resolve(
        __dirname,
        '../../libs/icons/src',
      ),
      '@monorepo-frontend/styles': path.resolve(
        __dirname,
        '../../libs/styles/src',
      ),
      '@monorepo-frontend/ui': path.resolve(__dirname, '../../libs/ui/src'),
    },
  },
}));
