# Documentação: Documentação

Esta documentação é um projeto vivo! Sua contribuição é essencial para mantê-la atualizada e útil para toda a equipe.

## 1. Onde Fica a Documentação?

A documentação é um app VitePress localizado em `apps/docs/docs/`.

- **Formato**: Todos os arquivos são escritos em **Markdown** (`.md`).
- **Estrutura**: A estrutura de pastas reflete o menu de navegação.

## 2. Como Contribuir

### Passo 1: Localize o Arquivo

Vá para a pasta correspondente ao tópico que deseja editar (ex: `frontend/design-system/tokens/cores.md`).

### Passo 2: Edite o Markdown

Abra o arquivo `.md` e faça as alterações.

### Passo 3: Verifique Localmente

Para ver suas alterações em tempo real:

```bash
pnpm docs:dev
```

### Passo 4: Crie o Pull Request (PR)

- Certifique-se de que sua mensagem de commit siga o padrão Conventional Commits (ex: docs(guia): corrigir link de instalacao).

## 3. Atualizando o Menu de Navegação

O menu de navegação (sidebar) é definido no arquivo de configuração do VitePress:

- Arquivo: `apps/docs/.vitepress/config.ts`

Se você adicionar uma nova seção ou um novo arquivo, lembre-se de adicioná-lo ao sidebar para que ele apareça no menu.

## 4. Guia Rápido de Markdown

Para dúvidas sobre a sintaxe, consulte o guia rápido: [Sintaxe Markdown](./markdown.md)
