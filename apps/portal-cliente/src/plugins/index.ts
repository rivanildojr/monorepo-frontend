import type { App } from 'vue';

import router from '@/cliente/router';

import { toastPlugin } from '@monorepo-frontend/core';

import { bootstrapPlugin } from '@monorepo-frontend/core';

import { setupFontAwesome } from '@monorepo-frontend/icons';

setupFontAwesome();

export function registerPlugins(app: App) {
  app.use(router);
  app.use(toastPlugin);
  app.use(bootstrapPlugin);
}
