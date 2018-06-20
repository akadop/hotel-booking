import { BREAKPOINTS, fromBreakpoint } from '../../core/styles';
import styled, { css } from 'react-emotion';

export const Grid = styled.div`
  align-self: center;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: auto;
  overflow-x: hidden;
  width: 100vw;
  padding: ${props => (props.isIntro && '8vh 8vw 8vh') || '4vh 8vw 4vh'};
  max-width: 1280px;
  ${fromBreakpoint(BREAKPOINTS.DESKTOP)(css`
    align-items: center;
    overflow-x: hidden;
  `)};
`;

export const GridBody = styled.div`
  grid-column: 1 / span 24;
  grid-row: 4;
  ${fromBreakpoint(BREAKPOINTS.TABLET)(css`
    grid-column: 1 / span 18;
  `)};
  ${fromBreakpoint(BREAKPOINTS.DESKTOP)(css`
    grid-column: 1 / span 12;
  `)};
`;

export const Content = styled.div`
  grid-column: 1 / span 24;
  grid-row: 2;
`;

export const Columns = styled.div`
  max-width: 70ch;
  margin-bottom: 2em;
`;

export const ContentWrapper = styled.div`
  margin: 80px auto 0;
  flex: auto;
`;

export const TitleWrapper = styled.div`
  grid-column: 1 / span 16;
  grid-row: 3;
`;

export const Text = styled.p`
  text-transform: lowercase;
  line-height: 1.35;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  ${fromBreakpoint(BREAKPOINTS.DESKTOP)(css`
    font-size: 20px;
  `)};
`;
