import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'pnpm exec nx run @monorepo-frontend/cvcrm:dev',
        production: 'pnpm exec nx run @monorepo-frontend/cvcrm:preview',
      },
      ciWebServerCommand: 'pnpm exec nx run @monorepo-frontend/cvcrm:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
