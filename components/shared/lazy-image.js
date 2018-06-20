import { BREAKPOINTS, fromBreakpoint } from '../../core/styles';
import styled, { css, keyframes } from 'react-emotion';

import { ImagePlaceholder } from './placeholders';
import Observer from 'react-intersection-observer';
import { PureComponent } from 'react';

const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Image = styled.img`
  animation-delay: 0.2s;
  animation: ${({ animate }) => (animate ? fadeIn : '')} 0.4s linear forwards;
  border-radius: ${props => props.theme.borderRadius.image};
  box-shadow: ${props => props.theme.boxShadow.image};
  margin-bottom: 1em;
  opacity: 0;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 110px);
  justify-content: center;
  width: 100%;

  ${from(BREAKPOINTS.DESKTOP)(css`
    grid-template-columns: repeat(auto-fill, 180px);
  `)};
`;

export default class LazyImage extends PureComponent {
  state = {
    loaded: false
  };

  handleChange = inView => {
    if (inView) {
      const img = new window.Image();

      img.src = this.props.src;

      img.onload = () => {
        this.setState({ loaded: true });
      };
    }
  };

  render() {
    return (
      <Observer onChange={this.handleChange}>
        {this.state.loaded ? (
          <Image src={this.props.src} animate={this.state.loaded} />
        ) : (
          <ImagePlaceholder />
        )}
      </Observer>
    );
  }
}
