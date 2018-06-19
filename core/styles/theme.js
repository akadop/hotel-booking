const white = '#FFFFFF';
const black = '#000000';
const navy = '#070326';
const placeholder = '#A3AFBF';
const purple = '#540CFA';

const neutrals = {
  n100: '#FAFBFC',
  n300: '#D8DDE1',
  n500: '#9DA7B1',
  n700: '#5C656F',
  n900: '#0F131A'
};

const state = {
  error: '#EC392F',
  valid: '#1CB14B'
};

export const colors = {
  white,
  black,
  navy,
  placeholder,
  purple,
  ...neutrals,
  ...state
};

export const borderRadius = {
  button: '4px',
  image: '6px',
  default: '8px'
};

export const boxShadow = {
  button: '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
  default: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
  image: '0 10px 20px 0 rgba(0, 0, 0, 0.15)'
};

export const fontWeight = {
  regular: '400',
  medium: '500',
  black: '700'
};

export const transitions = {
  default: '200ms ease-in-out',
  curve: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
};

export const zIndex = {
  default: 0,
  absolute: 1,
  select: 30,
  tooltip: 31
};

export default {
  borderRadius,
  boxShadow,
  colors,
  transitions,
  zIndex
};
