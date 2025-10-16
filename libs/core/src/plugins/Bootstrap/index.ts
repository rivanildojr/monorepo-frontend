import type { App } from 'vue';

import * as bootstrap from 'bootstrap';

export const bootstrapPlugin = {
  install(app: App) {
    app.config.globalProperties.$bootstrap = bootstrap;

    document.addEventListener('DOMContentLoaded', () => {
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
      );

      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });

      const popoverTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="popover"]'),
      );

      popoverTriggerList.forEach((popoverTriggerEl) => {
        new bootstrap.Popover(popoverTriggerEl);
      });
    });
  },
};

export function useBootstrap() {
  return bootstrap;
}

export const {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
} = bootstrap;
