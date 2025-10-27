# Qualidade de Código: Stylelint

## Stylelint (Linting de Estilos)

O Stylelint é a ferramenta dedicada a garantir a qualidade e consistência do nosso SCSS/CSS.

### Configuração

O arquivo `.stylelintrc.js` na raiz define as regras.

- **`stylelint-config-standard-scss`**: Regras padrão para SCSS.
- **`stylelint-order`**: **Plugin crucial** que garante a ordem das propriedades CSS.

### Ordem de Propriedades (Customizada)

Implementamos uma ordem customizada para melhorar a legibilidade:

1. **Display** (`display`, `flex`, `grid`)
2. **Posicionamento** (`position`, `top`, `left`, `z-index`)
3. **Box Model** (`width`, `height`, `padding`, `border`, `margin`)
4. **Cores & Tipografia** ( `background`, `color`, `font-size`)
5. **Outros** (`transform`, `transition`, `cursor`)

Essa ordem é aplicada automaticamente pelo comando `pnpm lint:fix`.
