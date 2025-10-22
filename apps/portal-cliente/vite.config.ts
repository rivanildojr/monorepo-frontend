/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/portal-cliente',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [vue(), svgLoader()],
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
  test: {
    name: '@monorepo-frontend/portal-cliente',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
  resolve: {
    alias: {
      '@/cliente': path.resolve(__dirname, './src'),
      '@monorepo-frontend/core': path.resolve(__dirname, '../../libs/core/src'),
      '@monorepo-frontend/icons': path.resolve(
        __dirname,
        '../../libs/icons/src',
      ),
      '@monorepo-frontend/styles': path.resolve(
        __dirname,
        '../../libs/styles/src',
      ),
      '@monorepo-frontend/styles/tools': path.resolve(
        __dirname,
        '../../libs/styles/src/2-tools/_index.scss',
      ),
      '@monorepo-frontend/ui': path.resolve(__dirname, '../../libs/ui/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        includePaths: [
          path.resolve(__dirname, '../../libs/styles/src'),
          path.resolve(__dirname, '../../node_modules'),
        ],
      },
    },
  },
}));
