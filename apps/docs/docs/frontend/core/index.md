# Lib Core: Visão Geral

A biblioteca `libs/core` é o coração da aplicação, contendo toda a lógica de negócio, comunicação com a API e o gerenciamento de estado que não é de UI.

## 1. Responsabilidades

A `libs/core` é responsável por:

- **Comunicação com API**: Wrapper Axios.
- **Autenticação**: Lógica de login, logout, refresh de token e guards de rota.
- **Utilitários Compartilhados**: Funções puras, validadores e tipagens.
- **Plugins**: Configurações de ferramentas globais (Sentry, Mixpanel).

## 2. Estrutura de Pastas

```markdown
libs/core/
├── src/
│ ├── services/ ← Comunicação com Backend
│ │ ├── client.ts ← Wrapper Axios
│ │ └── endpoints/ ← Funções de API
| |
│ ├── composables/ ← Lógica reutilizaveis
│ │ ├── useTheme/index.ts ← Composable de Thema com os design tokens
│ │ └── index.ts ← exportar os composables
│ │
│ ├── constants/ ← Constants na reutilizaveis
│ │ ├── API/index.ts
│ │ └── index.ts ← exportar as constants
| |
│ ├── utils/ ← Funções Puras e Utilitários
│ │ ├── formatters/index.ts
│ │ └── validators/index.ts
│ │
│ ├── types/ ← Tipagens TypeScript
│ │ ├── entities/ ← Entidades de Negócio (User, Imovel)
│ │ ├── common/ ← Tipos Comuns (ApiResponse, Pagination)
│ │ └── index.ts ← exportar os tipos
│ │
│ └── plugins/ ← Configurações de
| | ├── Sentry/index.ts
| | ├── Mixpanel/index.ts
| | └── index.ts ← exportar os plugins
│
└── index.ts
```

## 4. Guias Detalhados

- **Comunicação com API**: [API Client](./api-client.md)
