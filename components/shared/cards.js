import { BREAKPOINTS, fromBreakpoint } from '../../core/styles';
import styled, { css } from 'react-emotion';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  transition-duration: 0.15s;
  flex: 1 0 33%;
  cursor: pointer;
  padding: 1.175rem;
  transition-property: color, background-color, box-shadow, transform;
  ${fromBreakpoint(BREAKPOINTS.TABLET)(css`
    &:hover {
      box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px, rgba(0, 0, 0, 0.1) 0px 8px 36px;
    }
  `)};
  &:before {
    content: ' ';
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    transform: scaleY(0);
    transform-origin: center bottom 0px;
    width: 100%;
    z-index: -1;
    transition: transform ${props => props.theme.transitions.curve} 2s;
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: rgba(200, 222, 246, 0.25) none repeat scroll 0% 0%;
    left: -100vw;
    right: -100vw;
    bottom: 0px;
    position: absolute;
  }
`;

export const InnerCardWrapper = styled.div`
  max-width: 70ch;
  :before {
    content: ' ';
    width: 1px;
    top: 0px;
    bottom: 0px;
    position: absolute;
    background: rgba(200, 222, 246, 0.25) none repeat scroll 0% 0%;
    right: 0px;
    left: auto;
  }
  :after {
    content: ' ';
    width: 1px;
    top: 0px;
    bottom: 0px;
    position: absolute;
    background: rgba(200, 222, 246, 0.25) none repeat scroll 0% 0%;
    left: 0px;
  }
`;
