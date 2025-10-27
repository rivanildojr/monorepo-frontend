# Estilos: Arquitetura ITCSS

Nossa arquitetura de estilos é baseada na metodologia **ITCSS (Inverted Triangle CSS)**, que organiza o código SCSS em camadas de especificidade crescente.

## 📐 O Triângulo Invertido

O ITCSS organiza o código em camadas que se movem de baixa especificidade (topo do triângulo) para alta especificidade (base do triângulo).

| Camada            | Especificidade | Conteúdo                                           | Exemplo                                                    |
| :---------------- | :------------- | :------------------------------------------------- | :--------------------------------------------------------- |
| **1. Settings**   | Baixa          | Variáveis globais.                                 | `$font-size-md`                                            |
| **2. Tools**      | Baixa          | Mixins e funções globais.                          | `@mixin cv-flex-center`                                    |
| **3. Generic**    | Baixa          | Estilos de reset, normalize e box-sizing.          | `*, *::before, *::after { box-sizing: border-box; }`       |
| **4. Elements**   | Média          | Estilos de elementos HTML puros (sem classes).     | `body { font-family: ... }`, `a { text-decoration: none }` |
| **5. Objects**    | Média          | Estruturas de layout e padrões de design sem skin. | `.container`, `.grid`                                      |
| **6. Components** | Alta           | Componentes de UI específicos e reutilizáveis.     | `.cv-button`, `.cv-card`, `.cv-modal`                      |
| **7. Trumps**     | Alta           | Classes utilitárias com `!important` (opcional).   | `.cv-none`, `.cv-hide`                                     |

## 📁 Estrutura de Pastas (`libs/styles`)

A estrutura de pastas reflete as camadas do ITCSS:

```markdown
libs/styles/src/
├── 1-settings/
├── 2-tools/
├── 3-generic/
├── 4-elements/
├── 5-objects/
├── 6-components/
└── 7-trumps/
```

## 🛠️ Como Usar (SCSS)

A importação é feita utilizando a regra `@use` do SASS, permitindo que cada app ou componente importe apenas o que precisa.

### 1. Importação em Componentes Vue

Em um componente Vue (`BaseButton.vue`), você importa apenas as camadas necessárias:

```scss
// BaseButton.vue <style lang="scss">
@use '@monorepo-frontend/styles/components-only' as *;

.button {
  // ...
}
```

### 2. Importação em Arquivos Globais (ex: `main.scss`)

O arquivo principal de estilos importa todas as camadas na ordem correta:

```scss
// main.scss (na ordem do ITCSS)
@forward '1-settings';
@forward '2-tools';
@forward '3-generic';
@forward '4-elements';
@forward '5-objects';
@forward '6-components';
@forward '7-trumps';
```

## 💡 Vantagens do ITCSS

- **Escalabilidade**: A ordem de especificidade evita conflitos de CSS.
- **Manutenibilidade**: É fácil saber onde procurar ou adicionar um estilo.
- **Performance**: O uso de `@use` e a modularidade permitem um melhor tree-shaking de estilos.
- **Consistência**: Todos os desenvolvedores seguem a mesma estrutura.
