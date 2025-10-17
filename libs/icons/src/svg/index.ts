// Importa o SVG como um componente Vue
import CvSignIcon from './cvsign/cvsign.svg?component';
import Vender from './vender/vender.svg?component';

// Mapeamento dos nomes dos icones para os componentes
export const svgs = {
  'cvsign-icon': CvSignIcon,
  'vender-icon': Vender,
} as const;

export type SvgIcon = keyof typeof svgs;

// Listagem dos icones disponiveis
export const svgIcons = Object.keys(svgs) as SvgIcon[];
