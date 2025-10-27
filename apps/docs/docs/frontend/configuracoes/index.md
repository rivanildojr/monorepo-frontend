# Configurações: Visão Geral

Esta seção detalha as configurações globais e específicas do projeto que garantem a consistência e o funcionamento correto do monorepo.

## 1. Gerenciamento de Dependências (pnpm)

Utilizamos o **pnpm** como gerenciador de pacotes, aproveitando o recurso de **workspace** para gerenciar as dependências de forma eficiente.

- **Instalação na Raiz**: A maioria das dependências é instalada no `package.json` raiz para serem compartilhadas entre todos os apps e libs.
- **`pnpm-workspace.yaml`**: Define quais pastas são consideradas projetos (apps e libs).
- **`workspace:*`**: Utilizado nos `package.json` dos apps para referenciar as libs locais, garantindo que o pnpm crie links simbólicos.

## 2. Orquestração (Nx)

O **Nx** é o orquestrador do monorepo, responsável por:

- **Grafo de Dependências**: Mapear as relações entre apps e libs.
- **Cache Inteligente**: Evitar re-builds e re-testes desnecessários.
- **Comandos Universais**: Padronizar comandos como `nx serve`, `nx build`, `nx test`.

**Arquivo Principal**: `nx.json`

## 3. Configuração de TypeScript

O TypeScript é configurado de forma centralizada para todo o monorepo:

- **`tsconfig.base.json`**: Define as configurações de compilação globais e os **path aliases** (`@monorepo-frontend/core`, `@monorepo-frontend/ui`, etc.).
- **`tsconfig.json` (por projeto)**: Herda do `tsconfig.base.json` e adiciona configurações específicas para o tipo de projeto (app ou lib).
