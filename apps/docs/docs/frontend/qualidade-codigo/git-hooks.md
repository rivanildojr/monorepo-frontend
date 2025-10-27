# Qualidade de Código: Git Hooks

## 1. Husky (Git Hooks)

O Husky é uma ferramenta que permite executar scripts em momentos específicos do ciclo de vida do Git (hooks).

### `pre-commit` Hook

Executado **antes** do commit ser criado.

- **Ação**: Dispara o `lint-staged`.
- **Objetivo**: Garantir que o código que está sendo commitado está formatado e sem erros de lint.

- **Ação**: Dispara o `pnpm generate:settings`.
- **Objetivo**: Garantir que os tokens de design estejam atualizados.

### `commit-msg` Hook

Executado quando a mensagem de commit é criada.

- **Ação**: Dispara o `commitlint`.
- **Objetivo**: Garantir que a mensagem de commit siga o padrão de convenção.

## 2. lint-staged

O `lint-staged` é usado em conjunto com o Husky para rodar lints **apenas nos arquivos que foram adicionados ao stage** (`git add`).

- **Vantagem**: Aumenta a velocidade, pois não precisa lintar todo o projeto.
- **Configuração**: No `package.json` raiz, definimos quais comandos rodar para cada tipo de arquivo (ex: `.vue`, `.ts`, `.scss`).
