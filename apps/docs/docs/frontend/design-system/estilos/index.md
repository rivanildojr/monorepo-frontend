# Estilos: Visão Geral

A gestão de estilos no projeto é centralizada na biblioteca `libs/styles` e utiliza **SASS** como pré-processador, seguindo a metodologia **ITCSS (Inverted Triangle CSS)** para garantir organização e escalabilidade.

## 1. SASS como Pré-processador

Utilizamos SASS por suas funcionalidades avançadas que facilitam a escrita de CSS em projetos grandes:

- **Variáveis**: Para reutilizar Design Tokens.
- **Mixins**: Para encapsular estilos reutilizáveis (ex: `flex-center`, `small`).
- **Funções**: Para lógica de estilo (ex: `convertPxtoRem`).
- **@use**: Para importar módulos de forma segura e eficiente.

## 2. Metodologia ITCSS

A arquitetura ITCSS (detalhada em [ITCSS: Arquitetura ITCSS](itcss.md)) é a espinha dorsal da nossa organização de estilos.

### 2.1. Configuração de Ordem de Propriedades

Para garantir a legibilidade e manutenibilidade, utilizamos o **Stylelint** com o plugin **`stylelint-order`** para ordenar automaticamente as propriedades CSS/SCSS em todos os arquivos.

**Ordem Aplicada:**

1. **Display, Flexbox e Grid** (`display`, `flex`, `grid`)
2. **Posicionamento** (`position`, `top`, `left`, `z-index`)
3. **Box Model** (`width`, `height`, `padding`, `border`, `margin`, `overflow`)
4. **Cores e Tipografia** (`background`, `color`, `font-size`)
5. **Outros** (`visibility`, `transform`, `transition`, `cursor`)

Essa ordem é aplicada automaticamente no `pre-commit` via Husky e lint-staged.

## 3. Design Tokens (Variáveis)

Todas as variáveis de estilo (cores, espaçamentos, tipografia) são definidas em **TypeScript** e geradas para SCSS.

- **TypeScript**: Fonte única de verdade para os tokens.
- **SCSS**: Consome os arquivos gerados para uso nos estilos.

Isso garante que as variáveis estejam disponíveis tanto no CSS (para estilos) quanto no JavaScript (para lógica e estilos dinâmicos).

## 4. Estrutura de Pastas

A pasta `libs/styles/src/` é dividida em:

| Pasta                  | Camada ITCSS | Conteúdo                                                           |
| :--------------------- | :----------- | :----------------------------------------------------------------- |
| `1-settings`           | Settings     | Variáveis SCSS geradas a partir dos tokens TS.                     |
| `2-tools`              | Tools        | Mixins e funções globais.                                          |
| `3-generic`            | Tools        | Estilos genericos e reset CSS.                                     |
| `4-elements`           | Tools        | Estilos aplicados diretamente nos elementos.                       |
| `5-objects`            | Tools        | Estilos base dos componentes.                                      |
| `6-components`         | Components   | Estilos específicos para componentes de `libs/ui`.                 |
| `7-trumps`             | Tools        | Classes utilitárias com !important.                                |
| `scrips`               | Tools        | Script para gerar os tokens em SCSS.                               |
| `tokens`               | Tools        | Tokens de design criados em TS.                                    |
| `components-only.scss` | Tools        | Importação apenas dos estilos base e componentes.                  |
| `core.scss`            | Tools        | Importação do core da aplicação, apenas as 3 primeiras estruturas. |
| `main.scss`            | Tools        | Importação de toda a estrutura ITCSS.                              |
| `settings.scss`        | Tools        | Importação apenas dos tokens.                                      |
| `tools.scss`           | Tools        | Importação apenas dos mixins e funções.                            |
