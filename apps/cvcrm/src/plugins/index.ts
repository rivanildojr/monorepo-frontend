import type { App } from 'vue';

import { toasPlugin } from '@monorepo-frontend/core';

export function registerPlugins(app: App) {
  app.use(toasPlugin);
}
