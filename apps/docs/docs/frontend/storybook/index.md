# Storybook: Documentação e Desenvolvimento de Componentes

O Storybook é um ambiente de desenvolvimento isolado para componentes de UI. Ele nos permite construir, documentar e testar componentes fora do contexto da aplicação principal.

## 1. Configuração no Monorepo

O Storybook é configurado como um `app` separado (`apps/storybook`).

- **Vantagem**: Ele pode importar e documentar componentes de qualquer `lib` (principalmente `libs/ui` e `libs/icons`).
- **Configuração**: O arquivo de configuração principal é `apps/storybook/.storybook/main.ts`.

## 2. Criação de Stories

Toda história deve ser co-localizada com o componente que documenta.

- **Exemplo**: `libs/ui/src/components/ui/General/BaseButton/index.stories.ts`

### 2.1. Estrutura da Story

A estrutura segue o padrão de **Component Story Format (CSF)**:

```typescript
// index.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { BaseButton } from '@monorepo-frontend/ui';

const meta: Meta<typeof BaseButton> = {
  title: 'UI/General/BaseButton',
  component: BaseButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'text'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Tamanho do botão',
    },
    icon: { control: 'text', description: 'Nome do ícone' },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Posição do ícone',
    },
    iconSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Tamanho do ícone',
    },
    loading: {
      control: 'boolean',
      description: 'Exibe um indicador de carregamento',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
    },
    label: { control: 'text', description: 'Texto do botão' },
    hideText: { control: 'boolean', description: 'Esconde o texto do botão' },
  },
  args: {
    label: 'Base Button',
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Botão primário padrão
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template:
      '<BaseButton class="btn btn-primary" v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Botão secundário
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Botão de Ghost
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Botão de Ghost
 */
export const Txt: Story = {
  args: {
    variant: 'txt',
    label: 'Text Button',
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Botão desabilitado
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Botão loading
 */
export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
  }),
};

/**
 * Tamanhos disponíveis
 */
export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <BaseButton size="sm">Pequeno</BaseButton>
        <BaseButton size="md">Médio</BaseButton>
        <BaseButton size="lg">Grande</BaseButton>
        <BaseButton size="xl">Extra Grande</BaseButton>
        <BaseButton size="full">Full Width</BaseButton>
      </div>
    `,
  }),
};

/**
 * Todas as variantes
 */
export const AllVariants: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 1rem; flex-direction: column;">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="txt">Text</BaseButton>
      </div>
    `,
  }),
};
```

## 3. Uso e Benefícios

- **Documentação Viva**: O Storybook serve como a documentação visual oficial do Design System.
- **Testes Visuais**: Permite que designers e QA revisem as variações de componentes em um ambiente controlado.
- **Desenvolvimento Isolado**: Permite focar apenas no componente, sem se preocupar com a lógica da aplicação.

## 4. Comandos Essenciais

| Comando                | Descrição                                      |
| :--------------------- | :--------------------------------------------- |
| `pnpm storybook:dev`   | Inicia o Storybook em modo de desenvolvimento. |
| `pnpm storybook:build` | Gera os arquivos estáticos para deploy.        |
