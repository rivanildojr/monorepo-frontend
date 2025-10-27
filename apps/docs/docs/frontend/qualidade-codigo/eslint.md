# Qualidade de Código: ESLint

## ESLint (Linting)

O ESLint é responsável por analisar o código estaticamente para encontrar problemas e garantir que as regras de código sejam seguidas.

### Configuração Centralizada

A configuração principal reside no `.eslint.config.mjs` (raiz) e é estendida nos apps e libs.

- **Plugins Principais**:
  - `@typescript-eslint/eslint-plugin`: Regras para TypeScript.
  - `eslint-plugin-vue`: Regras específicas para arquivos `.vue`.
  - `@nx/eslint-plugin`: Regras específicas do Nx (ex: `enforce-module-boundaries`).

### Regras Chave

- **`@nx/enforce-module-boundaries`**: Garante que as `apps` e `libs` só importem o que é permitido (ex: `ui` não pode importar `core`).
- **`@typescript-eslint/no-explicit-any`: 'warn'**: Permite o uso de `any`, mas avisa.
- **`no-console`: 'warn'**: Permite `console.warn` e `console.error`, mas avisa sobre `console.log`.
- **Regras Vue**: Implementamos regras para forçar a formatação de atributos em novas linhas e o uso de tags de fechamento corretas.
