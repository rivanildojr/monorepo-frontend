# Qualidade de Código: Commitlint

## Commitlint (Conventional Commits)

O Commitlint garante que as mensagens de commit sigam a especificação **Conventional Commits**.

### Padrão

O padrão de mensagem é: `<tipo>(<escopo>): <descrição>`

| Tipo         | Descrição                                     | Exemplo                                              |
| :----------- | :-------------------------------------------- | :--------------------------------------------------- |
| **feat**     | Nova funcionalidade.                          | `feat(auth): adicionar login com Google`             |
| **fix**      | Correção de bug.                              | `fix(ui): corrigir erro de layout no BaseButton`     |
| **docs**     | Mudanças na documentação.                     | `docs(readme): atualizar guia de instalação`         |
| **style**    | Mudanças de estilo (formatação, vírgulas).    | `style(core): formatar código com Prettier`          |
| **refactor** | Refatoração de código sem mudança de feature. | `refactor(core): simplificar getters no userStore`   |
| **test**     | Adição ou correção de testes.                 | `test(ui): adicionar teste unitário para BaseButton` |
| **chore**    | Tarefas de build, dependências, etc.          | `chore(deps): atualizar pnpm para 9.0.0`             |

### Objetivo

- **Histórico Limpo**: Facilita a leitura do histórico do Git.
- **Geração de Changelog**: Permite gerar changelogs automaticamente.
