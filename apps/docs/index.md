---
layout: home

hero:
  name: 'Projeto Frontend'
  text: 'Documentação completa'
  tagline: 'Monorepo Vue.js 3 + TypeScript + Nx + Pnpm'
  image:
    src: /logo.svg
    alt: Logo do Projeto
  actions:
    - theme: brand
      text: Começar
      link: /docs/frontend/guia-inicio/
    - theme: alt
      text: Design System
      link: /docs/frontend/design-system/
    - theme: alt
      text: Documentação
      link: /docs/documentacao/

features:
  - icon: 🏗️
    title: Arquitetura Escalável
    details: Monorepo com Nx e Pnpm, estruturado para escalabilidade e manutenibilidade.
    link: /docs/frontend/arquitetura/
  - icon: 🎨
    title: Design System
    details: Sistema de design completo com componentes reutilizáveis, tokens e padrões visuais.
    link: /docs/frontend/design-system/
  - icon: ✅
    title: Qualidade Garantida
    details: ESLint, Prettier, Stylelint, Markdownlint, Commitlint, EditorConfig e testes automatizados.
    link: /docs/frontend/qualidade-codigo/
---

## Início Rápido

```bash [pnpm]
# Clonar repositório
git clone https://github.com/Construtor-de-Vendas/CV-Aplicacao

# Acessar o projeto
cd frontend

# Instalar dependências
pnpm install

# Iniciar painel gestor
pnpm run gestor:dev

```
