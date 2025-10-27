# Qualidade de Código: Visão Geral

A qualidade do código é garantida por um pipeline de ferramentas que automatizam a formatação, linting e validação em tempo de desenvolvimento e antes do commit.

## 1. Ferramentas Integradas

| Ferramenta       | Função                                    | Onde Configurado              |
| :--------------- | :---------------------------------------- | :---------------------------- |
| **ESLint**       | Linting de JavaScript, TypeScript e Vue.  | `.eslint.config.mjs` (raiz)   |
| **Prettier**     | Formatação automática de código.          | `.prettierrc` (raiz)          |
| **Stylelint**    | Linting e ordenação de SCSS/CSS.          | `.stylelintrc.js` (raiz)      |
| **EditorConfig** | Consistência de indentação e charset.     | `.editorconfig` (raiz)        |
| **Husky**        | Gerenciamento de Git Hooks.               | `.husky/` (raiz)              |
| **lint-staged**  | Executa lints apenas nos arquivos staged. | `package.json` (raiz)         |
| **Commitlint**   | Validação de mensagens de commit.         | `commitlint.config.js` (raiz) |

## 2. Fluxo de Qualidade Automatizado

Toda a validação é feita de forma automatizada para não depender da memória do desenvolvedor:

1. **Desenvolvimento**: O VS Code aplica Prettier e ESLint ao salvar.
2. **Pré-Commit**: O Husky dispara o `lint-staged` nos arquivos que serão commitados.
3. **Mensagem de Commit**: O Husky dispara o Commitlint para validar a mensagem.

## 3. Configurações Detalhadas

- **ESLint**: [Guia ESLint](./eslint.md)
- **Prettier**: [Guia Prettier](./prettier.md)
- **Stylelint**: [Guia Stylelint](./stylelint.md)
- **EditorConfig**: [Guia EditorConfig](./editorconfig.md)
- **Git Hooks**: [Guia Git Hooks](./git-hooks.md)
- **Commitlint**: [Guia Commitlint](./commitlint.md)
