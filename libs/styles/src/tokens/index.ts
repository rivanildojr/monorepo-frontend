export * from './borders.js';
export * from './breakpoints.js';
export * from './colors.js';
export * from './shadows.js';
export * from './spacing.js';
export * from './typography.js';
export * from './z-index.js';

import { borderRadius, border } from './borders.js';
import { breakpoints } from './breakpoints.js';
import { colors } from './colors.js';
import { shadows } from './shadows.js';
import { spacing } from './spacing.js';
import { typography } from './typography.js';
import { zIndex } from './z-index.js';

export const tokens = {
  borderRadius,
  border,
  breakpoints,
  colors,
  shadows,
  spacing,
  typography,
  zIndex,
};
