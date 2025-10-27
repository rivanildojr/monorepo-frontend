# Introdução

## 🚀 Bem-vindo ao Monorepo Frontend

Este guia é o ponto de partida para todos os desenvolvedores que se juntam ao projeto. Ele visa fornecer uma visão geral da arquitetura e dos passos essenciais para configurar seu ambiente de desenvolvimento.

### 1. O que é este Projeto?

Este projeto é um **Monorepo** construído com **Vue.js 3** e **TypeScript**, orquestrado pelo **Nx**. Ele foi criado para substituir o monólito PHP legado, focando em **escalabilidade**, **manutenibilidade** e **performance**.

O monorepo hospeda múltiplos **aplicativos (apps)**, como o `painel-gestor`, `storybook` e a própria documentação (`docs`), e um conjunto de **bibliotecas (libs)** compartilhadas que contêm o código reutilizável.

### 2. Princípios Chave da Arquitetura

Nossa arquitetura é guiada pelos seguintes princípios:

| Princípio                           | Descrição                                                                                            | Tecnologia Chave                                    |
| :---------------------------------- | :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| **Fonte Única de Verdade (SoT)**    | Evitar duplicação de código e configuração. O código deve residir em um único lugar (nas `libs`).    | Nx, TypeScript, Design Tokens                       |
| **Separação de Preocupações (SoC)** | O código é dividido em camadas bem definidas (`ui`, `core`, `styles`, `icons`).                      | Estrutura de `libs`                                 |
| **Reutilização Máxima**             | Componentes, lógica de negócio e utilitários são criados para serem reutilizados em todos os `apps`. | `libs/ui`, `libs/core`                              |
| **Qualidade Automatizada**          | A qualidade do código é garantida por ferramentas que rodam automaticamente no commit.               | Husky, ESLint, Stylelint, Markdownlint e Commitlint |

### 3. Estrutura do Monorepo

O coração do projeto é a divisão entre `apps` e `libs`:

- **`apps/`**: Contém as aplicações finais que serão entregues ao usuário (ex: `painel-cliente`). Eles consomem as `libs`.
- **`libs/`**: Contém todo o código reutilizável. É aqui que 90% do desenvolvimento de features deve ocorrer.

| Lib      | Responsabilidade                                                                    |
| :------- | :---------------------------------------------------------------------------------- |
| `ui`     | Componentes visuais (BaseButton, BaseCard, etc.)                                    |
| `core`   | Lógica de negócio, Tipos TypeScript, utilitários puros (formatters) wrappers de API |
| `styles` | Design Tokens e estrutura ITCSS                                                     |
| `icons`  | Sistema de ícones unificado                                                         |

### 4. Próximos Passos

Para começar a desenvolver, siga o guia de [Instalação](./instalacao.md) para configurar seu ambiente.
