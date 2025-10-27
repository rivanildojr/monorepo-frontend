# Design Tokens: Bordas

Os tokens de bordas que garante consistência em toda a aplicação.

## 2. Tokens de Bordas

| Nome (TS)     | Valor    | Uso                   |
| :------------ | :------- | :-------------------- |
| `border-none` | 0        | Sem Bordas.           |
| `border-sm`   | 0.25rem  | Bordas pequenas.      |
| `border-base` | 0.375rem | Bordas padrão.        |
| `border-md`   | 0.5rem   | Bordas média.         |
| `border-lg`   | 0.75rem  | Bordas grandes.       |
| `border-xl`   | 1rem     | Bordas extra grandes. |
| `border-2xl`  | 1rem     | Bordas super grande.  |

## 2. Tokens de Bordas Radius

| Nome (TS)            | Valor    | Uso                                |
| :------------------- | :------- | :--------------------------------- |
| `border-radius-none` | 0        | Sem Bordas arredondadas.           |
| `border-radius-sm`   | 0.25rem  | Bordas arredondadas pequenas.      |
| `border-radius-base` | 0.375rem | Bordas arredondadas padrão.        |
| `border-radius-md`   | 0.5rem   | Bordas arredondadas média.         |
| `border-radius-lg`   | 0.75rem  | Bordas arredondadas grandes.       |
| `border-radius-xl`   | 1rem     | Bordas arredondadas extra grandes. |
| `border-radius-2xl`  | 1rem     | Bordas arredondadas super grande.  |
| `border-radius-full` | 1rem     | Bordas arredondadas completamente. |

## 3. Uso em TypeScript (JavaScript)

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const cardStyles = computed(() => ({
  borderRadius: theme.borderRadius.base,
  borderWidth: theme.border.base,
}));
```

## 4. Uso no SCSS

```scss
// Exemplo de uso em um componente SCSS
@use '@monorepo-frontend/styles/settings' as *;

.cv-button {
  border-radius: $border-radius-base;
}
```
