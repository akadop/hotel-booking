import styled from 'react-emotion';

export default styled.main`
  display: flex;
  background: ${props => props.theme.colors.white};
  flex: auto;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
