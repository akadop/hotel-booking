import { colors, fontWeight } from './theme';
import {
  fontGlobalStyle,
  imagesGlobalStyle,
  linksGlobalStyle
} from './elements';
import { normalize, reset } from './generic';

import { injectGlobal } from 'react-emotion';

const globalStyle = `
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    font: 400 18px/1.7 Cereal,-apple-system,BlinkMacSystemFont,Arial,sans-serif;
    color: ${colors.n900};
    overflow-wrap: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.black};
    font-weight: ${fontWeight.black};
  }

  h2 {
    font: 700 1.75rem/1.1 Cereal, -apple-system, BlinkMacSystemFont, Arial,
      sans-serif;
  }

  h3 {
    font: 700 1.5rem/1.1 Cereal, -apple-system, BlinkMacSystemFont, Arial,
      sans-serif;
  }

  p {
    font-size: 1em;
  }

  *:focus {
    outline: none;
  }

  input {
    &:-ms-input-placeholder,
    &:-moz-placeholder,
    &::-webkit-input-placeholder,
    &::-moz-placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
    &:focus {
      padding: 24px 16px 8px 16px;
    }
    &::-moz-focus-inner {
      border-style: none;
    }
  }
`;

const injectGlobalStyles = () =>
  injectGlobal([
    normalize,
    reset,
    fontGlobalStyle,
    globalStyle,
    imagesGlobalStyle,
    linksGlobalStyle
  ]);

export default injectGlobalStyles;
