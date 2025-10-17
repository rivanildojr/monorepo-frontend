import { IconName, IconSize } from '../types';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  rotation?: 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical' | 'both';
  spin?: boolean;
  pulse?: boolean;
}
