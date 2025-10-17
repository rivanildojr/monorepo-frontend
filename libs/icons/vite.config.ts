import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/icons',
  plugins: [vue(), svgLoader()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    name: '@monorepo-frontend/icons',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
  resolve: {
    alias: {
      '@/icons': path.resolve(__dirname, './src'),
    },
  },
}));
