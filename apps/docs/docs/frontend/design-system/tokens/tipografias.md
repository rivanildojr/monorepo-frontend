# Design Tokens: Tipografia

Os tokens de tipografia garantem uma hierarquia visual clara e consistente em todo o texto da aplicação.

## 1. Família de Fontes

| Nome (TS)          | Valor              | Uso                                    |
| :----------------- | :----------------- | :------------------------------------- |
| `font-family-base` | `sora, sans-serif` | Fonte principal para o corpo do texto. |

## 2. Tamanhos de Fonte (`font-size`)

| Nome (TS)        | Valor (rem) | Equivalente (px) | Uso                                  |
| :--------------- | :---------- | :--------------- | :----------------------------------- |
| `font-size-xs`   | 0.75rem     | 12px             | Texto auxiliar, legendas.            |
| `font-size-sm`   | 0.875rem    | 14px             | Texto pequeno, labels de formulário. |
| `font-size-base` | 1rem        | 16px             | Texto do corpo principal.            |
| `font-size-lg`   | 1.125rem    | 18px             | Títulos de seção pequenos.           |
| `font-size-xl`   | 1.25rem     | 20px             | Títulos de cards.                    |
| `font-size-2xl`  | 1.5rem      | 24px             | Títulos de página.                   |
| `font-size-3xl`  | 1.875rem    | 30px             | Títulos principais.                  |
| `font-size-4xl`  | 2.25rem     | 36px             | Títulos de destaque.                 |
| `font-size-5xl`  | 3rem        | 48px             | Títulos de destaque.                 |

## 3. Pesos de Fonte (`font-weight`)

| Nome (TS)              | Valor | Uso               |
| :--------------------- | :---- | :---------------- |
| `font-weight-light`    | 300   | Texto leve.       |
| `font-weight-normal`   | 400   | Texto padrão.     |
| `font-weight-medium`   | 500   | Destaque sutil.   |
| `font-weight-semibold` | 600   | Destaque, botões. |
| `font-weight-bold`     | 700   | Títulos, ênfase.  |

## 4. Altura de Linha (`line-height`)

| Nome (TS)             | Valor | Uso                |
| :-------------------- | :---- | :----------------- |
| `line-height-tight`   | 1.25  | Títulos grandes.   |
| `line-height-normal`  | 1.5   | Texto do corpo.    |
| `line-height-relaxed` | 1.75  | Espaçamento extra. |

## 5. Uso em TypeScript (JavaScript)

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const headerStyles = computed(() => ({
  fontSize: theme.typography.fontSize['3xl'],
  fontWeight: theme.typography.fontWeight.bold,
  fontFamily: theme.typography.fontFamily.base,
  lineHeight: theme.typography.lineHeight.tight,
}));
```

## 6. Uso no SCSS

```scss
// Exemplo de uso em um componente SCSS
@use '@monorepo-frontend/styles/settings' as *;

.cv-button--primary {
  font-family: $font-family-base;
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
}
```
