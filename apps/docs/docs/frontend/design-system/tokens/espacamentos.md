# Design Tokens: Espaçamento e Dimensões

Os tokens de espaçamento e dimensões garantem o ritmo vertical e horizontal consistente em toda a aplicação.

## 1. Tokens de Espaçamento

Utilizamos uma escala modular de espaçamento baseada em múltiplos de 4px (ou 0.25rem, assumindo 1rem = 16px).

| Nome (TS)    | Valor (px) | Valor (rem) | Uso                          |
| :----------- | :--------- | :---------- | :--------------------------- |
| `spacing-1`  | 4px        | 0.25rem     | Espaçamento mínimo.          |
| `spacing-2`  | 8px        | 0.5rem      | Espaçamento pequeno.         |
| `spacing-3`  | 12px       | 0.75rem     | Espaçamento padrão.          |
| `spacing-4`  | 16px       | 1rem        | Espaçamento base.            |
| `spacing-5`  | 20px       | 1.25rem     | Espaçamento médio.           |
| `spacing-6`  | 24px       | 1.5rem      | Espaçamento grande.          |
| `spacing-8`  | 32px       | 2rem        | Margem entre seções.         |
| `spacing-10` | 40px       | 2.5rem      | Margem entre grandes blocos. |
| `spacing-12` | 48px       | 3rem        | Espaçamento extras grandes.  |
| `spacing-16` | 64px       | 4rem        | Espaçamento extras grandes.  |
| `spacing-20` | 80px       | 5rem        | Espaçamento extras grandes.  |
| `spacing-24` | 96px       | 6rem        | Espaçamento extras grandes.  |

## 3. Uso em TypeScript (JavaScript)

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const cardStyles = computed(() => ({
  padding: theme.spacing[4],
}));
```

## 4. Uso no SCSS

```scss
// Exemplo de uso em um componente SCSS
@use '@monorepo-frontend/styles/settings' as *;

.cv-button {
  margin: $spacing-5;
}
```
