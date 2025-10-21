import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@monorepo-frontend/ui': resolve(__dirname, '../../../libs/ui/src'),
          '@monorepo-frontend/core': resolve(
            __dirname,
            '../../../libs/core/src',
          ),
          '@monorepo-frontend/styles': resolve(
            __dirname,
            '../../../libs/styles/src',
          ),
          '@monorepo-frontend/icons': resolve(
            __dirname,
            '../../../libs/icons/src',
          ),
        },
      },
    });
  },
};

export default config;
