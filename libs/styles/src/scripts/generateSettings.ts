// libs/styles/scripts/generate-scss.ts

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { borderRadius, border } from '../tokens/borders.js';
import { breakpoints } from '../tokens/breakpoints.js';
import { colors } from '../tokens/colors.js';
import { shadows } from '../tokens/shadows.js';
import { spacing } from '../tokens/spacing.js';
import { typography } from '../tokens/typography.js';
import { zIndex } from '../tokens/z-index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = resolve(__dirname, '../1-settings');

mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * Comentário de alerta nos arquivos gerados automaticamente
 */
function addWarning(content: string): string {
  return `// ARQUIVO GERADO AUTOMATICAMENTE - NÃO EDITAR MANUALMENTE APENAS VIA SCRIPT
// Gerado a partir do script: libs/styles/scripts/generateSettings.ts
// Para modificar, edite os tokens TypeScript e execute: pnpm generate:settings

${content}
  `;
}

/**
 * Gerar _breakpoints.scss
 */
function generateBordersScss(): string {
  let scss = '// Borders Radius\n';

  Object.entries(borderRadius).forEach(([key, value]) => {
    scss += `$border-radius-${key}: ${value};\n`;
  });

  scss += '\n// Borders\n';

  Object.entries(border).forEach(([key, value]) => {
    scss += `$border-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _breakpoints.scss
 */
function generateBreakpointsScss(): string {
  let scss = '// Breakpoints\n';

  Object.entries(breakpoints).forEach(([key, value]) => {
    scss += `$breakpoint-${key}: ${value}px;\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _colors.scss
 */
function generateColorsScss(): string {
  let scss = '// Cores do projeto\n\n';

  // Cores primárias
  scss += '// Cores primárias\n';

  Object.entries(colors.primary).forEach(([key, value]) => {
    scss += `$cor-marca-primaria-${key}: ${value};\n`;
  });

  scss += '\n';

  // Cores secundárias
  scss += '// Cores secundárias\n';

  Object.entries(colors.secondary).forEach(([key, value]) => {
    scss += `$cor-marca-secundaria-${key}: ${value};\n`;
  });

  scss += '\n';

  // Cores cinzas
  scss += '// Cores cinzas\n';

  Object.entries(colors.gray).forEach(([key, value]) => {
    scss += `$cor-cinza-matiz-${key}: ${value};\n`;
  });

  scss += '\n';

  //  Cores de status
  scss += '//  Cores de status\n';

  // Sucesso
  scss += '// Sucesso\n';

  Object.entries(colors.success).forEach(([key, value]) => {
    scss += `$cor-retorno-sucesso-${key}: ${value};\n`;
  });

  scss += '\n';

  // Erro
  scss += '// Erro\n';

  Object.entries(colors.error).forEach(([key, value]) => {
    scss += `$cor-retorno-erro-${key}: ${value};\n`;
  });

  scss += '\n';

  // Alerta
  scss += '// Alerta\n';

  Object.entries(colors.warning).forEach(([key, value]) => {
    scss += `$cor-retorno-alerta-${key}: ${value};\n`;
  });

  scss += '\n';

  // Informação
  scss += '// Informação\n';

  Object.entries(colors.info).forEach(([key, value]) => {
    scss += `$cor-retorno-informacao-${key}: ${value};\n`;
  });

  scss += '\n';

  // Cores CV Magic
  scss += '// Cores CV Magic\n';

  // Primária
  scss += '// Primária\n';

  Object.entries(colors.magicPrimary).forEach(([key, value]) => {
    scss += `$cor-magic-primaria-${key}: ${value};\n`;
  });

  scss += '\n';

  // Secundária
  scss += '// Secundária\n';

  Object.entries(colors.magicSecondary).forEach(([key, value]) => {
    scss += `$cor-magic-secundaria-${key}: ${value};\n`;
  });

  scss += '\n';

  // Cores de Módulos
  scss += '// Cores de Módulos\n';

  Object.entries(colors.modules).forEach(([key, value]) => {
    scss += `$cor-solucao-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _shadows.scss
 */
function generateShadowsScss(): string {
  let scss = '// Shadows\n';

  Object.entries(shadows).forEach(([key, value]) => {
    scss += `$shadow-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _spacing.scss
 */
function generateSpacingScss(): string {
  let scss = '// Sistema de espaçamento\n';

  Object.entries(spacing).forEach(([key, value]) => {
    scss += `$spacing-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _typography.scss
 */
function generateTypographyScss(): string {
  let scss = '// Tipografia\n';

  // Font families
  scss += '// Font families\n';

  Object.entries(typography.fontFamily).forEach(([key, value]) => {
    scss += `$font-family-${key}: ${value};\n`;
  });

  scss += '\n';

  // Font sizes
  scss += '// Font sizes\n';

  Object.entries(typography.fontSize).forEach(([key, value]) => {
    scss += `$font-size-${key}: ${value};\n`;
  });

  scss += '\n';

  // Font weights
  scss += '// Font weights\n';

  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    scss += `$font-weight-${key}: ${value};\n`;
  });

  scss += '\n';

  // Line heights
  scss += '// Line heights\n';

  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    scss += `$line-height-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Gerar _z-index.scss
 */
function generateZIndexScss(): string {
  let scss = '// Z-index\n';

  Object.entries(zIndex).forEach(([key, value]) => {
    scss += `$z-index-${key}: ${value};\n`;
  });

  return addWarning(scss);
}

/**
 * Executar geração
 */
function main() {
  console.log('Iniciando a geração do arquivo. \n');

  try {
    // Gerar _borders.scss
    const bordersScss = generateBordersScss();
    writeFileSync(resolve(OUTPUT_DIR, '_borders.scss'), bordersScss, 'utf-8');
    console.log('_borders.scss foi gerado.');

    // Gerar _breakpoints.scss
    const breakpointsScss = generateBreakpointsScss();
    writeFileSync(
      resolve(OUTPUT_DIR, '_breakpoints.scss'),
      breakpointsScss,
      'utf-8',
    );
    console.log('_breakpoints.scss foi gerado.');

    // Gerar _colors.scss
    const colorsScss = generateColorsScss();
    writeFileSync(resolve(OUTPUT_DIR, '_colors.scss'), colorsScss, 'utf-8');
    console.log('_colors.scss foi gerado.');

    // Gerar _shadows.scss
    const shadowsScss = generateShadowsScss();
    writeFileSync(resolve(OUTPUT_DIR, '_shadows.scss'), shadowsScss, 'utf-8');
    console.log('_shadows.scss foi gerado.');

    // Gerar _spacing.scss
    const spacingScss = generateSpacingScss();
    writeFileSync(resolve(OUTPUT_DIR, '_spacing.scss'), spacingScss, 'utf-8');
    console.log('_spacing.scss foi gerado.');

    // Gerar _typography.scss
    const typographyScss = generateTypographyScss();
    writeFileSync(
      resolve(OUTPUT_DIR, '_typography.scss'),
      typographyScss,
      'utf-8',
    );
    console.log('_typography.scss foi gerado.');

    // Gerar _z-index.scss
    const zIndexScss = generateZIndexScss();
    writeFileSync(resolve(OUTPUT_DIR, '_z-index.scss'), zIndexScss, 'utf-8');
    console.log('_z-index.scss foi gerado.');

    console.log('\n Arquivos SCSS foram gerados com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar arquivos SCSS:', error);
    process.exit(1);
  }
}

// Executar geração dos arquivos
main();
