# Componentes: Visão Geral

Os componentes são os blocos de construção da nossa interface de usuário. Eles são definidos na biblioteca **`libs/ui`** e são a principal forma de interação do desenvolvedor com o Design System.

## 1. Princípios de Componentização

Todos os componentes em `libs/ui` seguem os seguintes princípios:

- **Reutilização**: Devem ser genéricos o suficiente para serem usados em qualquer `app` do monorepo.
- **Atomic Design**: Focamos em construir **Átomos** (ex: `BaseButton`), **Moléculas** (ex: `InputGroup`) e **Organismos** (ex: `LoginForm`).
- **Testabilidade**: Devem ser fáceis de testar de forma isolada (testes unitários com Vitest).
- **Documentação**: Devem ser documentados no Storybook e no VitePress.
- **Slots**: Preferência por slots para conteúdo flexível.

## 2. Estrutura de Componentes

Cada componente deve ser um diretório auto-contido em `libs/ui/src/components/` e deve incluir:

```markdown
libs/ui/src/components/
├── ComponentName/
│ ├── index.vue ← Template e lógica principal
│ ├── ComponentName.spec.ts ← Testes unitários
└── index.ts ← Exporta o componente
```

```markdown
apps/storybook/src/stories/ui/
├── ComponentName/
│ ├── index.stories.ts ← Documentação do componente no storybook
```

```markdown
apps/docs/docs/frontend/design-system/componentes/
├── componentName.md/ ← Documentação do componente nessa documentação
```

## 3. Componentes Base (`Base*`)

Componentes prefixados com `Base` são os átomos mais simples e fundamentais (ex: `BaseButton`, `BaseInput`, `BaseCard`).

- **Função**: Encapsular elementos HTML nativos e aplicar os Design Tokens e estilos.
- **Uso**: Devem ser usados diretamente em todos os outros componentes e páginas.

## 4. Componentes Compostos

Componentes que combinam múltiplos `Base*` ou outros componentes (ex: `InputGroup`, `UserProfileCard`).

- **Função**: Implementar padrões de UI mais complexos.
- **Uso**: Devem ser usados em páginas e layouts.

## 5. Como Contribuir

1. **Crie a pasta** do novo componente em `libs/ui/src/components/`.
2. **Crie os 4 arquivos** essenciais (`.vue`, `.spec.ts`).
3. **Exporte** o componente no `libs/ui/src/index.ts`.
4. **Documente** o componente no Storybook com todas as suas variações.
5. **Documente** o componente nessa documentação.
6. **Garanta** 100% de cobertura de testes unitários.

## 6. Exemplo Detalhado: BaseButton

O `BaseButton` é um exemplo perfeito de como um componente deve ser construído. Ele encapsula o elemento `<button>` e adiciona:

- **Props**: `variant`, `size`, `loading`, `disabled`, `icon`.
- **Estilos**: Consome tokens de cor e espaçamento.
- **Acessibilidade**: Lida com estados `disabled` e `loading`.

Mais detalhes sobre o `BaseButton` podem ser encontrados no Storybook e no guia específico.
