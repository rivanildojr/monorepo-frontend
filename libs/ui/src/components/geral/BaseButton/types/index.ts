import type { IconName, IconSize } from '@monorepo-frontend/icons';

export type Button = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'gost' | 'txt';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: IconSize;
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  hideText?: boolean;
};
