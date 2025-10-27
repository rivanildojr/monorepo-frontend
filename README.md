# Projeto Monorepo - Arquitetura Frontend Escalável

Este é um monorepo gerenciado com **Nx** contendo múltiplas aplicações Vue.js (painéis) e bibliotecas compartilhadas.

## 📁 Estrutura do Projeto

```markdown
/
├── apps/ # Aplicações (painéis)
│ ├── painel-gestor/ # Painel Gestor
│ └── painel-cliente/ # Painel do cliente
│
├── libs/ # Bibliotecas compartilhadas
│ ├── ui/ # Componentes de UI
│ ├── core/ # Lógica de negócio e composables
│ ├── styles/ # Estilos globais
│ └── icons/ # Biblioteca de icones
```

## 🚀 Começando

### Pré-requisitos

- Node.js 22.14.0+
- pnpm 10.18.2+

### Instalação

```bash
pnpm install
```

### Desenvolvimento

Execute uma aplicação específica:

```bash
# Painel Admin (porta 4200)
pnpm cvcrm:dev

# Painel Cliente (porta 4201)
pnpm portal-cliente:dev
```

### Build

Build de uma aplicação específica:

```bash
pnpm cvcrm:build
```

Build de todas as aplicações:

```bash
pnpm nx run-many -t build
```

### Testes

```bash
# Executar testes de um projeto
pnpm cvcrm:test

# Executar todos os testes
pnpm nx run-many -t test
```

### Lint

```bash
# Lint de um projeto
pnpm lint
```

## 🎯 Comandos Nx Úteis

### Affected Commands

Execute comandos apenas nos projetos afetados pelas mudanças:

```bash
# Build apenas projetos afetados
pnpm nx affected -t build

# Test apenas projetos afetados
pnpm test:affected

# Lint apenas projetos afetados
pnpm lint:affected
```

### Visualizar Grafo de Dependências

```bash
pnpm nx graph
```

## 📦 Bibliotecas Compartilhadas

### @monorepo-frontend/ui

Componentes de UI reutilizáveis.

```typescript
import { BaseButton } from '@monorepo-frontend/ui';
```

### @monorepo-frontend/core

Lógica de negócio, composables e serviços.

```typescript
import { useTheme } from '@monorepo-frontend/core';
```

### @projeto/styles

Estilos globais

```scss
@use '@monorepo-frontend/styles/settings' as *;
```

### @projeto/icons

Biblioteca global de componentes

```typescript
import { Icon } from '@monorepo-frontend/icons';
```

## 🛠️ Stack Tecnológica

- **Framework:** Vue.js 3 + Composition API
- **Linguagem:** TypeScript
- **Build Tool:** Vite
- **Monorepo:** Nx
- **State Management:** Pinia
- **Roteamento:** Vue Router
- **Estilização:** SASS (SCSS)
- **Qualidade de Código:** ESLint + Prettier + Stylelint + Markdownlint + Commitlint + Husky + lint-staged
- **Testes:** Vitest + Vue Testing Library + Cypress

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça commit das mudanças
3. Os hooks do Husky executarão lint e formatação automaticamente
4. Abra um Pull Request

## 📚 Documentação Adicional

```bash
# Documentação (porta 5173)
pnpm docs:dev
```
