# Design System

O Design System é a **fonte única de verdade** para a interface do usuário (UI) de todas as nossas aplicações. Ele garante consistência, eficiência e qualidade em todos os painéis.

## 🎯 Objetivos do Design System

1. **Consistência Visual**: Todos os elementos (cores, tipografia, espaçamento) são padronizados.
2. **Reutilização**: Componentes prontos e testados para uso imediato.
3. **Velocidade de Desenvolvimento**: Permite que os desenvolvedores montem interfaces rapidamente.
4. **Qualidade**: Componentes acessíveis, testados e performáticos.

## 📁 Estrutura da Lib `libs/ui`

O Design System é implementado principalmente através das bibliotecas `libs/ui`, `libs/styles` e `libs/icons`.

| Lib               | Conteúdo                                                        |
| :---------------- | :-------------------------------------------------------------- |
| **`libs/ui`**     | Componentes Vue prontos (ex: `BaseButton`, `BaseCard`, etc.).   |
| **`libs/styles`** | Design Tokens (variáveis) e estrutura de estilos (ITCSS).       |
| **`libs/icons`**  | Sistema de ícones unificado (Font Awesome + SVGs customizados). |

## 🎨 Componentes Chave

O Design System é composto por três pilares principais:

### 1. Design Tokens (Variáveis)

São as menores unidades de design (cores, fontes, espaçamentos, etc.). Eles são definidos em **TypeScript** e gerados automaticamente para **SCSS**, garantindo que o código e o design estejam sempre sincronizados.

- **Localização**: `libs/styles/src/tokens/`
- **Uso em TS**: `import { tokens } from '@monorepo-frontend/styles/tokens';`
- **Uso em SCSS**: `@use '@monorepo-frontend/styles/settings' as *;`
- **Guia Detalhado**: [Tokens: Visão Geral](./tokens/index.md)

### 2. Estilos (ITCSS)

A arquitetura de estilos segue a metodologia **ITCSS (Inverted Triangle CSS)**, que organiza o código em camadas de especificidade crescente. Isso garante que o CSS seja escalável e fácil de manter.

- **Localização**: `libs/styles/src/`
- **Uso**: `@use` para importar apenas as camadas necessárias ou importe os estilos de acordo com o package.json da lib.
- **Guia Detalhado**: [Estilos: Visão Geral](./estilos/index.md)

### 3. Componentes (UI)

São as peças de UI construídas com Vue.js que consomem os Design Tokens e Estilos. Eles são a principal forma de interação do desenvolvedor com o Design System.

- **Localização**: `libs/ui/src/components/`
- **Exemplo**: `BaseButton/index.vue`
- **Guia Detalhado**: [Componentes: Visão Geral](./componentes/index.md)
