# Design Tokens: Espaçamento e Dimensões

Os tokens de sombras garantem consistência em toda a aplicação.

## 1. Tokens de Sombras

| Nome (TS)     | Valor                                                                 | Uso                  |
| :------------ | :-------------------------------------------------------------------- | :------------------- |
| `shadow-none` | `none`                                                                | Sem sombra.          |
| `shadow-sm`   | `0 1px 2px 0 rgb(0 0 0 / 5%)`                                         | Sombra pequenas.     |
| `shadow-base` | `0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)`           | Sombra base.         |
| `shadow-md`   | `0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)`     | Sombra padrão media. |
| `shadow-lg`   | `0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)`   | Sombra grande.       |
| `shadow-xl`   | `0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)` | Sombra extra grande. |

## 3. Uso em TypeScript (JavaScript)

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const cardStyles = computed(() => ({
  boxShadow: theme.shadows.sm,
}));
```

## 4. Uso no SCSS

```scss
// Exemplo de uso em um componente SCSS
@use '@monorepo-frontend/styles/settings' as *;

.cv-button {
  box-shadow: $shadow-none;
}
```
