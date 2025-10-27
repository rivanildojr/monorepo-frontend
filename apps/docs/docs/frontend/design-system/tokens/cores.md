# Design Tokens: Cores

Os Design Tokens de cores são a **fonte única de verdade** para a paleta de cores de todas as aplicações. Eles são definidos em TypeScript e gerados automaticamente para SCSS.

## 1. Estrutura Geral

Os tokens são organizados por categoria de cor, e dentro de cada categoria, há níveis de intensidade (ex: 100, 90, 80...).
Essa estrutura facilita a criação de escalas e o uso de variações tonais coerentes em toda a interface.

```typescript
export const colors = {
  primary: {
    100: '#00b389',
    90: '#00f5bc',
    // ...
  },
  gray: {
    00: '#ffffff',
    10: '#d9d9d9',
    // ...
  },
  // ...
} as const;
```

## 2. Paleta de Cores

### 2.1. Cores Primárias

| Nome (TS) | Nivel | Valor     | Uso                                         |
| :-------- | :---- | :-------- | :------------------------------------------ |
| `primary` | `100` | `#00b389` | Cor principal da marca.                     |
| `primary` | `90`  | `#00f5bc` | Destaques sobre fundos escuros.             |
| `primary` | `80`  | `#38ffd0` | Estados de foco ou hover.                   |
| `primary` | `70`  | `#7bffe0` | Variações suaves ou backgrounds claros.     |
| `primary` | `60`  | `#bdffef` | Tons complementares ou superfícies neutras. |

### 2.1. Cores Secundárias

| Nome (TS)   | Nivel | Valor     | Uso                               |
| :---------- | :---- | :-------- | :-------------------------------- |
| `secondary` | `100` | `#006b5c` | Ações ou componentes secundários. |
| `secondary` | `90`  | `#00bca1` | Estados de hover.                 |
| `secondary` | `80`  | `#0dffdd` | Estados ativos.                   |
| `secondary` | `70`  | `#5effe8` | Fundos leves.                     |
| `secondary` | `60`  | `#aefff4` | Bordas e divisores sutis.         |

### 2.2. Escala de Cinzas

| Nome (TS) | Nivel | Valor     | Uso                                            |
| :-------- | :---- | :-------- | :--------------------------------------------- |
| `gray`    | `00`  | `#ffffff` | Fundo principal, texto em superfícies escuras. |
| `gray`    | `05`  | `#f6f7f8` | Fundo de painéis claros.                       |
| `gray`    | `10`  | `#d9d9d9` | Bordas e divisores.                            |
| `gray`    | `50`  | `#909090` | Texto secundário.                              |
| `gray`    | `90`  | `#4d4d4d` | Texto principal.                               |
| `gray`    | `120` | `#212121` | Fundo escuro.                                  |

## 4. Cores de Status

| Nome (TS) | Nivel | Valor     | Uso                                          |
| :-------- | :---- | :-------- | :------------------------------------------- |
| `success` | `100` | `#53ae57` | Estados de sucesso, confirmações.            |
| `error`   | `130` | `#651a16` | Tons escuros para ícones e alertas críticos. |
| `error`   | `100` | `#e02525` | Erros e ações destrutivas.                   |
| `Warning` | `130` | `#806402` | Alertas fortes.                              |
| `Warning` | `100` | `#ebbb0f` | Mensagens de aviso.                          |
| `Warning` | `70`  | `#fff4cc` | Fundos de alerta suave.                      |
| `Info`    | `100` | `#0a4eb3` | Informações neutras e comunicados.           |

## 4. Cores CV Magic

Essas cores são específicas para a identidade visual CV Magic.

### 4.1. Primárias

| Nome (TS)      | Nivel | Valor     | Uso                                       |
| :------------- | :---- | :-------- | :---------------------------------------- |
| `magicPrimary` | `100` | `#583073` | Cor institucional principal.              |
| `magicPrimary` | `30`  | `#6d62b1` | Variações para gradientes e fundos leves. |

### 4.2. Secundárias

| Nome (TS)        | Nivel | Valor     | Uso                                |
| :--------------- | :---- | :-------- | :--------------------------------- |
| `magicSecondary` | `100` | `#84b3f4` | Elementos de apoio e ícones.       |
| `magicSecondary` | `30`  | `#c6e5ff` | Tons de fundo, hover e gradientes. |

## 4. Cores de Módulos

Cada módulo da aplicação possui uma cor associada:

| Nome (TS)                | Módulo           | Valor     |
| :----------------------- | :--------------- | :-------- |
| `modules.vendas`         | `Vendas`         | `#308978` |
| `modules.marketing`      | `Marketing`      | `#f0555d` |
| `modules.atendimento`    | `Atendimento`    | `#da922c` |
| `modules.relacionamento` | `Relacionamento` | `#0a73b3` |
| `modules.operacoes`      | `Operações`      | `#5a5692` |
