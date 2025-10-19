/**
 * Design Tokens - Cores
 *
 * Fonte única de verdade para cores do projeto.
 * Usado tanto em SCSS quanto em JavaScript.
 */

export const colors = {
  // Cores primárias
  primary: {
    100: '#00b389',
    90: '#00f5bc',
    80: '#38ffd0',
    70: '#7bffe0',
    60: '#bdffef',
  },

  // Cores secundárias
  secondary: {
    100: '#006b5c',
    90: '#00bca1',
    80: '#0dffdd',
    70: '#5effe8',
    60: '#aefff4',
  },

  // Escala de cinzas
  gray: {
    '00': '#fff',
    '05': '#f6f7f8',
    10: '#d9d9d9',
    20: '#c6c6c6',
    30: '#b4b4b4',
    40: '#a2a2a2',
    50: '#909090',
    60: '#7f7f7f',
    70: '#6e6e6e',
    80: '#5d5d5d',
    90: '#4d4d4d',
    100: '#3e3e3e',
    110: '#2f2f2f',
    120: '#212121',
  },

  // Cores de status
  // Sucesso
  success: {
    100: '#53ae57',
  },

  // Erro
  error: {
    130: '#651a16',
    100: '#e02525',
  },

  // Alerta
  warning: {
    130: '#806402',
    100: '#ebbb0f',
    70: '#fff4cc',
  },

  // Informação
  info: {
    100: '#0a4eb3',
  },

  // Cores CV Magic
  // Primária
  magicPrimary: {
    100: '#583073',
    30: '#6d62b1',
  },

  // Secundária
  magicSecondary: {
    100: '#84b3f4',
    30: '#c6e5ff',
  },

  // Cores de Módulos
  modules: {
    vendas: '#308978',
    marketing: '#f0555d',
    atendimento: '#da922c',
    relacionamento: '#0a73b3',
    operacoes: '#5a5692',
  },
} as const;

// Tipagem TypeScript
export type Colors = keyof typeof colors;
export type Primary = keyof typeof colors.primary;
export type Secondary = keyof typeof colors.secondary;
export type Gray = keyof typeof colors.gray;
export type Success = keyof typeof colors.success;
export type Warning = keyof typeof colors.warning;
export type Error = keyof typeof colors.error;
export type Info = keyof typeof colors.info;
export type MagicPrimaria = keyof typeof colors.magicPrimary;
export type MagicSecundaria = keyof typeof colors.magicSecondary;
export type Modules = keyof typeof colors.modules;
