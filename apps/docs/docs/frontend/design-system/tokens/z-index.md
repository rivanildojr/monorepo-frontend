# Design Tokens: Z-index

Os tokens de z-index que garante consistência em toda a aplicação.

## 2. Tokens de Z-index

| Nome (TS)                | Valor | Uso                     |
| :----------------------- | :---- | :---------------------- |
| `z-index-base`           | 0     | Z-index base.           |
| `z-index-dropdown`       | 1000  | Z-index dropdown.       |
| `z-index-sticky`         | 1020  | Z-index sticky.         |
| `z-index-fixed`          | 1030  | Z-index fixed.          |
| `z-index-modal-backdrop` | 1040  | Z-index modal-backdrop. |
| `z-index-modal`          | 1050  | Z-index modal.          |
| `z-index-popover`        | 1060  | Z-index popover.        |
| `z-index-tooltip`        | 1070  | Z-index tooltip.        |
| `z-index-toast`          | 1080  | Z-index toast.          |
| `z-index-max`            | 1090  | Z-index max.            |

## 3. Uso em TypeScript (JavaScript)

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const cardStyles = computed(() => ({
  zIndex: theme.zIndex.base,
}));
```

## 4. Uso no SCSS

```scss
// Exemplo de uso em um componente SCSS
@use '@monorepo-frontend/styles/settings' as *;

.cv-button {
  z-index: $z-index-base;
}
```
