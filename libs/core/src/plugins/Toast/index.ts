import type { App } from 'vue';

import Toast from 'vue-toastification';
import { type PluginOptions, POSITION } from 'vue-toastification';

import 'vue-toastification/dist/index.css';

const defaultOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
  transition: 'Vue-Toastification__fade',
};

export const toasPlugin = {
  install(app: App, options?: PluginOptions) {
    app.use(Toast, { ...defaultOptions, ...options });
  },
};

export { useToast } from 'vue-toastification';
