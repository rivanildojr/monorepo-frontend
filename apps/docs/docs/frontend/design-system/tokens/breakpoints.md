# Design Tokens: Breakpoints

Os breakpoints definem os pontos de quebra para o design responsivo, garantindo que a aplicação se adapte a diferentes tamanhos de tela.

## 1. Breakpoints Padrão

Utilizamos a convenção de breakpoints inspirada no Bootstrap, focando em **mobile-first**.

| Nome (TS) | Valor (px) | Valor (rem) | Descrição                                      |
| :-------- | :--------- | :---------- | :--------------------------------------------- |
| `xs`      | 0          | 0           | Inicial.                                       |
| `sm`      | 576px      | 36rem       | Pequenos dispositivos (telefones em paisagem). |
| `md`      | 768px      | 48rem       | Dispositivos médios (tablets).                 |
| `lg`      | 992px      | 62rem       | Dispositivos grandes (desktops pequenos).      |
| `xl`      | 1200px     | 75rem       | Dispositivos extra grandes (desktops).         |
| `xxl`     | 1400px     | 87.5rem     | Dispositivos ultra grandes (monitores 4K).     |

## 2. Uso em TypeScript (JavaScript)

Em TypeScript, os breakpoints são usados principalmente para lógica de renderização condicional.

```typescript
// Exemplo de uso em um componente Vue
import { useTheme } from '@monorepo-frontend/core';

const theme = useTheme();

const isMobile = computed(() => width.value < theme.breakpoints.sm);
```

## 3. Uso no SCSS (Mixins)

Em SCSS, os breakpoints são utilizados através de mixins que encapsulam a lógica da media query.

### Mixin `breakpoint: small`

Aplica estilos **a partir** do breakpoint definido.

```scss
// Exemplo de uso
.sidebar {
  display: block;

  @include small {
    display: none;
  }
}
```
