# Instalação

Este guia detalha os passos necessários para configurar seu ambiente de desenvolvimento local.

## ⚙️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

| Ferramenta  | Versão Mínima | Link de Download                             |
| :---------- | :------------ | :------------------------------------------- |
| **Node.js** | `22.14.0`     | [https://nodejs.org/en](https://nodejs.org/) |
| **pnpm**    | `10.18.2`     | [https://pnpm.io/](https://pnpm.io/)         |

### Extensões Recomendadas (VS Code)

Caso esteja utilizando essa ferramenta, instale as seguintes extensões para garantir a melhor experiência e integração com as ferramentas de qualidade:

| Extensão           | ID                               | Função                               |
| :----------------- | :------------------------------- | :----------------------------------- |
| **Vue (Official)** | `Vue.volar`                      | Suporte oficial a Vue 3 e TypeScript |
| **Nx Console**     | `nrwl.angular-console`           | Gerenciador do monorepo              |
| **ESLint**         | `dbaeumer.vscode-eslint`         | Integração do linter                 |
| **Prettier**       | `esbenp.prettier-vscode`         | Formatação automática                |
| **Stylelint**      | `stylelint.vscode-stylelint`     | Linting de SCSS/CSS                  |
| **Markdownlint**   | `DavidAnson.vscode-markdownlint` | Linting de md                        |
| **EditorConfig**   | `EditorConfig.EditorConfig`      | Consistência de indentação da IDE    |

Todas elas se encontra no arquivo `.vscode/extensions.json` na raiz do projeto.

## 🚀 Passos de Instalação

Siga os passos abaixo para deixar o projeto pronto para rodar:

### Passo 1: Clonar o Repositório

Abra seu terminal e clone o repositório principal:

```bash
git clone https://github.com/Construtor-de-Vendas/CV-Aplicacao.git
```

### Passo 2: Configurar o CV-Aplicação

Antes de prosseguir, garanta que já realizou todas as configurações do projeto seguindo: [CV-Aplicação](https://github.com/Construtor-de-Vendas/CV-Aplicacao/wiki).

### Passo 3: Instalar Dependências

Utilizamos o **pnpm** para gerenciar as dependências do monorepo.

```bash
# Instala todas as dependências do projeto de forma rápida e eficiente
pnpm install
```

### Passo 4: Configurar Git Hooks

Utilizamos **Husky** para automatizar a qualidade do código antes do commit.

```bash
# Instala os hooks do git (pre-commit, commit-msg)
pnpm prepare
```

### Passo 5: Rodar a Aplicação Principal (Painel Gestor)

Para iniciar o desenvolvimento, utilize o comando abaixo para rodar o app principal:

```bash
# Inicia o painel-gestor
pnpm gestor:dev
```

A aplicação estará disponível em `http://localhost:4200`.

### Passo 6: Verificar Qualidade do Código

Recomendamos rodar um lint e teste inicial para garantir que tudo está configurado corretamente:

```bash
# Roda lint e tenta corrigir erros
pnpm lint:fix

# Roda todos os testes unitários
pnpm test:all
```

Se todos os comandos rodarem sem erro, seu ambiente está pronto!
