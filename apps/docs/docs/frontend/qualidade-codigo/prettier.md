# Qualidade de Código: Prettier

## Prettier (Formatação)

O Prettier é um formatador opinativo que garante que o estilo do código seja consistente em todo o projeto.

### Configuração

O arquivo `.prettierrc` na raiz define as regras de formatação (ex: `singleQuote: true`, `trailingComma: 'all'`, `printWidth: 80`).

### Integração com ESLint

Usamos o `eslint-config-prettier` para desabilitar todas as regras do ESLint que conflitam com o Prettier. Isso garante que o Prettier cuide da formatação e o ESLint cuide da qualidade lógica.

## 3. Comandos

| Comando             | Descrição                                                |
| :------------------ | :------------------------------------------------------- |
| `pnpm lint`         | Roda o ESLint em todos os arquivos.                      |
| `pnpm lint:fix`     | Roda o ESLint e tenta corrigir automaticamente os erros. |
| `pnpm format`       | Roda o Prettier em todos os arquivos.                    |
| `pnpm format:check` | Verifica se há arquivos que precisam de formatação.      |
