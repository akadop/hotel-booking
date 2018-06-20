import styled from 'react-emotion';

const GoopWrapper = styled('div')`
  width: 100%;
  align-self: flex-end;
  > span {
    line-height: 0;
    display: block;
    width: 100%;
    > svg {
      fill: ${props => props.theme.colors.n100};
      > path {
        transform: ${props => props.flip && 'translate(1200 112) rotate(-180)'};
      }
    }
  }
`;

// i don't know what you call the svg designs that are irregularly shaped, so i call them goops
export default ({ goop, flip }) => {
  return (
    <GoopWrapper>
      <span>
        <svg fillRule="evenodd" width="100%" height="100%" viewBox="0 0 1200 110">
          <use xlinkHref={goop} />
        </svg>
      </span>
    </GoopWrapper>
  );
};
