# Guias Práticos: Criar Novo Componente

Este guia detalha o processo de criação de um novo componente reutilizável na biblioteca `libs/ui`.

## 1. Estrutura de Pastas

Crie uma nova pasta para o componente em `libs/ui/src/components/`:

```bash
# Exemplo: criando um Input Group
mkdir -p libs/ui/src/components/forms/InputGroup
```

## 2. Arquivos Essenciais

Todo componente deve ter 3 arquivos essenciais:

| Arquivo        | Propósito                   | Exemplo         |
| :------------- | :-------------------------- | :-------------- |
| **`.vue`**     | Template, script e estilos. | `index.vue`     |
| **`.scss`**    | Estilos do componente.      | `index.scss`    |
| **`.spec.ts`** | Testes unitários (Vitest).  | `index.spec.ts` |

## 3. Implementação (Passo a Passo)

### Passo 3.1: Criar o Arquivo `.vue`

- Use `<script setup lang="ts">`.
- Defina `defineProps` e `defineEmits` com TypeScript.
- Use `@use` para importar tokens e mixins SCSS.

### Passo 3.2: Criar o Arquivo `.scss`

- Use `@use` para importar tokens e mixins SCSS.

### Passo 3.3: Criar Testes Unitários (`.spec.ts`)

- Use `mount` do `@vue/test-utils`.
- Teste props, eventos, slots e estados (loading, disabled).
- Use mocks para dependências externas (ex: `Icon`).

### Passo 3.4: Criar Storybook (`.stories.ts`)

- Defina `meta` com `title: 'UI/forms/ComponentName'`.
- Use `argTypes` para documentar props.
- Crie histórias para todas as variações (tamanhos, estados, variantes).

### Passo 3.5: Criar documentação (`.md`)

- Documente o componente e como utilizá-lo nessa documentação
- Utilize a linguagem markdown

## 4. Exportação

O componente deve ser exportado em `libs/ui/src/components/forms/index.ts` para ser acessível por outros projetos:

```typescript
// libs/ui/src/components/forms/index.ts
export { default as InputGroup } from './InputGroup/index.vue';
```

Necessário exportar os componentes dessa classe `libs/ui/src/index.ts` para ser acessível por outros projetos:

```typescript
// libs/ui/src/index.ts
export * from './components/forms';
```
