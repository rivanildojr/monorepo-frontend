import type { App } from 'vue';

import { toastPlugin } from '@monorepo-frontend/core';

import { bootstrapPlugin } from '@monorepo-frontend/core';

export function registerPlugins(app: App) {
  app.use(toastPlugin);
  app.use(bootstrapPlugin);
}
