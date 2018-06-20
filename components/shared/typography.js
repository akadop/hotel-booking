import { BREAKPOINTS, fromBreakpoint } from '../../core/styles';
import styled, { css } from 'react-emotion';

export const Title = styled.h1`
  font-size: 13vw;
  line-height: 1.1;
  letter-spacing: -1.4px;
  margin-bottom: 0.2em;
  ${fromBreakpoint(BREAKPOINTS.TABLET)(css`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
  `)};
`;

export const P = styled.p`
  color: ${props => props.theme.colors.n900};
  line-height: 1.25;
  font-size: 0.9em;
  &:last-child {
    margin: 0.5em 0 1em 0;
  }
  ${fromBreakpoint(BREAKPOINTS.DESKTOP)(css`
    font-size: 1em;
  `)};
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.n900};
  line-height: 1.5;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  ${fromBreakpoint(BREAKPOINTS.DESKTOP)(css`
    font-size: 20px;
  `)};
`;
