import type { FontAwesomeIcon } from '@/icons/fontawesome/icons';
import type { SvgIcon } from '@/icons/svg';
import { iconsSize } from '@/icons/constants';

// Define o tipo de nome de icone que pode ser usado
export type IconName =
  | FontAwesomeIcon
  | SvgIcon
  | `fa:${FontAwesomeIcon}`
  | `fab:${string}`
  | `far:${string}`
  | `svg:${SvgIcon}`;

// Define o tipo de tamanho de icone que pode ser usado
export type IconSize = (typeof iconsSize)[number] | string;
