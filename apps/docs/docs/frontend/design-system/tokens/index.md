# Design Tokens

Design Tokens são os blocos fundamentais do nosso Design System. Eles são a fonte única de verdade para todas as decisões de design, como bordas, breakpoints, cores, sombras, espaçamento, tipografia, e z-index.

## 1. O que são Design Tokens?

Tokens são variáveis nomeadas que armazenam valores de design.

| Variável                  | Valor      |
| :------------------------ | :--------- |
| `$cor-marca-primaria-100` | `#00b389`  |
| `$spacing-4`              | `1rem`     |
| `$font-size-lg`           | `1.125rem` |

Ao invés de usar valores hardcoded (`#00b389`), usamos o token (`$cor-marca-primaria-100`).

## 2. Por que Usamos Tokens?

- **Consistência**: Garante que todos os painéis usem exatamente a mesma cor ou espaçamento.
- **Manutenibilidade**: Mudar um token (ex: `$cor-marca-primaria-100`) atualiza automaticamente todos os locais onde ele é usado.
- **Sincronização**: Permite que os valores de design sejam usados tanto no código (SCSS/CSS) quanto no JavaScript (lógica e estilos dinâmicos).
- **Temas**: Facilita a criação de temas (dark mode, por exemplo) trocando apenas o valor dos tokens.

## 3. Estrutura de Tokens

Os tokens são definidos em **TypeScript** e organizados em categorias:

| Categoria       | Arquivo TS       | Propósito                                 |
| :-------------- | :--------------- | :---------------------------------------- |
| **Bordas**      | `borders.ts`     | Border e border radius.                   |
| **Breakpoints** | `breakpoints.ts` | Pontos de quebra para design responsivo.  |
| **Cores**       | `colors.ts`      | Paleta principal, feedback, neutras.      |
| **Sombras**     | `shadows.ts`     | Sombras de elementos (ex: cards, modais). |
| **Espaçamento** | `spacing.ts`     | Margens, paddings, tamanhos.              |
| **Tipografia**  | `typography.ts`  | Fontes, tamanhos, pesos, line-heights.    |
| **Z-index**     | `z-index.ts`     | z-index.                                  |

## 4. Fluxo de Geração (TS → SCSS)

O fluxo de trabalho garante que o código esteja sempre sincronizado com os tokens:

1. **Definição**: O designer ou desenvolvedor define o token em um arquivo `.ts` (ex: `colors.ts`).
2. **Geração**: Um script Node.js lê o arquivo `.ts` e gera o arquivo `.scss` correspondente.
3. **Uso**:
   - **TypeScript**: Importa o token diretamente do arquivo `.ts`.
   - **SCSS**: Importa o token via `@use` do arquivo `.scss` gerado.

**Comando de Geração:**

```bash
pnpm run generate:settings
```

Este comando é executado automaticamente antes de cada commit via Husky.

## 5. Uso em Componentes

### Uso em TypeScript/JavaScript

```typescript
// libs/core/src/composables/useTheme/index.ts
import {
  border,
  borderRadius,
  breakpoints,
  colors,
  shadows,
  spacing,
  typography,
  zIndex,
} from '@monorepo-frontend/styles/tokens';

export function useTheme() {
  return {
    border,
    borderRadius,
    breakpoints,
    colors,
    shadows,
    spacing,
    typography,
    zIndex,
  };
}

// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const cardStyles = computed(() => ({
  borderRadius: theme.borderRadius.base,
  borderWidth: theme.border.base,
  boxShadow: theme.shadows.sm,
  fontSize: theme.typography.fontSize['3xl'],
  fontWeight: theme.typography.fontWeight.bold,
  fontFamily: theme.typography.fontFamily.base,
  lineHeight: theme.typography.lineHeight.tight,
  zIndex: theme.zIndex.base,
  padding: theme.spacing[4],
}));
```

### Uso em SCSS

```scss
// libs/styles/src/6-objects/_button.scss
@use '@monorepo-frontend/styles/settings' as *;

.cv-button {
  padding: $spacing-4;
}
```
