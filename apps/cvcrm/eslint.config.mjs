import vue from 'eslint-plugin-vue';
import baseConfig from '../../eslint.config.mjs';
import prettier from 'eslint-config-prettier';

export default [
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: await import('@typescript-eslint/parser'),
      },
    },
  },
];
