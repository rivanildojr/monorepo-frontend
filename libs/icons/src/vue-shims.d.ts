declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

// Declaração de módulo para importar SVGs como componentes Vue
declare module '*.svg?component' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
