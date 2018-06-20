import { css } from 'react-emotion';

export const BREAKPOINTS = {
  MOBILE: 'mobile',
  MOBILE_BIGGER: 'mobileBigger',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
  DESKTOP_FULL: 'desktopFull'
};

export const BREAKPOINT_VALUES = {
  mobile: 360,
  mobileBigger: 576,
  tablet: 768,
  desktop: 992,
  desktopFull: 1200
};

export const fromBreakpoint = breakpoint => {
  const breakpointPx = BREAKPOINT_VALUES[breakpoint];
  const ems = breakpointPx / 16;
  return (...args) => css`
    @media (min-width: ${ems}em) {
      ${args}
    };
  `;
};
